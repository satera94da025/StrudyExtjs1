/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 */

Ext.define('MyApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',


    requires: [
        'Ext.MessageBox',
        'Ext.layout.Fit',
    ],
    controller: 'main',
    viewModel: 'main',

    defaults: {
        tab: {
            iconAlign: 'top'
        }
    },
    reference: 'tabPanel',
    tabBarPosition: 'bottom',
    items: [
        // TODO - Replace the content of this view to suit the needs of your application.
        {
            title: 'Menu',
            xtype: 'panel',
            reference: 'menu',
            iconCls: 'x-fa fa-list',
            listeners: {show: 'toggleLeft'}

        },
        {
            title: 'Photos',
            xtype: 'panel',
            layout: 'fit',
            reference: 'photos',
            iconCls: 'x-fa fa-camera',
            items: [{
                xtype: 'carousel',
                ui: 'light',


                items: [{
                    html: '<p>ITEM 1</em></p>',
                    style: 'background-color: #D2B48C'
                }, {
                    html: 'And can also use <code>ui:light</code>.',
                    style: 'background-color: #759E60'
                }, {
                    html: 'Card #3',
                    style: 'background-color: #333'
                }]

            }]

        },
        {
            title: 'Home',
            xtype: 'panel',
            reference: 'home',
            iconCls: 'x-fa fa-home',
            layout: 'fit',
            items: [{
                xtype: 'mainlist'

            }]
        }, {
            title: 'Users',
            reference: 'users',
            iconCls: 'x-fa fa-user',
            layout: 'fit',
            xtype: 'panel',
            items: [{
                xtype: 'grid',
                store: {
                    type: 'personnel'
                },
                columns: [{
                    text: 'Name',
                    dataIndex: 'name',
                    width: 150,
                }],
            }]
        }, {
            title: 'Groups',
            iconCls: 'x-fa fa-users',
            reference: 'groups',
            xtype: 'panel',
            layout: 'fit',
            items: [
                {
                    xtype: 'container',
                    items: [{
                        xtype: 'combobox',
                        label: 'Example with Items',
                        queryMode: 'local',
                        displayField: 'name',
                        valueField: 'phone',
                        multiSelect: true,
                        scrollable: 'vertical',
                        bind: {
                            html: 'seleted user phone is <b>{selection}</b>'
                        },
                        listeners: {
                            select: 'selectClick'
                        },
                        store: {
                            type: 'personnel'
                        },
                    }]
                },
                {

                    bbar: ['->', {
                        xtype: 'label',
                        bind: {
                            html: 'seleted user phone is <b>{selection}</b>'
                        }
                    }]

                }
            ]
        }, {
            title: 'Settings',
            iconCls: 'x-fa fa-cog',
            items: [{
                xtype: 'fieldcontainer',
                layout: {
                    type: 'vbox',
                    pack: 'center',
                    align: 'middle',
                },
                defaults:
                    {
                        xtype: 'checkbox',
                        listeners: {
                            change: 'hidePanel',
                        },

                    },
                items: [
                    {
                        boxLabel: 'Home',
                        name: 'home',
                        bind: '{flags.hideHome}',

                    }, {
                        boxLabel: 'Users',
                        name: 'users',
                        bind: '{flags.hideUsers}',
                    },
                    {
                        boxLabel: 'Groups',
                        name: 'groups',
                        bind: '{flags.hideGroups}',
                    },
                ],
            }, {
                xtype: 'fieldcontainer',
                layout: {
                    type: 'hbox',
                    pack: 'center',
                    align: 'middle',
                },
                defaults:
                    {
                        xtype: 'button',

                    },
                items: [
                    {
                        text: 'Select All',
                        scale: 'medium',
                        handler: 'hideAll'
                    },
                    {
                        text: 'Deselect All',
                        scale: 'medium',
                        handler: 'showAll'


                    },
                ],
            },
            ],

        },

    ],


});
