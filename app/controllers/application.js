import Ember from 'ember';

export default Ember.Controller.extend({
    init() {
        this._super();

        let records = Ember.A();
        let limit = 1000;

        for (let i = 0; i < limit; i++) {
            records.push({
                column1: 1,
                column2: 2,
                column3: 3,
                column4: 4,
                column5: 5,
                column6: 6,
                column7: 7,
                column8: 8,
                column9: 9,
                column10: 10
            });
        }

        this.set('records', records);
    }
});
