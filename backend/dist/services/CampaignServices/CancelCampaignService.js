'use strict';
const w = b, x = b;
(function (c, d) {
    const u = b, v = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(u(0xe5)) / (-0xe8 * 0x4 + -0x1cbf + 0x2060) + -parseInt(u(0xdc)) / (-0x9a0 + 0x29d + 0x705) * (parseInt(u(0xb9)) / (-0xc8 + 0x137 * 0xb + -0x2 * 0x649)) + -parseInt(v(0xd2)) / (-0x6d9 + 0x4cd * -0x8 + 0x2d45) * (parseInt(v(0xbb)) / (-0x134d * 0x1 + 0xb * 0xef + 0x90d)) + -parseInt(v(0xb4)) / (0x2037 * 0x1 + -0x1 * 0x1d2f + -0x302) * (parseInt(v(0xc7)) / (0xf * 0x147 + 0xc41 + -0x1f63)) + parseInt(v(0xc6)) / (-0xf * -0x183 + -0x2069 * -0x1 + 0x92d * -0x6) + -parseInt(u(0xb1)) / (-0xe37 + 0x483 + 0x9bd) * (parseInt(v(0xaf)) / (0x1 * -0x1189 + 0x1165 + 0x2e)) + parseInt(v(0xca)) / (-0x64a + -0xd97 + 0x44 * 0x4b);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1338f6 + -0x1 * 0x47b96 + 0x1 * -0x38cff));
var __importDefault = this && this[w(0xcd) + w(0xe1)] || function (c) {
    const y = w;
    return c && c[y(0xc5)] ? c : { 'default': c };
};
const k = {};
function a() {
    const B = [
        '19239374eEKbCj',
        'default',
        'messageId',
        '__importDe',
        'removeJobs',
        'oGulW',
        'B_SESSION',
        'TFrMD',
        '4195156IoEbpf',
        'erty',
        'ls/Campaig',
        'update',
        'AIGN_NOT_E',
        'eWhatsappC',
        'timestamp',
        'ack',
        'status',
        'rs/AppErro',
        '471326RlbWxk',
        'nContacts',
        'ampaign',
        'canceled',
        'value',
        'fault',
        'DsWtn',
        'mediaName',
        'tenantId',
        '694712DfJIjF',
        '../../erro',
        'dvNev',
        'ERROR_CAMP',
        '450mqKaAp',
        'SendMessag',
        '30249BHUjcW',
        'bull',
        'XISTS',
        '1997778WiXWTt',
        'where',
        'env',
        'campaignId',
        'ERROR:\x20',
        '3RUyFtp',
        'body',
        '5hUcUwQ',
        'ORT',
        'IO_REDIS_S',
        'uVPPv',
        'IO_REDIS_D',
        'ERVER',
        'defineProp',
        'IO_REDIS_P',
        '../../mode',
        'ASSWORD',
        '__esModule',
        '465560qKejCJ',
        '7gRRjuJ',
        'campaginId',
        'findOne'
    ];
    a = function () {
        return B;
    };
    return a();
}
k[w(0xe0)] = !![], Object[x(0xc1) + w(0xd3)](exports, w(0xc5), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x3e * 0x50 + 0x1085 + 0x47 * -0x7f);
        let h = e[f];
        return h;
    }, b(c, d);
}
const bull_1 = __importDefault(require(x(0xb2))), Campaign_1 = __importDefault(require(x(0xc3) + x(0xd4) + 'n')), AppError_1 = __importDefault(require(x(0xac) + x(0xdb) + 'r')), CampaignContacts_1 = __importDefault(require(w(0xc3) + x(0xd4) + x(0xdd))), CancelCampaignService = async ({
        campaignId: i,
        tenantId: j
    }) => {
        const z = w, A = x, l = {
                'dvNev': z(0xae) + A(0xd6) + A(0xb3),
                'uVPPv': z(0xb0) + z(0xd7) + z(0xde),
                'DsWtn': function (p, q) {
                    return p(q);
                },
                'TFrMD': function (p, q) {
                    return p(q);
                },
                'oGulW': z(0xdf)
            }, m = {};
        m['id'] = i, m[A(0xe4)] = j;
        const n = {};
        n[A(0xb5)] = m;
        const o = await Campaign_1[z(0xcb)][A(0xc9)](n);
        if (!o)
            throw new AppError_1[(A(0xcb))](l[z(0xad)], -0x1 * -0x211 + 0x1bcf + -0x1c4c);
        try {
            await (0x20e8 + -0x1b77 + 0x1 * -0x571, bull_1[A(0xcb)])(l[z(0xbe)], {
                'redis': {
                    'port': l[A(0xe2)](Number, process[A(0xb6)][A(0xc2) + z(0xbc)]),
                    'host': process[z(0xb6)][z(0xbd) + z(0xc0)],
                    'db': l[A(0xd1)](Number, process[A(0xb6)][z(0xbf) + z(0xd0)]) || -0x73 * 0x9 + 0x1b02 + 0x7a7 * -0x3,
                    'password': process[A(0xb6)][A(0xc2) + z(0xc4)] || undefined
                }
            })[A(0xce)](z(0xc8) + '_' + o['id'] + '*');
            const p = {};
            p[A(0xba)] = null, p[A(0xe3)] = null, p[A(0xd8)] = null, p[A(0xd9)] = 0x0, p[z(0xcc)] = null;
            const q = {};
            q[z(0xb7)] = o['id'], q[z(0xcc)] = null;
            const r = {};
            r[A(0xb5)] = q, await CampaignContacts_1[A(0xcb)][z(0xd5)](p, r);
            const s = {};
            s[A(0xda)] = l[z(0xcf)], await o[z(0xd5)](s);
        } catch (t) {
            throw new AppError_1[(A(0xcb))](A(0xb8) + t, -0x10fe + -0x4 * 0x6b3 + -0x2d5e * -0x1);
        }
    };
exports[w(0xcb)] = CancelCampaignService;