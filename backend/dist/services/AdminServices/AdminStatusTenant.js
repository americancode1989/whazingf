'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(l(0xec)) / (-0x6 * -0x567 + -0x3b3 + -0x1cb6) + -parseInt(l(0xf2)) / (0x143f + 0xb * 0x29 + -0x1600) + -parseInt(m(0xf1)) / (0x1 * 0xbf5 + 0x3 * -0x676 + 0x770) + -parseInt(m(0xe7)) / (0x20 * 0x112 + -0x2a * -0xeb + -0x48ca) * (-parseInt(m(0xee)) / (-0x1 * -0x1d0b + 0x1267 + -0x2f6d)) + -parseInt(m(0xf0)) / (0xf8 * 0x23 + -0x19e7 + -0x7fb) * (-parseInt(l(0xe5)) / (0x7e1 + -0x1722 + 0xa3 * 0x18)) + parseInt(l(0xef)) / (-0x2e * -0xa2 + -0x21a1 + -0x5 * -0xe9) + parseInt(l(0xe4)) / (-0xfeb + 0x23dd + -0x13e9) * (-parseInt(l(0xfc)) / (-0x26 * 0xa4 + -0x1 * -0x22e5 + -0xa83));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x75 * -0x58f + 0x3b2f3 + 0x5324 * -0x9));
var __importDefault = this && this[n(0xe9) + n(0xf8)] || function (c) {
    const p = o;
    return c && c[p(0xf3)] ? c : { 'default': c };
};
function a() {
    const s = [
        'ls/Tenant',
        'ownerId',
        '63873XHfiXV',
        'update',
        '45cqVdRR',
        '2699528clFzsA',
        '6uqBIFd',
        '696537Dhzxko',
        '145824NbXfhk',
        '__esModule',
        'erty',
        '../../mode',
        'value',
        'status',
        'fault',
        'name',
        'findByPk',
        'defineProp',
        '861070yIPbks',
        '63cgzCvC',
        '3017581oikGdO',
        'cnpj',
        '130132oNRsPz',
        'default',
        '__importDe'
    ];
    a = function () {
        return s;
    };
    return a();
}
const k = {};
k[n(0xf6)] = !![], Object[n(0xfb) + n(0xf4)](exports, n(0xf3), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x30f * -0x4 + -0x22d9 + 0x2ff9);
        let h = e[f];
        return h;
    }, b(c, d);
}
const Tenant_1 = __importDefault(require(n(0xf5) + n(0xea))), AdminStatusTenant = async ({
        id: e,
        status: f
    }) => {
        const q = n, r = o, g = await Tenant_1[q(0xe8)][r(0xfa)](e), h = {};
        h[q(0xf7)] = f, await g[r(0xed)](h);
        const i = {};
        i['id'] = g['id'], i[r(0xf9)] = g[q(0xf9)], i[q(0xe6)] = g[r(0xe6)], i[r(0xf7)] = f, i[r(0xeb)] = g[q(0xeb)];
        const j = i;
        return j;
    };
exports[o(0xe8)] = AdminStatusTenant;