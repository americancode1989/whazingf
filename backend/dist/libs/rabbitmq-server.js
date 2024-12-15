'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0x11d)) / (0x376 + 0x21 * 0xc7 + -0x1d1c) * (parseInt(r(0x161)) / (0x1c6d + -0xa6 * -0x27 + 0x3 * -0x11e7)) + parseInt(s(0x116)) / (0x1464 + 0x2 * -0xbcd + 0x339) + -parseInt(r(0x142)) / (0x1 * 0xefd + 0x1 * 0x48e + -0x1 * 0x1387) * (-parseInt(r(0x15c)) / (-0x25 * 0xe5 + -0x6 * -0x2f1 + 0x63 * 0x28)) + -parseInt(r(0x158)) / (-0x3b * -0xd + -0x1 * -0x1ac5 + -0x11a * 0x1b) * (parseInt(s(0x15e)) / (-0x4ae + -0x2ea * -0x1 + 0x11 * 0x1b)) + parseInt(r(0x152)) / (0xed9 * -0x1 + 0x7 * -0x215 + 0x1d74) + parseInt(r(0x121)) / (-0x22cd * -0x1 + -0x1 * 0x24d4 + -0x30 * -0xb) + -parseInt(r(0x128)) / (0x1018 + 0x21cc + 0x84f * -0x6) * (-parseInt(r(0x119)) / (-0xa79 + 0x241e + -0x199a));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x39a5f + -0xa7 * -0xd1 + -0x21d5 * -0x7));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x17ab * -0x1 + -0x6b * 0x31 + 0x2d36);
        let h = e[f];
        return h;
    }, b(c, d);
}
const q = {};
q[t(0x114)] = !![], Object[t(0x14a) + t(0x144)](exports, t(0x131), q);
const amqplib_1 = require(u(0x15f)), logger_1 = require(t(0x157) + t(0x14c)), sleepRandomTime_1 = require(u(0x13b) + u(0x132) + u(0x111));
function a() {
    const K = [
        'LDWhd',
        '255101wDptJh',
        'amqplib',
        'BCTsq',
        '837218IuvQet',
        'NRynm',
        'from',
        'Time',
        'NjcZb',
        'kWoqD',
        'value',
        'HlnLx',
        '395952ybqcKE',
        'tsapp',
        'start',
        '11pAQYhw',
        'DJtaT',
        'INTERVAL',
        'bKqYW',
        '1vTNytN',
        'QrxCu',
        'consume',
        'TQuAy',
        '3607749DSQbky',
        'dhuca',
        'ycKtH',
        'udChv',
        'mIKks',
        'channel',
        'gaDuB',
        '1225350hkDZVp',
        'mTime',
        'sendToQueu',
        'createChan',
        'ack',
        'LpnmR',
        'hAghD',
        'env',
        'consumeWha',
        '__esModule',
        'leepRandom',
        'RXLyz',
        'connect',
        'publish',
        'ZTmUq',
        'publishInE',
        'conn',
        'MIN_SLEEP_',
        'assertQueu',
        '../utils/s',
        'MAX_SLEEP_',
        'GNurj',
        'nack',
        'nel',
        'uri',
        'OUbWD',
        '22556SJpFpB',
        'OFGXK',
        'erty',
        'XXara',
        'durable',
        'messenger',
        'default',
        'prefetch',
        'defineProp',
        'persistent',
        'ogger',
        'GwxEm',
        'mqetI',
        'ueue',
        'sleepRando',
        'waba360',
        '1373816adJVsM',
        'woOya',
        'error',
        'logger',
        'CKCak',
        '../utils/l',
        '60qRUMeu',
        'xchange',
        'UjmRD',
        'publishInQ',
        '255qeDPPj'
    ];
    a = function () {
        return K;
    };
    return a();
}
class RabbitmqServer {
    constructor(c) {
        const v = u;
        this[v(0x140)] = c;
    }
    async [u(0x118)]() {
        const w = u, x = u, f = {};
        f[w(0x162)] = x(0x151), f[w(0x122)] = w(0x147);
        const g = f;
        this[w(0x138)] = await (-0x15a6 + 0x124c + 0x11e * 0x3, amqplib_1[x(0x134)])(this[w(0x140)]), this[x(0x126)] = await this[x(0x138)][x(0x12b) + x(0x13f)]();
        const h = {};
        h[w(0x146)] = !![], await this[w(0x126)][x(0x13a) + 'e'](g[w(0x162)], h);
        const i = {};
        i[w(0x146)] = !![], await this[w(0x126)][x(0x13a) + 'e'](g[x(0x122)], i);
    }
    async [t(0x15b) + t(0x14f)](e, f) {
        const y = u, z = t, g = {};
        g[y(0x146)] = !![], await this[y(0x126)][y(0x13a) + 'e'](e, g);
        const h = {};
        return h[z(0x14b)] = !![], this[y(0x126)][z(0x12a) + 'e'](e, Buffer[y(0x110)](f), h);
    }
    async [u(0x137) + u(0x159)](d, e, f) {
        const A = t, B = u, g = {};
        return g[A(0x14b)] = !![], this[B(0x126)][A(0x135)](d, e, Buffer[B(0x110)](f), g);
    }
    async [t(0x130) + t(0x117)](d, e) {
        const C = u, D = u, f = {
                'HlnLx': function (h, i) {
                    return h(i);
                },
                'mIKks': function (h, i) {
                    return h !== i;
                },
                'LpnmR': C(0x133),
                'NjcZb': C(0x145),
                'TQuAy': function (h, i) {
                    return h !== i;
                },
                'ycKtH': C(0x136),
                'GNurj': function (h, i) {
                    return h(i);
                },
                'bKqYW': function (h, i) {
                    return h(i);
                },
                'udChv': C(0x14e),
                'UjmRD': C(0x153),
                'GwxEm': C(0x130) + C(0x117)
            };
        this[C(0x126)][D(0x149)](-0x16b5 * 0x1 + -0x1723 * -0x1 + -0x64, ![]);
        const g = {};
        g[C(0x146)] = !![], await this[D(0x126)][C(0x13a) + 'e'](d, g), this[C(0x126)][D(0x11f)](d, async h => {
            const E = D, F = C;
            if (f[E(0x125)](f[E(0x12d)], f[F(0x112)]))
                try {
                    if (f[E(0x120)](f[E(0x123)], f[E(0x123)]))
                        try {
                            f[F(0x115)](k, l), this[E(0x126)][E(0x12c)](m);
                            return;
                        } catch (j) {
                            o[F(0x155)][F(0x154)](j);
                        }
                    else {
                        await f[F(0x115)](e, h), await (-0x642 + -0xcb6 + 0x25f * 0x8, sleepRandomTime_1[E(0x150) + F(0x129)])({
                            'minMilliseconds': f[E(0x13d)](Number, process[E(0x12f)][E(0x139) + E(0x11b)] || 0x2 * -0xa33 + 0x63 * 0x13 + 0xf01 * 0x1),
                            'maxMilliseconds': f[E(0x11c)](Number, process[F(0x12f)][E(0x13c) + E(0x11b)] || 0xf4e * -0x1 + -0x2102 + 0x3820)
                        }), this[F(0x126)][E(0x12c)](h);
                        return;
                    }
                } catch (j) {
                    f[E(0x125)](f[F(0x124)], f[F(0x15a)]) ? (this[E(0x126)][E(0x13e)](h), logger_1[F(0x155)][E(0x154)](f[F(0x14d)], j)) : e[F(0x155)][E(0x154)](f);
                }
            else {
                f[F(0x115)](f, g), this[F(0x126)][F(0x12c)](h);
                return;
            }
        });
    }
    async [t(0x11f)](c, d) {
        const G = u, H = u, e = {
                'CKCak': G(0x130) + H(0x117),
                'OUbWD': function (f, g) {
                    return f === g;
                },
                'gaDuB': H(0x160),
                'QrxCu': G(0x113),
                'hAghD': function (f, g) {
                    return f(g);
                },
                'OFGXK': function (f, g) {
                    return f === g;
                },
                'DJtaT': G(0x15d)
            };
        return this[H(0x126)][H(0x11f)](c, f => {
            const I = H, J = H;
            if (e[I(0x141)](e[J(0x127)], e[J(0x127)]))
                try {
                    if (e[J(0x141)](e[I(0x11e)], e[I(0x11e)])) {
                        e[I(0x12e)](d, f), this[J(0x126)][J(0x12c)](f);
                        return;
                    } else
                        this[J(0x126)][J(0x13e)](f), g[I(0x155)][I(0x154)](e[I(0x156)], h);
                } catch (h) {
                    e[I(0x143)](e[J(0x11a)], e[I(0x11a)]) ? logger_1[J(0x155)][I(0x154)](h) : this[I(0x140)] = d;
                }
            else {
                const k = {};
                return k[I(0x14b)] = !![], this[I(0x126)][I(0x135)](g, h, i[I(0x110)](j), k);
            }
        });
    }
}
exports[u(0x148)] = RabbitmqServer;