'use strict';
const K = b, L = b;
(function (c, d) {
    const I = b, J = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(I(0xb5)) / (-0x9d8 + 0x22c2 * 0x1 + -0x18e9) * (-parseInt(J(0x82)) / (0x4 * -0x9a9 + -0x76 * 0x2 + 0x2792)) + parseInt(J(0x83)) / (0x8de * -0x1 + -0x2 * 0x4a3 + 0x1227) * (parseInt(I(0x96)) / (-0x1 * 0x1d56 + 0x1 * 0x1223 + 0xb37)) + -parseInt(I(0xbf)) / (-0x1 * -0xcff + 0x1 * -0x233f + 0x1645) * (-parseInt(J(0xb4)) / (-0x8eb + 0x132 * -0x19 + 0x26d3 * 0x1)) + -parseInt(J(0x9d)) / (-0x1a * -0x151 + 0x1c59 + -0x1 * 0x3e8c) * (-parseInt(J(0xa6)) / (0x1f52 * -0x1 + -0xe45 + 0xf35 * 0x3)) + -parseInt(J(0x8c)) / (-0x6b * -0x13 + -0x4b * -0x8 + -0xa40) * (-parseInt(I(0xbb)) / (0x82 * 0x49 + 0x21a4 + -0x46ac)) + -parseInt(J(0xae)) / (0x1 * 0x14e + 0x4 * 0x623 + 0x1 * -0x19cf) + parseInt(I(0xac)) / (0x31 * -0x23 + -0x22e8 + 0x1 * 0x29a7) * (-parseInt(J(0x9a)) / (0x1 * -0xd77 + -0x5 * -0xe7 + 0x901 * 0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x26c63 + 0x8f425 + -0x146a * 0x48));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2b3 * 0x2 + -0x67 * 0x56 + 0xed8 * 0x2);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[K(0xb9) + L(0x80)] || function (c) {
    const M = K;
    return c && c[M(0xab)] ? c : { 'default': c };
};
const o = {};
o[K(0x89)] = !![], Object[L(0xaa) + L(0x81)](exports, L(0xab), o);
const AppError_1 = __importDefault(require(L(0xc6) + K(0xad) + 'r')), socketEmit_1 = __importDefault(require(L(0x9c) + L(0xa4) + K(0x7c))), Contact_1 = __importDefault(require(K(0x7e) + K(0xa9))), ContactCustomField_1 = __importDefault(require(L(0x7e) + K(0xa9) + L(0x92) + 'd')), ContactWallet_1 = __importDefault(require(L(0x7e) + L(0xa9) + K(0x8a))), UpdateContactService = async ({
        contactData: k,
        contactId: l,
        tenantId: m
    }) => {
        const N = K, O = L, n = {};
        n[N(0xbc)] = function (D, E) {
            return D === E;
        }, n[O(0xb2)] = O(0xa1), n[O(0xa0)] = N(0xbd), n[N(0x8b)] = N(0xa5), n[N(0x7f)] = N(0x7d) + O(0xbe), n[O(0xb0)] = N(0xc2), n[N(0x91)] = O(0x8d), n[O(0xa7)] = N(0xb6), n[O(0xa8)] = O(0x87) + N(0x88), n[N(0x94)] = N(0xaf), n[N(0x8e)] = O(0x85) + N(0x86), n[N(0x9f)] = O(0xb1) + O(0x90);
        const p = n, {
                email: q,
                name: r,
                number: s,
                extraInfo: t,
                wallets: u,
                disableBot: v,
                disableCampaign: w
            } = k, x = {};
        x['id'] = l, x[N(0xb7)] = m;
        const y = {};
        y[N(0x9b)] = x, y[O(0x9e)] = [
            'id',
            p[O(0xb2)],
            p[N(0xa0)],
            p[O(0x8b)],
            p[O(0x7f)]
        ], y[N(0xba)] = [
            p[N(0xb0)],
            p[N(0x91)],
            {
                'association': p[N(0xa7)],
                'attributes': [
                    'id',
                    p[N(0xb2)]
                ]
            }
        ];
        const z = await Contact_1[O(0xb8)][O(0x98)](y);
        if (!z)
            throw new AppError_1[(O(0xb8))](p[O(0xa8)], 0xabf + -0x2594 + -0x1c69 * -0x1);
        t && (await Promise[O(0xa3)](t[O(0xa2)](async D => {
            const P = N, Q = N, E = { ...D };
            E[P(0xb3)] = z['id'], await ContactCustomField_1[P(0xb8)][Q(0xc3)](E);
        })), await Promise[N(0xa3)](z[O(0xc2)][N(0xa2)](async D => {
            const R = O, S = N, E = t[R(0xc0)](F => F['id'] === D['id']);
            if (p[R(0xbc)](E, -(-0x1 * 0x173f + 0x20d7 + -0x997))) {
                const F = {};
                F['id'] = D['id'];
                const G = {};
                G[R(0x9b)] = F, await ContactCustomField_1[S(0xb8)][R(0xc1)](G);
            }
        })));
        if (u) {
            const D = {};
            D[N(0xb7)] = m, D[O(0xb3)] = l;
            const E = {};
            E[N(0x9b)] = D, await ContactWallet_1[N(0xb8)][O(0xc1)](E);
            const F = [];
            u[N(0x99)](G => {
                const T = N, U = O, H = {};
                H[T(0x97)] = !G['id'] ? G : G['id'], H[T(0xb3)] = l, H[T(0xb7)] = m, F[T(0xc4)](H);
            }), await ContactWallet_1[N(0xb8)][O(0x93)](F);
        }
        const A = {};
        A[O(0xa1)] = r, A[O(0xbd)] = s, A[N(0xa5)] = q, A[O(0xaf)] = v, A[O(0x85) + O(0x86)] = w, await z[N(0x95)](A);
        const B = {};
        B[O(0x9e)] = [
            'id',
            p[O(0xb2)],
            p[O(0xa0)],
            p[N(0x8b)],
            p[N(0x7f)],
            p[N(0x94)],
            p[N(0x8e)]
        ], B[O(0xba)] = [
            p[O(0xb0)],
            p[O(0x91)],
            {
                'association': p[O(0xa7)],
                'attributes': [
                    'id',
                    p[O(0xb2)]
                ]
            }
        ], await z[O(0x84)](B);
        const C = {};
        return C[N(0xb7)] = m, C[N(0x8f)] = p[N(0x9f)], C[N(0xc5)] = z, (0x11 * -0x115 + -0xc49 + -0x6 * -0x51d, socketEmit_1[O(0xb8)])(C), z;
    };
exports[L(0xb8)] = UpdateContactService;
function a() {
    const V = [
        'fault',
        'erty',
        '410474hHnlqA',
        '43509dBNTko',
        'reload',
        'disableCam',
        'paign',
        'ERR_NO_CON',
        'TACT_FOUND',
        'value',
        'Wallet',
        'xYNiO',
        '72gfFPOQ',
        'tags',
        'CZUsF',
        'type',
        'date',
        'Thrmt',
        'CustomFiel',
        'bulkCreate',
        'cIjAh',
        'update',
        '8wcbAPP',
        'walletId',
        'findOne',
        'forEach',
        '7735ZzqWVI',
        'where',
        '../../help',
        '1306501UbFYOU',
        'attributes',
        'psdBi',
        'ypjBT',
        'name',
        'map',
        'all',
        'ers/socket',
        'email',
        '16BOBnXe',
        'AfeoN',
        'XgdOz',
        'ls/Contact',
        'defineProp',
        '__esModule',
        '3756BjOWyR',
        'rs/AppErro',
        '723811EsFCTG',
        'disableBot',
        'kLTDi',
        'contact:up',
        'YmZSe',
        'contactId',
        '1605342bleYaD',
        '1gocWkt',
        'wallets',
        'tenantId',
        'default',
        '__importDe',
        'include',
        '195950ITbufQ',
        'XdJSG',
        'number',
        'Url',
        '5BxJnir',
        'findIndex',
        'destroy',
        'extraInfo',
        'upsert',
        'push',
        'payload',
        '../../erro',
        'Emit',
        'profilePic',
        '../../mode',
        'rezfb'
    ];
    a = function () {
        return V;
    };
    return a();
}