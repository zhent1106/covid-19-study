<template>
  <div class="card-back">
    <!-- <div class="timeLine"></div> -->
    <div class="content-card"></div>
    <div class="card">
      <div class="timeLine"></div>
      <div
        class="card-index"
        v-for="(item, index) in newContent"
        :key="index"
      >
        <div class="time-text">{{item.pubDate|formatDate}}</div>
        <div class="card-content shadow">
          <div class="content-card1"></div>
          <div class="card-content1">
            <div class="timeLine"></div>
            <div class="timeIcon"></div>
            <div style="font-size:25px;">
              <a v-bind:href="item.sourceUrl">{{item.title}}</a></div>
            <div style="margin-top:20px;color:rgb(115, 115, 115);">{{item.summary}}</div>
            <div style="margin-top:20px;font-size:20px;">来源：{{item.infoSource}}</div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newContent: []
    };
  },
  created() {
    this.axios.get("/api/new").then(res => {
      this.newContent = res.data.data.results;
    });
  },
  filters: {
    formatDate: function(value) {
      let date = new Date(value);
      let y = date.getFullYear();
      let MM = date.getMonth() + 1;
      MM = MM < 10 ? "0" + MM : MM;
      let d = date.getDate();
      d = d < 10 ? "0" + d : d;
      let h = date.getHours();
      h = h < 10 ? "0" + h : h;
      let m = date.getMinutes();
      m = m < 10 ? "0" + m : m;
      let s = date.getSeconds();
      s = s < 10 ? "0" + s : s;
      return y + "-" + MM + "-" + d + " " + h + ":" + m + ":" + s;
    }
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
a {
  font-size: 25px;
  display: block;
  color: black;
}
.timeIcon {
  position: absolute;
  margin-left: -100px;
  margin-top: -95px;
  background-image: url(../assets/img/0.png);
  width: 20px;
  height: 20px;
}
.time-text {
  font-size: 25px;
  color: rgb(115, 115, 115);
  margin-top: 50px;
}
.timeLine {
  position: absolute;
  margin-left: 450px;
  width: 45px;
  height: 100%;
  left: 0;
  border-right: 1px solid gray;
}
.card {
  width: 80%;
  margin: 0 auto;
  margin-top: 10px;
  background-color: rgb(248, 248, 248);
}
.content-card {
  margin-top: 20px;
  height: 65px;
  background-color: rgb(248, 248, 248);
}
.content-card1 {
  height: 40px;
  background-color: white;
}
.card-index {
  width: 80%;
  margin: 0 auto;
  margin-top: 20px;
  background-image: url(../assets/img/onit.png);
}
.card-back {
  background-color: rgb(248, 248, 248);
  background-image: url(../assets/img/onit.png);
}
.card-content {
  height: 300px;
  background-color: white;
  margin-top: 30px;
  border-radius: 5%;
}
.card-content1 {
  width: 80%;
  margin: 0 auto;
  border-radius: 20%;
}
</style>
