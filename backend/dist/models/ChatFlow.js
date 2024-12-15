'use strict';
const a4 = b, a7 = b;
(function (c, d) {
    const a2 = b, a3 = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(a2(0x11d)) / (0x5 * 0x39a + 0x1 * 0x11f1 + -0x23f2) * (-parseInt(a2(0xff)) / (-0x5 * -0x74b + 0x1b07 * 0x1 + -0x11 * 0x3bc)) + parseInt(a3(0xe3)) / (-0xd * -0xdb + -0x3 * -0x288 + -0x12b4) * (parseInt(a2(0x122)) / (-0x298 + -0x1 * -0x1ba7 + -0x1 * 0x190b)) + -parseInt(a3(0x10f)) / (0x5 * 0x65 + -0x1 * -0x1d84 + -0x4 * 0x7de) * (parseInt(a3(0x11b)) / (-0x2b6 * -0x9 + -0x4f0 + -0x1370)) + parseInt(a3(0xc7)) / (0x713 + -0x1b * -0x130 + -0x271c) * (-parseInt(a3(0xb0)) / (0x5 * -0xc9 + 0x1c64 + 0x3 * -0x825)) + parseInt(a2(0xb4)) / (0x1 * -0x1bdd + -0xc36 + -0x25c * -0x11) + -parseInt(a2(0x117)) / (0x1300 + -0x27 * -0x3 + -0x136b) + parseInt(a3(0xf8)) / (-0x6b * -0x9 + 0x4b1 * -0x2 + 0x5aa) * (-parseInt(a2(0xdb)) / (0x13 * 0xd7 + 0x79 * 0x2 + -0x10db));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xa34f0 + 0xd46eb + -0x9946f));
var __decorate = this && this[a4(0xe6)] || function (e, f, g, h) {
        const a5 = a4, a6 = a4, j = {
                'LAAMJ': function (o, p) {
                    return o < p;
                },
                'jrJMy': function (o, p) {
                    return o === p;
                },
                'xizuE': a5(0x11f),
                'tzrgr': function (o, p) {
                    return o === p;
                },
                'QBmvx': a5(0x116),
                'LTZtj': function (o, p) {
                    return o - p;
                },
                'rqHbK': function (o, p) {
                    return o >= p;
                },
                'tvqyp': function (o, p) {
                    return o(p);
                },
                'YspQs': function (o, p) {
                    return o > p;
                },
                'AlukT': function (o, p, q, s) {
                    return o(p, q, s);
                },
                'dykgw': function (o, p, q) {
                    return o(p, q);
                },
                'qGIyn': function (o, p) {
                    return o > p;
                }
            };
        var k = arguments[a6(0xf3)], l = j[a5(0x111)](k, -0x9 * 0x23b + -0x1 * 0x4ee + 0x1904) ? f : j[a6(0x10e)](h, null) ? h = Object[a6(0xbc) + a5(0xae) + a6(0xda)](f, g) : h, m;
        if (j[a5(0x10e)](typeof Reflect, j[a6(0xf5)]) && j[a5(0xe2)](typeof Reflect[a6(0xd5)], j[a6(0x127)]))
            l = Reflect[a5(0xd5)](e, f, g, h);
        else {
            for (var n = j[a6(0x101)](e[a5(0xf3)], -0x1e17 * 0x1 + 0x1 * 0x2272 + 0x1 * -0x45a); j[a5(0xdd)](n, 0x75 * 0x4e + 0x1848 + -0x3bee); n--)
                if (m = e[n])
                    l = (j[a6(0x111)](k, -0x1236 + -0x982 * 0x4 + -0x3841 * -0x1) ? j[a5(0xaf)](m, l) : j[a5(0xe0)](k, 0x36 * 0x40 + 0x1a19 + -0x2796) ? j[a5(0xb5)](m, f, g, l) : j[a6(0xf4)](m, f, g)) || l;
        }
        return j[a5(0xc6)](k, -0xfd4 + 0x7b * 0x40 + 0x1 * -0xee9) && l && Object[a5(0xed) + a6(0x114)](f, g, l), l;
    }, __metadata = this && this[a7(0x10c)] || function (d, e) {
        const a8 = a4, a9 = a7, f = {};
        f[a8(0xfc)] = function (h, i) {
            return h === i;
        }, f[a9(0xb8)] = a8(0x11f), f[a8(0xf6)] = a8(0x116);
        const g = f;
        if (g[a9(0xfc)](typeof Reflect, g[a9(0xb8)]) && g[a8(0xfc)](typeof Reflect[a9(0x126)], g[a8(0xf6)]))
            return Reflect[a9(0x126)](d, e);
    }, __importDefault = this && this[a4(0xfa) + a7(0xb3)] || function (c) {
        const aa = a7;
        return c && c[aa(0xea)] ? c : { 'default': c };
    };
