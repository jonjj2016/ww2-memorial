// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
    return async context => {
        const {
            email,
            name,
            password
        } = context.data
        if (!email || !name || !password) {
            throw new Error("Wrong Credentials")
        }
        context.data = {
            email,
            name,
            password,
            role: "user"
        }
        return context;
    };
};