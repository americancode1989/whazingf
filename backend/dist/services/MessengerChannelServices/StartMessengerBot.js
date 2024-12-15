'use strict';
function a() {
    const y = [
        '__esModule',
        'emit',
        '12jHEmhW',
        'RVAL',
        'Url\x20360\x20|\x20',
        'initMessen',
        'defineProp',
        '../../erro',
        'info',
        '2113120yRgbTG',
        ':whatsappS',
        '\x20Tenant:\x20',
        'ERROR\x20Mess',
        'gerBot',
        'ckMessages',
        'fault',
        'number',
        '3917249OwGNDr',
        'rs/AppErro',
        'ngerBot',
        'env',
        'status',
        'iciada\x20|\x20E',
        'DISCONNECT',
        'ession',
        'CQxpA',
        '136626FbaQeS',
        'rSendMessa',
        'Error:\x20',
        'Conexão\x20Me',
        '__importDe',
        'CONNECTED',
        'enger:\x20che',
        'OPENING',
        '543644smihum',
        '60:\x20',
        '../../util',
        'SRYOg',
        'hGFWh',
        'ECT_WABA_3',
        'Bot',
        '../../libs',
        '1400604BInFLq',
        '65tGOjbS',
        'gesSystem',
        '6118047PoQZYp',
        'tenantId',
        'RDZcO',
        '/messenger',
        '437013lCevbX',
        'mpresa:\x20',
        'ERROR_CONN',
        'update',
        'StartMesse',
        '/socket',
        './Messenge',
        'logger',
        'ssenger\x20in',
        'default',
        'getIO',
        'CHECK_INTE',
        'error',
        'SetWebHook',
        'dfXbw',
        'erty',
        'value',
        's/logger'
    ];
    a = function () {
        return y;
    };
    return a();
}
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x1b6)) / (-0x2 * -0xafd + 0x13 * -0x12d + -0x1 * -0x5e) + parseInt(p(0x1af)) / (-0x2d7 * 0x1 + -0xb + 0x2e4) + parseInt(p(0x1ca)) / (-0x2129 + -0x13a * -0x3 + 0x1d7e) * (parseInt(q(0x1a7)) / (-0x65b * -0x3 + 0x2453 + 0x1bb * -0x20)) + -parseInt(q(0x1b0)) / (-0x2a1 + -0x7 * -0x2a5 + -0xfdd) * (parseInt(q(0x19f)) / (0x685 * -0x5 + -0x1a8d + -0xe * -0x43a)) + -parseInt(p(0x196)) / (-0x13 * -0xe9 + -0x2502 + 0x85 * 0x26) + -parseInt(p(0x18e)) / (-0xa40 + 0x1 * -0x1f7c + 0x29c4) + parseInt(q(0x1b2)) / (-0x176f + 0x67 * -0x23 + 0x258d);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * -0x146b + 0x75a7 + -0x50f50 * -0x1));
var __importDefault = this && this[r(0x1a3) + r(0x194)] || function (c) {
    const t = r;
    return c && c[t(0x1c8)] ? c : { 'default': c };
};
const k = {};
k[r(0x1c6)] = !![], Object[r(0x18b) + r(0x1c5)](exports, r(0x1c8), k), exports[s(0x1ba) + s(0x198)] = void (-0x24a7 + 0xbdb * -0x3 + -0x8 * -0x907);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x159 + 0xfe5 * -0x1 + 0x4 * 0x4b2);
        let h = e[f];
        return h;
    }, b(c, d);
}
const AppError_1 = __importDefault(require(r(0x18c) + s(0x197) + 'r')), messengerBot_1 = require(s(0x1ae) + r(0x1b5) + s(0x1ad)), socket_1 = require(s(0x1ae) + s(0x1bb)), logger_1 = require(s(0x1a9) + r(0x1c7)), MessengerSendMessagesSystem_1 = __importDefault(require(r(0x1bc) + r(0x1a0) + r(0x1b1))), checkingMessenger = {}, messengerCheckMessages = async (c, d) => {
        const u = r, v = r;
        if (checkingMessenger[d])
            return;
        checkingMessenger[d] = !![];
        try {
            await (0x5b4 * 0x2 + -0x5bf + -0x5a9, MessengerSendMessagesSystem_1[u(0x1bf)])(c, d);
        } catch (e) {
            logger_1[v(0x1bd)][u(0x1c2)](u(0x191) + u(0x1a5) + u(0x193) + v(0x190) + d + '::', e);
        }
        checkingMessenger[d] = ![];
    }, StartMessengerBot = async f => {
        const w = s, x = s, g = {
                'RDZcO': w(0x1a6),
                'CQxpA': w(0x1b9),
                'dfXbw': x(0x1a4),
                'SRYOg': function (j, l, m, n, o) {
                    return j(l, m, n, o);
                },
                'hGFWh': w(0x19c) + 'ED'
            }, h = (-0x11c * -0xe + -0x148 * -0x18 + -0x2e48, socket_1[x(0x1c0)])(), i = {};
        i[w(0x19a)] = g[x(0x1b4)], await f[x(0x1b9)](i), h[x(0x1c9)](f[w(0x1b3)] + (w(0x18f) + w(0x19d)), {
            'action': g[w(0x19e)],
            'session': f
        });
        try {
            const j = '';
            logger_1[x(0x1bd)][w(0x18d)](w(0x1a2) + x(0x1be) + x(0x19b) + w(0x1b7) + f[x(0x1b3)]);
            const l = await (-0xa3e + -0x110 + 0x5a7 * 0x2, messengerBot_1[x(0x18a) + x(0x192)])(f), m = {};
            m[x(0x19a)] = g[x(0x1c4)], m[w(0x195)] = j, await f[w(0x1b9)](m), g[w(0x1aa)](setInterval, messengerCheckMessages, +(process[w(0x199)][w(0x1c1) + x(0x1cb)] || -0xe * 0x120 + -0x444 + 0x278c), l, f[x(0x1b3)]), h[w(0x1c9)](f[x(0x1b3)] + (w(0x18f) + w(0x19d)), {
                'action': g[x(0x19e)],
                'session': f
            });
        } catch (n) {
            logger_1[x(0x1bd)][w(0x1c2)](x(0x1c3) + w(0x1cc) + w(0x1a1) + n);
            const o = {};
            o[x(0x19a)] = g[x(0x1ab)], await f[x(0x1b9)](o), h[w(0x1c9)](f[w(0x1b3)] + (x(0x18f) + x(0x19d)), {
                'action': g[w(0x19e)],
                'session': f
            });
            throw new AppError_1[(w(0x1bf))](x(0x1b8) + x(0x1ac) + x(0x1a8) + n, -0x12c3 * 0x2 + -0x3ed + 0x2b07);
        }
    };
exports[r(0x1ba) + s(0x198)] = StartMessengerBot;