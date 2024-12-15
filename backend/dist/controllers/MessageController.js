'use strict';
const M = b, N = b;
(function (c, d) {
    const K = b, L = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(K(0x184)) / (-0x1 * -0x1aab + 0x24a * 0xd + -0x386c) + parseInt(K(0x10a)) / (0xde7 + -0x528 + 0x1 * -0x8bd) + -parseInt(K(0x10e)) / (-0x8b * 0x28 + 0x4ee + 0x10cd) * (-parseInt(K(0x15a)) / (0x22c0 + -0x1fc3 + -0x2f9)) + parseInt(L(0xfc)) / (0xe35 + -0x779 * -0x1 + -0x15a9) * (parseInt(L(0x13b)) / (-0x12e3 + -0x9cb + 0x1cb4)) + -parseInt(K(0x179)) / (-0x1 * -0x6f + -0x1355 + 0x12ed) * (-parseInt(K(0xd8)) / (0x1d5f + -0x1fc + -0x1b5b)) + -parseInt(L(0xee)) / (-0x1be7 + 0x2 * 0x551 + 0x114e) + -parseInt(L(0x167)) / (0x6d * 0x1d + 0x15d5 * 0x1 + -0x5f * 0x5c) * (parseInt(K(0x160)) / (-0xd76 + 0x23ee + 0x1 * -0x166d));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x149dbc + 0x89d44 + 0x196bd7));
var __importDefault = this && this[M(0x103) + N(0x172)] || function (c) {
    const O = N;
    return c && c[O(0x143)] ? c : { 'default': c };
};
const u = {};
u[M(0x14d)] = !![], Object[M(0x140) + N(0x197)](exports, N(0x143), u), exports[N(0x18e) + 'n'] = exports[N(0x141)] = exports[N(0x17c)] = exports[M(0xfe)] = exports[N(0x14c)] = exports[M(0x162) + N(0x152)] = exports[N(0x192)] = void (0x5 * -0x1dd + -0xf3f * -0x1 + -0x5ee);
const AppError_1 = __importDefault(require(M(0xf7) + M(0x18c))), DeleteMessageSystem_1 = __importDefault(require(N(0xeb) + N(0x153) + M(0xe2))), SetTicketMessagesAsRead_1 = __importDefault(require(N(0xeb) + N(0x12a) + N(0x133) + M(0x144))), Message_1 = __importDefault(require(N(0x150) + M(0x129))), Ticket_1 = __importDefault(require(N(0x150) + M(0xed))), CreateForwardMessageService_1 = __importDefault(require(N(0x107) + N(0xe5) + N(0xf6) + N(0x19b) + M(0x149) + N(0x13f))), CreateMessageSystemService_1 = __importDefault(require(N(0x107) + N(0xe5) + M(0xf6) + N(0x106) + M(0x147) + M(0x117))), ListMessagesService_1 = __importDefault(require(M(0x107) + M(0xe5) + N(0x132) + M(0x100) + N(0x176))), ShowTicketService_1 = __importDefault(require(M(0x107) + N(0xea) + N(0x14a) + M(0x19c) + N(0x117))), logger_1 = require(N(0xdc) + M(0x16b)), EditWhatsAppMessage_1 = __importDefault(require(M(0x107) + N(0xd7) + N(0x124) + N(0x121) + N(0xf0))), SendWhatsAppReaction_1 = __importDefault(require(M(0x107) + M(0xd7) + N(0x122) + N(0x16d) + N(0x139))), index = async (e, f) => {
        const P = N, Q = M, {ticketId: g} = e[P(0x14b)], {pageNumber: h} = e[Q(0x12b)], {tenantId: i} = e[P(0x16a)], j = {};
        j[P(0x168)] = h, j[Q(0x17e)] = g, j[Q(0x120)] = i;
        const {
            count: k,
            messages: l,
            messagesOffLine: m,
            ticket: n,
            hasMore: o
        } = await (-0x7a5 + 0x4 * -0x4c2 + 0x1aad, ListMessagesService_1[Q(0x116)])(j);
        (0x1 * 0xdb + -0x2 * 0xef0 + 0x1d05, SetTicketMessagesAsRead_1[Q(0x116)])(n);
        const p = {};
        return p[P(0x12e)] = k, p[Q(0x193)] = l, p[P(0x17a) + P(0x11d)] = m, p[Q(0x104)] = n, p[Q(0x114)] = o, f[P(0xf5)](p);
    };
