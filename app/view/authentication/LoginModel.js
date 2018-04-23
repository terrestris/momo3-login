Ext.define('MoMo.login.view.main.LoginModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.loginmodel',

    data: {
        loginTitle: 'MoMo - Login',
        loginFormLabel: 'Sign into your account',
        userNameEmptyText: 'Email',
        passwordEmptyText: 'Password',
        forgotPasswordText: 'Forgot Password ?',
        loginBtnText: 'Login',
        createAccountBtnText: 'Create Account',
        helpButtonText: 'Helpdocument',
        contextHelpTooltip: 'Contextsensitive help'
    }
});
