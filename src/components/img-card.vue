<template>
  <div class="img-card">
    <ul id="img" v-show="false">
      <li v-for="(src, index) in imgs" :key="`img-${index}`">
        <img :src="src" alt="Picture 1" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import "viewerjs/dist/viewer.css";
import Viewer from "viewerjs";

import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ImgCard extends Vue {
  // @Prop({
  //   default: () => [
  //     "https://tse1-mm.cn.bing.net/th?id=OIP.fLI-fIeiAEMZwLhz6KkcMQAAAA&w=201&h=200&c=7&o=5&pid=1.7",
  //   ],
  // })
  // @Prop({
  //   type: Array as PropType<string[]>,
  //   required: true,
  //   default: () => {
  //     return [];
  //   },
  // })
  // readonly imgs!: string[];

  @Prop({
    type: Array,
    default: () => {
      return [];
    },
  })
  imgs!: string[];
  viewer!: Viewer;

  mounted(): void {
    this.viewer = new Viewer(document.getElementById("img") as HTMLElement, {
      title: true,
      navbar: false,
      toolbar: {
        zoomIn: true,
        zoomOut: true,
        reset: true,
        rotateRight: true,
      },
    });
  }
  // @Watch("imgs", {deep: true})
  // onImgsChange(): void {
  //   this.$forceUpdate();
  // }

  show(): void {
    this.viewer.show();
  }
  hide(): void {
    this.viewer.hide();
  }
}
</script>

<style lang="scss" scoped>
.img-card {
  background-color: #000;
}
</style>
