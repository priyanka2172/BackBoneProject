//define master view



define(["jquery-1.7.1.min","underscore-min","backbone-min.0.5.3","contact","contactView","contactsRouter","directory"],function(jquery,underscore,Backbone,contact,contactView,contactsRouter) {

    var DirectoryView = Backbone.View.extend({
        el: $("#contacts"),

        initialize: function () {
            this.collection = new Directory(contacts);

            this.render();
            this.$el.find("#dropDown").append(this.createSelect());

            this.on("change:filterType", this.filterByType, this);
            this.collection.on("reset", this.render, this);
        },

        render: function () {
            this.$el.find("article").remove();

            _.each(this.collection.models, function (item) {
                this.renderContact(item);
            }, this);
        },

        renderContact: function (item) {
            var contactView = new ContactView({
                model: item
            });
            this.$el.append(contactView.render().el);
        },

        getTypes: function () {
            return _.uniq(this.collection.pluck("type"));
        },

        createSelect: function () {
            var select = $("<select/>", {
                html: "<option value='all'>All</option>"
            });

            _.each(this.getTypes(), function (item) {
                var option = $("<option/>", {
                    value: item,
                    text: item
                }).appendTo(select);
            });

            return select;
        },

        //add ui events
        events: {
            "change #dropDown select": "setFilter"
        },

        //Set filter property and fire change event
        setFilter: function (e) {
            this.filterType = e.currentTarget.value;
            console.log(e.type);
            this.trigger("change:filterType");

        },

        //filter the view
        filterByType: function () {
            if (this.filterType === "all") {
                this.collection.reset(contacts);
                contactsRouter.navigate("filter/all");
            } else {
                this.collection.reset(contacts, {silent: true});

                var filterType = this.filterType,
                    filtered = _.filter(this.collection.models, function (item) {
                        return item.get("type") === filterType;
                    });

                this.collection.reset(filtered);

                contactsRouter.navigate("filter/" + filterType);
            }
        }
    });

    return DirectoryView;

})