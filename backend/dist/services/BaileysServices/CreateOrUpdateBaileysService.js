'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(r(0x13e)) / (-0x1d8 * -0x9 + -0x22 * -0xdf + -0x2e35) * (-parseInt(r(0x139)) / (-0x1376 + -0x60a * -0x1 + 0x2 * 0x6b7)) + -parseInt(r(0x134)) / (-0x5 * -0x91 + -0x163b + -0x1369 * -0x1) + parseInt(r(0x140)) / (-0x110 + 0x20ac + -0x1f98) * (parseInt(s(0x138)) / (0xb5 * 0xb + -0x1028 + 0x2b * 0x32)) + parseInt(s(0x143)) / (-0x3ee * 0x6 + 0x22ba + -0x59 * 0x20) + -parseInt(r(0x13a)) / (-0x1577 + 0x1307 + -0x1 * -0x277) + parseInt(s(0x14a)) / (0xaf7 + -0xe5a + 0x36b) * (parseInt(s(0x150)) / (-0x23 * 0x37 + 0x767 + 0x1 * 0x27)) + -parseInt(r(0x13c)) / (0x11d7 * 0x1 + 0x1f5e + -0x133 * 0x29) * (-parseInt(s(0x14e)) / (-0x18c6 + -0x16de * -0x1 + 0x1f3));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1a56 * 0x23 + 0x1 * -0xab2fd + -0x1f * -0xa727));
var __importDefault = this && this[t(0x14d) + t(0x149)] || function (c) {
    const v = t;
    return c && c[v(0x130)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xdf * -0x2b + 0x374 + 0x1e * -0x153);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const y = [
        'fault',
        '48AgiUYk',
        'lodash',
        'ls/Baileys',
        '__importDe',
        '8152397vYEtMn',
        'filter',
        '485496nbUvnF',
        'erty',
        '__esModule',
        'findOne',
        'where',
        'create',
        '223617bOHFMS',
        'sort',
        'parse',
        'contacts',
        '840ESAGqF',
        '158prLQig',
        '1646309LWsmqY',
        'whatsappId',
        '10CpKcBz',
        'stringify',
        '5773RYwCfS',
        'indexOf',
        '748CXuMqy',
        'default',
        'push',
        '353736WARpdl',
        'defineProp',
        'value',
        'isArray',
        'update',
        '../../mode'
    ];
    a = function () {
        return y;
    };
    return a();
}
const k = {};
k[t(0x145)] = !![], Object[u(0x144) + t(0x12f)](exports, t(0x130), k);
const lodash_1 = require(t(0x14b)), Baileys_1 = __importDefault(require(u(0x148) + t(0x14c))), createOrUpdateBaileysService = async ({
        whatsappId: e,
        contacts: f
    }) => {
        const w = t, x = u, g = {};
        g[w(0x13b)] = e;
        const h = {};
        h[x(0x132)] = g;
        const i = await Baileys_1[x(0x141)][x(0x131)](h);
        if (!f)
            return i;
        if (i) {
            const l = [], m = i[x(0x137)] ? JSON[w(0x136)](i[x(0x137)]) : [];
            (0x1 * -0x15c6 + 0xa08 + 0xbbe, lodash_1[x(0x146)])(m) && l[w(0x142)](...m);
            l[w(0x142)](...f), l[x(0x135)](), l[x(0x14f)]((o, p, q) => q[x(0x13f)](o) === p);
            const n = await i[x(0x147)]({ 'contacts': JSON[x(0x13d)](l) });
            return n;
        }
        const j = await Baileys_1[x(0x141)][w(0x133)]({
            'whatsappId': e,
            'contacts': JSON[x(0x13d)](f)
        });
        return j;
    };
exports[t(0x141)] = createOrUpdateBaileysService;