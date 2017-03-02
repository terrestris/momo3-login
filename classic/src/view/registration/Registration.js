Ext.define('MoMo.login.view.registration.Registration', {
    extend: 'MoMo.login.view.authentication.LockingWindow',
    xtype: 'registration',

    routeId: 'registration',

    requires: [
        'Ext.container.Container',
        'Ext.form.Label',
        'Ext.form.field.Text',
        'Ext.form.field.Checkbox',
        'Ext.button.Button',

        'MoMo.login.view.registration.RegistrationController',
        'MoMo.login.view.authentication.Dialog'
    ],

    title: 'MoMo - Create Account',

    controller: 'registration',

    defaultFocus: 'authdialog', // Focus the Auth Form to force field focus

    items: [{
        xtype: 'authdialog', //form
        autoComplete: true,
        bodyPadding: '20 20',
        cls: 'auth-dialog-login',
        controller: 'registration',
        width: 415,
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        defaults: {
            margin: '5 0'
        },
        defaultButton: 'createAccount',
        items: [{
            xtype: 'label',
            cls: 'lock-screen-top-label',
            text: 'Enter e-mail and password to register.'
        }, {
            xtype: 'textfield',
            cls: 'auth-textbox',
            emptyText: 'Email',
            vtype: 'email',
            name: 'email',
            msgTarget: 'side',
            hideLabel: true,
            margin: '5 0 15 0',
            allowBlank: false,
            triggers: {
                glyphed: {
                    cls: 'trigger-glyph-noop auth-email-trigger'
                }
            }
        }, {
            xtype: 'textfield',
            cls: 'auth-textbox',
            emptyText: 'Password',
            inputType: 'password',
            name: 'password',
            allowBlank: false,
            msgTarget: 'side',
            hideLabel: true,
            margin: '5 0 15 0',
            triggers: {
                glyphed: {
                    cls: 'trigger-glyph-noop auth-password-trigger'
                }
            }
        }, {
            xtype: 'textfield',
            cls: 'auth-textbox',
            emptyText: 'Confirm Password',
            inputType: 'password',
            allowBlank: false,
            submitValue: false,
            validateBlank: true,
            msgTarget: 'side',
            hideLabel: true,
            margin: '5 0 5 0',
            triggers: {
                glyphed: {
                    cls: 'trigger-glyph-noop auth-password-trigger'
                }
            },
            validator: function(val) {
                var pw = this.up('form').
                    down('textfield[name=password]').getValue();
                return pw === val ? true : 'Passwords are not equal';
            }
        },
//        {
//            xtype: 'checkbox',
//            name: 'termagree',
//            labelAlign: 'top',
//            inputValue: true,
//            submitValue: false,
//            fieldLabel: 'Review End User Agreement',
//            boxLabel: 'I agree with the Terms and Conditions *',
//            listeners: {
//                change: 'onTermCheckChange'
//            }
//        },
        {
            xtype: 'button',
            name: 'createAccountButton',
            reference: 'createAccount',
            scale: 'large',
            formBind: true,
            iconAlign: 'right',
            iconCls: 'x-fa fa-angle-right',
            text: 'Create Account',
            listeners: {
                click: 'onCreateClick'
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
