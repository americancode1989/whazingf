'use strict';
const s = b, t = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * -0x1bb6 + -0x1 * -0x1e6d + -0x8 * 0x1d);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const x = [
        '176JFnjQb',
        '../../mode',
        'UoKWv',
        'name',
        '3KMqRUA',
        'erty',
        'type',
        'writeFile',
        'isActive',
        'clWGP',
        'MediaField',
        'node',
        '__importDe',
        'promisify',
        '564204UMIExc',
        'public',
        '903081XKVlDp',
        'default',
        '47480HaFhIy',
        'nodeList',
        '11429768KwgnnQ',
        '8SWJqKr',
        '474ZxAyfG',
        'path',
        'media',
        'userId',
        'tenantId',
        'util',
        'defineProp',
        'shaWW',
        '__esModule',
        '7lUHbOj',
        'getTime',
        'EuOlf',
        '606030vRDxZS',
        'value',
        '8143548OMcVrU',
        'join',
        'flow',
        'interactio',
        'ls/ChatFlo',
        'mediaUrl',
        'base64',
        'data',
        'jZUzW',
        '8732655wJGFHq',
        'fileName',
        'split',
        'fault',
        'lpIRA',
        'create'
    ];
    a = function () {
        return x;
    };
    return a();
}
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(q(0x1e1)) / (0x1a1e + -0x2 * -0xc8f + -0x333b) * (parseInt(r(0x1eb)) / (-0xee5 + 0x1bd7 + -0xcf0)) + -parseInt(r(0x1ed)) / (0x2487 + 0x1dc3 + -0x4247) * (parseInt(q(0x1f2)) / (-0x96c + -0x2f * 0x9d + -0x3 * -0xcc1)) + -parseInt(q(0x1ef)) / (0x6df * -0x1 + 0x155 + 0x58f) * (-parseInt(r(0x1f3)) / (0x1 * 0x1b83 + -0x2102 + 0x585)) + -parseInt(q(0x1fc)) / (-0xf0d * -0x2 + 0xb * -0x93 + -0x2 * 0xbe1) * (parseInt(r(0x1f1)) / (-0xd71 + 0xb58 + 0x221)) + parseInt(q(0x1d7)) / (0x158c + 0x5d * 0x47 + -0x2f4e) + -parseInt(r(0x1ff)) / (-0x2 * 0xb2 + -0x1c0f + 0x1d7d * 0x1) * (-parseInt(q(0x1dd)) / (0x1 * -0x1df5 + 0x7 * -0x13a + 0x2696 * 0x1)) + -parseInt(q(0x201)) / (0x27 * -0xab + -0x13a + 0x1b53);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xd * -0xa317 + 0x2 * 0x4ec3a + -0x5820a));
var __importDefault = this && this[s(0x1e9) + t(0x1da)] || function (c) {
    const u = s;
    return c && c[u(0x1fb)] ? c : { 'default': c };
};
const k = {};
k[t(0x200)] = !![], Object[t(0x1f9) + s(0x1e2)](exports, s(0x1fb), k);
const util_1 = require(t(0x1f8)), path_1 = require(t(0x1f4)), fs_1 = require('fs'), ChatFlow_1 = __importDefault(require(t(0x1de) + t(0x1d2) + 'w')), writeFileAsync = (-0x168b + -0x13c3 * 0x1 + 0x2a4e, util_1[t(0x1ea)])(fs_1[t(0x1e4)]), CreateChatFlowService = async ({
        flow: d,
        userId: e,
        tenantId: f,
        name: g,
        isActive: h
    }) => {
        const v = s, w = t, i = {
                'jZUzW': function (m, n) {
                    return m === n;
                },
                'lpIRA': v(0x1e8),
                'shaWW': v(0x1e7),
                'EuOlf': function (m, n, o, p) {
                    return m(n, o, p);
                },
                'clWGP': w(0x1ec),
                'UoKWv': w(0x1d4)
            };
        for await (const m of d[w(0x1f0)]) {
            if (i[w(0x1d6)](m[v(0x1e3)], i[v(0x1db)]))
                for await (const n of m[w(0x1d1) + 'ns']) {
                    if (i[v(0x1d6)](n[w(0x1e3)], i[v(0x1fa)]) && n[v(0x1d5)][v(0x1f5)]) {
                        const o = new Date()[v(0x1fd)]() + '-' + n[v(0x1d5)][w(0x1e0)];
                        await i[v(0x1fe)](writeFileAsync, (0x147b + -0x1350 + -0x12b * 0x1, path_1[w(0x1cf)])(__dirname, '..', '..', '..', i[w(0x1e6)], o), n[w(0x1d5)][v(0x1f5)][w(0x1d9)](i[w(0x1df)])[-0x88a + -0x286 + -0xb11 * -0x1], i[v(0x1df)]), delete n[w(0x1d5)][w(0x1f5)], n[w(0x1d5)][v(0x1d8)] = n[w(0x1d5)][v(0x1e0)], n[v(0x1d5)][v(0x1d3)] = o;
                    }
                }
        }
        const j = {};
        j[v(0x1d0)] = d, j[w(0x1f6)] = e, j[v(0x1f7)] = f, j[v(0x1e0)] = g, j[w(0x1e5)] = h;
        const l = await ChatFlow_1[w(0x1ee)][w(0x1dc)](j);
        return l;
    };
exports[s(0x1ee)] = CreateChatFlowService;