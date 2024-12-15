'use strict';
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(n(0xf1)) / (0x4ed * 0x2 + 0x407 * -0x2 + -0x1cb) + -parseInt(o(0xe1)) / (-0x1 * 0x1b2e + -0x1af * -0xb + 0x8ab) * (parseInt(n(0xed)) / (-0x23bf + 0x186 + 0x139 * 0x1c)) + -parseInt(o(0xf0)) / (-0x240c + -0x19 * -0xb7 + -0x1 * -0x1231) + -parseInt(n(0xee)) / (0x14e + 0x13 * 0x170 + 0x1 * -0x1c99) * (-parseInt(n(0xf5)) / (-0x1 * 0x1e1f + 0x24 * -0x113 + -0xdf * -0x4f)) + parseInt(o(0xde)) / (-0x1 * 0xca9 + -0x1784 + 0x14b * 0x1c) * (parseInt(o(0xdb)) / (0x2641 + 0x1f00 + -0x4539)) + parseInt(n(0xe4)) / (0x26 * -0x39 + 0xa1 * 0xb + 0x2 * 0xca) + parseInt(n(0xe3)) / (0x1 * -0x31d + -0xa7b * 0x1 + -0x6d1 * -0x2) * (parseInt(n(0xf7)) / (0x266f + 0x1a80 + -0x40e4));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x82518 + 0x1 * -0x7a875 + 0x1894f7));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x593 * 0x6 + 0x10 * -0xbf + 0x295 * -0x8);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const u = [
        '484vakaYc',
        'findOne',
        '565720XaGmic',
        '585432nhEppe',
        '__esModule',
        '../models/',
        'egração:',
        'error',
        'ter\x20id\x20int',
        'tmhdQ',
        'Apgvw',
        'defineProp',
        '12195pEaQEM',
        '170dtfHBG',
        'Queue',
        '340148iqOHZc',
        '796030AMyvEo',
        'scar\x20integ',
        '__importDe',
        'nId',
        '55836gwnMXd',
        'where',
        '374IBkvCO',
        'ração.',
        'erty',
        'Erro\x20ao\x20bu',
        'default',
        '63640sCyiEv',
        'value',
        'Erro\x20ao\x20ob',
        '119sdXKgn',
        'fault',
        'integratio'
    ];
    a = function () {
        return u;
    };
    return a();
}
var __importDefault = this && this[p(0xf3) + p(0xdf)] || function (c) {
    const r = p;
    return c && c[r(0xe5)] ? c : { 'default': c };
};
const k = {};
k[q(0xdc)] = !![], Object[q(0xec) + q(0xf9)](exports, p(0xe5), k);
const Queue_1 = __importDefault(require(q(0xe6) + q(0xef))), GetIntegrationsID = async f => {
        const s = p, t = p, g = {};
        g[s(0xeb)] = s(0xdd) + s(0xe9) + s(0xe7), g[t(0xea)] = s(0xfa) + t(0xf2) + s(0xf8);
        const h = g;
        try {
            const i = {};
            i['id'] = f;
            const j = {};
            j[s(0xf6)] = i;
            const l = await Queue_1[s(0xda)][s(0xe2)](j);
            if (l[s(0xe0) + t(0xf4)])
                return l[s(0xe0) + s(0xf4)];
            return null;
        } catch (m) {
            console[s(0xe8)](h[s(0xeb)], m);
            throw new Error(h[s(0xea)]);
        }
    };
exports[q(0xda)] = GetIntegrationsID;