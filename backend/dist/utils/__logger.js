'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x17d)) / (-0x472 + 0x1071 + -0xbfe) * (parseInt(p(0x16c)) / (0x3b9 * -0x6 + -0x482 + -0x1 * -0x1ada)) + -parseInt(p(0x166)) / (0x5f3 + -0x3 * -0xcaa + -0x15f7 * 0x2) * (-parseInt(q(0x164)) / (-0x469 + 0x265c + 0x11 * -0x1ff)) + -parseInt(p(0x171)) / (0xff5 * 0x1 + -0x2676 + 0x6 * 0x3c1) * (-parseInt(p(0x167)) / (-0x5 * -0x252 + 0x14b2 + -0x2046)) + -parseInt(q(0x165)) / (0x2db + 0x50b + -0x7df) * (parseInt(p(0x16b)) / (-0xf1 * -0x1 + 0xc56 + -0xd3f)) + parseInt(q(0x169)) / (-0x4 * -0x905 + 0x9cb + 0x2 * -0x16eb) + -parseInt(q(0x16d)) / (0x32e * 0x1 + -0x5 * -0x5dd + -0x2075) * (-parseInt(q(0x179)) / (0x3d * -0x59 + -0x9 * -0x119 + 0xb5f)) + parseInt(q(0x182)) / (-0x1bea + 0x2058 + -0xb * 0x66) * (parseInt(q(0x16f)) / (0x2fd + 0x25dc + 0x4 * -0xa33));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x2f * -0x1924 + 0x1fc34 + 0x1c57a));
var __importDefault = this && this[r(0x168) + r(0x172)] || function (c) {
    const t = r;
    return c && c[t(0x173)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2165 * -0x1 + 0x1024 + 0x12a4);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[s(0x16e)] = !![], Object[r(0x175) + s(0x177)](exports, r(0x173), k), exports[s(0x176)] = void (-0x1a15 * -0x1 + 0x5 * 0x241 + -0x255a);
const pino_1 = __importDefault(require(r(0x174))), l = {};
l[s(0x17b)] = !![], l[s(0x163)] = r(0x170);
const m = {};
m[r(0x16a)] = r(0x17c) + 'me';
const n = {};
n[r(0x17b)] = !![], n[s(0x163)] = s(0x170), n[r(0x17a) + 't'] = m;
const o = {};
o[s(0x181)] = l, o[r(0x178)] = n;
const configPino = o;
let env = s(0x178);
function a() {
    const u = [
        '11qNIlUX',
        'prettyPrin',
        'enabled',
        'pid,hostna',
        '358XQktWx',
        'env',
        'NODE_ENV',
        'default',
        'dev',
        '12348dLbgGD',
        'level',
        '2402068miMlHf',
        '1066345PwHgnD',
        '3YfNLoL',
        '1430394AMarDk',
        '__importDe',
        '817470wBdlRs',
        'ignore',
        '24swWhCF',
        '5532hJhMhK',
        '186470NNOAKO',
        'value',
        '13234SFasWP',
        'info',
        '5meverN',
        'fault',
        '__esModule',
        'pino',
        'defineProp',
        'logger',
        'erty',
        'prod'
    ];
    a = function () {
        return u;
    };
    return a();
}
process[s(0x17e)]?.[r(0x17f)] && (env = process[s(0x17e)][r(0x17f)]);
const logger = (0x20e3 + -0x22f6 + 0x1 * 0x213, pino_1[r(0x180)])(env === s(0x178) ? configPino[s(0x178)] : configPino[s(0x181)]);
exports[s(0x176)] = logger;