'use strict';
const r = b, s = b;
function a() {
    const w = [
        'AppError',
        'fault',
        '3196854HoGHEQ',
        'defineProp',
        'value',
        '__importDe',
        '525076HKOLaq',
        '../errors/',
        'erty',
        '../models/',
        'TING_FOUND',
        '433222NORWmj',
        '2689722dmvGIK',
        'aLZXg',
        'YXhYt',
        'ERR_NO_SET',
        '__esModule',
        'SettingsGe',
        '6kvszBP',
        'findOne',
        'key',
        '1027765LeoSzf',
        '3nyRJRH',
        'default',
        'neral',
        'where',
        '36904BYFbeE',
        '367769RJNKYl'
    ];
    a = function () {
        return w;
    };
    return a();
}
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x78)) / (-0x764 + 0x1faf * -0x1 + -0x138a * -0x2) + parseInt(p(0x84)) / (0x13a5 * -0x1 + -0x21 * -0xdc + -0x3 * 0x2e7) * (parseInt(q(0x73)) / (0x3 * 0x64b + -0x1 * 0x253c + 0x125e * 0x1)) + parseInt(q(0x7f)) / (-0x1ecd + 0x1163 * -0x1 + 0x3034) + -parseInt(q(0x72)) / (-0x2 * 0x565 + -0x1 * 0x134f + -0x2 * -0xf0f) * (-parseInt(p(0x8b)) / (-0x17 * 0x13 + -0x13a * 0x1 + 0x2f5 * 0x1)) + parseInt(q(0x85)) / (0xb * -0x313 + 0x541 * -0x2 + -0x7 * -0x656) + parseInt(q(0x77)) / (0x679 * -0x5 + -0x1e52 + 0x3eb7) + -parseInt(q(0x7b)) / (-0x10d5 * 0x1 + 0xc0b * -0x1 + 0x1ce9);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x47f6e + -0x248aa * -0x2 + -0x5b80d));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x74 * 0x3 + -0x1764 + -0x20b * -0xb);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[r(0x7e) + s(0x7a)] || function (c) {
    const t = r;
    return c && c[t(0x89)] ? c : { 'default': c };
};
const k = {};
k[s(0x7d)] = !![], Object[s(0x7c) + s(0x81)](exports, s(0x89), k);
const SettingsGeneral_1 = __importDefault(require(r(0x82) + r(0x8a) + r(0x75))), AppError_1 = __importDefault(require(s(0x80) + s(0x79))), CheckSettingsGeneral = async (f, g = null) => {
        const u = s, v = s, h = {};
        h[u(0x86)] = function (n, o) {
            return n && o;
        }, h[v(0x87)] = v(0x88) + v(0x83);
        const i = h, j = {};
        j[u(0x71)] = f;
        const l = {};
        l[v(0x76)] = j;
        const m = await SettingsGeneral_1[v(0x74)][v(0x8c)](l);
        if (i[u(0x86)](!m, !g))
            throw new AppError_1[(v(0x74))](i[v(0x87)], -0xd76 + 0x1c09 + 0xcff * -0x1);
        return m?.[u(0x7d)] || g;
    };
exports[s(0x74)] = CheckSettingsGeneral;