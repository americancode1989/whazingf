'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * 0x1459 + -0x1a89 * 0x1 + 0xfd1 * 0x3);
        let h = e[f];
        return h;
    }, b(c, d);
}
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(n(0x96)) / (0x20df + 0x1 * -0x426 + -0x2 * 0xe5c) * (parseInt(n(0xaa)) / (-0x1 * 0x78b + 0x125f + -0xad2)) + parseInt(n(0xa4)) / (0x1397 + 0xa84 + -0x1e18) * (-parseInt(n(0xb5)) / (-0x6 * 0x602 + -0x1142 + 0x3552)) + -parseInt(n(0xa1)) / (0x1389 + 0x1 * -0x250b + 0x7 * 0x281) * (parseInt(o(0xa0)) / (0x21ee * 0x1 + 0x10b * 0xc + -0x2e6c)) + -parseInt(o(0x9f)) / (0x8b4 + -0x334 * -0x2 + 0x129 * -0xd) * (parseInt(n(0xb7)) / (0x4 * -0x675 + 0x1e0b * -0x1 + -0x1 * -0x37e7)) + -parseInt(o(0x92)) / (-0x1 * 0x24bc + -0xe59 * 0x1 + -0x2 * -0x198f) + -parseInt(n(0xab)) / (-0x2b8 * 0x8 + 0xbce * 0x1 + 0x9fc) + -parseInt(n(0x9a)) / (0x3 * -0x89b + 0xf * 0x281 + -0xbb3) * (-parseInt(n(0xb1)) / (-0x4a * -0x43 + 0x1df + -0x1531));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x2bc3f * -0x1 + -0x1 * 0x7399 + 0x59405));
const m = {};
function a() {
    const v = [
        'erty',
        'mNAQl',
        '16740yQPQLy',
        'Users',
        'value',
        '__esModule',
        '76nwujbg',
        'defineProp',
        '1119032cIvnCN',
        'groupId',
        'exports',
        'SET\x20NULL',
        'DBfgt',
        'CASCADE',
        'sequelize',
        '2599920uHLpzn',
        'CliwY',
        'Groups',
        'receiverId',
        '2EIygZz',
        'OaYSe',
        'dnsXv',
        'all',
        '5654WFqyfy',
        'InternalMe',
        'Semon',
        'yVowi',
        'rXgKW',
        '7DaOUsO',
        '426rlLaPM',
        '8725ZFdBfj',
        'zsxjs',
        'QVMaq',
        '20802BroBTx',
        'ssage',
        'OTntf',
        'DataTypes',
        'INTEGER',
        'hPzNl',
        '134488TsJJcB',
        '104010hgjWRG',
        'RmyWp',
        'changeColu',
        'vjdRB'
    ];
    a = function () {
        return v;
    };
    return a();
}
m[p(0xb3)] = !![], Object[p(0xb6) + q(0xaf)](exports, p(0xb4), m);
const sequelize_1 = require(p(0x91));
module[q(0xb9)] = {
    'up': d => {
        const r = p, s = p, e = {};
        e[r(0xa3)] = r(0x9b) + r(0xa5), e[r(0xac)] = r(0xb8), e[r(0x97)] = r(0x94), e[s(0x9d)] = s(0xbc), e[s(0x9e)] = r(0x95), e[r(0xa2)] = r(0xb2), e[s(0xa9)] = r(0xba);
        const f = e;
        return Promise[s(0x99)]([
            d[s(0xad) + 'mn'](f[s(0xa3)], f[r(0xac)], {
                'type': sequelize_1[r(0xa7)][r(0xa8)],
                'references': {
                    'model': f[s(0x97)],
                    'key': 'id'
                },
                'onUpdate': f[r(0x9d)],
                'onDelete': f[s(0x9d)],
                'allowNull': !![]
            }),
            d[s(0xad) + 'mn'](f[s(0xa3)], f[r(0x9e)], {
                'type': sequelize_1[s(0xa7)][s(0xa8)],
                'references': {
                    'model': f[r(0xa2)],
                    'key': 'id'
                },
                'onUpdate': f[r(0x9d)],
                'onDelete': f[r(0xa9)],
                'allowNull': !![]
            })
        ]);
    },
    'down': d => {
        const t = p, u = q, e = {};
        e[t(0x93)] = t(0x9b) + t(0xa5), e[u(0xa6)] = u(0xb8), e[u(0xb0)] = t(0x94), e[u(0x98)] = t(0xbc), e[t(0x9c)] = u(0x95), e[u(0xbb)] = t(0xb2), e[u(0xae)] = t(0xba);
        const f = e;
        return Promise[u(0x99)]([
            d[t(0xad) + 'mn'](f[u(0x93)], f[u(0xa6)], {
                'type': sequelize_1[u(0xa7)][u(0xa8)],
                'references': {
                    'model': f[u(0xb0)],
                    'key': 'id'
                },
                'onUpdate': f[u(0x98)],
                'onDelete': f[u(0x98)],
                'allowNull': !![]
            }),
            d[t(0xad) + 'mn'](f[t(0x93)], f[t(0x9c)], {
                'type': sequelize_1[t(0xa7)][t(0xa8)],
                'references': {
                    'model': f[t(0xbb)],
                    'key': 'id'
                },
                'onUpdate': f[u(0x98)],
                'onDelete': f[t(0xae)],
                'allowNull': !![]
            })
        ]);
    }
};