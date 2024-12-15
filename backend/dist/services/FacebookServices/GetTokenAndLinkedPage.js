'use strict';
const C = b, D = b;
(function (c, d) {
    const A = b, B = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(A(0x17b)) / (0x3 * -0x7b2 + 0x1 * -0x1bd1 + 0x32e8) * (-parseInt(A(0x1a6)) / (-0x163 * 0x4 + 0x1524 + -0xf96)) + parseInt(B(0x18f)) / (-0x1d2a * 0x1 + -0x2f * 0x81 + -0x1 * -0x34dc) * (parseInt(B(0x16d)) / (-0x1b86 + -0x13df * 0x1 + -0x1 * -0x2f69)) + -parseInt(A(0x19b)) / (-0x1ead + 0x8f * -0x5 + 0x217d) * (-parseInt(B(0x1a3)) / (0x1164 + -0x2 * -0xbaa + -0x2 * 0x1459)) + -parseInt(A(0x169)) / (-0x7 * 0x50e + 0x11b2 + 0x11b7) + -parseInt(B(0x189)) / (-0x2 * -0x86d + -0xa65 + -0x66d) + -parseInt(B(0x165)) / (0x173b + 0x244b + -0x3b7d) + parseInt(B(0x19a)) / (0x4d6 * 0x4 + 0x5 * 0x40 + 0x6 * -0x36d);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * 0x177ee6 + -0x96c9e + -0x2dd1));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x268f + -0x1033 + -0x3 * 0x6fd);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[C(0x1b0) + D(0x191)] || function (c) {
    const E = C;
    return c && c[E(0x19d)] ? c : { 'default': c };
};
const k = {};
k[C(0x16e)] = !![], Object[D(0x199) + D(0x1a9)](exports, D(0x19d), k);
const axios_1 = __importDefault(require(D(0x1a4))), AppError_1 = __importDefault(require(C(0x1a2) + C(0x1b7) + 'r')), Whatsapp_1 = __importDefault(require(D(0x176) + C(0x1a1) + 'p')), SetLogoutLinkedPage_1 = __importDefault(require(D(0x1ae) + D(0x1b1) + 'e')), socket_1 = require(C(0x177) + C(0x17a)), logger_1 = require(C(0x186) + C(0x1bf)), api_version = C(0x19e), baseUrl = D(0x19f) + D(0x1c0) + C(0x190) + api_version, app_id = process[C(0x16f)][C(0x184) + C(0x170)], app_secret = process[C(0x16f)][D(0x184) + D(0x1c1) + D(0x183)], getLongLivedAccessToken = async c => {
        const F = D, G = D, {data: d} = await axios_1[F(0x18e)][G(0x1ba)](baseUrl + (G(0x1b6) + F(0x1b9) + G(0x17c) + F(0x193) + G(0x17f) + F(0x1be)) + app_id + (G(0x198) + G(0x1af)) + app_secret + (G(0x185) + G(0x195)) + c);
        return d[G(0x1bc) + 'en'];
    }, getPermanentPageAccessToken = async (c, d) => {
        const H = C, I = D, {
                data: {data: e}
            } = await axios_1[H(0x18e)][H(0x1ba)](baseUrl + '/' + d + (I(0x172) + H(0x1bc) + I(0x1bb)) + c);
        return e[I(0x16b)] && e[0x1aeb + -0x1498 + -0x653];
    }, getPageInfo = async (e, f) => {
        const J = D, K = C, g = {};
        g[J(0x1ac)] = K(0x1bd);
        const h = g, i = baseUrl + '/' + e + (J(0x172) + J(0x18c) + J(0x180) + 'n=') + f, j = {};
        j[K(0x1ab)] = h[J(0x1ac)], j[J(0x17e)] = i;
        const {
            data: {data: l}
        } = await (0x1b0e + -0x20e4 + 0x3 * 0x1f2, axios_1[J(0x18e)])(j);
        return l;
    }, GetTokenAndLinkedPage = async ({
        whatsapp: i,
        accountId: j,
        userToken: l,
        tenantId: m
    }) => {
        const L = C, M = C, n = {
                'zQkyn': function (o, p, q) {
                    return o(p, q);
                },
                'Lahud': function (o, p) {
                    return o > p;
                },
                'vabFN': L(0x1a7) + M(0x18d) + M(0x168) + M(0x182) + L(0x181) + L(0x178) + L(0x17d) + '.',
                'gWFDg': function (o, p) {
                    return o === p;
                },
                'UwTxb': function (o, p) {
                    return o(p);
                },
                'BLnXG': L(0x192),
                'peQPC': L(0x1b8)
            };
        try {
            const o = (-0x12 * 0x141 + 0x1 * 0x2605 + -0xf73 * 0x1, socket_1[L(0x173)])(), p = await n[L(0x1b3)](getPageInfo, j, l);
            if (n[M(0x188)](p[L(0x16b)], -0x2628 + 0x88 * 0x25 + -0x1 * -0x1281))
                throw new AppError_1[(M(0x18e))](n[L(0x16a)], -0xfc3 * -0x1 + -0xde4 + -0x4f);
            if (n[M(0x171)](p[M(0x16b)], -0x1edb + 0x2 * 0xcd + 0x1d41)) {
                const y = {};
                y[L(0x1aa)] = i, y[L(0x1ad)] = m, await (-0xb7e + -0x9f4 + 0x2 * 0xab9, SetLogoutLinkedPage_1[L(0x18e)])(y);
                return;
            }
            const q = await n[M(0x196)](getLongLivedAccessToken, l), r = await n[M(0x1b3)](getPermanentPageAccessToken, q, j), s = {};
            s[M(0x16c)] = n[L(0x174)], s[L(0x19c)] = r['id'], s[L(0x18a)] = { ...r }, s[M(0x194)] = r[L(0x1bc) + 'en'], s[L(0x18a)][L(0x187)] = j, s[L(0x18a)][L(0x1a0) + L(0x1a5) + L(0x1b4)] = q;
            const t = s, u = {};
            u['id'] = i['id'], u[M(0x1ad)] = m;
            const v = {};
            v[M(0x1b2)] = u, Whatsapp_1[M(0x18e)][M(0x1b8)](t, v);
            const w = {
                    ...i,
                    ...t
                }, x = {};
            x[M(0x179)] = n[M(0x1a8)], x[M(0x18b)] = w, o[L(0x167)](m + (M(0x175) + M(0x197)), x);
        } catch (z) {
            logger_1[M(0x166)][M(0x1b5)](z);
            throw new AppError_1[(M(0x18e))](z, -0x8 * 0x419 + -0xa3 * -0x3b + 0x4b * -0xb);
        }
    };
