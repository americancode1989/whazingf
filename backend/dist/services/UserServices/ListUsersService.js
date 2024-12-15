'use strict';
const x = b, y = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x25aa + 0x26b6 + -0x21 * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(v(0x14a)) / (0x176e + 0x9eb + -0x2158) + parseInt(w(0x14d)) / (0x7e7 * 0x3 + -0x12 + -0x17a1) * (-parseInt(w(0x155)) / (-0xdf7 * 0x2 + 0x1916 + 0x2db)) + parseInt(w(0x152)) / (-0x119f + -0x1ace + 0x2c71 * 0x1) * (-parseInt(v(0x13f)) / (-0x9 * 0x2f8 + -0x74d * 0x3 + 0x30a4)) + -parseInt(w(0x150)) / (0x44 * -0x7b + 0x4 * -0x330 + 0xf26 * 0x3) + -parseInt(w(0x160)) / (0x7 * 0x27e + 0x1b91 + -0x2cfc) + parseInt(v(0x161)) / (-0x5d3 + 0x1f1b * 0x1 + -0xca * 0x20) * (parseInt(v(0x153)) / (0xfc6 + 0x35b + 0x8 * -0x263)) + parseInt(w(0x15f)) / (-0x67 * 0x52 + 0x1b23 * -0x1 + -0x1 * -0x3c2b);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * 0x17ba65 + -0x284d4 + -0x39844 * 0x2));
var __importDefault = this && this[x(0x154) + y(0x13b)] || function (c) {
    const z = x;
    return c && c[z(0x13e)] ? c : { 'default': c };
};
const k = {};
k[y(0x15e)] = !![], Object[y(0x138) + x(0x133)](exports, y(0x13e), k);
function a() {
    const C = [
        'distinct',
        '2206572FiHEuy',
        '9btBHka',
        '__importDe',
        '819483tVNgwS',
        'ObsLx',
        'LOWER',
        'BonLL',
        'include',
        'BqBdy',
        'sequelize',
        'rulrt',
        'offset',
        'value',
        '38430850NdMIHX',
        '8073380PWOSPL',
        '13258056CiPzWL',
        'ls/Queue',
        'BIUEJ',
        '../../mode',
        'LDqUP',
        'col',
        'ASC',
        'XYjGj',
        'toLowerCas',
        'where',
        'ls/User',
        'attributes',
        'order',
        'erty',
        'sLacu',
        'ntAll',
        'default',
        'zVBFQ',
        'defineProp',
        'model',
        'count',
        'fault',
        'email',
        'length',
        '__esModule',
        '5xwldRA',
        'RUHqt',
        'LIKE',
        'Sequelize',
        'limit',
        'findAndCou',
        'like',
        'ywazg',
        'users',
        'profile',
        'hasMore',
        '138680mYkYlb',
        'name',
        'queue',
        '10HyEMZf',
        'allcontact',
        'pytJw',
        '9896646ojKBIt'
    ];
    a = function () {
        return C;
    };
    return a();
}
const sequelize_1 = require(y(0x15b)), Queue_1 = __importDefault(require(x(0x164) + y(0x162))), User_1 = __importDefault(require(y(0x164) + y(0x130))), ListUsersService = async ({
        searchParam: searchParam = '',
        pageNumber: pageNumber = '1',
        tenantId: g
    }) => {
        const A = y, B = y, h = {};
        h[A(0x146)] = A(0x157), h[A(0x14f)] = B(0x14b), h[A(0x134)] = A(0x141), h[A(0x165)] = function (t, u) {
            return t * u;
        }, h[A(0x12d)] = function (t, u) {
            return t - u;
        }, h[A(0x15c)] = B(0x14c), h[A(0x140)] = B(0x13c), h[A(0x163)] = A(0x148), h[A(0x137)] = A(0x14e) + 's', h[B(0x15a)] = A(0x167), h[A(0x156)] = function (t, u) {
            return t > u;
        }, h[A(0x158)] = function (t, u) {
            return t + u;
        };
        const i = h, j = {
                'tenantId': g,
                [sequelize_1['Op']['or']]: [
                    { 'name': sequelize_1[A(0x142)][B(0x12f)](sequelize_1[B(0x142)]['fn'](i[A(0x146)], sequelize_1[A(0x142)][B(0x166)](i[A(0x14f)])), i[B(0x134)], '%' + searchParam[A(0x12e) + 'e']() + '%') },
                    { 'email': { [sequelize_1['Op'][A(0x145)]]: '%' + searchParam[B(0x12e) + 'e']() + '%' } }
                ]
            }, l = 0x263b + 0x1 * 0x623 + 0x2c36 * -0x1, m = i[A(0x165)](l, i[A(0x12d)](+pageNumber, -0x145e + -0x239e + 0x517 * 0xb)), n = {};
        n[B(0x139)] = Queue_1[B(0x136)], n[B(0x131)] = [
            'id',
            i[A(0x15c)]
        ];
        const o = {};
        o[B(0x12f)] = j, o[B(0x159)] = [n], o[B(0x131)] = [
            i[B(0x14f)],
            'id',
            i[B(0x140)],
            i[B(0x163)],
            i[A(0x137)]
        ], o[A(0x143)] = l, o[B(0x15d)] = m, o[A(0x151)] = !![], o[A(0x132)] = [[
                i[A(0x14f)],
                i[B(0x15a)]
            ]];
        const {
                count: p,
                rows: q
            } = await User_1[A(0x136)][B(0x144) + B(0x135)](o), r = i[B(0x156)](p, i[A(0x158)](m, q[A(0x13d)])), s = {};
        return s[A(0x147)] = q, s[A(0x13a)] = p, s[A(0x149)] = r, s;
    };
exports[y(0x136)] = ListUsersService;