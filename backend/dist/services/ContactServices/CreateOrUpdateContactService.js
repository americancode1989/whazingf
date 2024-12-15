'use strict';
function a() {
    const V = [
        'create',
        '1240074KozvQU',
        'whatsapp',
        '664rbdJKd',
        'isUser',
        'DXouT',
        'uXxBK',
        'pushname',
        'update',
        'profilePic',
        'ers/socket',
        'date',
        'fault',
        'ijGqg',
        'erty',
        'defineProp',
        'JZJkQ',
        '../../help',
        'contact:up',
        'zKoKX',
        'quJKH',
        'where',
        'value',
        'payload',
        '30SMhQPm',
        'messengerI',
        'messenger',
        'instagramP',
        'isWAContac',
        'replace',
        'Url',
        '107195Neyerd',
        'telegramId',
        'findOne',
        'number',
        '10319jiXtmh',
        'Emit',
        'type',
        '82206SPfhnH',
        'default',
        '2689885aGmJhm',
        '50tVYFAF',
        '4342240PfNBkG',
        'name',
        'telegram',
        'tenantId',
        '18QFmqPd',
        '__esModule',
        '../../mode',
        '309024mUIvWJ',
        'ls/Contact',
        '__importDe',
        'ZcoLN',
        'WHpMY',
        'instagram',
        'fYeqo',
        'mNgJv'
    ];
    a = function () {
        return V;
    };
    return a();
}
const Q = b, R = b;
(function (c, d) {
    const O = b, P = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(O(0xde)) / (-0x192a + -0x14b2 + -0x2ddd * -0x1) * (parseInt(O(0xe4)) / (0x2705 + 0x605 * 0x6 + -0x4b21)) + -parseInt(P(0xf5)) / (0x2195 + 0x1887 + -0x8b * 0x6b) + -parseInt(O(0xec)) / (-0xe10 + 0x1d * 0x9b + -0x9 * 0x63) + parseInt(O(0xda)) / (-0x1b43 + -0x276 + 0x1dbe) * (parseInt(O(0xe9)) / (-0x1 * 0xfbf + 0x1880 * 0x1 + -0x5 * 0x1bf)) + parseInt(O(0xe5)) / (0x37f + -0xcea + -0xba * -0xd) + parseInt(P(0xf7)) / (-0x4a * 0x59 + 0xb4f + 0xe73) * (parseInt(O(0xe1)) / (0x11da * 0x2 + -0x791 + -0x6 * 0x4af)) + parseInt(P(0xd3)) / (-0x423 + -0x41c + 0x849) * (-parseInt(P(0xe3)) / (-0x21a7 + -0x21e2 + 0x4394));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x21753 + 0x6e32e * -0x2 + 0x1 * 0x172312));
var __importDefault = this && this[Q(0xee) + R(0x100)] || function (c) {
    const S = R;
    return c && c[S(0xea)] ? c : { 'default': c };
};
const E = {};
E[Q(0xd1)] = !![], Object[R(0xca) + R(0xc9)](exports, R(0xea), E);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x7e * -0x3b + 0x7 * -0x2df + -0x829);
        let h = e[f];
        return h;
    }, b(c, d);
}
const socketEmit_1 = __importDefault(require(R(0xcc) + R(0xfe) + Q(0xdf))), Contact_1 = __importDefault(require(Q(0xeb) + Q(0xed))), CreateOrUpdateContactService = async ({
        name: n,
        number: o,
        profilePicUrl: p,
        isGroup: q,
        tenantId: r,
        pushname: s,
        isUser: t,
        isWAContact: u,
        email: email = '',
        telegramId: v,
        instagramPK: w,
        messengerId: x,
        extraInfo: extraInfo = [],
        origem: origem = Q(0xf6)
    }) => {
        const T = Q, U = R, y = {};
        y[T(0xc8)] = function (D, F) {
            return D === F;
        }, y[T(0xcf)] = T(0xf6), y[T(0xcb)] = T(0xe7), y[U(0xfa)] = function (D, F) {
            return D === F;
        }, y[U(0xf3)] = T(0xf1), y[U(0xef)] = function (D, F) {
            return D === F;
        }, y[U(0xf9)] = T(0xd5), y[U(0xf2)] = function (D, F) {
            return D === F;
        }, y[T(0xce)] = function (D, F) {
            return D || F;
        }, y[T(0xf0)] = U(0xcd) + T(0xff);
        const z = y, A = q ? o : o[U(0xd8)](/[^0-9]/g, '');
        let B = null;
        if (z[T(0xc8)](origem, z[U(0xcf)])) {
            const D = {};
            D[U(0xdd)] = A, D[U(0xe8)] = r;
            const F = {};
            F[T(0xd0)] = D, B = await Contact_1[T(0xe2)][T(0xdc)](F);
        }
        if (z[T(0xc8)](origem, z[U(0xcb)]) && v) {
            const G = {};
            G[T(0xdb)] = v, G[T(0xe8)] = r;
            const H = {};
            H[U(0xd0)] = G, B = await Contact_1[T(0xe2)][T(0xdc)](H);
        }
        if (z[U(0xfa)](origem, z[U(0xf3)]) && w) {
            const I = {};
            I[T(0xd6) + 'K'] = w, I[U(0xe8)] = r;
            const J = {};
            J[T(0xd0)] = I, B = await Contact_1[T(0xe2)][T(0xdc)](J);
        }
        if (z[U(0xef)](origem, z[T(0xf9)]) && x) {
            const K = {};
            K[T(0xd4) + 'd'] = x, K[T(0xe8)] = r;
            const L = {};
            L[U(0xd0)] = K, B = await Contact_1[U(0xe2)][T(0xdc)](L);
        }
        if (B) {
            let M = B[T(0xe6)];
            z[U(0xf2)](B[T(0xe6)], B[T(0xdd)]) && n && (M = n);
            const N = {};
            N[U(0xe6)] = M, N[U(0xfd) + T(0xd9)] = p, N[T(0xfb)] = s, N[T(0xf8)] = t, N[T(0xd7) + 't'] = u, N[U(0xdb)] = v, N[U(0xd6) + 'K'] = w, N[U(0xd4) + 'd'] = x, B[U(0xfc)](N);
        } else
            B = await Contact_1[T(0xe2)][U(0xf4)]({
                'name': z[T(0xce)](n, A),
                'number': A,
                'profilePicUrl': p,
                'email': email,
                'isGroup': q,
                'pushname': s,
                'isUser': t,
                'isWAContact': u,
                'tenantId': r,
                'extraInfo': extraInfo,
                'telegramId': v,
                'instagramPK': w,
                'messengerId': x
            });
        const C = {};
        return C[U(0xe8)] = r, C[T(0xe0)] = z[U(0xf0)], C[U(0xd2)] = B, (-0x1387 * 0x2 + 0x12f6 + 0x283 * 0x8, socketEmit_1[T(0xe2)])(C), B;
    };
exports[Q(0xe2)] = CreateOrUpdateContactService;