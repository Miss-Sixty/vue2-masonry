## vue2-masonry

<img alt="npm" src="https://img.shields.io/npm/v/vue2-masonry?style=flat-square">
<img alt="npm" src="https://img.shields.io/npm/dt/vue2-masonry?style=flat-square">
<img alt="npm bundle size" src="https://img.shields.io/bundlephobia/min/vue2-masonry?style=flat-square">
<img alt="GitHub stars" src="https://img.shields.io/github/stars/Miss-Sixty/vue2-masonry?style=flat-square">

<p>A waterfall layout component for Vue.js</p>
<a href="./README.zh-CN.md">中文版介绍</a>
 
## Demo
- [Preview](https://miss-sixty.github.io/vue2-masonry/)

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

| Name      | Description                                                     | Type             | Default                         |
| --------- | --------------------------------------------------------------- | ---------------- | ------------------------------- |
| list      | Picture array                                                   | array            | []                              |
| urlName   | Picture url                                                     | String           | url                             |
| gapWidth  | Picture horizontal spacing                                      | string ｜ number | 10                              |
| gapHeight | Picture vertical spacing                                        | string ｜ number | 10                              |
| col       | Number of vertical arrangement（Mutually exclusive with width） | string ｜ number | -                               |
| width     | Picture width（Mutually exclusive with col）                    | string ｜ number | 300                             |
| radius    | Border Radius                                                   | string ｜ number | 5                               |
| boxShadow | Card shadow                                                     | string           | 0 2px 12px 0 rgba(0, 0, 0, 0.1) |

## Methods

Use ref to get Masonry instance and call instance methods
Name |Description|Return value
-|-|-
reset|reset Masonry |-
