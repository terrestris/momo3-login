Ext.define('MoMo.login.view.authentication.AuthenticationModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.authentication',

    data: {
        registrationSuccessTitle: 'Information',
        registrationSuccessMsg: 'An email with further instructions ' +
            'has been sent to your account.',
        registrationFailureTitle: 'Error',
        registrationFailureMsg: 'Error sending the mail to your account',
        passwordUpdateSuccessTitle: 'Information',
        passwordUpdateSuccessMsg: 'Your password has been successfully updated',
        passwordUpdateFailureTitle: 'Error',
        passwordUpdateFailureMsg: 'Error updating the password',
        resendRegistrationSuccessTitle: 'Information',
        resendRegistrationSuccessMsg: 'The registration mail has been sent ' +
            'to your account',
        resendRegistrationFailureTitle: 'Error',
        resendRegistrationFailureMsg: 'Error sending the mail to ' +
            'your account. Has your account already be activated?'
    }
});
