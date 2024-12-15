'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(l(0xdf)) / (0x4a * 0x33 + -0x2 * 0xda3 + -0x1 * -0xc89) + -parseInt(m(0xd2)) / (0xa46 + 0x16d4 + -0x108c * 0x2) + parseInt(m(0xda)) / (0x70d + 0x77a + -0xe84 * 0x1) * (parseInt(l(0xc8)) / (0x10 * 0x48 + 0x18ac + -0x1d28)) + parseInt(l(0xec)) / (0x249a * -0x1 + 0x471 * 0x4 + 0x1 * 0x12db) * (parseInt(l(0xd4)) / (0xfe9 + 0xe * -0x43 + -0xc39)) + -parseInt(m(0xc5)) / (0xa2d + -0xfb7 + -0x3 * -0x1db) + parseInt(l(0xd0)) / (0x1 * -0xec3 + 0x5e * 0x13 + 0x7d1) + parseInt(m(0xf0)) / (0x1b1a + 0x141b + 0x4 * -0xbcb);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x180 * -0x3dd + 0xdf69c + -0x78a5d));
var __importDefault = this && this[n(0xe5) + o(0xe7)] || function (c) {
    const p = o;
    return c && c[p(0xe8)] ? c : { 'default': c };
};
const k = {};
function a() {
    const s = [
        'nest',
        'ls/Queue',
        '258575PFmTbC',
        '\x0a\x20\x20\x20\x20and\x20q',
        '../../mode',
        'type',
        '=\x20:userId\x20',
        '\x20and\x20u.id\x20',
        '__importDe',
        '\x22\x20=\x20:tenan',
        'fault',
        '__esModule',
        '\x22UsersQueu',
        'sequelize',
        'QueryTypes',
        '65JrxHHQ',
        '.\x22tenantId',
        '\x20u.id\x20\x0a\x20\x20\x20',
        'default',
        '11914857qKLKAX',
        '\x20\x20where\x20uq',
        'es\x22\x20uq\x20\x0a\x20\x20',
        't\x20q.*\x20\x0a\x20\x20\x20',
        '11034079OFVFyR',
        'tId\x0a\x20\x20\x20\x20',
        '\x20=\x20q.id\x20\x0a\x20',
        '1516LDaCdb',
        '\x22userId\x22\x20=',
        'defineProp',
        'userId',
        'erty',
        'SELECT',
        'query',
        '\x20from\x20\x22Que',
        '4027376XCDQdo',
        'ues\x22\x20q\x0a\x20\x20\x20',
        '1124318gXASso',
        '\x20,\x20\x22Users\x22',
        '92958BhGvFs',
        'replacemen',
        'value',
        '\x0a\x20\x20\x20\x20selec',
        'tenantId',
        '\x20u\x20\x0a\x20\x20\x20\x20,\x20',
        '5160JgZIhL',
        '\x20\x20\x20and\x20uq.',
        '.\x22queueId\x22'
    ];
    a = function () {
        return s;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1812 + -0x2648 + 0xef8);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[n(0xd6)] = !![], Object[n(0xca) + n(0xcc)](exports, o(0xe8), k);
const sequelize_1 = require(o(0xea)), Queue_1 = __importDefault(require(n(0xe1) + n(0xde))), ListUserQueueService = async ({
        tenantId: e,
        userId: f
    }) => {
        const q = n, r = o, g = q(0xd7) + q(0xc4) + r(0xcf) + q(0xd1) + q(0xd3) + q(0xd9) + r(0xe9) + q(0xc3) + r(0xc2) + r(0xdc) + r(0xc7) + r(0xdb) + r(0xc9) + r(0xee) + q(0xe4) + q(0xe3) + q(0xe0) + r(0xed) + r(0xe6) + q(0xc6), h = {};
        h[r(0xd8)] = e, h[r(0xcb)] = f;
        const i = {};
        i[r(0xd5) + 'ts'] = h, i[q(0xe2)] = sequelize_1[r(0xeb)][q(0xcd)], i[r(0xdd)] = !![];
        const j = await Queue_1[r(0xef)][q(0xea)]?.[q(0xce)](g, i);
        return j;
    };
exports[o(0xef)] = ListUserQueueService;