# 张俊的课程资源

<div align="center">
<head>
 <meta charset="UTF-8">
 <title>带日期的时钟</title>
 <style>
 h1 {
 text-align: center;
 }
 </style>
 </head>
 
 <body>
 
 <div>
 <canvas id="c1" width="200px" height="200px">
 
 </canvas>
 </div>
 
 <script type="text/javascript">
 var clock = document.getElementById("c1").getContext("2d");
 
// var clock = $("#huabu").get(0).getContext("2d"); //$中使用画布
 
 function play() {
 clock.clearRect(0, 0, 200, 200);
 clock.save();
 clock.translate(100, 100); //把画布中心转移到canvas中间
 biaopan();
 run();
 clock.restore();
 }
 setInterval(function() {
 play();
 }, 1000);
 
 function biaopan() {
 //绘制表盘
 clock.strokeStyle = " #9932CC";
 clock.lineWidth = 5;
 clock.beginPath();
 clock.arc(0, 0, 95, 0, 2 * Math.PI);
 clock.stroke();
 
 //刻度(小时)
 clock.strokeStyle = "#9932CC";
 clock.lineWidth = 5;
 for(var i = 0; i < 12; i++) {
  clock.beginPath();
  clock.moveTo(0, -95);
  clock.lineTo(0, -85);
  clock.stroke();
  clock.rotate(2 * Math.PI / 12);
 }
 //刻度(分钟)
 clock.strokeStyle = "#9932CC";
 clock.lineWidth = 3;
 for(var i = 0; i < 60; i++) {
  clock.beginPath();
  clock.moveTo(0, -95);
  clock.lineTo(0, -90);
  clock.stroke();
  clock.rotate(2 * Math.PI / 60);
 }
 //绘制文字
 clock.textAlign = "center";
 clock.textBaseline = "middle";
 clock.fillStyle = "#6495ED";
 clock.font = "20px 微软雅黑"
 for(var i = 1; i < 13; i++) {
  clock.fillText(i,Math.sin(2*Math.PI /12*i)*75,Math.cos(2*Math.PI/12*i)*-75);
 }
 }
 
 function run() {
 var date = new Date();
 var h = date.getHours();
 var m = date.getMinutes();
 var s = date.getSeconds();
// if(h > 12) {
//  h = h - 12;
// }
 //日期
 var week = date.getDay();
 var month = date.getMonth() + 1;
 var day = date.getDate();
 switch (week){
  case 1: week = "星期一";
  break;
  case 2: week = "星期二";
  break;
  case 3: week = "星期三";
  break;
  case 4: week = "星期四";
  break;
  case 5: week = "星期五";
  break;
  case 6: week = "星期六";
  break;
  default: week = "星期天";
  break;
 }
 clock.save();
 clock.textAlign = "center";
 clock.textBaseline = "middle";
 clock.fillStyle = "black";
 clock.font = "16px"
 clock.fillText(week,0,-40);
 clock.fillText(month+" 月",-40,0);
 clock.fillText(day+" 号",40,0);
 clock.stroke();
 clock.restore();
 
 //时针
 //分针60格 分针5格 
 clock.save();
 clock.rotate(2 * Math.PI / 12 * h + (2 * Math.PI / 60 * m + 2 * Math.PI / 60 * s / 60) / 12);
 clock.strokeStyle = "black";
 clock.lineWidth = 7;
 clock.beginPath();
 clock.moveTo(0, 0);
 clock.lineTo(0, -40);
 clock.lineCap = "round";
 clock.stroke();
 clock.restore();
 //分针
 //秒针60格 分针一格
 clock.save();
 clock.beginPath();
 clock.strokeStyle = "#D2691E";
 clock.lineWidth = 5;
 clock.rotate(2 * Math.PI / 60 * m + 2 * Math.PI / 60 * s / 60);
 clock.moveTo(0, 0);
 clock.lineTo(0, -50);
 clock.lineCap = "round";
 clock.stroke();
 clock.restore();
 //秒针
 clock.strokeStyle = "red";
 clock.rotate(2 * Math.PI / 60 * s);
 clock.lineWidth = 4;
 clock.beginPath();
 clock.moveTo(0, 0);
 clock.lineTo(0, -60);
 clock.lineCap = "round";
 clock.stroke();
 //中心
 clock.fillStyle = " #CCFFFF";
 clock.lineWidth = 5;
 clock.beginPath();
 clock.arc(0, 0, 10, 0, 2 * Math.PI);
 clock.fill();
 clock.strokeStyle = "cadetblue";
 clock.stroke();
 
 }
 </script>
 </body>
