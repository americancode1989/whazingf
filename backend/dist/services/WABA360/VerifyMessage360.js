'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1042 * -0x2 + 0x49 * -0xd + -0x1c29);
        let h = e[f];
        return h;
    }, b(c, d);
}
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(o(0xc2)) / (0xb7c + -0xf62 + 0x14d * 0x3) * (-parseInt(o(0xbb)) / (0x8d * -0x17 + -0x1 * -0x1ff3 + -0x1346 * 0x1)) + parseInt(p(0xc7)) / (-0x1d27 + -0xd6 * 0x6 + -0xaf * -0x32) + -parseInt(p(0xaf)) / (0x11 * 0xf2 + 0xb6f * -0x2 + 0x6d0) * (-parseInt(o(0xb7)) / (-0x936 + 0x6 * -0x1c7 + 0x13e5)) + -parseInt(o(0xc4)) / (-0x1bd5 + -0x4a0 * 0x7 + 0x3c3b) + -parseInt(o(0xa7)) / (0x1c22 + 0x832 + -0x244d) * (parseInt(p(0xac)) / (0x1e4e + -0x6b1 + 0x1795 * -0x1)) + parseInt(p(0xc6)) / (-0xb5a + 0x15b * -0x8 + 0x163b) * (-parseInt(p(0xb4)) / (0x9 * -0x374 + -0x4d7 * -0x1 + 0x1a47)) + -parseInt(o(0xcb)) / (-0x270 + -0x1 * -0x12d9 + -0x2 * 0x82f) * (-parseInt(o(0xb6)) / (0x2cb * -0x3 + -0x1944 + 0x21b1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x227c9 * -0x5 + 0x16 * -0xbc91 + 0x1009b1));
var __importDefault = this && this[q(0xc1) + r(0xb0)] || function (c) {
    const s = r;
    return c && c[s(0xa6)] ? c : { 'default': c };
};
const k = {};
k[q(0xab)] = !![], Object[r(0xc8) + r(0xcc)](exports, r(0xa6), k);
function a() {
    const v = [
        '115710eGtFBA',
        'messageDat',
        '81jxfWjZ',
        '616563xxPvsb',
        'defineProp',
        'getTime',
        'contactId',
        '4227949gxWwNa',
        'erty',
        'text',
        '__esModule',
        '56BvXLhM',
        'received',
        'tenantId',
        'reateMessa',
        'value',
        '1325176AkcUKu',
        'timestamp',
        'messageId',
        '2972RXycWz',
        'fault',
        'body',
        'NZvJo',
        'ticketId',
        '1281950UetxFt',
        'type',
        '84qFynlu',
        '380DhtkUj',
        '../Message',
        'default',
        'status',
        '48210ghVWej',
        'read',
        'Services/C',
        'geService',
        'update',
        'fromMe',
        '__importDe',
        '10gbuAoo',
        'mediaType'
    ];
    a = function () {
        return v;
    };
    return a();
}
const CreateMessageService_1 = __importDefault(require(q(0xb8) + q(0xbd) + r(0xaa) + q(0xbe))), VerifyMessage360 = async (f, g, h) => {
        const t = q, u = r, i = {};
        i[t(0xb2)] = u(0xa8);
        const j = i, l = {};
        l[u(0xae)] = f['id'] || '', l[u(0xb3)] = g['id'], l[t(0xca)] = f[u(0xc0)] ? undefined : h['id'], l[t(0xb1)] = f[t(0xcd)]?.[u(0xb1)] || '', l[t(0xc0)] = f[u(0xc0)], l[u(0xc3)] = f[t(0xb5)], l[t(0xbc)] = f[u(0xc0)], l[t(0xad)] = +f[u(0xad)], l[t(0xba)] = j[u(0xb2)];
        const m = l;
        await g[t(0xbf)]({
            'lastMessage': m[u(0xb1)],
            'lastMessageAt': new Date()[t(0xc9)](),
            'answered': f[u(0xc0)] || ![]
        });
        const n = {};
        n[u(0xc5) + 'a'] = m, n[u(0xa9)] = g[u(0xa9)], await (0xe59 + -0x159d + 0x744, CreateMessageService_1[u(0xb9)])(n);
    };
exports[q(0xb9)] = VerifyMessage360;