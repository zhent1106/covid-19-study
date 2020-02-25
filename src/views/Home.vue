<template>
  <div class="home-background">
    <div class="reveal">
      COVID-19新冠肺炎数据报告
    </div>
    <div>
      <li class="click-set">
        <router-link to="/data">点击进入</router-link>
      </li>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Raleway:400,400i,700");
.home-background {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 100vh;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  text-align: center;
  background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(16, 16, 16, 0.8)),
      to(rgba(16, 16, 16, 0.8))
    ),
    url(https://i.loli.net/2019/10/18/buDT4YS6zUMfHst.jpg);
  background-image: linear-gradient(
      rgba(16, 16, 16, 0.8),
      rgba(16, 16, 16, 0.8)
    ),
    url(https://i.loli.net/2019/10/18/buDT4YS6zUMfHst.jpg);
  background-size: cover;
}

/* 去除. */
ul,
li {
  list-style: none;
}
.click-set {
  margin-top: 100px;
  margin-left: -150px;
}
.button {
  margin-top: 100px;
}

a {
  color: aliceblue;
  font-size: 18px;
  text-decoration: none;
}

.reveal {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  color: #6ee1f5;
  font-size: 2em;
  font-family: Raleway, sans-serif;
  letter-spacing: 3px;
  text-transform: uppercase;
  white-space: pre;
}

.reveal span {
  opacity: 0;
  -webkit-transform: scale(0);
  transform: scale(0);
  -webkit-animation: fadeIn 2.4s forwards;
  animation: fadeIn 2.4s forwards;
}

.reveal::before,
.reveal::after {
  position: absolute;
  content: "";
  top: 0;
  bottom: 0;
  width: 2px;
  height: 100%;
  background: white;
  opacity: 0;
  -webkit-transform: scale(0);
  transform: scale(0);
}

.reveal::before {
  left: 50%;
  -webkit-animation: slideLeft 1.5s cubic-bezier(0.7, -0.6, 0.3, 1.5) forwards;
  animation: slideLeft 1.5s cubic-bezier(0.7, -0.6, 0.3, 1.5) forwards;
}

.reveal::after {
  right: 50%;
  -webkit-animation: slideRight 1.5s cubic-bezier(0.7, -0.6, 0.3, 1.5) forwards;
  animation: slideRight 1.5s cubic-bezier(0.7, -0.6, 0.3, 1.5) forwards;
}

@-webkit-keyframes fadeIn {
  to {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@keyframes fadeIn {
  to {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@-webkit-keyframes slideLeft {
  to {
    left: -6%;
    opacity: 1;
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
}

@keyframes slideLeft {
  to {
    left: -6%;
    opacity: 1;
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
}

@-webkit-keyframes slideRight {
  to {
    right: -6%;
    opacity: 1;
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
}

@keyframes slideRight {
  to {
    right: -6%;
    opacity: 1;
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
}

/*# sourceMappingURL=home1.css.map */
</style>
