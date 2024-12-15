'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x6fe * -0x2 + -0x1f * -0x105 + -0xfc8);
        let h = e[f];
        return h;
    }, b(c, d);
}
const J = b, K = b;
function a() {
    const P = [
        'jxDLg',
        'umMCt',
        'sOcRx',
        'CASCADE',
        'zOSBP',
        '1125796wMbSvg',
        'removeColu',
        'restrict',
        'Queues',
        'defineProp',
        'erty',
        'sequelize',
        'MPBbK',
        'byOtf',
        'ISgVE',
        'Tenants',
        'sUSwM',
        'Whatsapps',
        '1065275kjrZxP',
        'DataTypes',
        'SiRtY',
        'value',
        '910131tEkUpk',
        '86776AIOklN',
        '2tVApOp',
        'all',
        'rXmpu',
        'ibFmy',
        'DAhTi',
        'INTEGER',
        'AutoReply',
        'Contacts',
        'addColumn',
        'EJNKB',
        '__esModule',
        'IwTrm',
        '158928MkxWrY',
        'exports',
        'VzTLn',
        '1154788JXmOQe',
        'tenantId',
        'PvCuP',
        'Settings',
        '1005984SvMolJ',
        'Tickets',
        'Users',
        'rtvMF',
        'bigAE',
        'hrqdH'
    ];
    a = function () {
        return P;
    };
    return a();
}
(function (c, d) {
    const H = b, I = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(H(0x1ff)) / (-0x3 * 0x7dd + -0x1d6 + -0x15 * -0x136) + parseInt(H(0x200)) / (-0x793 * 0x5 + -0x923 * 0x3 + 0x1 * 0x414a) * (-parseInt(I(0x1fe)) / (0x5ca + -0x2249 + 0x1c82)) + parseInt(I(0x1de)) / (0x1 * -0x30d + -0x1d86 + 0x2097) + -parseInt(H(0x1fa)) / (0x144d + -0x1cc1 + 0x879 * 0x1) + parseInt(I(0x1e2)) / (0x25 * -0x25 + 0x25ee + 0x1 * -0x208f) + parseInt(H(0x1ed)) / (-0x335 * -0x3 + 0x1442 * -0x1 + 0xaaa) + -parseInt(H(0x1db)) / (-0x26a2 + 0x1d4e + 0x95c);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1dc3e + 0x9 * 0x6bc9 + -0x2 * 0x18bae));
const G = {};
G[J(0x1fd)] = !![], Object[K(0x1f1) + J(0x1f2)](exports, J(0x1d9), G);
const sequelize_1 = require(J(0x1f3));
module[K(0x1dc)] = {
    'up': d => {
        const L = K, M = K, e = {};
        e[L(0x1fc)] = L(0x1e3), e[L(0x1f4)] = L(0x1df), e[M(0x1e5)] = L(0x1f7), e[L(0x1e6)] = L(0x1eb), e[M(0x1e8)] = L(0x1ef), e[M(0x1f6)] = M(0x207), e[M(0x1e0)] = M(0x1f0), e[M(0x202)] = L(0x1e1), e[M(0x203)] = M(0x206), e[M(0x1f8)] = M(0x1e4), e[L(0x1da)] = L(0x1f9);
        const f = e;
        return Promise[M(0x201)]([
            d[M(0x1d7)](f[L(0x1fc)], f[L(0x1f4)], {
                'type': sequelize_1[L(0x1fb)][L(0x205)],
                'references': {
                    'model': f[M(0x1e5)],
                    'key': 'id'
                },
                'onUpdate': f[L(0x1e6)],
                'onDelete': f[M(0x1e8)],
                'allowNull': ![],
                'defaultValue': 0x1
            }),
            d[L(0x1d7)](f[L(0x1f6)], f[M(0x1f4)], {
                'type': sequelize_1[M(0x1fb)][M(0x205)],
                'references': {
                    'model': f[M(0x1e5)],
                    'key': 'id'
                },
                'onUpdate': f[L(0x1e6)],
                'onDelete': f[M(0x1e8)],
                'allowNull': ![],
                'defaultValue': 0x1
            }),
            d[M(0x1d7)](f[M(0x1e0)], f[M(0x1f4)], {
                'type': sequelize_1[L(0x1fb)][M(0x205)],
                'references': {
                    'model': f[L(0x1e5)],
                    'key': 'id'
                },
                'onUpdate': f[L(0x1e6)],
                'onDelete': f[L(0x1e8)],
                'allowNull': ![],
                'defaultValue': 0x1
            }),
            d[M(0x1d7)](f[M(0x202)], f[M(0x1f4)], {
                'type': sequelize_1[M(0x1fb)][L(0x205)],
                'references': {
                    'model': f[M(0x1e5)],
                    'key': 'id'
                },
                'onUpdate': f[L(0x1e6)],
                'onDelete': f[M(0x1e8)],
                'allowNull': ![],
                'defaultValue': 0x1
            }),
            d[M(0x1d7)](f[M(0x203)], f[M(0x1f4)], {
                'type': sequelize_1[L(0x1fb)][L(0x205)],
                'references': {
                    'model': f[L(0x1e5)],
                    'key': 'id'
                },
                'onUpdate': f[L(0x1e6)],
                'onDelete': f[M(0x1e8)],
                'allowNull': ![],
                'defaultValue': 0x1
            }),
            d[M(0x1d7)](f[M(0x1f8)], f[M(0x1f4)], {
                'type': sequelize_1[L(0x1fb)][L(0x205)],
                'references': {
                    'model': f[M(0x1e5)],
                    'key': 'id'
                },
                'onUpdate': f[M(0x1e6)],
                'onDelete': f[L(0x1e8)],
                'allowNull': ![],
                'defaultValue': 0x1
            }),
            d[L(0x1d7)](f[M(0x1da)], f[M(0x1f4)], {
                'type': sequelize_1[M(0x1fb)][M(0x205)],
                'references': {
                    'model': f[M(0x1e5)],
                    'key': 'id'
                },
                'onUpdate': f[M(0x1e6)],
                'onDelete': f[M(0x1e8)],
                'allowNull': ![],
                'defaultValue': 0x1
            })
        ]);
    },
    'down': d => {
        const N = K, O = J, e = {};
        e[N(0x1ec)] = N(0x1e3), e[O(0x1d8)] = N(0x1df), e[O(0x1e9)] = O(0x207), e[N(0x1f5)] = N(0x1f0), e[N(0x1e7)] = N(0x1e1), e[N(0x204)] = O(0x206), e[N(0x1dd)] = N(0x1e4), e[O(0x1ea)] = O(0x1f9);
        const f = e;
        return Promise[O(0x201)]([
            d[O(0x1ee) + 'mn'](f[O(0x1ec)], f[O(0x1d8)]),
            d[O(0x1ee) + 'mn'](f[N(0x1e9)], f[O(0x1d8)]),
            d[N(0x1ee) + 'mn'](f[O(0x1f5)], f[O(0x1d8)]),
            d[N(0x1ee) + 'mn'](f[O(0x1e7)], f[O(0x1d8)]),
            d[O(0x1ee) + 'mn'](f[N(0x204)], f[N(0x1d8)]),
            d[O(0x1ee) + 'mn'](f[O(0x1dd)], f[O(0x1d8)]),
            d[N(0x1ee) + 'mn'](f[N(0x1ea)], f[O(0x1d8)])
        ]);
    }
};