import Component from '@ember/component';
import { PerfectScrollbarMixin } from 'ember-perfect-scrollbar';

export default Component.extend(PerfectScrollbarMixin, {
    tagName: "tbody"
});
