Ext.define('MoMo.login.view.authentication.PasswordReset', {
    extend: 'MoMo.login.view.authentication.LockingWindow',
    xtype: 'passwordreset',

    routeId: 'passwordreset',

    requires: [
        'MoMo.login.view.authentication.Dialog',
        'Ext.container.Container',
        'Ext.form.Label',
        'Ext.form.field.Text',
        'Ext.button.Button'
    ],

    controller: 'authentication',

    title: 'MoMo - Reset Password',

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
        defaultButton: 'resetPassword',
        items: [{
            xtype: 'label',
            cls: 'lock-screen-top-label',
            text: 'Enter your email address for further reset instructions'
        }, {
            xtype: 'textfield',
            cls: 'auth-textbox',
            height: 55,
            name: 'email',
            hideLabel: true,
            allowBlank: false,
            msgTarget: 'side',
            emptyText: 'Email',
            vtype: 'email',
            triggers: {
                glyphed: {
                    cls: 'trigger-glyph-noop auth-email-trigger'
                }
            }
        }, {
            xtype: 'button',
            reference: 'resetPassword',
            scale: 'large',
            ui: 'soft-blue',
            formBind: true,
            iconAlign: 'right',
            iconCls: 'x-fa fa-angle-right',
            text: 'Reset Password',
            listeners: {
                click: 'onResetClick'
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
