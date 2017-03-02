Ext.define('MoMo.login.view.authentication.PasswordChange', {
    extend: 'MoMo.login.view.authentication.LockingWindow',
    xtype: 'passwordchange',

    routeId: 'passwordchange',

    requires: [
        'MoMo.login.view.authentication.Dialog',
        'Ext.container.Container',
        'Ext.form.Label',
        'Ext.form.field.Text',
        'Ext.button.Button'
    ],

    controller: 'authentication',

    title: 'MoMo - Change Password',

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
        defaultButton: 'changePassword',
        items: [{
            xtype: 'label',
            cls: 'lock-screen-top-label',
            text: 'Enter your new password.'
        }, {
            xtype: 'textfield',
            cls: 'auth-textbox',
            emptyText: 'Password',
            inputType: 'password',
            name: 'password',
            allowBlank: false,
            msgTarget: 'under',
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
            msgTarget: 'under',
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
        }, {
            xtype: 'button',
            reference: 'changePassword',
            scale: 'large',
            ui: 'soft-blue',
            formBind: true,
            iconAlign: 'right',
            iconCls: 'x-fa fa-angle-right',
            text: 'Change Password',
            listeners: {
                click: 'onChangeClick'
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
