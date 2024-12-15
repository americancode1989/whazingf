'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(l(0x1af)) / (0x5da * -0x3 + -0x16eb + -0x3ae * -0xb) + -parseInt(m(0x1ae)) / (0xbe + 0x265f + -0x271b) * (-parseInt(l(0x197)) / (0x103f * 0x1 + 0xcec + -0x1d28)) + -parseInt(m(0x1a9)) / (-0xcd9 + 0x136d * 0x1 + 0x8c * -0xc) + parseInt(m(0x19c)) / (0x871 * -0x2 + -0x25c4 + 0x36ab) + -parseInt(m(0x195)) / (-0x212 + -0x33d * -0x5 + 0x191 * -0x9) + parseInt(m(0x1b5)) / (0x1e1c + -0x102 + 0x1 * -0x1d13) * (parseInt(l(0x1aa)) / (-0x110e + 0x28d * -0x6 + 0x566 * 0x6)) + -parseInt(m(0x1a4)) / (0x2226 + -0x23c5 + 0x1a8) * (-parseInt(l(0x1a1)) / (-0x1921 + 0x151 * 0xd + 0x80e));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x7a278 + -0x2c * 0x2cd7 + 0x1 * 0x74553));
const k = {};
function a() {
    const t = [
        '3141990jHndvt',
        'exports',
        '964245gPnIiS',
        '__esModule',
        'INTEGER',
        'CJhgq',
        'Wolem',
        '4234450eYPzEN',
        'nId',
        'Queues',
        'wWOEj',
        'removeColu',
        '8910nkXrbF',
        'NqvzI',
        'Whatsapps',
        '1593pZHmwa',
        'value',
        'addColumn',
        'jCOmV',
        'SET\x20NULL',
        '3041836vmJAmx',
        '16AKnUNI',
        'defineProp',
        'VIhZK',
        'sequelize',
        '2JyJbeM',
        '427417YaOeTJ',
        'eqNgL',
        'OAxeF',
        'DataTypes',
        'integratio',
        'rations',
        '8617eJRmIr',
        'QueueInteg',
        'ddrIO',
        'erty',
        'CASCADE'
    ];
    a = function () {
        return t;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2fb + -0x1a54 + 0x1ee1);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[n(0x1a5)] = !![], Object[n(0x1ab) + o(0x193)](exports, o(0x198), k);
const sequelize_1 = require(o(0x1ad));
module[n(0x196)] = {
    'up': d => {
        const p = o, q = n, e = {};
        e[p(0x19b)] = p(0x19e), e[p(0x1b1)] = p(0x1b3) + p(0x19d), e[q(0x19a)] = p(0x1b6) + q(0x1b4), e[q(0x1a2)] = p(0x194), e[q(0x19f)] = p(0x1a8), e[q(0x1a7)] = p(0x1a3);
        const f = e;
        return d[q(0x1a6)](f[q(0x19b)], f[q(0x1b1)], {
            'type': sequelize_1[q(0x1b2)][q(0x199)],
            'references': {
                'model': f[p(0x19a)],
                'key': 'id'
            },
            'onUpdate': f[p(0x1a2)],
            'onDelete': f[q(0x19f)]
        }), d[q(0x1a6)](f[q(0x1a7)], f[q(0x1b1)], {
            'type': sequelize_1[p(0x1b2)][p(0x199)],
            'references': {
                'model': f[q(0x19a)],
                'key': 'id'
            },
            'onUpdate': f[q(0x1a2)],
            'onDelete': f[p(0x19f)]
        });
    },
    'down': d => {
        const r = o, s = n, e = {};
        e[r(0x1b0)] = r(0x19e), e[s(0x1ac)] = s(0x1b3) + s(0x19d), e[s(0x192)] = s(0x1a3);
        const f = e;
        return d[s(0x1a0) + 'mn'](f[r(0x1b0)], f[s(0x1ac)]), d[s(0x1a0) + 'mn'](f[s(0x192)], f[r(0x1ac)]);
    }
};