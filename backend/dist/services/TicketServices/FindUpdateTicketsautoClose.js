'use strict';
const a3 = b, a4 = b;
(function (c, d) {
    const a1 = b, a2 = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(a1(0x133)) / (-0x1 * 0x18c1 + 0x2e0 * 0xc + -0x9be * 0x1) * (parseInt(a2(0x160)) / (0x2074 + 0x134f + 0x33c1 * -0x1)) + parseInt(a2(0x13c)) / (0x10cf + -0x260b + 0x153f) * (-parseInt(a1(0x136)) / (-0x70 + 0xe * 0x7e + 0x338 * -0x2)) + -parseInt(a1(0x17f)) / (0x2 * -0xe08 + -0x3e7 + 0x1ffc) * (parseInt(a1(0x151)) / (-0x9f7 * -0x1 + 0x7c8 + -0x11b9)) + -parseInt(a1(0x13b)) / (-0x1 * 0x1e81 + -0x8bb + 0x2743) + parseInt(a1(0x139)) / (0x893 + -0x1899 + 0x100e) * (parseInt(a1(0x14f)) / (0x7 * -0x587 + -0x1 * 0x2125 + 0x47df)) + -parseInt(a1(0x161)) / (-0x17ac + -0xe7a + 0x2630) + parseInt(a1(0x199)) / (-0x134f * 0x2 + 0x64d * -0x4 + 0x1 * 0x3fdd) * (parseInt(a2(0x176)) / (-0x25b1 + 0x1 * -0x1449 + 0x3a06));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x5cc0f * -0x3 + 0x6dc2c + 0x103 * -0xe8f));
