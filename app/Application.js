/**
 * The main application class. An instance of this class is created by app.js
 * when it calls Ext.application(). This is the ideal place to handle
 * application launch and initialization details.
 */
Ext.define('MoMo.login.Application', {
    extend: 'Ext.app.Application',

    name: 'MoMo.login',

    stores: [
    ],

    launch: function () {
    },

    init: function() {
        var loadMask = document.getElementById("loadmask");
        if (loadMask) {
            loadMask.remove();
        }
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an ' +
                'update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
