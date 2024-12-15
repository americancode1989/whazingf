'use strict';
const y = b, z = b;
(function (c, d) {
    const w = b, x = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(w(0x139)) / (0x1063 + -0x1 * 0x1652 + -0x1 * -0x5f0) + -parseInt(w(0x111)) / (0x199d * 0x1 + -0x1f69 + 0x5ce) + -parseInt(x(0x135)) / (0x1a76 + -0x1 * -0xe57 + -0x2 * 0x1465) * (parseInt(w(0x13e)) / (-0x1c3 + -0xe94 * -0x2 + -0x1b61)) + parseInt(w(0x12d)) / (-0x265a + -0xe36 + 0x3495 * 0x1) + -parseInt(w(0x132)) / (0x1cb9 + -0x1e94 + -0x1 * -0x1e1) + -parseInt(x(0x130)) / (0x254a + 0x96e + -0x2eb1) + parseInt(x(0x113)) / (0x17c5 * 0x1 + 0x5c1 + -0x97 * 0x32);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x522a5 * 0x3 + -0x476a6 + -0x6749 * 0x2));
function a() {
    const D = [
        'LIKE',
        'DdETD',
        'default',
        'order',
        'TpsPN',
        '3707375xyTvqJ',
        'length',
        'OgEum',
        '5176906jjnrTL',
        'email',
        '6746982iwnKph',
        'col',
        '../../mode',
        '294510BVZHZx',
        'erty',
        'DkJQL',
        'offset',
        '1143689rsHVFa',
        'findAndCou',
        'attributes',
        'LOWER',
        'KybeU',
        '4KtHxOH',
        'HVpzW',
        'count',
        'rCxqc',
        'include',
        '__esModule',
        'queue',
        'Sequelize',
        'ntAll',
        'value',
        'sequelize',
        'defineProp',
        'toLowerCas',
        '1695136tzcqMO',
        'yHecb',
        '12711008KgyaJq',
        'model',
        'OWFSU',
        'hasMore',
        'fault',
        'profile',
        'ls/User',
        'tjTMk',
        'limit',
        'ASC',
        'SzChf',
        'ls/Tenant',
        'User.name',
        'users',
        'UyujV',
        '__importDe',
        'where',
        'ls/Queue',
        'name',
        'like',
        'distinct'
    ];
    a = function () {
        return D;
    };
    return a();
}
var __importDefault = this && this[y(0x122) + z(0x117)] || function (c) {
    const A = y;
    return c && c[A(0x143)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xc43 * -0x3 + -0x35 * 0x53 + 0x41 * -0x49);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[z(0x147)] = !![], Object[z(0x149) + y(0x136)](exports, z(0x143), k);
const sequelize_1 = require(y(0x148)), Queue_1 = __importDefault(require(z(0x134) + y(0x124))), Tenant_1 = __importDefault(require(y(0x134) + y(0x11e))), User_1 = __importDefault(require(z(0x134) + y(0x119))), AdminListUsersService = async ({
        searchParam: searchParam = '',
        pageNumber: pageNumber = '1'
    }) => {
        const B = y, C = y, h = {};
        h[B(0x12c)] = C(0x13c), h[B(0x121)] = B(0x11f), h[B(0x12f)] = C(0x128), h[C(0x141)] = function (u, v) {
            return u * v;
        }, h[C(0x129)] = function (u, v) {
            return u - v;
        }, h[C(0x13d)] = C(0x144), h[C(0x115)] = C(0x125), h[C(0x13f)] = B(0x131), h[C(0x137)] = C(0x118), h[C(0x112)] = C(0x11c), h[B(0x11a)] = function (u, v) {
            return u > v;
        }, h[C(0x11d)] = function (u, v) {
            return u + v;
        };
        const i = h, j = {
                [sequelize_1['Op']['or']]: [
                    { 'name': sequelize_1[C(0x145)][C(0x123)](sequelize_1[B(0x145)]['fn'](i[C(0x12c)], sequelize_1[B(0x145)][C(0x133)](i[C(0x121)])), i[C(0x12f)], '%' + searchParam[C(0x14a) + 'e']() + '%') },
                    { 'email': { [sequelize_1['Op'][B(0x126)]]: '%' + searchParam[C(0x14a) + 'e']() + '%' } }
                ]
            }, l = -0x1873 + -0x569 * 0x3 + -0x28d6 * -0x1, m = i[C(0x141)](l, i[C(0x129)](+pageNumber, -0xe * -0xf6 + -0xdf * 0xb + -0x3de)), n = {};
        n[C(0x114)] = Queue_1[B(0x12a)], n[B(0x13b)] = [
            'id',
            i[B(0x13d)]
        ];
        const o = {};
        o[C(0x114)] = Tenant_1[C(0x12a)], o[C(0x13b)] = [
            'id',
            i[B(0x115)]
        ];
        const p = {};
        p[B(0x123)] = j, p[C(0x142)] = [
            n,
            o
        ], p[B(0x13b)] = [
            i[B(0x115)],
            'id',
            i[C(0x13f)],
            i[B(0x137)]
        ], p[B(0x11b)] = l, p[C(0x138)] = m, p[C(0x127)] = !![], p[C(0x12b)] = [[
                i[C(0x115)],
                i[C(0x112)]
            ]];
        const {
                count: q,
                rows: r
            } = await User_1[C(0x12a)][B(0x13a) + B(0x146)](p), s = i[C(0x11a)](q, i[B(0x11d)](m, r[C(0x12e)])), t = {};
        return t[C(0x120)] = r, t[B(0x140)] = q, t[B(0x116)] = s, t;
    };
exports[z(0x12a)] = AdminListUsersService;