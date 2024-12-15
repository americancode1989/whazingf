'use strict';
function a() {
    const L = [
        'quotedMsg',
        '__importDe',
        'pending',
        'default',
        'ervices/Sh',
        'body',
        'chat',
        'mediaName',
        'owTicketSe',
        'idation',
        'ticket',
        'ERR_CREATI',
        '4897316XlmTXU',
        'ls/Message',
        'contact',
        '2CpAUbV',
        'Emit',
        'isGroup',
        'sequelize',
        'whatsappId',
        'create',
        'type',
        'ers/socket',
        'mediaType',
        'NG_MESSAGE',
        'erty',
        'xKSah',
        'include',
        'contactId',
        'where',
        'value',
        'fault',
        'model',
        '../../help',
        '10VHHGwq',
        'KGZbi',
        '68277CQzUyQ',
        '5372631PPdKGL',
        'getTime',
        'Mlxke',
        '7122059tzzaFi',
        'wKaZi',
        'payload',
        'rvice',
        'tenantId',
        'hAjlM',
        '24aWiJVE',
        's/queueVal',
        'status',
        'findOne',
        'defineProp',
        '872261lfmvHa',
        'sqQEr',
        '965RhyOaD',
        'JyEiO',
        '856086eOHWGR',
        '../../mode',
        '../TicketS',
        'findByPk',
        '../../util',
        '__esModule',
        '8qyOYgB',
        'hQDfP',
        '35358urJMAQ',
        'ls/Ticket',
        '_SYSTEM',
        'update',
        'chat:creat',
        'open'
    ];
    a = function () {
        return L;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xb06 * 0x2 + 0x16 * -0x20 + 0x1d * 0xe9);
        let h = e[f];
        return h;
    }, b(c, d);
}
const G = b, H = b;
(function (c, d) {
    const E = b, F = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(E(0x1c6)) / (0x26c5 + -0x3bf + -0x2305) + parseInt(E(0x1a2)) / (-0x26d5 + -0x117 * -0x22 + 0x1c9) * (-parseInt(E(0x1b7)) / (0x25e2 + -0x1517 * 0x1 + -0x4 * 0x432)) + parseInt(F(0x19f)) / (0xd3a + -0x1b40 + 0xe0a) + -parseInt(F(0x1c8)) / (-0x1564 + -0x1a + 0x1583 * 0x1) * (parseInt(E(0x1d2)) / (-0x2b * 0x40 + -0x1 * 0x1c08 + 0x26ce)) + parseInt(E(0x1bb)) / (-0xedd + -0x7 * -0x67 + -0x119 * -0xb) * (-parseInt(F(0x1d0)) / (-0x16a5 + 0xa3 * -0xa + 0x1d0b)) + -parseInt(E(0x1b8)) / (0x2 * 0x4e + -0x1c26 + 0x1b93) * (-parseInt(F(0x1b5)) / (0x973 + 0x1bbf * -0x1 + -0x92b * -0x2)) + -parseInt(F(0x1ca)) / (-0xda3 * 0x2 + -0xb7b + 0x1366 * 0x2) * (-parseInt(F(0x1c1)) / (-0x6 * 0x213 + 0xc60 + -0x6 * -0x5));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x955d6 + -0x64e79 + 0x26819 * 0x3));
