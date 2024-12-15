'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0x14e)) / (0x7 * 0x3bc + -0xd8 * 0x2 + -0x1873) + -parseInt(q(0x15f)) / (-0x62 * -0x2b + 0x3 * -0x4ee + -0x1aa) + parseInt(p(0x15c)) / (-0xe * 0x18e + -0x24f2 + 0x3ab9) + -parseInt(q(0x15b)) / (-0x1 * 0x35b + -0x27a + -0x1 * -0x5d9) + parseInt(q(0x15a)) / (0x3 * -0x914 + 0x2 * 0x5cf + -0xfa3 * -0x1) * (-parseInt(q(0x14b)) / (0x1 * -0xeb1 + -0x1fdf + 0x2e96)) + -parseInt(p(0x160)) / (-0x1 * 0x893 + -0x1d87 * -0x1 + -0x14ed) * (parseInt(q(0x163)) / (0xdc6 + -0x2261 * 0x1 + 0x14a3)) + parseInt(p(0x154)) / (0x196c + -0x21 * -0x61 + 0x12f2 * -0x2) * (parseInt(p(0x156)) / (0x14b6 + 0x53 * -0x8 + -0x1214));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x22 * -0x64ab + 0xb2c4c + -0xc5ceb));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2b * -0xa7 + 0x2b1 * -0x3 + -0x12af);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[r(0x15d) + s(0x162)] || function (c) {
    const t = r;
    return c && c[t(0x151)] ? c : { 'default': c };
};
const k = {};
k[r(0x15e)] = !![], Object[r(0x150) + s(0x14c)](exports, s(0x151), k);
const Setting_1 = __importDefault(require(s(0x159) + r(0x14f))), UpdateSettingService = async ({
        key: g,
        value: h,
        tenantId: i
    }) => {
        const u = s, v = s, j = {};
        j[u(0x153)] = g, j[u(0x157)] = i;
        const l = {};
        l[u(0x158)] = j;
        let m = await Setting_1[v(0x155)][u(0x161)](l);
        if (!m) {
            const n = {};
            n[v(0x153)] = g, n[v(0x15e)] = h, n[u(0x157)] = i, m = await Setting_1[u(0x155)][v(0x152)](n);
        } else {
            const o = {};
            o[v(0x15e)] = h, await m[u(0x14d)](o);
        }
        return m;
    };
exports[r(0x155)] = UpdateSettingService;
function a() {
    const w = [
        'where',
        '../../mode',
        '25fJuqyK',
        '1010680LvQHaN',
        '1371819Xbzdnk',
        '__importDe',
        'value',
        '1528256SHcmAY',
        '2044bhbmOe',
        'findOne',
        'fault',
        '18664NGwluY',
        '1721178wAMEss',
        'erty',
        'update',
        '219520jsXcFy',
        'ls/Setting',
        'defineProp',
        '__esModule',
        'create',
        'key',
        '151731cLVcrq',
        'default',
        '1930vYuYjx',
        'tenantId'
    ];
    a = function () {
        return w;
    };
    return a();
}