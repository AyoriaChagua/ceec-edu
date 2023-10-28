const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');
const authenticateToken = require('../middlewares/authenticationMiddleware');



router.post('/profiles', profileController.createProfile);
router.get('/profiles/:profileId',authenticateToken  ,profileController.getProfileById);
router.put('/profiles/:profileId', authenticateToken,  profileController.updateProfile);
router.delete('/profiles/:profileId',authenticateToken,   profileController.deleteProfile);
router.get('/profiles', authenticateToken,  profileController.getAllProfiles);
//Queries customized
router.get('/alldata/:userId', authenticateToken, profileController.getAllUserProfileData)

module.exports = router;
