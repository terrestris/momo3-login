Ext.define('MoMo.login.view.main.PasswordChangeModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.passwordchangemodel',

    data: {
        changePasswordTitle: 'MoMo - Change Password',
        newPasswordText: 'Enter your new password.',
        passwordEmptyText: 'Password',
        confirmPasswordEmptyText: 'Confirm Password',
        changePasswordBtnText: 'Change Password',
        backToLoginText: 'Back to Login',
        passwordsAreNotEqualText: 'Passwords do not match',
        helpButtonText: 'Helpdocument',
        contextHelpTooltip: 'Contextsensitive help'
    }
});
