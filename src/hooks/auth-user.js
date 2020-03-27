// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const jwt = require("jsonwebtoken");
// eslint-disable-next-line no-unused-vars

module.exports = (options = {}) => {
    return async context => {

        //checking for token existenve in context params
        if (!context.params.headers.authorization) {
            throw new Error("Not Autherized");
        }
        //getting secret from defaults
        const secret = context.app.get("authentication").secret;
        //geting token from auth string
        const token = context.params.headers.authorization.split(" ")[1];
        //decoding to get users info (id)
        const decoded = jwt.verify(token, secret);
        //id decoded falsy means token is not valid
        if (!decoded) {
            throw new Error("Not Autherized!");
        }
        //geting user from db with id we have got from decoded obj
        const user = await context.app.service("users").get(decoded.sub);
        //if no user or user no longer exist throwing error
        if (!user) {
            throw new Error("No User");
        }
        //checking for users role
        if (user.role !== "admin") {
            throw new Error("Not Autherized user");
        }
        //at this stage user is authenticated and authorized as an admin
        return context;
    };
};