## vue2-masonry

![GitHub stars](https://img.shields.io/github/stars/Miss-Sixty/vue2-masonry?style=flat-square)
![npm](https://img.shields.io/npm/dt/vue2-masonry?style=flat-square)
![npm](https://img.shields.io/npm/v/vue2-masonry?style=flat-square)
![npm bundle size](https://img.shields.io/bundlephobia/min/vue2-masonry?style=flat-square)

<p>基于 Vue.js 的瀑布流布局组件</p>
 
## Demo
- [查看 Demo](https://miss-sixty.github.io/vue2-masonry/)

## 使用

```bash
# 使用 npm
npm i vue2-masonry -S

# 使用 yarn
yarn add vue2-masonry
```

## 引入

```js
/* in xxx.vue */

import Masonry from "vue2-masonry";

export default {
    ...
    components: { Masonry },
    ...
};
```

## Props

| 名字       | 描述                        | 类型             | 默认值                          |
| ---------- | --------------------------- | ---------------- | ------------------------------- |
| list       | 图片数组 array              | array            | []                              |
| url-name   | 图片路径字段名              | String           | url                             |
| gap-width  | 图片横向间距                | string ｜ number | 10                              |
| gap-height | 图片纵向间距 spacing        | string ｜ number | 10                              |
| col        | 垂直排列数（与 width 互斥） | string ｜ number | -                               |
| width      | 图片宽度（与 col 互斥）     | string ｜ number | 300                             |
| radius     | 边框圆角                    | string ｜ number | 5                               |
| shadow     | 卡片阴影                    | string           | 0 2px 12px 0 rgba(0, 0, 0, 0.1) |

## Methods

使用 ref 获取 Masonry 实例并调用实例方法
名字 |描述|返回值
-|-|-
reset|重制 Masonry |-
