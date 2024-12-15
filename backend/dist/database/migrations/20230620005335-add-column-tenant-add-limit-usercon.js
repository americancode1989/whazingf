'use strict';
const o = b, p = b;
(function (d, e) {
    const m = b, n = b, f = d();
    while (!![]) {
        try {
            const g = -parseInt(m(0x96)) / (0x2353 + 0x16e5 * 0x1 + -0x3a37) * (-parseInt(m(0x8d)) / (-0x59 * 0x58 + 0x21 * 0xa5 + 0x955)) + -parseInt(m(0x94)) / (-0xba * -0x4 + -0x55 * 0x51 + 0x1800) + parseInt(m(0x93)) / (0x1 * -0x1ce9 + 0xed8 + 0xe15) * (parseInt(n(0x9b)) / (0x13c5 + -0x1c9d * 0x1 + -0x1 * -0x8dd)) + parseInt(m(0x9e)) / (-0x932 + -0x1520 + 0xf2c * 0x2) + parseInt(m(0x85)) / (-0x6 * 0x229 + -0x1f3d + 0x2c3a) * (parseInt(n(0x9f)) / (0x1acd + -0x112e + -0x997)) + -parseInt(m(0xa0)) / (0x178a + 0xc6d + 0x1b6 * -0x15) + -parseInt(m(0x8a)) / (0x4f * 0x1f + 0x15f5 + 0xfbe * -0x2) * (parseInt(m(0x87)) / (-0x9aa + -0x1 * 0x120b + 0x4 * 0x6f0));
            if (g === e)
                break;
            else
                f['push'](f['shift']());
        } catch (h) {
            f['push'](f['shift']());
        }
    }
}(a, 0x668b8 + 0xe * -0x7f96 + 0x4c454));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1ee4 + 0x2376 + -0x41d7);
        let h = e[f];
        return h;
    }, b(c, d);
}
const c = {};
function a() {
    const u = [
        '70385FMswKB',
        'maxUsers',
        'ions',
        '3235434ebUEuQ',
        '8AKLDSn',
        '3917691qPpKQP',
        'erty',
        'defineProp',
        'value',
        'allowNull',
        'maxConnect',
        '__esModule',
        'rlEfJ',
        '1826762GwJUEc',
        'removeColu',
        '11UqsJDM',
        'CSZZA',
        'type',
        '382180rUinbF',
        'mFTle',
        'INTEGER',
        '8658GcVDoC',
        'addColumn',
        'YGXVH',
        'ble',
        'Tenants',
        'exports',
        '12pXBjzS',
        '372186lilwQh',
        'DataTypes',
        '7CfywWI',
        'nZTLR',
        'describeTa',
        'sequelize',
        'wWfmY'
    ];
    a = function () {
        return u;
    };
    return a();
}
c[o(0xa3)] = !![], Object[o(0xa2) + p(0xa1)](exports, p(0x83), c);
const sequelize_1 = require(o(0x99));
module[o(0x92)] = {
    'up': async g => {
        const q = o, r = o, h = {};
        h[q(0x84)] = q(0x91), h[r(0x8b)] = r(0x9c), h[r(0x9a)] = r(0xa5) + r(0x9d);
        const i = h, j = await g[q(0x98) + q(0x90)](i[q(0x84)]);
        if (!j || !j[i[q(0x8b)]]) {
            const k = {};
            k[r(0x89)] = sequelize_1[q(0x95)][r(0x8c)], k[q(0xa4)] = !![], await g[r(0x8e)](i[q(0x84)], i[r(0x8b)], k);
        }
        if (!j || !j[i[r(0x9a)]]) {
            const l = {};
            l[r(0x89)] = sequelize_1[q(0x95)][r(0x8c)], l[q(0xa4)] = !![], await g[q(0x8e)](i[r(0x84)], i[r(0x9a)], l);
        }
    },
    'down': async e => {
        const s = o, t = p, f = {};
        f[s(0x88)] = t(0x91), f[s(0x8f)] = t(0x9c), f[t(0x97)] = s(0xa5) + t(0x9d);
        const g = f;
        await e[s(0x86) + 'mn'](g[t(0x88)], g[s(0x8f)]), await e[s(0x86) + 'mn'](g[t(0x88)], g[t(0x97)]);
    }
};