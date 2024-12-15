'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1a56 + 0xcbd + -0x25a0);
        let h = e[f];
        return h;
    }, b(c, d);
}
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x178)) / (-0x887 * 0x1 + -0x218b + 0x2a13) * (-parseInt(p(0x18a)) / (-0x1537 * -0x1 + -0x40c + -0x1129)) + parseInt(q(0x17b)) / (0x1b * -0x84 + 0x18b0 + -0x1 * 0xac1) * (-parseInt(q(0x17e)) / (-0x1 * 0x24bb + -0x1e2a + 0x42e9)) + parseInt(q(0x183)) / (0x1a6f + 0x3fd * -0x1 + -0x166d) + -parseInt(q(0x188)) / (-0x67c + -0xe8b + 0x13d * 0x11) + parseInt(p(0x18c)) / (-0x1 * -0x13e7 + 0x944 * 0x1 + -0x1d24) + -parseInt(p(0x187)) / (-0x281 * 0xc + 0x1155 + 0xcbf) * (parseInt(q(0x185)) / (0x1967 * -0x1 + 0xff + 0x1871 * 0x1)) + parseInt(p(0x17d)) / (-0x230d + 0x2ce * 0x1 + 0x1 * 0x2049) * (parseInt(q(0x17f)) / (-0xba5 + 0x2257 + -0x16a7));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x6b * -0xf29 + 0x1b433 * -0x5 + 0x13b004));
function a() {
    const w = [
        'where',
        'GvkhT',
        'fault',
        '58435hjzdcq',
        'rs/AppErro',
        '153ItGDdX',
        'value',
        '188728SeSUOg',
        '1321560Ekllwk',
        'update',
        '4Ajspnv',
        'key',
        '33411xthHKj',
        'sGeneral',
        'default',
        'findOne',
        '../../erro',
        '__esModule',
        '../../mode',
        '__importDe',
        'defineProp',
        'ls/Setting',
        '265082hOskQb',
        'ERR_NO_SET',
        'erty',
        '163179wcxpcL',
        'TING_FOUND',
        '318370KvyGZv',
        '4SlNkHN',
        '154NdNdhe'
    ];
    a = function () {
        return w;
    };
    return a();
}
var __importDefault = this && this[r(0x175) + r(0x182)] || function (c) {
    const t = s;
    return c && c[t(0x173)] ? c : { 'default': c };
};
const k = {};
k[r(0x186)] = !![], Object[r(0x176) + r(0x17a)](exports, r(0x173), k);
const AppError_1 = __importDefault(require(r(0x190) + r(0x184) + 'r')), SettingsGeneral_1 = __importDefault(require(r(0x174) + s(0x177) + s(0x18d))), UpdateSettingService = async ({
        key: g,
        value: h
    }) => {
        const u = r, v = s, i = {};
        i[u(0x181)] = v(0x179) + u(0x17c);
        const j = i, l = {};
        l[v(0x18b)] = g;
        const m = {};
        m[v(0x180)] = l;
        const n = await SettingsGeneral_1[u(0x18e)][v(0x18f)](m);
        if (!n)
            throw new AppError_1[(u(0x18e))](j[u(0x181)], -0xb9d * 0x1 + -0x2006 + 0x19 * 0x1cf);
        const o = {};
        return o[u(0x186)] = h, await n[v(0x189)](o), n;
    };
exports[s(0x18e)] = UpdateSettingService;