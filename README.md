# qqmap-plus
    腾讯地图
## 安装
```
npm install qqmap-plus --save
```
## 初始化
```js
import qqmapPlus from 'qqmap-plus'
/*
* callback  必须 回调函数
* libraries 可选 需要加载的libraries库 数组格式  默认值为 ["geometry"]
*/
qqmapPlus.init('此处填写腾讯地图jsSDK 的 KEY', callback, libraries)
```

```js
import qqmapPlus from 'qqmap-plus'
qqmapPlus.init('key=OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77', () => {
    const map = new qq.maps.Map(document.getElementById("container"), {
        center: new qq.maps.LatLng(39.916527,116.397128), // 地图中心坐标
        zoom:8
    });
    // do otherThings
}, ["geometry"])
```
## 开发文档
[腾讯地图 javascriptV2 API](https://lbs.qq.com/webApi/javascriptV2/jsGuide/jsOverview)

## 备注
> 之前使用的qqmap, 但是后面加载的map资源开始报错404，不知道是不是腾讯不维护了

> 现在根据[腾讯地图 javascriptV2 API](https://lbs.qq.com/webApi/javascriptV2/jsGuide/jsOverview)重新写了一下 推出了qqmap-plus, 基本保证和原来的使用方式一样，时间充忙，有问题请联系我 

> 其实功能就是做的加载资源后执行callback函数