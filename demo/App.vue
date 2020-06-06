<template>
  <div id="app">
    <div class="toolsBar">
      <label>
        <input
          name="setting"
          type="radio"
          value="1"
          v-model="radio"
        />设置宽度模式
      </label>
      <label>
        <input
          name="setting"
          type="radio"
          value="2"
          v-model="radio"
        />设置列数模式
      </label>
      <br />
      <label class="label-input">
        {{ radio === "1" ? "宽度" : "列数" }}
        <input v-if="radio === '1'" type="text" v-model="width" />
        <input v-else type="text" v-model="col" />
      </label>

      <label class="label-input">
        横向间隔
        <input type="text" v-model="gapWidth" />
      </label>

      <label class="label-input">
        纵向间隔
        <input type="text" v-model="gapHeight" />
      </label>
      <br />
      <label class="label-input">
        圆角
        <input type="text" v-model="radius" />
      </label>

      <label class="label-input">
        阴影
        <input type="text" v-model="boxShadow" style="width:200px" />
      </label>
    </div>
    <masonry
      :list="imgs"
      :width="radio === '1' ? width : null"
      :gapWidth="gapWidth"
      :gapHeight="gapHeight"
      :col="radio === '2' ? col : null"
      :radius="radius"
      :urlName="urlName"
      :boxShadow="boxShadow"
      ref="masonry"
    >
      <template v-slot="{ data }">
        <div class="text">
          <p>{{ data.title }}</p>
          <p>{{ data.text }}</p>
        </div>
      </template>
    </masonry>
  </div>
</template>

<script>
import Masonry from "../masonry";
import imgs from "./data";
export default {
  name: "MasonryDemo",
  components: {
    Masonry
  },
  data() {
    return {
      imgs,
      radio: "2",
      width: "300",
      col: "2",
      gapWidth: "10",
      gapHeight: "10",
      radius: "5",
      boxShadow: "0 2px 12px 0 rgba(0, 0, 0, 0.1)",
      urlName: "url"
    };
  }
};
</script>
<style lang="scss">
body {
  margin: 0;
}
#app {
  .toolsBar {
    padding: 20px;
    .label-input {
      margin-right: 5px;
      input {
        width: 50px;
      }
    }
  }
  .text {
    padding: 8px;
    box-sizing: border-box;

    p {
      margin: 0;
      &:last-of-type {
        font-size: 14px;
        color: #888;
        margin: 0;
      }
    }
  }
}
</style>
