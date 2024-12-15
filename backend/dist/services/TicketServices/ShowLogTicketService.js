'use strict';
const s = b, t = b;
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(q(0xc8)) / (0x1b36 * 0x1 + -0x9f * -0x36 + -0x3cbf) * (-parseInt(r(0xc2)) / (0x1 * 0x2a6 + 0xf7 * 0x6 + -0x86e)) + -parseInt(r(0xbf)) / (-0xcfd + -0x94d * -0x2 + -0x1 * 0x59a) * (parseInt(r(0xb5)) / (0xb70 + 0x1450 + -0x1fbc)) + parseInt(r(0xb8)) / (-0x44 + -0x2 * 0x509 + 0xf1 * 0xb) * (-parseInt(r(0xbb)) / (-0x1f91 * 0x1 + -0x4bb * -0x5 + 0x7f0)) + -parseInt(q(0xb1)) / (-0x1 * -0xb5c + 0x1c1a + 0xf * -0x2a1) + parseInt(r(0xba)) / (-0xd5 * -0x17 + 0x26df + -0x39fa) * (-parseInt(r(0xc5)) / (0xf97 + 0xc9b * -0x3 + 0x1643)) + -parseInt(q(0xd4)) / (-0x1 * 0x24b5 + 0x1d62 + 0x75d) * (parseInt(r(0xca)) / (-0xca9 * -0x3 + -0xb6 * 0xb + -0x1e1e)) + parseInt(q(0xc4)) / (-0x2 * -0xf1 + 0x1 * 0x1d35 + -0x1f0b);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x14 * -0x34f + -0x38e36 * -0x1 + 0x206b1 * -0x1));
var __importDefault = this && this[s(0xd3) + s(0xd0)] || function (c) {
    const u = t;
    return c && c[u(0xb9)] ? c : { 'default': c };
};
const k = {};
k[t(0xb4)] = !![], Object[t(0xad) + s(0xd2)](exports, s(0xb9), k);
const LogTicket_1 = __importDefault(require(s(0xbe) + t(0xc1) + 'et')), User_1 = __importDefault(require(t(0xbe) + s(0xc7))), Queue_1 = __importDefault(require(s(0xbe) + t(0xcd))), ShowLogTicketService = async ({ticketId: h}) => {
        const v = s, w = t, i = {};
        i[v(0xc9)] = w(0xc0), i[w(0xae)] = w(0xcc), i[w(0xcb)] = w(0xd1), i[v(0xb6)] = v(0xb7), i[w(0xc6)] = w(0xc3);
        const j = i, l = {};
        l[v(0xb0)] = h;
        const m = {};
        m[v(0xce)] = User_1[w(0xb3)], m['as'] = j[w(0xc9)], m[w(0xbd)] = [
            'id',
            j[v(0xae)]
        ];
        const n = {};
        n[w(0xce)] = Queue_1[v(0xb3)], n['as'] = j[v(0xcb)], n[w(0xbd)] = [
            'id',
            j[v(0xcb)]
        ];
        const o = {};
        o[v(0xaf)] = l, o[w(0xcf)] = [
            m,
            n
        ], o[w(0xbc)] = [[
                j[v(0xb6)],
                j[v(0xc6)]
            ]];
        const p = await LogTicket_1[v(0xb3)][w(0xb2)](o);
        return p;
    };
exports[s(0xb3)] = ShowLogTicketService;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xe0c + -0x91a + 0x17d3);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const x = [
        'findAll',
        'default',
        'value',
        '52oDDljB',
        'jgHvC',
        'createdAt',
        '5xbFZne',
        '__esModule',
        '48JRWJFg',
        '91206bCaYjr',
        'order',
        'attributes',
        '../../mode',
        '13683rKOnrL',
        'user',
        'ls/LogTick',
        '2TuYxvi',
        'DESC',
        '6665544GNqMnk',
        '295128VdocME',
        'niOfX',
        'ls/User',
        '27096ifqNBW',
        'pvimj',
        '11eOAaZe',
        'XamIl',
        'name',
        'ls/Queue',
        'model',
        'include',
        'fault',
        'queue',
        'erty',
        '__importDe',
        '75310uZQsCO',
        'defineProp',
        'zZYka',
        'where',
        'ticketId',
        '926940vkqyqG'
    ];
    a = function () {
        return x;
    };
    return a();
}