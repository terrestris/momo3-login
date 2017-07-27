Ext.define('MoMo.login.view.main.ResendTokenModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.resendtokenmodel',

    data: {
        resendTokenTitle: 'MoMo - Resend registration mail',
        resendTokenHtmlText: '<p>The account you tried to log in with is ' +
            'not activated.</p>' +
            '<p>You can activate your account by opening the ' +
            'registration URL you should have received via email. ' +
            'If you haven\'t received the registration mail, please ' +
            'try the following:</p>' +
            '<ul>' +
            '<li>Ensure the email address you used to sign up with ' +
            'is correct.</li>' +
            '<li>Check your spam folder to see if the email has been ' +
            'delivered there.</li>' +
            '<li>If you\'re using a mail program (like Thunderbird ' +
            'or Outlook) to fetch your mails, you might need to ' +
            'login to the mail service web client to see the spam ' +
            'folder.</li>' +
            '<li>Please be patient, sometimes it can took a while ' +
            '(up to 24h) to the mail to be delivered.</li>' +
            '</ul>' +
            '<p>If the above couldn\'t help, please enter the email ' +
            'address you used to sign up with and the registration ' +
            'will be sent to you again:</p>',
        resendTokenEmailEmptyText: 'Email',
        resendTokenBtnText: 'Resend registration mail',
        backToLoginText: 'Back to Login',
        helpButtonText: 'Helpdocument',
        contextHelpTooltip: 'Contextsensitive help'
    }
});