var __importDefault = this && this[G(0x1d9) + G(0x1b2)] || function (c) {
    const I = G;
    return c && c[I(0x1cf)] ? c : { 'default': c };
};
const k = {};
k[H(0x1b1)] = !![], Object[H(0x1c5) + H(0x1ac)](exports, H(0x1cf), k);
const sequelize_1 = require(H(0x1a5)), socketEmit_1 = __importDefault(require(G(0x1b4) + H(0x1a9) + G(0x1a3))), Message_1 = __importDefault(require(H(0x1cb) + H(0x1a0))), Ticket_1 = __importDefault(require(G(0x1cb) + H(0x1d3))), ShowTicketService_1 = __importDefault(require(H(0x1cc) + H(0x1dc) + G(0x19b) + G(0x1be))), queueValidation_1 = __importDefault(require(H(0x1ce) + H(0x1c2) + H(0x19c))), CreateForwardMessageService = async ({
        userId: l,
        tenantId: m,
        message: n,
        contact: o,
        ticketIdOrigin: p
    }) => {
        const J = H, K = G, q = {};
        q[J(0x1d1)] = K(0x1d7), q[J(0x1b6)] = K(0x1da), q[K(0x1c0)] = J(0x199), q[J(0x1c7)] = J(0x19d), q[J(0x1ad)] = K(0x1a1), q[K(0x1ba)] = J(0x1d8), q[J(0x1c9)] = J(0x19e) + J(0x1ab) + K(0x1d4), q[K(0x1bc)] = J(0x1d6) + 'e';
        const r = q, s = {};
        s['id'] = p, s[J(0x1bf)] = m;
        const t = await (0x12a5 + -0x111c + -0x3 * 0x83, ShowTicketService_1[K(0x1db)])(s);
        let u;
        const v = {
                [sequelize_1['Op']['or']]: [
                    r[J(0x1d1)],
                    r[J(0x1b6)]
                ]
            }, w = {};
        w[K(0x1c3)] = v, w[K(0x1bf)] = m, w[K(0x1af)] = o['id'];
        const x = {};
        x[J(0x1b0)] = w, u = await Ticket_1[K(0x1db)][J(0x1c4)](x);
        !u && (u = await Ticket_1[K(0x1db)][K(0x1a7)]({
            'contactId': o['id'],
            'status': r[J(0x1d1)],
            'isGroup': o[J(0x1a4)],
            'userId': l,
            'tenantId': m,
            'unreadMessages': 0x0,
            'whatsappId': t[K(0x1a6)],
            'lastMessage': n[J(0x1dd)],
            'lastMessageAt': new Date()[K(0x1b9)](),
            'answered': !![]
        }));
        const y = {
                'body': n[J(0x1dd)],
                'contactId': o['id'],
                'fromMe': !![],
                'read': !![],
                'mediaType': n?.[K(0x1aa)],
                'mediaUrl': n?.[K(0x19a)],
                'mediaName': n?.[J(0x19a)],
                'timestamp': new Date()[J(0x1b9)](),
                'userId': l,
                'scheduleDate': null,
                'sendType': r[K(0x1c0)],
                'status': r[K(0x1b6)],
                'ticketId': u['id'],
                'tenantId': m
            }, z = await Message_1[J(0x1db)][K(0x1a7)](y), A = {};
        A[J(0x1bf)] = m;
        const B = {};
        B[K(0x1b3)] = Ticket_1[K(0x1db)], B['as'] = r[J(0x1c7)], B[K(0x1b0)] = A, B[K(0x1ae)] = [r[J(0x1ad)]];
        const C = await Message_1[J(0x1db)][J(0x1cd)](z['id'], {
            'include': [
                B,
                {
                    'model': Message_1[J(0x1db)],
                    'as': r[J(0x1ba)],
                    'include': [r[J(0x1ad)]]
                }
            ]
        });
        if (!C)
            throw new Error(r[K(0x1c9)]);
        await u[J(0x1d5)]({
            'lastMessage': C[J(0x1dd)],
            'lastMessageAt': new Date()[J(0x1b9)](),
            'answered': !![]
        }), await (-0x12a0 * -0x1 + 0x1750 + -0x29f0, queueValidation_1[J(0x1db)])(u[K(0x1a6)], u[J(0x1bf)], [C]);
        const D = {};
        D[J(0x1bf)] = m, D[J(0x1a8)] = r[K(0x1bc)], D[J(0x1bd)] = C, (0xae8 + 0x7e + 0x2 * -0x5b3, socketEmit_1[K(0x1db)])(D);
    };
exports[G(0x1db)] = CreateForwardMessageService;