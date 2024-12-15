'use strict';
const C = b, D = b;
(function (c, d) {
    const A = b, B = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(A(0x117)) / (-0x6ab + 0x3 * 0x256 + -0x1 * 0x56) + -parseInt(A(0x101)) / (-0xc90 * -0x1 + -0x22e7 + 0x773 * 0x3) * (-parseInt(A(0x12b)) / (0x13 * 0x3e + 0x15cf + -0x1a66)) + -parseInt(B(0x105)) / (0x36e * -0x7 + 0xfbb + 0x84b) * (parseInt(A(0x119)) / (0x257 + -0x63 + -0x63 * 0x5)) + parseInt(A(0x10c)) / (-0x448 + 0x11 * -0x3b + 0x1 * 0x839) * (-parseInt(B(0x116)) / (0x1bb5 + 0x2336 * 0x1 + -0x3ee4)) + parseInt(A(0x12a)) / (0xef5 + 0x731 * -0x5 + 0x1508) + -parseInt(B(0x10b)) / (0x13fd + -0xe37 + -0x5bd * 0x1) * (-parseInt(B(0x11f)) / (0x33f * 0x8 + 0x121b + 0x2c09 * -0x1)) + -parseInt(B(0x10f)) / (-0xc36 + -0x1173 * -0x1 + -0x532) * (-parseInt(A(0x10d)) / (-0xe64 + 0xd * -0x17a + 0x7b * 0x46));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xa9eb2 + 0x19c757 + -0x21 * 0x56));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2 + 0x16f + -0x77);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const G = [
        'File',
        '__importDe',
        'default',
        'Http',
        'handleExce',
        'stack',
        'logger',
        'timestamp',
        'warn',
        'createLogg',
        '11275240FqrbOw',
        '5520351ySFpxh',
        '\x20-\x20',
        'json',
        'winston',
        'defineProp',
        'printf',
        'ptions',
        'fault',
        'colorize',
        '2feQQGs',
        '__esModule',
        'transports',
        'maxsize',
        '412VOMfXi',
        'error',
        'env',
        '.logg',
        'format',
        'combine',
        '2259495qvVscX',
        '756354ohvKGx',
        '4090704CTwSbZ',
        'erty',
        '22IwRoTR',
        'maxFiles',
        'debug',
        'level',
        'errors',
        'prettyPrin',
        'value',
        '49yPNTUU',
        '942575JabORD',
        './logs/app',
        '78535MwuaUz',
        'info',
        'filename',
        'prod',
        'Console',
        'NODE_ENV',
        '20GzZkbN'
    ];
    a = function () {
        return G;
    };
    return a();
}
var __importDefault = this && this[C(0x121) + D(0xff)] || function (c) {
    const E = C;
    return c && c[E(0x102)] ? c : { 'default': c };
};
const w = {};
w[D(0x115)] = !![], Object[C(0xfc) + D(0x10e)](exports, D(0x102), w), exports[D(0x126)] = void (0x74 * 0x2f + -0xa3a + -0xb12);
const winston_1 = __importDefault(require(C(0xfb))), x = {};
x[C(0x125)] = !![];
const jsonLogFileFormat = winston_1[C(0x122)][C(0x109)][D(0x10a)](winston_1[D(0x122)][D(0x109)][C(0x113)](x), winston_1[C(0x122)][C(0x109)][D(0x127)](), winston_1[D(0x122)][D(0x109)][D(0x114) + 't']());
let env = D(0x11c);
process[C(0x107)]?.[D(0x11e)] && (env = process[C(0x107)][C(0x11e)]);
const level = env === C(0x11c) ? D(0x11a) : D(0x111), y = {};
y[D(0x125)] = !![];
const z = {};
z[D(0x11b)] = C(0x118) + C(0x108), z[C(0x112)] = D(0x106), z[D(0x124) + D(0xfe)] = !![], z[C(0x104)] = 0xa00000, z[D(0x110)] = 0xa;
const logger = winston_1[C(0x122)][C(0x129) + 'er']({
    'level': level,
    'format': jsonLogFileFormat,
    'transports': [
        new winston_1[(D(0x122))][(D(0x103))][(D(0x11d))]({
            'format': winston_1[D(0x122)][D(0x109)][D(0x10a)](winston_1[D(0x122)][C(0x109)][D(0x113)](y), winston_1[C(0x122)][D(0x109)][D(0x100)](), winston_1[C(0x122)][C(0x109)][D(0xfd)](({
                level: c,
                message: d,
                timestamp: e,
                stack: f
            }) => {
                const F = D;
                if (f)
                    return c + ':\x20' + e + '\x20' + d + F(0x12c) + f;
                return c + ':\x20' + e + '\x20' + d;
            }))
        }),
        new winston_1[(C(0x122))][(D(0x103))][(C(0x120))](z),
        new winston_1[(C(0x122))][(D(0x103))][(C(0x123))]({
            'level': C(0x128),
            'format': winston_1[C(0x122)][C(0x109)][D(0xfa)]()
        })
    ]
});
exports[D(0x126)] = logger;