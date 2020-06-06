## vue2-masonry

![GitHub stars](https://img.shields.io/github/stars/Miss-Sixty/vue2-masonry?style=flat-square) ![npm](https://img.shields.io/npm/dt/vue2-masonry?style=flat-square) ![npm](https://img.shields.io/npm/v/vue2-masonry?style=flat-square) ![npm bundle size](https://img.shields.io/bundlephobia/min/vue2-masonry?style=flat-square)

<p>A waterfall layout component for Vue.js</p>
<a href="./README.zh-CN.md">中文版介绍</a>
 
## Demo
<a href="https://miss-sixty.github.io/vue2-masonry/" target="_blank">
Preview
</a>

## Install

```bash
# Using npm
npm i vue2-masonry -S

# Using yarn
yarn add vue2-masonry
```

## Import

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

| Name       | Description                                                     | Type             | Default                         |
| ---------- | --------------------------------------------------------------- | ---------------- | ------------------------------- |
| list       | Picture array                                                   | array            | []                              |
| url-name   | Picture url                                                     | String           | url                             |
| gap-width  | Picture horizontal spacing                                      | string ｜ number | 10                              |
| gap-height | Picture vertical spacing                                        | string ｜ number | 10                              |
| col        | Number of vertical arrangement（Mutually exclusive with width） | string ｜ number | -                               |
| width      | Picture width（Mutually exclusive with col）                    | string ｜ number | 300                             |
| radius     | Border Radius                                                   | string ｜ number | 5                               |
| shadow     | Card shadow                                                     | string           | 0 2px 12px 0 rgba(0, 0, 0, 0.1) |

## Methods

Use ref to get Masonry instance and call instance methods
Name |Description|Return value
-|-|-
reset|reset Masonry |-
