'use strict';
const s = b, t = b;
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(q(0xda)) / (0x14f3 + -0x5e2 + -0xf10) * (-parseInt(q(0xeb)) / (0x260e + 0xbd * 0x1 + -0x26c9)) + parseInt(r(0xc2)) / (-0x2 * 0x3f5 + -0x2 * 0x78d + 0x1707) * (parseInt(q(0xd8)) / (-0x207f + -0x845 * -0x3 + -0x22 * -0x3a)) + parseInt(q(0xec)) / (-0x52 * -0x56 + 0xb5 * 0x15 + -0x54c * 0x8) + -parseInt(q(0xcc)) / (-0x3 * 0x515 + 0xe9 * 0x13 + -0x206) + -parseInt(q(0xd6)) / (0x1397 + -0x6b2 * -0x2 + -0x6f * 0x4c) * (-parseInt(q(0xc4)) / (-0x155 + 0x11bd + -0x1060)) + parseInt(r(0xdd)) / (-0x2 * 0xb8f + 0x1 * 0x577 + 0x11b0) * (-parseInt(q(0xe4)) / (-0x2356 + -0x26e2 + 0x4a42)) + parseInt(r(0xd7)) / (-0x4 * 0x94a + 0x1ce * 0x7 + 0x1891 * 0x1) * (parseInt(r(0xd4)) / (-0xf * 0x271 + -0x2 * -0x59d + -0x1971 * -0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x41415 + -0x2 * 0xf121 + 0x8d53a));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2684 + 0x23d + -0x2803 * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[s(0xd0) + s(0xd1)] || function (c) {
    const u = t;
    return c && c[u(0xe6)] ? c : { 'default': c };
};
const k = {};
function a() {
    const x = [
        '192948nzxITK',
        'messageDat',
        '8DXZAlf',
        'messageId',
        'ticketId',
        'update',
        'ers/getQuo',
        'timestamp',
        'type',
        '../../help',
        '1703628PskPQr',
        'read',
        'sSrXu',
        'defineProp',
        '__importDe',
        'fault',
        'mid',
        'tedForMess',
        '587940FlqPuv',
        'body',
        '1871135CtlMWO',
        '66ZDuPim',
        '12XwNzvi',
        'geService',
        '47CneAEo',
        'reateMessa',
        'mediaType',
        '374580jyljzX',
        'value',
        'tenantId',
        'reply_to',
        'quotedMsgI',
        'text',
        'fromMe',
        '50YmCrZT',
        'status',
        '__esModule',
        'default',
        'received',
        'message_id',
        'erty',
        '5086ubaArn',
        '227335rRadzD',
        'getTime',
        'message',
        '../Message',
        'contactId',
        'Services/C',
        'ageId'
    ];
    a = function () {
        return x;
    };
    return a();
}
k[t(0xde)] = !![], Object[s(0xcf) + s(0xea)](exports, s(0xe6), k);
const getQuotedForMessageId_1 = __importDefault(require(s(0xcb) + t(0xc8) + s(0xd3) + s(0xc1))), CreateMessageService_1 = __importDefault(require(s(0xbe) + s(0xc0) + s(0xdb) + s(0xd9))), MessengerVerifyMessage = async (f, g, h) => {
        const v = t, w = s, i = {};
        i[v(0xce)] = v(0xe8);
        const j = i;
        let l;
        if (f?.[w(0xee)]?.[v(0xe0)]?.[v(0xd2)]) {
            const p = await (-0x14ef + 0xebb + 0x634, getQuotedForMessageId_1[v(0xe7)])(f[w(0xee)][w(0xe0)][w(0xd2)], g[v(0xdf)]);
            l = p?.['id'] || undefined;
        }
        const m = {};
        m[v(0xc5)] = f[w(0xe9)] || '', m[w(0xc6)] = g['id'], m[v(0xbf)] = h['id'], m[w(0xd5)] = f[v(0xee)][v(0xe2)] || '', m[w(0xe3)] = ![], m[w(0xdc)] = f[v(0xca)], m[v(0xcd)] = ![], m[w(0xe1) + 'd'] = l, m[v(0xc9)] = f[v(0xc9)], m[w(0xe5)] = j[v(0xce)];
        const n = m;
        await g[v(0xc7)]({
            'lastMessage': n[v(0xd5)],
            'lastMessageAt': new Date()[w(0xed)](),
            'answered': ![]
        });
        const o = {};
        o[v(0xc3) + 'a'] = n, o[v(0xdf)] = g[v(0xdf)], await (-0x25f9 + 0x86 + 0x2573 * 0x1, CreateMessageService_1[w(0xe7)])(o);
    };
exports[s(0xe7)] = MessengerVerifyMessage;