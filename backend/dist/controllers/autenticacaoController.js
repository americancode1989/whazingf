const s = b, v = b;
function a() {
    const w = [
        'axios',
        'post',
        '33316GDNXCj',
        'data',
        'json',
        '3508281cysrnZ',
        '6FIqTXG',
        '5XHfIRU',
        'env',
        '1876227FhHIWL',
        'USUARIO_AP',
        'SENHA_API',
        'tenticação',
        '443540JSvZLd',
        'password',
        '887080uROIAc',
        '6429276tfPiAe',
        'QxpKr',
        'body',
        'status',
        '402450kkKaPK',
        'autenticar',
        'exports',
        'error',
        'username',
        'Erro\x20na\x20au'
    ];
    a = function () {
        return w;
    };
    return a();
}
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const g = -parseInt(q(0x79)) / (-0x18b2 + -0x1f26 + 0x37d9) + parseInt(q(0x80)) / (-0x1 * 0x2c2 + -0xf2f + -0x397 * -0x5) + parseInt(q(0x75)) / (-0x1 * 0x291 + 0xcf4 * -0x1 + 0xf88) + -parseInt(r(0x88)) / (-0x1e7f + -0xdea + -0xdf * -0x33) * (parseInt(r(0x73)) / (0x37 * 0x40 + -0x1b26 + -0x479 * -0x3)) + -parseInt(q(0x72)) / (0xd5b + -0x1927 * 0x1 + 0xbd2) * (parseInt(q(0x8b)) / (-0x13 * 0x18b + 0x29 * -0x14 + 0x208c)) + -parseInt(q(0x7b)) / (-0x16 * -0x11 + 0x1 * -0x1a89 + 0x1 * 0x191b) + parseInt(r(0x7c)) / (-0xf59 + 0x1ef3 + 0x5 * -0x31d);
            if (g === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, 0x68778 + -0x15 * -0x1755 + 0x2 * -0x94f6));
const axios = require(s(0x86));
async function autenticar(g, h) {
    const t = s, u = s, i = {};
    i[t(0x7d)] = u(0x85) + u(0x78);
    const j = i, {
            username: k,
            password: l
        } = g[u(0x7e)];
    try {
        const m = {};
        m[u(0x84)] = process[t(0x74)][u(0x76) + 'I'], m[u(0x7a)] = process[u(0x74)][u(0x77)];
        const n = await axios[u(0x87)](m);
        h[t(0x8a)](n[u(0x89)]);
    } catch (o) {
        const p = {};
        p[u(0x83)] = j[t(0x7d)], h[u(0x7f)](-0x1db3 * 0x1 + 0x5db * -0x2 + 0x2b5d)[u(0x8a)](p);
    }
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x15a + -0xb82 * 0x1 + 0xd4e);
        let h = e[f];
        return h;
    }, b(c, d);
}
const f = {};
f[s(0x81)] = autenticar, module[s(0x82)] = f;