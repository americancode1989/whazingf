'use strict';
var a5 = b, a8 = b;
(function (c, d) {
    var a3 = b, a4 = b, e = c();
    while (!![]) {
        try {
            var f = -parseInt(a3(0x20d)) / (-0x1 * -0x7cf + -0x56d * -0x7 + 0x2dc9 * -0x1) * (-parseInt(a3(0x1f8)) / (-0xc1 * -0xb + -0x17 * 0x72 + -0x1 * -0x1f5)) + -parseInt(a4(0x227)) / (0x593 * 0x5 + 0x2f * -0x1b + -0x16e7) * (parseInt(a4(0x218)) / (-0x115e + 0x971 + 0x7f1)) + -parseInt(a4(0x224)) / (0x4d * 0x23 + -0x1b84 + 0x1102 * 0x1) + -parseInt(a4(0x200)) / (0x1b0f + 0x2060 + -0x3b69) + parseInt(a4(0x21f)) / (0x825 + 0x1 * -0x137a + 0xb5c) * (parseInt(a4(0x222)) / (0xa * 0x50 + -0x7 * 0x177 + 0x729 * 0x1)) + -parseInt(a4(0x23a)) / (-0x1bbe + 0x1db6 + 0x63 * -0x5) + parseInt(a3(0x204)) / (-0x1661 * -0x1 + -0x14e6 + -0x171) * (parseInt(a3(0x230)) / (0x1 * -0x985 + -0x11 * -0x80 + -0x44 * -0x4));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1e7 * 0x9b7 + -0xa8df3 + -0x148 * -0x51f));
function b(c, d) {
    var e = a();
    return b = function (f, g) {
        f = f - (-0xd50 + 0x6 * 0x1c1 + -0x4bd * -0x1);
        var h = e[f];
        return h;
    }, b(c, d);
}
var __decorate = this && this[a5(0x226)] || function (e, f, g, h) {
        var a6 = a5, a7 = a5, j = {
                'EHznQ': function (o, p) {
                    return o < p;
                },
                'oBkZA': function (o, p) {
                    return o === p;
                },
                'fUIsw': function (o, p) {
                    return o === p;
                },
                'GZiaV': a6(0x23f),
                'nhCCa': function (o, p) {
                    return o === p;
                },
                'ZKWGE': a6(0x22a),
                'vhPmB': function (o, p) {
                    return o - p;
                },
                'GVpwR': function (o, p) {
                    return o >= p;
                },
                'ArvOS': function (o, p) {
                    return o(p);
                },
                'KpWcN': function (o, p) {
                    return o > p;
                },
                'fAWrf': function (o, p, q, s) {
                    return o(p, q, s);
                },
                'lvCuH': function (o, p, q) {
                    return o(p, q);
                },
                'Rtehx': function (o, p) {
                    return o > p;
                }
            }, k = arguments[a6(0x215)], l = j[a6(0x22f)](k, 0x1cf * 0xa + 0x1b5 * 0x3 + 0x2 * -0xb99) ? f : j[a7(0x234)](h, null) ? h = Object[a6(0x202) + a7(0x231) + a7(0x20a)](f, g) : h, m;
        if (j[a7(0x205)](typeof Reflect, j[a6(0x21e)]) && j[a7(0x211)](typeof Reflect[a7(0x214)], j[a7(0x203)]))
            l = Reflect[a7(0x214)](e, f, g, h);
        else {
            for (var n = j[a6(0x21a)](e[a6(0x215)], 0x1106 + 0x1 * 0x1a91 + -0x2b96); j[a7(0x243)](n, 0x25 * -0xb6 + -0xf89 * 0x2 + 0x3960); n--)
                if (m = e[n])
                    l = (j[a6(0x22f)](k, 0x1cdb * -0x1 + 0x59 * -0xb + 0x20b1) ? j[a7(0x1ff)](m, l) : j[a7(0x1fd)](k, 0x20b1 + -0xdb * -0x19 + 0x3611 * -0x1) ? j[a7(0x229)](m, f, g, l) : j[a6(0x212)](m, f, g)) || l;
        }
        return j[a6(0x220)](k, -0x1c14 + -0x1 * 0xaab + 0x26c2) && l && Object[a6(0x207) + a7(0x1f6)](f, g, l), l;
    }, __metadata = this && this[a5(0x235)] || function (d, e) {
        var a9 = a8, aa = a8, f = {};
        f[a9(0x225)] = function (h, i) {
            return h === i;
        }, f[aa(0x244)] = aa(0x23f), f[a9(0x232)] = function (h, i) {
            return h === i;
        }, f[aa(0x248)] = aa(0x22a);
        var g = f;
        if (g[aa(0x225)](typeof Reflect, g[aa(0x244)]) && g[a9(0x232)](typeof Reflect[a9(0x22d)], g[a9(0x248)]))
            return Reflect[aa(0x22d)](d, e);
    }, __importDefault = this && this[a5(0x240) + a8(0x1f3)] || function (c) {
        var ab = a5;
        return c && c[ab(0x23c)] ? c : { 'default': c };
    }, Tenant_1, a0 = {};
a0[a8(0x1f9)] = !![], Object[a5(0x207) + a8(0x1f6)](exports, a8(0x23c), a0);
const sequelize_typescript_1 = require(a8(0x23b) + a5(0x236)), Plan_1 = __importDefault(require(a5(0x247)));
let Tenant = Tenant_1 = class Tenant extends sequelize_typescript_1[a5(0x22c)] {
};
__decorate([
    sequelize_typescript_1[a5(0x1f5)],
    sequelize_typescript_1[a8(0x22b) + a5(0x1f4)],
    sequelize_typescript_1[a5(0x23d)],
    __metadata(a8(0x1fc) + 'e', Number)
], Tenant[a8(0x216)], 'id', void (-0xda5 + -0x1c83 + 0x2a28));
var a1 = {};
a1[a5(0x241) + 'ue'] = a8(0x223), __decorate([
    (-0xb58 + -0x674 + 0x11cc, sequelize_typescript_1[a8(0x23d)])(a1),
    __metadata(a8(0x1fc) + 'e', String)
], Tenant[a5(0x216)], a8(0x22e), void (0x1417 * 0x1 + -0x2648 + 0x1231)), __decorate([
    sequelize_typescript_1[a8(0x23d)],
    __metadata(a8(0x1fc) + 'e', String)
], Tenant[a8(0x216)], a8(0x245), void (-0x74 * -0x56 + -0x24dd * 0x1 + -0x21b)), __decorate([
    sequelize_typescript_1[a8(0x23d)],
    __metadata(a5(0x1fc) + 'e', Number)
], Tenant[a5(0x216)], a8(0x208), void (0x15cd + 0x1cf0 + -0x32bd)), __decorate([
    sequelize_typescript_1[a8(0x23d)],
    __metadata(a8(0x1fc) + 'e', Number)
], Tenant[a5(0x216)], a8(0x238) + a5(0x242), void (-0x1a85 + 0x6 + 0x1a7f)), __decorate([
    sequelize_typescript_1[a5(0x23d)],
    __metadata(a8(0x1fc) + 'e', String)
], Tenant[a5(0x216)], a5(0x237), void (0x3 * -0xc6b + 0xc7a + -0x1 * -0x18c7)), __decorate([
    (0xccd * 0x3 + -0x3e * -0x1a + -0x2cb3, sequelize_typescript_1[a5(0x206)])(() => Tenant_1),
    sequelize_typescript_1[a8(0x23d)],
    __metadata(a8(0x1fc) + 'e', Number)
], Tenant[a5(0x216)], a8(0x246), void (0x97 + 0xfd4 + -0x9 * 0x1d3)), __decorate([
    (-0x1eea + 0x1 * 0x1bab + 0x33f, sequelize_typescript_1[a5(0x221)])(() => Tenant_1),
    __metadata(a8(0x1fc) + 'e', Tenant)
], Tenant[a8(0x216)], a5(0x233), void (0x7b5 * 0x1 + 0xfe6 * -0x1 + 0x831)), __decorate([
    (0x255 * 0x5 + 0xa4d + -0x15f6, sequelize_typescript_1[a8(0x23d)])(sequelize_typescript_1[a5(0x239)][a8(0x1fb)]),
    __metadata(a8(0x1fc) + 'e', Array)
], Tenant[a5(0x216)], a8(0x20b) + a8(0x20f), void (-0x2d * 0x3e + -0x13f5 + 0x1 * 0x1edb)), __decorate([
    sequelize_typescript_1[a5(0x23d)],
    __metadata(a5(0x1fc) + 'e', String)
], Tenant[a8(0x216)], a5(0x21d) + a5(0x210), void (-0x18 * 0x185 + -0x10c8 * -0x1 + 0x13b0)), __decorate([
    sequelize_typescript_1[a8(0x201)],
    __metadata(a8(0x1fc) + 'e', Date)
], Tenant[a8(0x216)], a8(0x1fa), void (0x1 * -0xb27 + 0x22a3 + -0x177c)), __decorate([
    sequelize_typescript_1[a5(0x219)],
    __metadata(a8(0x1fc) + 'e', Date)
], Tenant[a8(0x216)], a5(0x21b), void (-0x1 * 0x2187 + -0x18bf + 0x3a46)), __decorate([
    (-0x1585 + 0x8 * -0x33f + 0x2f7d, sequelize_typescript_1[a8(0x206)])(() => Plan_1[a5(0x20e)]),
    sequelize_typescript_1[a5(0x23d)],
    __metadata(a8(0x1fc) + 'e', Number)
], Tenant[a5(0x216)], a8(0x209), void (0x201 * -0xf + -0x2d3 + 0xb7 * 0x2e)), __decorate([
    (0xa0c * 0x2 + 0x7c4 * 0x3 + -0x2b64, sequelize_typescript_1[a5(0x221)])(() => Plan_1[a5(0x20e)]),
    __metadata(a5(0x1fc) + 'e', Plan_1[a5(0x20e)])
], Tenant[a8(0x216)], a5(0x23e), void (0x1 * 0x3fa + 0x1 * 0x191d + -0x1d17)), __decorate([
    sequelize_typescript_1[a8(0x23d)],
    __metadata(a5(0x1fc) + 'e', String)
], Tenant[a8(0x216)], a5(0x21c), void (-0x1f09 + 0x25d3 + -0x2 * 0x365)), __decorate([
    sequelize_typescript_1[a5(0x23d)],
    __metadata(a8(0x1fc) + 'e', String)
], Tenant[a8(0x216)], a5(0x1f7), void (-0x1 * 0x503 + -0x39 * -0x3d + -0x892 * 0x1)), __decorate([
    sequelize_typescript_1[a8(0x23d)],
    __metadata(a8(0x1fc) + 'e', String)
], Tenant[a5(0x216)], a8(0x217), void (0x689 + -0x5 * -0x35e + -0x175f)), __decorate([
    sequelize_typescript_1[a5(0x23d)],
    __metadata(a5(0x1fc) + 'e', String)
], Tenant[a5(0x216)], a5(0x228), void (-0x20 * -0xbe + -0x2180 + 0x9c0));
var a2 = {};
function a() {
    var ac = [
        'length',
        'prototype',
        'dueDate',
        '497612GRPhLC',
        'UpdatedAt',
        'vhPmB',
        'updatedAt',
        'phone',
        'messageBus',
        'GZiaV',
        '1042482HZlJmw',
        'Rtehx',
        'BelongsTo',
        '88fQGnqo',
        'active',
        '1404370IXxiSw',
        'gdXfH',
        '__decorate',
        '42cMJFyI',
        'recurrence',
        'fAWrf',
        'function',
        'AutoIncrem',
        'Model',
        'metadata',
        'status',
        'EHznQ',
        '374bvncDd',
        'ertyDescri',
        'IdSqM',
        'owner',
        'oBkZA',
        '__metadata',
        'typescript',
        'cnpj',
        'maxConnect',
        'DataType',
        '1804887Qaqvoa',
        'sequelize-',
        '__esModule',
        'Column',
        'plan',
        'object',
        '__importDe',
        'defaultVal',
        'ions',
        'GVpwR',
        'dhtAn',
        'name',
        'ownerId',
        './Plan',
        'ykzAp',
        'fault',
        'ent',
        'PrimaryKey',
        'erty',
        'email',
        '150oCVKYU',
        'value',
        'createdAt',
        'JSONB',
        'design:typ',
        'KpWcN',
        'Tenants',
        'ArvOS',
        '5037432RWFnrC',
        'CreatedAt',
        'getOwnProp',
        'ZKWGE',
        '379220cVvrkO',
        'fUIsw',
        'ForeignKey',
        'defineProp',
        'maxUsers',
        'planId',
        'ptor',
        'businessHo',
        'Table',
        '14461XuXsqN',
        'default',
        'urs',
        'inessHours',
        'nhCCa',
        'lvCuH',
        'tableName',
        'decorate'
    ];
    a = function () {
        return ac;
    };
    return a();
}
a2[a8(0x213)] = a5(0x1fe), Tenant = Tenant_1 = __decorate([(0x1e2d + -0x70 * -0x29 + -0x301d, sequelize_typescript_1[a5(0x20c)])(a2)], Tenant), exports[a5(0x20e)] = Tenant;