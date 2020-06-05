<template>
  <div class="masonry">
    <div
      class="masonry-box"
      v-for="(item, index) in imgsArr_c"
      :key="index"
      :style="boxStyle"
    >
      <img :src="item.url" width="100%" height="auto" style="display:block" />
      <slot :data="item" :index="index" />
    </div>
  </div>
</template>
<script>
export default {
  name: "vue2-masonry",
  props: {
    list: {
      type: Array,
      require: true
    },
    gapWidth: {
      type: [String, Number],
      default: 10,
      validator: val => val >= 0
    },
    gapHeight: {
      type: [String, Number],
      default: 10,
      validator: val => val >= 0
    },
    //列数
    col: {
      type: [String, Number],
      validator: val => val >= 0
    },
    radius: {
      //圆角
      type: [String, Number],
      default: "5"
    },
    boxShadow: {
      type: String,
      default: "0 2px 12px 0 rgba(0, 0, 0, 0.1)"
    },
    width: {
      type: [String, Number],
      default: 300,
      validator: val => val >= 0
    },
    line: {
      //方向 horizontal vertical
      default: "v",
      validator: val => ~["v", "h"].indexOf(val)
    },
    urlName: {
      type: String,
      default: "url"
    }
  },
  data() {
    return {
      loadedCount: 0, //已预加载数
      heightArray: [],
      imgsArr_c: [], //渲染dom地址
      imgBoxEls: null, //img dom
      beginIndex: 0, //开始要排列的图片索引,首次为第二列的第一张图片，后续加载则为已经排列图片的下一个索引
      clientWidth: 0
    };
  },
  computed: {
    gapW() {
      return parseInt(this.gapWidth);
    },
    gapH() {
      return parseInt(this.gapHeight);
    },
    imgWidth() {
      return parseInt(this.width);
    },

    boxWidth() {
      const { col, clientWidth, imgWidth, gapW } = this;
      if (col) {
        return (clientWidth - (col - 1) * gapW) / col;
      }
      return imgWidth;
    },

    colCount() {
      const { col, clientWidth, imgWidth, gapW } = this;
      if (col) {
        return parseInt(col);
      }
      return ~~((clientWidth + gapW) / (imgWidth + gapW));
    },

    getLeft() {
      const { col, clientWidth, boxWidth, colCount, gapW } = this;
      if (col) return 0;
      return (clientWidth - ((boxWidth + gapW) * colCount - gapW)) / 2;
    },

    boxStyle() {
      return {
        width: this.addUnit(this.boxWidth),
        borderRadius: this.addUnit(this.radius),
        boxShadow: this.boxShadow
      };
    }
  },
  watch: {
    list() {
      this.preload();
    },
    clientWidth() {
      this.reset();
    },
    width() {
      this.reset();
    },
    col() {
      this.reset();
    },
    gapWidth() {
      this.reset();
    },
    gapHeight() {
      this.reset();
    },
    radius() {
      this.reset();
    },
    boxShadow() {
      this.reset();
    },
    urlName() {
      this.reset();
    }
  },

  mounted() {
    this.preload();
    this.getClientWidth();
    window.addEventListener("resize", () => {
      clearTimeout(this.timer);
      this.timer = setTimeout(this.getClientWidth, 300);
    });
  },
  methods: {
    preload() {
      let len = this.list.length;

      for (let i = 0; i < len; i++) {
        if (i < this.loadedCount) return; // 只对新加载图片进行预加载
        let item = this.list[i];
        let img = new Image();

        img.src = item.url;
        img.onload = img.onerror = e => {
          this.loadedCount++;

          if (e.type === "error") {
            // TODO:图片加载错误dom未写显示样式
            // item._error = true;
            // this.$emit("imgError", item);
          }
          if (this.loadedCount === len) {
            this.imgsArr_c = this.list.concat([]); // 预加载完成，这时才开始渲染
            this.imgBoxEls = this.$el.children;

            this.$nextTick(() => {
              this.calculate();
              this.getClientWidth();
            });
          }
        };
      }
    },

    getClientWidth() {
      if (this.clientWidth !== this.$el.clientWidth) {
        this.clientWidth = this.$el.clientWidth;
      }
    },

    calculate() {
      let processor =
        this.line === "h"
          ? this.horizontalLineProcessor
          : this.verticalLineProcessor;
      processor();
    },

    verticalLineProcessor() {
      if (!this.imgBoxEls) return;
      if (this.beginIndex === 0) this.heightArray = [];
      const { imgBoxEls, list, colCount, gapH, gapW, getLeft } = this;
      let top;
      let left;
      let height;
      let boxWidth = this.boxWidth + gapW;
      let len = imgBoxEls.length;

      for (let i = this.beginIndex; i < len; i++) {
        let item = this.imgBoxEls[i];

        height = item.offsetHeight + gapH;
        if (i < colCount) {
          this.heightArray.push(item.offsetHeight);
          left = i * boxWidth + getLeft;
          top = 0;
        } else {
          let minHeight = Math.min.apply(null, this.heightArray); // 最低高低
          let minIndex = this.heightArray.indexOf(minHeight);
          top = minHeight + gapH;
          left = minIndex * boxWidth + getLeft;
          this.heightArray[minIndex] = minHeight + height; // 更新colsHeightArr
        }
        item.style.left = left + "px";
        item.style.top = top + "px";
        this.$el.style.height = Math.max.apply(null, this.heightArray) + "px"; //手动设定父盒子高度
      }

      this.beginIndex = list.length; // 排列完之后，新增图片从这个索引开始预加载图片和排列
    },

    horizontalLineProcessor() {},

    reset() {
      this.beginIndex = 0;
      this.$nextTick(() => {
        this.verticalLineProcessor();
      });
    },

    /**
     * util
     */
    //检测单位
    addUnit(value) {
      if (!value) return;
      value = String(value);
      return /^\d+(\.\d+)?$/.test(value) ? `${value}px` : value;
    }
  },

  beforeDestroy() {
    window.removeEventListener("resize", () => {
      clearTimeout(this.timer);
      this.timer = null;
    });
  }
};
</script>
<style lang="scss" scoped>
.masonry {
  position: relative;
  &-box {
    position: absolute;
    overflow: hidden;
    // transition: all 0.5s;
  }
}
</style>
