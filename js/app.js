// set up require
require.config({
    shim: {
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        underscore: {
            exports: '_'
        }
    }
});


require(["jquery","underscore","Backbone","directoryView","contactsRouter"],
    function($,_,Backbone,DirectoryView,ContactsRouter) {

        //create router instance
        var contactsRouter = new ContactsRouter();

  //create instance of master view
        var directory = new DirectoryView({contactsRouter:contactsRouter});



        //start history service
        Backbone.history.start();


});