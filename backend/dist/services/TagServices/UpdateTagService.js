'use strict';
const y = b, z = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2 * 0x81a + 0x1885 * -0x1 + -0x1 * -0x8fb);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const w = b, x = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(w(0xaf)) / (-0x2 * -0x7f4 + 0x11 * 0x239 + -0x35b0 * 0x1) * (parseInt(x(0xb0)) / (0xe9d + 0x490 * 0x5 + -0x1 * 0x256b)) + -parseInt(x(0xc0)) / (0x1 * 0x6c2 + 0x8 * 0x4df + -0x1 * 0x2db7) * (parseInt(x(0xd1)) / (-0x46 * 0x4b + -0x106f + 0x24f5)) + parseInt(w(0xad)) / (-0x178 * 0x15 + 0x1 * -0x1eeb + 0x7b9 * 0x8) + parseInt(w(0xbd)) / (-0x221b * -0x1 + 0x6fc * -0x1 + -0x7 * 0x3df) * (parseInt(x(0xac)) / (-0x2431 + 0x7a7 + -0x1c91 * -0x1)) + -parseInt(w(0xb8)) / (0x1 * -0x63d + -0x1b3b + 0x8 * 0x430) * (-parseInt(x(0xba)) / (-0x1a76 + 0x78b + -0x4bd * -0x4)) + -parseInt(w(0xc3)) / (0x250f + 0x1bae + -0x1 * 0x40b3) * (-parseInt(w(0xbb)) / (-0x1970 + 0x86d + 0x110e)) + -parseInt(x(0xcc)) / (0x4c7 * -0x7 + 0x1 * 0x15c + 0x497 * 0x7);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x33447 * -0x1 + 0xa9e * -0x53 + 0x3bf7a));
function a() {
    const D = [
        'tenantId',
        'defineProp',
        'reload',
        'nLDKT',
        '2374872MGAsyB',
        '__esModule',
        'mCKhm',
        'Rcqmp',
        '_FOUND',
        '4gpRmqq',
        'ls/Tag',
        'default',
        '406ATtSjG',
        '1518880rNkQLr',
        'isActive',
        '59mZUKXy',
        '10398LpCiAz',
        'fault',
        'findOne',
        'tag',
        'rXlbE',
        'attributes',
        '../../mode',
        'userId',
        '8tvGkru',
        'update',
        '7443IoiZGV',
        '7073dKBORa',
        'color',
        '37578qRASfu',
        '../../erro',
        'tMGkR',
        '1022547WsfRYa',
        'rs/AppErro',
        'where',
        '6340sqlNjN',
        'ERR_NO_TAG',
        'value',
        '__importDe',
        'erty'
    ];
    a = function () {
        return D;
    };
    return a();
}
var __importDefault = this && this[y(0xc6) + y(0xb1)] || function (c) {
    const A = z;
    return c && c[A(0xcd)] ? c : { 'default': c };
};
const k = {};
k[z(0xc5)] = !![], Object[y(0xc9) + z(0xc7)](exports, z(0xcd), k);
const AppError_1 = __importDefault(require(y(0xbe) + y(0xc1) + 'r')), Tag_1 = __importDefault(require(z(0xb6) + z(0xaa))), UpdateTagService = async ({
        tagData: h,
        tagId: i
    }) => {
        const B = z, C = z, j = {};
        j[B(0xbf)] = B(0xb3), j[C(0xb4)] = C(0xbc), j[B(0xcf)] = C(0xae), j[C(0xcb)] = B(0xb7), j[C(0xce)] = C(0xc4) + C(0xd0);
        const l = j, {
                tag: m,
                color: n,
                isActive: o,
                userId: p,
                tenantId: q
            } = h, r = {};
        r['id'] = i, r[C(0xc8)] = q;
        const s = {};
        s[B(0xc2)] = r, s[B(0xb5)] = [
            'id',
            l[B(0xbf)],
            l[B(0xb4)],
            l[C(0xcf)],
            l[B(0xcb)]
        ];
        const t = await Tag_1[B(0xab)][C(0xb2)](s);
        if (!t)
            throw new AppError_1[(B(0xab))](l[B(0xce)], -0x4 * -0x8c2 + -0x7dd + -0x1997);
        const u = {};
        u[C(0xb3)] = m, u[B(0xbc)] = n, u[C(0xae)] = o, u[C(0xb7)] = p, await t[C(0xb9)](u);
        const v = {};
        return v[B(0xb5)] = [
            'id',
            l[C(0xbf)],
            l[C(0xb4)],
            l[C(0xcf)],
            l[C(0xcb)]
        ], await t[B(0xca)](v), t;
    };
exports[y(0xab)] = UpdateTagService;