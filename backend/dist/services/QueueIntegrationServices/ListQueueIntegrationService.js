'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x6e9 * -0x3 + 0x1 * 0xb81 + 0x1 * 0xaa1);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const t = [
        'order',
        'aVKrs',
        'findAll',
        'tegrations',
        'defineProp',
        '11171721svXYil',
        '__esModule',
        'name',
        'tenantId',
        '12nxxxMe',
        '539736ohAwnd',
        '1338042HIuOnB',
        'where',
        'fault',
        'EMKah',
        '5202865dMhmeK',
        '20Ebmspa',
        '374099HlkxXg',
        '../../mode',
        '303741Llcujp',
        'value',
        'ls/QueueIn',
        'erty',
        '986247EgqfmA',
        '14dVwISR',
        '__importDe',
        'default',
        'ASC',
        '2CBEaHB'
    ];
    a = function () {
        return t;
    };
    return a();
}
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(m(0x17f)) / (-0x26d7 + -0x269e + 0x4d76) * (parseInt(n(0x16d)) / (0x1 * 0x1d9f + -0x4 * -0x1e7 + -0xd * 0x2dd)) + parseInt(m(0x181)) / (-0x43 * 0x34 + 0x11c1 + 0x2 * -0x211) * (parseInt(n(0x177)) / (-0x531 + -0x3a9 * 0x2 + 0xc87 * 0x1)) + parseInt(m(0x17d)) / (-0xe47 + -0x1587 + 0x3fb * 0x9) + parseInt(n(0x179)) / (0x12ed + -0xc6b * -0x3 + 0x3 * -0x12b8) + parseInt(m(0x169)) / (0x2 * 0x9ae + 0x4cd * 0x2 + -0x337 * 0x9) * (-parseInt(n(0x178)) / (0x1c03 + -0x1 * 0x261d + -0x1 * -0xa22)) + -parseInt(n(0x168)) / (-0x61f * -0x5 + 0x23c5 * -0x1 + 0xb * 0x79) * (parseInt(m(0x17e)) / (0x421 * 0x3 + 0x25cc + 0x185 * -0x21)) + -parseInt(n(0x173)) / (0x30 * 0xb5 + 0xc4c + -0x2b * 0x113);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x73540 + -0x83526 + 0x1823a3));
var __importDefault = this && this[o(0x16a) + p(0x17b)] || function (c) {
    const q = o;
    return c && c[q(0x174)] ? c : { 'default': c };
};
const k = {};
k[o(0x182)] = !![], Object[p(0x172) + o(0x167)](exports, p(0x174), k);
const QueueIntegrations_1 = __importDefault(require(p(0x180) + p(0x183) + o(0x171))), ListQueueIntegrationsService = async ({tenantId: f}) => {
        const r = p, s = o, g = {};
        g[r(0x16f)] = s(0x175), g[s(0x17c)] = r(0x16c);
        const h = g, i = {};
        i[s(0x176)] = f;
        const j = {};
        j[r(0x17a)] = i, j[s(0x16e)] = [[
                h[s(0x16f)],
                h[s(0x17c)]
            ]];
        const l = await QueueIntegrations_1[r(0x16b)][s(0x170)](j);
        return l;
    };
exports[p(0x16b)] = ListQueueIntegrationsService;