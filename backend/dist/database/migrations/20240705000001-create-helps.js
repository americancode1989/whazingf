'use strict';
const z = b, A = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x14d4 + 0x49d * 0x8 + 0xc4 * -0x4a);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const x = b, y = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(x(0x129)) / (-0x11c3 * 0x1 + -0xd * 0x25b + 0x3063 * 0x1) * (-parseInt(y(0x135)) / (0x6 * -0x64a + 0x101 * 0xe + 0x17b0)) + parseInt(y(0x138)) / (-0x2fa + 0xc33 + -0x936) + -parseInt(x(0x128)) / (0x5 * -0x619 + 0x1 * 0x25a + 0x1c27 * 0x1) + -parseInt(x(0x11a)) / (0xe * 0x2bd + 0x41d + -0x2a6e) * (-parseInt(x(0x11c)) / (-0x1fa1 * -0x1 + -0x5fb * 0x1 + -0x19a0)) + -parseInt(x(0x11f)) / (-0x1 * 0x10f5 + 0x2 * -0x107 + 0x130a) * (parseInt(y(0x123)) / (0x53 * 0x66 + -0x1ca8 + 0x33 * -0x16)) + parseInt(x(0x131)) / (0xa3 * -0x15 + -0x1b96 + 0x2 * 0x147f) + -parseInt(y(0x114)) / (0x1d * -0x155 + 0x6 * 0x17e + -0x1db7 * -0x1) * (parseInt(x(0x136)) / (0x141 + 0x16a * 0xc + -0x122e));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xbe917 + -0x1ab7f * -0x9 + -0xcb * 0x1701));
function a() {
    const F = [
        'value',
        '3766xdMnZT',
        'STRING',
        'DataTypes',
        'INTEGER',
        '3192bXGkto',
        'defineProp',
        'ent',
        'primaryKey',
        'autoIncrem',
        '302692kpUSRc',
        '1spIlIh',
        'link',
        'DATE',
        'TEXT',
        'createdAt',
        'video',
        'sequelize',
        'exports',
        '2306934yGJaiK',
        'title',
        'sAraO',
        'updatedAt',
        '237386gfeJYo',
        '352aIcmFB',
        'createTabl',
        '2627559wImPdF',
        '__esModule',
        '158680DTQNNq',
        'erty',
        'Helps',
        'StaJd',
        'descriptio',
        'type',
        '50osEcTK',
        'allowNull',
        '70374oGGOyk',
        'dropTable'
    ];
    a = function () {
        return F;
    };
    return a();
}
const s = {};
s[z(0x11e)] = !![], Object[A(0x124) + z(0x115)](exports, A(0x139), s);
const sequelize_1 = require(A(0x12f));
module[z(0x130)] = {
    'up': l => {
        const B = z, C = A, m = {};
        m[B(0x133)] = C(0x116);
        const n = m, o = {};
        o[B(0x119)] = sequelize_1[B(0x121)][B(0x122)], o[B(0x127) + C(0x125)] = !![], o[B(0x126)] = !![], o[B(0x11b)] = ![];
        const p = {};
        p[C(0x119)] = sequelize_1[B(0x121)][B(0x120)], p[B(0x11b)] = ![];
        const q = {};
        q[C(0x119)] = sequelize_1[C(0x121)][B(0x12c)], q[C(0x11b)] = !![];
        const r = {};
        r[C(0x119)] = sequelize_1[B(0x121)][B(0x120)], r[B(0x11b)] = !![];
        const t = {};
        t[C(0x119)] = sequelize_1[C(0x121)][B(0x12c)], t[C(0x11b)] = !![];
        const u = {};
        u[B(0x119)] = sequelize_1[C(0x121)][C(0x12b)], u[B(0x11b)] = ![];
        const v = {};
        v[C(0x119)] = sequelize_1[B(0x121)][B(0x12b)], v[B(0x11b)] = ![];
        const w = {};
        return w['id'] = o, w[C(0x132)] = p, w[B(0x118) + 'n'] = q, w[B(0x12e)] = r, w[B(0x12a)] = t, w[C(0x12d)] = u, w[C(0x134)] = v, l[C(0x137) + 'e'](n[C(0x133)], w);
    },
    'down': d => {
        const D = z, E = A, e = {};
        e[D(0x117)] = D(0x116);
        const f = e;
        return d[E(0x11d)](f[D(0x117)]);
    }
};