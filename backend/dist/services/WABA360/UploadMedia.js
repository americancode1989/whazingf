'use strict';
const r = b, s = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x113d + -0x1471 * 0x1 + 0x27a1);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x201)) / (-0x5 * -0x481 + -0xef2 + -0x792) + -parseInt(p(0x209)) / (-0x2389 * -0x1 + 0x1 * 0x704 + 0x1 * -0x2a8b) * (parseInt(p(0x1f4)) / (-0x1 * 0x349 + 0x1f8d + 0x1 * -0x1c41)) + parseInt(p(0x203)) / (-0xcb1 + 0x1c57 * -0x1 + -0x94 * -0x47) + parseInt(p(0x1f5)) / (0xbbd + 0x3bf + -0xf77) + parseInt(p(0x1f8)) / (0x246 + 0x1 * 0xbb1 + 0x53 * -0x2b) * (parseInt(q(0x207)) / (0x2504 + 0x1f71 + -0x446e)) + parseInt(p(0x205)) / (0x1 * 0x2183 + 0x2034 + -0x41af) + parseInt(q(0x20d)) / (0x15f2 + 0x15 * 0x16 + -0x17b7) * (-parseInt(p(0x218)) / (0x8a5 + -0x628 + -0x3 * 0xd1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x3ce35 + 0x51ae2 * 0x1 + 0x4f * 0x263f));
function a() {
    const w = [
        'IKxQG',
        '885684Ucgtuc',
        'value',
        '2944076qICfnS',
        'error',
        '7150432XpeoKW',
        'defineProp',
        '203gtnUgC',
        '/v1/media',
        '1804BoOEvt',
        'method',
        'default',
        'data',
        '108018ZoQcLn',
        'axios',
        '../../erro',
        'multipart/',
        'file',
        '__esModule',
        'LOAD_MEDIA',
        's/logger',
        'D360-API-K',
        'API_URL_36',
        'form-data',
        '10ZbsiJW',
        'url',
        'logger',
        'Content-Ty',
        '__importDe',
        '2298hrYaXn',
        '3743740bAOsaa',
        '../../util',
        'post',
        '14214tFOXIW',
        'headers',
        '360_NOT_UP',
        'REYbG',
        'erty',
        'env',
        'fault',
        'rs/AppErro'
    ];
    a = function () {
        return w;
    };
    return a();
}
var __importDefault = this && this[r(0x1f3) + r(0x1fe)] || function (c) {
    const t = s;
    return c && c[t(0x212)] ? c : { 'default': c };
};
const k = {};
k[s(0x202)] = !![], Object[r(0x206) + r(0x1fc)](exports, s(0x212), k);
const axios_1 = __importDefault(require(s(0x20e))), AppError_1 = __importDefault(require(r(0x20f) + s(0x1ff) + 'r')), logger_1 = require(r(0x1f6) + r(0x214)), UploadMedia = async ({
        file: f,
        apiKey: g
    }) => {
        const u = r, v = s, h = {};
        h[u(0x200)] = v(0x1f7), h[u(0x1fb)] = v(0x210) + u(0x217);
        const i = h, j = process[v(0x1fd)][v(0x216) + '0'] + v(0x208);
        try {
            const l = {};
            l[u(0x211)] = f;
            const m = {};
            m[u(0x20a)] = i[v(0x200)], m[u(0x219)] = j, m[u(0x20c)] = l, m[u(0x1f9)] = {}, m[u(0x1f9)][v(0x215) + 'EY'] = g, m[u(0x1f9)][v(0x21b) + 'pe'] = i[u(0x1fb)];
            const n = await (0x1 * 0x355 + -0x110c + 0xdb7, axios_1[u(0x20b)])(m);
            return n[u(0x20c)];
        } catch (o) {
            logger_1[u(0x21a)][v(0x204)](o);
            throw new AppError_1[(u(0x20b))](v(0x1fa) + u(0x213) + ':\x20' + o);
        }
    };
exports[r(0x20b)] = UploadMedia;