exports[N(0x192)] = index;
const ListCountMensagens = async (f, g) => {
    const R = N, S = N, h = {};
    h[R(0x189)] = R(0xe3) + R(0x14e) + R(0x126), h[R(0x148)] = function (j, k) {
        return j instanceof k;
    }, h[S(0xd6)] = function (j, k) {
        return j === k;
    }, h[R(0xfd)] = S(0xde) + R(0x165), h[R(0xef)] = R(0x187), h[R(0x174)] = S(0xda), h[R(0x161)] = R(0x146), h[R(0x159)] = S(0x110), h[R(0x163)] = R(0x16c) + S(0x10d) + S(0x136) + R(0x130);
    const i = h;
    try {
        if (i[S(0xd6)](i[S(0xef)], i[S(0x174)]))
            e[R(0x128)](i[R(0x189)], f);
        else {
            const k = await Message_1[S(0x116)][S(0x12e)](), l = {};
            return l[R(0x12e)] = k, g[R(0xf5)](l);
        }
    } catch (m) {
        if (i[S(0xd6)](i[S(0x161)], i[S(0x159)])) {
            if (i[R(0x148)](i, j[S(0x116)]) && i[R(0xd6)](k[S(0x11a)], i[R(0xfd)])) {
                const o = {};
                return o[R(0x173)] = p[S(0x11a)], o[S(0x151)](-0x3 * -0x433 + -0x1271 + 0x768)[S(0xf5)](o);
            }
            throw n;
        } else {
            const o = {};
            return o[S(0x173)] = i[S(0x163)], g[S(0x151)](-0x631 + -0x1482 + 0x98d * 0x3)[S(0xf5)](o);
        }
    }
};
exports[N(0x162) + N(0x152)] = ListCountMensagens;
const store = async (g, h) => {
    const T = N, U = N, i = {};
    i[T(0x111)] = U(0x185) + U(0x199) + T(0x14f), i[T(0x18f)] = T(0x185) + T(0x199) + T(0xf9), i[T(0xff)] = T(0x16c) + T(0x10d) + U(0x136) + T(0x130), i[U(0x171)] = T(0x190) + T(0x194) + U(0x15d), i[T(0x164)] = T(0x158) + U(0x17d) + 'G', i[T(0x188)] = function (r, s) {
        return r === s;
    }, i[U(0x13a)] = U(0x195), i[T(0x105)] = U(0x11f), i[T(0x101)] = T(0x12d), i[U(0xfa)] = T(0x198) + U(0x138) + T(0x127), i[T(0x145)] = function (r, s) {
        return r instanceof s;
    }, i[U(0x15e)] = T(0x198) + U(0x138) + U(0x18b), i[T(0x183)] = T(0x11b), i[U(0x182)] = T(0x13d), i[U(0x137)] = function (r, s) {
        return r !== s;
    }, i[T(0x178)] = T(0x15f), i[U(0x196)] = U(0x10b), i[T(0x12c)] = U(0xe3) + T(0x14e) + U(0x126), i[T(0x19e)] = function (r, s) {
        return r === s;
    }, i[U(0x142)] = U(0x16f), i[U(0x119)] = T(0xf4), i[T(0xe1)] = U(0x180), i[U(0x17b)] = function (r, s) {
        return r > s;
    }, i[U(0xe8)] = function (r, s) {
        return r !== s;
    }, i[T(0x19a)] = U(0x11e), i[T(0xe9)] = T(0x170), i[U(0xf2)] = U(0x166), i[T(0x112)] = U(0x18d), i[U(0xec)] = U(0x157);
    const j = i, {ticketId: k} = g[T(0x14b)], {
            tenantId: l,
            id: m
        } = g[T(0x16a)], n = g[U(0xe6)], o = g[U(0xf8)], p = {};
    p['id'] = k, p[U(0x120)] = l;
    const q = await (-0xd3d * -0x1 + -0x1 * 0x143f + 0x45 * 0x1a, ShowTicketService_1[U(0x116)])(p);
    try {
        if (j[U(0x188)](j[U(0x183)], j[U(0x182)])) {
            f[T(0x128)](j[U(0x111)], g);
            const s = {};
            return s[U(0x11a)] = j[T(0x18f)], h[T(0x151)](-0x85 * 0x7 + 0xd5e + 0x827 * -0x1)[U(0x10f)](s);
        } else
            await (-0x1 * -0x3ef + -0x122 * -0x1c + -0x23a7, SetTicketMessagesAsRead_1[U(0x116)])(q);
    } catch (s) {
        if (j[T(0x137)](j[U(0x178)], j[T(0x196)]))
            console[T(0x128)](j[T(0x12c)], s);
        else {
            const v = {};
            return v[T(0x173)] = j[U(0xff)], p[U(0x151)](-0x8a5 * 0x1 + 0x2 * -0x851 + 0x1b3b)[T(0xf5)](v);
        }
    }
    try {
        if (j[U(0x19e)](j[U(0x142)], j[U(0x119)]))
            e[U(0x128)](j[U(0x171)], f);
        else {
            if (n[U(0x109)]) {
                if (j[T(0x137)](j[T(0xe1)], j[U(0xe1)])) {
                    const x = {};
                    return x[T(0x11a)] = f[T(0x11a)], x[U(0x151)](-0xe * 0x291 + 0x7 * 0x329 + -0x1 * -0xf5f)[U(0x10f)](x);
                } else {
                    const x = {};
                    x[T(0x13c)] = n, x[T(0x120)] = l, x[T(0x15c)] = o, x[T(0x104)] = q, x[U(0x19d)] = m, x[U(0x17f) + 'te'] = n[U(0x17f) + 'te'], x[T(0xf3)] = n[T(0xf3)] || j[U(0x105)], x[T(0x151)] = j[U(0x101)], x[T(0x181)] = n[T(0x181)], await (0x15ef + 0x1b3e + -0x312d * 0x1, CreateMessageSystemService_1[T(0x116)])(x);
                }
            } else {
                if (o && j[U(0x17b)](o[T(0xf1)], 0x23a0 + -0x1e3c + 0x1 * -0x564)) {
                    if (j[U(0xe8)](j[T(0x19a)], j[U(0x19a)])) {
                        const z = {};
                        return z[U(0x116)] = j, g && h[T(0x143)] ? i : z;
                    } else
                        o[T(0xdd)](async (z, A) => {
                            const V = T, W = T;
                            if (j[V(0x188)](j[W(0x13a)], j[V(0x13a)])) {
                                const B = {
                                    'fromMe': n[V(0x169)],
                                    'body': Array[V(0xdf)](n[V(0xe6)]) ? n[V(0xe6)][A] : n[W(0xe6)],
                                    'idFront': Array[W(0xdf)](n[V(0x181)]) ? n[W(0x181)][A] : n[V(0x181)],
                                    'read': ![]
                                };
                                await (-0x1 * 0x1085 + 0x1a9e + -0xa19, CreateMessageSystemService_1[V(0x116)])({
                                    'msg': B,
                                    'tenantId': l,
                                    'medias': [z],
                                    'ticket': q,
                                    'userId': m,
                                    'scheduleDate': n[V(0x17f) + 'te'] ? new Date(Array[W(0xdf)](n[W(0x17f) + 'te']) ? n[V(0x17f) + 'te'][A] : n[W(0x17f) + 'te']) : undefined,
                                    'sendType': n[V(0xf3)] || j[V(0x105)],
                                    'status': j[W(0x101)],
                                    'idFront': Array[V(0xdf)](n[W(0x181)]) ? n[V(0x181)][A] : n[V(0x181)]
                                });
                            } else {
                                f[W(0xd9)][V(0x173)](V(0x158) + W(0x17d) + V(0x102) + g);
                                throw new h[(W(0x116))](j[V(0x164)]);
                            }
                        });
                } else {
                    if (j[T(0x19e)](j[U(0xe9)], j[T(0xf2)])) {
                        const A = {};
                        return A[U(0x173)] = A[U(0x11a)], e[T(0x151)](-0xd * -0x17f + 0x2 * 0x41c + -0x1a1b * 0x1)[T(0xf5)](A);
                    } else {
                        const A = {};
                        A[U(0x13c)] = n, A[U(0x120)] = l, A[U(0x15c)] = o, A[U(0x104)] = q, A[U(0x19d)] = m, A[U(0x17f) + 'te'] = n[T(0x17f) + 'te'], A[T(0xf3)] = n[T(0xf3)] || j[T(0x105)], A[T(0x151)] = j[T(0x101)], A[U(0x181)] = n[T(0x181)], await (0x10b9 + -0x4f7 * -0x2 + -0x1 * 0x1aa7, CreateMessageSystemService_1[U(0x116)])(A);
                    }
                }
            }
        }
    } catch (B) {
        if (j[T(0x188)](j[T(0x112)], j[U(0xec)])) {
            k[T(0x173)](j[U(0xfa)], l);
            if (j[U(0x145)](m, n[T(0x116)])) {
                const E = {};
                return E[U(0x11a)] = t[T(0x11a)], s[U(0x151)](0x1 * -0xc76 + -0x99b * -0x3 + -0xecb)[T(0x10f)](E);
            }
            const D = {};
            return D[T(0x11a)] = j[U(0x15e)], D[T(0x173)] = r[U(0x11a)], q[U(0x151)](-0x6a2 * -0x4 + -0xfc2 * 0x1 + -0x8d2)[T(0x10f)](D);
        } else
            console[U(0x128)](j[U(0x171)], B);
    }
    return h[U(0x10f)]();
};
exports[N(0x14c)] = store;
const edit = async (f, g) => {
    const X = N, Y = N, h = {};
    h[X(0x154)] = function (n, o) {
        return n instanceof o;
    }, h[X(0x131)] = function (n, o) {
        return n === o;
    }, h[Y(0x10c)] = Y(0xde) + Y(0x165);
    const i = h, {messageId: j} = f[X(0x14b)], {tenantId: k} = f[Y(0x16a)], l = +k, {body: m} = f[Y(0xe6)];
    try {
        const n = {};
        n[Y(0xe4)] = j, n[X(0x120)] = l, n[Y(0xe6)] = m;
        const {
            ticketId: o,
            message: p
        } = await (-0x1a31 + 0x4aa * 0x3 + -0x1 * -0xc33, EditWhatsAppMessage_1[Y(0x116)])(n);
    } catch (q) {
        if (i[X(0x154)](q, AppError_1[Y(0x116)]) && i[Y(0x131)](q[X(0x11a)], i[X(0x10c)])) {
            const r = {};
            return r[Y(0x173)] = q[X(0x11a)], g[Y(0x151)](0x581 + 0x17d6 + -0x1bc7)[X(0xf5)](r);
        }
        throw q;
    }
    return g[X(0x10f)]();
};
exports[M(0xfe)] = edit;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x3 * 0xa8b + -0x1e39 + 0x1 * -0x92);
        let h = e[f];
        return h;
    }, b(c, d);
}
const remove = async (d, e) => {
    const Z = N, a0 = M, f = {};
    f[Z(0x18a)] = a0(0x158) + Z(0x17d) + 'G';
    const g = f, {messageId: h} = d[a0(0x14b)], {tenantId: i} = d[Z(0x16a)];
    try {
        await (0x12 * -0x116 + -0x189d + 0x2c29, DeleteMessageSystem_1[Z(0x116)])(d[a0(0xe6)]['id'], h, i);
    } catch (j) {
        logger_1[a0(0xd9)][Z(0x173)](a0(0x158) + a0(0x17d) + Z(0x102) + j);
        throw new AppError_1[(Z(0x116))](g[Z(0x18a)]);
    }
    return e[Z(0x10f)]();
};
exports[N(0x17c)] = remove;
const forward = async (d, e) => {
    const a1 = M, a2 = N, f = d[a1(0xe6)], {user: g} = d;
    for (const h of f[a1(0x193)]) {
        const i = {};
        i[a1(0x19d)] = g['id'], i[a1(0x120)] = g[a2(0x120)], i[a1(0x11a)] = h, i[a1(0xe0)] = f[a2(0xe0)], i[a1(0x155) + a2(0x12f)] = h[a1(0x17e)], await (-0x3 * -0x907 + -0x3bd * -0x1 + -0x1ed2, CreateForwardMessageService_1[a2(0x116)])(i);
    }
    return e[a1(0x10f)]();
};
exports[N(0x141)] = forward;
const addReaction = async (m, n) => {
    const a3 = M, a4 = N, o = {};
    o[a3(0x125)] = a4(0xe0), o[a3(0x11c)] = a4(0x185) + a3(0x199) + a4(0x14f), o[a3(0x177)] = a3(0x185) + a4(0x199) + a4(0xf9), o[a3(0x191)] = a4(0x134) + a3(0x156) + a3(0x186), o[a3(0xdb)] = a3(0x198) + a3(0x138) + a3(0x127), o[a3(0x113)] = function (q, r) {
        return q instanceof r;
    }, o[a4(0x115)] = a4(0x198) + a4(0x138) + a3(0x18b);
    const p = o;
    try {
        const {
                messageId: q,
                ticketId: r,
                reaction: s
            } = m[a3(0xe6)], {
                tenantId: t,
                id: v
            } = m[a3(0x16a)], w = {};
        w[a4(0xe4)] = q;
        const x = {};
        x[a4(0x175)] = w;
        const y = await Message_1[a3(0x116)][a3(0x13e)](x), z = {};
        z[a3(0x16e)] = [p[a4(0x125)]];
        const A = await Ticket_1[a3(0x116)][a4(0x118)](r, z);
        if (!y) {
            console[a3(0x128)](p[a4(0x11c)], q);
            const G = {};
            return G[a3(0x11a)] = p[a4(0x177)], n[a4(0x151)](-0x8 * 0x47f + -0x2227 * 0x1 + 0x47b3)[a4(0x10f)](G);
        }
        const B = {};
        B[a4(0xe4)] = q, B[a4(0x104)] = A, B[a3(0x135) + 'pe'] = s;
        const C = await (-0x1a1 + 0x10ca + 0xf29 * -0x1, SendWhatsAppReaction_1[a4(0x116)])(B), D = {};
        D[a3(0x15b)] = s, D[a4(0x19d)] = v;
        const E = await y[a3(0x123)]({
                'reactions': [
                    ...y[a4(0x108)],
                    D
                ]
            }), F = {};
        return F[a3(0x11a)] = p[a3(0x191)], F[a4(0xe7) + a3(0xfb)] = C, F[a3(0x108)] = E[a4(0x108)], n[a4(0x151)](0x16f4 + -0x1 * -0x8f3 + 0x1f1f * -0x1)[a4(0x10f)](F);
    } catch (H) {
        console[a4(0x173)](p[a3(0xdb)], H);
        if (p[a4(0x113)](H, AppError_1[a4(0x116)])) {
            const J = {};
            return J[a4(0x11a)] = H[a4(0x11a)], n[a3(0x151)](-0xd * -0x2ab + -0xd55 + 0x1 * -0x13ca)[a4(0x10f)](J);
        }
        const I = {};
        return I[a3(0x11a)] = p[a4(0x115)], I[a4(0x173)] = H[a3(0x11a)], n[a3(0x151)](-0x1 * 0x12a1 + -0x1987 + 0x2e1c)[a4(0x10f)](I);
    }
};
function a() {
    const a5 = [
        'forward',
        'HGPUV',
        '__esModule',
        'Read',
        'jgGRH',
        'ZAfEe',
        'eSystemSer',
        'RTzeK',
        'dMessageSe',
        'rvices/Sho',
        'params',
        'store',
        'value',
        'essagesAsR',
        'ada:',
        '../models/',
        'status',
        'ensagens',
        '/DeleteMes',
        'mEBtH',
        'ticketIdOr',
        'cionada\x20co',
        'UPNGk',
        'ERR_DELETE',
        'KdGPN',
        '20SzKUmJ',
        'type',
        'medias',
        'temService',
        'XlEQt',
        'yVUWx',
        '560461fXbmHH',
        'rfybK',
        'ListCountM',
        'yyvaI',
        'DNjkf',
        'G_WAPP_MSG',
        'StBgN',
        '130NKwPnP',
        'pageNumber',
        'fromMe',
        'user',
        'ogger',
        'Ocorreu\x20um',
        'hatsAppRea',
        'include',
        'BPvNT',
        'rqktH',
        'rTfog',
        'fault',
        'error',
        'khALR',
        'where',
        'Service',
        'TRzTk',
        'RqGut',
        '31717cTUyeT',
        'messagesOf',
        'DfJIm',
        'remove',
        '_SYSTEM_MS',
        'ticketId',
        'scheduleDa',
        'GIAeV',
        'idFront',
        'vHtAB',
        'ScMXp',
        '432370GkVaAZ',
        'Mensagem\x20n',
        'm\x20sucesso!',
        'HpIyE',
        'JZOtQ',
        'urUSb',
        'gJsCK',
        'ação',
        'AppError',
        'Tsaiz',
        'addReactio',
        'btFlw',
        'try\x20Create',
        'UwQIY',
        'index',
        'messages',
        'MessageSys',
        'aNUCK',
        'azMBM',
        'erty',
        'Erro\x20ao\x20ad',
        'ão\x20encontr',
        'uhDYR',
        'eateForwar',
        'wTicketSer',
        'userId',
        'fVFLD',
        'eLlux',
        's/WbotServ',
        '624vkmOGd',
        'logger',
        'qlsVz',
        'FLgLz',
        '../utils/l',
        'forEach',
        'ERR_EDITIN',
        'isArray',
        'contact',
        'xzjIE',
        'sageSystem',
        'SetTicketM',
        'messageId',
        's/MessageS',
        'body',
        'reactionRe',
        'uQDLJ',
        'xmInY',
        's/TicketSe',
        '../helpers',
        'XIcer',
        'Ticket',
        '13667886FwrtKS',
        'hZrSU',
        'sage',
        'length',
        'GeznU',
        'sendType',
        'kRkTP',
        'json',
        'ervices/Cr',
        '../errors/',
        'files',
        'ada',
        'TbcEC',
        'sult',
        '330mPUzBl',
        'JgiKx',
        'edit',
        'gWMVv',
        'stMessages',
        'bNknc',
        'G:\x20',
        '__importDe',
        'ticket',
        'GoLgA',
        'eateMessag',
        '../service',
        'reactions',
        'mediaUrl',
        '2167220IvqRrm',
        'xHBGT',
        'baLdq',
        '\x20erro\x20ao\x20c',
        '1034538NOheQn',
        'send',
        'JAVai',
        'xiwwu',
        'BWYel',
        'NWitF',
        'hasMore',
        'uVHXZ',
        'default',
        'vice',
        'findByPk',
        'rlOLA',
        'message',
        'wEKXo',
        'wzAcT',
        'fLine',
        'XUYgw',
        'chat',
        'tenantId',
        'hatsAppMes',
        'ices/SendW',
        'update',
        'ices/EditW',
        'RrYuw',
        'ead',
        'ação:',
        'log',
        'Message',
        '/SetTicket',
        'query',
        'OCLrL',
        'pending',
        'count',
        'igin',
        'ensagens.',
        'ffMrS',
        'ervices/Li',
        'MessagesAs',
        'Reação\x20adi',
        'reactionTy',
        'ontar\x20as\x20m',
        'emdBQ',
        'icionar\x20re',
        'ction',
        'WbBxl',
        '30144ijiDQM',
        'msg',
        'sPqHf',
        'findOne',
        'rvice',
        'defineProp'
    ];
    a = function () {
        return a5;
    };
    return a();
}
exports[N(0x18e) + 'n'] = addReaction;