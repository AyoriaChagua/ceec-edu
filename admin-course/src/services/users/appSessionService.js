const AppSession = require("../../models/appSessionModel")

const createAppSessionService = async (appSession) => {
    try {
        const newAppSession = await AppSession.create(appSession);
        return newAppSession;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

const getAppSessionsService = async () => {
    try {
        const appSessions = await AppSession.findAll();
        return appSessions
    } catch (error) {
        console.error(error)
        throw error;
    }
}

module.exports = { createAppSessionService, getAppSessionsService }