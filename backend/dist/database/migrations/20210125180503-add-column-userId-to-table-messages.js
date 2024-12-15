'use strict';
const k = b, l = b;
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(i(0x156)) / (0x240f + -0xa7 * -0x20 + 0x1 * -0x38ee) + parseInt(j(0x14d)) / (0xe7e + 0x9ad * 0x4 + -0x6a6 * 0x8) + parseInt(j(0x149)) / (0xa76 + 0x1b43 + -0x25b6) * (parseInt(i(0x14b)) / (-0x1d34 + -0x66 + -0xdf * -0x22)) + -parseInt(j(0x14e)) / (0x3e * -0x83 + 0x6f * -0x23 + 0x2eec) + parseInt(i(0x13c)) / (0x3 * 0xa97 + -0x1506 + 0x3d * -0x2d) * (parseInt(i(0x13d)) / (0x25a3 + -0x2 * 0x278 + -0x1 * 0x20ac)) + parseInt(i(0x145)) / (-0x91 * -0x5 + -0x190 + -0x13d) * (-parseInt(i(0x147)) / (0x1 * -0x1e6 + -0x9ad + 0xb9c)) + -parseInt(i(0x144)) / (0x23aa + 0x221c + -0x4 * 0x116f) * (parseInt(j(0x143)) / (0x1d5 * -0x2 + 0x1687 + 0x646 * -0x3));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, 0x14927c + -0x48c61 + -0x2dd81));
const g = {};
g[k(0x13e)] = !![], Object[k(0x13f) + l(0x139)](exports, k(0x14c), g);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x42e + -0x8aa + -0xe1 * -0x10);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const q = [
        '1529wCkMGs',
        '108430yjhooN',
        '759184XWdQGM',
        'exports',
        '27BiepLm',
        'GRFfN',
        '3299409FbEOYy',
        'DataTypes',
        '4tuUYsG',
        '__esModule',
        '1521546vJNBuN',
        '5783660DlKaMf',
        'Users',
        'qIpVy',
        'qTdlx',
        'sequelize',
        'tVlFb',
        'SET\x20NULL',
        'userId',
        '685112lEpKHB',
        'addColumn',
        'CASCADE',
        'INTEGER',
        'erty',
        'removeColu',
        'USniV',
        '18yuNWWP',
        '2952313FqswYg',
        'value',
        'defineProp',
        'BWiLb',
        'ZzJNp',
        'Messages'
    ];
    a = function () {
        return q;
    };
    return a();
}
const sequelize_1 = require(l(0x152));
module[k(0x146)] = {
    'up': d => {
        const m = k, n = l, e = {};
        e[m(0x150)] = m(0x142), e[m(0x148)] = n(0x155), e[m(0x140)] = n(0x14f), e[m(0x151)] = n(0x158), e[n(0x13b)] = n(0x154);
        const f = e;
        return d[n(0x157)](f[n(0x150)], f[n(0x148)], {
            'type': sequelize_1[n(0x14a)][m(0x138)],
            'references': {
                'model': f[n(0x140)],
                'key': 'id'
            },
            'onUpdate': f[n(0x151)],
            'onDelete': f[m(0x13b)],
            'allowNull': !![],
            'defaultValue': null
        });
    },
    'down': d => {
        const o = k, p = k, e = {};
        e[o(0x141)] = o(0x142), e[o(0x153)] = p(0x155);
        const f = e;
        return d[p(0x13a) + 'mn'](f[p(0x141)], f[p(0x153)]);
    }
};