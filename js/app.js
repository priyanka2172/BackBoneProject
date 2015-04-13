






(function ($) {

 //create instance of master view
    var directory = new DirectoryView();

    //create router instance
    var contactsRouter = new ContactsRouter();

    //start history service
    Backbone.history.start();

} (jQuery));