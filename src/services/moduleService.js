const Course = require('../models/moduleModel');


exports.getAllModules = async () => {
  return await Module.findAll();
};

exports.getModuleById = async (moduleId) => {
  return await Module.findByPk(moduleId);
};

exports.createModule = async (moduleData) => {
  return await Module.create(moduleData);
};

exports.updateModule = async (moduleId, moduleData) => {
  const module = await Module.findByPk(moduleId);
  if (module) {
    await module.update(moduleData);
    return module;
  }
  return null;
};

exports.deleteModule = async (moduleId) => {
  const module = await Module.findByPk(moduleId);
  if (module) {
    await module.destroy();
    return module;
  }
  return null;
};
