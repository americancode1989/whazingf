'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(l(0x108)) / (-0x13 * 0x185 + 0x255c + -0x87c) * (parseInt(l(0xea)) / (-0x2 * 0xa3c + -0x21b * 0x7 + 0x1 * 0x2337)) + -parseInt(l(0xe4)) / (-0xb41 * -0x2 + -0x1 * 0x96d + 0x7 * -0x1de) * (-parseInt(m(0x100)) / (0x1 * 0x127f + 0x25 * -0x96 + 0x5b * 0x9)) + parseInt(l(0xed)) / (0x1 * 0xd01 + -0x10 * 0x12e + 0x5e4) * (parseInt(m(0xf5)) / (0xd7d + 0x1 * 0x125d + 0x61 * -0x54)) + -parseInt(l(0xfa)) / (-0xc4 * 0x14 + -0x22a3 + 0x31fa) + parseInt(m(0xec)) / (0x1393 + 0x9ca + -0x3 * 0x9c7) + -parseInt(l(0x107)) / (0x1b1 * 0xb + -0x129f + 0xd) + parseInt(m(0xeb)) / (-0x2 * -0x197 + 0x89 * 0x1d + -0x12a9) * (-parseInt(l(0x10b)) / (-0x2 * -0xa96 + 0x246d + -0x35 * 0x116));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xe68a1 + -0x1 * -0xc0df + 0x1b3e04));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x296 * -0x2 + 0xf9e + 0x1 * -0x98e);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
function a() {
    const t = [
        'allowNull',
        'defineProp',
        'BOOLEAN',
        'nId',
        'all',
        'erty',
        '6348KWOccQ',
        'removeColu',
        'SfJmv',
        'value',
        'SFbDT',
        '4185356nqWwos',
        'rations',
        'integratio',
        'type',
        'addColumn',
        'tion',
        '376pJkzPJ',
        'exports',
        'sequelize',
        'OLwqQ',
        'ttbRv',
        'INTEGER',
        'QueueInteg',
        '358083CnlxCT',
        '287930YdtQXM',
        'defaultVal',
        'DataTypes',
        '121dEweYR',
        '39807OxabOR',
        'Tickets',
        '__esModule',
        'OTovA',
        'useIntegra',
        'eszmE',
        '6lyUGzZ',
        '2598620cAoUek',
        '11204552TCCgQV',
        '4135BtiERr',
        'nIuWG'
    ];
    a = function () {
        return t;
    };
    return a();
}
k[n(0xf8)] = !![], Object[n(0xf0) + n(0xf4)](exports, o(0xe6), k);
const sequelize_1 = require(o(0x102));
module[o(0x101)] = {
    'up': e => {
        const p = o, q = n, f = {};
        f[p(0xf7)] = p(0xe5), f[q(0xe9)] = q(0xe8) + q(0xff), f[q(0xf9)] = p(0xfc) + q(0xf2), f[q(0xe7)] = p(0x106) + p(0xfb);
        const g = f, h = {};
        return h[p(0xfd)] = sequelize_1[q(0x10a)][q(0xf1)], h[p(0x109) + 'ue'] = ![], h[q(0xef)] = !![], (e[q(0xfe)](g[p(0xf7)], g[p(0xe9)], h), e[q(0xfe)](g[p(0xf7)], g[p(0xf9)], {
            'references': {
                'model': g[p(0xe7)],
                'key': 'id'
            },
            'type': sequelize_1[q(0x10a)][p(0x105)],
            'defaultValue': null,
            'allowNull': !![]
        }));
    },
    'down': d => {
        const r = o, s = n, e = {};
        e[r(0x103)] = r(0xe5), e[r(0x104)] = r(0xe8) + s(0xff), e[s(0xee)] = r(0xfc) + r(0xf2);
        const f = e;
        return Promise[s(0xf3)]([
            d[s(0xf6) + 'mn'](f[s(0x103)], f[r(0x104)]),
            d[r(0xf6) + 'mn'](f[r(0x103)], f[r(0xee)])
        ]);
    }
};