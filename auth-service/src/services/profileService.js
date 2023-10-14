const Profile = require('../models/profileModel');

async function createProfile(profileData) {
    return Profile.create(profileData);
  }
  
  async function getProfileById(profileId) {
    return Profile.findByPk(profileId);
  }
  
  async function updateProfile(profileId, profileData) {
    return Profile.update(profileData, { where: { profile_id: profileId } });
  }
  
  async function deleteProfile(profileId) {
    return Profile.destroy({ where: { profile_id: profileId } });
  }
  
  async function getAllProfiles() {
    return Profile.findAll();
  }
  
  module.exports = { createProfile, getProfileById, updateProfile, deleteProfile, getAllProfiles };