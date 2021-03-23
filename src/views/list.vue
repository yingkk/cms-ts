<template>
  <div class="list">
    <div class="top">
      <div class="list-category" @click="handleShowCategory">
        <div class="list-category-icon">
          <i class="fa fa-bars"></i>
        </div>
      </div>
      <search @searchText="handleSearch"></search>
    </div>

    <mt-popup
      v-if="isShowCategory"
      v-model="isShowCategory"
      popup-transition="popup-fade"
      position="left"
    >
      <div
        class="main"
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10"
      >
        <div
          :class="['item', activeCategory.id === item.id ? 'active' : '']"
          v-for="(item, index) in categories"
          :key="index"
          @click="handleClickCategoryItem(item)"
        >
          <div class="item-icon">
            <div class="item-icon-inner"></div>
          </div>
          <div class="item-content">
            <div class="item-content-inner">
              <div class="item-content-left">
                <span class="item-content-title">{{ item.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </mt-popup>

    <div class="container">
      <div class="cur-category">{{ activeCategory.name }}</div>
      <div class="loadmore">
        <mt-loadmore
          :top-method="loadTop"
          ref="loadmore"
          :bottom-method="loadMore"
          :auto-fill="true"
          :bottom-all-loaded="allLoaded"
        >
          <div class="main">
            <div
              :class="['item', selectedId === item.id ? 'active' : '']"
              v-for="(item, index) in datas"
              :key="index"
              @click="handleClick(item.id)"
            >
              <div class="item-icon">
                <div class="item-icon-inner">
                  <img src="../assets/logo.png" alt="" />
                </div>
              </div>
              <div class="item-content">
                <div class="item-content-inner">
                  <div class="item-content-left">
                    <span class="item-content-title">{{ item.title }}</span>
                    <span class="item-content-des">2021/02/24</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </mt-loadmore>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import search from "@/components/search.vue";
import loadmore from "mint-ui";

interface CategoryInf {
  name: string;
  id: string;
}

interface DataInf {
  id: string;
  icon: string;
  title: string;
}

@Component({
  components: {
    search,
  },
})
export default class List extends Vue {
  code = "";
  allLoaded = false;
  isShowCategory = false;
  selectedId = "";
  activeCategory!: CategoryInf;
  datas: DataInf[] = [
    {
      id: "1",
      icon: "1",
      title: "青釉布纹双系壶1",
    },
    {
      id: "2",
      icon: "1",
      title: "青釉布纹双系壶2",
    },
    {
      id: "3",
      icon: "1",
      title: "青釉布纹双系壶3",
    },
    {
      id: "4",
      icon: "1",
      title: "青釉布纹双系壶4",
    },
    {
      id: "5",
      icon: "1",
      title: "青釉布纹双系壶5",
    },
    {
      id: "6",
      icon: "1",
      title: "青釉布纹双系壶6",
    },
    {
      id: "7",
      icon: "1",
      title: "青釉布纹双系壶7",
    },
    {
      id: "8",
      icon: "1",
      title: "青釉布纹双系壶8",
    },
    {
      id: "9",
      icon: "1",
      title: "青釉布纹双系壶9",
    },
    {
      id: "10",
      icon: "1",
      title: "青釉布纹双系壶10",
    },
  ];
  categories: CategoryInf[] = [
    {
      id: "001",
      name: "test",
    },
    {
      id: "002",
      name: "test1",
    },
    {
      id: "003",
      name: "test2",
    },
    {
      id: "004",
      name: "test3",
    },
  ];
  $refs!: {
    loadmore: loadmore;
  };
  created(): void {
    //TODO confirm isUse
    this.code = this.$route.query.code as string;
    this.activeCategory = this.categories[0];
  }

  loadTop(): void {
    // TODO
    setTimeout(() => {
      this.$refs.loadmore.onTopLoaded();
    }, 2000);
  }

  loadMore(): void {
    this.allLoaded = true;
    setTimeout(() => {
      let last = this.datas[this.datas.length - 1];
      for (let i = 1; i <= 10; i++) {
        const _index = last.id + i;
        this.datas.push({
          id: _index + "",
          icon: last.id + i,
          title: "青釉布纹双系壶" + _index,
        });
      }
      this.allLoaded = false; //this.allLoaded = true; 若数据已全部获取完毕
      this.$refs.loadmore.onBottomLoaded();
    }, 2500);
  }
  handleClick(id: string): void {
    this.selectedId = id;
    this.$router.push({ name: "collectionInfo", query: { id: id } });
  }

  handleClickCategoryItem(item: CategoryInf): void {
    this.activeCategory = item;
    this.isShowCategory = false;
    this.$router.push({ name: "list", query: { id: item.id } });
    //TODO query data by categoryId
    this.datas = [
      {
        id: "1",
        icon: "1",
        title: "青釉1",
      },
      {
        id: "2",
        icon: "2",
        title: "青釉2",
      },
      {
        id: "3",
        icon: "3",
        title: "青釉3",
      },
      {
        id: "4",
        icon: "4",
        title: "青釉4",
      },
      {
        id: "5",
        icon: "5",
        title: "青釉5",
      },
      {
        id: "6",
        icon: "6",
        title: "青釉6",
      },
      {
        id: "7",
        icon: "7",
        title: "青釉7",
      },
      {
        id: "8",
        icon: "8",
        title: "青釉8",
      },
      {
        id: "9",
        icon: "9",
        title: "青釉9",
      },
      {
        id: "10",
        icon: "10",
        title: "青釉10",
      },
    ];
  }
  handleShowCategory(): void {
    this.isShowCategory = !this.isShowCategory;
  }
  handleSearch(searchText: string): void {
    console.log(searchText);
    //TODO query and reset datas
  }
}
</script>

<style lang="scss" scoped>
.list {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  .container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: hidden;
    .cur-category {
      width: 100%;
      height: 32px;
      line-height: 32px;
      padding: 0 16px;
      box-sizing: border-box;
      font-size: 18px;
      font-weight: 600;
      color: rgb(38, 149, 201);
      flex: none;
    }
  }
}
</style>
