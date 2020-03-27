const authUser = require('../../hooks/auth-user');

const counter = require('../../hooks/counter');

module.exports = {
    before: {

        all: [],
        create: [],
        patch: [counter()],
        find: [],
        get: [],
        update: [],
        remove: []
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