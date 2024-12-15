'use strict';
function a() {
    const s = [
        'ls/Help',
        'erty',
        '205856LckyKH',
        'xqWEn',
        'fault',
        '11983560tTIpTH',
        '78fGxVFa',
        'P_FOUND',
        '__importDe',
        '405727SZPtaw',
        '18aXOfor',
        'findByPk',
        'rs/AppErro',
        '26UTBIbI',
        '__esModule',
        '../../erro',
        '1359jjwWJw',
        'defineProp',
        '95mMsgUY',
        'update',
        '../../mode',
        'ERR_NO_HEL',
        '4192576lltZoD',
        '12UCJaaV',
        'value',
        '6309754TLBWed',
        'default',
        '398466RvzAXI'
    ];
    a = function () {
        return s;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xf7 + -0x797 * 0x1 + -0x1 * -0x879);
        let h = e[f];
        return h;
    }, b(c, d);
}
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(l(0x1e4)) / (-0x1097 + 0xd * -0x2bf + 0x344b) + parseInt(m(0x1f2)) / (-0x3 * 0xade + -0x8d + 0x2129) * (parseInt(m(0x1d9)) / (0x3 * -0xc98 + -0x5 * -0x5ab + 0x974)) + parseInt(m(0x1e7)) / (-0x2 * -0x33 + 0x3a * 0x56 + -0x13de * 0x1) * (parseInt(l(0x1db)) / (0x1b43 + -0xfbb * -0x1 + -0x2af9)) + parseInt(l(0x1eb)) / (0x2488 + 0x37c * -0x2 + -0x1d8a) * (parseInt(m(0x1ee)) / (0x9 * -0x2 + 0xa8f * 0x1 + -0x1a * 0x67)) + parseInt(l(0x1df)) / (0x17cc + 0x13d + -0x25 * 0xad) * (parseInt(l(0x1ef)) / (-0x25e2 + 0xc * 0xc9 + 0x1c7f)) + -parseInt(m(0x1ea)) / (-0xf * -0x221 + 0x3f * -0x43 + -0xf68) + parseInt(l(0x1e2)) / (-0x16fa + 0xad * 0xb + 0x69 * 0x26) * (-parseInt(l(0x1e0)) / (0x129b + -0x1217 + -0x78));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x12714a + 0xebbe1 + 0xd1763));
var __importDefault = this && this[n(0x1ed) + n(0x1e9)] || function (c) {
    const p = o;
    return c && c[p(0x1f3)] ? c : { 'default': c };
};
const k = {};
k[n(0x1e1)] = !![], Object[o(0x1da) + o(0x1e6)](exports, o(0x1f3), k);
const AppError_1 = __importDefault(require(n(0x1f4) + o(0x1f1) + 'r')), Help_1 = __importDefault(require(n(0x1dd) + o(0x1e5))), UpdateService = async d => {
        const q = o, r = n, e = {};
        e[q(0x1e8)] = r(0x1de) + r(0x1ec);
        const f = e, {id: g} = d, h = await Help_1[q(0x1e3)][r(0x1f0)](g);
        if (!h)
            throw new AppError_1[(r(0x1e3))](f[q(0x1e8)], 0x18e7 + 0x21d * 0xf + 0x1 * -0x3706);
        return await h[q(0x1dc)](d), h;
    };
exports[n(0x1e3)] = UpdateService;