require(["jquery-1.7.1.min","underscore-min","backbone-min.0.5.3","directory","contact","DirectoryView","ContactsRouter"],function(jquery,underscore,Backbone,directory,contact,DirectoryView,ContactsRouter) {


  //create instance of master view
        var directory = new DirectoryView();

        //create router instance
        var contactsRouter = new ContactsRouter();

        //start history service
        Backbone.history.start();


});