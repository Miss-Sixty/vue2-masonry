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
    >
      <div class="text">
        <p>夏季</p>
        <p>连雨不知春去，一晴方觉夏深。</p>
      </div>
    </masonry>
  </div>
</template>

<script>
import Masonry from "../masonry";

export default {
  name: "MasonryDemo",
  components: {
    Masonry
  },
  data() {
    return {
      imgs: [],
      radio: "1",
      width: "300",
      col: "3",
      gapWidth: "10",
      gapHeight: "10",
      radius: "5",
      boxShadow: "0 2px 12px 0 rgba(0, 0, 0, 0.1)",
      urlName: "url"
    };
  },
  mounted() {
    setTimeout(() => {
      this.imgs = [
        {
          url:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591088792863&di=0aa83ac11e2be14599d4ebf18573d42e&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2017-12-19%2F5a38a56d5c4a5.jpg"
        },
        {
          url: "http://pic1.win4000.com/mobile/2017-12-01/5a20ebf84d0ba.jpg"
        },
        {
          url: "http://iphone.tgbus.com/UploadFiles/201504/2015040310245383.jpg"
        },
        {
          url:
            "http://feizhuliu.vipyl.com/attached/image/20130406/20130406180099629962.jpg"
        },
        {
          url:
            "http://img3.imgtn.bdimg.com/it/u=2404568044,1803709319&fm=26&gp=0.jpg"
        },
        {
          url:
            "http://img4.imgtn.bdimg.com/it/u=3162504934,2889993934&fm=26&gp=0.jpg"
        },

        {
          url:
            "http://img1.imgtn.bdimg.com/it/u=2657017419,3927504560&fm=26&gp=0.jpg"
        },
        {
          url:
            "http://img3.imgtn.bdimg.com/it/u=785574112,3196018583&fm=11&gp=0.jpg"
        },
        {
          url:
            "http://img1.imgtn.bdimg.com/it/u=2701495349,314918696&fm=26&gp=0.jpg"
        },
        {
          url:
            "http://img3.imgtn.bdimg.com/it/u=3177821783,3832632740&fm=26&gp=0.jpg"
        },
        {
          url:
            "http://img2.imgtn.bdimg.com/it/u=139232356,3628870108&fm=26&gp=0.jpg"
        },
        {
          url:
            "http://img4.imgtn.bdimg.com/it/u=3524677476,3757920434&fm=26&gp=0.jpg"
        },
        {
          url:
            "http://img4.imgtn.bdimg.com/it/u=291212812,4161764980&fm=26&gp=0.jpg"
        },
        {
          url:
            "http://img0.imgtn.bdimg.com/it/u=299374006,766807760&fm=26&gp=0.jpg"
        },
        {
          url:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2384440744,863211208&fm=26&gp=0.jpg"
        },
        {
          url:
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2786034744,2260211435&fm=26&gp=0.jpg"
        },
        {
          url:
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2308717729,1550520880&fm=26&gp=0.jpg"
        },
        {
          url:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591088805280&di=e3f2bf4135ffd904e7b0f28a5b49033d&imgtype=0&src=http%3A%2F%2Fimg.ewebweb.com%2Fuploads%2F20200115%2F17%2F1579081301-uEwqzdyfpo.jpg"
        }
      ];
    }, 500);
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
