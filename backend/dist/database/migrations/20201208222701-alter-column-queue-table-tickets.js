'use strict';
const l = b, m = b;
function a() {
    const r = [
        'defineProp',
        '55EYvVxS',
        '__esModule',
        'type',
        '126DGlkHQ',
        '1030280LQmXjT',
        'Queues',
        'DataTypes',
        '15794053hKMiIc',
        'queue',
        'xKrIl',
        '299222zkzgvw',
        'VnmII',
        'defaultVal',
        'restrict',
        'nhJXx',
        'queueId',
        '18FWVWEj',
        'oqQmc',
        'allowNull',
        'LmhMn',
        'Tickets',
        'Xyufq',
        '12hRDbNM',
        'sequelize',
        'INTEGER',
        'TeVEB',
        'value',
        '2881288oTABnK',
        '27whciiu',
        'erty',
        'removeColu',
        'exports',
        'YhApo',
        'CASCADE',
        '9634iKxtMo',
        'EHtNA',
        'addColumn',
        '155460XfwEUk',
        '1587360uKGqEu'
    ];
    a = function () {
        return r;
    };
    return a();
}
(function (d, e) {
    const j = b, k = b, f = d();
    while (!![]) {
        try {
            const g = parseInt(j(0x142)) / (0x24ce + 0xb * 0x71 + -0x29a8) * (parseInt(k(0x12c)) / (0x2215 + -0x103 * 0x25 + 0x14 * 0x2b)) + -parseInt(j(0x130)) / (-0x3 * -0x527 + 0x2316 + -0x3288) + parseInt(j(0x12f)) / (-0x1 * -0x1b6d + 0xf86 + -0x2aef) * (parseInt(k(0x132)) / (-0x22e2 + -0x8c5 + 0x41 * 0xac)) + -parseInt(k(0x135)) / (0x1 * 0xebb + -0x2 * 0x80c + 0x5 * 0x47) * (parseInt(k(0x13c)) / (0x25ce + -0x1188 + -0x49 * 0x47)) + -parseInt(j(0x125)) / (-0x116f * -0x1 + 0x30f * -0x9 + 0xa20) + parseInt(k(0x126)) / (0x4 * 0x68 + 0x1dce + -0x1f65) * (parseInt(j(0x136)) / (-0xd86 + 0x36 * -0x40 + 0x1b10)) + parseInt(j(0x139)) / (-0x163c + 0x876 + 0xdd1) * (parseInt(k(0x120)) / (0x4dc + 0x1d69 * 0x1 + -0x2239));
            if (g === e)
                break;
            else
                f['push'](f['shift']());
        } catch (h) {
            f['push'](f['shift']());
        }
    }
}(a, -0x5962f + -0xb5466 + 0x7 * 0x37226));
const c = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x26b1 + -0x2 * -0x6b9 + 0x1a5d);
        let h = e[f];
        return h;
    }, b(c, d);
}
c[l(0x124)] = !![], Object[m(0x131) + m(0x127)](exports, l(0x133), c);
const sequelize_1 = require(m(0x121));
module[l(0x129)] = {
    'up': async e => {
        const n = m, o = l, f = {};
        f[n(0x11f)] = o(0x11e), f[o(0x123)] = n(0x13a), f[n(0x140)] = o(0x141), f[o(0x13d)] = n(0x137), f[o(0x12d)] = n(0x12b), f[n(0x143)] = n(0x13f);
        const g = f;
        await e[o(0x128) + 'mn'](g[n(0x11f)], g[o(0x123)]), await e[n(0x12e)](g[o(0x11f)], g[o(0x140)], {
            'type': sequelize_1[n(0x138)][o(0x122)],
            'references': {
                'model': g[o(0x13d)],
                'key': 'id'
            },
            'onUpdate': g[n(0x12d)],
            'onDelete': g[o(0x143)],
            'defaultValue': null,
            'allowNull': !![]
        });
    },
    'down': async f => {
        const p = m, q = l, g = {};
        g[p(0x145)] = q(0x11e), g[q(0x13b)] = q(0x141), g[p(0x12a)] = p(0x13a);
        const h = g;
        await f[q(0x128) + 'mn'](h[p(0x145)], h[p(0x13b)]);
        const i = {};
        i[p(0x134)] = sequelize_1[p(0x138)][p(0x122)], i[p(0x13e) + 'ue'] = null, i[q(0x144)] = !![], await f[q(0x12e)](h[q(0x145)], h[p(0x12a)], i);
    }
};