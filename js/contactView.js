/**
 * Created by nisum-user on 3/26/15.
 */

define(["jquery","underscore","Backbone","contacts"],function($,_,Backbone,contact) {


    var ContactView = Backbone.View.extend({
        tagName: "article",
        className: "contact-container",
        template: _.template($("#contactTemplate").html()),

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });


    return ContactView;

});