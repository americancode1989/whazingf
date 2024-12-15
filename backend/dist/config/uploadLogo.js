'use strict';
const o = b, p = b;
function a() {
    const t = [
        'defineProp',
        '756868xcmRab',
        '196481AUuRcD',
        'default',
        '4722549AcPYKQ',
        'extname',
        'multer',
        'diskStorag',
        'ref',
        '__importDe',
        '3474425IrOZmd',
        '__esModule',
        'query',
        'bkQsV',
        'erty',
        '60zslMoD',
        '448426QZjMhC',
        'TYFDW',
        'value',
        'originalna',
        '9vccUBa',
        'public/log',
        '2465196xSQEue',
        'resolve',
        'fault',
        '10279896fYPmqb',
        'path'
    ];
    a = function () {
        return t;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2ab * 0x2 + -0x1025 * 0x1 + -0x1 * -0x1767);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(m(0x1ff)) / (-0x2560 + 0x9 * -0x83 + 0x29fc) + -parseInt(n(0x1f2)) / (0x1 * 0x24db + 0x1176 + 0x1 * -0x364f) + parseInt(n(0x201)) / (-0x223 + -0x2b * 0x53 + 0x1017) + parseInt(m(0x1f8)) / (0x36b + 0x5 * -0x100 + -0x1 * -0x199) + -parseInt(m(0x1ec)) / (-0x1b6 * 0x1 + 0x9 * 0x369 + -0xe7b * 0x2) + -parseInt(n(0x1f1)) / (0x56d + 0x2468 + -0x29cf) * (-parseInt(n(0x1fe)) / (0x1574 + -0x1da + -0x1393 * 0x1)) + parseInt(n(0x1fb)) / (0x2 * -0x18d + -0xa92 + -0x36d * -0x4) * (-parseInt(m(0x1f6)) / (-0x1 * 0x1eea + 0x1f78 + -0x85));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * -0x15cd91 + 0x3264d + 0x1ff238));
var __importDefault = this && this[o(0x206) + o(0x1fa)] || function (c) {
    const q = o;
    return c && c[q(0x1ed)] ? c : { 'default': c };
};
const l = {};
l[o(0x1f4)] = !![], Object[o(0x1fd) + p(0x1f0)](exports, p(0x1ed), l);
const path_1 = __importDefault(require(p(0x1fc))), multer_1 = __importDefault(require(o(0x203))), publicFolder = path_1[o(0x200)][o(0x1f9)](__dirname, '..', '..', p(0x1f7) + 'os');
exports[p(0x200)] = {
    'directory': publicFolder,
    'storage': multer_1[o(0x200)][p(0x204) + 'e']({
        'destination': publicFolder,
        'filename'(c, d, e) {
            const r = o, s = o, f = {
                    'bkQsV': function (h, i) {
                        return h + i;
                    },
                    'TYFDW': function (h, i, j) {
                        return h(i, j);
                    }
                }, g = f[r(0x1ef)](c[s(0x1ee)][r(0x205)], path_1[s(0x200)][r(0x202)](d[s(0x1f5) + 'me']));
            return f[r(0x1f3)](e, null, g);
        }
    })
};