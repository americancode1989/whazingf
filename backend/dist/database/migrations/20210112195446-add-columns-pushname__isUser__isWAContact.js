'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0xad)) / (-0x33f * -0x2 + -0x5b * 0x27 + 0x760) + -parseInt(r(0x98)) / (0x1ea7 + -0x1 * 0x20b9 + 0x214) * (parseInt(s(0xb9)) / (0x18af + 0x2105 + 0x133b * -0x3)) + -parseInt(s(0x99)) / (0x2094 + 0x8ae + -0x293e) * (parseInt(r(0xb7)) / (-0x6d5 + 0x1d7 * 0x6 + -0x218 * 0x2)) + -parseInt(r(0x97)) / (0x1db6 + -0x4 * -0x8f2 + -0x4178) + -parseInt(s(0xa9)) / (0x1 * 0x6fe + -0x1ba5 + 0x14ae) + parseInt(r(0x9a)) / (0x511 + -0x25fe + 0x20f5) * (parseInt(s(0xa8)) / (0x1da3 + 0x9c3 + 0x3 * -0xd1f)) + parseInt(s(0xb0)) / (0x1a6d + -0x1f9c + 0x539);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x7d4f6 + 0x8f49b + 0x525a0));
function a() {
    const z = [
        'iOJfC',
        'QPMjT',
        'STRING',
        'DiLvd',
        'all',
        'erty',
        '54BLjPop',
        '362642LfDrQI',
        'sequelize',
        'defineProp',
        'lGuLa',
        '777807LiQagy',
        'value',
        'PdOgt',
        '13446200WIeGRp',
        'allowNull',
        'defaultVal',
        'pushname',
        'addColumn',
        'exports',
        'Contacts',
        '15835ndpunB',
        '__esModule',
        '3QgXJjp',
        'removeColu',
        'BOOLEAN',
        '29190sHpiNr',
        '1006178ibJroU',
        '120vdXMQs',
        '665208XqnQYP',
        'type',
        'DataTypes',
        'isWAContac',
        'isUser',
        'YbDas',
        'tAUvZ',
        'SpBjS'
    ];
    a = function () {
        return z;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x312 * 0x1 + -0xc07 * -0x1 + 0x1 * -0x85f);
        let h = e[f];
        return h;
    }, b(c, d);
}
const q = {};
q[t(0xae)] = !![], Object[t(0xab) + t(0xa7)](exports, t(0xb8), q);
const sequelize_1 = require(t(0xaa));
module[u(0xb5)] = {
    'up': g => {
        const v = t, w = u, h = {};
        h[v(0xa5)] = v(0xb6), h[w(0xa0)] = v(0xb3), h[v(0xac)] = v(0x9e), h[v(0xa1)] = w(0x9d) + 't';
        const i = h, j = {};
        j[w(0x9b)] = sequelize_1[w(0x9c)][v(0xa4)], j[v(0xb1)] = !![], j[v(0xb2) + 'ue'] = null;
        const k = {};
        k[v(0x9b)] = sequelize_1[w(0x9c)][v(0x96)], k[w(0xb1)] = !![], k[v(0xb2) + 'ue'] = null;
        const l = {};
        return l[w(0x9b)] = sequelize_1[w(0x9c)][w(0x96)], l[v(0xb1)] = !![], l[v(0xb2) + 'ue'] = null, Promise[v(0xa6)]([
            g[v(0xb4)](i[v(0xa5)], i[v(0xa0)], j),
            g[v(0xb4)](i[v(0xa5)], i[w(0xac)], k),
            g[v(0xb4)](i[w(0xa5)], i[v(0xa1)], l)
        ]);
    },
    'down': d => {
        const x = u, y = t, e = {};
        e[x(0xa2)] = y(0xb6), e[y(0x9f)] = y(0xb3), e[y(0xa3)] = x(0x9e), e[y(0xaf)] = y(0x9d) + 't';
        const f = e;
        return Promise[y(0xa6)]([
            d[x(0xba) + 'mn'](f[y(0xa2)], f[y(0x9f)]),
            d[y(0xba) + 'mn'](f[y(0xa2)], f[y(0xa3)]),
            d[y(0xba) + 'mn'](f[y(0xa2)], f[x(0xaf)])
        ]);
    }
};