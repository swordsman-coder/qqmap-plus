interface Init {
    init: Function
}
declare global {
    interface Window {
        qq: any;
    }
}
const maps:Init = {
    init: () => {}
};
const init = (apiKey, success, libraries=['geometry']) => {
    let qq = window.qq = window.qq || {};
    qq.maps = qq.maps || {};
    const getScript = (src) => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = src;
        script.crossOrigin = "anonymous";
        document.body.appendChild(script);
        script.onload = () => {
            success();
        };
    };
    const loadScriptTime = new Date().getTime();
    // eslint-disable-next-line no-underscore-dangle
    qq.maps.__load = (apiLoad) => {
        apiLoad([["2.4.132", apiKey, 0], ["https://mapapi.qq.com/", "jsapi_v2/2/4/132/mods/", "https://mapapi.qq.com/jsapi_v2/2/4/132/theme/", true], [1, 18, 34.519469, 104.461761, 4], [1592153320230, "https://pr.map.qq.com/pingd", "https://pr.map.qq.com/pingd"], ["https://apis.map.qq.com/jsapi", "https://apikey.map.qq.com/mkey/index.php/mkey/check", "https://sv.map.qq.com/xf", "https://sv.map.qq.com/boundinfo", "https://sv.map.qq.com/rarp", "https://apis.map.qq.com/api/proxy/search", "https://apis.map.qq.com/api/proxy/routes/", "https://confinfo.map.qq.com/confinfo", "https://overseactrl.map.qq.com"], [[null, ["https://rt0.map.gtimg.com/tile", "https://rt1.map.gtimg.com/tile", "https://rt2.map.gtimg.com/tile", "https://rt3.map.gtimg.com/tile"], "png", [256, 256], 3, 19, "114", true, false], [null, ["https://m0.map.gtimg.com/hwap", "https://m1.map.gtimg.com/hwap", "https://m2.map.gtimg.com/hwap", "https://m3.map.gtimg.com/hwap"], "png", [128, 128], 3, 18, "110", false, false], [null, ["https://p0.map.gtimg.com/sateTiles", "https://p1.map.gtimg.com/sateTiles", "https://p2.map.gtimg.com/sateTiles", "https://p3.map.gtimg.com/sateTiles"], "jpg", [256, 256], 1, 19, "101", false, false], [null, ["https://rt0.map.gtimg.com/tile", "https://rt1.map.gtimg.com/tile", "https://rt2.map.gtimg.com/tile", "https://rt3.map.gtimg.com/tile"], "png", [256, 256], 1, 19, "", false, false], [null, ["https://sv0.map.qq.com/hlrender/", "https://sv1.map.qq.com/hlrender/", "https://sv2.map.qq.com/hlrender/", "https://sv3.map.qq.com/hlrender/"], "png", [256, 256], 1, 19, "", false, false], [null, ["https://rtt2.map.qq.com/rtt/", "https://rtt2a.map.qq.com/rtt/", "https://rtt2b.map.qq.com/rtt/", "https://rtt2c.map.qq.com/rtt/"], "png", [256, 256], 1, 19, "", false, false], null, [["https://rt0.map.gtimg.com/vector/", "https://rt1.map.gtimg.com/vector/", "https://rt2.map.gtimg.com/vector/", "https://rt3.map.gtimg.com/vector/"], [256, 256], 3, 18, "114", ["https://rt0.map.gtimg.com/icons/", "https://rt1.map.gtimg.com/icons/", "https://rt2.map.gtimg.com/icons/", "https://rt3.map.gtimg.com/icons/"], []], null], ["https://s.map.qq.com/TPano/v1.1.2/TPano.js", "map.qq.com/", ""]], loadScriptTime);
    };
    const scripts = ['main', ...libraries.map(l => `mods/${l}`)];
    const prefix = 'jsapi_v2/2/4/132/';
    getScript(`https://mapapi.qq.com/c/=/${scripts.map(s => `${prefix}${s}.js`).join(',')}`);
}
maps.init = init
export default maps