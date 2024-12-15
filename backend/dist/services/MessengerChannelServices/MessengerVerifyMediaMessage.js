'use strict';
const D = b, E = b;
(function (c, d) {
    const B = b, C = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(B(0x205)) / (-0x175 + 0x959 * 0x2 + -0x44f * 0x4) * (-parseInt(B(0x1bd)) / (0x38b * -0x6 + 0x5f7 + 0xf4d)) + parseInt(C(0x1f9)) / (0x480 * 0x5 + -0x107b + -0x602) * (-parseInt(C(0x1c2)) / (-0x2 * 0x58c + -0x8ca * -0x1 + 0x252)) + -parseInt(B(0x208)) / (-0x137 + 0x1 * 0x25ce + 0x1f * -0x12e) + -parseInt(C(0x1c0)) / (0xe * -0x166 + 0x1 * 0x18c1 + 0x1 * -0x527) + parseInt(C(0x1e6)) / (0x1a31 + 0x29 * -0x26 + -0x1414) + parseInt(C(0x1fc)) / (-0xbde + -0x18c + -0x1 * -0xd72) * (parseInt(C(0x1ed)) / (0x5 * 0x2c5 + -0xbd * 0x27 + 0x41 * 0x3b)) + -parseInt(C(0x1c3)) / (-0x1 * 0x7eb + 0x7 * -0x3e2 + 0x2323);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x19038 + -0x23851 * 0x2 + 0x5770 * 0x1a));
