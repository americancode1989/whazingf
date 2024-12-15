'use strict';
const az = b, aA = b;
(function (c, d) {
    const ax = b, ay = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(ax(0x1ca)) / (-0xb97 + 0x7 * -0x131 + -0x237 * -0x9) * (-parseInt(ay(0x168)) / (0x124b + -0x6 * 0x2bc + 0x1 * -0x1e1)) + -parseInt(ay(0x145)) / (0x1bdb * -0x1 + 0x47 * -0x2 + 0x1c6c) + parseInt(ay(0x1b2)) / (-0x13d * -0x5 + 0x561 + -0x2 * 0x5c7) + parseInt(ax(0x150)) / (-0x2f9 * 0x5 + 0xb46 + 0x39c) * (-parseInt(ax(0x124)) / (-0x17 * -0x65 + 0x10eb + -0x18 * 0x115)) + -parseInt(ax(0x1a8)) / (0x2 * -0xff7 + 0x9e5 * -0x2 + 0x3fb * 0xd) * (parseInt(ax(0x1cd)) / (-0x1b8c + -0x1f23 + -0x3ab7 * -0x1)) + -parseInt(ay(0x184)) / (0x77e + 0x2c * 0x3d + 0x3 * -0x5fb) * (-parseInt(ax(0x1d0)) / (0x1ec3 + -0x481 * 0x2 + -0x15b7)) + parseInt(ay(0x12d)) / (0x16a9 + -0x261 + -0x143d) * (parseInt(ax(0x13f)) / (0x634 + 0x216 * 0x4 + -0x2 * 0x740));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xd * 0xc6c1 + -0xbf * -0xc55 + -0xd807f));
