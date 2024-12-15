'use strict';
const x = b, y = b;
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(v(0x1e3)) / (0x1b01 + -0x181b + 0x1 * -0x2e5) + -parseInt(w(0x1ce)) / (-0x1e61 + -0x2 * 0x65a + 0x2b17) * (-parseInt(w(0x1e9)) / (-0x186 * 0xa + -0xba0 + -0x8f5 * -0x3)) + -parseInt(v(0x1e5)) / (0x1e52 + -0x1 * -0xca1 + -0x17b * 0x1d) * (parseInt(v(0x1de)) / (-0x8 * -0x221 + -0x1 * 0x14d1 + -0x3ce * -0x1)) + parseInt(v(0x1ca)) / (0x1 * -0x156f + 0x2d4 + 0x13 * 0xfb) * (-parseInt(w(0x1c1)) / (0x2361 + 0xf * 0x254 + -0x4646)) + -parseInt(v(0x1b7)) / (-0x147d + 0x1 * -0x679 + 0x1 * 0x1afe) * (-parseInt(v(0x1df)) / (-0xe * -0x257 + -0x2207 + 0x14e)) + parseInt(w(0x1da)) / (0x1 * -0x13ff + -0x135 * -0x1f + 0x8b1 * -0x2) * (-parseInt(v(0x1bc)) / (-0x19b + -0x97a * 0x2 + 0x149a)) + parseInt(w(0x1d9)) / (-0x48b * -0x5 + 0x92c + -0x8f * 0x39);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x5c14e + 0x29875 * 0x5 + 0x5248a));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1fe2 + 0x8f8 + 0x1 * 0x18a0);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[x(0x1d0) + x(0x1ea)] || function (c) {
    const z = x;
    return c && c[z(0x1e7)] ? c : { 'default': c };
};
const o = {};
o[x(0x1d4)] = !![], Object[x(0x1db) + y(0x1c3)](exports, y(0x1e7), o);
function a() {
    const E = [
        'push',
        'wallets',
        '2396qWGRsa',
        '../../mode',
        '__importDe',
        'NkGCp',
        'smQSV',
        'zrBwu',
        'value',
        'destroy',
        'eIvPZ',
        'ERR_NO_CON',
        'findOne',
        '38266464PnGmAT',
        '10YKgVxq',
        'defineProp',
        'TACT_FOUND',
        'ZJTZS',
        '4023995SgwMyj',
        '45RJcswL',
        'bulkCreate',
        'tags',
        'nKKxc',
        '1163155mYFYru',
        'tenantId',
        '4UUKAyi',
        'email',
        '__esModule',
        '../../erro',
        '687FeDODl',
        'fault',
        'tagId',
        '1696152cMtIhN',
        'forEach',
        'extraInfo',
        'attributes',
        'include',
        '6649445exnXKH',
        'contactId',
        'ZgPql',
        'default',
        'name',
        '7983409vdETOM',
        'number',
        'erty',
        'profilePic',
        'ls/Contact',
        'Tag',
        'where',
        'rs/AppErro',
        'arXER',
        '6CTNvZP',
        'Url'
    ];
    a = function () {
        return E;
    };
    return a();
}
const AppError_1 = __importDefault(require(x(0x1e8) + x(0x1c8) + 'r')), Contact_1 = __importDefault(require(y(0x1cf) + y(0x1c5))), ContactTag_1 = __importDefault(require(x(0x1cf) + x(0x1c5) + x(0x1c6))), UpdateContactService = async ({
        tags: h,
        contactId: i,
        tenantId: j
    }) => {
        const A = x, B = x, k = {};
        k[A(0x1c9)] = B(0x1c0), k[A(0x1dd)] = B(0x1c2), k[B(0x1e2)] = A(0x1e6), k[A(0x1d3)] = A(0x1c4) + B(0x1cb), k[B(0x1d6)] = A(0x1b9), k[A(0x1d2)] = A(0x1e1), k[A(0x1be)] = B(0x1cd), k[A(0x1d1)] = B(0x1d7) + B(0x1dc);
        const l = k, m = {};
        m[B(0x1e4)] = j, m[A(0x1bd)] = i;
        const n = {};
        n[A(0x1c7)] = m, await ContactTag_1[A(0x1bf)][A(0x1d5)](n);
        const p = [];
        h[B(0x1b8)](t => {
            const C = B, D = A, u = {};
            u[C(0x1b6)] = !t['id'] ? t : t['id'], u[C(0x1bd)] = i, u[D(0x1e4)] = j, p[D(0x1cc)](u);
        }), await ContactTag_1[B(0x1bf)][A(0x1e0)](p);
        const q = {};
        q['id'] = i, q[B(0x1e4)] = j;
        const r = {};
        r[B(0x1c7)] = q, r[B(0x1ba)] = [
            'id',
            l[A(0x1c9)],
            l[A(0x1dd)],
            l[A(0x1e2)],
            l[A(0x1d3)]
        ], r[B(0x1bb)] = [
            l[B(0x1d6)],
            l[B(0x1d2)],
            {
                'association': l[B(0x1be)],
                'attributes': [
                    'id',
                    l[B(0x1c9)]
                ]
            }
        ];
        const s = await Contact_1[B(0x1bf)][A(0x1d8)](r);
        if (!s)
            throw new AppError_1[(B(0x1bf))](l[B(0x1d1)], 0x456 + -0x5b3 * -0x4 + 0x1 * -0x198e);
        return s;
    };
exports[x(0x1bf)] = UpdateContactService;