const a0 = {};
a0[a4(0x10b)] = !![], Object[a7(0xed) + a7(0x114)](exports, a4(0xea), a0);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x9ad * 0x1 + -0x8ae + 0x1307);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_typescript_1 = require(a7(0xf9) + a4(0xef)), User_1 = __importDefault(require(a7(0xad))), Tenant_1 = __importDefault(require(a7(0x128)));
let ChatFlow = class ChatFlow extends sequelize_typescript_1[a7(0xd0)] {
    get [a4(0xee)]() {
        const ab = a4, ac = a4, c = {
                'WuoPg': function (e, f) {
                    return e === f;
                },
                'bPZhT': ab(0x11f),
                'ZsWGg': ab(0x116),
                'ETIzK': function (e, f) {
                    return e === f;
                },
                'hPuYu': ab(0x100),
                'DXZHe': ac(0xd4),
                'kmdSD': function (e, f) {
                    return e < f;
                },
                'HGabR': function (e, f) {
                    return e === f;
                },
                'lLdIS': function (e, f) {
                    return e === f;
                },
                'oXdBd': function (e, f) {
                    return e - f;
                },
                'vmtGv': function (e, f) {
                    return e >= f;
                },
                'Kerpo': function (e, f) {
                    return e < f;
                },
                'ghkKa': function (e, f) {
                    return e(f);
                },
                'vzzKg': function (e, f) {
                    return e > f;
                },
                'tWEbV': function (e, f, g, h) {
                    return e(f, g, h);
                },
                'LACXM': function (e, f, g) {
                    return e(f, g);
                },
                'eQGOp': ac(0xee),
                'iNSsO': function (e, f) {
                    return e === f;
                },
                'IPvUJ': ab(0x109),
                'BcsMD': function (e, f) {
                    return e !== f;
                },
                'kUWXF': ab(0x107),
                'zfpel': function (e, f) {
                    return e === f;
                },
                'oYGGI': ac(0x108),
                'zypli': ac(0xfb),
                'eVMDH': function (e, f) {
                    return e === f;
                },
                'tKsZO': ac(0xd9),
                'gqbqt': ac(0xb2)
            }, d = this[ab(0xba) + 'ue'](c[ac(0xdc)]);
        if (d) {
            if (c[ac(0xe9)](c[ac(0xe4)], c[ac(0xe4)])) {
                for (const e of d[ab(0xbd)]) {
                    if (c[ac(0xcf)](c[ac(0xd3)], c[ab(0xd3)])) {
                        const {
                                BACKEND_URL: g,
                                PROXY_PORT: h
                            } = g[ac(0x113)], i = h[ac(0xf0)][ab(0xc8)];
                        i[ab(0xf0)][ac(0xb1)] = i, j[ab(0xf0)][ab(0xc8)] = g + ':' + h + ac(0xeb) + i;
                    } else {
                        if (c[ac(0xd1)](e[ac(0xbf)], c[ac(0xac)])) {
                            if (c[ab(0xd6)](c[ac(0xbe)], c[ac(0x11c)])) {
                                if (c[ac(0xc4)](typeof h, c[ac(0x10a)]) && c[ab(0xc4)](typeof i[ac(0x126)], c[ab(0xb7)]))
                                    return j[ac(0x126)](k, l);
                            } else
                                for (const h of e[ac(0x115) + 'ns']) {
                                    if (c[ab(0xbb)](c[ac(0xfe)], c[ab(0xfe)])) {
                                        if (c[ac(0xd6)](h[ac(0xbf)], c[ab(0xf7)]) && h[ac(0xf0)][ac(0xc8)]) {
                                            if (c[ab(0xcf)](c[ab(0x106)], c[ac(0x106)])) {
                                                const j = {};
                                                return j[ac(0xc5)] = j, g && h[ab(0xea)] ? i : j;
                                            } else {
                                                const {
                                                        BACKEND_URL: j,
                                                        PROXY_PORT: k
                                                    } = process[ab(0x113)], l = h[ab(0xf0)][ac(0xc8)];
                                                h[ac(0xf0)][ab(0xb1)] = l, h[ac(0xf0)][ac(0xc8)] = j + ':' + k + ac(0xeb) + l;
                                            }
                                        }
                                    } else {
                                        if (c[ac(0xd1)](f[ac(0xbf)], c[ac(0xac)]))
                                            for (const n of k[ac(0x115) + 'ns']) {
                                                if (c[ac(0xd1)](n[ab(0xbf)], c[ab(0xf7)]) && n[ab(0xf0)][ac(0xc8)]) {
                                                    const {
                                                            BACKEND_URL: q,
                                                            PROXY_PORT: r
                                                        } = n[ac(0x113)], s = n[ab(0xf0)][ac(0xc8)];
                                                    n[ab(0xf0)][ab(0xb1)] = s, n[ab(0xf0)][ac(0xc8)] = q + ':' + r + ab(0xeb) + s;
                                                }
                                            }
                                    }
                                }
                        }
                    }
                }
                return d;
            } else {
                var o = arguments[ab(0xf3)], p = c[ac(0x110)](o, 0x3 * -0x6a7 + -0x2 * 0x824 + 0x2440) ? z : c[ab(0xca)](A, null) ? B = C[ac(0xbc) + ab(0xae) + ab(0xda)](D, E) : F, q;
                if (c[ac(0xc4)](typeof G, c[ac(0x10a)]) && c[ac(0xcc)](typeof H[ab(0xd5)], c[ab(0xb7)]))
                    p = I[ab(0xd5)](J, K, L, M);
                else {
                    for (var r = c[ab(0x105)](N[ab(0xf3)], -0x2 * -0x36 + 0xe0f * 0x2 + 0x1e7 * -0xf); c[ac(0xfd)](r, -0x135 + -0x1cb7 + 0x1dec); r--)
                        if (q = O[r])
                            p = (c[ac(0xd7)](o, -0x1c4c + 0x1b93 + 0xbc) ? c[ac(0xe8)](q, p) : c[ab(0xec)](o, 0xcf3 + -0x20e7 + -0x10d * -0x13) ? c[ab(0x119)](q, P, Q, p) : c[ab(0x112)](q, R, S)) || p;
                }
                return c[ab(0xec)](o, 0x17 * 0x3e + 0x93b * -0x1 + -0xa * -0x5e) && p && T[ac(0xed) + ac(0x114)](U, V, p), p;
            }
        }
        return {};
    }
};
__decorate([
    sequelize_typescript_1[a4(0x118)],
    sequelize_typescript_1[a7(0xb6) + a7(0xc9)],
    sequelize_typescript_1[a4(0x103)],
    __metadata(a7(0xe5) + 'e', String)
], ChatFlow[a7(0x121)], 'id', void (0x10d * -0xd + -0xd1 * -0x19 + 0x10 * -0x6c)), __decorate([
    (0xb27 + 0x2003 + -0x2b2a, sequelize_typescript_1[a4(0x103)])(sequelize_typescript_1[a4(0x124)][a4(0xc3)]),
    __metadata(a7(0xe5) + 'e', String)
], ChatFlow[a7(0x121)], a4(0xd8), void (-0x1c81 + -0x1 * 0x16a + -0x353 * -0x9)), __decorate([
    (-0x26 * -0xa7 + 0x1690 + -0x1a2 * 0x1d, sequelize_typescript_1[a4(0xc1)])({}),
    sequelize_typescript_1[a7(0x102)],
    (0xfe * -0x17 + 0x18ac + -0x1da, sequelize_typescript_1[a7(0x103)])(sequelize_typescript_1[a4(0x124)][a4(0x10d)]),
    __metadata(a4(0xe5) + 'e', Object),
    __metadata(a7(0xc0) + a7(0x125), [])
], ChatFlow[a7(0x121)], a4(0xee), null), __decorate([
    (-0xb * -0x134 + 0xd * 0x29d + -0x5 * 0x971, sequelize_typescript_1[a7(0xc1)])(!![]),
    sequelize_typescript_1[a7(0x103)],
    __metadata(a7(0xe5) + 'e', Boolean)
], ChatFlow[a4(0x121)], a7(0xd2), void (0x217 * 0x4 + -0x16 * -0x97 + -0xaab * 0x2)), __decorate([
    (0xa6 * 0x9 + 0x9bb + -0xf91, sequelize_typescript_1[a7(0xc1)])(![]),
    sequelize_typescript_1[a7(0x103)],
    __metadata(a7(0xe5) + 'e', Boolean)
], ChatFlow[a4(0x121)], a7(0xe1), void (-0x221a + -0x1 * -0x347 + 0x1ed3)), __decorate([
    (-0x1978 + 0x159 + -0xf7 * -0x19, sequelize_typescript_1[a4(0xc1)])(null),
    (-0x2161 + 0x2490 + 0xa3 * -0x5, sequelize_typescript_1[a4(0x103)])(sequelize_typescript_1[a7(0x124)][a4(0xc3)]),
    __metadata(a7(0xe5) + 'e', String)
], ChatFlow[a7(0x121)], a4(0xe7) + 'te', void (-0x17a4 + -0x1c3b + 0x33df)), __decorate([
    (-0x1477 + -0x18b8 + -0x1 * -0x2d2f, sequelize_typescript_1[a7(0x104)])(() => User_1[a7(0xc5)]),
    sequelize_typescript_1[a4(0x103)],
    __metadata(a7(0xe5) + 'e', Number)
], ChatFlow[a4(0x121)], a4(0x120), void (0x1feb * -0x1 + -0x372 + 0xb * 0x337)), __decorate([
    (-0x2120 + 0x1 * 0x1131 + -0xfef * -0x1, sequelize_typescript_1[a4(0xce)])(() => User_1[a7(0xc5)]),
    __metadata(a7(0xe5) + 'e', User_1[a4(0xc5)])
], ChatFlow[a4(0x121)], a4(0xf1), void (0x217d * -0x1 + 0x2 * 0xe43 + 0x4f7)), __decorate([
    (-0xdf0 + -0x68e * -0x3 + -0x2 * 0x2dd, sequelize_typescript_1[a4(0x104)])(() => Tenant_1[a4(0xc5)]),
    sequelize_typescript_1[a7(0x103)],
    __metadata(a4(0xe5) + 'e', Number)
], ChatFlow[a4(0x121)], a7(0x123), void (0x8cf + 0x1ebc + 0x35 * -0xbf)), __decorate([
    (-0x1dea * 0x1 + 0x24f6 * -0x1 + 0x42e0, sequelize_typescript_1[a4(0xce)])(() => Tenant_1[a7(0xc5)]),
    __metadata(a7(0xe5) + 'e', Tenant_1[a4(0xc5)])
], ChatFlow[a4(0x121)], a7(0xf2), void (-0x4 * 0x732 + -0x5f2 * 0x2 + 0xa2b * 0x4)), __decorate([
    sequelize_typescript_1[a7(0xcb)],
    (0xc9a * 0x3 + 0x1 * -0x19b5 + -0xc19 * 0x1, sequelize_typescript_1[a7(0x103)])(sequelize_typescript_1[a7(0x124)][a7(0xdf)](0x1616 + 0x1122 + -0xad * 0x3a)),
    __metadata(a7(0xe5) + 'e', Date)
], ChatFlow[a7(0x121)], a7(0xcd), void (0x2405 + -0x1 * -0x1df9 + -0x41fe)), __decorate([
    sequelize_typescript_1[a7(0xc2)],
    (-0xbfc + 0x1 * 0x193b + 0x1 * -0xd3f, sequelize_typescript_1[a4(0x103)])(sequelize_typescript_1[a4(0x124)][a4(0xdf)](0x25a3 * -0x1 + -0x246d + -0x28e * -0x1d)),
    __metadata(a7(0xe5) + 'e', Date)
], ChatFlow[a7(0x121)], a4(0xde), void (-0x1325 + -0xe5a + 0x23 * 0xf5));
function a() {
    const ad = [
        'ZsWGg',
        'zDLLw',
        'Table',
        'getDataVal',
        'eVMDH',
        'getOwnProp',
        'nodeList',
        'oYGGI',
        'type',
        'design:par',
        'Default',
        'UpdatedAt',
        'TEXT',
        'WuoPg',
        'default',
        'qGIyn',
        '9575153xqVWLC',
        'mediaUrl',
        'ent',
        'HGabR',
        'CreatedAt',
        'lLdIS',
        'createdAt',
        'BelongsTo',
        'BcsMD',
        'Model',
        'ETIzK',
        'isActive',
        'kUWXF',
        'MediaField',
        'decorate',
        'zfpel',
        'Kerpo',
        'name',
        'wnpeD',
        'ptor',
        '12UvWbWY',
        'eQGOp',
        'rqHbK',
        'updatedAt',
        'DATE',
        'YspQs',
        'isDeleted',
        'tzrgr',
        '1523517EUcUPn',
        'IPvUJ',
        'design:typ',
        '__decorate',
        'celularTes',
        'ghkKa',
        'iNSsO',
        '__esModule',
        '/public/',
        'vzzKg',
        'defineProp',
        'flow',
        'typescript',
        'data',
        'user',
        'tenant',
        'length',
        'dykgw',
        'xizuE',
        'ovMJB',
        'DXZHe',
        '4254767RFhpgg',
        'sequelize-',
        '__importDe',
        'odaFx',
        'HMJCq',
        'vmtGv',
        'tKsZO',
        '118126HKdjlv',
        'node',
        'LTZtj',
        'AllowNull',
        'Column',
        'ForeignKey',
        'oXdBd',
        'gqbqt',
        'umUTh',
        'NkXxA',
        'RyjfD',
        'bPZhT',
        'value',
        '__metadata',
        'JSON',
        'jrJMy',
        '40yrVpmd',
        'kmdSD',
        'LAAMJ',
        'LACXM',
        'env',
        'erty',
        'interactio',
        'function',
        '1692850JAPZph',
        'PrimaryKey',
        'tWEbV',
        'eName',
        '350988zuxUKD',
        'zypli',
        '6eaUwlT',
        'freezeTabl',
        'object',
        'userId',
        'prototype',
        '12jnhDWi',
        'tenantId',
        'DataType',
        'amtypes',
        'metadata',
        'QBmvx',
        './Tenant',
        'hPuYu',
        './User',
        'ertyDescri',
        'tvqyp',
        '8vtlJZJ',
        'fileName',
        'mkwUf',
        'fault',
        '12827358JFHINQ',
        'AlukT',
        'AutoIncrem'
    ];
    a = function () {
        return ad;
    };
    return a();
}
const a1 = {};
a1[a7(0x11e) + a7(0x11a)] = !![], ChatFlow = __decorate([(-0x1b82 + -0x224 * -0x8 + 0x3 * 0x376, sequelize_typescript_1[a4(0xb9)])(a1)], ChatFlow), exports[a7(0xc5)] = ChatFlow;