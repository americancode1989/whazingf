'use strict';
const y = b, z = b;
function a() {
    const D = [
        'includes',
        'received',
        'msg',
        '../Message',
        'geService',
        'messageId',
        'default',
        'wabaMediaI',
        'value',
        '160350zVEgfM',
        '1754346TlyyZg',
        'UnvFT',
        'chat',
        'LYTsE',
        '__esModule',
        'Waba360',
        '45miaVQl',
        '__importDe',
        'fault',
        'mediaUrl',
        'tenantId',
        '154aqwxPg',
        './GetMedia',
        'CsGrv',
        'fromMe',
        '6641472bQMiDX',
        'acOdR',
        'getTime',
        'sended',
        'read',
        'status',
        '1252273nRUKbj',
        'messageDat',
        'contactId',
        'erty',
        'body',
        'ticket',
        '5502fVTYje',
        'text',
        'timestamp',
        'channel',
        'mediaType',
        'defineProp',
        '955228JSXGPG',
        'Services/C',
        'bGOSo',
        'update',
        'type',
        'ticketId',
        'reateMessa',
        'template',
        '301vmaalD',
        '3032160ukCruL',
        '30lEqANR'
    ];
    a = function () {
        return D;
    };
    return a();
}
(function (c, d) {
    const w = b, x = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(w(0x141)) / (0xa6d * 0x2 + 0x8bc + -0x1 * 0x1d95) * (-parseInt(x(0x131)) / (-0x5f * -0x5 + 0x2390 + 0x1 * -0x2569)) + -parseInt(x(0x126)) / (0x1734 + 0x1bf3 + -0x1992 * 0x2) + parseInt(w(0x111)) / (0x1efa + 0x568 + -0x245e) * (parseInt(w(0x11b)) / (0xeec + -0x885 * 0x4 + 0x132d)) + parseInt(w(0x125)) / (-0x238e + 0xf42 + -0x22 * -0x99) * (-parseInt(x(0x119)) / (-0x31 * 0x2 + 0x10d9 + -0x838 * 0x2)) + -parseInt(x(0x135)) / (-0x2569 + -0x2108 + -0x4679 * -0x1) + parseInt(x(0x12c)) / (-0xcff + 0xac5 * 0x1 + 0x243) * (parseInt(w(0x11a)) / (0xe49 + 0x1 * 0xeca + -0x1d09)) + parseInt(x(0x13b)) / (0x2274 + -0x67b * -0x1 + 0x1472 * -0x2);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xa9 * -0x1361 + 0x3bef3 * 0x2 + 0x135fc9));
var __importDefault = this && this[y(0x12d) + z(0x12e)] || function (c) {
    const A = y;
    return c && c[A(0x12a)] ? c : { 'default': c };
};
const k = {};
k[z(0x124)] = !![], Object[y(0x110) + z(0x13e)](exports, y(0x12a), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xa5c + 0xa69 + 0x3a * -0x57);
        let h = e[f];
        return h;
    }, b(c, d);
}
const CreateMessageService_1 = __importDefault(require(y(0x11f) + z(0x112) + y(0x117) + z(0x120))), GetMediaWaba360_1 = __importDefault(require(y(0x132) + z(0x12b))), VerifyMediaMessage = async (g, h, i, j) => {
        const B = y, C = z, l = {};
        l[B(0x133)] = B(0x142), l[C(0x136)] = C(0x128), l[B(0x127)] = C(0x118), l[B(0x129)] = C(0x138), l[B(0x113)] = B(0x11d);
        const m = l;
        let n;
        try {
            const t = {};
            t[C(0x144)] = g, t[C(0x11e)] = h, t[C(0x140)] = i, n = await (0x7a * -0x1f + 0xf3 * -0x7 + 0x156b, GetMediaWaba360_1[C(0x122)])(t);
        } catch (u) {
        }
        let o;
        if (![
                m[C(0x133)],
                m[C(0x136)],
                m[C(0x127)]
            ][B(0x11c)](h[C(0x115)])) {
            const v = h;
            o = v[h[C(0x115)]]['id'];
        }
        const p = {};
        p[C(0x121)] = h['id'] || '', p[C(0x116)] = i['id'], p[C(0x13d)] = h[C(0x134)] ? undefined : j['id'], p[B(0x13f)] = h?.[B(0x142)]?.[C(0x13f)] || n || '', p[C(0x134)] = h[C(0x134)], p[B(0x139)] = h[C(0x134)], p[B(0x12f)] = n, p[C(0x10f)] = h[C(0x115)], p[B(0x143)] = +h[C(0x143)], p[B(0x123) + 'd'] = o, p[B(0x13a)] = h[C(0x134)] ? m[B(0x129)] : m[C(0x113)];
        const q = p;
        await i[C(0x114)]({
            'lastMessage': h?.[C(0x142)]?.[B(0x13f)] || n,
            'lastMessageAt': new Date()[C(0x137)](),
            'answered': h[B(0x134)] || ![]
        });
        const r = {};
        r[B(0x13c) + 'a'] = q, r[B(0x130)] = i[C(0x130)];
        const s = await (0x1630 + -0x1 * 0x44f + -0x17 * 0xc7, CreateMessageService_1[C(0x122)])(r);
        return s;
    };
exports[z(0x122)] = VerifyMediaMessage;