'use strict';
var a3 = b, a6 = b;
(function (c, d) {
    var a1 = b, a2 = b, e = c();
    while (!![]) {
        try {
            var f = -parseInt(a1(0x1ce)) / (-0x1 * 0x796 + -0x26c8 + 0x2e5f) + -parseInt(a2(0x1e5)) / (0x394 + -0x188a + 0x14f8) * (-parseInt(a1(0x1e3)) / (0x2d * 0x61 + -0xa * -0x9c + -0x1722)) + -parseInt(a2(0x202)) / (0x13d6 + -0x3 * -0x4cd + 0x1 * -0x2239) + parseInt(a2(0x1c5)) / (-0x23 * 0x1f + 0x1680 + 0x1d3 * -0xa) * (parseInt(a1(0x1cb)) / (-0x2 * 0x67 + -0xbf7 + 0xccb)) + -parseInt(a2(0x20d)) / (-0xff + -0x46a * 0x3 + -0xe44 * -0x1) + parseInt(a2(0x1f5)) / (0x1 * -0x230b + -0xada * 0x2 + -0xf * -0x3c9) + -parseInt(a2(0x1f2)) / (-0x15b * -0x1 + 0x1622 + -0x1774) * (-parseInt(a2(0x20c)) / (-0x1edd + 0xdb7 * -0x1 + 0x2c9e * 0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x13 * -0x6e5 + -0x7b500 + 0xbf4bf));
var __decorate = this && this[a3(0x208)] || function (e, f, g, h) {
        var a4 = a3, a5 = a3, j = {
                'jipgb': function (o, p) {
                    return o < p;
                },
                'TTLVM': function (o, p) {
                    return o === p;
                },
                'KjWif': function (o, p) {
                    return o === p;
                },
                'FeiZk': a4(0x1ea),
                'REJdg': function (o, p) {
                    return o === p;
                },
                'KYXuT': a5(0x206),
                'qcpdt': function (o, p) {
                    return o - p;
                },
                'MwqpS': function (o, p) {
                    return o >= p;
                },
                'WySQx': function (o, p) {
                    return o(p);
                },
                'KItAH': function (o, p) {
                    return o > p;
                },
                'QqImd': function (o, p, q, s) {
                    return o(p, q, s);
                },
                'ezkla': function (o, p, q) {
                    return o(p, q);
                }
            }, k = arguments[a4(0x1f4)], l = j[a5(0x1fd)](k, 0x2010 + 0x18f7 + -0xb2 * 0x52) ? f : j[a5(0x1fc)](h, null) ? h = Object[a4(0x1dd) + a5(0x209) + a5(0x1fb)](f, g) : h, m;
        if (j[a4(0x1e9)](typeof Reflect, j[a5(0x1d2)]) && j[a4(0x1c4)](typeof Reflect[a5(0x1ec)], j[a4(0x1de)]))
            l = Reflect[a5(0x1ec)](e, f, g, h);
        else {
            for (var n = j[a4(0x1f6)](e[a5(0x1f4)], -0x23c7 + -0x85f * 0x1 + -0x2c27 * -0x1); j[a5(0x1d3)](n, -0x1e38 + -0x1c1c + 0x3a54); n--)
                if (m = e[n])
                    l = (j[a5(0x1fd)](k, -0xb03 + -0xe89 + 0x198f) ? j[a5(0x201)](m, l) : j[a5(0x203)](k, 0xaf1 * 0x1 + -0x269f + 0x1bb1) ? j[a4(0x1ee)](m, f, g, l) : j[a5(0x1cc)](m, f, g)) || l;
        }
        return j[a4(0x203)](k, 0x10 * 0x22f + 0x26 * 0xef + -0x43 * 0x10d) && l && Object[a5(0x1ed) + a5(0x1df)](f, g, l), l;
    }, __metadata = this && this[a3(0x1d5)] || function (d, e) {
        var a7 = a6, a8 = a6, f = {};
        f[a7(0x1e2)] = function (h, i) {
            return h === i;
        }, f[a8(0x1d4)] = a8(0x1ea), f[a7(0x1f3)] = function (h, i) {
            return h === i;
        }, f[a7(0x1c3)] = a8(0x206);
        var g = f;
        if (g[a8(0x1e2)](typeof Reflect, g[a8(0x1d4)]) && g[a8(0x1f3)](typeof Reflect[a7(0x1c7)], g[a7(0x1c3)]))
            return Reflect[a8(0x1c7)](d, e);
    }, __importDefault = this && this[a3(0x1d0) + a3(0x1f8)] || function (c) {
        var a9 = a3;
        return c && c[a9(0x1dc)] ? c : { 'default': c };
    }, a0 = {};
a0[a3(0x1e0)] = !![], Object[a6(0x1ed) + a3(0x1df)](exports, a6(0x1dc), a0);
const sequelize_typescript_1 = require(a6(0x1f7) + a3(0x20a)), Tenant_1 = __importDefault(require(a6(0x1e8))), User_1 = __importDefault(require(a6(0x1ca))), QueueIntegrations_1 = __importDefault(require(a6(0x1d8) + a6(0x1db)));
function b(c, d) {
    var e = a();
    return b = function (f, g) {
        f = f - (-0xbe + -0x881 + 0x1 * 0xb02);
        var h = e[f];
        return h;
    }, b(c, d);
}
let Queue = class Queue extends sequelize_typescript_1[a6(0x1c9)] {
};
__decorate([
    sequelize_typescript_1[a3(0x1ef)],
    sequelize_typescript_1[a3(0x205) + a6(0x1eb)],
    sequelize_typescript_1[a3(0x1e7)],
    __metadata(a3(0x1d6) + 'e', Number)
], Queue[a6(0x1f0)], 'id', void (-0x1e59 + -0x1c5f + 0x4 * 0xeae)), __decorate([
    sequelize_typescript_1[a6(0x1e7)],
    __metadata(a3(0x1d6) + 'e', String)
], Queue[a3(0x1f0)], a3(0x1ff), void (0x6b * 0x5d + -0x12d4 + -0x140b)), __decorate([
    (-0x22e0 + -0x246e * -0x1 + -0x18e, sequelize_typescript_1[a6(0x1cd)])(!![]),
    sequelize_typescript_1[a3(0x1e7)],
    __metadata(a3(0x1d6) + 'e', Boolean)
], Queue[a3(0x1f0)], a3(0x207), void (-0x5 * -0x419 + -0x5c * 0x4 + -0x1 * 0x130d)), __decorate([
    sequelize_typescript_1[a6(0x1e7)],
    __metadata(a3(0x1d6) + 'e', String)
], Queue[a3(0x1f0)], a3(0x1f1), void (0x20 * 0x125 + 0x257 * -0x1 + -0x2249)), __decorate([
    sequelize_typescript_1[a3(0x1d1)],
    __metadata(a3(0x1d6) + 'e', Date)
], Queue[a6(0x1f0)], a6(0x1c6), void (-0x1 * -0x2447 + 0x5 * -0xfd + -0x23d * 0xe)), __decorate([
    sequelize_typescript_1[a6(0x20b)],
    __metadata(a6(0x1d6) + 'e', Date)
], Queue[a3(0x1f0)], a6(0x1fa), void (0xb * 0x6b + 0x16a * -0x1b + 0x2195)), __decorate([
    (0x557 * -0x1 + 0x1 * -0x10bf + -0x101 * -0x16, sequelize_typescript_1[a3(0x1fe)])(() => User_1[a3(0x1d9)]),
    sequelize_typescript_1[a3(0x1e7)],
    __metadata(a6(0x1d6) + 'e', Number)
], Queue[a6(0x1f0)], a3(0x1c8), void (0x5 * 0x289 + 0x1464 * -0x1 + 0x4f * 0x19)), __decorate([
    (0xdf1 + -0x1f0f * -0x1 + -0x2d00, sequelize_typescript_1[a3(0x1cf)])(() => User_1[a3(0x1d9)]),
    __metadata(a6(0x1d6) + 'e', User_1[a3(0x1d9)])
], Queue[a3(0x1f0)], a3(0x204), void (0x1f72 + 0x9bc + -0x292e)), __decorate([
    (0x1 * -0x987 + -0x1716 + 0x209d, sequelize_typescript_1[a6(0x1fe)])(() => Tenant_1[a3(0x1d9)]),
    sequelize_typescript_1[a6(0x1e7)],
    __metadata(a3(0x1d6) + 'e', Number)
], Queue[a3(0x1f0)], a3(0x200), void (0x2 * 0xbbb + -0xc95 + -0xae1)), __decorate([
    (0x8e * -0x35 + 0x1 * 0x943 + 0x5 * 0x407, sequelize_typescript_1[a3(0x1cf)])(() => Tenant_1[a6(0x1d9)]),
    __metadata(a3(0x1d6) + 'e', Tenant_1[a6(0x1d9)])
], Queue[a3(0x1f0)], a6(0x1da), void (0x1 * 0x16fa + 0x9be + -0x2 * 0x105c)), __decorate([
    (-0x2a4 + 0x10f3 + -0xe4f, sequelize_typescript_1[a6(0x1fe)])(() => QueueIntegrations_1[a6(0x1d9)]),
    sequelize_typescript_1[a6(0x1e7)],
    __metadata(a3(0x1d6) + 'e', Number)
], Queue[a6(0x1f0)], a3(0x1e4) + a3(0x1f9), void (-0x7bb * 0x1 + -0x130 + 0x8eb)), __decorate([
    (0x1 * -0xfc9 + 0xbe7 + 0x3e2, sequelize_typescript_1[a3(0x1cf)])(() => QueueIntegrations_1[a6(0x1d9)]),
    __metadata(a6(0x1d6) + 'e', QueueIntegrations_1[a6(0x1d9)])
], Queue[a6(0x1f0)], a3(0x1d7) + a3(0x1e1), void (-0xc6c + 0x1bf0 + -0xf84)), Queue = __decorate([sequelize_typescript_1[a6(0x1e6)]], Queue), exports[a3(0x1d9)] = Queue;
function a() {
    var aa = [
        '2935xKJjdN',
        'createdAt',
        'metadata',
        'userId',
        'Model',
        './User',
        '5322aSxzKr',
        'ezkla',
        'Default',
        '218290xghMuG',
        'BelongsTo',
        '__importDe',
        'CreatedAt',
        'FeiZk',
        'MwqpS',
        'sxFms',
        '__metadata',
        'design:typ',
        'queueInteg',
        './QueueInt',
        'default',
        'tenant',
        'egrations',
        '__esModule',
        'getOwnProp',
        'KYXuT',
        'erty',
        'value',
        'rations',
        'kUqEb',
        '882hFuUrR',
        'integratio',
        '198oTmEmR',
        'Table',
        'Column',
        './Tenant',
        'KjWif',
        'object',
        'ent',
        'decorate',
        'defineProp',
        'QqImd',
        'PrimaryKey',
        'prototype',
        'color',
        '5309037gnyLFd',
        'Ohupn',
        'length',
        '905384jpeZFz',
        'qcpdt',
        'sequelize-',
        'fault',
        'nId',
        'updatedAt',
        'ptor',
        'TTLVM',
        'jipgb',
        'ForeignKey',
        'queue',
        'tenantId',
        'WySQx',
        '433760gtRNNQ',
        'KItAH',
        'user',
        'AutoIncrem',
        'function',
        'isActive',
        '__decorate',
        'ertyDescri',
        'typescript',
        'UpdatedAt',
        '10HsYZyt',
        '4298791XipSYf',
        'RcFQB',
        'REJdg'
    ];
    a = function () {
        return aa;
    };
    return a();
}