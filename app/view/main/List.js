/**
 * This view is an example list of people.
 */
Ext.define('MyApp.view.main.List', {
    extend: 'Ext.grid.Grid',
    xtype: 'mainlist',

    requires: [
        'MyApp.store.Personnel'
    ],

    title: 'Personnel',
    plugins: [{
        type: 'grideditable',
        enableDeleteButton: true, // Defaults to true
        triggerEvent: 'childtap' // Defaults to childdoubletap
    }],

    store: {
        type: 'personnel'
    },
    columns: [
        {
            text: 'Name',
            dataIndex: 'name',
            width: 100,
            editable: true,
            cell: {
                userCls: 'bold'
            }
        }, {
            text: 'Email',
            dataIndex: 'email',
            editable: true,
            width: 230
        }, {
            text: 'Phone',
            dataIndex: 'phone',
            editable: true,
            width: 150
        }, {
            text: 'City',
            dataIndex: 'city',
            editable: true,
            width: 150
        }]

});
