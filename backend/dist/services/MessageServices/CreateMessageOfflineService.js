'use strict';
function a() {
    const Q = [
        'Budrf',
        'erty',
        'ls/Message',
        'kIwfK',
        'toString',
        'contactId',
        'nchYV',
        'quotedMsg',
        'all',
        'xmhSj',
        'fault',
        'logger',
        'writeFile',
        'OffLine',
        'NStnE',
        'wId',
        'create',
        'fyREF',
        'gyGAO',
        'JXHGb',
        '102KwHzqO',
        '-appMessag',
        '/socket',
        'map',
        'NG_MESSAGE',
        'public',
        'DMSWe',
        'hopSn',
        'OaqwW',
        'update',
        'read',
        'OcPmt',
        'qhnPY',
        '__importDe',
        'util',
        'aLIub',
        '548818yjvXbs',
        'zeNHk',
        'myeqH',
        'hziWE',
        'mimetype',
        'zvbQS',
        'cgBNK',
        'ls/Ticket',
        'path',
        'getTime',
        'getIO',
        'ageOffLine',
        'ENPtP',
        'userId',
        '493560JtCNsF',
        'buffer',
        'body',
        '__esModule',
        'base64',
        'qxelg',
        'nHfKF',
        'NxPhI',
        '../../libs',
        'value',
        'promisify',
        'join',
        'ERR_CREATI',
        'contact',
        'FsRcf',
        '-notificat',
        '3zFnimh',
        'mediaType',
        'split',
        'tenantId',
        'status',
        'findByPk',
        'NTrbi',
        'emit',
        'defineProp',
        's/logger',
        'fromMe',
        '279608osKHdw',
        'mediaUrl',
        'default',
        'ticket',
        'error',
        'indexOf',
        '152055bXDHMP',
        'filename',
        'Service',
        'Pwrlw',
        'uXTLc',
        'ticketId',
        'include',
        '7TalnJO',
        'timestamp',
        '423314aVjcZv',
        '4235768NZYnYQ',
        'lVIRu',
        'GDLFv',
        '1490778XwicYN',
        'BVplb',
        'aUbQa',
        'ion',
        'woNUp',
        '../../util',
        'substr',
        'ghHIJ',
        'CreateMess',
        'chat',
        'gMbJJ',
        '../../mode',
        'wDaPR'
    ];
    a = function () {
        return Q;
    };
    return a();
}
const J = b, K = b;
(function (c, d) {
    const H = b, I = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(H(0xaf)) / (0x25f1 * -0x1 + 0x441 * 0x7 + 0x82b) + -parseInt(I(0xe7)) / (0x226 + 0x1 * -0x1d84 + 0x1b60) + -parseInt(H(0xcd)) / (-0xced + -0xa86 * 0x2 + -0x5 * -0x6cc) * (parseInt(I(0xd8)) / (0xf2f + -0x50 * -0x71 + -0x327b)) + parseInt(I(0xde)) / (0x2 * 0x1169 + 0x22e1 + -0x45ae) * (parseInt(I(0x9f)) / (0x11c3 + 0x2387 * -0x1 + 0x11ca)) + parseInt(H(0xe5)) / (-0x11db + 0xf37 + 0x2ab) * (parseInt(H(0xe8)) / (-0x31 * -0x65 + 0x4e8 * 0x3 + 0x1 * -0x2205)) + parseInt(H(0xeb)) / (0xa7 * -0x8 + -0x4 * -0x7b9 + 0x19a3 * -0x1) + -parseInt(H(0xbd)) / (0x3 * 0x3a0 + -0x7 * 0x334 + 0xb96);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x5903 * 0x7 + -0x178fa + 0x8fa5e));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1319 + 0xc42 + -0x1 * 0x1ec5);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[J(0xac) + J(0x102)] || function (c) {
    const L = J;
    return c && c[L(0xc0)] ? c : { 'default': c };
};
const k = {};
k[K(0xc6)] = !![], Object[J(0xd5) + J(0xf9)](exports, K(0xc0), k);
const fs_1 = require('fs'), util_1 = require(K(0xad)), path_1 = require(J(0xb7)), logger_1 = require(J(0xf0) + K(0xd6)), MessageOffLine_1 = __importDefault(require(J(0xf6) + J(0xfa) + K(0x98))), socket_1 = require(K(0xc5) + K(0xa1)), Ticket_1 = __importDefault(require(K(0xf6) + K(0xb6))), Message_1 = __importDefault(require(J(0xf6) + J(0xfa))), writeFileAsync = (-0x10 * 0x49 + 0xd46 + -0x8b6, util_1[J(0xc7)])(fs_1[K(0x97)]), CreateMessageOffilineService = async ({
        msg: g,
        tenantId: h,
        medias: i,
        ticket: j,
        userId: l
    }) => {
        const M = K, N = K, m = {
                'FsRcf': M(0xc9) + M(0xa3),
                'zeNHk': M(0xf3) + M(0xba) + M(0xe0),
                'JXHGb': function (q, r) {
                    return q !== r;
                },
                'lVIRu': M(0xea),
                'cgBNK': N(0xbb),
                'nchYV': function (q, r) {
                    return q !== r;
                },
                'wDaPR': M(0xab),
                'uXTLc': N(0xae),
                'woNUp': N(0xf8),
                'kIwfK': function (q, r, s, t) {
                    return q(r, s, t);
                },
                'xmhSj': M(0xa4),
                'nHfKF': N(0xc1),
                'zvbQS': function (q, r) {
                    return q === r;
                },
                'fyREF': M(0xd3),
                'OaqwW': M(0xca),
                'hopSn': N(0xdb),
                'qxelg': N(0xff),
                'NxPhI': N(0xe1),
                'DMSWe': M(0xb2),
                'BVplb': M(0x9b),
                'aUbQa': M(0xf4),
                'gMbJJ': function (q, r) {
                    return q === r;
                },
                'OcPmt': M(0x99),
                'ghHIJ': N(0xb1)
            }, n = (0x3 * 0x23d + 0x1c8d + -0x3d * 0x94, socket_1[M(0xb9)])(), o = {};
        o[M(0x9a)] = undefined, o[N(0xe3)] = j['id'], o[N(0xbf)] = g[M(0xbf)], o[N(0xfd)] = j[M(0xfd)], o[N(0xd7)] = g[M(0xd7)], o[N(0xa9)] = !![], o[N(0xce)] = m[M(0xed)], o[N(0xd9)] = undefined, o[N(0xe6)] = undefined, o[N(0xbc)] = l;
        const p = o;
        try {
            if (i) {
                if (m[N(0xf5)](m[M(0xaa)], m[M(0xf2)])) {
                    const r = {};
                    return r[M(0xda)] = j, g && h[N(0xc0)] ? i : r;
                } else
                    await Promise[N(0x100)](i[M(0xa2)](async r => {
                        const O = N, P = M, s = {};
                        s[O(0x9d)] = m[P(0xcb)];
                        const t = s;
                        if (m[P(0x9e)](m[O(0xe9)], m[P(0xb5)])) {
                            try {
                                if (m[P(0xfe)](m[O(0xf7)], m[P(0xe2)])) {
                                    if (!r[O(0xdf)]) {
                                        if (m[O(0xfe)](m[P(0xef)], m[O(0xef)]))
                                            throw new s(t[P(0x9d)]);
                                        else {
                                            const A = r[P(0xb3)][O(0xcf)]('/')[-0x31 * -0x1f + -0x1274 + -0xc86 * -0x1][P(0xcf)](';')[0x1206 + -0x2708 + 0x1502];
                                            r[P(0xdf)] = new Date()[P(0xb8)]() + '.' + A;
                                        }
                                    }
                                    await m[P(0xfb)](writeFileAsync, (-0x5 * -0x23b + -0x1862 + 0xd3b, path_1[O(0xc8)])(__dirname, '..', '..', '..', '..', m[P(0x101)], r[P(0xdf)]), r[O(0xbe)], m[P(0xc3)]);
                                } else
                                    throw new s(m[O(0xcb)]);
                            } catch (C) {
                                m[P(0xb4)](m[O(0x9c)], m[P(0x9c)]) ? logger_1[P(0x96)][O(0xdc)](C) : w[O(0x96)][O(0xdc)](m[O(0xb0)], x);
                            }
                            const u = {
                                    ...p,
                                    'mediaUrl': r[O(0xdf)],
                                    'mediaType': r[O(0xb3)][O(0xf1)](-0x1 * 0x1ead + -0x1120 + 0x3 * 0xfef, r[O(0xb3)][O(0xdd)]('/'))
                                }, v = await MessageOffLine_1[O(0xda)][P(0x9b)](u), w = {};
                            w[O(0xd0)] = h;
                            const x = {};
                            x[P(0xe4)] = [
                                m[P(0xa7)],
                                {
                                    'model': Ticket_1[P(0xda)],
                                    'as': m[P(0xa6)],
                                    'where': w,
                                    'include': [m[O(0xa7)]]
                                },
                                {
                                    'model': Message_1[P(0xda)],
                                    'as': m[P(0xc2)],
                                    'include': [m[P(0xa7)]]
                                }
                            ];
                            const y = await MessageOffLine_1[P(0xda)][P(0xd2)](v['id'], x);
                            if (!y) {
                                if (m[P(0x9e)](m[P(0xc4)], m[O(0xa5)]))
                                    throw new Error(m[P(0xcb)]);
                                else
                                    w[P(0x96)][P(0xdc)](x);
                            }
                            n['to'](h + '-' + y[P(0xe3)][O(0xfc)]())['to'](h + '-' + y[O(0xdb)][O(0xd1)])['to'](h + (O(0xcc) + P(0xee)))[O(0xd4)](h + (O(0xa0) + 'e'), {
                                'action': m[O(0xec)],
                                'message': y,
                                'ticket': y[P(0xdb)],
                                'contact': y[P(0xdb)][O(0xca)]
                            }), await j[O(0xa8)]({
                                'lastMessage': y[O(0xbf)],
                                'lastMessageAt': new Date()[P(0xb8)]()
                            });
                        } else {
                            const G = f[P(0xb3)][O(0xcf)]('/')[-0x25e6 + 0x863 + 0x1d84][O(0xcf)](';')[0xc7 * 0x18 + -0xbb6 + -0x6f2];
                            g[O(0xdf)] = new h()[O(0xb8)]() + '.' + G;
                        }
                    }));
            } else {
                const r = { ...p };
                r[M(0xce)] = m[N(0xed)];
                const s = await MessageOffLine_1[N(0xda)][M(0x9b)](r), t = {};
                t[M(0xd0)] = h;
                const u = {};
                u[N(0xe4)] = [
                    m[M(0xa7)],
                    {
                        'model': Ticket_1[N(0xda)],
                        'as': m[N(0xa6)],
                        'where': t,
                        'include': [m[M(0xa7)]]
                    },
                    {
                        'model': Message_1[N(0xda)],
                        'as': m[M(0xc2)],
                        'include': [m[N(0xa7)]]
                    }
                ];
                const v = await MessageOffLine_1[M(0xda)][M(0xd2)](s['id'], u);
                if (!v)
                    throw new Error(m[N(0xcb)]);
                await j[N(0xa8)]({
                    'lastMessage': v[N(0xbf)],
                    'lastMessageAt': new Date()[M(0xb8)]()
                }), n['to'](h + '-' + v[N(0xe3)][N(0xfc)]())['to'](h + '-' + v[M(0xdb)][N(0xd1)])['to'](h + (N(0xcc) + M(0xee)))[M(0xd4)](h + (M(0xa0) + 'e'), {
                    'action': m[M(0xec)],
                    'message': v,
                    'ticket': v[M(0xdb)],
                    'contact': v[M(0xdb)][N(0xca)]
                });
            }
        } catch (w) {
            logger_1[N(0x96)][M(0xdc)](m[M(0xb0)], w);
        }
    };
exports[J(0xda)] = CreateMessageOffilineService;