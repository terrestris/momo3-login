/**
 * The Login Form
 */
Ext.define('MoMo.login.view.authentication.Login', {
    extend: 'MoMo.login.view.authentication.LockingWindow',
    xtype: 'login',

    routeId: 'login',

    requires: [
        'MoMo.login.view.authentication.Dialog',
        'Ext.form.field.Text',
        'Ext.form.Label',
        'Ext.button.Button',
        'Ext.form.field.Hidden',
        'BasiGX.util.CSRF'
    ],

    title: 'MoMo - Login',

    defaultFocus: 'authdialog', // Focus the Auth Form to force field focus

    items: [{
        xtype: 'authdialog',
        autoComplete: true,
        bodyPadding: '20 20',
        cls: 'auth-dialog-login',
        header: false,
        width: 415,
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        defaults: {
            margin: '5 0'
        },
        items: [{
            xtype: 'label',
            text: 'Sign into your account'
        }, {
            xtype: 'textfield',
            hideLabel: true,
            margin: '5 0 15 0',
            name: 'username',
            msgTarget: 'side',
            emptyText: 'Username',
            allowBlank: false,
            triggers: {
                glyphed: {
                    cls: 'trigger-glyph-noop auth-email-trigger'
                }
            }
        }, {
            xtype: 'textfield',
            hideLabel: true,
            margin: '5 0 10 0',
            emptyText: 'Password',
            inputType: 'password',
            name: 'password',
            msgTarget: 'side',
            reference: 'passwordField',
            allowBlank: false,
            triggers: {
                glyphed: {
                    cls: 'trigger-glyph-noop auth-password-trigger'
                }
            },
            listeners: {
                focus: {
                    fn: 'onPasswordFocus',
                    single: true
                }
            }
        }, {
            xtype: 'hiddenfield',
            name: '_csrf',
            value: BasiGX.util.CSRF.getValue()
        }, {
            xtype: 'container',
            layout: 'hbox',
            items: [{
                xtype: 'box',
                html: '<a href="#passwordreset" class="link-' +
                    'forgot-password"> Forgot Password ?</a>'
            }]
        }, {
            xtype: 'button',
            reference: 'loginButton',
            scale: 'large',
            ui: 'momo',
            iconAlign: 'right',
            iconCls: 'x-fa fa-angle-right',
            text: 'Login',
            formBind: true,
            listeners: {
                click: 'onLoginButton'
            }
        }, {
            xtype: 'box',
            html: '<div class="outer-div"><div class="seperator">' +
                'OR</div></div>',
            margin: '10 0'
        }, {
            xtype: 'button',
            scale: 'large',
            ui: 'momo',
            iconAlign: 'right',
            iconCls: 'x-fa fa-user-plus',
            text: 'Create Account',
            listeners: {
                click: 'onNewAccount'
            }
        }]
    }]

});
