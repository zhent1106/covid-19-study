<template>
  <div class="card-rumors">
    <h1 style="color:blue;margin-left:100px;margin-top:20px;">辟谣信息</h1>
    <div
      class="content-card-tz shadow"
      v-for="(item, index) in pageColumns"
      :key="index"
    >
      <div>
        <img
          class="rumor-img-tz"
          src="../assets/img/rumor_icon.png"
        >
      </div>
      <p
        class="font-tz1"
        style="margin-top:20px;"
      >{{item.title}}</p>
      <p class="font-tz2">{{item.mainSummary}}</p>
      <p class="font-tz2">{{item.body}}</p>
      <img
        class="img-tz2"
        src="../assets/img/rumor_image.png"
      >
    </div>
    <div>
      <span
        class="my-bullet"
        tabindex="0"
        role="button"
        @click="getBatch()"
      ></span>
      <span
        class="my-bullet"
        tabindex="0"
        role="button"
        @click="getBatch()"
      ></span>
      <span
        class="my-bullet"
        tabindex="0"
        role="button"
        @click="getBatch()"
      ></span>
      <span
        class="my-bullet"
        tabindex="0"
        role="button"
        @click="getBatch()"
      ></span>
      <span
        class="my-bullet"
        tabindex="0"
        role="button"
        @click="getBatch()"
      ></span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newContent: [],
      pageColumns: [],
      count: 0
    };
  },
  created() {
    this.getColumns();
  },
  methods: {
    getColumns() {
      this.axios({
        method: "get",
        url: "http://localhost:9292/api/rumors"
      }).then(res => {
        this.newContent = res.data.data.results;
        this.pageColumns = this.newContent.slice(this.count, this.count + 1);
        console.log(this.pageColumns);
      });
    },
    getBatch() {
      this.count += 1;
      this.pageColumns = this.newContent.slice(this.count, this.count + 1);
      if (this.count + 1 >= this.newContent.length) {
        this.count = 0;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.my-bullet {
  width: 12px;
  height: 12px;
  display: inline-block;
  cursor: pointer;
  background: gray;
  border-radius: 0px;
  margin: 0px 50px 0px 10px;
  border-radius: 6px;
  margin-left: 120px;
}
.img-tz2 {
  width: 300px;
  height: 300px;
  margin-top: -150px;
  margin-left: 400px;
}
.font-tz1 {
  font-size: 30px;
  margin-top: 50px;
  width: 80%;
  margin-top: 50px;
  color: rgb(0, 0, 0);
  margin: 0 auto;
}
.font-tz2 {
  font-size: 28px;
  width: 80%;
  margin: 0 auto;
  margin-top: 30px;
  color: rgb(78, 78, 78);
}
.rumor-img-tz {
  width: 100px;
  height: 50px;
  margin-top: 50px;
  margin-left: 50px;
}
.content-card-tz {
  width: 80%;
  margin: 0 auto;
  height: 650px;
  background-color: white;
  margin-top: 20px;
}
.card-rumors {
  background-color: rgb(248, 248, 248);
}
</style>
