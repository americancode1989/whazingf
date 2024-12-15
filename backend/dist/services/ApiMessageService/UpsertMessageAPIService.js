'use strict';
const E = b, F = b;
(function (c, d) {
    const C = b, D = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(C(0x189)) / (-0xcab * -0x1 + -0x3 * 0x712 + 0x88c) + -parseInt(C(0x185)) / (-0x177 * -0x11 + -0x202f + 0x3 * 0x26e) * (-parseInt(D(0x178)) / (0xb * 0x29f + 0x2658 + -0x432a)) + -parseInt(C(0x165)) / (0x1f * -0xee + -0x17bf + 0x3495) * (-parseInt(C(0x183)) / (0x325 * -0x1 + -0xa13 * 0x3 + 0x6f * 0x4d)) + parseInt(C(0x182)) / (-0x1ce * -0x3 + 0xf82 + -0x14e6) * (parseInt(C(0x18b)) / (-0x380 * -0x2 + 0x7be * 0x1 + -0x1 * 0xeb7)) + -parseInt(C(0x16c)) / (-0x1b54 + -0xf4d * -0x2 + -0x2 * 0x19f) + -parseInt(D(0x16f)) / (-0x12c4 + -0x2 * 0x9a7 + 0x261b) * (parseInt(C(0x167)) / (-0xc7 * 0x21 + 0x2038 + -0x22d * 0x3)) + -parseInt(D(0x174)) / (0x1b77 * -0x1 + 0xee4 + 0x26 * 0x55) * (parseInt(D(0x164)) / (-0x3a4 * -0x5 + 0x2ba * 0x7 + 0xc6a * -0x3));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1b263 + -0x2d40 * 0xf + 0x1 * 0x4ff32));
var __importDefault = this && this[E(0x16d) + E(0x181)] || function (c) {
    const G = F;
    return c && c[G(0x168)] ? c : { 'default': c };
};
const k = {};
k[E(0x170)] = !![], Object[F(0x175) + E(0x177)](exports, E(0x168), k);
function a() {
    const J = [
        '12VwxHKA',
        '172cbYigK',
        '../../mode',
        '1070vzygMg',
        '__esModule',
        'reload',
        'mediaUrl',
        'sessionId',
        '190024pkOOgu',
        '__importDe',
        'default',
        '37566TNxyQU',
        'value',
        'messageWA',
        'update',
        'tenantId',
        '6679541BOcaOi',
        'defineProp',
        'age',
        'erty',
        '300fcATOS',
        'findOne',
        'timestamp',
        'ls/ApiMess',
        'lvqTi',
        'ERR_CREATI',
        'create',
        'where',
        'apiConfig',
        'fault',
        '18678yTlPgi',
        '35515dNJjbU',
        'messageId',
        '2972DLtelp',
        'body',
        'number',
        'externalKe',
        '455783pEEPLW',
        'mediaName',
        '973vwfoWK',
        'ack',
        'NG_MESSAGE'
    ];
    a = function () {
        return J;
    };
    return a();
}
const ApiMessage_1 = __importDefault(require(E(0x166) + E(0x17b) + E(0x176))), UpsertMessageAPIService = async ({
        sessionId: h,
        messageId: i,
        body: j,
        ack: l,
        number: m,
        mediaName: n,
        mediaUrl: o,
        timestamp: p,
        externalKey: q,
        messageWA: r,
        apiConfig: s,
        tenantId: t
    }) => {
        const H = F, I = F, u = {};
        u[H(0x17c)] = H(0x17d) + I(0x163);
        const v = u;
        let w;
        const x = {};
        x[I(0x184)] = i, x[H(0x173)] = t;
        const y = {};
        y[H(0x17f)] = x;
        const z = await ApiMessage_1[H(0x16e)][H(0x179)](y);
        if (z) {
            const A = {};
            A[I(0x16b)] = h, A[H(0x184)] = i, A[I(0x186)] = j, A[H(0x18c)] = l, A[H(0x187)] = m, A[H(0x18a)] = n, A[I(0x16a)] = o, A[H(0x17a)] = p, A[H(0x188) + 'y'] = q, A[H(0x171)] = r, A[I(0x180)] = s, A[H(0x173)] = t, await z[H(0x172)](A), w = await z[I(0x169)]();
        } else {
            const B = {};
            B[I(0x16b)] = h, B[I(0x184)] = i, B[I(0x186)] = j, B[I(0x18c)] = l, B[H(0x187)] = m, B[H(0x18a)] = n, B[I(0x16a)] = o, B[I(0x17a)] = p, B[I(0x188) + 'y'] = q, B[H(0x171)] = r, B[H(0x180)] = s, B[I(0x173)] = t, w = await ApiMessage_1[H(0x16e)][H(0x17e)](B);
        }
        if (!w)
            throw new Error(v[I(0x17c)]);
        return w;
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x16e2 + 0x1a23 + -0x1de * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[F(0x16e)] = UpsertMessageAPIService;