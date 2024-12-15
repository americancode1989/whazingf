'use strict';
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(n(0x1d8)) / (-0x4ce + -0x11 * 0x34 + 0x5 * 0x1a7) + parseInt(o(0x1e2)) / (-0x2e0 * 0x6 + -0x1 * -0x9b + -0x1d * -0x93) * (-parseInt(o(0x1f5)) / (0x13c * 0x4 + 0x1 * 0x1106 + -0x15f3 * 0x1)) + parseInt(n(0x1da)) / (0x19c * 0x11 + -0x1 * 0x18df + 0x3 * -0xd3) * (parseInt(o(0x1cd)) / (0xa30 + -0x154 * 0x6 + -0x1 * 0x233)) + -parseInt(o(0x1db)) / (-0x1d51 + 0x43 + 0x1d14) + -parseInt(n(0x1d3)) / (0x60 * 0x30 + 0x986 + -0x1b7f) * (parseInt(o(0x1d0)) / (0x19a6 + 0x23de + -0xa * 0x626)) + -parseInt(n(0x1dd)) / (0x6f3 * 0x1 + -0x3 * 0x83 + -0x561) + -parseInt(o(0x1d9)) / (0x14ab + -0x15 * -0x7 + -0x1534) * (-parseInt(o(0x1cc)) / (0x20e5 + -0x1 * -0x115b + -0x3235));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xe4430 + -0x77c09 * -0x3 + -0x1db * 0xd3b));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x375 * 0x8 + -0x1406 + 0x41 * -0x17);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[p(0x1ef) + q(0x1e0)] || function (c) {
    const r = q;
    return c && c[r(0x1e9)] ? c : { 'default': c };
};
const k = {};
function a() {
    const w = [
        '112doUvfH',
        '1122180rteYsa',
        'logger',
        '3463182mzCMbb',
        'verifyOnli',
        'update',
        'fault',
        'repeat',
        '1482290JiFprL',
        'removeOnFa',
        'RanER',
        'Finalized\x20',
        'emit',
        'default',
        '../models/',
        '__esModule',
        'mplete',
        'Error\x20Veri',
        'neUsers\x20In',
        'getIO',
        'value',
        '__importDe',
        'defineProp',
        'vaNWC',
        'User',
        'info',
        'ers',
        '3SYmSIg',
        'jobId',
        'VerifyOnli',
        '../libs/so',
        'error',
        'cket',
        'erty',
        'removeOnCo',
        'itiated',
        'message',
        'forEach',
        'neUsers',
        '11AzTKnB',
        '221780VflYMq',
        'ogger',
        'isOnline',
        '5394712JrMGGM',
        'AwRqt',
        'findAll',
        '14iqtlBO',
        'fyOnlineUs',
        'every',
        '../utils/l',
        'XnYbg',
        '38920njMoAo',
        '22562530AUIKBQ'
    ];
    a = function () {
        return w;
    };
    return a();
}
k[q(0x1ee)] = !![], Object[q(0x1f0) + p(0x1fb)](exports, p(0x1e9), k);
const User_1 = __importDefault(require(q(0x1e8) + p(0x1f2))), logger_1 = require(q(0x1d6) + q(0x1ce)), socket_1 = require(p(0x1f8) + p(0x1fa)), l = {};
l[q(0x1d5)] = (-0xb * -0x34b + 0x14c0 * 0x1 + 0x1 * -0x38bd) * (0x5 * -0x1 + 0x1f1e + -0x1b31);
const m = {};
m[p(0x1fc) + q(0x1ea)] = !![], m[p(0x1e3) + 'il'] = ![], m[p(0x1f6)] = q(0x1f7) + p(0x1cb), m[q(0x1e1)] = l, exports[p(0x1e7)] = {
    'key': q(0x1f7) + p(0x1cb),
    'options': m,
    async 'handle'() {
        const s = q, t = p, e = {};
        e[s(0x1f1)] = t(0x1f7) + t(0x1ec) + s(0x1fd), e[t(0x1d7)] = t(0x1de) + s(0x1cb), e[s(0x1d1)] = s(0x1e5) + s(0x1f7) + s(0x1cb), e[t(0x1e4)] = t(0x1eb) + s(0x1d4) + t(0x1f4);
        const f = e;
        try {
            logger_1[s(0x1dc)][t(0x1f3)](f[s(0x1f1)]);
            const g = await User_1[t(0x1e7)][t(0x1d2)]();
            g[t(0x1ff)](async i => {
                const u = t, v = t, j = {};
                j[u(0x1cf)] = ![], await i[v(0x1df)](j);
            });
            const h = (0xb * -0x373 + 0x1c48 + 0x9a9, socket_1[s(0x1ed)])();
            h[t(0x1e6)](f[t(0x1d7)]), logger_1[t(0x1dc)][s(0x1f3)](f[s(0x1d1)]);
        } catch (i) {
            const j = {};
            j[t(0x1fe)] = f[s(0x1e4)], j[s(0x1f9)] = i, logger_1[t(0x1dc)][s(0x1f9)](j);
            throw new Error(i);
        }
    }
};