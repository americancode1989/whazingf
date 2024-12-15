'use strict';
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(n(0x1ae)) / (-0x2f * -0xad + -0x19cc + -0x5f6) + parseInt(o(0x194)) / (0x2d8 + 0x2431 + 0x1 * -0x2707) * (parseInt(n(0x189)) / (-0x1764 + -0x6b8 * -0x1 + 0x10af)) + parseInt(o(0x1b0)) / (0x19bb + 0x465 * -0x5 + -0x2 * 0x1df) * (parseInt(n(0x196)) / (-0x244e + -0x97 + 0x20d * 0x12)) + -parseInt(n(0x1b1)) / (0x1 * 0x10b1 + -0x2 * 0x9e8 + 0x23 * 0x17) + parseInt(n(0x192)) / (-0x893 + -0x1 * -0x590 + 0x30a * 0x1) + parseInt(n(0x18a)) / (0xb9 + 0x1094 + -0x1145) + -parseInt(o(0x1a3)) / (0x3 * -0x837 + 0x146d * -0x1 + 0x503 * 0x9);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x22c9 + -0xa4da5 + -0x8 * -0x26391));
function a() {
    const u = [
        'QxVeh',
        'sxSGU',
        'VTWYV',
        'tenantId',
        '60uiOStN',
        '9047272nKifMC',
        'rs/AppErro',
        'type',
        'findOne',
        'fault',
        'attributes',
        'fbObject',
        '../../mode',
        '224987iZQJQl',
        'value',
        '73270IptQTr',
        'XrJQd',
        '10KJnqrZ',
        'defineProp',
        'AOnkP',
        'tokenAPI',
        'YSkfc',
        'createdAt',
        'instagramK',
        'BogWm',
        'NNEL_FOUND',
        '__importDe',
        'fbPageId',
        'rVtPJ',
        '../../erro',
        '27144675hyeyNp',
        'aHKtf',
        'where',
        'status',
        '__esModule',
        'updatedAt',
        'name',
        'erty',
        'default',
        'ls/Whatsap',
        'ERR_NO_CHA',
        '582568CWmXLX',
        'lRiJF',
        '2341324SPtvKN',
        '280494eWjfon',
        'tcpZc'
    ];
    a = function () {
        return u;
    };
    return a();
}
var __importDefault = this && this[p(0x19f) + p(0x18e)] || function (c) {
    const r = q;
    return c && c[r(0x1a7)] ? c : { 'default': c };
};
const k = {};
k[q(0x193)] = !![], Object[q(0x197) + q(0x1aa)](exports, p(0x1a7), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1d5a + 0x3c1 * 0x3 + -0x4e7 * -0x4);
        let h = e[f];
        return h;
    }, b(c, d);
}
const Whatsapp_1 = __importDefault(require(q(0x191) + p(0x1ac) + 'p')), AppError_1 = __importDefault(require(q(0x1a2) + p(0x18b) + 'r')), MessengerShowChannel = async ({fbPageId: f}) => {
        const s = p, t = q, g = {};
        g[s(0x1a4)] = t(0x1a9), g[t(0x1af)] = t(0x1a6), g[t(0x198)] = s(0x18c), g[s(0x1a1)] = s(0x19b), g[s(0x19a)] = t(0x1a8), g[t(0x185)] = s(0x188), g[t(0x19d)] = t(0x199), g[t(0x195)] = t(0x1a0), g[t(0x186)] = s(0x190), g[s(0x1b2)] = t(0x19c) + 'ey', g[s(0x187)] = s(0x1ad) + t(0x19e);
        const h = g, i = [
                'id',
                h[s(0x1a4)],
                h[s(0x1af)],
                h[t(0x198)],
                h[t(0x1a1)],
                h[t(0x19a)],
                h[s(0x185)],
                h[t(0x19d)],
                h[t(0x195)],
                h[s(0x186)],
                h[s(0x1b2)]
            ], j = {};
        j[s(0x1a0)] = f;
        const l = {};
        l[t(0x1a5)] = j, l[t(0x18f)] = i;
        const m = await Whatsapp_1[s(0x1ab)][t(0x18d)](l);
        if (!m)
            throw new AppError_1[(s(0x1ab))](h[t(0x187)], 0x24bc + 0x157b + -0x38a3);
        return m;
    };
exports[q(0x1ab)] = MessengerShowChannel;