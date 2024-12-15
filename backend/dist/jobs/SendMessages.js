'use strict';
function a() {
    const u = [
        '../libs/wb',
        'sendMessag',
        'ogger',
        's/WbotServ',
        '1470752qvrfpA',
        '34688709lFhtwD',
        '__esModule',
        '2agWuQk',
        '\x20messages',
        '36978VaNJKk',
        'eBaileys',
        'fault',
        'value',
        '899590NofLnP',
        'getWbot',
        'essagesSys',
        'Error\x20send',
        'leys',
        '2076429QUJNjq',
        'NwFOU',
        '220KQTibO',
        'message',
        'error',
        'erty',
        'ices/SendM',
        '9311148TijPDr',
        '__importDe',
        'defineProp',
        'temWbotBai',
        '../utils/l',
        '../service',
        'default',
        '7970936eCNGFa',
        'logger'
    ];
    a = function () {
        return u;
    };
    return a();
}
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(n(0x1d6)) / (0x4 * -0x2 + -0x866 * -0x4 + -0x218f) * (parseInt(o(0x1dc)) / (-0xae * 0x19 + 0x1297 + 0x1 * -0x197)) + parseInt(o(0x1e1)) / (0x1320 + -0x1 * -0xc3b + -0x1f58) + parseInt(n(0x1d3)) / (0x3 * -0xc81 + 0x12a7 + 0x12e0) + parseInt(n(0x1e3)) / (0x2c0 + -0x13c9 + 0x110e) * (parseInt(o(0x1d8)) / (0xf83 + -0x9 * 0x3bb + 0x1 * 0x1216)) + parseInt(o(0x1e8)) / (-0xc2f + 0x14f8 + -0x3b * 0x26) + parseInt(o(0x1ef)) / (0x2a2 + 0x265 * 0x5 + -0xe93 * 0x1) + -parseInt(n(0x1d4)) / (0x5 * -0x25f + -0x13 * 0x59 + 0x127f);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * -0x129cd9 + 0x895 * -0x269 + -0x1 * -0x32055d));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xbe7 + 0x5 * -0x691 + 0x16bc);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[p(0x1e9) + p(0x1da)] || function (c) {
    const r = p;
    return c && c[r(0x1d5)] ? c : { 'default': c };
};
const k = {};
k[q(0x1db)] = !![], Object[p(0x1ea) + q(0x1e6)](exports, p(0x1d5), k), exports[p(0x1d0) + p(0x1d9)] = void (-0x1 * -0x135b + -0x1 * -0x17ef + -0x2b4a);
const wbot_1 = require(q(0x1cf) + 'ot'), SendMessagesSystemWbotBaileys_1 = __importDefault(require(p(0x1ed) + p(0x1d2) + p(0x1e7) + p(0x1de) + p(0x1eb) + p(0x1e0))), logger_1 = require(q(0x1ec) + q(0x1d1)), sendMessageBaileys = async (e, f, g = undefined) => {
        const s = p, t = p, h = {};
        h[s(0x1e2)] = s(0x1df) + t(0x1d7);
        const i = h;
        try {
            const j = (0x22a5 + -0x989 + -0x191c, wbot_1[s(0x1dd)])(e);
            await (-0x2690 + 0x1127 * -0x1 + 0x11 * 0x347, SendMessagesSystemWbotBaileys_1[t(0x1ee)])(j, f, g);
        } catch (l) {
            const m = {};
            m[s(0x1e4)] = i[s(0x1e2)], m[t(0x1e5)] = l, logger_1[s(0x1ce)][s(0x1e5)](m);
            throw new Error(l);
        }
    };
exports[q(0x1d0) + p(0x1d9)] = sendMessageBaileys;