exports[D(0x18e)] = GetTokenAndLinkedPage;
function a() {
    const N = [
        'status',
        '705148PZBpEa',
        'value',
        'env',
        'PP_ID',
        'gWFDg',
        '/accounts?',
        'getIO',
        'BLnXG',
        ':whatsappS',
        '../../mode',
        '../../libs',
        'ione\x20apena',
        'action',
        '/socket',
        '745151AOBHie',
        'grant_type',
        's\x201\x20página',
        'url',
        'ge_token&c',
        'ccess_toke',
        'so\x20e\x20selec',
        'a\x20o\x20proces',
        'KEY',
        'FACEBOOK_A',
        '&fb_exchan',
        '../../util',
        'accountId',
        'Lahud',
        '12423784pVPAVR',
        'fbObject',
        'session',
        'limit=25&a',
        'enas\x201\x20pág',
        'default',
        '24ePVerI',
        'ok.com/',
        'fault',
        'CONNECTED',
        '=fb_exchan',
        'tokenAPI',
        'ge_token=',
        'UwTxb',
        'ession',
        '&client_se',
        'defineProp',
        '7926950heVzDI',
        '64165svwDOP',
        'fbPageId',
        '__esModule',
        'v16.0',
        'https://gr',
        'long_lived',
        'ls/Whatsap',
        '../../erro',
        '402XgemTY',
        'axios',
        '_access_to',
        '4KcBmxS',
        'Escolha\x20ap',
        'peQPC',
        'erty',
        'whatsapp',
        'method',
        'aPKXm',
        'tenantId',
        './SetLogou',
        'cret=',
        '__importDe',
        'tLinkedPag',
        'where',
        'zQkyn',
        'ken',
        'error',
        '/oauth/acc',
        'rs/AppErro',
        'update',
        'ess_token?',
        'get',
        'en=',
        'access_tok',
        'GET',
        'lient_id=',
        's/logger',
        'aph.facebo',
        'PP_SECRET_',
        '14301468RSXCfs',
        'logger',
        'emit',
        'ina.\x20Refaç',
        '3504368QnDXoR',
        'vabFN',
        'length'
    ];
    a = function () {
        return N;
    };
    return a();
}