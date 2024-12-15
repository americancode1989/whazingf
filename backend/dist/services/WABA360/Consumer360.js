'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x163)) / (0x287 * 0xd + -0xc74 * 0x1 + 0xa33 * -0x2) * (-parseInt(p(0x164)) / (-0x2079 + -0x1347 + 0x33c2)) + -parseInt(q(0x15d)) / (-0x1a37 * -0x1 + -0x3 * -0x8e0 + -0x54 * 0xa1) + parseInt(q(0x174)) / (0x2 * 0xca6 + 0x139 * -0x13 + 0x19 * -0x15) + parseInt(p(0x15e)) / (-0x1d1 * -0x3 + 0x1bfe * 0x1 + -0x216c) + -parseInt(q(0x157)) / (-0x1085 * -0x1 + 0xd * -0x128 + -0x177) + parseInt(q(0x170)) / (-0xd39 + 0xb02 * 0x2 + -0x8c4) * (-parseInt(q(0x16f)) / (-0x18f4 + 0xd59 + -0xba3 * -0x1)) + parseInt(p(0x172)) / (0x13b2 + -0x18a * -0x4 + 0x89b * -0x3);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1cd0e + -0xa122e + 0x1191d3));
function a() {
    const y = [
        'start',
        'NLfln',
        'default',
        'env',
        'fault',
        './HandleMe',
        'content',
        'jsonwebtok',
        'AMQP_URL',
        'ig/auth',
        '166360SjtehU',
        '196RtJIqL',
        'messages',
        '3953007yuoItq',
        'verify',
        '2402668liXBaU',
        'value',
        'server',
        'parse',
        'ssage360',
        'whatsappId',
        'toString',
        'secret',
        'waba360',
        '3054120oPbTta',
        'token',
        '../../conf',
        '../../libs',
        '/rabbitmq-',
        'consume',
        '1697247YoENZg',
        '3710970kKJOZf',
        '__importDe',
        'erty',
        '__esModule',
        'defineProp',
        '4NaIDiI',
        '124172lBbLXG'
    ];
    a = function () {
        return y;
    };
    return a();
}
var __importDefault = this && this[r(0x15f) + r(0x169)] || function (c) {
    const t = s;
    return c && c[t(0x161)] ? c : { 'default': c };
};
const o = {};
o[r(0x175)] = !![], Object[s(0x162) + s(0x160)](exports, s(0x161), o);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x7a9 * 0x1 + 0x2a5 * -0x1 + 0xba2);
        let h = e[f];
        return h;
    }, b(c, d);
}
const jsonwebtoken_1 = require(s(0x16c) + 'en'), rabbitmq_server_1 = __importDefault(require(r(0x15a) + r(0x15b) + r(0x176))), auth_1 = __importDefault(require(r(0x159) + r(0x16e))), HandleMessage360_1 = __importDefault(require(r(0x16a) + s(0x178))), Consumer360 = async () => {
        const u = r, v = r, d = {};
        d[u(0x166)] = u(0x156);
        const e = d, f = new rabbitmq_server_1[(u(0x167))](process[v(0x168)][u(0x16d)] || '');
        await f[v(0x165)](), f[v(0x15c)](e[v(0x166)], g => {
            const w = u, x = u, h = JSON[w(0x177)](g[w(0x16b)][x(0x154)]()), i = (0x1d3 + 0x9f4 + -0xbc7, jsonwebtoken_1[x(0x173)])(h[w(0x158)], auth_1[x(0x167)][x(0x155)]);
            (0x9f * -0xf + 0x13a6 + -0xa55 * 0x1, HandleMessage360_1[x(0x167)])(h[w(0x171)], i[w(0x179)]);
        });
    };
exports[r(0x167)] = Consumer360;