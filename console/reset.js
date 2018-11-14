require('dotenv').config();

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

const createContractor = (data) => {
    return contractorService.create(data);
};

const createContractors = data => Promise.all(data.map(createContractor));

const createProject = async (
    {
        contractors: contractorsData,
        ...data
    }
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
        console.error(e);
    }

    process.exit();
})();