var __importDefault = this && this[az(0x14c) + aA(0x19c)] || function (c) {
    const aB = az;
    return c && c[aB(0x14f)] ? c : { 'default': c };
};
const k = {};
k[az(0x139)] = !![], Object[aA(0x15b) + az(0x12e)](exports, az(0x14f), k);
const AppError_1 = __importDefault(require(az(0x1c2) + az(0x17f) + 'r')), CheckContactOpenTickets_1 = __importDefault(require(az(0x1d3) + az(0x167) + az(0x129) + aA(0x1ac))), SetTicketMessagesAsRead_1 = __importDefault(require(az(0x1d3) + aA(0x1d5) + aA(0x174) + az(0x16a))), Contact_1 = __importDefault(require(az(0x1de) + az(0x13c))), Ticket_1 = __importDefault(require(aA(0x1de) + aA(0x1cb))), User_1 = __importDefault(require(az(0x1de) + az(0x140))), Whatsapp_1 = __importDefault(require(az(0x1de) + az(0x16d) + 'p')), socketEmit_1 = __importDefault(require(az(0x1d3) + aA(0x1b6) + az(0x1a1))), CreateLogTicketService_1 = __importDefault(require(az(0x1b1) + az(0x19b) + az(0x17a))), Mustache_1 = __importDefault(require(aA(0x1d3) + aA(0x175) + 'he')), CreateMessageSystemService_1 = __importDefault(require(az(0x18b) + aA(0x176) + aA(0x1c5) + az(0x1d4) + az(0x15d))), GetIntegrationsID_1 = __importDefault(require(az(0x1d3) + aA(0x169) + az(0x17c) + 'D')), UpdateTicketService = async ({
        ticketData: B,
        ticketId: C,
        isTransference: D,
        userIdRequest: E
    }) => {
        const aC = az, aD = aA, F = {};
        F[aC(0x18a)] = aC(0x1b3) + aD(0x1af), F[aC(0x194)] = aC(0x141) + aD(0x19a), F[aC(0x190)] = aD(0x189), F[aC(0x193)] = aD(0x1b8), F[aC(0x1cc)] = aC(0x17b), F[aD(0x16c)] = aD(0x1b9), F[aC(0x186)] = aC(0x1a3), F[aC(0x1a7)] = aD(0x18c), F[aD(0x1ad)] = aD(0x195), F[aD(0x1c9)] = aD(0x17d), F[aD(0x164)] = aD(0x191), F[aD(0x134)] = function (a4, a5) {
            return a4 === a5;
        }, F[aC(0x1c8)] = aC(0x143), F[aC(0x171)] = function (a4, a5) {
            return a4 !== a5;
        }, F[aD(0x125)] = aD(0x151), F[aC(0x187)] = function (a4, a5) {
            return a4 === a5;
        }, F[aC(0x161)] = function (a4, a5) {
            return a4 === a5;
        }, F[aD(0x148)] = aC(0x126), F[aD(0x14d)] = aC(0x12b), F[aC(0x131)] = aD(0x127), F[aD(0x13b)] = aC(0x12c), F[aD(0x1bb)] = function (a4, a5) {
            return a4 === a5;
        }, F[aC(0x162)] = aD(0x1cf), F[aD(0x19f)] = function (a4, a5) {
            return a4 === a5;
        }, F[aC(0x12f)] = aD(0x155), F[aC(0x180)] = function (a4, a5) {
            return a4 !== a5;
        }, F[aC(0x170)] = aD(0x179), F[aC(0x1aa)] = aC(0x1dc), F[aD(0x166)] = function (a4, a5) {
            return a4 === a5;
        }, F[aD(0x1bf)] = aC(0x1d6), F[aC(0x17e)] = aC(0x173), F[aD(0x13d)] = function (a4, a5) {
            return a4 === a5;
        }, F[aC(0x18f)] = function (a4, a5) {
            return a4 === a5;
        }, F[aD(0x1a9)] = aC(0x152), F[aC(0x14e)] = aD(0x18e) + aC(0x1d1), F[aD(0x157)] = function (a4, a5) {
            return a4 === a5;
        }, F[aD(0x196)] = aC(0x172) + aD(0x147) + aD(0x144) + aC(0x1ce) + aC(0x159) + aD(0x1ab) + aD(0x15e) + aD(0x136) + aC(0x188) + 'o!', F[aC(0x1e0)] = aC(0x16b), F[aD(0x137)] = aC(0x183) + aC(0x1a6), F[aD(0x197)] = function (a4, a5) {
            return a4 === a5;
        }, F[aD(0x181)] = aC(0x130), F[aD(0x1c0)] = aD(0x1db) + aC(0x1ba), F[aD(0x1d9)] = aC(0x1bc) + aC(0x13e), F[aD(0x135)] = function (a4, a5) {
            return a4 === a5;
        }, F[aC(0x1b4)] = aD(0x1bd) + aD(0x177) + aC(0x178) + aC(0x15c) + aC(0x165) + aC(0x1df) + aC(0x198) + aD(0x19e) + aC(0x16f) + aD(0x163) + aC(0x128) + aC(0x1a5), F[aC(0x182)] = aC(0x18d) + aD(0x1c3);
        const G = F, {
                status: H,
                userId: I,
                tenantId: J,
                queueId: K
            } = B, L = B[aC(0x1db) + aC(0x1ba)] || ![], M = B[aD(0x1bc) + aD(0x13e)] || null, N = B['IA'] || ![], O = {};
        O['id'] = C, O[aD(0x1a0)] = J;
        const P = {};
        P[aD(0x13a)] = Contact_1[aD(0x1d8)], P['as'] = G[aC(0x190)], P[aD(0x138)] = [
            G[aC(0x193)],
            G[aD(0x1cc)],
            {
                'association': G[aC(0x16c)],
                'attributes': [
                    'id',
                    G[aC(0x186)]
                ]
            }
        ];
        const Q = {};
        Q[aC(0x13a)] = User_1[aD(0x1d8)], Q['as'] = G[aD(0x1a7)], Q[aD(0x12a)] = [
            'id',
            G[aD(0x186)]
        ];
        const R = {};
        R[aD(0x199) + 'n'] = G[aD(0x1ad)], R[aD(0x12a)] = [
            'id',
            G[aD(0x186)],
            G[aD(0x1c9)],
            G[aD(0x164)]
        ];
        const S = {};
        S[aD(0x19d)] = O, S[aD(0x138)] = [
            P,
            Q,
            R
        ];
        const T = await Ticket_1[aC(0x1d8)][aC(0x1b5)](S);
        if (!T) {
            if (G[aD(0x134)](G[aD(0x1c8)], G[aC(0x1c8)]))
                throw new AppError_1[(aC(0x1d8))](G[aD(0x18a)], -0x1 * 0x1b37 + 0x1388 + 0x943);
            else
                R[aC(0x156) + 'd'] = null, S[aC(0x158) + aD(0x185)] = null, i[aD(0x192) + aC(0x1a4)] = new j()[aC(0x132)]();
        }
        await (-0x2 * 0x63e + 0x1 * 0xfde + -0x362, SetTicketMessagesAsRead_1[aD(0x1d8)])(T);
        const U = G[aD(0x171)](T[aC(0x1b7)], G[aC(0x125)]) && G[aC(0x187)](B[aD(0x1b7)], G[aC(0x125)]), V = T[aC(0x1b7)], W = T[aC(0x18c)]?.['id'];
        if (G[aD(0x161)](V, G[aD(0x148)])) {
            if (G[aC(0x161)](G[aC(0x14d)], G[aC(0x131)]))
                throw new O[(aC(0x1d8))](G[aD(0x18a)], -0x235c + -0x93 * -0x19 + -0x1695 * -0x1);
            else
                await (0x1487 + -0x15b9 + 0x2 * 0x99, CheckContactOpenTickets_1[aC(0x1d8)])(T[aC(0x189)]['id']);
        }
        const X = G[aD(0x134)](H, G[aD(0x13b)]) ? G[aC(0x148)] : H, Y = {
                'status': X,
                'queueId': K,
                'userId': I,
                'imported': G[aD(0x1bb)](H, G[aD(0x148)]) ? null : T[aD(0x1a2)]
            };
        if (G[aC(0x1bb)](X, G[aC(0x148)])) {
            if (G[aC(0x171)](G[aD(0x162)], G[aD(0x162)])) {
                const a7 = {};
                a7[aC(0x1a0)] = R, a7[aD(0x142)] = G[aD(0x194)], a7[aC(0x16e)] = S, (-0x48b * 0x2 + -0x22e * -0x1 + -0x8 * -0xdd, Q[aD(0x1d8)])(a7);
            } else
                Y[aD(0x160)] = new Date()[aC(0x132)]();
        }
        G[aD(0x161)](V, G[aC(0x125)]) && G[aC(0x19f)](X, G[aC(0x12f)]) && (G[aD(0x180)](G[aC(0x170)], G[aC(0x1aa)]) ? (Y[aD(0x156) + 'd'] = null, Y[aD(0x158) + aD(0x185)] = null, Y[aD(0x192) + aD(0x1a4)] = new Date()[aD(0x132)]()) : P[aC(0x160)] = new Q()[aC(0x132)]());
        await T[aC(0x1c1)](Y);
        if (G[aC(0x161)](V, G[aC(0x125)]) && G[aC(0x19f)](X, G[aD(0x12f)])) {
            if (G[aC(0x166)](G[aD(0x1bf)], G[aC(0x17e)])) {
                const a9 = {};
                return a9[aD(0x1d8)] = j, R && S[aC(0x14f)] ? a9 : a9;
            } else {
                const a9 = {};
                a9[aC(0x153)] = E, a9[aC(0x1b0)] = C, a9[aD(0x142)] = G[aC(0x12f)], await (-0x232 * 0xe + 0x9dc * 0x1 + 0x14e0, CreateLogTicketService_1[aD(0x1d8)])(a9);
            }
        }
        if (G[aC(0x13d)](X, G[aC(0x148)])) {
            const aa = {};
            aa[aD(0x153)] = E, aa[aD(0x1b0)] = C, aa[aC(0x142)] = G[aC(0x148)], await (-0xe54 + 0x1b6 * -0x6 + 0x1898, CreateLogTicketService_1[aC(0x1d8)])(aa);
        }
        if (G[aC(0x18f)](V, G[aC(0x12f)]) && G[aC(0x13d)](X, G[aC(0x125)])) {
            const ab = {};
            ab[aC(0x153)] = E, ab[aD(0x1b0)] = C, ab[aC(0x142)] = G[aC(0x125)], await (0xef * 0x2 + 0x159c + -0x177a, CreateLogTicketService_1[aC(0x1d8)])(ab);
        }
        if (D) {
            const ac = {};
            ac[aC(0x153)] = E, ac[aC(0x1b0)] = C, ac[aD(0x142)] = G[aD(0x1a9)], await (0x1052 * -0x2 + 0x5 * -0x613 + 0x3f03, CreateLogTicketService_1[aD(0x1d8)])(ac);
            if (I) {
                const ad = {};
                ad[aD(0x153)] = I, ad[aD(0x1b0)] = C, ad[aC(0x142)] = G[aC(0x14e)], await (0x2276 + -0xfd + -0x2179, CreateLogTicketService_1[aC(0x1d8)])(ad);
            }
        }
        await T[aD(0x1be)]();
        const Z = {};
        Z['id'] = T[aC(0x1c7)], Z[aD(0x1a0)] = J;
        const a0 = {};
        a0[aD(0x19d)] = Z;
        const a1 = await Whatsapp_1[aD(0x1d8)][aD(0x1b5)](a0);
        if (G[aC(0x157)](a1?.[aD(0x14b) + aD(0x133)], !![]) && G[aD(0x19f)](V, G[aC(0x125)]) && G[aD(0x161)](X, G[aD(0x12f)])) {
            const ae = a1?.[aC(0x14b) + aC(0x133) + aC(0x1dd)] || G[aD(0x196)], af = await (0x143b + 0x87a + -0x1cb5, Mustache_1[aC(0x1d8)])(ae, T[aC(0x189)], T), ag = {};
            ag[aD(0x149)] = af, ag[aD(0x154)] = !![], ag[aD(0x1da)] = !![], ag[aD(0x1c6)] = G[aC(0x1e0)], ag[aD(0x1a0)] = T[aC(0x1a0)];
            const ah = ag, ai = {};
            ai[aC(0x146)] = ah, ai[aD(0x1a0)] = T[aC(0x1a0)], ai[aC(0x123)] = T, ai[aD(0x1c6)] = ah[aC(0x1c6)], ai[aD(0x1b7)] = G[aC(0x125)], await (0x19ce + -0xc4b + -0x1 * 0xd83, CreateMessageSystemService_1[aD(0x1d8)])(ai);
        }
        D && await T[aC(0x1ae) + 'ue'](G[aD(0x137)], !![]);
        if (D) {
            const aj = await (-0x220f + -0x1d36 + 0x3f45, GetIntegrationsID_1[aC(0x1d8)])(T[aD(0x15f)]);
            if (G[aD(0x197)](typeof aj, G[aD(0x181)])) {
                await T[aC(0x1ae) + 'ue'](G[aC(0x1c0)], !![]), await T[aC(0x1ae) + 'ue'](G[aD(0x1d9)], aj);
                const ak = {};
                ak[aD(0x1db) + aD(0x1ba)] = !![], ak[aC(0x1bc) + aC(0x13e)] = aj;
                const al = ak;
                await T[aC(0x1c1)](al), await T[aC(0x1be)]();
            } else {
                await T[aD(0x1ae) + 'ue'](G[aD(0x1c0)], ![]), await T[aD(0x1ae) + 'ue'](G[aC(0x1d9)], null);
                const am = {};
                am[aC(0x1db) + aD(0x1ba)] = ![], am[aC(0x1bc) + aD(0x13e)] = null;
                const an = am;
                await T[aD(0x1c1)](an), await T[aC(0x1be)]();
            }
        }
        if (D) {
            const ao = {};
            ao['id'] = T[aD(0x1c7)], ao[aC(0x1a0)] = J;
            const ap = {};
            ap[aC(0x19d)] = ao;
            const aq = await Whatsapp_1[aC(0x1d8)][aD(0x1b5)](ap);
            if (G[aD(0x135)](aq?.[aD(0x15a) + aD(0x1d2)], !![])) {
                const ar = aq?.[aD(0x15a) + aD(0x1d7) + 'SG'] || G[aD(0x1b4)], as = await (0xd1d + -0xebb * -0x2 + 0x15 * -0x207, Mustache_1[aC(0x1d8)])(ar, T[aD(0x189)], T), at = {};
                at[aC(0x149)] = as, at[aD(0x154)] = !![], at[aC(0x1da)] = !![], at[aD(0x1c6)] = G[aD(0x1e0)], at[aD(0x1a0)] = T[aD(0x1a0)];
                const au = at, av = {};
                av[aD(0x146)] = au, av[aD(0x1a0)] = T[aC(0x1a0)], av[aC(0x123)] = T, av[aC(0x1c6)] = au[aC(0x1c6)], av[aD(0x1b7)] = G[aC(0x125)], await (-0x8d + -0x267c + 0x2709, CreateMessageSystemService_1[aC(0x1d8)])(av);
            }
        }
        if (U) {
            const aw = {};
            aw[aC(0x1a0)] = J, aw[aC(0x142)] = G[aC(0x194)], aw[aD(0x16e)] = T, (0x2031 + -0x25e6 + -0x5b5 * -0x1, socketEmit_1[aC(0x1d8)])(aw);
        }
        const a2 = {};
        a2[aC(0x1a0)] = J, a2[aD(0x142)] = G[aD(0x182)], a2[aC(0x16e)] = T, (0x4c * -0x18 + 0xd93 + -0x673, socketEmit_1[aC(0x1d8)])(a2);
        const a3 = {};
        return a3[aD(0x123)] = T, a3[aC(0x1c4)] = V, a3[aC(0x14a)] = W, a3;
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x393 + -0x2469 * 0x1 + -0x27 * -0xdf);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const aE = [
        'ence',
        'DJAWF',
        '1547ZJAsSp',
        'gZiiF',
        'yHxsF',
        '\x20agora\x20vou',
        'Tickets',
        'FdDyB',
        'setDataVal',
        'KET_FOUND',
        'ticketId',
        './CreateLo',
        '1843064eNQSHq',
        'ERR_NO_TIC',
        'ZFXXd',
        'findOne',
        'ers/socket',
        'status',
        'extraInfo',
        'wallets',
        'tion',
        'cvafg',
        'integratio',
        '‎\x20*{{name}',
        'reload',
        'MwkNv',
        'pcTaz',
        'update',
        '../../erro',
        'ate',
        'oldStatus',
        'reateMessa',
        'sendType',
        'whatsappId',
        'CmNRD',
        'Swlpo',
        '21149EkTrQT',
        'ls/Ticket',
        'LqjnO',
        '12224YzoOmm',
        '\x20nome\x20é\x20*{',
        'Ngsfm',
        '45940TUonVc',
        'ansfer',
        'nsfTicket',
        '../../help',
        'geSystemSe',
        'ers/SetTic',
        'LwAep',
        'nsfTicketM',
        'default',
        'cnuDs',
        'read',
        'useIntegra',
        'BqWgH',
        'MSG',
        '../../mode',
        'ido.\x20Por\x20f',
        'aulUm',
        'ticket',
        '30iVigJR',
        'MywUC',
        'closed',
        'cwrfG',
        'm\x20irá\x20aten',
        'ontactOpen',
        'attributes',
        'gmPMT',
        'close',
        '319aKlSYV',
        'erty',
        'VxSpo',
        'number',
        'LIbQE',
        'getTime',
        'ngAccepted',
        'Wtjfh',
        'uXYUN',
        'r\x20com\x20seu\x20',
        'mgIdz',
        'include',
        'value',
        'model',
        'vSfwm',
        'ls/Contact',
        'amcfJ',
        'nId',
        '132996ItklXX',
        'ls/User',
        'notificati',
        'type',
        'tgYtv',
        'me}}*,\x20meu',
        '1870854aeJtFi',
        'msg',
        'ng}}\x20*{{na',
        'EhBAo',
        'body',
        'oldUserId',
        'sendGreeti',
        '__importDe',
        'DJRBJ',
        'IHGXS',
        '__esModule',
        '505775lffyYq',
        'pending',
        'transfered',
        'userId',
        'fromMe',
        'open',
        'autoReplyI',
        'unTxY',
        'stepAutoRe',
        '{user}}*\x20e',
        'sendMsgTra',
        'defineProp',
        '\x20está\x20send',
        'rvice',
        '\x20prossegui',
        'queueId',
        'closedAt',
        'ACaYH',
        'XWGow',
        'eve,\x20algué',
        'Godgl',
        'o\x20transfer',
        'FVxCT',
        'ers/CheckC',
        '62GzXaHq',
        'ers/GetInt',
        'sAsRead',
        'bot',
        'AaaUL',
        'ls/Whatsap',
        'payload',
        'ento\x20em\x20br',
        'sIzhA',
        'oHnTt',
        '‎\x20{{greeti',
        'DxJQk',
        'ketMessage',
        'ers/Mustac',
        'Services/C',
        '}*\x20o\x20seu\x20a',
        'tendimento',
        'LhXEQ',
        'vice',
        'tags',
        'egrationsI',
        'isDeleted',
        'rzHAy',
        'rs/AppErro',
        'WHQwA',
        'Pcgss',
        'zDUOW',
        'isTransfer',
        '801BhUwIY',
        'plyId',
        'bBnsN',
        'ENhvF',
        'atendiment',
        'contact',
        'WBpcZ',
        '../Message',
        'user',
        'ticket:upd',
        'receivedTr',
        'ABCWV',
        'BxzTU',
        'color',
        'startedAtt',
        'OupQE',
        'fnosZ',
        'whatsapp',
        'gXeJi',
        'cCOrF',
        'avor,\x20agua',
        'associatio',
        'on:new',
        'gTicketSer',
        'fault',
        'where',
        'rde\x20um\x20mom',
        'YWcxw',
        'tenantId',
        'Emit',
        'imported',
        'name',
        'endanceAt',
        'dê-lo.'
    ];
    a = function () {
        return aE;
    };
    return a();
}
exports[aA(0x1d8)] = UpdateTicketService;