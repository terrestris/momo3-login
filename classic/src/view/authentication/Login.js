/**
 * The Login Form
 */
Ext.define('MoMo.login.view.authentication.Login', {
    extend: 'MoMo.login.view.authentication.LockingWindow',
    xtype: 'login',
    viewModel: 'loginmodel',

    routeId: 'login',

    requires: [
        'MoMo.login.view.authentication.Dialog',
        'MoMo.login.view.button.translation.ToMongolian',
        'MoMo.login.view.button.translation.ToGerman',
        'MoMo.login.view.button.translation.ToEnglish',
        'MoMo.login.view.authentication.Login',
        'Ext.form.field.Text',
        'Ext.form.Label',
        'Ext.button.Button',
        'Ext.form.field.Hidden',
        'BasiGX.util.CSRF'
    ],

    bind: {
        title: '{loginTitle}'
    },

    defaultFocus: 'authdialog', // Focus the Auth Form to force field focus

    items: [{
        xtype: 'toolbar',
        cls: 'language-toolbar',
        height: 64,
        itemId: 'headerBar',
        items: [
            {
                xtype: 'momo-translation-de-button'
            }, {
                xtype: 'momo-translation-en-button'
            }, {
                xtype: 'momo-translation-mn-button'
            }
        ]
    }, {
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
            bind: {
                text: '{loginFormLabel}'
            }
        }, {
            xtype: 'textfield',
            hideLabel: true,
            margin: '5 0 15 0',
            name: 'no-submit-username',
            msgTarget: 'under',
            bind: {
                emptyText: '{userNameEmptyText}'
            },
            allowBlank: false,
            submitValue: false,
            triggers: {
                glyphed: {
                    cls: 'trigger-glyph-noop auth-email-trigger'
                }
            },
            listeners: {
                change: 'onUserNameChange'
            }
        }, {
            xtype: 'textfield',
            name: 'username',
            hidden: true
        }, {
            xtype: 'textfield',
            hideLabel: true,
            margin: '5 0 10 0',
            bind: {
                emptyText: '{passwordEmptyText}'
            },
            inputType: 'password',
            name: 'password',
            msgTarget: 'under',
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
                name: 'forgotPasswordBox',
                bind: {
                    html: '<a href="#passwordreset" class="link-' +
                        'forgot-password">{forgotPasswordText}</a>'
                }
            }]
        }, {
            xtype: 'button',
            reference: 'loginButton',
            scale: 'large',
            ui: 'soft-blue',
            iconAlign: 'right',
            iconCls: 'x-fa fa-angle-right',
            bind: {
                text: '{loginBtnText}'
            },
            formBind: true,
            listeners: {
                click: 'onLoginButton'
            }
        }, {
            xtype: 'box',
            html: '<div class="outer-div"><div class="seperator"></div></div>',
            margin: '10 0'
        }, {
            xtype: 'button',
            scale: 'large',
            ui: 'soft-blue',
            iconAlign: 'right',
            iconCls: 'x-fa fa-user-plus',
            bind: {
                text: '{createAccountBtnText}'
            },
            listeners: {
                click: 'onNewAccount'
            }
        }]
    }]

});
