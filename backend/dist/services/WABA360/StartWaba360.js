'use strict';
const s = b, t = b;
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(q(0x115)) / (0x513 + -0x2c4 + -0x24e) * (parseInt(r(0x108)) / (-0x1c * 0x2f + 0x4cf * -0x3 + 0x1393 * 0x1)) + -parseInt(q(0x137)) / (0x5 * -0x773 + 0x13e4 + 0x115e) * (-parseInt(r(0x136)) / (-0xff6 + 0x22f * -0x5 + -0x8f7 * -0x3)) + -parseInt(r(0x118)) / (-0xba5 + 0x948 + 0xa * 0x3d) + -parseInt(r(0xf8)) / (0x8ec + -0x7 * -0x496 + -0x2900) + parseInt(r(0x139)) / (-0xb9 * -0xa + 0x148a + -0x1b * 0x107) + -parseInt(r(0x12e)) / (0x279 * 0x3 + -0x10bd + -0x3 * -0x31e) + parseInt(q(0xfc)) / (-0x2a + -0x6d * 0x6 + 0x2c1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x21 * -0x87b + -0x1c68b + 0x750e5));
function a() {
    const z = [
        'RVAL',
        ':whatsappS',
        '3470409wZpMgK',
        'ckMessages',
        'SetWebHook',
        'logger',
        'ba\x20360\x20ini',
        'wVZNV',
        '60:\x20',
        'update',
        'ciada\x20|\x20Em',
        '../../erro',
        'vdHHL',
        'tenantId',
        '58034EQcHne',
        'value',
        'tokenAPI',
        's/logger',
        'wseod',
        'defineProp',
        'Url\x20360\x20|\x20',
        'okUrl',
        'Error:\x20',
        'CONNECTED',
        'DISCONNECT',
        'UrlWabaWeb',
        './Waba360S',
        '9qgOJrL',
        'error',
        'ERROR:\x20che',
        '875640qiNyoo',
        '/socket',
        './SetWebHo',
        'yacSA',
        'ERROR_CONN',
        'endMessage',
        'erty',
        'CHECK_INTE',
        'number',
        'emit',
        'status',
        'Conexão\x20Wa',
        'sSystem',
        'fault',
        'presa:\x20',
        'ession',
        '__importDe',
        'apiKey',
        '__esModule',
        'url',
        'Hook',
        'info',
        '2125840xytBTB',
        'default',
        'OQnrf',
        'ECT_WABA_3',
        'env',
        '../../libs',
        '../../util',
        'rs/AppErro',
        '4YAaOwD',
        '138444YLPWST',
        'OPENING',
        '1208760cwTUcd',
        '\x20Tenant:\x20',
        'getIO',
        '799614HkOLPp',
        'StartWaba3'
    ];
    a = function () {
        return z;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1b11 + -0x1247 + 0x2e4e);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[s(0x128) + s(0x125)] || function (c) {
    const u = t;
    return c && c[u(0x12a)] ? c : { 'default': c };
};
const k = {};
k[s(0x109)] = !![], Object[s(0x10d) + t(0x11e)](exports, t(0x12a), k), exports[t(0xf9) + '60'] = void (-0x1213 + 0x14bf + -0x2ac);
const AppError_1 = __importDefault(require(t(0x105) + s(0x135) + 'r')), socket_1 = require(s(0x133) + t(0x119)), logger_1 = require(t(0x134) + s(0x10b)), SetWebHookUrl_1 = __importDefault(require(t(0x11a) + t(0x10f))), Waba360SendMessagesSystem_1 = __importDefault(require(t(0x114) + s(0x11d) + t(0x124))), checkingWaba360 = {}, checkMessagesWaba360 = async c => {
        const v = t, w = s;
        if (checkingWaba360[c[v(0x107)]])
            return;
        checkingWaba360[c[v(0x107)]] = !![];
        try {
            await (-0x4 * -0x574 + 0xc7 * 0x2e + -0x1 * 0x3992, Waba360SendMessagesSystem_1[v(0x12f)])(c);
        } catch (d) {
            logger_1[w(0xff)][w(0x116)](v(0x117) + w(0xfd) + v(0xf6) + c[v(0x107)] + '::', d);
        }
        checkingWaba360[c[w(0x107)]] = ![];
    }, StartWaba360 = async g => {
        const x = t, y = s, h = {
                'OQnrf': x(0x138),
                'yacSA': x(0x103),
                'wseod': y(0x111),
                'vdHHL': function (l, m, n, o) {
                    return l(m, n, o);
                },
                'wVZNV': y(0x112) + 'ED'
            }, i = (0x13 * -0x16e + 0xa3 * -0x8 + -0x2 * -0x1021, socket_1[x(0xf7)])(), j = {};
        j[x(0x122)] = h[x(0x130)], await g[x(0x103)](j), i[y(0x121)](g[x(0x107)] + (y(0xfb) + y(0x127)), {
            'action': h[y(0x11b)],
            'session': g
        });
        try {
            const l = {};
            l[x(0x12b)] = g[y(0x113) + x(0x12c)] || '', l[x(0x129)] = g[y(0x10a)], await (-0x7 * -0x2d5 + -0x23d7 + 0x1004, SetWebHookUrl_1[x(0x12f)])(l);
            const m = '';
            logger_1[x(0xff)][x(0x12d)](x(0x123) + x(0x100) + x(0x104) + x(0x126) + g[x(0x107)]);
            const n = {};
            n[y(0x122)] = h[y(0x10c)], n[x(0x120)] = m, await g[y(0x103)](n), h[x(0x106)](setInterval, checkMessagesWaba360, +(process[y(0x132)][x(0x11f) + x(0xfa)] || 0x2 * -0x2e7 + 0x1 * 0xc11 + -0x2b * -0x4f), g), i[x(0x121)](g[y(0x107)] + (x(0xfb) + x(0x127)), {
                'action': h[x(0x11b)],
                'session': g
            });
        } catch (o) {
            logger_1[x(0xff)][x(0x116)](y(0xfe) + y(0x10e) + x(0x110) + o);
            const p = {};
            p[x(0x122)] = h[y(0x101)], await g[x(0x103)](p), i[x(0x121)](g[y(0x107)] + (y(0xfb) + x(0x127)), {
                'action': h[y(0x11b)],
                'session': g
            });
            throw new AppError_1[(y(0x12f))](x(0x11c) + y(0x131) + x(0x102) + o, 0x10c * 0x15 + 0x27 * -0x3e + -0x7a * 0x17);
        }
    };
exports[s(0xf9) + '60'] = StartWaba360;