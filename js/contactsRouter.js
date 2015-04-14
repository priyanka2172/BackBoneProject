/**
 * Created by nisum-user on 3/26/15.
 */



define(["jquery","underscore","Backbone","directory"],function($,_,Backbone,directory) {
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
});