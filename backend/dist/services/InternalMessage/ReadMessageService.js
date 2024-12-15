'use strict';
const H = b, I = b;
(function (c, d) {
    const F = b, G = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(F(0x165)) / (0x34c * -0x5 + 0x1 * -0x91d + 0xe2 * 0x1d) * (-parseInt(G(0x16f)) / (0x2231 + -0x24e9 + -0x2ba * -0x1)) + parseInt(G(0x164)) / (0x1 * -0x2cb + -0x57d + -0x1 * -0x84b) * (parseInt(F(0x17d)) / (0x13b3 + -0x1b72 + -0x7c3 * -0x1)) + -parseInt(F(0x188)) / (0x187f + 0x25a * 0x3 + -0x1f88) + parseInt(F(0x179)) / (0xd0 * -0x16 + 0x1d62 + -0xc4 * 0xf) * (parseInt(F(0x16b)) / (-0x19c8 + -0x1ebd + -0x292 * -0x16)) + -parseInt(G(0x18f)) / (-0x14ef * -0x1 + 0x1942 + -0x2e29) + parseInt(G(0x185)) / (0x1f9 * -0xd + -0x1 * 0x1d82 + 0x3730) * (-parseInt(G(0x167)) / (-0x2 * -0xa21 + -0x28b + 0x389 * -0x5)) + parseInt(G(0x181)) / (-0x18f3 + 0x851 + 0x58f * 0x3);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1a61 * 0x1 + -0x2e3 * -0x1c9 + -0x21b48 * 0x1));
var __importDefault = this && this[H(0x173) + I(0x190)] || function (c) {
    const J = H;
    return c && c[J(0x186)] ? c : { 'default': c };
};
const k = {};
k[H(0x17e)] = !![], Object[H(0x168) + I(0x184)](exports, H(0x186), k);
const AppError_1 = __importDefault(require(I(0x183) + H(0x18c) + 'r')), InternalMessage_1 = __importDefault(require(H(0x178) + I(0x18a) + I(0x17f))), ReadMessageGroups_1 = __importDefault(require(H(0x178) + H(0x170) + H(0x189))), UsersGroups_1 = __importDefault(require(H(0x166) + I(0x175) + I(0x191))), ReadMessageService = async ({
        senderId: l,
        userId: m,
        isGroup: n
    }) => {
        const K = I, L = I, o = {};
        o[K(0x177)] = function (q, r) {
            return q <= r;
        }, o[K(0x174)] = function (q, r) {
            return q === r;
        }, o[L(0x169)] = L(0x17b) + L(0x193);
        const p = o;
        if (p[K(0x174)](n, ![])) {
            const q = {};
            q[L(0x172)] = !![];
            const r = {};
            r[K(0x16a)] = l, r[K(0x18b)] = m;
            const s = {};
            s[K(0x176)] = r, await InternalMessage_1[L(0x16d)][L(0x16e)](q, s);
        } else {
            const t = {};
            t[K(0x18e)] = l, t[K(0x187)] = m;
            const u = {};
            u[K(0x176)] = t;
            const v = await UsersGroups_1[L(0x16d)][L(0x182)](u);
            !v && new AppError_1[(K(0x16d))](p[K(0x169)], -0x69a + 0x1b * 0xee + -0x10ec);
            const w = {};
            w[L(0x18e)] = v[K(0x18e)];
            const x = {};
            x[K(0x176)] = w;
            const y = await InternalMessage_1[L(0x16d)][K(0x17a)](x);
            y[L(0x180)](async z => {
                const M = K, N = K, A = {};
                A[M(0x17c) + N(0x171)] = z['id'], A[M(0x192) + 'd'] = v['id'];
                const B = {};
                B[N(0x176)] = A;
                const C = await ReadMessageGroups_1[N(0x16d)][N(0x17a)](B);
                if (p[M(0x177)](C[N(0x16c)], -0x1d1d + -0x87d * 0x4 + 0x3f11)) {
                    const D = {};
                    D[M(0x17c) + M(0x171)] = z['id'], D[M(0x192) + 'd'] = v['id'];
                    const E = D;
                    await ReadMessageGroups_1[M(0x16d)][M(0x18d)](E);
                }
            });
        }
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2276 + -0x5 * 0x25b + -0x154b);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[H(0x16d)] = ReadMessageService;
function a() {
    const O = [
        'userId',
        '360935HUGLVZ',
        'sageGroups',
        'ls/Interna',
        'receiverId',
        'rs/AppErro',
        'create',
        'groupId',
        '2776448KYLCAo',
        'fault',
        'Groups',
        'userGroupI',
        '_NOT_FOUND',
        '919233DsggjE',
        '5sTNCKS',
        './../../mo',
        '1502190JlLDDZ',
        'defineProp',
        'wGjfK',
        'senderId',
        '147QYZRAh',
        'length',
        'default',
        'update',
        '73994BptdAZ',
        'ls/ReadMes',
        'ssageId',
        'read',
        '__importDe',
        'lGKIQ',
        'dels/Users',
        'where',
        'LRTtt',
        '../../mode',
        '34956kUSLYo',
        'findAll',
        'USER_GROUP',
        'internalMe',
        '4BUwROB',
        'value',
        'lMessage',
        'forEach',
        '3287383cCFXbX',
        'findOne',
        '../../erro',
        'erty',
        '18JnScCU',
        '__esModule'
    ];
    a = function () {
        return O;
    };
    return a();
}