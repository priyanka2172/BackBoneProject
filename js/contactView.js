/**
 * Created by nisum-user on 3/26/15.
 */

define(["jquery-1.7.1.min","underscore-min","backbone-min.0.5.3","contact"],function(jquery,underscore,Backbone,contact) {


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

})