'use strict';
const I = b, J = b;
function a() {
    const N = [
        'defineProp',
        '7381212qVhDGR',
        'setDate',
        '9731841tgfujw',
        '134012NctYDl',
        '8suUrfe',
        'where',
        'getDate',
        '58035960zQPjal',
        'default',
        '5UgbwvU',
        'limitDate',
        'cnUav',
        'gte',
        'delayed',
        '../../mode',
        'finished',
        'tenantId',
        '__importDe',
        'sequelize',
        'fault',
        '3xNmUBe',
        '__esModule',
        'count',
        'status',
        '1820958zkFywj',
        'venceHoje',
        'ls/Tasks',
        'value',
        'erty',
        'setHours',
        '17201088sjiRfs',
        'ncCRv',
        '225740eWtpsv',
        'owner'
    ];
    a = function () {
        return N;
    };
    return a();
}
(function (c, d) {
    const G = b, H = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(G(0x1dc)) / (-0x1c74 + 0xb01 + 0x2 * 0x8ba) + -parseInt(H(0x1d6)) / (0x107 * -0x24 + -0xa97 + 0x2f95) + parseInt(H(0x1ca)) / (0x1a2e + 0xa55 + -0x40 * 0x92) * (-parseInt(H(0x1d9)) / (0x1 * 0xbea + -0x179c + 0xbb6)) + -parseInt(G(0x1bf)) / (-0x606 * -0x1 + -0x11b3 * -0x1 + 0x1 * -0x17b4) * (-parseInt(H(0x1ce)) / (-0xd75 + 0x251c + 0x107 * -0x17)) + -parseInt(G(0x1db)) / (0x8 * -0x2e3 + 0x3 * 0xd01 + -0xfe4) * (parseInt(G(0x1ba)) / (0x2 * 0xb1d + -0x2 * 0x183 + -0x132c)) + -parseInt(G(0x1d4)) / (-0x2455 + -0x7c * 0x1a + 0x6 * 0x829) + parseInt(G(0x1bd)) / (-0x57e * -0x3 + -0x1 * 0xb51 + -0x13 * 0x45);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xb * -0x169f1 + -0x2ae8f * -0x1 + 0x34231 * -0x1));
var __importDefault = this && this[I(0x1c7) + I(0x1c9)] || function (c) {
    const K = J;
    return c && c[K(0x1cb)] ? c : { 'default': c };
};
const k = {};
k[I(0x1d1)] = !![], Object[J(0x1d8) + I(0x1d2)](exports, J(0x1cb), k);
const sequelize_1 = require(J(0x1c8)), Tasks_1 = __importDefault(require(J(0x1c4) + J(0x1d0))), GetTaskSummaryService = async ({
        tenantId: n,
        owner: o
    }) => {
        const L = I, M = I, p = {};
        p[L(0x1d5)] = function (E, F) {
            return E + F;
        }, p[L(0x1c1)] = M(0x1c5);
        const q = p, r = new Date();
        r[M(0x1d3)](-0x410 + -0x1 * -0xa09 + -0x5f9, 0xe26 + -0x1 * -0x1b2f + -0x2955 * 0x1, -0x92b * 0x1 + 0x144e + -0xb23, -0x1 * -0x4b3 + 0x1 * 0xb2 + 0x1 * -0x565);
        const s = new Date(r);
        s[L(0x1da)](q[M(0x1d5)](r[L(0x1bc)](), 0x24aa + -0x224b * 0x1 + 0x12f * -0x2));
        const t = { [sequelize_1['Op']['lt']]: r }, u = { [sequelize_1['Op']['ne']]: q[L(0x1c1)] }, v = {};
        v[M(0x1c6)] = n, v[M(0x1d7)] = o, v[M(0x1c0)] = t, v[M(0x1cd)] = u;
        const w = {};
        w[L(0x1bb)] = v;
        const x = await Tasks_1[M(0x1be)][L(0x1cc)](w), y = {
                [sequelize_1['Op'][L(0x1c2)]]: r,
                [sequelize_1['Op']['lt']]: s
            }, z = { [sequelize_1['Op']['ne']]: q[M(0x1c1)] }, A = {};
        A[L(0x1c6)] = n, A[L(0x1d7)] = o, A[L(0x1c0)] = y, A[M(0x1cd)] = z;
        const B = {};
        B[L(0x1bb)] = A;
        const C = await Tasks_1[M(0x1be)][L(0x1cc)](B), D = {};
        return D[M(0x1c3)] = x, D[M(0x1cf)] = C, D;
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xb * 0x1de + 0x23a1 + -0xd5d);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[I(0x1be)] = GetTaskSummaryService;