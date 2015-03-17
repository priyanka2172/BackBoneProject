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
            photo: "/img/placeholder.jpeg"
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
            this.$el.find("#filter").append(this.createSelect());
            this.on("change:filterType", this.filterByType, this);
            this.collection.on("reset", this.render, this);
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
        },
        getTypes: function () {
            return _.uniq(this.collection.pluck("type"), false, function (type) {
                return type.toLowerCase();
            });
        },

        createSelect: function () {
            var filter = this.$el.find("#filter"),
                select = $("<select/>", {
                    html: "<option>All</option>"
                });

            _.each(this.getTypes(), function (item) {
                var option = $("<option/>", {
                    value: item.toLowerCase(),
                    text: item.toLowerCase()
                }).appendTo(select);
            });
            return select;
        },
        events: {
            "change #filter select": "setFilter"
        },
        setFilter: function (e) {
            this.filterType = e.currentTarget.value;
            this.trigger("change:filterType");
        },

        setSelected: function (filterType) {
            $('option').each(function () {
                if ($(this).val() === filterType) {
                    $(this).attr("selected", "selected");
                } else {
                    $(this).removeAttr("selected");
                }
            });
        },

// call the function in the filterByType, at the end after allt he if-else logic,
// because it needs to be called anyway:

        filterByType: function () {
            setSelected(filterType);
        }
    });









    var ContactsRouter = Backbone.Router.extend({
        routes: {
            "filter/:type": "urlFilter"
        },

        urlFilter: function (type) {
            directory.filterType = type;
            directory.trigger("change:filterType");
        }
    });

    //create instance of master view
    var directory = new DirectoryView();
    var contactsRouter = new ContactsRouter();

} (jQuery));
Backbone.history.start();