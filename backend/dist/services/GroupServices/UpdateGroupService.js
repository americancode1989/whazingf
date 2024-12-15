'use strict';
function a() {
    const C = [
        'fault',
        'tenantId',
        'userId',
        'reload',
        '1610ebFnhg',
        'ls/Group',
        'defineProp',
        'default',
        '3264txHWEo',
        'group',
        'rs/AppErro',
        '../../mode',
        '__esModule',
        'cqADj',
        '560627WCHSDT',
        'cyyin',
        '19761XJNAIM',
        '11770EWLXsA',
        'where',
        '__importDe',
        'UP_FOUND',
        '14046dqIVfz',
        '4cduqto',
        'wokgk',
        '23496EofNIr',
        'isActive',
        'update',
        '72TiySMQ',
        'findOne',
        'attributes',
        'erty',
        'value',
        'ERR_NO_GRO',
        'eJCki',
        '3564jdRbLr',
        '6649725IRPsrk',
        '12731460CTtkkV',
        '../../erro'
    ];
    a = function () {
        return C;
    };
    return a();
}
const x = b, y = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1b7 * 0x7 + 0x223 * 0xd + -0xf00);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(v(0xe5)) / (0x641 * -0x2 + -0x2309 + -0x2f8c * -0x1) + parseInt(w(0xcc)) / (0x932 * 0x1 + 0x2b4 * -0xa + 0x11d8) * (parseInt(v(0xe7)) / (0x1741 + 0x1 * -0x1203 + -0x53b)) + parseInt(w(0xc7)) / (0x7 * 0x379 + -0x229b + -0x6 * -0x1b8) * (parseInt(v(0xd4)) / (0x264b + 0x5 * -0x4ae + 0x4 * -0x3b8)) + parseInt(v(0xc6)) / (0x1f4 * -0x1 + -0x1 * -0x1435 + -0x123b) * (-parseInt(w(0xdb)) / (0x1 * 0x2296 + -0x27b * 0x1 + -0x2014)) + parseInt(v(0xc9)) / (-0x13db + -0x20a + 0x15ed) * (-parseInt(v(0xd3)) / (0xd2a + -0xd * -0x271 + 0x2 * -0x166f)) + parseInt(v(0xd5)) / (-0xccd + -0x26e0 + 0x33b7) + -parseInt(v(0xe8)) / (0x1 * 0x1cbb + -0x2342 * 0x1 + 0x692) * (-parseInt(v(0xdf)) / (-0x6 * -0x633 + 0x1384 + 0x1c55 * -0x2));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1895ff + 0x61 * 0x29b5 + -0x1b2072));
var __importDefault = this && this[x(0xea) + x(0xd7)] || function (c) {
    const z = y;
    return c && c[z(0xe3)] ? c : { 'default': c };
};
const k = {};
k[y(0xd0)] = !![], Object[x(0xdd) + y(0xcf)](exports, x(0xe3), k);
const AppError_1 = __importDefault(require(y(0xd6) + x(0xe1) + 'r')), Group_1 = __importDefault(require(y(0xe2) + x(0xdc))), UpdateGroupService = async ({
        groupData: h,
        groupId: i
    }) => {
        const A = y, B = y, j = {};
        j[A(0xc8)] = B(0xe0), j[B(0xd2)] = A(0xca), j[A(0xe6)] = A(0xd9), j[A(0xe4)] = A(0xd1) + B(0xeb);
        const l = j, {
                group: m,
                isActive: n,
                userId: o,
                tenantId: p
            } = h, q = {};
        q['id'] = i, q[B(0xd8)] = p;
        const r = {};
        r[A(0xe9)] = q, r[A(0xce)] = [
            'id',
            l[A(0xc8)],
            l[B(0xd2)],
            l[A(0xe6)]
        ];
        const s = await Group_1[A(0xde)][A(0xcd)](r);
        if (!s)
            throw new AppError_1[(B(0xde))](l[B(0xe4)], -0x2631 + 0x1 * 0xd6c + 0x5 * 0x545);
        const t = {};
        t[B(0xe0)] = m, t[A(0xca)] = n, t[B(0xd9)] = o, await s[B(0xcb)](t);
        const u = {};
        return u[B(0xce)] = [
            'id',
            l[B(0xc8)],
            l[A(0xd2)],
            l[B(0xe6)]
        ], await s[A(0xda)](u), s;
    };
exports[y(0xde)] = UpdateGroupService;