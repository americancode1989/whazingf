'use strict';
const w = b, x = b;
(function (c, d) {
    const u = b, v = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(u(0x1d5)) / (0x18 * 0x29 + 0x13 * 0x13 + -0x540) + -parseInt(v(0x1ee)) / (-0x1 * 0xa48 + -0x8b * -0x11 + -0x10f * -0x1) * (parseInt(v(0x1ed)) / (0x2593 + -0x187b + -0x1 * 0xd15)) + -parseInt(v(0x1e1)) / (-0x1c34 + -0x61 * -0x35 + -0x823 * -0x1) + -parseInt(v(0x1e3)) / (0x454 * 0x1 + -0x3f3 * 0x1 + -0x5c) + -parseInt(u(0x1d0)) / (-0x142b + 0x1bb1 + -0x10 * 0x78) * (parseInt(v(0x1e4)) / (0x104b + -0x19ad + 0xb * 0xdb)) + -parseInt(v(0x1d2)) / (-0x22c * -0x8 + -0xac4 + -0x694) * (-parseInt(u(0x1ec)) / (-0x710 + 0x17c9 + 0x2 * -0x858)) + parseInt(v(0x1e6)) / (-0x926 + -0x2 * 0x8d8 + 0x1ae0) * (parseInt(v(0x1e5)) / (0x1 * -0x71f + -0x1 * 0x63 + 0x78d));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x161525 + 0x151ed6 + -0xb * -0x12ebb));
function a() {
    const B = [
        '38360woqJKD',
        'JyoZa',
        'ls/Farewel',
        '1276736bUsaat',
        'tenantId',
        'erty',
        'userId',
        '__importDe',
        '__esModule',
        'sequelize',
        'lMessage',
        'fault',
        'order',
        'defineProp',
        'createdAt',
        '4835536wfiLNY',
        'farewellMe',
        '1659335zJsTra',
        '7hrUWbG',
        '110ommWPW',
        '499240GcImfb',
        'findAll',
        'global',
        'where',
        'default',
        'value',
        '2385AaGjRo',
        '3OuYbzW',
        '1417838gVNyQs',
        '../../mode',
        'ssages',
        'YnYOV',
        '45282gxmsbv',
        'DESC'
    ];
    a = function () {
        return B;
    };
    return a();
}
var __importDefault = this && this[w(0x1d9) + w(0x1dd)] || function (c) {
    const y = w;
    return c && c[y(0x1da)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xc95 + -0x3 * -0x17b + -0xf39);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[x(0x1eb)] = !![], Object[x(0x1df) + w(0x1d7)](exports, x(0x1da), k);
const sequelize_1 = require(x(0x1db)), FarewellMessage_1 = __importDefault(require(x(0x1cd) + x(0x1d4) + x(0x1dc))), ListFarewellMessageService = async ({
        tenantId: i,
        userId: j
    }) => {
        const z = x, A = x, l = {};
        l[z(0x1cf)] = z(0x1e0), l[A(0x1d3)] = z(0x1d1);
        const m = l, n = {};
        n[A(0x1d8)] = j;
        const o = {};
        o[A(0x1e8)] = !![];
        const p = {
            [sequelize_1['Op']['or']]: [
                n,
                o
            ]
        };
        p[z(0x1d6)] = i;
        const q = p, r = {};
        r[A(0x1e9)] = q, r[A(0x1de)] = [[
                m[A(0x1cf)],
                m[A(0x1d3)]
            ]];
        const s = await FarewellMessage_1[z(0x1ea)][z(0x1e7)](r), t = {};
        return t[z(0x1e2) + z(0x1ce)] = s, t;
    };
exports[x(0x1ea)] = ListFarewellMessageService;