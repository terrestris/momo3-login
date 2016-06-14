Ext.define('MoMo.login.store.USStatesStore', {
    extend: 'Ext.data.Store',

    /**
     *
     */
    fields: ["val", "name"],

    /**
     *
     */
    alias: 'store.usstatestore',

    /**
     *
     */
    data: [
        {"val": "XX", "name": "Outside US"},
        {"val": "AL", "name": "Alabama"},
        {"val": "AK", "name": "Alaska"},
        {"val": "AZ", "name": "Arizona"},
        {"val": "AR", "name": "Arkansas"},
        {"val": "CA", "name": "California"},
        {"val": "CO", "name": "Colorado"},
        {"val": "CT", "name": "Connecticut"},
        {"val": "DE", "name": "Delaware"},
        {"val": "FL", "name": "Florida"},
        {"val": "GA", "name": "Georgia"},
        {"val": "HI", "name": "Hawaii"},
        {"val": "ID", "name": "Idaho"},
        {"val": "IL", "name": "Illinois"},
        {"val": "IN", "name": "Indiana"},
        {"val": "IA", "name": "Iowa"},
        {"val": "KS", "name": "Kansas"},
        {"val": "KY", "name": "Kentucky[D]"},
        {"val": "LA", "name": "Louisiana"},
        {"val": "ME", "name": "Maine"},
        {"val": "MD", "name": "Maryland"},
        {"val": "MA", "name": "Massachusetts[E]"},
        {"val": "MI", "name": "Michigan"},
        {"val": "MN", "name": "Minnesota"},
        {"val": "MS", "name": "Mississippi"},
        {"val": "MO", "name": "Missouri"},
        {"val": "MT", "name": "Montana"},
        {"val": "NE", "name": "Nebraska"},
        {"val": "NV", "name": "Nevada"},
        {"val": "NH", "name": "New Hampshire"},
        {"val": "NJ", "name": "New Jersey"},
        {"val": "NM", "name": "New Mexico"},
        {"val": "NY", "name": "New York"},
        {"val": "NC", "name": "North Carolina"},
        {"val": "ND", "name": "North Dakota"},
        {"val": "OH", "name": "Ohio"},
        {"val": "OK", "name": "Oklahoma"},
        {"val": "OR", "name": "Oregon"},
        {"val": "PA", "name": "Pennsylvania[F]"},
        {"val": "RI", "name": "Rhode Island[G]"},
        {"val": "SC", "name": "South Carolina"},
        {"val": "SD", "name": "South Dakota"},
        {"val": "TN", "name": "Tennessee"},
        {"val": "TX", "name": "Texas"},
        {"val": "UT", "name": "Utah"},
        {"val": "VT", "name": "Vermont"},
        {"val": "VA", "name": "Virginia[H]"},
        {"val": "WA", "name": "Washington"},
        {"val": "WV", "name": "West Virginia"},
        {"val": "WI", "name": "Wisconsin"},
        {"val": "WY", "name": "Wyoming"}
    ]
});
