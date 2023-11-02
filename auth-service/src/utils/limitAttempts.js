export const handleFailedLoginAttempt = async (user) => {
    await user.update({
        failed_login_attempts: user.failed_login_attempts + 1,
        last_failed_login: new Date()
    });

    if (user.failed_login_attempts >= 5) {
        await user.update({ is_blocked: true });
    }
};

export const resetFailedLoginAttempts = async (user) => {
    await user.update({
        failed_login_attempts: 0,
        last_failed_login: null
    });
};