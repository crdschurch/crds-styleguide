import { h } from '../crds-components.core.js';

import { c as axios } from './chunk-fa835f3e.js';

class SnailTrail {
    constructor() {
        this.env = 'prod';
        this.data = [];
    }
    componentWillLoad() {
        const url = this.src || `https://crds-data.netlify.com/snail-trails/${this.name}/${this.env}.json`;
        axios.get(url).then(response => (this.data = response.data));
    }
    listItems() {
        return this.data.map(item => {
            if (typeof item === 'string')
                return h("span", null, item);
            let attrs = { href: item.path };
            if (item['automation-id'])
                attrs['data-automation-id'] = item['automation-id'];
            return (h("li", null,
                h("a", Object.assign({}, attrs), item.title)));
        });
    }
    render() {
        if (this.data.length === 0)
            return null;
        return (h("nav", null,
            h("div", null,
                h("ul", null, this.listItems()))));
    }
    static get is() { return "snail-trail"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "data": {
            "state": true
        },
        "env": {
            "type": String,
            "attr": "env"
        },
        "name": {
            "type": String,
            "attr": "name"
        },
        "src": {
            "type": String,
            "attr": "src"
        }
    }; }
    static get style() { return "nav{font-family:acumin-pro,helvetica,arial,sans-serif!important;font-weight:300!important;background-color:#fff;-webkit-box-shadow:0 1px 6px 0 rgba(0,0,0,.14);box-shadow:0 1px 6px 0 rgba(0,0,0,.14);font-size:14px;padding-left:20px;position:relative}\@media (min-width:1170px){nav{padding-left:0}}nav>div{display:-ms-flexbox;display:flex;margin:0 auto;max-width:1170px}\@media (max-width:992px){nav:after{background:-webkit-gradient(linear,left top,right top,from(hsla(0,0%,100%,0)),to(rgba(0,0,0,.8)));background:linear-gradient(90deg,hsla(0,0%,100%,0),rgba(0,0,0,.8));content:\"\";display:inline-block;height:100%;opacity:.3;position:absolute;right:0;top:0;width:20px}}span{color:#4d4d4d;display:inline-block;font-weight:600;padding:11px 0;text-transform:capitalize;white-space:nowrap}span:after{border-right:1px solid #d8d8d8;content:\"\";height:100%;margin-left:15px;width:1px}ul{padding-left:0;-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;margin-bottom:0;margin-top:0;-webkit-overflow-scrolling:touch;overflow-x:scroll;overflow-y:hidden;scrollbar-width:none}ul li{list-style:none}ul::-webkit-scrollbar{display:none}a{color:#4d4d4d;display:block;font-weight:300;padding:11px 15px;position:relative;text-decoration:none}a.is-active:after,a:hover:after{background-color:#0095d9;bottom:0;content:\"\";display:inline-block;height:2px;left:15px;position:absolute;width:calc(100% - 30px)}li{display:inline-block;-ms-flex:none;flex:none;text-transform:capitalize}li:last-of-type a{color:#0095d9;position:relative}li:last-of-type a:before{border-right:1px solid #d8d8d8;content:\"\";display:inline-block;height:calc(100% - 22px);left:0;position:absolute;width:1px}li:last-of-type a:hover{color:#0072a6}"; }
}

export { SnailTrail };