</div>

<div align="center"> <img src="https://visitor-badge.glitch.me/badge?page_id=zhangjunroger" /> </div>

# 梦在前方
<div align="center"> <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=2&id=70525&auto=1&height=66"></iframe> </div>

# 《神经网络与深度学习》虚拟仿真实验系统
<br>
<br>
<div align="center">
<input type="button" name="7" id="7" style="background-color: red; color: white; font-size: 18px; padding: 10px 20px;" value="进入虚拟仿真实验系统！" onclick="window.location.href='../index1.html'" />
</div>
<br>
<br>
<br>



# 作业提交
<body>
<form id="form1" name="form1" method="post" action="">
  <label for="1">学号：</label>
  <input name="1" type="text" id="1" value="221301100" />
</form>


<form id="form2" name="form2" method="post" action="">
  <label for="2">姓名：</label>
  <input name="2" type="text" id="2" value="某某某" />
</form>


<form id="form3" name="form3" method="post" action="">
  <label for="3">专业：</label>
  <input name="3" type="text" id="3" value="智能科学与技术" />
</form>


<form id="form4" name="form4" method="post" action="">
  <label for="4">课程：</label>
  <input name="4" type="text" id="4" value="神经网络与深度学习" />
</form>


<form id="form5" name="form5" enctype="multipart/form-data" method="post" action="">
  <label for="5">文件：   </label>
  <input type="file" name="5" id="5" />
 </form>


<form id="form6" name="form6" method="post" action="">
  提交：
  <input type="submit" name="6" id="6" value="提交文件" onclick="alert('开发中，敬请期待！...')" />
 </form>

</body>

# 张俊的课程资源

## 神经网络与深度学习（21、22级智能科学与技术、工业智能、信息与计算科学专业本科生）

