'use strict';
const k = b, l = b;
function a() {
    const q = [
        '__esModule',
        '9612736cpXmKX',
        'xIVpp',
        'DataTypes',
        '4176597GJimUB',
        '2789060afCaTg',
        'exports',
        'Pkkch',
        'UfJIW',
        'ewhcC',
        'erty',
        '374736wsChCy',
        'Users',
        'pJVks',
        'JAfct',
        'VEXBQ',
        'userId',
        'sequelize',
        'Messages',
        'INTEGER',
        'SET\x20NULL',
        'defineProp',
        '2616AGviUj',
        '1257986wXSKHv',
        'removeColu',
        'value',
        'CASCADE',
        '5255424JlNgrr',
        '15066dxgZoU',
        'addColumn',
        '5CCjSyY'
    ];
    a = function () {
        return q;
    };
    return a();
}
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(i(0x1e4)) / (0x3 * -0xd3 + -0x2 * -0xfad + -0x9a0 * 0x3) + parseInt(j(0x1f1)) / (-0x1e2 * -0x7 + -0x2132 * -0x1 + -0x4a3 * 0xa) + -parseInt(i(0x1f0)) / (-0x2 * 0x1ce + -0x1 * 0x24d4 + 0x2873) + parseInt(i(0x1e8)) / (-0xa84 + -0x2571 + -0x1 * -0x2ff9) + -parseInt(j(0x1eb)) / (-0x267b * 0x1 + 0x1726 + -0x106 * -0xf) * (parseInt(i(0x1d8)) / (0x1dda + -0x250c + -0x4 * -0x1ce)) + parseInt(j(0x1ed)) / (0xd91 * 0x1 + 0x48b * 0x4 + 0xc6 * -0x29) + parseInt(i(0x1e3)) / (0x4b1 * 0x6 + 0x907 * -0x1 + -0x9 * 0x21f) * (-parseInt(i(0x1e9)) / (0x39d + 0x236e + -0x2702));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, -0x3092 * -0x40 + -0x35133 + 0x3b60e));
const g = {};
g[k(0x1e6)] = !![], Object[l(0x1e2) + l(0x1d7)](exports, k(0x1ec), g);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2521 + 0x1edd * -0x1 + -0x46d);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(l(0x1de));
module[l(0x1f2)] = {
    'up': d => {
        const m = l, n = k, e = {};
        e[m(0x1f4)] = n(0x1df), e[m(0x1ee)] = m(0x1dd);
        const f = e;
        return d[n(0x1e5) + 'mn'](f[m(0x1f4)], f[m(0x1ee)]);
    },
    'down': d => {
        const o = l, p = l, e = {};
        e[o(0x1da)] = o(0x1df), e[o(0x1dc)] = o(0x1dd), e[o(0x1f3)] = o(0x1d9), e[p(0x1db)] = p(0x1e7), e[o(0x1f5)] = p(0x1e1);
        const f = e;
        return d[p(0x1ea)](f[p(0x1da)], f[o(0x1dc)], {
            'type': sequelize_1[o(0x1ef)][o(0x1e0)],
            'references': {
                'model': f[p(0x1f3)],
                'key': 'id'
            },
            'onUpdate': f[o(0x1db)],
            'onDelete': f[o(0x1f5)]
        });
    }
};