'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(r(0x18d)) / (0x1 * -0x19d8 + 0xc43 * 0x2 + 0x153 * 0x1) + -parseInt(s(0x17d)) / (-0x3 * 0x49 + -0x3d * -0x13 + 0x1d5 * -0x2) + -parseInt(s(0x19a)) / (-0x6b * -0x2b + -0x25a4 + 0xe5 * 0x16) + -parseInt(s(0x1a4)) / (-0x234a + 0x1132 + 0x121c) * (parseInt(r(0x19b)) / (0x20be * 0x1 + -0x2 * -0xa97 + 0x35e7 * -0x1)) + -parseInt(s(0x198)) / (0x1e9a + 0xa81 * -0x2 + -0x992) * (-parseInt(s(0x17b)) / (-0x14e7 + -0x3cb * 0x5 + -0x1 * -0x27e5)) + -parseInt(r(0x176)) / (-0xd * -0xa1 + 0x1 * 0x535 + -0xd5a) * (parseInt(r(0x181)) / (0x2 * -0x451 + 0xdaf * -0x1 + 0x165a * 0x1)) + parseInt(s(0x199)) / (0x5e * -0x4e + -0x1 * 0x1013 + 0x2cc1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x39bf0 + 0x37210 * -0x1 + -0xab * -0x2f5));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2e4 + -0x25c7 * 0x1 + 0x2a1d);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[t(0x17e) + u(0x194)] || function (c) {
    const v = u;
    return c && c[v(0x17f)] ? c : { 'default': c };
};
const k = {};
k[u(0x183)] = !![], Object[t(0x19e) + u(0x17c)](exports, t(0x17f), k);
function a() {
    const y = [
        'substr',
        'channel',
        '../service',
        'GgTTD',
        'tenantId',
        '358024lMFiYe',
        'number',
        'plyId',
        'telegram',
        'contactId',
        '112aUFMYF',
        'stepAutoRe',
        'NCLJI',
        'indexOf',
        '../models/',
        '680736rKkGtc',
        'erty',
        '54704RbRGxy',
        '__importDe',
        '__esModule',
        'ticketId',
        '71316zOCPiT',
        'ateLogTick',
        'value',
        'rvices/Cre',
        'userId',
        'toReplyMes',
        'Contact',
        'autoReplyI',
        'autoReply',
        'default',
        'yServices/',
        'ShowStepAu',
        '66165nJxcMf',
        'isGroup',
        's/TicketSe',
        'chatBot',
        'type',
        'FACct',
        's/AutoRepl',
        'fault',
        'etService',
        'KdlAo',
        'sageServic',
        '12geSXLT',
        '3200670qJniGL',
        '101265KOYWfW',
        '15CsHuPu',
        'findByPk',
        'update',
        'defineProp'
    ];
    a = function () {
        return y;
    };
    return a();
}
const Contact_1 = __importDefault(require(u(0x17a) + u(0x187))), ShowStepAutoReplyMessageService_1 = __importDefault(require(t(0x1a1) + u(0x193) + u(0x18b) + u(0x18c) + u(0x186) + t(0x197) + 'e')), CreateLogTicketService_1 = __importDefault(require(t(0x1a1) + t(0x18f) + t(0x184) + t(0x182) + u(0x195))), AutoReplyWelcome = async f => {
        const w = t, x = u, g = {};
        g[w(0x1a2)] = function (p, q) {
            return p === q;
        }, g[w(0x178)] = function (p, q) {
            return p !== q;
        }, g[x(0x196)] = w(0x174), g[x(0x192)] = x(0x190);
        const h = g;
        if (f[x(0x185)] || f[w(0x18e)])
            return;
        const i = await (0x1 * 0x10b1 + 0xa84 + 0x5 * -0x571, ShowStepAutoReplyMessageService_1[w(0x18a)])(-0x16d1 + -0x11e7 + 0x28b8, 0x373 * 0x3 + 0x1 * -0x25d9 + 0x1b80, -0xeec + 0xa4d * -0x2 + 0x2386, !![], f[w(0x1a3)]);
        if (!i)
            return;
        const j = await Contact_1[x(0x18a)][x(0x19c)](f[w(0x175)]), {celularTeste: l} = i[x(0x189)], m = j?.[w(0x172)];
        if (l && h[w(0x1a2)](m?.[x(0x179)](l[w(0x19f)](0xc3e + 0x15aa + 0xb * -0x315)), -(-0xdda + 0x1 * -0x18a5 + -0x2 * -0x1340)) || !m) {
            if (h[w(0x178)](f[w(0x1a0)], h[w(0x196)]))
                return;
        }
        const n = {};
        n[x(0x188) + 'd'] = i[x(0x189)]['id'], n[w(0x177) + x(0x173)] = i['id'], await f[w(0x19d)](n);
        const o = {};
        o[w(0x180)] = f['id'], o[x(0x191)] = h[w(0x192)], await (0x1 * -0x1f0b + 0x24 * -0xd8 + 0x3d6b, CreateLogTicketService_1[x(0x18a)])(o);
    };
exports[t(0x18a)] = AutoReplyWelcome;