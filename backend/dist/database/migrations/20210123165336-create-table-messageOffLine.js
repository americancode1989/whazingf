'use strict';
const J = b, K = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1825 + 0x1 * -0x7db + -0xf15);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const P = [
        'jAYPN',
        '__esModule',
        '314665CtnwYk',
        'DATE',
        'defaultVal',
        'Contacts',
        'tCxFU',
        'QZXnM',
        'DataTypes',
        '2044212SlddXd',
        '281900ZppUDJ',
        'fLine',
        'erty',
        'Messages',
        'exports',
        'primaryKey',
        '4174552eXjLft',
        'STRING',
        'wSgGw',
        'type',
        'ent',
        'createTabl',
        '4719162IuNzNG',
        'TEXT',
        'MessagesOf',
        'sequelize',
        'sALlA',
        'dropTable',
        'nhnup',
        'allowNull',
        'WaedP',
        'INTEGER',
        'autoIncrem',
        '5HvfrAc',
        '27lRrjET',
        'CASCADE',
        '7YJVFyA',
        'defineProp',
        'value',
        '2912679OKfBnC',
        'Tickets',
        'Users',
        'oAMhE',
        'SET\x20NULL',
        'BOOLEAN',
        '54068xaTzFz'
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
            const f = parseInt(H(0x14e)) / (-0x16a + 0x1de4 + 0x1 * -0x1c79) + parseInt(H(0x14b)) / (-0x15c3 + -0x1 * -0x200d + 0x8 * -0x149) + parseInt(H(0x145)) / (-0x208e + -0x2 * 0x8ec + 0x1d * 0x1bd) + parseInt(I(0x155)) / (0x145 * -0x1d + 0xafe + -0x31 * -0x87) * (-parseInt(H(0x13f)) / (0x557 * -0x3 + 0x101d + 0x1 * -0x13)) + -parseInt(I(0x162)) / (-0x18d4 + -0x186b + 0x3145) + -parseInt(I(0x142)) / (0x24ed + -0x12 * 0xc2 + -0x1ca * 0xd) * (-parseInt(H(0x15c)) / (0x1a81 + 0xd * 0x1b + -0x1bd8)) + -parseInt(I(0x140)) / (0xe53 * -0x2 + 0x156f + 0x740) * (-parseInt(I(0x156)) / (0x1 * 0x22ee + 0x1 * -0xb6b + 0x1 * -0x1779));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xf7976 + -0xf1323 + 0x2807f2));
const G = {};
G[J(0x144)] = !![], Object[J(0x143) + K(0x158)](exports, J(0x14d), G);
const sequelize_1 = require(K(0x137));
module[K(0x15a)] = {
    'up': j => {
        const L = K, M = J, k = {};
        k[L(0x152)] = M(0x136) + L(0x157), k[M(0x153)] = L(0x147), k[L(0x13c)] = M(0x141), k[M(0x15e)] = M(0x149), k[L(0x138)] = M(0x146), k[L(0x14c)] = L(0x151), k[L(0x13a)] = M(0x159);
        const l = k, m = {};
        m[L(0x15f)] = sequelize_1[L(0x154)][M(0x13d)], m[L(0x13e) + L(0x160)] = !![], m[L(0x15b)] = !![], m[L(0x13b)] = ![];
        const n = {};
        n[M(0x15f)] = sequelize_1[L(0x154)][M(0x135)], n[M(0x13b)] = ![];
        const o = {};
        o[M(0x15f)] = sequelize_1[M(0x154)][M(0x13d)], o[L(0x13b)] = ![], o[M(0x150) + 'ue'] = 0x0;
        const p = {};
        p[M(0x15f)] = sequelize_1[L(0x154)][M(0x14a)], p[M(0x13b)] = ![], p[L(0x150) + 'ue'] = ![];
        const q = {};
        q[M(0x15f)] = sequelize_1[M(0x154)][M(0x15d)];
        const r = {};
        return r[L(0x15f)] = sequelize_1[M(0x154)][L(0x15d)], j[L(0x161) + 'e'](l[M(0x152)], {
            'id': m,
            'body': n,
            'ack': o,
            'read': p,
            'mediaType': q,
            'mediaUrl': r,
            'userId': {
                'type': sequelize_1[M(0x154)][M(0x13d)],
                'references': {
                    'model': l[M(0x153)],
                    'key': 'id'
                },
                'onUpdate': l[L(0x13c)],
                'onDelete': l[L(0x15e)]
            },
            'ticketId': {
                'type': sequelize_1[L(0x154)][M(0x13d)],
                'references': {
                    'model': l[L(0x138)],
                    'key': 'id'
                },
                'onUpdate': l[L(0x13c)],
                'onDelete': l[M(0x13c)],
                'allowNull': ![]
            },
            'fromMe': {
                'type': sequelize_1[M(0x154)][L(0x14a)],
                'allowNull': ![],
                'defaultValue': ![]
            },
            'isDeleted': {
                'type': sequelize_1[L(0x154)][L(0x14a)],
                'allowNull': ![],
                'defaultValue': ![]
            },
            'contactId': {
                'type': sequelize_1[L(0x154)][M(0x13d)],
                'references': {
                    'model': l[M(0x14c)],
                    'key': 'id'
                },
                'onUpdate': l[L(0x13c)],
                'onDelete': l[L(0x13c)]
            },
            'quotedMsgId': {
                'type': sequelize_1[L(0x154)][M(0x15d)],
                'references': {
                    'model': l[M(0x13a)],
                    'key': 'id'
                },
                'onUpdate': l[L(0x13c)],
                'onDelete': l[M(0x15e)]
            },
            'createdAt': {
                'type': sequelize_1[M(0x154)][M(0x14f)](-0x9 * 0x32b + 0x10d2 + -0x1 * -0xbb7),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[L(0x154)][M(0x14f)](0x839 * 0x2 + 0x6e9 + -0x1755),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const N = K, O = J, e = {};
        e[N(0x148)] = N(0x136) + N(0x157);
        const f = e;
        return d[O(0x139)](f[O(0x148)]);
    }
};