var __importDefault = this && this[D(0x1d1) + E(0x1c1)] || function (c) {
    const F = E;
    return c && c[F(0x1d0)] ? c : { 'default': c };
};
const w = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x4de + 0x9c7 * -0x3 + -0x98 * -0x2c);
        let h = e[f];
        return h;
    }, b(c, d);
}
w[E(0x1c8)] = !![], Object[E(0x1d8) + D(0x1cf)](exports, D(0x1d0), w);
const path_1 = require(E(0x20a)), axios_1 = __importDefault(require(E(0x1f6))), fs_1 = require('fs'), content_disposition_1 = __importDefault(require(E(0x20e) + E(0x1e4))), CreateMessageService_1 = __importDefault(require(D(0x1db) + E(0x1ab) + E(0x1ad) + D(0x1df))), getQuotedForMessageId_1 = __importDefault(require(E(0x1b7) + E(0x1f2) + E(0x1dc) + E(0x20c))), downloadFile = async (e, f) => {
        const G = D, H = D, g = {
                'BdfQb': G(0x1ca) + G(0x1fb),
                'DbaQI': function (o, p) {
                    return o(p);
                },
                'IbzgZ': H(0x20f),
                'QQXhS': H(0x1b6),
                'xkFnF': G(0x1ba) + 'pe',
                'SCOQO': function (o, p) {
                    return o === p;
                },
                'jRgZx': G(0x1fe),
                'ReSIY': H(0x1dd),
                'veoWW': function (o, p) {
                    return o === p;
                },
                'nIHqA': G(0x1b8),
                'dQAzH': G(0x1ac),
                'meqGk': G(0x1aa),
                'zruPI': H(0x20e) + G(0x1e4),
                'WqXMZ': G(0x206),
                'YFeEA': function (o, p) {
                    return o === p;
                },
                'KaNMK': H(0x1bc),
                'ZMfRR': G(0x1de)
            }, h = {};
        h[G(0x1da)] = e, h[H(0x1cc)] = g[H(0x1b4)], h[G(0x20b) + 'pe'] = g[G(0x1d7)];
        const i = await (-0x1f0 * -0xc + -0x1db5 + -0x39 * -0x1d, axios_1[H(0x1c5)])(h), j = {};
        j[H(0x1b3)] = {};
        const k = i[H(0x204)][g[G(0x1c7)]] ? content_disposition_1[H(0x1c5)][G(0x1ff)](i[H(0x204)][g[H(0x1c7)]] || '') : j;
        let l = '';
        const m = k?.[H(0x1b3)]?.[G(0x1bf)];
        if (m) {
            if (g[G(0x200)](g[H(0x1f8)], g[G(0x1f8)])) {
                const o = k[G(0x1b3)][H(0x1bf)];
                l = new Date()[H(0x1f4)]() + '-' + o;
            } else
                k[G(0x1cd)][G(0x1d2)]((-0x76 * 0x26 + 0x26b4 + -0x1530, l[H(0x1e1) + G(0x1b9)])(m))['on'](g[H(0x1ae)], async () => s(t))['on'](g[G(0x1b2)], x => {
                    const I = G, J = G;
                    s[I(0x1b6)](g[J(0x1bb)], x), g[J(0x1d6)](t, new u(x));
                });
        } else {
            if (g[H(0x1ef)](g[G(0x1f1)], g[G(0x1f1)])) {
                const q = i[H(0x204)][g[G(0x1b5)]], r = q[H(0x1f0)]('/')[-0x125a + 0x143c + -0xd * 0x25];
                l = f + '-' + new Date()[G(0x1f4)]() + '.' + r;
            } else {
                const t = f[H(0x1b3)][H(0x1bf)];
                g = new h()[H(0x1f4)]() + '-' + t;
            }
        }
        const n = (0x17 * 0x107 + 0x86f + -0x2010, path_1[G(0x1d5)])(__dirname, '..', '..', '..', g[H(0x1f7)], l);
        return await new Promise((t, u) => {
            const K = G, M = H, v = {
                    'OMpSk': g[K(0x1b5)],
                    'qrWSD': function (z, A) {
                        const L = K;
                        return g[L(0x200)](z, A);
                    },
                    'nSQCj': g[M(0x1ec)],
                    'LXDIi': g[K(0x1e7)],
                    'gjLkt': g[M(0x1bb)],
                    'wpJeD': function (x, y) {
                        const N = M;
                        return g[N(0x1d6)](x, y);
                    }
                };
            if (g[M(0x1be)](g[K(0x1ea)], g[K(0x1ea)]))
                i[M(0x1cd)][K(0x1d2)]((-0xc01 * 0x1 + -0x1cc + 0x1 * 0xdcd, fs_1[K(0x1e1) + M(0x1b9)])(n))['on'](g[K(0x1ae)], async () => t(l))['on'](g[M(0x1b2)], x => {
                    const O = K, P = M;
                    if (v[O(0x203)](v[P(0x1e9)], v[P(0x1fd)])) {
                        const z = g[P(0x204)][v[O(0x1d9)]], A = z[P(0x1f0)]('/')[0x1 * -0xd13 + 0x523 + 0x7f1];
                        h = i + '-' + new j()[O(0x1f4)]() + '.' + A;
                    } else
                        console[P(0x1b6)](v[O(0x207)], x), v[P(0x1eb)](u, new Error(x));
                });
            else {
                const y = {};
                return y[K(0x1c5)] = j, g && h[M(0x1d0)] ? i : y;
            }
        }), l;
    }, MessengerVerifyMediaMessage = async (c, d, e, f) => {
        const Q = D, R = E, g = {
                'gSaEE': Q(0x1ca) + Q(0x1fb),
                'EkzNo': function (i, j) {
                    return i(j);
                },
                'oiSgw': function (i, j, k) {
                    return i(j, k);
                },
                'SXfOa': function (i, j) {
                    return i === j;
                },
                'IvxlG': R(0x1c4),
                'JPMlz': function (i, j) {
                    return i > j;
                },
                'NYear': R(0x1c9)
            };
        let h;
        await Promise[Q(0x1ce)](d[R(0x1e8)][Q(0x1b0) + 's'][R(0x1e3)](async (i, j) => {
            const S = Q, T = Q, k = e['id'] + '_' + d[S(0x1cb)];
            h = await g[T(0x1e2)](downloadFile, i[S(0x1c6)][S(0x1da)], k);
            let l;
            if (d?.[S(0x1e8)]?.[S(0x201)]?.[S(0x1a9)]) {
                if (g[S(0x1ee)](g[T(0x1e5)], g[T(0x1e5)])) {
                    const o = await (-0x20c2 + -0x976 + 0x182 * 0x1c, getQuotedForMessageId_1[S(0x1c5)])(d[T(0x1e8)][S(0x201)][T(0x1a9)], e[T(0x1af)]);
                    l = o?.['id'] || undefined;
                } else
                    h[T(0x1b6)](g[T(0x209)], i), g[S(0x202)](j, new k(l));
            }
            const m = {
                'messageId': g[S(0x1f3)](j, 0x3 * 0x37c + -0x8d1 * 0x3 + 0xfff) ? d[S(0x1cb)] + '__' + j : d[S(0x1cb)] || '',
                'ticketId': e['id'],
                'contactId': f['id'],
                'body': d[S(0x1e8)]?.[T(0x20d)] || '',
                'fromMe': d[S(0x1d3)],
                'read': ![],
                'mediaUrl': h,
                'mediaType': d[S(0x1d4)],
                'quotedMsgId': l,
                'timestamp': +d[S(0x1b1)],
                'status': g[S(0x1e0)]
            };
            await e[T(0x1f5)]({
                'lastMessage': d[S(0x1e8)]?.[T(0x20d)] || h || '',
                'lastMessageAt': new Date()[S(0x1f4)](),
                'answered': ![]
            });
            const n = {};
            n[S(0x1fa) + 'a'] = m, n[S(0x1af)] = e[S(0x1af)], await (0xc9b + 0xaed + -0x1788, CreateMessageService_1[S(0x1c5)])(n);
        }));
    };
