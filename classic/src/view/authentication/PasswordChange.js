Ext.define('MoMo.login.view.authentication.PasswordChange', {
    extend: 'MoMo.login.view.authentication.LockingWindow',
    xtype: 'passwordchange',

    routeId: 'passwordchange',

    requires: [
        'MoMo.login.view.authentication.Dialog',
        'MoMo.login.view.main.PasswordChangeModel',
        'Ext.container.Container',
        'Ext.form.Label',
        'Ext.form.field.Text',
        'Ext.button.Button'
    ],

    controller: 'authentication',
    viewModel: 'passwordchangemodel',

    bind: {
        title: '{changePasswordTitle}'
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
            }, {
                xtype: 'button',
                cls: 'helpbtn',
                bind: {
                    text: '{helpButtonText}'
                },
                handler: function() {
                    var lang = Ext.ComponentQuery.query(
                        'app-main')[0].getViewModel().get(
                        'currentLanguage').toLowerCase();
                    var win = Ext.create('Ext.window.Window', {
                        width: '80%',
                        height: '80%',
                        layout: 'fit',
                        items: {
                            xtype: 'component',
                            autoEl: {
                                tag: 'iframe',
                                style: 'height: 100%; width: 100%; border: ' +
                                    'none',
                                src: '../userdocs/build/MoMo_doc_' + lang +
                                    '.pdf'
                            }
                        }
                    });
                    win.show();
                }
            }, {
                xtype: 'basigx-button-help',
                viewModel: {
                    data: {
                        tooltip: '{contextHelpTooltip}'
                    }
                },
                listeners: {
                    click: function(btn) {
                        var lang = Ext.ComponentQuery.query(
                            'app-main')[0].getViewModel().get(
                            'currentLanguage').toLowerCase();
                        var path = '../userdocs/build/MoMo_doc_' + lang +
                            '_html.html';
                        btn.setHelpUrl(path);
                    }
                },
                helpUrl: '../userdocs/build/MoMo_doc_en_html.html',
                additonalHelpKeys: [
                    'momo-translation-en-button',
                    'momo-translation-de-button',
                    'momo-translation-mn-button'
                    //TODO: add more
                ]
            }
        ]
    }, {
        xtype: 'authdialog',
        name: 'changepassword',
        autoComplete: true,
        bodyPadding: '20 20',
        cls: 'auth-dialog-login',
        width: 415,
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        defaults: {
            margin: '5 0',
            msgTarget: 'under',
            allowBlank: false
        },
        defaultButton: 'changePassword',
        items: [{
            xtype: 'label',
            cls: 'lock-screen-top-label',
            bind: {
                text: '{newPasswordText}'
            }
        }, {
            xtype: 'textfield',
            cls: 'auth-textbox',
            bind: {
                emptyText: '{passwordEmptyText}'
            },
            inputType: 'password',
            name: 'password',
            minLength: 6,
            regex: /^\S*$/,
            regexText: 'No whitespace allowed',
            triggers: {
                glyphed: {
                    cls: 'trigger-glyph-noop auth-password-trigger'
                }
            }
        }, {
            xtype: 'textfield',
            cls: 'auth-textbox',
            bind: {
                emptyText: '{confirmPasswordEmptyText}'
            },
            inputType: 'password',
            submitValue: false,
            validateBlank: true,
            triggers: {
                glyphed: {
                    cls: 'trigger-glyph-noop auth-password-trigger'
                }
            },
            validator: function(val) {
                var pw = this.up('form').
                    down('textfield[name=password]').getValue();
                var notEqualText = this.up('passwordchange').getViewModel()
                    .get('passwordsAreNotEqualText');
                return pw === val ? true : notEqualText;
            }
        }, {
            xtype: 'button',
            reference: 'changePassword',
            scale: 'large',
            ui: 'soft-blue',
            formBind: true,
            iconAlign: 'right',
            iconCls: 'x-fa fa-angle-right',
            bind: {
                text: '{changePasswordBtnText}'
            },
            listeners: {
                click: 'onChangeClick'
            }
        }, {
            xtype: 'component',
            bind: {
                html: '<div style="text-align:right">' +
                    '<a href="#login" class="link-forgot-password">'+
                        '{backToLoginText}</a>' +
                    '</div>'
            }
        }]
    }]
});
