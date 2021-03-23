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

import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component
export default class ImgCard extends Vue {
  @Prop({
    type: Array,
    default: () => {
      return [];
    },
  })
  imgs!: string[];
  viewer!: Viewer;

  @Watch("imgs")
  onImgsChange(newVal: string[]): void {
    if (!newVal.length) {
      return;
    }
    this.$nextTick(() => this.viewer.update())
  }

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
