<template>
  <div class="search">
    <form class="search-block" action="javascript:void 0">
      <input
        v-model="searchText"
        type="text"
        placeholder="搜索"
        class="search-input"
        @keyup.enter="handleSearch"
      />
    </form>
    <span class="search-prefix">
      <i class="fa fa-search"></i>
    </span>
    <span class="search-suffix" v-show="isShowClear" @click="handleClear">
      <i class="fa fa-close"></i>
    </span>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit, Watch } from "vue-property-decorator";

@Component
export default class Search extends Vue {
  searchText = '';
  isShowClear = false;

  @Watch("searchText")
  searchTextChange(newVal: string): boolean {
    return (this.isShowClear = newVal ? true : false);
  }

  @Emit("searchText")
  handleSearch(): string {
    return this.searchText;
  }

  @Emit("searchText")
  handleClear(): string {
    return (this.searchText = "");
  }
}
</script>

<style lang="scss" scoped>
.search {
  width: 100%;
  position: relative;
  .search-prefix {
    color: #a8a8a8;
    position: absolute;
    left: 16px;
    top: 50%;
    margin-top: -8px;
    font-size: 16px;
  }
  .search-suffix {
    color: #a8a8a8;
    position: absolute;
    right: 16px;
    top: 50%;
    margin-top: -8px;
    font-size: 16px;
  }
  .search-input {
    width: 100%;
    height: 40px;
    padding: 10px 16px 10px 40px;
    line-height: 40px;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    font-size: inherit;
    outline: none;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
}
</style>
