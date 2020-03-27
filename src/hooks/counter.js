// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {

    return async context => {
        const item = await context.app.service('donate').get(context.id)
        const oldItem = await context.app.service('donate').find({
            seq: {
                $lt: item.seq
            }
        })
        console.log("item", item)
        console.log("oldItem", oldItem)
            // await context.app.service('donate').delete(context.id, {
            //     seq: item.seq - 1
            // })
        context.data = {
            ...item,
            seq: item.seq + 1
        }

        return context;
    };
};