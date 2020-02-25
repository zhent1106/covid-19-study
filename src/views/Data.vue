<template>
  <div class="tz-data">
    <div class="hearder">
      <img
        src="../assets/img/hearder.png"
        class="header-img"
      >
    </div>
    <div class="col-4  mt-1 shadow">
      <ul class="sub-bar col-4 d-flex align-items-center justify-content-around col-4">
        <li>
          <div class="current-color">
            <router-link
              to="/data/detail"
              class="word-tz"
            >实时数据</router-link>
          </div>
        </li>
        <li>
          <router-link
            to="/data/new"
            class="word-tz"
          >实时报道</router-link>
        </li>
        <li>
          <router-link
            to="/data/rumors"
            class="word-tz"
          >辟谣信息</router-link>
        </li>
        <li>
          <router-link
            to="/data/column"
            class="word-tz"
          >许愿池</router-link>
        </li>
      </ul>
    </div>
    <!-- 能记住滚动条的位置，保证良好的体验 -->
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabContent: []
    };
  },
  created() {
    this.axios.get("/api/area").then(res => {
      this.tabContent = res.data.data.results;
    });
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.sub-bar {
  height: 60px;
  font-weight: bold;
}
.word-tz {
  font-size: 22px;
  font-weight: bold;
}
a {
  text-align: center;
  color: #444;
}
.header-img {
  width: 100%;
}
.current-color {
  // background: #5c73ff;
  font-size: 30px;
}
.tz-data-card {
  width: 150px;
  height: 100px;
  box-shadow: 1px;
}
.hearder {
  width: 100%;
}
.tz-data {
  width: 60%;
  margin: 0 auto;
}
</style>
