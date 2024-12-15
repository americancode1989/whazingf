'use strict';
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(o(0x16e)) / (-0xaf3 * -0x1 + 0x459 + -0x105 * 0xf) + -parseInt(p(0x15d)) / (-0x1 * 0xf3 + 0x210b * -0x1 + 0x100 * 0x22) * (-parseInt(o(0x15f)) / (-0x1096 + -0x1d87 + -0x2e20 * -0x1)) + -parseInt(p(0x168)) / (-0x2 * -0x76d + 0x8cb * -0x1 + -0x60b) * (-parseInt(p(0x163)) / (-0x3 * 0x83d + 0x276 * -0xc + 0x3644)) + parseInt(o(0x161)) / (0x20cc + 0x3a * 0x83 + -0x3e74) * (-parseInt(p(0x16c)) / (0x2c * -0xbb + 0xa98 + -0x3 * -0x731)) + parseInt(p(0x176)) / (0x809 + -0x2 * -0xb11 + -0x1e23) * (-parseInt(p(0x167)) / (-0xe88 + 0x6 * 0x529 + -0x577 * 0x3)) + -parseInt(p(0x169)) / (0x1 * 0xdd + 0x3a1 + 0x3 * -0x17c) * (-parseInt(o(0x160)) / (0x2 * -0x102d + 0x191 * -0x3 + 0x2 * 0x128c)) + -parseInt(p(0x16f)) / (0x1a5a + 0x69 * 0x36 + -0x3074) * (-parseInt(p(0x171)) / (-0x3 * -0x48e + 0x1d1a + -0x2ab7));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x7f * 0x6bb + 0x1 * -0x758db + 0x48313 * 0x2));
var __importDefault = this && this[q(0x15e) + r(0x175)] || function (c) {
    const s = q;
    return c && c[s(0x158)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x179d + -0x4 * -0x841 + -0x374a);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
function a() {
    const v = [
        '__esModule',
        'dtrUK',
        'default',
        'where',
        'ERR_GRUOP_',
        '2JneFkF',
        '__importDe',
        '263451QDQFih',
        '4323XdXnyk',
        '10290JIvMSD',
        'value',
        '5kZhRAf',
        'xXTFN',
        'ERR_NO_GRO',
        '../../erro',
        '9AkHpac',
        '1701164kQxcjr',
        '3580AOotzF',
        'defineProp',
        'ls/Group',
        '896zgkfhF',
        'UP_FOUND',
        '187441IUgfYN',
        '202044eMNeIp',
        'findOne',
        '91IJHrhb',
        'rs/AppErro',
        'NO_EXISTS',
        'tenantId',
        'fault',
        '3286896dCyZIu',
        'destroy',
        'erty',
        '../../mode'
    ];
    a = function () {
        return v;
    };
    return a();
}
k[r(0x162)] = !![], Object[r(0x16a) + q(0x178)](exports, r(0x158), k);
const AppError_1 = __importDefault(require(q(0x166) + r(0x172) + 'r')), Group_1 = __importDefault(require(q(0x157) + r(0x16b))), DeleteGroupService = async ({
        id: f,
        tenantId: g
    }) => {
        const t = r, u = r, h = {};
        h[t(0x164)] = u(0x165) + t(0x16d), h[t(0x159)] = u(0x15c) + u(0x173);
        const i = h, j = {};
        j['id'] = f, j[u(0x174)] = g;
        const l = {};
        l[t(0x15b)] = j;
        const m = await Group_1[u(0x15a)][t(0x170)](l);
        if (!m)
            throw new AppError_1[(t(0x15a))](i[u(0x164)], -0x1 * 0x24c1 + 0x1 * 0x1201 + 0x1454);
        try {
            await m[t(0x177)]();
        } catch (n) {
            throw new AppError_1[(u(0x15a))](i[u(0x159)], 0x41b * 0x2 + -0x5 * 0x751 + 0xbb * 0x29);
        }
    };
exports[r(0x15a)] = DeleteGroupService;