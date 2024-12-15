'use strict';
function a() {
    const s = [
        '8RSnZxT',
        'create',
        '22ZCQpZh',
        '__esModule',
        'tenantId',
        'userId',
        'ls/FastRep',
        '353724ctDfmq',
        '9516KHJFiG',
        'defineProp',
        'key',
        'media',
        '../../mode',
        '271143tJptZg',
        '590365npLQsl',
        'erty',
        'value',
        '1300802IwhskR',
        'fault',
        '1913750blXmEm',
        '1519nbNwtr',
        'default',
        '1KdBVHs',
        'message',
        '339843fTTfCq',
        '__importDe'
    ];
    a = function () {
        return s;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2658 + -0x1dc8 + -0x7f5);
        let h = e[f];
        return h;
    }, b(c, d);
}
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(l(0xa9)) / (-0xe50 + -0x1 * 0x12c1 + 0x2112) * (-parseInt(l(0xa4)) / (-0x2068 + 0x1 * -0x81a + -0x1 * -0x2884)) + parseInt(l(0xab)) / (-0x2 * 0x6d6 + 0x26ad + -0x18fe) + parseInt(l(0xb4)) / (0x1a57 + -0x21e5 * -0x1 + -0x3c38) + parseInt(m(0xa1)) / (0x1e08 + 0x2 * -0xb13 + 0x29f * -0x3) + -parseInt(l(0x9b)) / (-0x1 * -0x689 + -0x232f + 0x1cac) * (-parseInt(m(0xa7)) / (0x5 * -0x40e + -0x132 * 0x2 + 0x16b1 * 0x1)) + -parseInt(l(0xad)) / (0x70c + 0x1 * 0x1f3e + 0xa6 * -0x3b) * (parseInt(l(0xa0)) / (-0x33f + 0x1 * 0x819 + 0x19b * -0x3)) + parseInt(m(0xa6)) / (0xd04 + -0x1699 + 0x99f * 0x1) * (parseInt(l(0xaf)) / (-0x1817 * 0x1 + -0x1 * 0xe48 + 0x266a));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xf * -0x2f83 + -0x3561b * -0x3 + -0x734a5));
var __importDefault = this && this[n(0xac) + o(0xa5)] || function (c) {
    const p = n;
    return c && c[p(0xb0)] ? c : { 'default': c };
};
const k = {};
k[n(0xa3)] = !![], Object[n(0x9c) + n(0xa2)](exports, n(0xb0), k);
const FastReply_1 = __importDefault(require(o(0x9f) + n(0xb3) + 'ly')), CreateFastReplyService = async ({
        key: d,
        message: e,
        userId: f,
        tenantId: g,
        media: h
    }) => {
        const q = o, r = o, i = {};
        i[q(0x9d)] = d, i[r(0xaa)] = e, i[q(0xb2)] = f, i[r(0xb1)] = g, i[r(0x9e)] = h;
        const j = await FastReply_1[q(0xa8)][q(0xae)](i);
        return j;
    };
exports[n(0xa8)] = CreateFastReplyService;