1. 教材PDF                        [https://wwi.lanzoup.com/isO9O08c83xa](https://wwi.lanzoup.com/isO9O08c83xa)
2. Python入门 PPT                 [https://wwi.lanzoup.com/i26pD08c83zc](https://wwi.lanzoup.com/i26pD08c83zc)
3. 第1章 绪论 PPT                  [https://wwi.lanzoup.com/ipC6N15kj1vi](https://wwi.lanzoup.com/ipC6N15kj1vi)
4. 第2章 人工神经网络建模基础 PPT    [https://wwi.lanzoup.com/ikj4W08c843g](https://wwi.lanzoup.com/ikj4W08c843g)
5. 第3章 感知器神经网络 PPT         [https://wwi.lanzoup.com/izPJY08c845i](https://wwi.lanzoup.com/izPJY08c845i)
6. 第5章 径向基函数神经网络 PPT      [https://wwi.lanzoup.com/irxAY08c846j](https://wwi.lanzoup.com/irxAY08c846j)
7. 第6章 反馈神经网络 PPT           [https://wwi.lanzoup.com/iJpGh08c847a](https://wwi.lanzoup.com/iJpGh08c847a)
8. 第8章 深度神经网络 PPT           [https://wwi.lanzoup.com/iY75608c849c](https://wwi.lanzoup.com/iY75608c849c)
9. 第8章 深度神经网络—堆栈式自动编码器 PPT  [https://wwi.lanzoup.com/iN90k08c84be](https://wwi.lanzoup.com/iN90k08c84be)
10. 第8章 深度神经网络—受限玻尔兹曼机 PPT   [https://wwi.lanzoup.com/i45dH08c84fi](https://wwi.lanzoup.com/i45dH08c84fi)
11. 第8章 深度神经网络—卷积神经网络 PPT     [https://wwi.lanzoup.com/iIAaG0i4ryba](https://wwi.lanzoup.com/iIAaG0i4ryba)
12. 第9章  支持向量机基本原理 PPT          [https://wwi.lanzoup.com/iiaAb0i15nsb](https://wwi.lanzoup.com/iiaAb0i15nsb)]
13. 《神经网络与深度学习》上机指导书PDF      [https://wwi.lanzoup.com/iecrc08c868d](https://wwi.lanzoup.com/iecrc08c868d)
14. 沈阳工业大学实验报告(计算机程序设计类)    [https://wwi.lanzoup.com/iEcxn08c86ch](https://wwi.lanzoup.com/iEcxn08c86ch)
15. 数学基础PDF                    [https://wwi.lanzoup.com/iPZOR08c86af](https://wwi.lanzoup.com/iPZOR08c86af)
16. 参考书文件夹PDF                 [https://wwi.lanzoup.com/b011utjof](https://wwi.lanzoup.com/b011utjof)   密码:8jif
17. Pycharm_2020.2   [https://pan.baidu.com/s/147mqO_oPQy3VhwCclMD7Dw?pwd=lrgr](https://pan.baidu.com/s/147mqO_oPQy3VhwCclMD7Dw?pwd=lrgr)
18. Pycharm_2020.2激活包   [https://pan.baidu.com/s/1yWBgTj5Yj3j8oYTUZdwJSQ?pwd=kaqf](https://pan.baidu.com/s/1yWBgTj5Yj3j8oYTUZdwJSQ?pwd=kaqf)


## 运动控制系统（20级智能科学与技术专业本科生）

1. 教材pdf                    [https://wwi.lanzoup.com/idAdm08ca8wb](https://wwi.lanzoup.com/idAdm08ca8wb)
2. 第1章 绪论 PPT              [https://wwi.lanzoup.com/iv3wN08ca1if](https://wwi.lanzoup.com/iv3wN08ca1if)
3. 第2章 转速开环控制的直流调速系统 PPT  [https://wwi.lanzoup.com/iInyL08ca1kh](https://wwi.lanzoup.com/iInyL08ca1kh)
4. 第3章 转速闭环控制的直流调速系统 PPT  [https://wwi.lanzoup.com/igXbm08ca1ob](https://wwi.lanzoup.com/igXbm08ca1ob)
5. 第4章 转速、电流反馈控制的直流调速系统 PPT [https://wwi.lanzoup.com/iVEFC08ca1qd](https://wwi.lanzoup.com/iVEFC08ca1qd)
6. 第5章 直流调速系统的数字控制 PPT      [https://wwi.lanzoup.com/iSuJv08ca1sf](https://wwi.lanzoup.com/iSuJv08ca1sf)
7. 第6章 基于稳态模型的异步电动机调速系统 PPT  [https://wwi.lanzoup.com/irxo708ca1uh](https://wwi.lanzoup.com/irxo708ca1uh)
8. 三相异步电动机课件 PPT                   [https://wwi.lanzoup.com/iaAQi08ca3ze](https://wwi.lanzoup.com/iaAQi08ca3ze)
9. 第2章习题解答pdf                    [https://wwi.lanzoup.com/icTuW08ca4lg](https://wwi.lanzoup.com/icTuW08ca4lg)
10. 第3章习题解答pdf                    [https://wwi.lanzoup.com/iGAB808ca4oj](https://wwi.lanzoup.com/iGAB808ca4oj)
11. 第4章习题解答pdf                    [https://wwi.lanzoup.com/iFGjl08ca4pa](https://wwi.lanzoup.com/iFGjl08ca4pa)
12. 第5章习题解答pdf                    [https://wwi.lanzoup.com/iHT4f08ca4qb](https://wwi.lanzoup.com/iHT4f08ca4qb)
13. 第6章习题解答pdf                    [https://wwi.lanzoup.com/iwVou08ca4rc](https://wwi.lanzoup.com/iwVou08ca4rc)
14. 运动控制系统实验指导书pdf             [https://wwi.lanzoup.com/iILPT08ca83c](https://wwi.lanzoup.com/iILPT08ca83c)
15. matlab R2016b   [https://pan.baidu.com/s/1JQjLRFVpSHt5JacrCjjp6w?pwd=c39x](https://pan.baidu.com/s/1JQjLRFVpSHt5JacrCjjp6w?pwd=c39x)
16. matlab R2021a   [https://pan.baidu.com/s/1tpXTHPiqgKiu2w3uqTtjBA?pwd=p7yz](https://pan.baidu.com/s/1tpXTHPiqgKiu2w3uqTtjBA?pwd=p7yz)
17. matlab R2021a MAC  [https://pan.baidu.com/s/1-8H0IIL3-RVlJzR6LZAxdQ?pwd=pnwg](https://pan.baidu.com/s/1-8H0IIL3-RVlJzR6LZAxdQ?pwd=pnwg)

## 计算机控制系统（23级控制工程专业研究生）

1. 教材pdf                       [https://wwi.lanzoup.com/iVDHI08cbgpi](https://wwi.lanzoup.com/iVDHI08cbgpi)
2. chap1_计算机控制系统概述        [https://wwi.lanzoup.com/ivcdx0aaklah](https://wwi.lanzoup.com/ivcdx0aaklah)
3. chap2_信号转换与z变换           [https://wwi.lanzoup.com/iC0BO0aaklbi](https://wwi.lanzoup.com/iC0BO0aaklbi)
4. chap3_数学描述与性能分析         [https://wwi.lanzoup.com/ibgCf0aaklda](https://wwi.lanzoup.com/ibgCf0aaklda)
5. chap4_模拟化设计方法            [https://wwi.lanzoup.com/isf5z0aaklfc](https://wwi.lanzoup.com/isf5z0aaklfc)
6. chap5_直接设计方法              [https://wwi.lanzoup.com/iegfB0aaklhe](https://wwi.lanzoup.com/iegfB0aaklhe)
7. chap6_极点配置设计方法           [https://wwi.lanzoup.com/iAwU10aakljg](https://wwi.lanzoup.com/iAwU10aakljg)
8. chap7_先进控制规律的设计方法      [https://wwi.lanzoup.com/imrd30aaklkh](https://wwi.lanzoup.com/imrd30aaklkh)
9. 课后习题参考答案                 [https://wwi.lanzoup.com/iFtO20bp0evc](https://wwi.lanzoup.com/iFtO20bp0evc) 
10. matlab R2016b   [https://pan.baidu.com/s/1JQjLRFVpSHt5JacrCjjp6w?pwd=c39x](https://pan.baidu.com/s/1JQjLRFVpSHt5JacrCjjp6w?pwd=c39x)
11. matlab R2021a   [https://pan.baidu.com/s/1tpXTHPiqgKiu2w3uqTtjBA?pwd=p7yz](https://pan.baidu.com/s/1tpXTHPiqgKiu2w3uqTtjBA?pwd=p7yz)
12. matlab R2021a MAC  [https://pan.baidu.com/s/1-8H0IIL3-RVlJzR6LZAxdQ?pwd=pnwg](https://pan.baidu.com/s/1-8H0IIL3-RVlJzR6LZAxdQ?pwd=pnwg)

## 神经网络与深度学习（23级研究生）

1. 教材pdf                    [https://wwi.lanzoup.com/ifU7k08cbjmd](https://wwi.lanzoup.com/ifU7k08cbjmd)
2. Python入门 PPT             [https://wwi.lanzoup.com/i26pD08c83zc](https://wwi.lanzoup.com/i26pD08c83zc)
3. 数学基础PDF                 [https://wwi.lanzoup.com/iPZOR08c86af](https://wwi.lanzoup.com/iPZOR08c86af)
4. chap01-绪论 PPT             [https://wwi.lanzoup.com/iZwi308cbjxe](https://wwi.lanzoup.com/iZwi308cbjxe)
5. chap02-机器学习概述 PPT      [https://wwi.lanzoup.com/itHeD08cbk5c](https://wwi.lanzoup.com/itHeD08cbk5c)
6. chap03-线性模型 PPT         [https://wwi.lanzoup.com/i0oT308cbkeb](https://wwi.lanzoup.com/i0oT308cbkeb)
7. chap04-前馈神经网络 PPT      [https://wwi.lanzoup.com/imTV508cbkkh](https://wwi.lanzoup.com/imTV508cbkkh)
8. chap05-卷积神经网络 PPT      [https://wwi.lanzoup.com/iqiet0i4s1mj](https://wwi.lanzoup.com/iqiet0i4s1mj)
9. chap06-循环神经网络 PPT      [https://wwi.lanzoup.com/ijGHn08cbkyb](https://wwi.lanzoup.com/ijGHn08cbkyb)
10. 参考书文件夹PDF             [https://wwi.lanzoup.com/b011utjof](https://wwi.lanzoup.com/b011utjof)   密码:8jif
11. Pycharm_2020.2   [https://pan.baidu.com/s/147mqO_oPQy3VhwCclMD7Dw?pwd=lrgr](https://pan.baidu.com/s/147mqO_oPQy3VhwCclMD7Dw?pwd=lrgr)
12. Pycharm_2020.2激活包   [https://pan.baidu.com/s/1yWBgTj5Yj3j8oYTUZdwJSQ?pwd=kaqf](https://pan.baidu.com/s/1yWBgTj5Yj3j8oYTUZdwJSQ?pwd=kaqf)

## 智能控制（22级研究生）

1. 教材pdf                    [https://pan.baidu.com/s/1fKtPGch1HaZvp2n1rXq66A?pwd=q4ha](https://pan.baidu.com/s/1fKtPGch1HaZvp2n1rXq66A?pwd=q4ha)
2. 第1章  绪论 PPT             [https://wwi.lanzoup.com/ikyZJ0fwhkte](https://wwi.lanzoup.com/ikyZJ0fwhkte)
3. 第2章 模糊控制论－理论基础 PPT [https://wwi.lanzoup.com/i5B6A0fwhl7i](https://wwi.lanzoup.com/i5B6A0fwhl7i)
4. 第2章 模糊控制论－控制系统 PPT [https://wwi.lanzoup.com/ij2ES0fwhl0b](https://wwi.lanzoup.com/ij2ES0fwhl0b)
5. 第3章 人工神经元网络控制论－网络模型 PPT  [https://wwi.lanzoup.com/ig1oW0fwhl9a](https://wwi.lanzoup.com/ig1oW0fwhl9a)
6. 第3章 人工神经元网络控制论－控制基础 PPT  [https://wwi.lanzoup.com/iqE7n0fwhl8j](https://wwi.lanzoup.com/iqE7n0fwhl8j)
7. 智能控制基础课后习题答案 PDF   [https://wwi.lanzoup.com/ib1Zv0fwhlab](https://wwi.lanzoup.com/ib1Zv0fwhlab)
8. matlab R2016b   [https://pan.baidu.com/s/1JQjLRFVpSHt5JacrCjjp6w?pwd=c39x](https://pan.baidu.com/s/1JQjLRFVpSHt5JacrCjjp6w?pwd=c39x)
9. matlab R2021a   [https://pan.baidu.com/s/1tpXTHPiqgKiu2w3uqTtjBA?pwd=p7yz](https://pan.baidu.com/s/1tpXTHPiqgKiu2w3uqTtjBA?pwd=p7yz)
10. matlab R2021a MAC  [https://pan.baidu.com/s/1-8H0IIL3-RVlJzR6LZAxdQ?pwd=pnwg](https://pan.baidu.com/s/1-8H0IIL3-RVlJzR6LZAxdQ?pwd=pnwg)

