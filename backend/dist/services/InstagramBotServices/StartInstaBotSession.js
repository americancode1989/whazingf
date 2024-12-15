'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x1a2)) / (-0x1 * -0x1c90 + 0x8 * -0x7d + -0x18a7) + parseInt(p(0x1b3)) / (0x31a * -0x4 + 0x1 * -0x12d7 + -0x379 * -0x9) + -parseInt(p(0x1a3)) / (-0x6b * 0x5d + -0x3 * 0x621 + 0x3945) * (-parseInt(q(0x1a5)) / (0x1ee7 + -0x90 * 0x18 + -0x1 * 0x1163)) + -parseInt(q(0x1c7)) / (-0x2 * 0x98b + -0x1943 + 0x2c5e) + parseInt(p(0x1ad)) / (0x63 * 0x1b + -0x1f06 + 0x149b) + -parseInt(q(0x1d6)) / (0x17b5 + -0xa3b + -0xd73) + parseInt(q(0x1ce)) / (-0x1f43 + 0x3e * 0x1f + 0x17c9);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * 0xb6495 + 0xa7208 + 0x8aa85 * -0x1));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x111f + -0x2 * -0x11db + 0x1102 * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[r(0x196) + r(0x1aa)] || function (c) {
    const t = s;
    return c && c[t(0x19d)] ? c : { 'default': c };
};
const k = {};
k[r(0x1cb)] = !![], Object[r(0x1a4) + r(0x1b7)](exports, r(0x19d), k), exports[r(0x1d0) + r(0x1b0)] = void (0x12a * 0x1 + 0x6b2 + -0x7dc);
const AppError_1 = __importDefault(require(s(0x1bd) + s(0x1d4) + 'r')), InstaBot_1 = require(s(0x19e) + r(0x1d1)), socket_1 = require(r(0x19e) + r(0x1ae)), logger_1 = require(s(0x1a1) + r(0x1b8)), InstaBotMessageListener_1 = require(s(0x19a) + s(0x1a8) + s(0x197)), InstagramSendMessagesSystem_1 = __importDefault(require(s(0x1cc) + r(0x1c8) + s(0x1be))), checkingInstagram = {}, checkMessages = async (c, d) => {
        const u = s, v = r;
        if (checkingInstagram[d])
            return;
        checkingInstagram[d] = !![];
        try {
            await (0x4fd + 0x4fd * -0x5 + -0x4 * -0x4fd, InstagramSendMessagesSystem_1[u(0x1a7)])(c, d);
        } catch (e) {
            logger_1[v(0x1b4)][v(0x1c0)](u(0x198) + u(0x1ac) + u(0x19c) + d + '::', e);
        }
        checkingInstagram[d] = ![];
    }, StartInstaBotSession = async f => {
        const w = s, x = r, g = {
                'WjxqF': w(0x1bf),
                'ACApN': w(0x199),
                'cysFe': function (j, l, m, n, o) {
                    return j(l, m, n, o);
                },
                'VVuDg': x(0x1c6),
                'ImOMO': x(0x1c2) + 'ED'
            }, h = (-0x52 * 0x2a + -0x35 * 0x52 + 0x1e6e, socket_1[w(0x1af)])(), i = {};
        i[w(0x1b9)] = g[w(0x1a9)], await f[x(0x199)](i), h[w(0x1c1)](f[w(0x1c3)] + (x(0x1a6) + x(0x1b1)), {
            'action': g[w(0x1bb)],
            'session': f
        });
        try {
            const j = await (0x1d98 + -0x3 * 0xa2d + -0xef * -0x1, InstaBot_1[x(0x1c9) + 'ot'])(f);
            (0x22ac + 0x175 * -0x19 + 0x1c1, InstaBotMessageListener_1[x(0x1d5) + x(0x1cd) + x(0x1ab)])(j), g[w(0x1b2)](setInterval, checkMessages, +(process[w(0x19f)][x(0x1ba) + w(0x1c5)] || -0x163 * -0x4 + 0x1 * 0xb32 + 0x2ca), j, f[x(0x1c3)]), logger_1[x(0x1b4)][x(0x1ca)](x(0x1bc) + w(0x1cf) + x(0x1b6) + w(0x195) + f[w(0x1c3)]);
            const l = {};
            l[w(0x1b9)] = g[x(0x1d3)], await f[x(0x199)](l), h[w(0x1c1)](f[w(0x1c3)] + (w(0x1a6) + w(0x1b1)), {
                'action': g[w(0x1bb)],
                'session': f
            });
        } catch (m) {
            logger_1[w(0x1b4)][x(0x1c0)](x(0x1d0) + w(0x1b0) + x(0x1b5) + m);
            const n = {};
            n[w(0x1b9)] = g[x(0x1a0)], await f[w(0x199)](n), h[x(0x1c1)](f[x(0x1c3)] + (x(0x1a6) + x(0x1b1)), {
                'action': g[w(0x1bb)],
                'session': f
            });
            throw new AppError_1[(x(0x1a7))](x(0x19b) + x(0x1c4) + x(0x1d2) + m, 0x1a09 + 0x2494 + -0x3d09 * 0x1);
        }
    };
function a() {
    const y = [
        '__importDe',
        'tener',
        'ERROR:\x20che',
        'update',
        './InstaBot',
        'ERROR_CONN',
        '\x20Tenant:\x20',
        '__esModule',
        '../../libs',
        'env',
        'ImOMO',
        '../../util',
        '330126VnpumT',
        '11289oYlcZQ',
        'defineProp',
        '496nGCkFo',
        ':whatsappS',
        'default',
        'MessageLis',
        'WjxqF',
        'fault',
        'ner',
        'ckMessages',
        '1102806VLwpxA',
        '/socket',
        'getIO',
        'BotSession',
        'ession',
        'cysFe',
        '3137440UzrFKs',
        'logger',
        '\x20|\x20Error:\x20',
        'iciada\x20|\x20E',
        'erty',
        's/logger',
        'status',
        'CHECK_INTE',
        'ACApN',
        'Conexão\x20In',
        '../../erro',
        'gesSystem',
        'OPENING',
        'error',
        'emit',
        'DISCONNECT',
        'tenantId',
        'ECT_INSTAG',
        'RVAL',
        'CONNECTED',
        '4905970zqgrsu',
        'mSendMessa',
        'initInstaB',
        'info',
        'value',
        './Instagra',
        'ssageListe',
        '12683880aKFnug',
        'stagram\x20in',
        'StartInsta',
        '/InstaBot',
        'RAM:\x20',
        'VVuDg',
        'rs/AppErro',
        'InstaBotMe',
        '11410294QtVbbq',
        'mpresa:\x20'
    ];
    a = function () {
        return y;
    };
    return a();
}
exports[r(0x1d0) + s(0x1b0)] = StartInstaBotSession;