var __importDefault = this && this[a3(0x180) + a3(0x132)] || function (c) {
    const a5 = a4;
    return c && c[a5(0x169)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xd * -0x225 + 0x1 * 0x1b81 + 0x7be * -0x7);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[a3(0x15a)] = !![], Object[a4(0x155) + a3(0x16d)](exports, a4(0x169), k);
const logger_1 = require(a3(0x166) + a3(0x138)), Ticket_1 = __importDefault(require(a3(0x179) + a3(0x163))), Setting_1 = __importDefault(require(a4(0x179) + a3(0x17b))), Tenant_1 = __importDefault(require(a3(0x179) + a4(0x15b))), ShowTicketService_1 = __importDefault(require(a3(0x197) + a3(0x15f))), socketEmit_1 = __importDefault(require(a4(0x190) + a3(0x171) + a3(0x17c))), uuid_1 = require(a3(0x172)), CreateMessageSystemService_1 = __importDefault(require(a3(0x156) + a4(0x184) + a3(0x19e) + a4(0x183) + a3(0x157))), Contact_1 = __importDefault(require(a3(0x179) + a3(0x182))), FindUpdateTicketsautoClose = async () => {
        const a6 = a4, a7 = a4, s = {
                'IByFN': a6(0x13e),
                'ywNZe': a7(0x191),
                'UXAxt': a7(0x174),
                'vkjEx': a6(0x1a0) + a7(0x19a),
                'onTsl': a7(0x141) + a6(0x1a3),
                'NZebI': function (t, u) {
                    return t === u;
                },
                'OEElt': a6(0x189),
                'VJeUM': a7(0x15e),
                'npLYy': function (t, u) {
                    return t === u;
                },
                'cvEVk': function (t, u) {
                    return t / u;
                },
                'bwdtf': function (t, u) {
                    return t * u;
                },
                'eRAxR': function (t, u) {
                    return t(u);
                },
                'JFIAm': function (t, u) {
                    return t > u;
                },
                'RJPII': function (t, u) {
                    return t - u;
                },
                'ohSpc': a6(0x14a) + a6(0x131) + a6(0x154),
                'UxWXe': a7(0x168),
                'PWcbS': a6(0x15c),
                'kIpNS': a6(0x194),
                'KlXyw': a7(0x192) + a6(0x164),
                'CePQD': function (t, u) {
                    return t + u;
                },
                'AYYPP': a6(0x185) + a7(0x17a) + a7(0x18e) + a7(0x16c) + a7(0x146),
                'UNKzU': a6(0x185) + a6(0x17a) + a6(0x137) + a7(0x198)
            };
        try {
            const t = {};
            t[a7(0x1a1)] = [[
                    s[a6(0x14d)],
                    s[a7(0x14e)]
                ]];
            const u = await Tenant_1[a7(0x18a)][a6(0x17d)](t);
            for (const v of u) {
                const w = v['id'], x = {};
                x[a6(0x16f)] = s[a7(0x18f)], x[a6(0x175)] = w;
                const y = {};
                y[a6(0x170)] = x;
                const z = await Setting_1[a7(0x18a)][a6(0x162)](y), A = {};
                A[a6(0x16f)] = s[a7(0x18d)], A[a7(0x175)] = w;
                const B = {};
                B[a7(0x170)] = A;
                const C = await Setting_1[a7(0x18a)][a6(0x162)](B), D = {};
                D[a6(0x16f)] = s[a7(0x158)], D[a7(0x175)] = w;
                const E = {};
                E[a6(0x170)] = D;
                const F = await Setting_1[a6(0x18a)][a7(0x162)](E);
                if (s[a7(0x16b)](z?.[a6(0x15a)], s[a7(0x19f)])) {
                    const G = {};
                    G[a6(0x175)] = w, G[a7(0x18c)] = s[a7(0x196)];
                    const H = {};
                    H[a7(0x143)] = Contact_1[a7(0x18a)];
                    const I = {};
                    I[a7(0x170)] = G, I[a6(0x165)] = [H];
                    const J = await Ticket_1[a6(0x18a)][a7(0x17d)](I);
                    for (const K of J) {
                        if (s[a6(0x178)](K[a6(0x186)], ![]))
                            continue;
                        const L = Math[a7(0x142)](s[a7(0x13f)](Date[a7(0x148)](), 0x15cc + 0xcd4 * -0x1 + 0x4 * -0x144)), M = Math[a6(0x142)](s[a6(0x13f)](K[a7(0x187) + a6(0x15d)], 0x1 * -0x2dd + -0x1 * 0x22ed + 0x29b2)), N = C ? s[a7(0x17e)](s[a6(0x14b)](parseInt, C[a7(0x15a)]), 0x11 * 0x239 + -0x3f * 0x13 + -0x20e0) : -0x1462 * -0x1 + -0x1997 + 0x535;
                        if (s[a6(0x149)](s[a6(0x1a2)](L, M), N)) {
                            const O = F?.[a6(0x15a)] || s[a6(0x13a)], P = O, Q = {};
                            Q[a6(0x188)] = P, Q[a7(0x152)] = !![], Q[a7(0x150)] = !![], Q[a7(0x134)] = s[a7(0x145)];
                            const R = Q, S = (-0x1 * -0x7ef + -0xff + -0xde * 0x8, uuid_1['v4'])(), T = {};
                            T[a6(0x193)] = R, T[a7(0x175)] = K[a6(0x175)], T[a7(0x181)] = K, T[a6(0x134)] = R[a6(0x134)], T[a7(0x18c)] = s[a7(0x140)], T[a6(0x144)] = S;
                            const U = T;
                            K[a6(0x13d)] && K[a6(0x13d)][a6(0x13e)] ? await (-0x1676 + 0x1d88 + -0x712, CreateMessageSystemService_1[a7(0x18a)])(U) : console[a6(0x195)](a7(0x167) + a7(0x173) + a6(0x159) + a7(0x130) + a6(0x18b) + ':\x20' + K['id']);
                            try {
                                const V = {};
                                V[a7(0x18c)] = s[a7(0x16e)], await K[a6(0x14c)](V);
                                const W = {};
                                W['id'] = K['id'], W[a6(0x175)] = K[a6(0x175)];
                                const X = await (0x1 * 0x11d1 + 0x5a4 + -0x1775, ShowTicketService_1[a6(0x18a)])(W), Y = {};
                                Y[a7(0x175)] = K[a6(0x175)], Y[a6(0x16a)] = s[a6(0x19c)], Y[a6(0x153)] = X, (0x1 * 0x22ae + -0xa * 0x116 + -0x17d2, socketEmit_1[a7(0x18a)])(Y);
                            } catch (Z) {
                                logger_1[a6(0x19b)][a7(0x195)](s[a7(0x135)](s[a7(0x177)], JSON[a6(0x147)](Z)));
                            }
                        }
                    }
                }
            }
        } catch (a0) {
            logger_1[a7(0x19b)][a7(0x195)](s[a7(0x135)](s[a6(0x19d)], JSON[a7(0x147)](a0)));
        }
    };
function a() {
    const a8 = [
        'Emit',
        'findAll',
        'bwdtf',
        '5GXfhqc',
        '__importDe',
        'ticket',
        'ls/Contact',
        'geSystemSe',
        'Services/C',
        ':::\x20Error\x20',
        'answered',
        'lastMessag',
        'body',
        'enabled',
        'default',
        '\x20do\x20ticket',
        'status',
        'vkjEx',
        'r\x20atualiza',
        'UXAxt',
        '../../help',
        'ASC',
        'ticket:upd',
        'msg',
        'closed',
        'warn',
        'VJeUM',
        './ShowTick',
        'amento:\x20',
        '20737123PARhkj',
        'ime',
        'logger',
        'KlXyw',
        'UNKzU',
        'reateMessa',
        'OEElt',
        'autoCloseT',
        'order',
        'RJPII',
        'essage',
        'ticket.\x20ID',
        'mento\x20foi\x20',
        'fault',
        '410717osJLDM',
        'sendType',
        'CePQD',
        '416uxzJpF',
        'r\x20autofech',
        's/logger',
        '376zxPelH',
        'ohSpc',
        '5834787ufvNvk',
        '28971oSPwRC',
        'contact',
        'name',
        'cvEVk',
        'PWcbS',
        'autoCloseM',
        'floor',
        'model',
        'idFront',
        'UxWXe',
        'ket:\x20',
        'stringify',
        'now',
        'JFIAm',
        'Seu\x20atendi',
        'eRAxR',
        'update',
        'IByFN',
        'ywNZe',
        '229131HAcyzA',
        'read',
        '940584HIWeAK',
        'fromMe',
        'payload',
        'encerrado.',
        'defineProp',
        '../Message',
        'rvice',
        'onTsl',
        'do\x20para\x20o\x20',
        'value',
        'ls/Tenant',
        'pending',
        'eAt',
        'open',
        'etService',
        '2wiDmIt',
        '523720omVwVg',
        'findOne',
        'ls/Ticket',
        'ate',
        'include',
        '../../util',
        'Contato\x20nã',
        'bot',
        '__esModule',
        'type',
        'NZebI',
        'ção\x20do\x20tic',
        'erty',
        'kIpNS',
        'key',
        'where',
        'ers/socket',
        'uuid',
        'o\x20encontra',
        'autoClose',
        'tenantId',
        '12xqrMoC',
        'AYYPP',
        'npLYy',
        '../../mode',
        'ao\x20realiza',
        'ls/Setting'
    ];
    a = function () {
        return a8;
    };
    return a();
}
exports[a3(0x18a)] = FindUpdateTicketsautoClose;