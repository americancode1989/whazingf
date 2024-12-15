'use strict';
function a() {
    const u = [
        '496225wdiqJn',
        'chat',
        '932wyYquL',
        '3026177OuBtHO',
        'update',
        '1659582ntPjnA',
        'Services/C',
        '__esModule',
        '__importDe',
        'SQSAA',
        'erty',
        'hvpif',
        '965709TWMoau',
        'value',
        'defineProp',
        'getTime',
        'NbPaT',
        'messageDat',
        '231970YYIbVK',
        'received',
        '1345arSADV',
        '../Message',
        'item_id',
        'text',
        'default',
        'message',
        'tenantId',
        '5317664zjXdZN',
        'geService',
        'reateMessa',
        'JaHTM',
        'fault'
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
            const f = parseInt(n(0xde)) / (-0xb30 + -0x17d + 0xcae) + parseInt(o(0xf0)) / (0x49f + -0x4e9 + -0x4 * -0x13) + -parseInt(o(0xea)) / (-0x344 + 0x702 + -0x1 * 0x3bb) + -parseInt(o(0xe0)) / (0x1d58 + 0xd50 + -0x1552 * 0x2) * (parseInt(n(0xf2)) / (-0x1377 + -0x121b + 0x2597 * 0x1)) + parseInt(o(0xe3)) / (-0x2504 + 0x66d + -0x1e9d * -0x1) + parseInt(n(0xe1)) / (-0x1 * -0xd6 + -0x159d + 0xa67 * 0x2) + -parseInt(n(0xd9)) / (0x2 * -0x67 + 0x233b + -0x2265);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x6 * -0x95f + 0x5537 * 0x5 + 0x24389));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x15e3 + 0xb * -0x37d + 0x1154);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[p(0xe6) + q(0xdd)] || function (c) {
    const r = p;
    return c && c[r(0xe5)] ? c : { 'default': c };
};
const k = {};
k[p(0xeb)] = !![], Object[p(0xec) + q(0xe8)](exports, q(0xe5), k);
const CreateMessageService_1 = __importDefault(require(p(0xf3) + q(0xe4) + p(0xdb) + q(0xda))), VerifyMessage = async (d, e, f, g) => {
        const s = p, t = p, h = {
                'hvpif': function (l, m) {
                    return l(m);
                },
                'JaHTM': s(0xdf),
                'NbPaT': s(0xf1),
                'SQSAA': function (l, m) {
                    return l || m;
                }
            }, i = {
                'messageId': h[s(0xe9)](String, d[s(0xf7)][s(0xf4)]),
                'ticketId': f['id'],
                'contactId': e ? undefined : g['id'],
                'body': d[t(0xf7)][t(0xf5)],
                'fromMe': e,
                'read': e,
                'mediaType': h[t(0xdc)],
                'quotedMsgId': '',
                'timestamp': new Date()[s(0xed)](),
                'status': h[s(0xee)]
            };
        await f[t(0xe2)]({
            'lastMessage': d[t(0xf7)][s(0xf5)],
            'lastMessageAt': new Date()[s(0xed)](),
            'answered': h[t(0xe7)](e, ![])
        });
        const j = {};
        j[s(0xef) + 'a'] = i, j[s(0xd8)] = f[s(0xd8)], await (-0x1 * 0x183b + 0x58c + -0x12af * -0x1, CreateMessageService_1[t(0xf6)])(j);
    };
exports[p(0xf6)] = VerifyMessage;