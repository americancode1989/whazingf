'use strict';
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(n(0x115)) / (0x749 + 0x1d * -0x71 + 0x1d7 * 0x3) * (parseInt(o(0x114)) / (-0x8a6 + 0x24e5 + -0x1c3d)) + parseInt(o(0x110)) / (-0x1a06 + -0x1 * -0x1027 + 0x9e2) + parseInt(n(0x123)) / (0x1c60 + -0x1 * -0x1cc1 + -0x391d * 0x1) * (parseInt(n(0x125)) / (0x230d + 0x522 + -0x2 * 0x1415)) + parseInt(n(0x119)) / (0x12df * -0x2 + -0xc0f * -0x1 + 0x19b5) * (-parseInt(o(0x11c)) / (0x183e * 0x1 + 0x11 * 0x169 + -0x3030)) + parseInt(n(0x11a)) / (0x213e * -0x1 + -0x2412 + 0x4558) * (parseInt(o(0x10e)) / (0x43a + 0x24e5 + -0x1 * 0x2916)) + parseInt(o(0x120)) / (0x88f * -0x1 + 0xcfd + -0x464) * (-parseInt(n(0x10f)) / (-0x1 * 0xe7b + 0x5 * 0x1ba + 0x74 * 0xd)) + -parseInt(o(0x126)) / (-0xfca + -0x1c32 + -0x1604 * -0x2) * (parseInt(n(0x117)) / (-0x56b * -0x7 + -0x3 * 0x2ef + -0x1d13));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x15a0d + -0x1 * 0x975b0 + 0x2f * 0x5996));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xca3 + -0x175d + 0x250e);
        let h = e[f];
        return h;
    }, b(c, d);
}
const m = {};
m[p(0x128)] = !![], Object[p(0x124) + p(0x11e)](exports, p(0x12b), m);
function a() {
    const v = [
        'dropTable',
        '114669ZLrXwV',
        '44KoMbPP',
        '1250076SffUxq',
        'wgora',
        'Whatsapps',
        'TEXT',
        '256BzAMWt',
        '1999pEbVTc',
        'Xbrvj',
        '75439QHRmqZ',
        'DataTypes',
        '888xtaFvU',
        '360hKXrCS',
        'INTEGER',
        '3185NWdxEL',
        'STRING',
        'erty',
        'exports',
        '847730ZKVgnt',
        'yaxVR',
        'CASCADE',
        '2916xsmVSE',
        'defineProp',
        '4385LwVuCz',
        '1236NZSiIF',
        'createTabl',
        'value',
        'lJYtG',
        'sequelize',
        '__esModule',
        'BaileysKey'
    ];
    a = function () {
        return v;
    };
    return a();
}
const sequelize_1 = require(p(0x12a));
module[p(0x11f)] = {
    'up': d => {
        const r = q, s = p, e = {};
        e[r(0x111)] = r(0x12c) + 's', e[r(0x121)] = s(0x112), e[r(0x129)] = s(0x122);
        const f = e;
        return d[s(0x127) + 'e'](f[r(0x111)], {
            'whatsappId': {
                'type': sequelize_1[s(0x118)][s(0x11b)],
                'primaryKey': !![],
                'allowNull': ![],
                'references': {
                    'model': f[r(0x121)],
                    'key': 'id'
                },
                'onUpdate': f[r(0x129)],
                'onDelete': f[s(0x129)]
            },
            'type': {
                'type': sequelize_1[r(0x118)][s(0x11d)],
                'primaryKey': !![],
                'allowNull': ![]
            },
            'key': {
                'type': sequelize_1[s(0x118)][s(0x11d)],
                'primaryKey': !![],
                'allowNull': ![]
            },
            'value': {
                'type': sequelize_1[s(0x118)][r(0x113)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const t = p, u = p, e = {};
        e[t(0x116)] = u(0x12c) + 's';
        const f = e;
        return d[t(0x12d)](f[u(0x116)]);
    }
};