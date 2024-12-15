'use strict';
const K = b, L = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * -0xdd7 + -0x1b95 + 0x79f * 0x2);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const I = b, J = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(I(0x1ab)) / (0x25b3 * -0x1 + 0x835 + 0x9 * 0x347) * (-parseInt(I(0x189)) / (0x4fd * -0x1 + -0x1 * -0x1791 + 0x2 * -0x949)) + -parseInt(I(0x184)) / (0x78 * 0x52 + -0x1e7 * -0x1 + 0x164 * -0x1d) + parseInt(I(0x187)) / (-0x138e * 0x1 + 0x1 * 0x6eb + -0x4f * -0x29) + parseInt(J(0x193)) / (0x1025 + -0x15b7 + 0x597) + -parseInt(J(0x197)) / (0x94c + 0x2eb * 0x5 + 0x1 * -0x17dd) + -parseInt(I(0x183)) / (0x1f * 0x142 + 0x16fa + -0x65 * 0x9d) + parseInt(I(0x192)) / (-0x431 + 0x1847 + -0x140e) * (parseInt(I(0x199)) / (-0x1 * 0x36c + 0xb62 + -0x1 * 0x7ed));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * 0x8fd58 + -0x742a9 + 0x197d79));
var __importDefault = this && this[K(0x19e) + K(0x1a7)] || function (c) {
    const M = L;
    return c && c[M(0x1a5)] ? c : { 'default': c };
};
const o = {};
o[K(0x18e)] = !![], Object[L(0x1b5) + K(0x182)](exports, K(0x1a5), o);
const AppError_1 = __importDefault(require(K(0x1a0) + L(0x18f) + 'r')), socketEmit_1 = __importDefault(require(L(0x195) + K(0x18a) + L(0x1a2))), Contact_1 = __importDefault(require(L(0x19b) + L(0x1ac))), ContactWallet_1 = __importDefault(require(L(0x19b) + K(0x1ac) + L(0x19c))), CreateContactService = async ({
        name: l,
        number: m,
        email: email = '',
        extraInfo: extraInfo = [],
        profilePicUrl: n,
        tenantId: p,
        wallets: q,
        disableBot: r,
        disableCampaign: s
    }) => {
        const N = L, O = L, t = {};
        t[N(0x1b4)] = O(0x1a1) + O(0x1af) + 'CT', t[N(0x1ba)] = O(0x18d), t[O(0x1b3)] = O(0x188), t[N(0x19a)] = O(0x185), t[N(0x18b)] = O(0x1bb), t[O(0x1b6)] = O(0x1bc), t[O(0x1bf)] = N(0x19d), t[O(0x186)] = N(0x1bd) + O(0x196), t[O(0x1b0)] = O(0x1a4), t[N(0x1c0)] = N(0x1a3) + O(0x1b2), t[N(0x1b1)] = N(0x19f) + N(0x198);
        const u = t, v = {};
        v[O(0x1bc)] = m, v[N(0x1be)] = p;
        const w = {};
        w[O(0x18c)] = v;
        const x = await Contact_1[N(0x190)][N(0x1aa)](w);
        if (x)
            throw new AppError_1[(O(0x190))](u[O(0x1b4)]);
        const y = {};
        y[O(0x1bb)] = l, y[N(0x1bc)] = m, y[O(0x19d)] = email, y[O(0x18d)] = extraInfo, y[O(0x1bd) + N(0x196)] = n, y[N(0x1be)] = p, y[N(0x1a4)] = r, y[O(0x1a3) + N(0x1b2)] = s;
        const z = {};
        z[O(0x181)] = [
            u[N(0x1ba)],
            u[O(0x1b3)],
            {
                'association': u[N(0x19a)],
                'attributes': [
                    'id',
                    u[O(0x18b)]
                ]
            }
        ];
        const A = await Contact_1[N(0x190)][O(0x180)](y, z);
        if (q) {
            const D = {};
            D[O(0x1be)] = p, D[N(0x1b8)] = A['id'];
            const E = {};
            E[N(0x18c)] = D, await ContactWallet_1[N(0x190)][O(0x1ae)](E);
            const F = [];
            q[N(0x1ad)](G => {
                const P = N, Q = O, H = {};
                H[P(0x1a6)] = !G['id'] ? G : G['id'], H[Q(0x1b8)] = A['id'], H[P(0x1be)] = p, F[Q(0x1b7)](H);
            }), await ContactWallet_1[O(0x190)][N(0x191)](F);
        }
        const B = {};
        B[N(0x194)] = [
            'id',
            u[O(0x18b)],
            u[O(0x1b6)],
            u[N(0x1bf)],
            u[N(0x186)],
            u[N(0x1b0)],
            u[O(0x1c0)]
        ], B[N(0x181)] = [
            u[N(0x1ba)],
            u[N(0x1b3)],
            {
                'association': u[N(0x19a)],
                'attributes': [
                    'id',
                    u[N(0x18b)]
                ]
            }
        ], await A[N(0x1a9)](B);
        const C = {};
        return C[O(0x1be)] = p, C[O(0x1a8)] = u[N(0x1b1)], C[O(0x1b9)] = A, (0x3b3 * 0x9 + -0x15aa + -0xba1 * 0x1, socketEmit_1[N(0x190)])(C), A;
    };
exports[K(0x190)] = CreateContactService;
function a() {
    const R = [
        '6641466IyRJjN',
        'date',
        '19816740CeUBQS',
        'epORm',
        '../../mode',
        'Wallet',
        'email',
        '__importDe',
        'contact:up',
        '../../erro',
        'ERR_DUPLIC',
        'Emit',
        'disableCam',
        'disableBot',
        '__esModule',
        'walletId',
        'fault',
        'type',
        'reload',
        'findOne',
        '1zQzKqC',
        'ls/Contact',
        'forEach',
        'destroy',
        'ATED_CONTA',
        'NeAsA',
        'DMYZw',
        'paign',
        'qDmew',
        'nLytl',
        'defineProp',
        'NqEFH',
        'push',
        'contactId',
        'payload',
        'Tzorz',
        'name',
        'number',
        'profilePic',
        'tenantId',
        'waQgR',
        'hdYKx',
        'create',
        'include',
        'erty',
        '3885084lTLkkL',
        '2542869ijPSAk',
        'wallets',
        'sGFJa',
        '3035700rxemjd',
        'tags',
        '196874bqqdOd',
        'ers/socket',
        'IBtwg',
        'where',
        'extraInfo',
        'value',
        'rs/AppErro',
        'default',
        'bulkCreate',
        '8IFGQqG',
        '279420VUHqcf',
        'attributes',
        '../../help',
        'Url'
    ];
    a = function () {
        return R;
    };
    return a();
}