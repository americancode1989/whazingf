'use strict';
const aa = b, ab = b;
(function (c, d) {
    const a8 = b, a9 = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(a8(0x111)) / (-0x53 * 0x1 + -0x14ce + -0x43a * -0x5) * (parseInt(a9(0xd4)) / (0x1 * -0x1471 + 0xa7b + 0x9f8)) + parseInt(a8(0x153)) / (0xa79 + 0x14de + 0x322 * -0xa) * (parseInt(a8(0x19c)) / (0xaf2 + -0xd3 * -0x18 + -0x1eb6)) + parseInt(a9(0x106)) / (0x1 * -0xb8c + -0x1b58 + -0x1 * -0x26e9) + -parseInt(a8(0x18f)) / (-0x773 + -0x236c + 0x2ae5) * (-parseInt(a9(0x167)) / (0x9 * 0x233 + -0xa * 0x3c9 + 0x5 * 0x39e)) + -parseInt(a9(0x126)) / (-0x16d6 + -0x323 * 0xb + -0x13 * -0x305) + -parseInt(a9(0x199)) / (0x2675 + -0x35f + -0x3 * 0xbaf) * (parseInt(a8(0xcc)) / (-0x2 * 0xa24 + 0x52 * 0x2e + 0x16 * 0x41)) + parseInt(a8(0x14d)) / (0x11db + -0x239c + -0x11 * -0x10c);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x5ae * -0x5 + 0x83 * -0xbbf + 0xc1839 * 0x1));
var __importDefault = this && this[aa(0x190) + aa(0x166)] || function (c) {
    const ac = ab;
    return c && c[ac(0xf6)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x85d + 0x22f9 + -0x19d5);
        let h = e[f];
        return h;
    }, b(c, d);
}
const q = {};
q[ab(0x16b)] = !![], Object[aa(0xfc) + ab(0x1b9)](exports, ab(0xf6), q), exports[aa(0xfe)] = exports[ab(0x15e) + 'ts'] = exports[ab(0x10d) + aa(0x11f)] = exports[ab(0xe5)] = exports[ab(0x13f)] = exports[aa(0x1a5)] = exports[ab(0x1ad)] = exports[ab(0xdb)] = void (0x4a9 + 0x22 * 0x121 + 0x2b0b * -0x1);
const sequelize_1 = require(aa(0x164)), socket_1 = require(aa(0x158) + ab(0x11f)), Message_1 = __importDefault(require(aa(0x13b) + ab(0x188))), CreateLogTicketService_1 = __importDefault(require(aa(0x117) + aa(0x184) + aa(0xd6) + aa(0x142) + aa(0xf8))), CreateTicketService_1 = __importDefault(require(ab(0x117) + aa(0x184) + ab(0xd6) + aa(0x193) + aa(0xcf))), DeleteTicketService_1 = __importDefault(require(ab(0x117) + ab(0x184) + aa(0x191) + ab(0x14f) + aa(0xcf))), ListTicketsService_1 = __importDefault(require(aa(0x117) + ab(0x184) + aa(0x17d) + ab(0x124) + ab(0x16d))), ShowLogTicketService_1 = __importDefault(require(ab(0x117) + aa(0x184) + ab(0x1b7) + aa(0xf5) + ab(0xef))), ShowTicketService_1 = __importDefault(require(aa(0x117) + aa(0x184) + ab(0x1b7) + ab(0x1b3) + ab(0x107))), UpdateTicketService_1 = __importDefault(require(ab(0x117) + aa(0x184) + aa(0x1b8) + aa(0x193) + aa(0xcf))), closeTicketsService_1 = require(ab(0x117) + ab(0x184) + aa(0x15d) + aa(0x101) + ab(0xcf)), delTicketsService_1 = require(ab(0x117) + ab(0x184) + aa(0x170) + aa(0x131) + ab(0x107)), Whatsapp_1 = __importDefault(require(aa(0x13b) + aa(0xee))), AppError_1 = __importDefault(require(aa(0xc9) + aa(0x165))), CreateMessageSystemService_1 = __importDefault(require(ab(0x117) + aa(0x157) + ab(0x122) + aa(0x128) + aa(0x1a2) + aa(0x107))), Ticket_1 = __importDefault(require(aa(0x13b) + ab(0x123))), ListSettingsService_1 = __importDefault(require(ab(0x117) + aa(0x12f) + aa(0xe2) + ab(0x13e) + aa(0xef))), UserRating_1 = __importDefault(require(aa(0x13b) + aa(0xe8))), Mustache_1 = __importDefault(require(aa(0x102) + aa(0xf7))), index = async (e, f) => {
        const ad = aa, ae = aa, {
                tenantId: g,
                profile: h
            } = e[ad(0x137)], {
                searchParam: i,
                pageNumber: j,
                status: k,
                date: l,
                showAll: m,
                withUnreadMessages: n,
                queuesIds: o,
                isNotAssignedUser: p,
                includeNotQueueDefined: r
            } = e[ad(0x161)], s = e[ae(0x137)]['id'], t = {};
        t[ad(0x10b) + 'm'] = i, t[ae(0x1ac)] = j, t[ae(0xe1)] = k, t[ad(0x105)] = l, t[ad(0xeb)] = m, t[ae(0xf2)] = s, t[ae(0x18e) + ae(0x1af)] = n, t[ad(0x1ae)] = o, t[ad(0x198) + ae(0x109)] = p, t[ad(0xec) + ad(0x127) + 'ed'] = r, t[ad(0x179)] = g, t[ae(0x1ab)] = h;
        const {
                tickets: u,
                count: v,
                hasMore: w
            } = await (-0x1084 * 0x1 + 0x1 * -0x1b31 + 0x1 * 0x2bb5, ListTicketsService_1[ae(0x18c)])(t), x = {};
        return x[ae(0xd7)] = u, x[ae(0x132)] = v, x[ad(0x1a7)] = w, f[ae(0xe1)](0x1 * -0x1e38 + 0x70f + -0x1b * -0xe3)[ad(0xcd)](x);
    };
