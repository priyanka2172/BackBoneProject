/**
 * Created by nisum-user on 3/26/15.
 */




//define directory collection
define(["jquery-1.7.1.min","underscore-min","backbone-min.0.5.3","contact"],function(jquery,underscore,Backbone,directory,contact) {
    var Directory = Backbone.Collection.extend({
        model: Contact
    });

    return Directory;
})
//define individual contact view
