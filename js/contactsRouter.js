/**
 * Created by nisum-user on 3/26/15.
 */



define(["jquery-1.7.1.min","underscore-min","backbone-min.0.5.3","directory","contact"],function(jquery,underscore,Backbone,directory,contact) {
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

    return ContactsRouter;
})