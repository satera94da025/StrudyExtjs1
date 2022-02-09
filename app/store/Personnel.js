Ext.define('MyApp.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    model: 'MyApp.model.Personnel',

    data: {
        items:
            [
                {name: 'Jean Luc', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111", city: "Moscow"},
                {name: 'Worf', email: "worf.moghsson@enterprise.ru", phone: "555-222-2222", city: "San-Francisco"},
                {name: 'Deanna', email: "deanna.troi@enterprise.com", phone: "555-333-3333", city: "New York"},
                {name: 'Data', email: "mr.data@enterprise.ru", phone: "555-444-4444", city: "New Jersey"},
                {name: 'Alex Luc', email: "jeanluc.picard@enterprise.com", phone: "555-111-9980", city: "Barcelona"},
                {name: 'Wolf Messing', email: "worf.moghsson@enterprise.ru", phone: "555-222-6789", city: "Torino"},
                {name: 'Deanna Habr', email: "deanna.troi@enterprise.com", phone: "555-333-4567", city: "Amsterdam"},
                {name: 'Max Lyter', email: "mr.data@enterprise.ru", phone: "555-444-1234", city: "Paris"},
            ]
    },

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});

