import { h } from '../crds-components.core.js';

import { a as Fragment } from './chunk-1d89c98b.js';
import { c as axios } from './chunk-fa835f3e.js';

class SharedFooter {
    constructor() {
        this.env = 'prod';
        this.data = [];
    }
    componentWillLoad() {
        const url = this.src || `https://crds-data.netlify.com/shared-footer/${this.env}.json`;
        axios.get(url).then(response => (this.data = response.data));
    }
    renderElement(el) {
        if (!el.path)
            return el.title;
        let attrs = {
            target: el.path.match(/:\/\//) ? '_blank' : '',
            href: el.path
        };
        if (el['automation-id'])
            attrs['data-automation-id'] = el['automation-id'];
        return h("a", Object.assign({}, attrs), el.img ? h("img", { src: el.img, alt: el.title, title: el.title }) : el.title);
    }
    renderGroups(groups) {
        const groupMarkup = groups.map(group => {
            if (!group.children)
                return h("li", null, this.renderElement(group));
            return (h(Fragment, null,
                h("p", null, group.title),
                h("ul", null, group.children.map(el => (h("li", null, this.renderElement(el)))))));
        });
        const Tag = groups.filter(g => g.children).length > 0 ? 'Fragment' : 'ul';
        return h(Tag, null, groupMarkup);
    }
    renderColumns() {
        return this.data.map(column => (h("div", { class: column.class },
            h("h5", null, this.renderElement(column)),
            this.renderGroups(column.children))));
    }
    render() {
        if (this.data.length === 0)
            return null;
        return (h("footer", null,
            h("div", { class: "container" }, this.renderColumns())));
    }
    static get is() { return "shared-footer"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "data": {
            "state": true
        },
        "env": {
            "type": String,
            "attr": "env"
        },
        "src": {
            "type": String,
            "attr": "src"
        }
    }; }
    static get style() { return "footer{font-family:acumin-pro,helvetica,arial,sans-serif!important;font-weight:300!important;color:#737373;background-color:#e7e7e7;overflow:hidden;padding:3.125rem 0}footer .container{margin:0 auto;max-width:1170px}\@media only screen and (min-width:768px){footer .container{display:-ms-flexbox;display:flex}}footer .container div{padding-left:15px;padding-right:15px;margin-bottom:24px;vertical-align:top}\@media only screen and (min-width:768px){footer .container div{-ms-flex:1;flex:1;width:16.66667%}}footer .container div p{margin-bottom:0;font-weight:700}footer .container div ul{list-style-type:none;margin:0;padding-left:0}footer .container div.social-icons{padding-left:0}\@media only screen and (min-width:768px){footer .container div.social-icons{-ms-flex:2;flex:2;text-align:right;width:33.33333%}}footer .container div.social-icons li{display:inline}footer .container div.social-icons li a{-webkit-box-sizing:border-box;box-sizing:border-box;margin-left:.75rem;background:#737373;border-radius:50%;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-pack:center;justify-content:center;height:36px;width:36px;padding:10px}footer .container div.social-icons li a img{max-width:100%}footer .container a{color:#737373;text-decoration:none}footer .container h5{font-size:16.1px!important;line-height:1.1;margin:12px 0}"; }
}

export { SharedFooter };
