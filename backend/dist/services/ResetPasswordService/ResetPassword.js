'use strict';
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(t(0x141)) / (0x1227 + 0x1473 + -0x2699) * (-parseInt(t(0x128)) / (-0x226 + -0xe4e + 0x1076)) + -parseInt(t(0x142)) / (0x1db8 + 0x18d1 + 0xe * -0x3e5) * (-parseInt(u(0x112)) / (-0x25 * -0xd + 0x1e6b + -0x2048)) + parseInt(u(0x135)) / (-0x38f * 0x6 + 0x8af + -0x70 * -0x1d) + parseInt(u(0x130)) / (0x1ef * -0x1 + -0x675 + 0x2 * 0x435) * (-parseInt(u(0x117)) / (0x496 * 0x4 + 0x376 * 0x5 + 0x33d * -0xb)) + -parseInt(t(0x144)) / (-0x7dd + -0x57 * -0x6e + -0x1 * 0x1d7d) * (parseInt(t(0x12e)) / (-0x29 * 0xd2 + -0x1517 + 0x36c2)) + -parseInt(t(0x12a)) / (-0xb99 + 0xd3d + -0xcd * 0x2) * (-parseInt(u(0x119)) / (-0x6 * 0x17 + -0x1354 + 0x1 * 0x13e9)) + -parseInt(t(0x114)) / (0x1104 + -0xd3 * 0xd + 0x1 * -0x641);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1f * 0x2446 + -0x94e5 * 0x3 + -0x1 * -0x1580a));
var __importDefault = this && this[v(0x13e) + v(0x131)] || function (c) {
    const x = v;
    return c && c[x(0x113)] ? c : { 'default': c };
};
function a() {
    const E = [
        '__esModule',
        '3792828JUbUxO',
        'ROM\x20\x22Users',
        'base',
        '178773fMvGob',
        'OoFBz',
        '33fDMEkB',
        'encontrado',
        'query',
        'defineProp',
        'QueryTypes',
        '\x20email=\x20\x27',
        'sequelize',
        'SELECT',
        'Email\x20não\x20',
        'value',
        'length',
        'zNdJQ',
        'YFtJz',
        '=\x20\x27\x27\x20WHERE',
        'BMMhb',
        '7082GQDCSk',
        'bcryptjs',
        '60740pTidLC',
        'mail\x20=\x20\x27',
        'log',
        'sers\x22\x20\x20SET',
        '9XTMUno',
        '\x22\x20\x20WHERE\x20e',
        '18FkERIe',
        'fault',
        'ladHb',
        'message',
        '\x27\x20AND\x20\x22res',
        '2420030xbLPMF',
        'Password\x22\x20',
        'hgUiV',
        '../../data',
        'Hash\x22=\x20\x27',
        'Token\x20não\x20',
        'ncMzx',
        '\x22\x20=\x20\x27',
        '\x27\x20,\x20\x22reset',
        '__importDe',
        'UPDATE',
        'etPassword',
        '46gHeAyJ',
        '476427TRMoIk',
        'type',
        '21480KcDHzD',
        'UPDATE\x20\x20\x22U',
        '\x20\x22password',
        'erty',
        'default',
        'SELECT\x20*\x20F',
        '\x22\x20!=\x20\x27\x27',
        'hash',
        'status',
        '8zjKwmy'
    ];
    a = function () {
        return E;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x52 * -0x2b + -0x2474 + -0x4 * -0xcd3);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[w(0x122)] = !![], Object[v(0x11c) + w(0x147)](exports, v(0x113), k);
const sequelize_1 = __importDefault(require(v(0x11f))), database_1 = __importDefault(require(w(0x138) + w(0x116))), bcryptjs_1 = require(v(0x129)), ResetPassword = async (e, f, g) => {
        const y = v, z = v, h = {
                'hgUiV': function (l, m, n) {
                    return l(m, n);
                },
                'OoFBz': y(0x121) + y(0x11a),
                'ncMzx': function (l, m) {
                    return l === m;
                },
                'ladHb': function (l, m, n, o) {
                    return l(m, n, o);
                },
                'YFtJz': y(0x13a) + z(0x11a)
            }, {
                hasResult: i,
                data: j
            } = await h[z(0x137)](filterUser, e, f);
        if (!i) {
            const l = {};
            return l[z(0x14c)] = 0x194, l[y(0x133)] = h[y(0x118)], l;
        }
        if (h[y(0x13b)](i, !![]))
            try {
                const m = await (0x2061 + -0x2 * 0x51a + -0x162d, bcryptjs_1[y(0x14b)])(g, 0x9e + 0x51 * 0x1 + -0xe7), {
                        hasResults: n,
                        datas: o
                    } = await h[z(0x132)](insertHasPassword, e, f, m);
                if (h[y(0x13b)](o[y(0x123)], -0x6fd * -0x1 + 0x1b49 + -0x2246)) {
                    const p = {};
                    return p[y(0x14c)] = 0x194, p[z(0x133)] = h[z(0x125)], p;
                }
            } catch (q) {
                console[z(0x12c)](q);
            }
    };
exports[v(0x148)] = ResetPassword;
const filterUser = async (e, f) => {
        const A = w, B = w, g = {};
        g[A(0x127)] = function (m, n) {
            return m > n;
        };
        const h = g, i = B(0x149) + A(0x115) + B(0x12f) + B(0x12b) + e + (A(0x134) + B(0x140) + B(0x14a)), j = {};
        j[A(0x143)] = sequelize_1[B(0x148)][A(0x11d)][B(0x120)];
        const l = await database_1[A(0x148)][B(0x11b)](i, j);
        return {
            'hasResult': h[B(0x127)](l[B(0x123)], -0x5 * 0x18a + 0x1966 + -0xce * 0x16),
            'data': l
        };
    }, insertHasPassword = async (f, g, h) => {
        const C = v, D = v, i = {};
        i[C(0x124)] = function (r, s) {
            return r > s;
        };
        const j = i, l = D(0x149) + C(0x115) + D(0x12f) + D(0x12b) + f + (D(0x134) + C(0x140) + C(0x13c)) + g + '\x27', m = {};
        m[C(0x143)] = sequelize_1[D(0x148)][D(0x11d)][C(0x120)];
        const n = await database_1[D(0x148)][C(0x11b)](l, m), o = C(0x145) + D(0x12d) + C(0x146) + D(0x139) + h + (D(0x13d) + C(0x136) + D(0x126) + C(0x11e)) + f + (D(0x134) + D(0x140) + C(0x13c)) + g + '\x27', p = {};
        p[D(0x143)] = sequelize_1[C(0x148)][C(0x11d)][C(0x13f)];
        const q = await database_1[C(0x148)][D(0x11b)](o, p);
        return {
            'hasResults': j[C(0x124)](q[C(0x123)], -0x2a5 * -0x5 + -0x3ca * -0x5 + 0x3 * -0xab9),
            'datas': n
        };
    };