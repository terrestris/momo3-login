/**
 * @class MoMo.login.view.registration.RegisterWizardFormController
 */
Ext.define('MoMo.login.view.registration.RegistrationController', {
    extend: 'MoMo.login.view.authentication.AuthenticationController',
    alias: 'controller.registration',
    requires: [
        'BasiGX.util.CSRF',
        'BasiGX.util.Url'
    ],

//    onTermCheckChange: function(box, newVal){
//        var form = box.up('form').getForm(),
//            button = box.up('form').down('button[name=createAccountButton]');
//
//        if (newVal && form.isValid()) {
//            button.enable();
//        } else {
//            button.disable();
//        }
//    },

    /**
     *
     */
    onCreateClick: function(btn) {
        var me = this,
            form = btn.up('form'),
            submitValues = form.getValues();

        // Ensure the mail is lowercase always
        if (submitValues && submitValues.email) {
            submitValues.email = submitValues.email.toLowerCase();
        }

        form.setLoading(true);

        Ext.Ajax.request({
            url: BasiGX.util.Url.getWebProjectBaseUrl() +
                'momousers/register.action',
            method: 'POST',
            headers: BasiGX.util.CSRF.getHeader(),
            params: submitValues,
            success: function(response) {
                form.setLoading(false);
                var respObj = Ext.decode(response.responseText);
                if (respObj.success) {
                    Ext.Msg.show({
                        title:'Information',
                        message: 'Your account has been successfully ' +
                                'created. An Email with further instructions ' +
                                'has been sent to your given account.',
                        buttons: Ext.Msg.OK,
                        icon: Ext.Msg.INFO,
                        fn: function() {
                            me.redirectTo('login');
                        }
                    });
                } else {
                    Ext.Msg.alert('Error', 'Error creating the new account: ' +
                            respObj.message);
                }

            },
            failure: function(response) {
                form.setLoading(false);
                var respObj = Ext.decode(response.responseText);
                Ext.Msg.alert('Error', 'Error creating the new account: ' +
                        respObj.message);
            }
        });
    }

});
