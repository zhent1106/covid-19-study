<template>
  <div>
    <div class="card1 shadow">
      <div class="top1">
        <button class="button1 ">全国数据统计</button>
        <span class="word-color5 offset-l-5">数据截至：2020-2-19 24：00 数据来源：国家卫健委</span>
        <p class="word-color5 offset-l-7">数据范围：全国31省（自治区、直辖市）和新疆生产建设兵团</p>
      </div>
      <div class="content1 ">
        <div class="col-3  mt-3">
          <u
            class="sub-bar col-4 d-flex align-items-center justify-content-around col-4"
            style="text-decoration: none"
          >
            <li class="word-color4">现有确诊病例</li>
            <li class="word-color4">现有重症病例</li>
            <li class="word-color4">现有疑似病例</li>
          </u>
        </div>
        <div class="col-3  mt-2">
          <u
            class="sub-bar col-4 d-flex align-items-center justify-content-around col-4"
            style="text-decoration: none"
          >
            <li class="word-color1">57805</li>
            <li class="word-color1">11977</li>
            <li class="word-color1">5248</li>
          </u>
        </div>
        <div class="col-3 mr-4 mt-4">
          <u
            class="sub-bar col-4 d-flex align-items-center justify-content-around col-4"
            style="text-decoration: none"
          >
            <li class="word-color4">累计确诊病例</li>
            <li class="word-color4">累计治愈出院</li>
            <li class="word-color4">累计死亡</li>
          </u>
        </div>
        <div class="col-3 mt-2 mb-3">
          <u
            class="sub-bar col-4 d-flex mb-3 align-items-center justify-content-around"
            style="text-decoration: none"
          >
            <li class="word-color1">74185</li>
            <li class="word-color2">14376</li>
            <li class="word-color3">2004</li>
          </u>
        </div>
      </div>
    </div>
    <div class="card1 shadow">
      <div>
        <button class="button1">确诊人数地图</button>
        <span class="word-color5 offset-l-5">数据截至：2020-2-19 24：00 数据来源：国家卫健委</span>
      </div>
      <a
        style="font-size:25px;color:black;margin-left:50px;margin-top:80px;"
        href="http://127.0.0.1:8848/javascript-study/week1/chinemap.html"
      >地图查看</a>
      <img
        width="100%"
        src="https://img1.dxycdn.com/2020/0218/592/3397287380636754478-135.png"
        alt=""
      >
      <img
        width="100%"
        src="https://img1.dxycdn.com/2020/0215/889/3396732737150344863-135.png"
        alt=""
      >
      <img
        width="100%"
        src="https://img1.dxycdn.com/2020/0218/144/3397287438619245257-135.png"
        alt=""
      >
      <img
        width="100%"
        src="https://img1.dxycdn.com/2020/0215/931/3396732797279587289-135.png"
        alt=""
      >
      <img
        width="100%"
        src="https://img1.dxycdn.com/2020/0215/027/3396732825197178652-135.png"
        alt=""
      >
    </div>
    <div class="card1 shadow">
      <div>
        <button class="button1">各地疫情详情</button>
        <span class="word-color5 offset-l-5">数据截至：2020-2-19 24：00 数据来源：国家卫健委</span>
        <h1 style="margin-left:48%">中国</h1>
        <table
          width="96%"
          style="margin-top:20px"
          align="center"
          border="1"
        >
          <tr>
            <td></td>
            <td class="text-tz1">省市（自治区、直辖市）</td>
            <td class="text-tz1">确诊人数</td>
            <td class="text-tz1">死亡人数</td>
            <td class="text-tz1">治愈人数</td>
          </tr>
          <tr
            v-for="(item, index) in tabContent"
            :key="index"
          >
            <p class="bubble"></p>
            <td>{{item.provinceShortName}}</td>
            <td>{{item.confirmedCount}}</td>
            <td>{{item.deadCount}}</td>
            <td>{{item.curedCount}}</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="card1 shadow">
      <div>
        <button class="button1">各地疫情详情</button>
        <span class="word-color5 offset-l-5">数据截至：2020-2-19 24：00 数据来源：国家卫健委</span>
        <h1 style="margin-left:48%">其他国家</h1>
        <table
          width="96%"
          style="margin-top:20px;margin-left:85px;"
          align="center"
          border="1"
        >
          <tr>
            <td></td>
            <td class="text-tz1">国家</td>
            <td class="text-tz1">确诊人数</td>
            <td class="text-tz1">死亡人数</td>
            <td class="text-tz1">治愈人数</td>
          </tr>
          <tr
            v-for="(item, index) in tabwContent"
            :key="index"
          >
            <td></td>
            <td>{{item.provinceName}}</td>
            <td>{{item.confirmedCount}}</td>
            <td>{{item.deadCount}}</td>
            <td>{{item.curedCount}}</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="card1 card5">
      <div>
        <h1 style="margin-left:31.5%">武汉加油！中国加油！</h1>
      </div>
    </div>
  </div>
</template>
<script>
//  <td>{{tabContent[0].cities[0].cityName}}</td>
export default {
  data() {
    return {
      tabContent: [],
      tabwContent: []
    };
  },
  created() {
    this.axios.get("/api/area").then(res => {
      this.tabContent = res.data.data.results;
    });
    this.axios.get("/api/warea").then(res => {
      this.tabwContent = res.data.data.results;
    });
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.bubble {
  display: inline-block;
  width: 25px;
  height: 25px;
  overflow: hidden;
  margin-left: 55px;
  background: url(../assets/img/open.jpg) center left no-repeat;
  background-size: 100% auto;
}
.word-color1 {
  font-size: 30px;
  color: rgb(92, 115, 255);
  font-weight: bold;
}
.word-color2 {
  font-size: 30px;
  color: rgb(50, 177, 108);
  font-weight: bold;
}
.word-color3 {
  font-size: 30px;
  font-weight: bold;
}
.word-color4 {
  font-size: 28px;
}
.word-color5 {
  color: rgb(139, 154, 188);
}
.card1 {
  margin-top: 25px;
  margin-bottom: 30px;
}
.card5 {
  background-color: rgb(250, 81, 42);
  height: 80px;
  line-height: 80px;
}
.button1 {
  width: 180px;
  height: 50px;
  margin-top: 10px;
  margin-left: 10px;
  font-size: 25px;
  border-radius: 38%;
  background-color: rgb(92, 115, 255);
}
</style>
