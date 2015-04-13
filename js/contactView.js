/**
 * Created by nisum-user on 3/26/15.
 */
var ContactView = Backbone.View.extend({
    tagName: "article",
    className: "contact-container",
    template: _.template($("#contactTemplate").html()),

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});