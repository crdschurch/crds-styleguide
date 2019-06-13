import { h } from '../crds-components.core.js';

class Utils {
    static getMeta(prop) {
        let el = document.querySelector(`meta[property*="${prop}"]`);
        if (el) {
            return el.getAttribute('content');
        }
    }
    static parameterize(str) {
        return str
            .toLowerCase()
            .replace(/[^a-z]/g, '-')
            .replace(/-{2,}/g, '-');
    }
    static getCookie(name) {
        var value = '; ' + document.cookie;
        var parts = value.split('; ' + name + '=');
        if (parts.length == 2)
            return parts
                .pop()
                .split(';')
                .shift();
    }
}

class Logger {
    constructor(output = false) {
        this.debug = output;
    }
    log(ns, msg = '') {
        if (this.debug) {
            console.log(ns, msg);
        }
    }
}

class Config {
    space_id() {
        return Utils.getMeta('cfl:space_id') || "y3a9myzsdjan";
    }
    env() {
        return Utils.getMeta('cfl:env') || "int" || 'master';
    }
    token() {
        return Utils.getMeta('cfl:token') || "cdc473421d1e2f089515a5fe791ef575715b67024840b6aa1ee157b0e43d18d3";
    }
    endpoint() {
        return `https://cdn.contentful.com/spaces/${this.space_id()}/environments/${this.env()}`;
    }
}

export { Utils as a, Logger as b, Config as c };
