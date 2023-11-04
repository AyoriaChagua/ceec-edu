const { createAppSessionService, getAppSessionsService } = require("../../services/users/appSessionService");

const appSessionController = async (req, res) => {
    try {
        const {
            user_id,
            start_time,
            end_time
        } = req.body;
        const appSession = await createAppSessionService({ user_id, start_time, end_time });
        res.status(200).json(appSession);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
}

const getAppSessions = async (req, res) => {
    try {
        const appSessions = await getAppSessionsService();
        res.status(200).json(appSessions);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
}

module.exports = {appSessionController, getAppSessions}