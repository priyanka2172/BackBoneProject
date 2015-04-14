/**
 * Created by nisum-user on 3/26/15.
 */




//define directory collection
define(["jquery","underscore","Backbone","contactModel"],function($,_,Backbone,contactModel) {
    var Directory = Backbone.Collection.extend({
        model: contactModel
    });

    return Directory;
});
//define individual contact view
