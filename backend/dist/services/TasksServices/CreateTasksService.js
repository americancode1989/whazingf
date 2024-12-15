'use strict';
const u = b, v = b;
(function (c, d) {
    const s = b, t = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(s(0x95)) / (0x177b * -0x1 + 0x1 * 0x20d3 + -0x957) + parseInt(t(0x93)) / (-0x231b + 0x1af * -0x16 + 0x4827) + parseInt(s(0x88)) / (0x463 * 0x4 + -0x3 * 0x22d + 0x1 * -0xb02) + -parseInt(t(0x97)) / (0xbbf * -0x3 + -0xfcd + 0x330e) + -parseInt(s(0x81)) / (0x1d6 + 0x18b2 + -0xb * 0x269) * (parseInt(s(0x87)) / (-0x1217 + 0x7 * -0x17 + 0x12be)) + parseInt(s(0x82)) / (-0x224b + 0x26c + 0x1fe6) + -parseInt(t(0x8d)) / (-0xa63 * -0x2 + -0x1103 + 0x1 * -0x3bb) * (-parseInt(s(0x8a)) / (-0xfad * 0x1 + 0x5b5 * 0x2 + -0x2 * -0x226));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1095c3 + 0x11b64 + 0x28 * 0xb0fb));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x8a7 * 0x3 + -0x1314 + -0x666);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[u(0x7b) + v(0x8f)] || function (c) {
    const w = v;
    return c && c[w(0x98)] ? c : { 'default': c };
};
const k = {};
k[v(0x8c)] = !![], Object[v(0x84) + u(0x7e)](exports, v(0x98), k);
const Tasks_1 = __importDefault(require(u(0x89) + v(0x90))), CreateTasksService = async ({
        name: e,
        description: f,
        limitDate: g,
        owner: h,
        priority: i,
        comments: j,
        userId: l,
        tenantId: m
    }) => {
        const x = u, y = v, n = {};
        n[x(0x92)] = y(0x80);
        const o = n, p = {};
        p[y(0x94)] = e, p[y(0x8e) + 'n'] = f, p[x(0x96)] = g, p[x(0x83)] = h, p[y(0x7f)] = o[y(0x92)], p[y(0x85)] = i, p[y(0x91)] = j, p[x(0x7d)] = l, p[x(0x7c)] = m;
        const q = p, r = await Tasks_1[x(0x8b)][x(0x86)](q);
        return r;
    };
exports[u(0x8b)] = CreateTasksService;
function a() {
    const z = [
        'Zdrne',
        '410648cIOkLF',
        'name',
        '58007yjbqcl',
        'limitDate',
        '4046724GVqvsN',
        '__esModule',
        '__importDe',
        'tenantId',
        'userId',
        'erty',
        'status',
        'pending',
        '5ICqTQv',
        '1620871YCrWvx',
        'owner',
        'defineProp',
        'priority',
        'create',
        '7405176tOqMIK',
        '3738330ZyNxIz',
        '../../mode',
        '202158plQLLg',
        'default',
        'value',
        '464qqseKU',
        'descriptio',
        'fault',
        'ls/Tasks',
        'comments'
    ];
    a = function () {
        return z;
    };
    return a();
}