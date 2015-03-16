(function ($) {

    //demo data
    var contacts = [
        { name: "Priyanka Acharya", address:"39355 California Street",  tel: "5107765432", email: "pac@gmail.com",type: "family" },
        { name: "Tom Mark",         address: "39355 California Street", tel: "5107765432", email: "abc@gmail.com",     type: "colleague" },
        { name: "Catrine Bug",      address: "39355 California Street", tel: "5107765432", email: "abc@gmail.com",     type: "friend" },
        { name: "Nancy Abbott",     address: "39355 California Street", tel: "5107765432", email: "abc@gmail.com",     type: "colleague" },
        { name: "Nambie Haider",    address: "39355 California Street", tel: "5107765432", email: "abc@gmail.com",     type: "family" },
        { name: "Suzie Discus",     address: "39355 California Street", tel: "5107765432", email: "abc@gmail.com",     type: "colleague" },

    ];

    //define product model
    var Contact = Backbone.Model.extend({
        defaults: {
            photo: "/img/placeholder.png"
        }
    });

    //define directory collection
    var Directory = Backbone.Collection.extend({
        model: Contact
    });

    //define individual contact view
    var ContactView = Backbone.View.extend({
        tagName: "article",
        className: "contact-container",
        template: $("#contactTemplate").html(),

        render: function () {
            var tmpl = _.template(this.template);
            
            $(this.el).html(tmpl(this.model.toJSON()));
            return this;
        }
    });

    //define master view
    var DirectoryView = Backbone.View.extend({
        el: $("#contacts"),

        initialize: function () {
            this.collection = new Directory(contacts);
            this.render();
        },

        render: function () {
            var that = this;
            _.each(this.collection.models, function (item) {
                that.renderContact(item);
            }, this);
        },

        renderContact: function (item) {
            var contactView = new ContactView({
                model: item
            });
            this.$el.append(contactView.render().el);
        }
    });

    //create instance of master view
    var directory = new DirectoryView();

} (jQuery));