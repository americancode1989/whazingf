'use strict';
const B = b, C = b;
(function (c, d) {
    const z = b, A = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(z(0x155)) / (0x1622 * 0x1 + 0x1976 + -0x3 * 0xfdd) + parseInt(A(0x16c)) / (-0x9ee + 0x1 * -0x3df + -0xdcf * -0x1) + -parseInt(z(0x13d)) / (-0x28 * -0xb6 + 0x3 * -0x869 + -0x332) + -parseInt(z(0x154)) / (0x1 * -0x168c + -0x7 * -0x81 + 0x1309) * (parseInt(z(0x172)) / (0x12f1 + 0x259e + -0x388a)) + -parseInt(z(0x139)) / (0x8a * -0x31 + 0x1999 * -0x1 + -0x4d * -0xad) + parseInt(z(0x157)) / (-0x4 * -0x5ad + 0xf0d * -0x1 + -0x7a0) * (-parseInt(z(0x16b)) / (0x2 * -0x541 + -0x1c20 + 0x26aa)) + parseInt(z(0x141)) / (-0x6aa + 0x431 + -0x2 * -0x141);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xc37bb + -0x408d2 * 0x1 + 0x1 * 0x1f112d));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x605 * -0x1 + 0x65f * 0x1 + -0x3b9 * 0x3);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[B(0x15a) + B(0x15f)] || function (c) {
    const D = B;
    return c && c[D(0x143)] ? c : { 'default': c };
};
const k = {};
k[C(0x167)] = !![], Object[C(0x15e) + C(0x144)](exports, C(0x143), k);
const AppError_1 = __importDefault(require(C(0x159) + C(0x13c) + 'r')), CheckContactOpenTickets_1 = __importDefault(require(C(0x16d) + B(0x147) + B(0x161) + B(0x13f))), GetDefaultWhatsApp_1 = __importDefault(require(B(0x16d) + B(0x174) + C(0x176) + 'pp')), socketEmit_1 = __importDefault(require(C(0x16d) + B(0x15b) + B(0x164))), ShowContactService_1 = __importDefault(require(B(0x156) + C(0x14e) + C(0x15d) + B(0x166))), CreateLogTicketService_1 = __importDefault(require(C(0x175) + B(0x146) + B(0x152))), ShowTicketService_1 = __importDefault(require(B(0x177) + B(0x15c))), CreateTicketService = async ({
        contactId: i,
        status: j,
        userId: l,
        tenantId: m,
        channel: n,
        channelId: channelId = undefined
    }) => {
        const E = C, F = C, o = {};
        o[E(0x16a)] = E(0x160), o[F(0x140)] = F(0x13e), o[F(0x162)] = F(0x150), o[F(0x151)] = E(0x163) + E(0x13a), o[F(0x168)] = F(0x153), o[F(0x14f)] = F(0x142), o[E(0x169)] = F(0x145) + E(0x171);
        const p = o, q = await (0x16f * 0x3 + 0x135d + -0x1d2 * 0xd, GetDefaultWhatsApp_1[F(0x14c)])(m, channelId);
        if (!n || ![
                p[F(0x16a)],
                p[F(0x140)],
                p[E(0x162)]
            ][E(0x165)](n))
            throw new AppError_1[(F(0x14c))](p[E(0x151)]);
        await (-0x21b7 + 0x1 * 0xa5b + 0x175c, CheckContactOpenTickets_1[E(0x14c)])(i);
        const r = {};
        r['id'] = i, r[E(0x16f)] = m;
        const {isGroup: s} = await (0x5ef + 0x1a12 * 0x1 + -0x2001, ShowContactService_1[E(0x14c)])(r), t = {};
        t[E(0x14d)] = i, t[E(0x170)] = j, t[F(0x16e)] = s, t[E(0x148)] = l, t[F(0x14b) + E(0x13b)] = !![], t[F(0x178)] = n, t[F(0x16f)] = m;
        const {id: u} = await q[E(0x14a)](p[E(0x168)], t), v = {};
        v['id'] = u, v[E(0x16f)] = m;
        const w = await (0x654 + -0x15a6 + 0xf52, ShowTicketService_1[F(0x14c)])(v);
        if (!w)
            throw new AppError_1[(E(0x14c))](p[E(0x151)]);
        const x = {};
        x[F(0x148)] = l, x[F(0x149)] = w['id'], x[F(0x158)] = p[E(0x14f)], await (0x16e0 + -0x8 * 0x3d6 + -0x1f4 * -0x4, CreateLogTicketService_1[E(0x14c)])(x);
        const y = {};
        return y[E(0x16f)] = m, y[E(0x158)] = p[F(0x169)], y[F(0x173)] = w, (0x39 * 0x4a + -0x1217 * 0x2 + 0x13b4, socketEmit_1[E(0x14c)])(y), w;
    };
function a() {
    const G = [
        'value',
        'XbPNo',
        'OFaLA',
        'KEUTj',
        '72doMQYD',
        '1231484FzbwmR',
        '../../help',
        'isGroup',
        'tenantId',
        'status',
        'ate',
        '7228015ojsumg',
        'payload',
        'ers/GetDef',
        './CreateLo',
        'aultWhatsA',
        './ShowTick',
        'channel',
        '558132wErNSd',
        'NG_TICKET',
        'mand',
        'rs/AppErro',
        '4812036hLPQEy',
        'telegram',
        'Tickets',
        'KSsmy',
        '26813934NVLAbg',
        'create',
        '__esModule',
        'erty',
        'ticket:upd',
        'gTicketSer',
        'ers/CheckC',
        'userId',
        'ticketId',
        '$create',
        'isActiveDe',
        'default',
        'contactId',
        'Services/S',
        'wBazL',
        'whatsapp',
        'FfeMa',
        'vice',
        'ticket',
        '4PcaWYW',
        '1104075OuxtJH',
        '../Contact',
        '455462dkmAqH',
        'type',
        '../../erro',
        '__importDe',
        'ers/socket',
        'etService',
        'howContact',
        'defineProp',
        'fault',
        'instagram',
        'ontactOpen',
        'FRYuz',
        'ERR_CREATI',
        'Emit',
        'includes',
        'Service'
    ];
    a = function () {
        return G;
    };
    return a();
}
exports[B(0x14c)] = CreateTicketService;