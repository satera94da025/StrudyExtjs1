/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('MyApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',
    bindings: {},
    selectClick(_,g){
        this.getViewModel().set('selection',g.map(el => el.data.phone + "  "));
    },
    hidePanel(cmp) {
        let items = this.getView().getTabBar().items.items;
        Ext.each(items, el => el.config.title === cmp.initialConfig.boxLabel ? el.setHidden(cmp._checked) : null)
    },
    changeState: function (state) {
        let vm = this.getViewModel();
        let flags = vm.get('flags');
        for (let flagName in flags) {
            vm.set('flags.' + flagName, state);
        }
    },
    hideAll() {
        this.changeState(true);

    },
    showAll() {
        this.changeState(false);
    },

    init: function() {
        this.leftMenu = Ext.Viewport.setMenu(this.getMenuCfg('left'), {
            side: 'left',
            reveal: true
        });
    },

    destroy: function() {
        Ext.destroyMembers(this, 'leftMenu');
        this.callParent();
    },

    getMenuCfg: function(side) {
        var cfg = {
            side: side,
            items: [{
                text: 'Settings',
                iconCls: 'x-fa fa-cog',
                handler: function() {
                    Ext.Viewport.hideMenu(side);
                }
            }, {
                text: 'New Item',
                iconCls: 'x-fa fa-pencil-alt',
                handler: function() {
                    Ext.Viewport.hideMenu(side);
                }
            }, {
                xtype: 'button',
                text: 'Star',
                iconCls: 'x-fa fa-star',
                handler: function() {
                    Ext.Viewport.hideMenu(side);
                }
            }]
        };

        if (side === 'left') {
            cfg.width = 200;
        }

        return cfg;
    },

    toggleMenu: function(side) {
        Ext.Viewport.setMenu(this[side + 'Menu'], {
            side: side
        });

        Ext.Viewport.toggleMenu(side);
    },

    toggleLeft: function() {
        this.toggleMenu('left');
    },

});
