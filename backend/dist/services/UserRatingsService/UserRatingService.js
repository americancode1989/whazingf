'use strict';
const x = b, y = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1ae4 + 0x90d + 0x19e * 0xc);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(v(0x1ae)) / (-0x1cde + 0xdf3 * 0x1 + 0xeec) * (parseInt(v(0x1b1)) / (0x2a7 * 0xd + 0x17 * -0xb9 + -0x2 * 0x8ed)) + -parseInt(v(0x1a8)) / (-0x464 + -0x47b + 0x8e2) + parseInt(v(0x1a3)) / (0x17a5 * -0x1 + -0xbcb * 0x1 + -0x2374 * -0x1) * (-parseInt(v(0x1a6)) / (-0xf41 + -0x2dd * 0xa + 0x2be8)) + parseInt(w(0x1a2)) / (-0xac * 0x16 + 0x2045 + 0x1177 * -0x1) * (-parseInt(w(0x19f)) / (0x9f6 + -0x251a + 0x1b2b)) + -parseInt(v(0x191)) / (0x85 * -0x28 + 0x1 * -0xe0 + 0x1 * 0x15b0) + -parseInt(v(0x1ab)) / (-0x26bd * 0x1 + 0x71c + 0x2 * 0xfd5) * (parseInt(w(0x1a7)) / (-0x1 * -0x3e2 + 0x5 * -0x62 + -0x1ee)) + parseInt(w(0x19b)) / (-0xb7 * 0x8 + 0x1064 + -0xaa1) * (parseInt(w(0x195)) / (-0x1400 + -0x118 + -0xc * -0x1c3));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x3af * 0xb5 + -0x4c584 + 0x49324));
var __importDefault = this && this[x(0x197) + x(0x1aa)] || function (c) {
    const z = y;
    return c && c[z(0x1b2)] ? c : { 'default': c };
};
const k = {};
function a() {
    const C = [
        'value',
        '__importDe',
        'qAQlh',
        'sequelize',
        'erty',
        '11FPNWYH',
        'dZcNh',
        'length',
        'defineProp',
        '7xYVCDT',
        'HemtQ',
        'where',
        '1004514dWTyED',
        '4ddYZgt',
        'rageRating',
        'between',
        '919075ckWhIN',
        '2266690SvYbAd',
        '165372lRUGOv',
        'findAll',
        'fault',
        '9PYeIYg',
        'pNZhD',
        '../../mode',
        '8199kNNeZY',
        'ing',
        'default',
        '38KAptjd',
        '__esModule',
        'attributes',
        'reduce',
        'getUserAve',
        '645968sQBCZr',
        'ls/UserRat',
        'rate',
        'not',
        '8589348QwbnnK'
    ];
    a = function () {
        return C;
    };
    return a();
}
k[y(0x196)] = !![], Object[y(0x19e) + x(0x19a)](exports, y(0x1b2), k);
const UserRating_1 = __importDefault(require(x(0x1ad) + x(0x192) + y(0x1af))), sequelize_1 = require(x(0x199));
class UserRatingService {
    async [y(0x1b5) + y(0x1a4)](g, h, i) {
        const A = y, B = y, j = {};
        j[A(0x1ac)] = function (t, u) {
            return t && u;
        }, j[A(0x198)] = A(0x193), j[B(0x1a0)] = function (t, u) {
            return t === u;
        }, j[A(0x19c)] = function (t, u) {
            return t / u;
        };
        const l = j, m = l[B(0x1ac)](h, i) ? {
                'updatedAt': {
                    [sequelize_1['Op'][A(0x1a5)]]: [
                        h,
                        i
                    ]
                }
            } : {}, n = { [sequelize_1['Op'][A(0x194)]]: null }, o = {
                'userId': g,
                'rate': n,
                ...m
            }, p = {};
        p[B(0x1a1)] = o, p[A(0x1b3)] = [l[B(0x198)]];
        const q = await UserRating_1[A(0x1b0)][A(0x1a9)](p);
        if (l[B(0x1a0)](q[A(0x19d)], -0x3 * -0x3f3 + -0x1ab0 + 0xed7))
            return null;
        const r = q[B(0x1b4)]((t, u) => t + u[B(0x193)], 0x121a + 0x4 * 0x1b7 + -0x18f6), s = l[B(0x19c)](r, q[A(0x19d)]);
        return s;
    }
}
exports[y(0x1b0)] = new UserRatingService();