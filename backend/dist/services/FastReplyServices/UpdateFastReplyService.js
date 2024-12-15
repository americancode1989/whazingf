'use strict';
const y = b, z = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2236 + -0x1e55 * 0x1 + 0x422f * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const D = [
        'findOne',
        '../../mode',
        'ERR_NO_FAS',
        '55yfNVeX',
        '11994520xHLCZy',
        'rs/AppErro',
        'userId',
        '10694lSlshX',
        'KTJBD',
        'where',
        'update',
        '18vCbxqx',
        'defineProp',
        'default',
        'AOiKr',
        'attributes',
        'rPjDz',
        '__importDe',
        'T_REPLY_FO',
        'key',
        'media',
        'fKLUv',
        'aXYbx',
        'UND',
        '36EqWhPg',
        '629894HnJhVp',
        'ls/FastRep',
        '../../erro',
        '1242703DAKicv',
        'tenantId',
        'fault',
        'erty',
        'reload',
        'message',
        '13144270AmMfdx',
        '9JPoRqw',
        'value',
        '246IIZTEv',
        '348444NtnYAa',
        '__esModule',
        '8984965VIWgPD'
    ];
    a = function () {
        return D;
    };
    return a();
}
(function (c, d) {
    const w = b, x = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(w(0x1a8)) / (0x1219 * -0x1 + 0x1caa + 0x152 * -0x8) + parseInt(w(0x1bf)) / (-0x244 + -0x200 + 0x446) * (-parseInt(w(0x1b4)) / (-0x1c9 * 0xa + 0x254b + -0x136e)) + parseInt(w(0x1b5)) / (-0x135e + 0x5b * -0x39 + 0x27a5) * (-parseInt(w(0x1bb)) / (0x79 * -0x49 + -0x25a3 + 0x4829)) + parseInt(x(0x1c3)) / (0xca * 0x7 + -0xa28 + -0x12a * -0x4) * (parseInt(w(0x1ab)) / (0x7e4 + 0x4c7 * -0x5 + 0x1006)) + -parseInt(x(0x1bc)) / (0x1 * 0x1b09 + 0x1c * 0x29 + -0x1f7d) + parseInt(x(0x1b2)) / (-0x187f + -0x79c + -0xb * -0x2ec) * (parseInt(x(0x1b1)) / (0x9a6 + 0x5 * 0x4c7 + -0x23 * 0xf5)) + -parseInt(w(0x1b7)) / (0x1bf2 + 0x192d + -0x3514) * (-parseInt(x(0x1a7)) / (-0x18d * -0x11 + 0x1 * 0x1a11 + -0x3462));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x55423 * -0x3 + 0x151af7 + -0x195169));
var __importDefault = this && this[y(0x1c9) + z(0x1ad)] || function (c) {
    const A = y;
    return c && c[A(0x1b6)] ? c : { 'default': c };
};
const k = {};
k[z(0x1b3)] = !![], Object[y(0x1c4) + z(0x1ae)](exports, z(0x1b6), k);
const AppError_1 = __importDefault(require(y(0x1aa) + y(0x1bd) + 'r')), FastReply_1 = __importDefault(require(y(0x1b9) + y(0x1a9) + 'ly')), updateFastReplyService = async ({
        fastReplyData: h,
        fastReplyId: i
    }) => {
        const B = y, C = z, j = {};
        j[B(0x1a5)] = C(0x1cb), j[B(0x1c8)] = B(0x1b0), j[B(0x1a4)] = B(0x1cc), j[B(0x1c0)] = B(0x1be), j[B(0x1c6)] = C(0x1ba) + C(0x1ca) + C(0x1a6);
        const l = j, {
                key: m,
                message: n,
                media: o,
                userId: p,
                tenantId: q
            } = h, r = {};
        r['id'] = i, r[B(0x1ac)] = q;
        const s = {};
        s[C(0x1c1)] = r, s[C(0x1c7)] = [
            'id',
            l[C(0x1a5)],
            l[C(0x1c8)],
            l[C(0x1a4)],
            l[B(0x1c0)]
        ];
        const t = await FastReply_1[B(0x1c5)][C(0x1b8)](s);
        if (!t)
            throw new AppError_1[(C(0x1c5))](l[C(0x1c6)], -0x1858 + -0x1e62 + 0x384e);
        const u = {};
        u[B(0x1cb)] = m, u[B(0x1b0)] = n, u[B(0x1cc)] = o, u[C(0x1be)] = p, await t[B(0x1c2)](u);
        const v = {};
        return v[C(0x1c7)] = [
            'id',
            l[B(0x1a5)],
            l[C(0x1c8)],
            l[C(0x1a4)],
            l[B(0x1c0)]
        ], await t[C(0x1af)](v), t;
    };
exports[z(0x1c5)] = updateFastReplyService;