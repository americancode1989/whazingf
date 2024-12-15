'use strict';
const s = b, t = b;
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(q(0x81)) / (0x6 * -0xd + 0x63 + -0x4 * 0x5) + parseInt(q(0x73)) / (0x2480 + 0x1 * 0x72f + -0x3 * 0xe8f) * (parseInt(r(0x8a)) / (-0x1abb + 0x48c * -0x7 + -0x341 * -0x12)) + -parseInt(r(0x72)) / (-0x2445 + -0xd94 + 0x31dd) + -parseInt(r(0x86)) / (-0x171c + 0x1 * 0x2663 + -0xf42) + parseInt(r(0x83)) / (0xb7b + 0x9bc * -0x1 + -0x1b9) + -parseInt(r(0x7b)) / (0xada + 0x22b4 + -0x2d87) * (parseInt(r(0x7f)) / (-0x2427 + 0xe5 * 0x28 + 0x1 * 0x67)) + parseInt(q(0x7d)) / (-0x1 * 0x20fe + -0x1 * -0xdc7 + 0x1340);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x257bf + -0x1f864 + -0xba20 * -0x2));
function a() {
    const x = [
        'whatsapp',
        '../errors/',
        'type',
        'erty',
        'EQWCx',
        'CONNECTED',
        'tenantId',
        '191163YGBpHv',
        'fault',
        '1116261jGLdez',
        '../models/',
        '56dMALLY',
        'value',
        '15950kpcLAF',
        '_WAPP_FOUN',
        '480408zpaYhZ',
        'ERR_NO_DEF',
        'DTvWn',
        '136815sitpUB',
        'findOne',
        'default',
        'Whatsapp',
        '27ocJOmc',
        'Fpmhe',
        'QOsJV',
        'AppError',
        'status',
        'where',
        '__esModule',
        'defineProp',
        '__importDe',
        '337724PSQAGn',
        '45026TEMwtD'
    ];
    a = function () {
        return x;
    };
    return a();
}
var __importDefault = this && this[s(0x71) + s(0x7c)] || function (c) {
    const u = s;
    return c && c[u(0x6f)] ? c : { 'default': c };
};
const k = {};
k[t(0x80)] = !![], Object[s(0x70) + s(0x77)](exports, t(0x6f), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2216 + 0x2 * 0xe27 + 0x635 * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const AppError_1 = __importDefault(require(t(0x75) + s(0x8d))), Whatsapp_1 = __importDefault(require(t(0x7e) + s(0x89))), GetDefaultWhatsApp = async (f, g) => {
        const v = t, w = s, h = {};
        h[v(0x8c)] = v(0x79), h[v(0x8b)] = w(0x74), h[v(0x85)] = function (o, p) {
            return o || p;
        }, h[w(0x78)] = w(0x84) + v(0x82) + 'D';
        const i = h, j = {};
        j[v(0x7a)] = f, j[w(0x6d)] = i[v(0x8c)];
        const l = j;
        g ? l['id'] = g : l[w(0x76)] = i[w(0x8b)];
        const m = {};
        m[v(0x6e)] = l;
        const n = await Whatsapp_1[v(0x88)][w(0x87)](m);
        if (i[w(0x85)](!n, !f))
            throw new AppError_1[(w(0x88))](i[v(0x78)]);
        return n;
    };
exports[s(0x88)] = GetDefaultWhatsApp;