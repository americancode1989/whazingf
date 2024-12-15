'use strict';
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(n(0x122)) / (0xae * -0xa + 0xa3 * -0x1b + 0x2 * 0xbff) + -parseInt(o(0x148)) / (-0x2654 + -0x1 * -0x2313 + -0xa7 * -0x5) + -parseInt(o(0x126)) / (-0x1b * 0xf9 + 0x3 * -0xa6f + 0x3993) + parseInt(n(0x129)) / (-0x17 * 0xff + 0x2eb * 0x6 + -0x1 * -0x56b) * (-parseInt(o(0x150)) / (-0xaa1 + -0x17d1 + -0xad * -0x33)) + -parseInt(n(0x13c)) / (-0x1d09 + 0xff * 0x1d + 0x2c) * (-parseInt(n(0x132)) / (-0x21dd + 0x1e4c + -0xb8 * -0x5)) + -parseInt(n(0x146)) / (0x1972 + 0x831 + -0x7 * 0x4cd) + -parseInt(n(0x136)) / (-0x1854 + 0xd * 0x283 + -0x2 * 0x425) * (-parseInt(o(0x152)) / (0x365 * -0x1 + 0x7 * 0x3be + -0x1 * 0x16c3));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x12aa7e + 0x62e83 + 0x17156d));
var __importDefault = this && this[p(0x143) + q(0x145)] || function (c) {
    const r = p;
    return c && c[r(0x14a)] ? c : { 'default': c };
};
const k = {};
function a() {
    const w = [
        'initTbot',
        'erty',
        '../../util',
        'ageListene',
        '/tbot',
        '__importDe',
        'ession\x20|\x20E',
        'fault',
        '7554920wxrcSL',
        'update',
        '2080000bVOrxE',
        'env',
        '__esModule',
        'ERROR:\x20che',
        'error',
        'tenantId',
        './tbotMess',
        'ession',
        '3995soblzg',
        'emit',
        '42392590Dtjhqo',
        'CHECK_INTE',
        '\x20Tenant:\x20',
        'logger',
        '620940JFkcXt',
        '../../libs',
        'rror:\x20',
        'defineProp',
        '3732846fQhINq',
        '/socket',
        'default',
        '2004mhMCNR',
        'StartTbotS',
        'esSystem',
        'jYmcN',
        './Telegram',
        'ckMessages',
        'status',
        'RVAL',
        'SendMessag',
        '4936883tTSPDx',
        'tbotMessag',
        'hDWmp',
        ':whatsappS',
        '9FdvePp',
        's/logger',
        'getIO',
        'value',
        'OPENING',
        'SxOOW',
        '6zTdpbY',
        'eListener'
    ];
    a = function () {
        return w;
    };
    return a();
}
k[q(0x139)] = !![], Object[p(0x125) + p(0x13f)](exports, p(0x14a), k), exports[p(0x12a) + p(0x14f)] = void (-0x15dd + -0x7cc * 0x4 + 0x350d);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1057 * -0x2 + 0x14 * 0x101 + -0x1 * 0x33a2);
        let h = e[f];
        return h;
    }, b(c, d);
}
const socket_1 = require(q(0x123) + p(0x127)), tbot_1 = require(q(0x123) + p(0x142)), logger_1 = require(p(0x140) + p(0x137)), tbotMessageListener_1 = require(p(0x14e) + p(0x141) + 'r'), TelegramSendMessagesSystem_1 = __importDefault(require(q(0x12d) + q(0x131) + p(0x12b))), checkingTelegram = {}, checkMessages = async (c, d) => {
        const s = q, t = q;
        if (checkingTelegram[d])
            return;
        checkingTelegram[d] = !![];
        try {
            await (-0x182b * -0x1 + 0x2f * 0x8b + -0x4f8 * 0xa, TelegramSendMessagesSystem_1[s(0x128)])(c, d);
        } catch (e) {
            logger_1[s(0x121)][s(0x14c)](s(0x14b) + s(0x12e) + s(0x120) + d + '::', e);
        }
        checkingTelegram[d] = ![];
    }, StartTbotSession = async d => {
        const u = p, v = p, e = {
                'hDWmp': u(0x13a),
                'SxOOW': u(0x147),
                'jYmcN': function (h, i, j, l, m) {
                    return h(i, j, l, m);
                }
            }, f = (-0x5eb + -0x121 * 0x10 + -0x1 * -0x17fb, socket_1[u(0x138)])(), g = {};
        g[u(0x12f)] = e[u(0x134)], await d[u(0x147)](g), f[u(0x151)](d[v(0x14d)] + (v(0x135) + u(0x14f)), {
            'action': e[v(0x13b)],
            'session': d
        });
        try {
            const h = await (0x2c2 + 0x83 * -0x3b + -0x925 * -0x3, tbot_1[u(0x13e)])(d);
            (-0xdd9 * -0x2 + 0x3 * -0x9f5 + 0x22d, tbotMessageListener_1[u(0x133) + v(0x13d)])(h), e[v(0x12c)](setInterval, checkMessages, +(process[u(0x149)][v(0x153) + v(0x130)] || 0x188c + 0xe56 + -0x135a), h, d[v(0x14d)]);
        } catch (i) {
            logger_1[u(0x121)][u(0x14c)](v(0x12a) + v(0x144) + v(0x124) + i);
        }
    };
exports[q(0x12a) + p(0x14f)] = StartTbotSession;