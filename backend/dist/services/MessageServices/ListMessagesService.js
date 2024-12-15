'use strict';
const D = b, E = b;
(function (c, d) {
    const B = b, C = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(B(0x147)) / (0xdd * -0x23 + -0x2 * 0x98f + -0x3156 * -0x1) + parseInt(C(0x15b)) / (-0x19 * -0x175 + 0x1 * -0x1cd4 + 0x797 * -0x1) * (-parseInt(C(0x152)) / (0xb52 + -0x95 * 0x2b + 0xdb8)) + -parseInt(B(0x144)) / (-0xbea + -0x11de + 0x1dcc) * (-parseInt(B(0x169)) / (-0x63d * 0x4 + -0x21a * -0xc + -0x3f)) + parseInt(C(0x16b)) / (0x3 * -0x73c + 0x159 * 0x2 + 0x1308) + -parseInt(C(0x14d)) / (0xec2 * -0x1 + -0xacf * -0x3 + 0x469 * -0x4) + parseInt(C(0x155)) / (-0x72c + -0xb45 * 0x3 + 0x2903 * 0x1) * (-parseInt(C(0x16a)) / (0x1ad7 * 0x1 + -0x1629 + 0x29 * -0x1d)) + parseInt(B(0x156)) / (0x2605 + 0x30d * -0x5 + 0x1 * -0x16ba);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x479cd + -0x3 * -0xe51b + 0x15c37 * 0x4));
var __importDefault = this && this[D(0x15c) + D(0x167)] || function (c) {
    const F = D;
    return c && c[F(0x148)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x18 * 0xfe + -0x2e8 * -0x2 + 0x133a * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[D(0x14e)] = !![], Object[E(0x158) + D(0x171)](exports, E(0x148), k);
function a() {
    const I = [
        'LwisK',
        'tenantId',
        'NKAAr',
        'fault',
        'whatsappId',
        '13680wzjWuT',
        '9hrSijG',
        '646314YFvOmj',
        'model',
        'rvice',
        'AoTdQ',
        'JJyPJ',
        'quotedMsg',
        'erty',
        'default',
        'KET_FOUND',
        'required',
        'voXwV',
        'WPqkb',
        'queueId',
        'rs/AppErro',
        'ERR_NO_TIC',
        'OffLine',
        'drQEV',
        'DESC',
        '172oDcLFu',
        'ls/Ticket',
        'contact',
        '356533SnOUYn',
        '__esModule',
        'ntAll',
        'ervices/Sh',
        'contactId',
        'owTicketSe',
        '2460381ZajBEj',
        'value',
        'fFdHw',
        'ticketId',
        'include',
        '18nelhBZ',
        'pipQI',
        'createdAt',
        '3622136XmEzKM',
        '8830920GHkIih',
        '../../mode',
        'defineProp',
        'length',
        'seGvU',
        '140514NxqFlt',
        '__importDe',
        '../../erro',
        'findAndCou',
        'order',
        'reverse',
        'where',
        '../TicketS',
        'ls/Message'
    ];
    a = function () {
        return I;
    };
    return a();
}
const AppError_1 = __importDefault(require(D(0x15d) + E(0x13f) + 'r')), Message_1 = __importDefault(require(E(0x157) + E(0x163))), MessageOffLine_1 = __importDefault(require(E(0x157) + E(0x163) + E(0x141))), Ticket_1 = __importDefault(require(E(0x157) + E(0x145))), ShowTicketService_1 = __importDefault(require(D(0x162) + D(0x14a) + E(0x14c) + D(0x16d))), ListMessagesService = async ({
        pageNumber: pageNumber = '1',
        ticketId: i,
        tenantId: j
    }) => {
        const G = D, H = E, l = {};
        l[G(0x13c)] = G(0x140) + G(0x13a), l[H(0x164)] = function (z, A) {
            return z * A;
        }, l[H(0x166)] = function (z, A) {
            return z - A;
        }, l[H(0x153)] = H(0x146), l[H(0x13d)] = H(0x170), l[H(0x16f)] = G(0x154), l[G(0x142)] = G(0x143), l[G(0x14f)] = function (z, A) {
            return z === A;
        }, l[H(0x15a)] = function (z, A) {
            return z > A;
        }, l[H(0x16e)] = function (z, A) {
            return z + A;
        };
        const m = l, n = {};
        n['id'] = i, n[H(0x165)] = j;
        const o = await (0x2567 * 0x1 + 0x105a + -0x8b * 0x63, ShowTicketService_1[H(0x172)])(n);
        if (!o)
            throw new AppError_1[(G(0x172))](m[G(0x13c)], -0x35e * 0x4 + -0x62 * -0x33 + -0x47a);
        const p = -0x1d17 * 0x1 + -0x502 + 0x1cd * 0x13, q = m[H(0x164)](p, m[H(0x166)](+pageNumber, 0x4ae + 0x26 * 0xaa + -0xf7 * 0x1f)), r = {};
        r[H(0x13e)] = o[H(0x13e)], r[H(0x14b)] = o[G(0x14b)], r[G(0x168)] = o[G(0x168)], r['id'] = o['id'];
        const s = {};
        s[H(0x16c)] = Ticket_1[G(0x172)], s[H(0x161)] = r, s[H(0x13b)] = !![];
        const {
            count: t,
            rows: u
        } = await Message_1[H(0x172)][G(0x15e) + H(0x149)]({
            'limit': p,
            'include': [
                m[G(0x153)],
                {
                    'model': Message_1[H(0x172)],
                    'as': m[G(0x13d)],
                    'include': [m[H(0x153)]]
                },
                s
            ],
            'offset': q,
            'order': [[
                    m[G(0x16f)],
                    m[G(0x142)]
                ]]
        });
        let v = [];
        if (m[G(0x14f)](+pageNumber, -0x229c + -0x8b * 0x2c + 0x3a81)) {
            const x = {};
            x[H(0x150)] = i;
            const y = {};
            y[H(0x161)] = x, y[H(0x151)] = [
                m[H(0x153)],
                {
                    'model': Message_1[H(0x172)],
                    'as': m[H(0x13d)],
                    'include': [m[G(0x153)]]
                }
            ], y[H(0x15f)] = [[
                    m[G(0x16f)],
                    m[H(0x142)]
                ]];
            const {rows: z} = await MessageOffLine_1[H(0x172)][H(0x15e) + G(0x149)](y);
            v = z;
        }
        const w = m[G(0x15a)](t, m[H(0x16e)](q, u[G(0x159)]));
        return {
            'messages': u[H(0x160)](),
            'messagesOffLine': v,
            'ticket': o,
            'count': t,
            'hasMore': w
        };
    };
exports[E(0x172)] = ListMessagesService;