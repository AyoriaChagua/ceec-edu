const profileService = require('../services/profileService');

async function createProfile(req, res) {
  try {
    const profile = await profileService.createProfile(req.body);
    res.status(201).json(profile);
  } catch (error) {
    res.status(500).json({ error: 'Error creating profile' });
  }
}

async function getProfileById(req, res) {
  const { profileId } = req.params;
  try {
    const profile = await profileService.getProfileById(profileId);
    if (profile) {
      res.json(profile);
    } else {
      res.status(404).json({ error: 'Profile not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching profile' });
  }
}

async function updateProfile(req, res) {
  const { profileId } = req.params;
  try {
    const updated = await profileService.updateProfile(profileId, req.body);
    if (updated[0] === 1) {
      res.json({ message: 'Profile updated successfully' });
    } else {
      res.status(404).json({ error: 'Profile not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error updating profile' });
  }
}

async function deleteProfile(req, res) {
  const { profileId } = req.params;
  try {
    const deleted = await profileService.deleteProfile(profileId);
    if (deleted === 1) {
      res.json({ message: 'Profile deleted successfully' });
    } else {
      res.status(404).json({ error: 'Profile not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error deleting profile' });
  }
}

async function getAllProfiles(req, res) {
  try {
    const profiles = await profileService.getAllProfiles();
    res.json(profiles);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching profiles' });
  }
}

async function getAllUserProfileData(req, res) {
  try {
    const { userId } = req.params;
    const userProfile = await profileService.getAllUserProfileDataService(userId);
    res.json(userProfile);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching profiles' });
  }
}

module.exports = {
  createProfile,
  getProfileById,
  updateProfile,
  deleteProfile,
  getAllProfiles,
  getAllUserProfileData
};