exports[D(0x1c5)] = MessengerVerifyMediaMessage;
function a() {
    const U = [
        'url',
        '../Message',
        'tedForMess',
        'gkLLw',
        'public',
        'geService',
        'NYear',
        'createWrit',
        'oiSgw',
        'map',
        'sposition',
        'IvxlG',
        '2087547UMiIuF',
        'ReSIY',
        'message',
        'nSQCj',
        'nIHqA',
        'wpJeD',
        'jRgZx',
        '88029uAtshc',
        'SXfOa',
        'YFeEA',
        'split',
        'KaNMK',
        'ers/getQuo',
        'JPMlz',
        'getTime',
        'update',
        'axios',
        'ZMfRR',
        'WqXMZ',
        '48312PEqkeO',
        'messageDat',
        'LOAD',
        '160QmdHQT',
        'LXDIi',
        'Niehq',
        'parse',
        'SCOQO',
        'reply_to',
        'EkzNo',
        'qrWSD',
        'headers',
        '1pAxNoL',
        'fMNAQ',
        'gjLkt',
        '1287030TnTOVu',
        'gSaEE',
        'path',
        'responseTy',
        'ageId',
        'text',
        'content-di',
        'finish',
        'mid',
        'stream',
        'Services/C',
        'GET',
        'reateMessa',
        'IbzgZ',
        'tenantId',
        'attachment',
        'timestamp',
        'QQXhS',
        'parameters',
        'dQAzH',
        'xkFnF',
        'error',
        '../../help',
        'eCHcl',
        'eStream',
        'content-ty',
        'BdfQb',
        'jmpHm',
        '555590hskQfS',
        'veoWW',
        'filename',
        '434970dwIvGu',
        'fault',
        '52aFwmiV',
        '438330BdkwJh',
        'MEWEO',
        'default',
        'payload',
        'zruPI',
        'value',
        'received',
        'ERROR\x20DONW',
        'message_id',
        'method',
        'data',
        'all',
        'erty',
        '__esModule',
        '__importDe',
        'pipe',
        'fromMe',
        'type',
        'join',
        'DbaQI',
        'meqGk',
        'defineProp',
        'OMpSk'
    ];
    a = function () {
        return U;
    };
    return a();
}