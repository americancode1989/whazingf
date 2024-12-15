'use strict';
const a2 = b, a3 = b;
(function (c, d) {
    const a0 = b, a1 = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(a0(0x21a)) / (-0x640 + -0x15a1 + 0x1be2) + -parseInt(a1(0x193)) / (-0xff6 * -0x2 + 0x219a + -0x4184 * 0x1) + parseInt(a1(0x1c5)) / (-0x11d2 * 0x2 + -0x2650 + 0x49f7) * (parseInt(a0(0x20a)) / (-0xb2d * -0x1 + -0x5ac + -0x119 * 0x5)) + -parseInt(a0(0x1e9)) / (0x1955 + -0x17 * 0x12f + 0x1e9) + -parseInt(a0(0x1ba)) / (-0x120b * 0x1 + -0x1 * -0x230b + -0x2 * 0x87d) + parseInt(a0(0x1c2)) / (0x2089 + -0x1 * 0x175d + -0x925) + parseInt(a1(0x1a8)) / (-0x1e8e + 0x2 * -0xfea + 0x3e6a);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x10a389 + -0xc189 * -0x8 + -0x3c * 0x217a));
var __importDefault = this && this[a2(0x1c6) + a3(0x1b8)] || function (c) {
    const a4 = a3;
    return c && c[a4(0x1dd)] ? c : { 'default': c };
};
const o = {};
o[a2(0x178)] = !![], Object[a2(0x1ab) + a2(0x1ec)](exports, a3(0x1dd), o), exports[a3(0x218) + a2(0x17c) + 'ge'] = exports[a2(0x1cb) + a3(0x1ce) + 'a'] = exports[a3(0x191) + a2(0x1d8)] = exports[a3(0x1f5) + a3(0x216)] = void (0xcbf + 0xe7b + 0x19a * -0x11);
const socket_1 = require(a3(0x1b4) + a2(0x21e)), InternalMessage_1 = __importDefault(require(a2(0x1f8) + a3(0x1bd) + a3(0x1f2))), User_1 = __importDefault(require(a3(0x1f8) + a2(0x197))), ListCountUnreadMessage_1 = __importDefault(require(a3(0x1cc) + a2(0x1f4) + a3(0x1ff) + a3(0x1e0) + a2(0x1c4))), MessageService_1 = __importDefault(require(a2(0x1cc) + a2(0x1f4) + a2(0x1cd) + a2(0x1e5) + 'ce')), ReadMessageService_1 = __importDefault(require(a2(0x1cc) + a3(0x1f4) + a3(0x1a5) + a2(0x184) + a2(0x19b))), logger_1 = require(a2(0x1bb) + a3(0x1b7)), listarMensagens = async (f, g) => {
        const a5 = a3, a6 = a2, h = {};
        h[a5(0x1ae)] = a5(0x215) + a6(0x208) + a6(0x18f) + a6(0x1a4), h[a5(0x18b)] = function (j, k) {
            return j !== k;
        }, h[a5(0x1be)] = a6(0x19d), h[a5(0x1cf)] = a6(0x19c), h[a6(0x1c3)] = function (j, k) {
            return j !== k;
        }, h[a6(0x1aa)] = a5(0x1e2);
        const i = h;
        try {
            if (i[a5(0x18b)](i[a6(0x1be)], i[a6(0x1cf)])) {
                const {id: j} = f[a6(0x20b)], {userId: k} = f[a6(0x220)], {isGroup: l} = f[a6(0x204)], m = await MessageService_1[a6(0x1a0)][a5(0x1f5) + a5(0x216)](j, k, l), n = {};
                return n[a6(0x1bf)] = m, g[a5(0x187)](0x15 * 0x45 + 0x89e * 0x1 + -0x5 * 0x2b3)[a5(0x21d)](n);
            } else {
                f[a6(0x188)](g);
                const q = {};
                return q[a6(0x188)] = i[a5(0x1ae)], h[a5(0x187)](0x209f * -0x1 + 0x7f * -0x25 + -0x34ee * -0x1)[a6(0x21d)](q);
            }
        } catch (q) {
            if (i[a6(0x1c3)](i[a5(0x1aa)], i[a6(0x1aa)]))
                e[a6(0x1fe)][a6(0x188)](f);
            else {
                console[a6(0x188)](q);
                const s = {};
                return s[a5(0x188)] = i[a6(0x1ae)], g[a5(0x187)](0x5dd + 0x1be6 + 0x1fcf * -0x1)[a5(0x21d)](s);
            }
        }
    };
