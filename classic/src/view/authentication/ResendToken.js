/**
 *
 */
Ext.define('MoMo.login.view.authentication.ResendToken', {
    extend: 'MoMo.login.view.authentication.LockingWindow',
    xtype: 'resendtoken',

    routeId: 'resendtoken',

    requires: [
        'MoMo.login.view.authentication.Dialog',
        'Ext.container.Container',
        'Ext.form.Label',
        'Ext.form.field.Text',
        'Ext.button.Button'
    ],

    controller: 'authentication',

    title: 'MoMo - Resend registration mail',

    defaultFocus: 'authdialog', // Focus the Auth Form to force field focus

    items: [{
        xtype: 'authdialog',
        autoComplete: true,
        bodyPadding: '20 20',
        cls: 'auth-dialog-login',
        width: 415,
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        defaults: {
            margin: '5 0'
        },
        defaultButton: 'resendToken',
        items: [{
            xtype: 'label',
            cls: 'lock-screen-top-label',
            html: '<p>The account you tried to log in with is not activated. ' +
                    '</p>' +
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
                    'will be sent to you again:</p>'
        }, {
            xtype: 'textfield',
            hideLabel: true,
            margin: '5 0 15 0',
            name: 'email',
            msgTarget: 'under',
            emptyText: 'Email',
            cls: 'auth-textbox',
            allowBlank: false,
            vtype: 'email',
            triggers: {
                glyphed: {
                    cls: 'trigger-glyph-noop auth-email-trigger'
                }
            }
        }, {
            xtype: 'button',
            reference: 'resendToken',
            scale: 'large',
            formBind: true,
            iconAlign: 'right',
            iconCls: 'x-fa fa-angle-right',
            text: 'Resend registration mail',
            listeners: {
                click: 'onResendTokenClick'
            }
        }, {
            xtype: 'component',
            html: '<div style="text-align:right">' +
                '<a href="#login" class="link-forgot-password">'+
                    'Back to Log In</a>' +
                '</div>'
        }]
    }]
});
