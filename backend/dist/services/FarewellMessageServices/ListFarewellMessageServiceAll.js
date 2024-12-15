'use strict';
function a() {
    const I = [
        'default',
        '../../mode',
        'DESC',
        '__esModule',
        '343449SSeVta',
        'findOne',
        'ssages',
        '44QvxFXW',
        'admin',
        'xTbnz',
        'lMessage',
        'ls/Farewel',
        'fDcUt',
        'Usuário\x20nã',
        'ls/User',
        'profile',
        'o\x20encontra',
        '1424721EjXVXh',
        '139120XAxWpL',
        'value',
        '112UTYuvX',
        'findAll',
        '__importDe',
        'attributes',
        '205617TAYanU',
        'createdAt',
        'QwVgs',
        'tenantId',
        'FnxrU',
        '6745977rFhwqM',
        'fault',
        'JnAUP',
        'order',
        '6HgwDHg',
        'defineProp',
        'erty',
        '2016064fjVUiN',
        '4425165dVtLEG',
        'farewellMe',
        'where',
        'userId',
        'VwsOw'
    ];
    a = function () {
        return I;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x467 * 0x2 + -0x76b * 0x5 + 0x2e93);
        let h = e[f];
        return h;
    }, b(c, d);
}
const D = b, E = b;
(function (c, d) {
    const B = b, C = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(B(0xc1)) / (0xec * 0x2a + -0x1367 + -0x1350) + parseInt(C(0xd4)) / (0x1296 + -0x15f7 + 0x121 * 0x3) + -parseInt(B(0xc8)) / (0xcef + 0x3 * 0xcd4 + -0x2f * 0x118) * (-parseInt(B(0xb7)) / (0xbfe + -0x1 * 0x2e3 + 0x1 * -0x917)) + -parseInt(B(0xd5)) / (-0x8 * 0x16c + 0x21f * -0x6 + 0x181f) * (-parseInt(C(0xd1)) / (0x1304 + -0xfa9 * -0x1 + 0x3 * -0xb8d)) + -parseInt(C(0xcd)) / (-0x1c58 + 0x5 * -0x71f + 0x3ffa) + -parseInt(C(0xc4)) / (0x14b * -0x5 + -0x1156 + 0x17d5) * (-parseInt(B(0xb4)) / (-0x9e * 0x29 + -0x197e * -0x1 + -0x27)) + parseInt(B(0xc2)) / (0x20c1 + -0x19e * -0x11 + -0x3c35);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x6111e * -0x4 + -0xc6c54 + 0x310014));
var __importDefault = this && this[D(0xc6) + E(0xce)] || function (c) {
    const F = E;
    return c && c[F(0xb3)] ? c : { 'default': c };
};
const k = {};
k[D(0xc3)] = !![], Object[D(0xd2) + D(0xd3)](exports, E(0xb3), k);
const FarewellMessage_1 = __importDefault(require(D(0xb1) + D(0xbb) + D(0xba))), User_1 = __importDefault(require(E(0xb1) + E(0xbe))), ListFarewellMessageServiceAll = async ({
        tenantId: l,
        userId: m
    }) => {
        const G = E, H = D, n = {};
        n[G(0xbc)] = H(0xbf), n[H(0xaf)] = G(0xbd) + G(0xc0) + 'do', n[G(0xcf)] = function (z, A) {
            return z === A;
        }, n[H(0xca)] = H(0xb8), n[G(0xcc)] = H(0xc9), n[H(0xb9)] = G(0xb2);
        const o = n, p = {};
        p['id'] = m;
        const q = {};
        q[H(0xd7)] = p, q[H(0xc7)] = [o[G(0xbc)]];
        const r = await User_1[G(0xb0)][G(0xb5)](q);
        if (!r)
            throw new Error(o[G(0xaf)]);
        const s = {};
        s[G(0xcb)] = l;
        let t = s;
        if (o[G(0xcf)](r[G(0xbf)], o[H(0xca)])) {
            const x = {};
            x[G(0xcb)] = l, t = x;
        } else {
            const y = {};
            y[H(0xcb)] = l, y[G(0xae)] = m, t = y;
        }
        const u = {};
        u[G(0xd7)] = t, u[H(0xd0)] = [[
                o[H(0xcc)],
                o[G(0xb9)]
            ]];
        const v = await FarewellMessage_1[G(0xb0)][G(0xc5)](u), w = {};
        return w[H(0xd6) + G(0xb6)] = v, w;
    };
exports[D(0xb0)] = ListFarewellMessageServiceAll;