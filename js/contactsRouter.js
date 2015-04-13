/**
 * Created by nisum-user on 3/26/15.
 */
var ContactsRouter = Backbone.Router.extend({
    routes: {
        "filter/:type": "urlFilter"
    },

    urlFilter: function (type) {
        directory.filterType = type;
        console.log("url filter calling");
        directory.trigger("change:filterType");
    }
});