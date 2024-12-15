'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x254d + -0x24d0 + 0x2e);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const H = [
        '__importDe',
        'rs/AppErro',
        'ers/socket',
        'UClhL',
        'Emit',
        'tenantId',
        '26490EfGMDS',
        'wallets',
        'number',
        'YdEPH',
        '45IWFFbG',
        '390hGLOSY',
        '../../mode',
        '__esModule',
        'contactId',
        'type',
        'contact:up',
        'erty',
        'eagOn',
        'Url',
        '1460862lDNUAq',
        'ls/Contact',
        'value',
        'axBcj',
        'date',
        '2549836WhoBeC',
        'create',
        'Tag',
        '418881IDknUl',
        'name',
        'where',
        'TACT_FOUND',
        'email',
        'tags',
        'lBBNy',
        'attributes',
        'payload',
        '10528620VBGvpb',
        'wUiMx',
        '28WUnPPc',
        'fault',
        'default',
        '../../erro',
        '10846661eAQguO',
        'defineProp',
        'profilePic',
        'ERR_NO_CON',
        '933456gxALBt',
        '../../help',
        'findOne',
        'aNMQV',
        'SVvIo',
        'extraInfo',
        'include',
        'fcxjW',
        'tagId'
    ];
    a = function () {
        return H;
    };
    return a();
}
const C = b, D = b;
(function (c, d) {
    const A = b, B = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(A(0xd4)) / (0x38d + -0x1 * -0x1ec7 + -0x2253) + parseInt(A(0xd9)) / (0x2646 + 0x272 * -0xc + -0x8ec) + parseInt(A(0xdc)) / (-0x1f65 + 0x1027 + 0xf41) * (parseInt(A(0xaf)) / (-0x27d + -0x1 * -0x25d9 + -0x46b * 0x8)) + -parseInt(A(0xcb)) / (0x4bf + 0x487 * 0x1 + -0x941) * (-parseInt(A(0xc6)) / (0xe8 * 0xa + -0x25e4 + 0x1cda)) + -parseInt(B(0xb3)) / (-0x6b4 + -0x115a + 0x1815) + -parseInt(B(0xb7)) / (0x11dd * -0x2 + -0x9c6 + 0xb62 * 0x4) * (parseInt(A(0xca)) / (-0xa93 + 0x5 * 0x48d + -0xc25)) + -parseInt(B(0xad)) / (-0x43 * -0x35 + 0x17 * -0xef + 0x7a4);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x4c613 + -0x8437 * -0x6 + 0x4fe03 * 0x3));
var __importDefault = this && this[C(0xc0) + D(0xb0)] || function (c) {
    const E = D;
    return c && c[E(0xcd)] ? c : { 'default': c };
};
const k = {};
k[D(0xd6)] = !![], Object[C(0xb4) + C(0xd1)](exports, C(0xcd), k);
const AppError_1 = __importDefault(require(D(0xb2) + D(0xc1) + 'r')), socketEmit_1 = __importDefault(require(D(0xb8) + D(0xc2) + C(0xc4))), Contact_1 = __importDefault(require(C(0xcc) + D(0xd5))), ContactTag_1 = __importDefault(require(C(0xcc) + D(0xd5) + D(0xdb))), UpdateContactTagsBotService = async ({
        tagId: j,
        contactId: l,
        tenantId: m
    }) => {
        const F = C, G = C, n = {};
        n[F(0xba)] = F(0xdd), n[G(0xd7)] = F(0xc8), n[F(0xc9)] = G(0xe0), n[F(0xbb)] = F(0xb5) + F(0xd3), n[G(0xd2)] = G(0xbc), n[F(0xbe)] = F(0xe1), n[G(0xc3)] = F(0xc7), n[G(0xe2)] = F(0xb6) + F(0xdf), n[G(0xae)] = F(0xd0) + F(0xd8);
        const o = n, p = {};
        p[G(0xc5)] = m, p[G(0xce)] = l, p[F(0xbf)] = j;
        const q = p, r = {};
        r[F(0xde)] = q;
        const s = await ContactTag_1[G(0xb1)][F(0xb9)](r);
        if (!s) {
            const y = {};
            y[F(0xbf)] = j, y[G(0xce)] = l, y[F(0xc5)] = m;
            const z = y;
            await ContactTag_1[F(0xb1)][F(0xda)](z);
        }
        const t = {};
        t['id'] = l, t[F(0xc5)] = m;
        const u = {};
        u[F(0xde)] = t, u[G(0xab)] = [
            'id',
            o[G(0xba)],
            o[F(0xd7)],
            o[G(0xc9)],
            o[G(0xbb)]
        ], u[F(0xbd)] = [
            o[G(0xd2)],
            o[F(0xbe)],
            {
                'association': o[G(0xc3)],
                'attributes': [
                    'id',
                    o[F(0xba)]
                ]
            }
        ];
        const v = u, w = await Contact_1[F(0xb1)][G(0xb9)](v);
        if (!w)
            throw new AppError_1[(F(0xb1))](o[F(0xe2)], 0x133b + 0x1 * -0x160c + 0x465);
        const x = {};
        return x[G(0xc5)] = m, x[G(0xcf)] = o[G(0xae)], x[F(0xac)] = w, (0xac7 * -0x3 + 0xbff + -0x2 * -0xa2b, socketEmit_1[G(0xb1)])(x), w;
    };
exports[C(0xb1)] = UpdateContactTagsBotService;