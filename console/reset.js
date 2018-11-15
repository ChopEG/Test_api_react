const {
  logger,
} = require('../base');

const projects = require('./data/projects');
const {
  dbService,
} = require('../base');

const {
  projectService,
  contractorService,
} = require('../services');

const {
  Contractor,
  Project,
} = dbService.models;

const reset = async () => {
  await Contractor.deleteMany();
  await Project.deleteMany();
};

const createContractors = data => Promise.all(data.map(contractorService.create));

const createProject = async (
  {
    contractors: contractorsData,
    ...data
  },
) => {
  const contractors = await createContractors(contractorsData);
  return projectService.create({
    ...data,
    contractors: contractors.map(dbService.getId),
  });
};

const createProjects = data => Promise.all(data.map(createProject));

(async () => {
  try {
    await reset();
    await createProjects(projects);
  } catch (e) {
    logger.error(e);
  }

  process.exit();
})();
