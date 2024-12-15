'use strict';
const u = b, v = b;
(function (c, d) {
    const s = b, t = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(s(0xec)) / (-0xe56 + -0xbd * -0x1d + -0x389 * 0x2) + -parseInt(t(0xe5)) / (-0x1639 + -0xb93 + 0x21ce) + parseInt(t(0xe1)) / (0xb39 + -0x3 * 0x639 + 0x775) + -parseInt(s(0xf9)) / (-0x14fd + 0xc5 * 0x4 + 0x1 * 0x11ed) + parseInt(t(0xf5)) / (-0x1 * 0x21b3 + -0xc12 + 0x16e5 * 0x2) * (-parseInt(s(0xe8)) / (0xa * 0x187 + 0x650 + -0x1590)) + -parseInt(s(0xf1)) / (0xd44 + -0x1547 + 0x80a) + -parseInt(s(0x104)) / (-0xb * 0x31 + -0x141e + -0x279 * -0x9) * (-parseInt(s(0x102)) / (0x770 + 0x4a * -0x36 + 0x1 * 0x835));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x32f2 * 0x20 + 0x277c5 + -0x74cd * 0x8));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x23be + 0xf45 + -0x2 * -0xaad);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const z = [
        'HgtNL',
        'col',
        'sequelize',
        'trim',
        'findAndCou',
        'hasMore',
        'Sequelize',
        'dfYuv',
        '14492799vdQrbY',
        'title',
        '8TICMmF',
        'ntAll',
        'defineProp',
        'qDULW',
        'order',
        'offset',
        'ASC',
        'toLowerCas',
        'count',
        'default',
        '434055ylBncN',
        'ahVCn',
        'length',
        '../../mode',
        '814402iEcKCa',
        'records',
        '__importDe',
        '1494AeiHJa',
        'wMSyY',
        'where',
        'value',
        '492753BVeJlC',
        '__esModule',
        'erty',
        'OjYIL',
        'LIKE',
        '459795cPPFbG',
        'ls/Help',
        'fault',
        'LOWER',
        '2915oMgQkT',
        'limit',
        'hiZeX',
        'hjqlK',
        '1217284gkzFHZ'
    ];
    a = function () {
        return z;
    };
    return a();
}
var __importDefault = this && this[u(0xe7) + v(0xf3)] || function (c) {
    const w = u;
    return c && c[w(0xed)] ? c : { 'default': c };
};
const k = {};
k[u(0xeb)] = !![], Object[u(0x106) + v(0xee)](exports, v(0xed), k);
const sequelize_1 = require(v(0xfc)), Help_1 = __importDefault(require(v(0xe4) + v(0xf2))), ListService = async ({
        searchParam: searchParam = '',
        pageNumber: pageNumber = '1'
    }) => {
        const x = u, y = u, f = {};
        f[x(0x107)] = x(0xf4), f[x(0xf8)] = x(0x103), f[x(0xef)] = y(0xf0), f[y(0xfa)] = function (q, r) {
            return q * r;
        }, f[y(0xf7)] = function (q, r) {
            return q - r;
        }, f[x(0xe2)] = y(0x10a), f[y(0x101)] = function (q, r) {
            return q > r;
        }, f[x(0xe9)] = function (q, r) {
            return q + r;
        };
        const g = f, h = { [sequelize_1['Op']['or']]: [{ 'title': sequelize_1[x(0x100)][y(0xea)](sequelize_1[y(0x100)]['fn'](g[x(0x107)], sequelize_1[y(0x100)][x(0xfb)](g[x(0xf8)])), g[y(0xef)], '%' + searchParam[y(0x10b) + 'e']()[y(0xfd)]() + '%') }] }, i = 0x1c4b * 0x1 + -0x115 * 0x1f + -0x1 * -0x554, j = g[x(0xfa)](i, g[y(0xf7)](+pageNumber, 0x24c + 0x1784 + -0x19cf)), l = {};
        l[x(0xea)] = h, l[x(0xf6)] = i, l[y(0x109)] = j, l[x(0x108)] = [[
                g[x(0xf8)],
                g[y(0xe2)]
            ]];
        const {
                count: m,
                rows: n
            } = await Help_1[x(0x10d)][x(0xfe) + y(0x105)](l), o = g[y(0x101)](m, g[y(0xe9)](j, n[y(0xe3)])), p = {};
        return p[y(0xe6)] = n, p[y(0x10c)] = m, p[y(0xff)] = o, p;
    };
exports[u(0x10d)] = ListService;