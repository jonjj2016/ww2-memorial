const isLoggedIn = require('../../hooks/is-logged-in');
const authUser = require('../../hooks/auth-user');

module.exports = {
    before: {
        all: [],
        find: [],
        get: [],
        create: [isLoggedIn()],
        update: [authUser()],
        patch: [authUser()],
        remove: [authUser()]
    },

    after: {
        all: [],
        find: [],
        get: [],
        create: [],
        update: [],
        patch: [],
        remove: []
    },

    error: {
        all: [],
        find: [],
        get: [],
        create: [],
        update: [],
        patch: [],
        remove: []
    }
};