exports[aa(0xdb)] = index;
function a() {
    const aw = [
        'status',
        'ervices/Li',
        'oXyjY',
        'REMIN',
        'remove',
        'scheduleDa',
        'mgrcq',
        'UserRating',
        'eted',
        'read',
        'showAll',
        'includeNot',
        'delete',
        'Whatsapp',
        'Service',
        'ticket',
        's\x20must\x20be\x20',
        'userId',
        'QWVOb',
        'warn',
        'wLogTicket',
        '__esModule',
        '/Mustache',
        'etService',
        'IsVws',
        'provided',
        'osed\x20succe',
        'defineProp',
        'esxks',
        'delTickets',
        'oiYyo',
        'isFarewell',
        'seTicketsS',
        '../helpers',
        'params',
        'action',
        'date',
        '2424900zieBHd',
        'vice',
        'find',
        'nedUser',
        '\x20qualifica',
        'searchPara',
        'XnWnb',
        'showLogsTi',
        'r\x20nosso\x20at',
        'ltando\x20na\x20',
        'ticketData',
        '1691ZfSJIW',
        'est',
        'create',
        'endimento:',
        'ivPzw',
        '\x20😊\x20_Muito\x20',
        '../service',
        'sLgmO',
        'ZEBNr',
        'findAll',
        'tsService',
        'oUCzb',
        'mqZYh',
        'essages',
        'cket',
        'bot',
        'atribuido\x20',
        'ervices/Cr',
        'Ticket',
        'tTicketsSe',
        'ticketId',
        '4230256CJNRvr',
        'QueueDefin',
        'eateMessag',
        'endDate',
        'note',
        'destroy',
        ':notificat',
        'tNIyF',
        'closed',
        's/SettingS',
        'Tickets\x20cl',
        'TicketsSer',
        'count',
        'RdQxo',
        'cTgfr',
        'rate',
        'to_\x0a*2*\x20-\x20',
        'user',
        'wAnff',
        'enabled',
        'spGib',
        '../models/',
        'GpIAf',
        'ratingMess',
        'stSettings',
        'update',
        'JwiIq',
        'access',
        'ateLogTick',
        'WAaYS',
        'DCOOw',
        'ZIzUR',
        'Digite\x20de\x20',
        'aeeSw',
        'zbJuR',
        'scheduledM',
        'EDCFx',
        'Filtros\x20fa',
        '1\x20à\x203\x20para',
        '635635rQzsIr',
        'key',
        'eteTicketS',
        'fromMe',
        'Cstgv',
        'wbQsl',
        '179583ukQAPa',
        'TslgY',
        'getIO',
        'rPpPc',
        's/MessageS',
        '../libs/so',
        'channelId',
        'yrRDu',
        'Bmjav',
        'userIdRequ',
        'rvices/clo',
        'closeTicke',
        'age',
        'ssfully',
        'query',
        'All\x20filter',
        'dVJGx',
        'sequelize',
        'AppError',
        'fault',
        '2873927ITBFqJ',
        'rating',
        'JgkUa',
        'DFZwh',
        'value',
        'isTransfer',
        'rvice',
        'pending',
        'NotViewAss',
        'rvices/del',
        'emit',
        'where',
        'whatsappId',
        'timeRating',
        'KYFmo',
        'Satisfeito',
        'uHEtG',
        'TOYdK',
        'tenantId',
        '\x20usuário',
        'ssage',
        'startDate',
        'rvices/Lis',
        '_\x0a\x0a',
        'contact',
        'UfdiC',
        ':ticket',
        'XXeuw',
        'FtKku',
        's/TicketSe',
        'tMqZR',
        'type',
        'ence',
        'Message',
        'para\x20outro',
        'EfgJX',
        'message',
        'default',
        'TrNDz',
        'withUnread',
        '6uLEcMg',
        '__importDe',
        'rvices/Del',
        'gBgzr',
        'ateTicketS',
        '\x0a*1*\x20-\x20😞\x20_',
        'KwDoS',
        'setDataVal',
        'rWVsC',
        'isNotAssig',
        '83493wzGRwt',
        'farewellMe',
        'contactId',
        '4SddqYW',
        'ofbGs',
        'IUdco',
        'IHbWb',
        'ZhETJ',
        'Insatisfei',
        'eSystemSer',
        'ion',
        'msg',
        'show',
        'ignedTicke',
        'hasMore',
        'YMRGl',
        'solicitaçã',
        'FJtSA',
        'profile',
        'pageNumber',
        'store',
        'queuesIds',
        'Messages',
        '🙂\x20_Satisfe',
        'Ahxjp',
        'vyMIs',
        'wTicketSer',
        'channel',
        'HCakh',
        'ticket\x20del',
        'rvices/Sho',
        'rvices/Upd',
        'erty',
        'PYMEh',
        'xaSUs',
        'XTxNY',
        'BPSVK',
        'Ticket\x20já\x20',
        '../errors/',
        'sTOwX',
        'sendType',
        '810kNDGsZ',
        'json',
        'UiWCB',
        'ervice',
        'dDmAV',
        'DmjaN',
        'findOne',
        'GFaKL',
        '796fuARHF',
        'gtkRX',
        'rvices/Cre',
        'tickets',
        'ito_\x0a*3*\x20-',
        'MIZeK',
        'ByYKW',
        'index',
        'not',
        'open',
        'BIREe',
        'isGroup',
        'body'
    ];
    a = function () {
        return aw;
    };
    return a();
}
const store = async (i, j) => {
    const af = ab, ag = aa, k = {};
    k[af(0xf9)] = function (C, D) {
        return C === D;
    }, k[af(0xd5)] = af(0x16f) + ag(0x1a6) + 'ts', k[ag(0xe4)] = ag(0xd3), k[ag(0xff)] = function (C, D) {
        return C === D;
    }, k[ag(0xda)] = af(0x14b) + af(0x10f) + ag(0x1a9) + 'o', k[af(0xc7)] = ag(0x162) + af(0xf1) + af(0xfa), k[af(0x10c)] = ag(0x113), k[af(0x11c)] = ag(0xdd), k[ag(0x145)] = ag(0x16e), k[af(0x19d)] = ag(0x139), k[af(0xe7)] = function (C, D) {
        return C != D;
    }, k[af(0xd9)] = function (C, D) {
        return C == D;
    }, k[ag(0x11d)] = af(0x1b2), k[af(0x1aa)] = ag(0xfd), k[af(0x138)] = af(0xc8) + ag(0x121) + ag(0x189) + ag(0x17a), k[af(0x183)] = af(0x192), k[ag(0x148)] = ag(0x133), k[af(0x1b1)] = ag(0x185);
    const l = k, {tenantId: m} = i[ag(0x137)], {
            contactId: n,
            status: o,
            userId: p,
            channel: r,
            channelId: s
        } = i[ag(0xe0)], t = {};
    t[ag(0xe1)] = l[af(0x11c)];
    const u = {};
    u[af(0xe1)] = l[ag(0x145)];
    const v = {
        [sequelize_1['Op']['or']]: [
            t,
            u
        ]
    };
    v[ag(0x19b)] = n, v[ag(0x179)] = m, v[ag(0x1b4)] = r;
    const w = {};
    w[af(0x172)] = v;
    const x = await Ticket_1[af(0x18c)][ag(0xd2)](w), y = await (0x15 * 0x198 + 0x7 * -0x10f + -0x1 * 0x1a0f, ListSettingsService_1[ag(0x18c)])(m), z = l[ag(0xff)](y?.[ag(0x108)](C => {
            const ai = ag, aj = af, D = {
                    'YMRGl': function (E, F) {
                        const ah = b;
                        return l[ah(0xf9)](E, F);
                    },
                    'DFZwh': l[ai(0xd5)]
                };
            return l[ai(0xf9)](l[ai(0xe4)], l[ai(0xe4)]) ? l[aj(0xff)](C[aj(0x14e)], l[ai(0xd5)]) : D[aj(0x1a8)](t[aj(0x14e)], D[aj(0x16a)]);
        })?.[ag(0x16b)], l[ag(0x19d)]) ? 'S' : 'N';
    if (x && !!x[ag(0xf2)] && l[af(0xe7)](x[ag(0xf2)], p) && l[af(0xd9)](z, 'S')) {
        if (l[af(0xf9)](l[ag(0x11d)], l[af(0x1aa)])) {
            const D = {};
            return D[af(0x18b)] = v[ag(0x18b)], u[ag(0xe1)](-0x1a95 + -0xd4 + 0x1d5d)[af(0xcd)](D);
        } else
            throw new AppError_1[(af(0x18c))](l[af(0x138)]);
    }
    if (x) {
        if (l[af(0xff)](l[ag(0x183)], l[ag(0x183)]))
            return j[ag(0xe1)](-0x8 * 0x400 + 0x1777 + 0x951)[af(0xcd)](x);
        else {
            const E = {};
            E[af(0xe1)] = k, E[af(0x17c)] = l, E[ag(0x129)] = m, E[ag(0x173)] = n, E[ag(0xdf)] = o, j[ag(0xf4)](l[ag(0xda)], E);
            const F = {};
            return F[af(0x18b)] = l[ag(0xc7)], p[ag(0xe1)](0x3b3 * 0x5 + 0x1a12 + -0x2b01)[ag(0xcd)](F);
        }
    }
    const A = {};
    A[af(0x19b)] = n, A[ag(0xe1)] = o, A[ag(0xf2)] = p, A[ag(0x179)] = m, A[ag(0x1b4)] = r, A[af(0x159)] = s;
    const B = await (-0x25b + 0x1 * 0x11b0 + -0xf55, CreateTicketService_1[af(0x18c)])(A);
    if (!p) {
        if (l[af(0xf9)](l[ag(0x148)], l[ag(0x1b1)])) {
            const F = (0x9dc + 0x11 * 0x3d + 0x3 * -0x4a3, A[ag(0x155)])(), G = {};
            G[ag(0x104)] = l[af(0x10c)], G[ag(0xf0)] = l, F['to'](G + ':' + j[ag(0xe1)])[af(0x171)](k + ag(0x181), G);
        } else {
            const F = (0x3d3 + -0x26b8 + 0x22e5 * 0x1, socket_1[ag(0x155)])();
            F['to'](m + ':' + B[af(0xe1)])[ag(0x171)](m + af(0x181), {
                'action': l[ag(0x10c)],
                'ticket': B
            });
        }
    }
    return j[ag(0xe1)](0x2f * -0x77 + 0x17ff + -0xe * 0x19)[ag(0xcd)](B);
};
exports[ab(0x1ad)] = store;
const show = async (i, j) => {
    const ak = ab, al = aa, k = {};
    k[ak(0xd0)] = ak(0x16e), k[al(0x151)] = ak(0x149) + ak(0x11e), k[al(0x143)] = al(0x141);
    const l = k, {ticketId: m} = i[al(0x103)], {tenantId: n} = i[al(0x137)], o = i[al(0x137)]['id'], p = {};
    p['id'] = m, p[ak(0x179)] = n;
    const r = await (-0x3b6 + 0x2446 + 0x8 * -0x412, ShowTicketService_1[ak(0x18c)])(p), s = { [sequelize_1['Op'][ak(0xdc)]]: null }, t = {};
    t[ak(0x19b)] = r[ak(0x19b)], t[ak(0xe6) + 'te'] = s, t[al(0xe1)] = l[ak(0xd0)];
    const u = t, v = {};
    v[ak(0x172)] = u;
    const w = await Message_1[al(0x18c)][ak(0x11a)](v);
    r[al(0x196) + 'ue'](l[al(0x151)], w);
    const x = {};
    return x[al(0xf2)] = o, x[ak(0x125)] = m, x[ak(0x186)] = l[ak(0x143)], await (0x20b2 + -0x33 * -0x9b + 0xf * -0x43d, CreateLogTicketService_1[ak(0x18c)])(x), j[al(0xe1)](-0x23ce * 0x1 + -0x229c + 0x4732)[al(0xcd)](r);
};
exports[aa(0x1a5)] = show;
const update = async (t, u) => {
    const am = aa, an = aa, v = {};
    v[am(0x147)] = am(0x14b) + an(0x10f) + an(0x1a9) + 'o', v[an(0x14a)] = am(0x162) + an(0xf1) + an(0xfa), v[am(0x156)] = an(0xc8) + am(0x121) + am(0x189) + an(0x17a), v[an(0x134)] = function (F, G) {
        return F === G;
    }, v[an(0xce)] = an(0x12e), v[am(0x1ba)] = function (F, G) {
        return F !== G;
    }, v[an(0x175)] = an(0x15a), v[am(0x13a)] = function (F, G) {
        return F === G;
    }, v[am(0x115)] = an(0x152), v[am(0x12d)] = am(0xe3), v[an(0x18a)] = function (F, G) {
        return F || G;
    }, v[am(0xde)] = an(0x146) + am(0x14c) + am(0x10a) + an(0x10e) + am(0x114) + an(0x194) + an(0x1a1) + an(0x136) + am(0x1b0) + an(0xd8) + am(0x116) + am(0x176) + an(0x17e), v[an(0x1bb)] = am(0x120), v[an(0x154)] = am(0x16e), v[am(0xf3)] = function (F, G) {
        return F === G;
    }, v[am(0x18d)] = am(0x178), v[an(0x1bc)] = am(0x1a0), v[am(0x1b5)] = function (F, G) {
        return F === G;
    }, v[an(0x19e)] = am(0x182), v[am(0x177)] = am(0x163);
    const w = v, {ticketId: x} = t[an(0x103)], {tenantId: y} = t[an(0x137)], z = t[an(0x137)]['id'], {isTransference: A} = t[am(0xe0)], B = { ...t[am(0xe0)] };
    B[an(0x179)] = y;
    const C = B, D = {};
    D[am(0x110)] = C, D[am(0x125)] = x, D[am(0x16c) + am(0x187)] = A, D[am(0x15c) + am(0x112)] = z;
    const {ticket: E} = await (0x3 * 0x30a + -0x1db4 + 0x1496, UpdateTicketService_1[an(0x18c)])(D);
    if (w[an(0x134)](C[an(0xe1)], w[an(0xce)])) {
        if (w[an(0x1ba)](w[an(0x175)], w[am(0x175)])) {
            const G = {};
            return G[am(0x18c)] = j, g && h[an(0xf6)] ? i : G;
        } else {
            const G = {};
            G['id'] = E[am(0x173)], G[am(0x179)] = y;
            const H = {};
            H[an(0x172)] = G;
            const I = await Whatsapp_1[an(0x18c)][an(0xd2)](H);
            if (w[am(0x13a)](I?.[an(0x168)], !![])) {
                if (w[an(0x134)](w[an(0x115)], w[an(0x12d)]))
                    return D[am(0xe1)](0x5f4 + -0x947 + 0x41b * 0x1)[am(0xcd)](G);
                else {
                    const K = await (-0x1766 + 0x11 * -0x127 + -0x2afd * -0x1, Mustache_1[an(0x18c)])(I?.[an(0x13d) + an(0x15f)], E[an(0x17f)], E), L = w[an(0x18a)](K, w[an(0xde)]), M = {};
                    M[an(0xe0)] = L, M[am(0x150)] = !![], M[am(0xea)] = !![], M[am(0xcb)] = w[an(0x1bb)], M[an(0x179)] = E[an(0x179)];
                    const N = M, O = {};
                    O[an(0x1a4)] = N, O[am(0x179)] = E[an(0x179)], O[am(0xf0)] = E, O[an(0xcb)] = N[an(0xcb)], O[an(0xe1)] = w[an(0x154)], await (-0x1 * -0x268d + -0x12b * 0x2 + -0x1 * 0x2437, CreateMessageSystemService_1[am(0x18c)])(O);
                    const P = {};
                    P[am(0x125)] = E['id'], P[an(0x179)] = E[am(0x179)], P[am(0xf2)] = E[am(0xf2)], P[an(0x19b)] = E[an(0x19b)], P[an(0x173)] = E[an(0x173)], P[am(0x135)] = null;
                    const Q = await UserRating_1[am(0x18c)][am(0x113)](P), R = I?.[am(0x174)] || 0xb8c + -0xc * -0x314 + 0x1 * -0x3077;
                    await new Promise(V => setTimeout(V, R * (-0x27e * -0x1a + 0x62 * 0x184 + 0x150c)));
                    const S = {};
                    S['id'] = Q['id'];
                    const T = {};
                    T[an(0x172)] = S;
                    const U = await UserRating_1[am(0x18c)][am(0xd2)](T);
                    if (w[am(0xf3)](U?.[am(0x135)], null)) {
                        if (w[am(0x1ba)](w[am(0x18d)], w[an(0x18d)])) {
                            const W = {};
                            return W[an(0x18b)] = G[an(0x18b)], D[am(0xe1)](0xb * 0x119 + 0xc47 + -0x1666)[am(0xcd)](W);
                        } else {
                            await U[an(0x12b)]();
                            if (I?.[am(0x19a) + an(0x17b)]) {
                                if (w[am(0x134)](w[am(0x1bc)], w[am(0x1bc)])) {
                                    const W = await (-0x5 * 0xfe + 0x14b2 + -0xfbc, Mustache_1[am(0x18c)])(I[an(0x19a) + an(0x17b)], E[an(0x17f)], E), X = {};
                                    X[an(0xe0)] = W, X[am(0x150)] = !![], X[am(0xea)] = !![];
                                    const Y = {};
                                    Y[an(0x1a4)] = X, Y[an(0x179)] = y, Y[am(0xf0)] = E, Y[am(0xf2)] = t[an(0x137)]['id'], Y[am(0xcb)] = w[am(0x1bb)], Y[an(0xe1)] = w[an(0x154)], Y[am(0x16c)] = ![], Y[an(0x12a)] = ![];
                                    const Z = Y;
                                    await (0x6 * 0xe6 + 0x1aaa + -0x200e, CreateMessageSystemService_1[am(0x18c)])(Z);
                                    const a0 = {};
                                    a0[an(0x100) + an(0x188)] = !![], await E[am(0x13f)](a0);
                                } else {
                                    const a2 = {};
                                    a2[an(0xe1)] = S, a2[am(0x17c)] = T, a2[am(0x129)] = m, a2[am(0x173)] = n, a2[an(0xdf)] = o, P[an(0xf4)](w[an(0x147)], a2);
                                    const a3 = {};
                                    return a3[an(0x18b)] = w[an(0x14a)], a2[am(0xe1)](0x1641 * -0x1 + -0x1 * 0x1010 + 0x27e1)[am(0xcd)](a3);
                                }
                            }
                        }
                    }
                }
            }
            if (I?.[an(0x19a) + an(0x17b)] && w[am(0x134)](I?.[an(0x168)], ![])) {
                if (w[an(0x1b5)](w[am(0x19e)], w[am(0x177)]))
                    throw new B[(an(0x18c))](w[am(0x156)]);
                else {
                    const a3 = await (0x10dd + 0x6ab * -0x2 + -0x387, Mustache_1[am(0x18c)])(I[am(0x19a) + an(0x17b)], E[an(0x17f)], E), a4 = {};
                    a4[am(0xe0)] = a3, a4[an(0x150)] = !![], a4[an(0xea)] = !![];
                    const a5 = {};
                    a5[am(0x1a4)] = a4, a5[an(0x179)] = y, a5[am(0xf0)] = E, a5[am(0xf2)] = t[an(0x137)]['id'], a5[an(0xcb)] = w[am(0x1bb)], a5[an(0xe1)] = w[an(0x154)], a5[an(0x16c)] = ![], a5[am(0x12a)] = ![];
                    const a6 = a5;
                    await (0x89 * 0x1f + -0x19b0 + 0x919, CreateMessageSystemService_1[am(0x18c)])(a6);
                    const a7 = {};
                    a7[am(0x100) + an(0x188)] = !![], await E[am(0x13f)](a7);
                }
            }
        }
    }
    return u[an(0xe1)](0x1 * -0x1f6b + -0x313 * -0x4 + 0x13e7)[am(0xcd)](E);
};
exports[aa(0x13f)] = update;
const remove = async (f, g) => {
    const ao = aa, ap = ab, h = {};
    h[ao(0x119)] = ao(0xed), h[ap(0x195)] = ap(0x1b6) + ao(0xe9);
    const i = h, {ticketId: j} = f[ap(0x103)], {tenantId: k} = f[ao(0x137)], l = f[ap(0x137)]['id'], m = {};
    m['id'] = j, m[ap(0x179)] = k, m[ap(0xf2)] = l;
    const n = await (-0x21 * 0x6a + -0x480 + 0x122a, DeleteTicketService_1[ao(0x18c)])(m), o = (0x2342 + -0x6 * -0x59a + -0x1ae * 0x29, socket_1[ao(0x155)])();
    o['to'](k + ':' + n[ap(0xe1)])['to'](k + ':' + j)['to'](k + (ap(0x12c) + ao(0x1a3)))[ap(0x171)](k + ao(0x181), {
        'action': i[ap(0x119)],
        'ticketId': +j
    });
    const p = {};
    return p[ap(0x18b)] = i[ap(0x195)], g[ao(0xe1)](-0x20a1 + -0x18 * -0x197 + -0x2d * 0x1b)[ao(0xcd)](p);
};
exports[ab(0xe5)] = remove;
const showLogsTicket = async (d, e) => {
    const aq = ab, ar = ab, {ticketId: f} = d[aq(0x103)], g = {};
    g[aq(0x125)] = f;
    const h = await (-0x1 * -0x19b1 + 0xd4 * -0x2f + 0x469 * 0x3, ShowLogTicketService_1[ar(0x18c)])(g);
    return e[ar(0xe1)](-0x447 * 0x8 + -0x1072 + 0x3372)[ar(0xcd)](h);
};
exports[aa(0x10d) + aa(0x11f)] = showLogsTicket;
const closeTickets = async (h, i) => {
    const as = aa, at = aa, j = {
            'GpIAf': function (k, l) {
                return k(l);
            },
            'JwiIq': function (k, l) {
                return k || l;
            },
            'sLgmO': function (k, l) {
                return k === l;
            },
            'JgkUa': as(0x14b) + as(0x10f) + as(0x1a9) + 'o',
            'DCOOw': as(0x162) + at(0xf1) + at(0xfa),
            'rWVsC': as(0x130) + at(0xfb) + at(0x160)
        };
    try {
        const k = j[at(0x13c)](Number, h[at(0x137)]['id']), l = j[at(0x13c)](Number, h[at(0x137)][at(0x179)]), {
                status: m,
                startDate: n,
                endDate: o,
                whatsappId: p,
                isGroup: r
            } = h[as(0xe0)];
        if (j[at(0x140)](!m, !n) || !o || !p || j[as(0x118)](r, undefined)) {
            const u = {};
            u[at(0xe1)] = m, u[as(0x17c)] = n, u[as(0x129)] = o, u[at(0x173)] = p, u[at(0xdf)] = r, console[as(0xf4)](j[as(0x169)], u);
            const v = {};
            return v[as(0x18b)] = j[as(0x144)], i[at(0xe1)](-0x1dc5 + 0x176a + 0x7eb)[as(0xcd)](v);
        }
        const s = {};
        s[as(0xe1)] = m, s[as(0x17c)] = n, s[at(0x129)] = o, s[at(0x173)] = p, s[as(0xdf)] = r, s[as(0xf2)] = k, s[at(0x179)] = l, await (-0x1786 + 0x1252 * 0x2 + -0xd1e, closeTicketsService_1[at(0x15e) + at(0x11b)])(s);
        const t = {};
        return t[as(0x18b)] = j[at(0x197)], i[as(0xe1)](-0xa * -0x34a + 0x240 * -0x1 + -0x1ddc)[as(0xcd)](t);
    } catch (w) {
        const x = {};
        return x[as(0x18b)] = w[as(0x18b)], i[at(0xe1)](0x1e9 * -0x4 + -0x2 * 0x5e5 + 0x2e * 0x77)[as(0xcd)](x);
    }
};
exports[ab(0x15e) + 'ts'] = closeTickets;
const delTickets = async (i, j) => {
    const au = aa, av = aa, k = {};
    k[au(0x180)] = function (m, n) {
        return m || n;
    }, k[av(0x19f)] = function (m, n) {
        return m === n;
    }, k[au(0x15b)] = av(0x14b) + av(0x10f) + au(0x1a9) + 'o', k[av(0xd1)] = av(0x162) + au(0xf1) + au(0xfa), k[av(0xca)] = au(0x130) + au(0xfb) + av(0x160);
    const l = k;
    try {
        const {
            status: m,
            startDate: n,
            endDate: o,
            whatsappId: p,
            isGroup: r
        } = i[au(0xe0)];
        if (l[av(0x180)](!m, !n) || !o || !p || l[au(0x19f)](r, undefined)) {
            const u = {};
            u[av(0xe1)] = m, u[av(0x17c)] = n, u[au(0x129)] = o, u[au(0x173)] = p, u[av(0xdf)] = r, console[av(0xf4)](l[au(0x15b)], u);
            const v = {};
            return v[au(0x18b)] = l[av(0xd1)], j[au(0xe1)](0x1067 + -0x220f * 0x1 + 0x1338)[av(0xcd)](v);
        }
        const s = {};
        s[av(0xe1)] = m, s[au(0x17c)] = n, s[av(0x129)] = o, s[au(0x173)] = p, s[au(0xdf)] = r, await (0x3 * -0xa7d + 0x4 * -0x53e + 0x346f * 0x1, delTicketsService_1[av(0xfe) + au(0xef)])(s);
        const t = {};
        return t[au(0x18b)] = l[au(0xca)], j[au(0xe1)](-0x970 + 0xa90 * -0x2 + 0xfac * 0x2)[av(0xcd)](t);
    } catch (w) {
        const x = {};
        return x[av(0x18b)] = w[au(0x18b)], j[av(0xe1)](0x1 * -0xaab + 0x1764 + 0x1 * -0xac5)[au(0xcd)](x);
    }
};
exports[aa(0xfe)] = delTickets;