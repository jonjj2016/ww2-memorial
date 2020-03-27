// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const jwt = require('jsonwebtoken')
    // eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
    return async context => {
        const {
            params
        } = context || {}
        const {
            headers
        } = params.headers
        if (!params.headers.authorization) {
            //making sure context.data value set to false if user is not registered
            context.data = {
                ...context.data,
                approved: false
            }
            return context
        }
        //getting token from context.params
        const token = context.params.headers.authorization.split(' ')[1];
        //   decoding token with jwt to get users id

        const secret = context.app.get("authentication").secret
        const decoded = await jwt.verify(token, secret);
        //checking for decoding obj existence
        if (!decoded) {
            throw new Error("anouth access")
        }
        //finding user with 
        const user = await context.app.service('users').get(decoded.sub)
        if (!user) {
            throw new Error('No User')
        }
        const name = user.name.split('')[0].toUpperCase() + user.name.slice(1, user.name.length)
        context.data = {
            ...context.data,
            author: name,
            approved: true
        }
        return context;
    };
};