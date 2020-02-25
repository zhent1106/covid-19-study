一：技术栈
（1）npm
（2）vue-router
（3）axios
（4）vue-chartjs
二：主要页面

1. 实时数据
   <1>疫情地图（用 vue-chartjs 方法，通过 china.js 和 echart.js 在 html 中画出一个地图，在 vue 中无法显示出地图，所以进行链接调取，具体详见视频操作）
   知识点链接：<https://vue-chartjs.org/zh-cn/>
   <https://www.echartsjs.com/examples/zh/index.html>
   <https://blog.csdn.net/weixin_36413887/article/details/80019625>
   <2>疫情折线图（此部分没有做，调取 Json 文件中的照片链接）
   <3>国内疫情详情（只调取到省的数据，没有调取各个市区的数据）

<4>国外疫情详情

.2. 实时报道
展示新闻的标题（点击标题查看详情）、内容、来源
.3. 辟谣信息
使用 slice() 方法【返回一个新的数组对象，这一对象是一个由 begin 和 end 决定的原数组的浅拷贝（包括 begin ，不包括 end ）。原始数组不会被改变。】
方法将辟谣信息展示到面板上面

.4. 许愿池
这部分使用轮播，巩固了一下上学期实训的时候的轮播效果