exports[a3(0x1f5) + a2(0x216)] = listarMensagens;
const criarMensagem = async (n, p) => {
    const a7 = a3, a8 = a2, q = {};
    q[a7(0x209)] = a8(0x1f0) + a7(0x1a3) + a8(0x177), q[a7(0x1f7)] = a7(0x215) + a8(0x1e7) + a7(0x1c8) + a8(0x1fc) + a8(0x1a1), q[a8(0x20e)] = a7(0x215) + a8(0x19a) + a7(0x1dc) + a8(0x1b6) + a8(0x1fa), q[a7(0x183)] = function (s, t) {
        return s === t;
    }, q[a8(0x21f)] = a7(0x1a2), q[a8(0x1a9)] = function (s, t) {
        return s !== t;
    }, q[a8(0x192)] = a8(0x200), q[a8(0x1d2)] = a7(0x17b), q[a8(0x186)] = function (s, t) {
        return s !== t;
    }, q[a8(0x1da)] = a7(0x1e8), q[a7(0x1e4)] = function (s, t) {
        return s !== t;
    }, q[a7(0x1d5)] = a8(0x217), q[a8(0x21c)] = a7(0x17d), q[a7(0x1c7)] = a8(0x20d), q[a8(0x194)] = a8(0x1ef), q[a7(0x17e)] = a7(0x215) + a7(0x19a) + a8(0x202) + a7(0x213), q[a8(0x222)] = a7(0x1bc), q[a8(0x1a7)] = function (s, t) {
        return s === t;
    }, q[a8(0x19e)] = a8(0x17f), q[a8(0x1d7)] = function (s, t) {
        return s === t;
    }, q[a8(0x199)] = a7(0x207), q[a7(0x1ea)] = function (s, t) {
        return s > t;
    }, q[a7(0x198)] = function (s, t) {
        return s !== t;
    }, q[a8(0x17a)] = a8(0x1a6), q[a7(0x221)] = a7(0x174), q[a8(0x1b2)] = a7(0x1e6), q[a7(0x201)] = a8(0x1de), q[a7(0x18a)] = a8(0x206), q[a8(0x1ad)] = a8(0x18c), q[a7(0x19f)] = a7(0x20c), q[a8(0x1e1)] = a7(0x1fd);
    const r = q;
    try {
        const {
                text: s,
                timestamp: t,
                receiverId: u,
                isGroup: v
            } = n[a8(0x1c9)], {
                id: w,
                tenantId: x
            } = n[a8(0x20b)], y = n[a8(0x180)], z = (-0x5 * 0x572 + -0xe92 + 0x29cc, socket_1[a8(0x1e3)])(), A = {
                'text': s,
                'timestamp': t,
                'receiverId': u,
                'senderId': w,
                'tenantId': x,
                'groupId': null,
                'mediaType': r[a7(0x222)],
                'mediaUrl': undefined,
                'createdAt': new Date(),
                'updatedAt': new Date()
            };
        if (r[a7(0x183)](v, !![]) || r[a8(0x1a7)](v, r[a8(0x19e)])) {
            if (r[a8(0x1d7)](r[a8(0x199)], r[a8(0x199)]))
                A[a8(0x1b5)] = undefined, A[a7(0x1b0)] = u;
            else
                throw new C(r[a7(0x209)]);
        }
        let B = {};
        if (y && r[a8(0x1ea)](y[a8(0x1ac)], 0x20f5 * 0x1 + -0x1dd7 * 0x1 + -0x31e)) {
            if (r[a7(0x198)](r[a7(0x17a)], r[a7(0x221)]))
                await Promise[a8(0x1d0)](y[a8(0x196)](async N => {
                    const a9 = a8, aa = a7, O = {};
                    O[a9(0x18d)] = r[aa(0x20e)];
                    const P = O;
                    if (r[aa(0x183)](r[aa(0x21f)], r[a9(0x21f)])) {
                        try {
                            if (r[aa(0x1a9)](r[a9(0x192)], r[a9(0x1d2)])) {
                                if (!N[aa(0x1c1)]) {
                                    if (r[a9(0x186)](r[aa(0x1da)], r[a9(0x1da)])) {
                                        E[a9(0x188)](F);
                                        const T = {};
                                        return T[a9(0x188)] = r[aa(0x1f7)], H[a9(0x187)](-0x1d25 + -0x800 + 0x1 * 0x2719)[aa(0x21d)](T);
                                    } else {
                                        const T = N[aa(0x1f1)][a9(0x1db)]('/')[-0x1bcd * -0x1 + -0x4fb + -0x9 * 0x289][aa(0x1db)](';')[0x567 * 0x1 + -0x2478 + 0x1f11];
                                        N[a9(0x1c1)] = new Date()[aa(0x205)]() + '.' + T;
                                    }
                                }
                            } else {
                                E[aa(0x188)](F);
                                const V = {};
                                return V[aa(0x188)] = P[aa(0x18d)], H[a9(0x187)](0x22c * -0x4 + 0x9 * -0x44f + -0x1079 * -0x3)[a9(0x21d)](V);
                            }
                        } catch (V) {
                            if (r[a9(0x1e4)](r[a9(0x1d5)], r[aa(0x21c)]))
                                logger_1[aa(0x1fe)][aa(0x188)](V);
                            else {
                                const X = E[a9(0x1f1)][aa(0x1db)]('/')[0x2 * 0x3a3 + 0x628 * -0x1 + -0x11d][a9(0x1db)](';')[0xdff + 0x88c + -0x168b];
                                F[aa(0x1c1)] = new H()[a9(0x205)]() + '.' + X;
                            }
                        }
                        const Q = {
                                ...A,
                                'text': N[aa(0x212) + 'me'],
                                'mediaUrl': N[a9(0x1c1)],
                                'mediaType': N[a9(0x173)] || N[aa(0x1f1)][aa(0x176)](0x26a + 0x152b + 0x1 * -0x1795, N[aa(0x1f1)][aa(0x18e)]('/'))
                            }, R = await MessageService_1[aa(0x1a0)][aa(0x191) + a9(0x1d8)](Q);
                        B = await InternalMessage_1[a9(0x1a0)][a9(0x1df)](R['id']);
                        if (!B) {
                            if (r[a9(0x183)](r[aa(0x1c7)], r[a9(0x194)])) {
                                const Y = {};
                                return Y[a9(0x1a0)] = J, F && H[a9(0x1dd)] ? I : Y;
                            } else
                                throw new Error(r[aa(0x209)]);
                        }
                    } else {
                        if (!F[aa(0x1c1)]) {
                            const Z = K[aa(0x1f1)][aa(0x1db)]('/')[-0xc3e * -0x1 + 0x6b * 0x16 + -0x156f][a9(0x1db)](';')[-0x19 * 0x106 + 0x5e3 + 0x13b3];
                            L[aa(0x1c1)] = new m()[a9(0x205)]() + '.' + Z;
                        }
                    }
                }));
            else {
                E[a7(0x188)](F);
                const O = {};
                return O[a8(0x188)] = r[a8(0x17e)], H[a8(0x187)](-0x3 * -0x7ff + 0x7aa * 0x1 + -0x1 * 0x1db3)[a7(0x21d)](O);
            }
        } else
            r[a8(0x1d7)](r[a7(0x1b2)], r[a8(0x201)]) ? (F[a8(0x1b5)] = H, I[a7(0x1b0)] = J) : B = await MessageService_1[a7(0x1a0)][a7(0x191) + a7(0x1d8)](A);
        const C = {};
        C['id'] = B['id'];
        const D = {};
        D[a8(0x214)] = User_1[a7(0x1a0)], D['as'] = r[a7(0x18a)], D[a7(0x175)] = [
            'id',
            r[a8(0x1ad)]
        ];
        const E = {};
        E[a7(0x214)] = User_1[a8(0x1a0)], E['as'] = r[a7(0x19f)], E[a7(0x175)] = [
            'id',
            r[a7(0x1ad)]
        ];
        const F = {};
        F[a8(0x211)] = C, F[a7(0x1c0)] = [
            D,
            E
        ];
        const G = await InternalMessage_1[a8(0x1a0)][a7(0x21b)](F), H = {};
        H['id'] = G['id'], H[a8(0x1b5)] = G[a7(0x1b5)], H[a8(0x173)] = G[a8(0x173)], H[a7(0x20f)] = G[a7(0x20f)], H[a7(0x1ca)] = G[a8(0x1ca)], H[a7(0x1f3)] = w, H[a8(0x1b9)] = G[a7(0x1b9)], H[a8(0x206)] = G[a8(0x206)], H[a8(0x1b0)] = G[a7(0x1b0)], H[a8(0x20c)] = G[a8(0x20c)], H[a7(0x1d3)] = s;
        const I = {};
        I[a8(0x1d9)] = r[a8(0x1e1)], I[a8(0x1eb)] = H, z[a8(0x1d4)](x + (a8(0x1b3) + a8(0x1b1) + 'no'), I);
        const J = {};
        J['id'] = G['id'], J[a8(0x1b5)] = u, J[a7(0x1f3)] = w, J[a8(0x173)] = G[a7(0x173)], J[a8(0x1b9)] = G[a7(0x1b9)], J[a8(0x206)] = G[a8(0x206)], J[a8(0x1b0)] = G[a8(0x1b0)], J[a8(0x20c)] = G[a7(0x20c)], J[a8(0x1d3)] = s;
        const K = {};
        K[a7(0x1d9)] = r[a8(0x1e1)], K[a8(0x1eb)] = J, z[a8(0x1d4)](x + (a7(0x1b3) + a8(0x1b1) + a8(0x181) + a8(0x1ed)), K);
        const L = {};
        return L[a7(0x1d1)] = G, p[a7(0x187)](-0xe28 + 0x1c3d + -0xd4c)[a7(0x21d)](L);
    } catch (P) {
        console[a8(0x188)](P);
        const Q = {};
        return Q[a7(0x188)] = r[a7(0x17e)], p[a8(0x187)](-0x3 * -0xc9d + -0x193b + -0x4 * 0x2aa)[a7(0x21d)](Q);
    }
};
exports[a2(0x191) + a2(0x1d8)] = criarMensagem;
const marcarMensagemNaoLida = async (f, g) => {
    const ab = a2, ac = a3, h = {
            'znCnO': ab(0x1fd),
            'kvhwh': function (i, j) {
                return i(j);
            },
            'VzGCL': ab(0x210) + ab(0x189) + ab(0x1d6),
            'ufiVn': ab(0x215) + ab(0x1e7) + ac(0x1c8) + ab(0x1fc) + ac(0x1a1)
        };
    try {
        const {contactId: i} = f[ac(0x220)], {
                id: j,
                tenantId: k
            } = f[ac(0x20b)], {isGroup: l} = f[ab(0x1c9)], m = (0x2 * 0xb3d + 0x29 * 0xef + -0x3cc1, socket_1[ab(0x1e3)])(), n = {};
        n[ab(0x1f6)] = j, n[ab(0x1f3)] = i, n[ab(0x185)] = l, await (0x22ab + -0x3b * 0x59 + -0x3 * 0x4b8, ReadMessageService_1[ab(0x1a0)])(n), m[ac(0x1d4)](k + (ac(0x1f9) + ab(0x190) + ab(0x219)), {
            'action': h[ab(0x1af)],
            'data': {
                'receiverId': j,
                'isGroup': l,
                'senderId': h[ab(0x203)](Number, i)
            }
        });
        const p = {};
        return p[ac(0x179)] = h[ac(0x1ee)], g[ab(0x187)](0x1 * -0x1645 + 0x7 * 0x3b8 + -0x2fb)[ac(0x21d)](p);
    } catch (q) {
        console[ac(0x188)](q);
        const r = {};
        return r[ac(0x188)] = h[ac(0x195)], g[ab(0x187)](0x518 + 0x1c50 + -0x1f74)[ac(0x21d)](r);
    }
};
exports[a3(0x1cb) + a3(0x1ce) + 'a'] = marcarMensagemNaoLida;
function a() {
    const af = [
        '6065058hPSKIp',
        '../utils/l',
        'chat',
        'InternalMe',
        'ePhIs',
        'mensagens',
        'include',
        'filename',
        '6444851affSFk',
        'AqKDt',
        'eadMessage',
        '1842iFTAqS',
        '__importDe',
        'XbvPD',
        'arcar\x20a\x20me',
        'body',
        'mediaUrl',
        'marcarMens',
        '../service',
        'Message/Me',
        'agemNaoLid',
        'lnIYj',
        'all',
        'mensagem',
        'wihwU',
        'text',
        'emit',
        'avJqq',
        'omo\x20lida.',
        'cUyUg',
        'gem',
        'action',
        'MkhOV',
        'split',
        'ontar\x20as\x20m',
        '__esModule',
        'Pesvc',
        'findByPk',
        'stCountUnr',
        'XVIxI',
        'hINLA',
        'getIO',
        'HPxEz',
        'ssageServi',
        'GBGJM',
        '\x20erro\x20ao\x20m',
        'TOsau',
        '7461150RfDKFi',
        'fzOBE',
        'data',
        'erty',
        'acao',
        'VzGCL',
        'KRUSy',
        'ERR_CREATI',
        'mimetype',
        'ssage',
        'senderId',
        's/Internal',
        'listarMens',
        'userId',
        'zIrbf',
        '../models/',
        ':unread-me',
        'ão\x20lidas.',
        'UqnvS',
        'nsagens\x20co',
        'update',
        'logger',
        'Message/Li',
        'caYNS',
        'YrhEW',
        'riar\x20a\x20men',
        'kvhwh',
        'query',
        'getTime',
        'sender',
        'yharr',
        '\x20erro\x20ao\x20l',
        'ZfAEJ',
        '11428ExjiEH',
        'user',
        'receiver',
        'RiHUO',
        'WPjuB',
        'mediaName',
        'Mensagems\x20',
        'where',
        'originalna',
        'sagem.',
        'model',
        'Ocorreu\x20um',
        'agens',
        'ysmQm',
        'listCountU',
        't-interno',
        '655486kObUQX',
        'findOne',
        'Bmepn',
        'json',
        'cket',
        'DbNDg',
        'params',
        'Esvup',
        'bHquj',
        'mediaType',
        'mdwAV',
        'attributes',
        'substr',
        '_SYSTEM',
        'value',
        'message',
        'hDlMl',
        'pWYaH',
        'nreadMessa',
        'fPSOx',
        'NgcrW',
        'true',
        'files',
        'no-notific',
        'count',
        'EkHDH',
        'adMessageS',
        'isGroup',
        'ZWblB',
        'status',
        'error',
        'marcadas\x20c',
        'VmSHg',
        'tnPvw',
        'name',
        'OoLgs',
        'indexOf',
        'istar\x20as\x20m',
        'nsagem-cha',
        'criarMensa',
        'IWtTS',
        '3473536nStMHS',
        'wCBQm',
        'ufiVn',
        'map',
        'User',
        'HjjAa',
        'WOvzf',
        '\x20erro\x20ao\x20c',
        'ervice',
        'BFfPZ',
        'CBRkO',
        'XpGyH',
        'csLlE',
        'default',
        'mo\x20lida.',
        'vUFXv',
        'NG_MESSAGE',
        'ensagens.',
        'Message/Re',
        'wGzit',
        'wJPxK',
        '15056520JgXgFn',
        'ginRS',
        'WWIuk',
        'defineProp',
        'length',
        'zkKAU',
        'jjfjk',
        'znCnO',
        'groupId',
        'chat-inter',
        'VWMOx',
        ':mensagem-',
        '../libs/so',
        'receiverId',
        'ensagens\x20n',
        'ogger',
        'fault',
        'timestamp'
    ];
    a = function () {
        return af;
    };
    return a();
}
const listCountUnreadMessage = async (f, g) => {
    const ad = a3, ae = a2, h = {};
    h[ad(0x1fb)] = ae(0x215) + ae(0x19a) + ae(0x1dc) + ad(0x1b6) + ad(0x1fa);
    const i = h;
    try {
        const {id: j} = f[ad(0x20b)], k = await (-0x37 * 0x25 + 0x298 + 0x55b, ListCountUnreadMessage_1[ae(0x1a0)])(j), l = {};
        return l[ae(0x182)] = k, g[ae(0x187)](0x12e2 * -0x2 + -0x1f * 0x22 + 0x2b * 0xfe)[ad(0x21d)](l);
    } catch (m) {
        console[ae(0x188)](m);
        const n = {};
        return n[ad(0x188)] = i[ad(0x1fb)], g[ae(0x187)](0x81c * -0x1 + 0x21c1 * -0x1 + 0x2bd1)[ae(0x21d)](n);
    }
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1e14 + -0xc5a + -0x9 * 0x1cf);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[a3(0x218) + a3(0x17c) + 'ge'] = listCountUnreadMessage;