'use strict';
const s = b, t = b;
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(q(0x182)) / (-0x4f + -0x1 * -0x1cdc + 0x6 * -0x4c2) + -parseInt(q(0x16b)) / (-0x761 + -0x12 * 0xfe + 0x193f) * (parseInt(q(0x169)) / (-0x1a50 + 0x9 * -0x89 + 0x1f24)) + -parseInt(r(0x184)) / (-0x11b * -0xd + 0xfa2 + -0x1dfd) + -parseInt(r(0x17b)) / (0x913 + -0x1d09 + 0x13fb) * (-parseInt(q(0x165)) / (0xc1 + -0x247d * -0x1 + -0x2538)) + parseInt(q(0x167)) / (0x10c7 + -0x26b1 + 0x15f1) * (parseInt(r(0x18d)) / (0x2b9 * -0x7 + 0x3 * -0x724 + 0x2883)) + -parseInt(r(0x18a)) / (-0x2385 + -0x152e + -0x4 * -0xe2f) + parseInt(r(0x174)) / (0x1 * 0x1b3b + -0x17 * -0x7c + -0x2655 * 0x1) * (parseInt(r(0x176)) / (-0x1bf0 + -0x5f7 * -0x1 + 0x1604));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x3d0fb + 0xa2996 + 0xa533));
function a() {
    const x = [
        '__importDe',
        '5GMgJvD',
        'getTime',
        'IcIBc',
        'ers/getQuo',
        'edited_mes',
        'Services/C',
        'tedForMess',
        '638998YCoisL',
        'CKbKE',
        '1958640XplCYd',
        'XprVY',
        'fault',
        '__esModule',
        'cbAZm',
        'default',
        '6584535ptclnx',
        'sage',
        'erty',
        '8cpzBCM',
        'defineProp',
        'geService',
        'essage',
        'message_id',
        'date',
        '5485632smImFJ',
        'nrKFM',
        '2957563sQfKTk',
        'sPWYn',
        '24SBIGMk',
        'messageDat',
        '141994CYkiqy',
        'tenantId',
        '../../help',
        'value',
        'received',
        'message',
        '../Message',
        'text',
        'chat',
        '10DDtbEh',
        'ageId',
        '17046238GXqjQj',
        'update',
        'reply_to_m',
        'reateMessa'
    ];
    a = function () {
        return x;
    };
    return a();
}
var __importDefault = this && this[s(0x17a) + s(0x186)] || function (c) {
    const u = s;
    return c && c[u(0x187)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x21f1 + 0xf1 * -0x9 + 0x2bca);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[s(0x16e)] = !![], Object[s(0x160) + s(0x18c)](exports, s(0x187), k);
const getQuotedForMessageId_1 = __importDefault(require(t(0x16d) + s(0x17e) + s(0x181) + t(0x175))), CreateMessageService_1 = __importDefault(require(s(0x171) + t(0x180) + s(0x179) + t(0x161))), VerifyMessage = async (d, e, f, g) => {
        const v = t, w = t, h = {
                'IcIBc': function (o, p) {
                    return o && p;
                },
                'nrKFM': function (o, p) {
                    return o(p);
                },
                'sPWYn': v(0x173),
                'cbAZm': function (o, p) {
                    return o * p;
                },
                'XprVY': v(0x16f),
                'CKbKE': function (o, p) {
                    return o || p;
                }
            };
        let i, j = {};
        i = d?.[w(0x170)], j = d?.[v(0x177)];
        h[w(0x17d)](!i, j) && (i = j?.[v(0x17f) + v(0x18b)]);
        let l;
        if (i?.[v(0x178) + v(0x162)]?.[w(0x163)]) {
            const o = await (-0x97 * -0x17 + -0x24f1 + 0x1760, getQuotedForMessageId_1[v(0x189)])(i[v(0x178) + v(0x162)][v(0x163)], f[v(0x16c)]);
            l = o?.['id'] || undefined;
        }
        const m = {
            'messageId': h[w(0x166)](String, i?.[v(0x163)]),
            'ticketId': f['id'],
            'contactId': e ? undefined : g['id'],
            'body': i[w(0x172)],
            'fromMe': e,
            'read': e,
            'mediaType': h[w(0x168)],
            'quotedMsgId': l,
            'timestamp': h[v(0x188)](+i[v(0x164)], -0x1ab4 + -0xa * -0x34f + -0x2 * 0x13d),
            'status': h[w(0x185)]
        };
        await f[v(0x177)]({
            'lastMessage': i[w(0x172)],
            'lastMessageAt': new Date()[w(0x17c)](),
            'answered': h[v(0x183)](e, ![])
        });
        const n = {};
        n[w(0x16a) + 'a'] = m, n[v(0x16c)] = f[w(0x16c)], await (-0xa13 + -0xb10 + -0x7 * -0x305, CreateMessageService_1[v(0x189)])(n);
    };
exports[s(0x189)] = VerifyMessage;