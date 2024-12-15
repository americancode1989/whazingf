'use strict';
const E = b, F = b;
function a() {
    const J = [
        'update',
        'isDeleted',
        '../models/',
        '492330pxPZqo',
        'ateLogTick',
        'ctive',
        'Setting',
        'chatBot',
        'tenantId',
        'CTYqz',
        '1iRPWJN',
        'fault',
        '2012740kpnCbZ',
        'rvices/Cre',
        'findByPk',
        'etService',
        'botTicketA',
        'start',
        'contactId',
        'channel',
        '1135560QFZqGJ',
        'type',
        'chatFlowId',
        'whatsappId',
        'Services/I',
        '373868iqyLtD',
        'find',
        'default',
        '__esModule',
        'defineProp',
        'isGroup',
        'where',
        'number',
        'disableBot',
        '3395106IQGryD',
        '__importDe',
        'from',
        '4BKNOqJ',
        '55cOCVgA',
        'findOne',
        'jKOTA',
        's/ChatFlow',
        'Service',
        'Service/Sh',
        'erty',
        'userId',
        '8AqCKCx',
        's/Whatsapp',
        '../service',
        'value',
        'sContactTe',
        'ChatFlow',
        'owWhatsApp',
        'key',
        's/TicketSe',
        'ticketId',
        'flow',
        'isActive',
        'Contact',
        '1134357fdBlBE',
        'lineList',
        '403151eDChap'
    ];
    a = function () {
        return J;
    };
    return a();
}
(function (c, d) {
    const C = b, D = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(C(0x137)) / (0x24e4 + -0x17db * -0x1 + -0x3cbe) * (parseInt(C(0x108)) / (0xbf * 0x2f + -0x6dd + -0x1c32)) + -parseInt(D(0x12a)) / (-0x1 * 0x8d5 + 0x1304 + -0xa2c) + parseInt(D(0x114)) / (-0x2562 + -0x12f9 + 0x385f) * (parseInt(D(0x139)) / (0x732 + 0x1df * -0x5 + -0x6 * -0x5d)) + -parseInt(C(0x103)) / (0x1 * 0xb14 + -0x2457 + 0x1949) + -parseInt(C(0x12c)) / (0x84 * 0x2 + -0x249 + 0x29 * 0x8) * (-parseInt(C(0x11d)) / (0x87a + -0xe21 + 0x5af)) + parseInt(C(0x111)) / (0x6 * -0x21b + -0x12fe + 0x1fa9) + parseInt(C(0x130)) / (0x128f + -0xbb8 + -0x6cd) * (-parseInt(C(0x115)) / (-0x4d9 + -0x2d7 * -0x7 + -0xefd));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x39a1 * 0xe + -0x4b774 + 0x4c7f3));
var __importDefault = this && this[E(0x112) + E(0x138)] || function (c) {
    const G = E;
    return c && c[G(0x10b)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x3 * 0x301 + 0x1df * 0x7 + -0x315);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[F(0x120)] = !![], Object[F(0x10c) + E(0x11b)](exports, E(0x10b), k);
const Contact_1 = __importDefault(require(F(0x12f) + F(0x129))), Setting_1 = __importDefault(require(E(0x12f) + F(0x133))), ChatFlow_1 = __importDefault(require(F(0x12f) + F(0x122))), CreateLogTicketService_1 = __importDefault(require(F(0x11f) + F(0x125) + F(0x13a) + E(0x131) + F(0x13c))), IsContactTest_1 = __importDefault(require(E(0x11f) + F(0x118) + F(0x107) + F(0x121) + 'st')), ShowWhatsAppService_1 = __importDefault(require(F(0x11f) + E(0x11e) + E(0x11a) + E(0x123) + E(0x119))), CheckChatBotFlowWelcome = async j => {
        const H = E, I = F, l = {};
        l[H(0x136)] = H(0x13d) + H(0x132), l[I(0x117)] = H(0x134);
        const m = l;
        if (j[H(0x11c)] || j[H(0x10d)])
            return;
        const n = {};
        n[H(0x124)] = m[I(0x136)], n[H(0x135)] = j[I(0x135)];
        const o = {};
        o[H(0x10e)] = n;
        const p = await Setting_1[I(0x10a)][I(0x116)](o), q = {};
        q['id'] = j[H(0x106)], q[H(0x135)] = j[I(0x135)];
        const r = await (0x1239 + 0xe4 + -0x131d, ShowWhatsAppService_1[H(0x10a)])(q), s = r?.[H(0x105)] || p?.[H(0x120)];
        if (!s)
            return;
        const t = {};
        t['id'] = +s, t[I(0x135)] = j[I(0x135)], t[I(0x128)] = !![], t[H(0x12e)] = ![];
        const u = {};
        u[I(0x10e)] = t;
        const v = await ChatFlow_1[H(0x10a)][I(0x116)](u);
        if (!v)
            return;
        const w = await Contact_1[I(0x10a)][I(0x13b)](j[I(0x101)]), {celularTeste: x} = v, y = w?.[I(0x10f)];
        if (w[H(0x110)])
            return;
        if (await (0x1a7f + -0x1423 + -0x65c, IsContactTest_1[H(0x10a)])(y, x, j[H(0x102)]))
            return;
        const z = v[H(0x127)][I(0x12b)][I(0x109)](B => B[I(0x113)] === H(0x13e));
        await j[H(0x12d)]({
            'chatFlowId': v['id'],
            'stepChatFlow': z['to'],
            'lastInteractionBot': new Date()
        });
        const A = {};
        A[I(0x126)] = j['id'], A[I(0x104)] = m[H(0x117)], await (0x1 * -0x1135 + 0x225e + 0xbf * -0x17, CreateLogTicketService_1[H(0x10a)])(A);
    };
exports[F(0x10a)] = CheckChatBotFlowWelcome;