'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0xa5)) / (-0x7c0 + 0x49 * 0x57 + -0x110e * 0x1) + parseInt(q(0xaf)) / (-0x33f * -0x3 + -0xeb6 + -0xf * -0x55) + -parseInt(q(0xb7)) / (0x2 * -0xe09 + 0x1c6d + -0x58) * (-parseInt(q(0xac)) / (0x214d * 0x1 + -0x25 * -0xe3 + -0x4218)) + -parseInt(p(0x9c)) / (0x2 * -0x626 + -0x1f0a + 0x2b5b) + parseInt(q(0xb2)) / (-0xb71 + 0x137a + -0x803) * (-parseInt(q(0xb3)) / (0x1002 + 0x10 * -0x1ac + -0x397 * -0x3)) + -parseInt(q(0xa9)) / (-0x218f + -0xe * -0x26b + -0x43 * 0x1) + parseInt(q(0x9f)) / (-0x3 * -0x4f0 + 0xbc5 * 0x1 + -0x1a8c);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xd5 * 0xa52 + 0x3 * 0x34aac + 0x5b0bb));
function a() {
    const w = [
        '18hrpjqS',
        'attributes',
        '__importDe',
        '3841540mIVOSI',
        'tenant',
        'findAll',
        '1984788AoAHEC',
        'default',
        'fault',
        'NeDyA',
        'isDeleted',
        'ls/Whatsap',
        '425541teazVF',
        '../../mode',
        'erty',
        'ls/Tenant',
        '2841848kfzlex',
        'where',
        'model',
        '557012nKSdFY',
        '__esModule',
        'uHnzJ',
        '1615620oxsTid',
        'tenantId',
        'include',
        '8658ysretv',
        '3437gmNrvt',
        'value',
        'defineProp',
        'name'
    ];
    a = function () {
        return w;
    };
    return a();
}
var __importDefault = this && this[r(0x9b) + s(0xa1)] || function (c) {
    const t = r;
    return c && c[t(0xad)] ? c : { 'default': c };
};
const k = {};
k[r(0xb4)] = !![], Object[r(0xb5) + s(0xa7)](exports, s(0xad), k);
const Tenant_1 = __importDefault(require(r(0xa6) + r(0xa8))), Whatsapp_1 = __importDefault(require(r(0xa6) + s(0xa4) + 'p')), AdminListChannelsService = async ({tenantId: g}) => {
        const u = r, v = r, h = {};
        h[u(0xae)] = v(0x9d), h[v(0xa2)] = u(0xb6);
        const i = h, j = {};
        j[u(0xa3)] = ![];
        const l = j;
        g && (l[u(0xb0)] = g);
        const m = {};
        m[v(0xab)] = Tenant_1[v(0xa0)], m['as'] = i[u(0xae)], m[v(0x9a)] = [
            'id',
            i[v(0xa2)]
        ];
        const n = {};
        n[u(0xaa)] = l, n[v(0xb1)] = [m];
        const o = await Whatsapp_1[v(0xa0)][v(0x9e)](n);
        return o;
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x15e1 + 0x1c71 + 0x31b8 * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[r(0xa0)] = AdminListChannelsService;