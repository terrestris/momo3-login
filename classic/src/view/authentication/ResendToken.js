/**
 *
 */
Ext.define('MoMo.login.view.authentication.ResendToken', {
    extend: 'MoMo.login.view.authentication.LockingWindow',
    xtype: 'resendtoken',

    routeId: 'resendtoken',

    requires: [
        'MoMo.login.view.authentication.Dialog',
        'MoMo.login.view.main.ResendTokenModel',
        'Ext.container.Container',
        'Ext.form.Label',
        'Ext.form.field.Text',
        'Ext.button.Button'
    ],

    controller: 'authentication',
    viewModel: 'resendtokenmodel',

    bind: {
        title: '{resendTokenTitle}'
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
            bind: {
                html: '{resendTokenHtmlText}'
            }
        }, {
            xtype: 'textfield',
            hideLabel: true,
            margin: '5 0 15 0',
            name: 'email',
            msgTarget: 'under',
            bind: {
                emptyText: '{resendTokenEmailEmptyText}'
            },
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
            bind: {
                text: '{resendTokenBtnText}'
            },
            listeners: {
                click: 'onResendTokenClick'
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
