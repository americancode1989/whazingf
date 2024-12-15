'use strict';
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(m(0x175)) / (0xa7 * 0x11 + -0x12e8 + 0xe * 0x8f) * (-parseInt(n(0x161)) / (-0xb9 * 0x21 + 0x1fe6 + 0x1 * -0x80b)) + -parseInt(n(0x163)) / (0x11d7 + 0x845 + -0x1a19) * (-parseInt(n(0x165)) / (-0xaa7 + 0x151b + -0xa70 * 0x1)) + -parseInt(n(0x166)) / (-0x1b6 * 0x7 + 0x4ca + 0x171 * 0x5) + -parseInt(n(0x176)) / (0x1510 + 0x1 * -0xda8 + -0x762) * (-parseInt(m(0x15f)) / (-0x23ed + -0x169d + 0x3a91)) + parseInt(m(0x169)) / (-0x4 * -0x36d + -0x235f + 0x37 * 0x65) + -parseInt(m(0x158)) / (-0x2ee + -0xbcb * 0x2 + -0x7 * -0x3cb) + -parseInt(m(0x179)) / (0x16d3 * 0x1 + 0x21ad + -0x3876) * (-parseInt(n(0x16a)) / (-0x212a + -0xc13 + 0x2d48));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xbd89 + 0xf1e6 + -0x27d * 0xb));
var __importDefault = this && this[o(0x15c) + o(0x15d)] || function (c) {
    const q = o;
    return c && c[q(0x15e)] ? c : { 'default': c };
};
const k = {};
k[o(0x172)] = !![], Object[p(0x168) + p(0x170)](exports, p(0x15e), k);
function a() {
    const t = [
        'erty',
        'EbOzm',
        'value',
        'ateContact',
        'first_name',
        '7323rcEKbM',
        '269910XHvcCx',
        'getFileLin',
        'Service',
        '10ZTSpDV',
        '1727649MQBSzk',
        'eSBeO',
        'default',
        'telegram',
        '__importDe',
        'fault',
        '__esModule',
        '7wtGziU',
        'small_file',
        '14fERkuM',
        'getChat',
        '6CHSwUA',
        'username',
        '367428rccwTI',
        '657740doVFgQ',
        'photo',
        'defineProp',
        '381256LeAjzn',
        '2220394uQBMBN',
        'last_name',
        '../Contact',
        'Services/C',
        '_id',
        'reateOrUpd'
    ];
    a = function () {
        return t;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x5 * -0xd3 + -0xe28 + -0x1 * -0x139f);
        let h = e[f];
        return h;
    }, b(c, d);
}
const CreateOrUpdateContactService_1 = __importDefault(require(p(0x16c) + p(0x16d) + p(0x16f) + o(0x173) + o(0x178))), VerifyContact = async (c, d) => {
        const r = o, s = p, e = {
                'EbOzm': function (j, l) {
                    return j(l);
                },
                'eSBeO': r(0x15b)
            };
        let f;
        const g = await c[r(0x162)]();
        try {
            f = g[s(0x167)]?.[r(0x160) + r(0x16e)] ? await c[s(0x15b)][r(0x177) + 'k'](g[r(0x167)]?.[s(0x160) + r(0x16e)]) : undefined;
        } catch (j) {
            f = undefined;
        }
        const h = {
                'name': g[r(0x174)] + '\x20' + g[r(0x16b)] || g[s(0x164)] || '',
                'number': '',
                'profilePicUrl': f ? e[s(0x171)](String, f) : undefined,
                'tenantId': d,
                'pushname': g[r(0x164)] || '',
                'isUser': !![],
                'isWAContact': ![],
                'isGroup': ![],
                'origem': e[s(0x159)],
                'telegramId': g['id']
            }, i = await (-0xd81 * -0x1 + 0x1e08 + -0x2b89, CreateOrUpdateContactService_1[s(0x15a)])(h);
        return i;
    };
exports[o(0x15a)] = VerifyContact;