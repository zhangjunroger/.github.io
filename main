<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <!-- 适应移动端设备的网页浏览 -->
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <!-- 合理设置引入js/css文件的代码位置，防止样式覆盖 -->
    <!-- 这里用静态方式给出页面的css样式，也可以用link链接.css文件 -->
    <!-- 引入看板娘css文件 -->
    <script src="https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js"></script>
    <!-- 引入font-awesome字体 -->
    <!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/font-awesome/css/font-awesome.min.css"/> -->
    <link rel="stylesheet" href="https://cdn.bootcss.com/font-awesome/4.3.0/css/font-awesome.min.css">
    <script src="https://cdn.jsdelivr.net/gh/stevenjoezhang/live2d-widget/autoload.js"></script>
    <style type="text/css">
        /* 里面的代码应符合css格式规范 */
        /* 页面整体样式 */
        html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0}body{font-family:Helvetica,arial,freesans,clean,sans-serif;font-size:16px;line-height:1.6;color:#333;padding:20px;max-width:960px;margin:0 auto}body>*:first-child{margin-top:0 !important}body>*:last-child{margin-bottom:0 !important}p,blockquote,ul,ol,dl,table,pre{margin:15px 0}h1,h2,h3,h4,h5,h6{margin:20px 0 10px;padding:0;font-weight:bold;-webkit-font-smoothing:antialiased}h1 tt,h1 code,h2 tt,h2 code,h3 tt,h3 code,h4 tt,h4 code,h5 tt,h5 code,h6 tt,h6 code{font-size:inherit}h1{font-size:28px;color:#000}h2{font-size:24px;border-bottom:1px solid #ccc;color:#000}h3{font-size:18px}h4{font-size:16px}h5{font-size:14px}h6{color:#777;font-size:14px}body>h2:first-child,body>h1:first-child,body>h1:first-child+h2,body>h3:first-child,body>h4:first-child,body>h5:first-child,body>h6:first-child{margin-top:0;padding-top:0}a:first-child h1,a:first-child h2,a:first-child h3,a:first-child h4,a:first-child h5,a:first-child h6{margin-top:0;padding-top:0}h1+p,h2+p,h3+p,h4+p,h5+p,h6+p{margin-top:10px}a{color:#4183c4;text-decoration:none}a:hover{text-decoration:underline}ul,ol{padding-left:30px}ul li>:first-child,ol li>:first-child,ul li ul:first-of-type,ol li ol:first-of-type,ul li ol:first-of-type,ol li ul:first-of-type{margin-top:0}ul ul,ul ol,ol ol,ol ul{margin-bottom:0}dl{padding:0}dl dt{font-size:14px;font-weight:bold;font-style:italic;padding:0;margin:15px 0 5px}dl dt:first-child{padding:0}dl dt>:first-child{margin-top:0}dl dt>:last-child{margin-bottom:0}dl dd{margin:0 0 15px;padding:0 15px}dl dd>:first-child{margin-top:0}dl dd>:last-child{margin-bottom:0}pre,code,tt{font-size:12px;font-family:Consolas,"Liberation Mono",Courier,monospace}code,tt{margin:0;padding:0;white-space:nowrap;border:1px solid #eaeaea;background-color:#f8f8f8;border-radius:3px}pre>code{margin:0;padding:0;white-space:pre;border:0;background:transparent}pre{background-color:#f8f8f8;border:1px solid #ccc;font-size:13px;line-height:19px;overflow:auto;padding:6px 10px;border-radius:3px}pre code,pre tt{background-color:transparent;border:0}blockquote{border-left:4px solid #DDD;padding:0 15px;color:#777}blockquote>:first-child{margin-top:0}blockquote>:last-child{margin-bottom:0}hr{clear:both;margin:15px 0;height:0;overflow:hidden;border:0;background:transparent;border-bottom:4px solid #ddd;padding:0}table th{font-weight:bold}table th,table td{border:1px solid #ccc;padding:6px 13px}table tr{border-top:1px solid #ccc;background-color:#fff}table tr:nth-child(2n){background-color:#f8f8f8}img{max-width:100%}    
        body {
            background-color:#e4f6ff
        }
        /* 动画画布样式 */
        canvas{
            position: static;
            width: 100%;
            height: 600px;
            background: #f4fffe;
        }
        /* 设置页面右侧滚动条样式 */
        /* 滚动条凹槽的颜色，还可以设置边框属性 */
        ::-webkit-scrollbar-track-piece { 
            background-color:#c8ebff;
        }
        /* 滚动条的宽高 */
        ::-webkit-scrollbar {
            width:15px;
            height:10px;
        }
        /* 滚动条内部小滑块 */
        ::-webkit-scrollbar-thumb {
            background-color:#0d71c4;
            background-clip:padding-box;
            min-height:28px;
            background-image: -webkit-linear-gradient(45deg, rgb(71, 227, 255) 25%, transparent 30%,transparent 70%, rgba(27, 73, 173, 0.979) 25%);
        }
        ::-webkit-scrollbar-thumb:hover {
            background-color:rgb(5, 155, 255);
        }
    </style>
    <title>Silence_Tang | 凛冬散尽，星河长明。</title>
    <link rel="shortcut icon" href="https://z3.ax1x.com/2021/07/18/W8UfJJ.png" type="image/x-icon">
    <link rel="icon" href="https://z3.ax1x.com/2021/07/18/W8UfJJ.png" type="image/x-icon">
    <link rel="apple-touch-icon" href="https://z3.ax1x.com/2021/07/18/W8UfJJ.png">
</head>

<body>
    <!-- 引入人物动画js -->
    <script src="https://www.html5tricks.com/demo/html5-person-joint/js/index.js"></script>
    <!-- 引入不蒜子计数 -->
    <script async src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>
    <!-- 引入旋转花瓣加载特效 -->
    <center>
        浏览量：<span id="busuanzi_value_site_pv"><i class="fa fa-spinner fa-spin"></i></span>👀 | 访客数：<span id="busuanzi_value_site_uv"><i class="fa fa-spinner fa-spin"></i></span>👦
    </center>
    <!-- 修正计数初始值 -->
    <!-- <script>
        $(document).ready(function() {
            var int = setinterval(fixcount, 50); // 50ms周期检测函数
            var countoffset = 1000; // 初始化首次数据
            function fixcount() {
                $("#busuanzi_value_site_pv").html(parseint($("#busuanzi_value_site_pv").html()) + countoffset);
                clearinterval(int);
                $("#busuanzi_value_site_uv").html(parseint($("#busuanzi_value_site_uv").html()) + countoffset); // 加上初始数据
                clearinterval(int); // 停止检测
            }
        });
    </script> -->
    <center><font size=8><font color=#00BFFF>↓</font><font color=#1E90FF>↓</font><font color=#00BFFF>↓</font></font></center>
    <hr>
        <div style="float:left;"><font size=4>Hello guys, welcom to my world !</font></div><!-- 左右浮动显示，使同一行文字部分居左部分居右 -->
        <div style="float:right;"><font size=4><a href="https://github.com/Silence-Tang">GitHub主页</a></font></div>
        <div align="center"><img src="https://z3.ax1x.com/2021/07/18/W8NOvq.jpg" alt="BG1" /></div>
        <center><font size=8 color=#1E90FF>Si</font><font size=8 color=#00BFFF>len</font><font size=8 color=#00FFF>ce</font><font size=8 color=#00FA9A>_</font></center>
        <center><font size=5>许我一溪风与月，醉里笑看云飞雪。</font></center>
        <p><img src="https://z3.ax1x.com/2021/07/18/W8U954.jpg" alt="BG2" /></p>
        <h1>一、个人简介 🙉</h1>
        <hr style="background: #3694f9;height:2px;border:none;">
        <p><img align="right" width=200 height=200 src="https://z3.ax1x.com/2021/07/18/W8UfJJ.png"></p>
        <ul><!--无序列表-->
            <font size=3>
                <li>学校：西安电子科技大学</li>
                <li>书院：丁香1号书院</li>
                <li>学院：计算机科学与技术学院</li>
                <li>专业：计算机科学与技术（普通方向）</li>
                <li>年级：2019级</li>
                <li>政治面貌：入党积极分子</li>
                <li>地区：江苏扬州 / 陕西西安</li>
            </font>
        </ul>
        <h1>二、联系方式 📱</h1>
        <hr style="background: #3694f9;height:2px;border:none;">
<pre>   <!--被包围在 pre 元素中的文本通常会保留空格和换行符-->
<code class="javascript"><font size=3 color=#000080>var WaysToContactMe = 
{
        phone  : "18252731880",
        qq     : "572084089",
        wechat : "tzc572084089",
        mail   : "572084089@qq.com"
};</font>
</code>
</pre>
        <h1>三、竞赛&amp;活动 🏆</h1>
        <hr style="background: #3694f9;height:2px;border:none;">
        <ul><!--加<ul>可以使带有·的行向右缩进一点-->
            <li>
                <!-- <strong>是加粗 -->
                <p><strong>大一学年（2019-2020）—— 综排：86.3（2/457） M2：93.28（2/457）</strong></p>
                <p>&nbsp;&nbsp;<em>1. 计科院合唱比赛二等奖（2019.9）</em></p>
                <!-- <em>是斜体 -->
                <p>&nbsp;&nbsp;<em>2. 校园马拉松（2019.11）</em></p>
                <p>&nbsp;&nbsp;<em>3. 星火杯校二等奖（2019.12）</em></p>
                <p>&nbsp;&nbsp;<em>4. 书院抗疫征文（2020.3）</em></p>
                <p>&nbsp;&nbsp;<em>5. 院级优秀共青团员（2020.4）</em></p>
                <p>&nbsp;&nbsp;<em>6. 数模校赛一等奖（2020.5）</em></p>
                <p>&nbsp;&nbsp;<em>7. 西电英语写作大赛三等奖（2020.6）</em></p>
                <p>&nbsp;&nbsp;<em>8. 经典诵读大赛优秀奖（2020.7）</em></p>
                <p>&nbsp;&nbsp;<em>9. 深圳杯数模竞赛（2020.8）</em></p>
                <p>&nbsp;&nbsp;<strong>2019-2020学年国家奖学金（2020.10）</strong></p>
            </li>
            <li>
                <p><strong>大二学年（2020-2021）—— 综排：</strong></p>
                <p>&nbsp;&nbsp;<em>1. 国庆健步走二等奖（2020.10）</em></p>
                <p>&nbsp;&nbsp;<em>2. 大学生英语竞赛二等奖（2020.11）</em></p>
                <p>&nbsp;&nbsp;<em>3. 校园迷你马拉松（2019.11）</em></p>
                <p>&nbsp;&nbsp;<em>4. 数模国赛省二等奖（2020.12）</em></p>
                <p>&nbsp;&nbsp;<em>5. 大学生数学竞赛三等奖（2020.12）</em></p>
                <p>&nbsp;&nbsp;<em>6. 星火杯校三等奖（2020.12）</em></p>
                <p>&nbsp;&nbsp;<em>7. 书院考前压力团辅（2020.12）</em></p>
                <p>&nbsp;&nbsp;<em>8. 书院征文（2021.1）</em></p>
                <p>&nbsp;&nbsp;<em>9. 统信UOS培训认证（2021.2）</em></p> 
                <p>&nbsp;&nbsp;<em>10.数模美赛M奖（2021.2）</em></p>
                <p>&nbsp;&nbsp;<em>11.校运动会入场式方阵+拔河（2021.4）</em></p>
                <p>&nbsp;&nbsp;<em>12.校园马拉松（2021.5）</em></p>
                <p>&nbsp;&nbsp;<em>13.西电英语写作大赛二等奖（2021.6）</em></p>
                <p>&nbsp;&nbsp;<em>14.西电英语阅读大赛特等奖（2021.6）</em></p>
                <p>&nbsp;&nbsp;<strong>2019-2020学年（2020.10）</strong></p>        
            </li>
        </ul>
        <h1>四、个人技能 ⭐️</h1>
        <hr style="background: #3694f9;height:2px;border:none;">
        <!--width:num值越小表格越靠右，反之靠左-->
        <div style="margin:0 auto;width:400px">
            <table align="center">
                <thead>
                    <tr>
                        <th align="center">技能</th>
                        <th align="center">熟练度</th>
                        <th align="center">技能</th>
                        <th align="center">熟练度</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td align="center">C语言</td>
                        <td align="center">●●●●●○○</td>
                        <td align="center">HTML/CSS/MD</td>
                        <td align="center">●●●●○○○</td>
                    </tr>
                    <tr>
                        <td align="center">Matlab</td>
                        <td align="center">●●●●●○○</td>
                        <td align="center">CET4</td>
                        <td align="center">621</td>
                    </tr>
                    <tr>
                        <td align="center">Python</td>
                        <td align="center">●●●●○○○</td>
                        <td align="center">CET6</td>
                        <td align="center">609</td>
                    </tr>
                    <tr>
                        <td align="center">Microsoft Office</td>
                        <td align="center">●●●●○○○</td>
                        <td align="center">🎤</td>
                        <td align="center">●●●●●●○</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h1>五、课程学习 🆒</h1>
        <hr style="background: #3694f9;height:2px;border:none;">
        <!--width:num值越小表格越靠右，反之靠左-->
        <div style="margin:0 auto;width:920px">
            <table align="center">
                <thead>
                    <tr>
                        <th align="center">专业核心课</th>
                        <th align="center">学分绩一览</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td align="center">
                            <!-- 引入echarts.js -->
                            <script src="https://cdn.staticfile.org/echarts/4.3.0/echarts.min.js"></script>
                            <!--雷达图-->
                            <div id="radar" style="width: 430px;height:400px;"></div>
                            <script type="text/javascript">
                                var myChart = echarts.init(document.getElementById('radar'));
                                var option = {
                                tooltip: {
                                    trigger: 'item',
                                    showContent: true
                                },
                                backgroundColor: '#e4f6ff',
                                color: ['#FF0000','#00BFFF'],
                                title: {
                                },
                                legend: {
                                    data: ['最高', '个人']
                                },
                                radar: {
                                    indicator: [
                                        { name: '计算机组成与体系结构', max: 100},
                                        { name: '数据结构', max: 100},
                                        { name: '离散数学', max: 100},
                                        { name: '计算机网络', max: 100},
                                        { name: '操作系统', max: 100},
                                    ]
                                },
                                series: [{
                                    name: '最高分 vs 个人得分',
                                    type: 'radar',
                                    data: [
                                        {
                                            value: [97, 100, 100, 96, 95],
                                            name: '最高'
                                        },
                                        {
                                            value: [91, 84, 95, 94, 93],
                                            name: '个人'
                                        }
                                    ]
                                }]
                            };
                            myChart.setOption(option);
                            </script>
                        </td>
                        <td align="center">
                            <!--折线图-->
                            <div id="line" style="width: 430px;height:400px;"></div>
                            <script type="text/javascript">
                                var myChart = echarts.init(document.getElementById('line'));
                                var option = {
                                    legend: {},
                                    tooltip: {
                                        trigger: 'axis',
                                        showContent: true
                                    },
                                    title: {
                                        
                                    },
                                    backgroundColor: '#e4f6ff',
                                    color: ['#00CED1','#1E90FF'],
                                    dataset: {
                                        source: [
                                                ['项目', '大一上', '大一下', '大二上', '大二下'],
                                                ['M2科目', 86.30, 91.28, 90.87, 91.99],
                                                ['保研科目', 88.47, 91.55, 91.41, 91.65],
                                        ]
                                    },
                                    xAxis: {type: 'category'},
                                    yAxis: {gridIndex: 0, min: 86, max: 93},
                                    grid: {top: '15%'},  //调整折线图主体的纵向占比
                                    series: [
                                        {type: 'line', smooth: true, seriesLayoutBy: 'row'},
                                        {type: 'line', smooth: true, seriesLayoutBy: 'row'},
                                    ]
                                };
                                myChart.setOption(option);
                            </script>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <li><strong><font size=3>附:计科院2017级计算机科学与技术专业推免计算课程列表 <a href="https://pan.baidu.com/s/1xm5kaYdg5GyISvA7tX3DqA">详情</a> 提取码：ienk</font></strong></li>
        <p><li><strong><font size=3>附:推免计算课程学分占比（前4学期）：</font></strong></li></p>
        <!-- 饼图 -->
        <!--width:num值越小表格越靠右，反之靠左-->
        <div style="margin:0 auto;width:600px">
            <div id="main" style="width:600px;height:400px;"></div>
            <script type="text/javascript">
                var myChart = echarts.init(document.getElementById('main'));
                var option = {
                    tooltip: {
                        trigger: 'item',
                        showContent: true
                    },
                    //设置图表dom的颜色与页面背景一致
                    backgroundColor: '#e4f6ff',
                    series: [
                    {
                        type: 'pie',
                        radius: '65%',      // 饼图的半径 外半径为可视区尺寸(容器高宽中较小一项)的80%长度。
                        data:[              // 数据数组 name为数据项名称 value为数据项值
                            {value:17, name:'大一上'},
                            {value:23, name:'大一下'},
                            {value:22, name:'大二上'},
                            {value:22, name:'大二下'},
                        ],
                        label:{
                            normal:{
                                show:true,
                                position:'outer',    //标签的位置
                                textStyle : {
                                    fontWeight : 600 ,
                                    fontSize : 18    //文字的字体大小
                                },
                                formatter:'{d}%'     //设置百分比
                            }
                        },
                    }]
                };
                myChart.setOption(option);
            </script>
        </div>
        <p></p>
        <p><strong><font size=3>欢迎关注我的CSDN: <a href="https://blog.csdn.net/qq_45717425?spm=1001.2101.3001.5343">@XDU_TZC</a> || GitHub:<a href="https://github.com/Silence-Tang">@Slience-Tang</a></font></strong></p>
        <ul>
            <li>西电CS课程体系学习经验分享 <a href="https://blog.csdn.net/qq_45717425/article/details/114377616">戳这里</a></li>
            <li>OS上机实验详解 <a href="https://blog.csdn.net/qq_45717425/category_11180081.html?spm=1001.2014.3001.5482">戳这里</a></li>
            <li>计组实验详解 <a href="https://blog.csdn.net/qq_45717425/category_11206890.html">戳这里</a></li>
            <li>数电实验大作业-数字钟设计 <a href="https://blog.csdn.net/qq_45717425/article/details/118466655">戳这里</a></li>
            <li>HTML/CSS/MD相关 <a href="https://blog.csdn.net/qq_45717425/category_11219736.html">戳这里</a></li>
            <li>数学建模学习 <a href="https://blog.csdn.net/qq_45717425/category_11225058.html">戳这里</a></li>
        </ul>
        <h1>六、其他</h1>
        <hr style="background: #3694f9;height:2px;border:none;">
<pre>   <!--被包围在 pre 元素中的文本通常会保留空格和换行符-->
<code class="javascript"><font size=3 color=#000080>var Others = 
{
        NetEaseCloudMusic  : "<a href=" ">@__清晖引暮色c</a>",
        ZhiHu              : "<a href=" ">@Twilight风弦</a>",
};</font>
</code>
</pre>
        <!-- 脚注 -->
        <div id="footer">
            <center>
                <font size=4>Copyright © 2021 <font color=#1E90FF>Si</font><font color=#00BFFF>len</font><font color=#00FFF>ce</font><font color=#00FA9A>_</font></font>
            </center>
            <br>
        </div>
        <!-- 插入底部动画 -->
        <p><i><font color=#1E90FF>Actually, This Is A Pool Full of Magic Fish...</font></i></p>
        <div id="fish-container" class="container"></div>
        <!-- 引入fish.js文件 -->
        <!-- <script src="https://blog-static.cnblogs.com/files/blogs/695826/fish.js"></script> -->
        <!-- 博客园指定有什么大病...引用不了js，404了 -->
        <script type="text/javascript">
            var RENDERER = {
            POINT_INTERVAL : 5,
            FISH_COUNT : 3,
            MAX_INTERVAL_COUNT : 50,
            INIT_HEIGHT_RATE : 0.5,
            THRESHOLD : 50,
            init : function(){
                this.setParameters();
                this.reconstructMethods();
                this.setup();
                this.bindEvent();
                this.render();
            },
            setParameters : function(){
                this.$window = $(window);
                this.$container = $('#fish-container');
                this.$canvas = $('<canvas />');
                this.context = this.$canvas.appendTo(this.$container).get(0).getContext('2d');
                this.points = [];
                this.fishes = [];
                this.watchIds = [];
            },
            createSurfacePoints : function(){
                var count = Math.round(this.width / this.POINT_INTERVAL);
                this.pointInterval = this.width / (count - 1);
                this.points.push(new SURFACE_POINT(this, 0));
                
                for(var i = 1; i < count; i++){
                    var point = new SURFACE_POINT(this, i * this.pointInterval),
                        previous = this.points[i - 1];
                    point.setPreviousPoint(previous);
                    previous.setNextPoint(point);
                    this.points.push(point);
                }
            },
            reconstructMethods : function(){
                this.watchWindowSize = this.watchWindowSize.bind(this);
                this.jdugeToStopResize = this.jdugeToStopResize.bind(this);
                this.startEpicenter = this.startEpicenter.bind(this);
                this.moveEpicenter = this.moveEpicenter.bind(this);
                this.reverseVertical = this.reverseVertical.bind(this);
                this.render = this.render.bind(this);
            },
            setup : function(){
                this.points.length = 0;
                this.fishes.length = 0;
                this.watchIds.length = 0;
                this.intervalCount = this.MAX_INTERVAL_COUNT;
                this.width = this.$container.width();
                this.height = this.$container.height();
                this.fishCount = this.FISH_COUNT * this.width / 500 * this.height / 500;
                this.$canvas.attr({width : this.width, height : this.height});
                this.reverse = false;
                
                this.fishes.push(new FISH(this));
                this.createSurfacePoints();
            },
            watchWindowSize : function(){
                this.clearTimer();
                this.tmpWidth = this.$window.width();
                this.tmpHeight = this.$window.height();
                this.watchIds.push(setTimeout(this.jdugeToStopResize, this.WATCH_INTERVAL));
            },
            clearTimer : function(){
                while(this.watchIds.length > 0){
                    clearTimeout(this.watchIds.pop());
                }
            },
            jdugeToStopResize : function(){
                var width = this.$window.width(),
                    height = this.$window.height(),
                    stopped = (width == this.tmpWidth && height == this.tmpHeight);
                this.tmpWidth = width;
                this.tmpHeight = height;
                if(stopped){
                    this.setup();
                }
            },
            bindEvent : function(){
                this.$window.on('resize', this.watchWindowSize);
                this.$container.on('mouseenter', this.startEpicenter);
                this.$container.on('mousemove', this.moveEpicenter);
                this.$container.on('click', this.reverseVertical);
            },
            getAxis : function(event){
                var offset = this.$container.offset();
                
                return {
                    x : event.clientX - offset.left + this.$window.scrollLeft(),
                    y : event.clientY - offset.top + this.$window.scrollTop()
                };
            },
            startEpicenter : function(event){
                this.axis = this.getAxis(event);
            },
            moveEpicenter : function(event){
                var axis = this.getAxis(event);
                
                if(!this.axis){
                    this.axis = axis;
                }
                this.generateEpicenter(axis.x, axis.y, axis.y - this.axis.y);
                this.axis = axis;
            },
            generateEpicenter : function(x, y, velocity){
                if(y < this.height / 2 - this.THRESHOLD || y > this.height / 2 + this.THRESHOLD){
                    return;
                }
                var index = Math.round(x / this.pointInterval);
                
                if(index < 0 || index >= this.points.length){
                    return;
                }
                this.points[index].interfere(y, velocity);
            },
            reverseVertical : function(){
                this.reverse = !this.reverse;
                
                for(var i = 0, count = this.fishes.length; i < count; i++){
                    this.fishes[i].reverseVertical();
                }
            },
            controlStatus : function(){
                for(var i = 0, count = this.points.length; i < count; i++){
                    this.points[i].updateSelf();
                }
                for(var i = 0, count = this.points.length; i < count; i++){
                    this.points[i].updateNeighbors();
                }
                if(this.fishes.length < this.fishCount){
                    if(--this.intervalCount == 0){
                        this.intervalCount = this.MAX_INTERVAL_COUNT;
                        this.fishes.push(new FISH(this));
                    }
                }
            },
            render : function(){
                requestAnimationFrame(this.render);
                this.controlStatus();
                this.context.clearRect(0, 0, this.width, this.height);
                this.context.fillStyle = 'hsl(0, 0%, 95%)';
                
                for(var i = 0, count = this.fishes.length; i < count; i++){
                    this.fishes[i].render(this.context);
                }
                this.context.save();
                this.context.globalCompositeOperation = 'xor';
                this.context.beginPath();
                this.context.moveTo(0, this.reverse ? 0 : this.height);
                
                for(var i = 0, count = this.points.length; i < count; i++){
                    this.points[i].render(this.context);
                }
                this.context.lineTo(this.width, this.reverse ? 0 : this.height);
                this.context.closePath();
                this.context.fill();
                this.context.restore();
            }
        };
        var SURFACE_POINT = function(renderer, x){
            this.renderer = renderer;
            this.x = x;
            this.init();
        };
        SURFACE_POINT.prototype = {
            SPRING_CONSTANT : 0.03,
            SPRING_FRICTION : 0.9,
            WAVE_SPREAD : 0.3,
            ACCELARATION_RATE : 0.01,
            
            init : function(){
                this.initHeight = this.renderer.height * this.renderer.INIT_HEIGHT_RATE;
                this.height = this.initHeight;
                this.fy = 0;
                this.force = {previous : 0, next : 0};
            },
            setPreviousPoint : function(previous){
                this.previous = previous;
            },
            setNextPoint : function(next){
                this.next = next;
            },
            interfere : function(y, velocity){
                this.fy = this.renderer.height * this.ACCELARATION_RATE * ((this.renderer.height - this.height - y) >= 0 ? -1 : 1) * Math.abs(velocity);
            },
            updateSelf : function(){
                this.fy += this.SPRING_CONSTANT * (this.initHeight - this.height);
                this.fy *= this.SPRING_FRICTION;
                this.height += this.fy;
            },
            updateNeighbors : function(){
                if(this.previous){
                    this.force.previous = this.WAVE_SPREAD * (this.height - this.previous.height);
                }
                if(this.next){
                    this.force.next = this.WAVE_SPREAD * (this.height - this.next.height);
                }
            },
            render : function(context){
                if(this.previous){
                    this.previous.height += this.force.previous;
                    this.previous.fy += this.force.previous;
                }
                if(this.next){
                    this.next.height += this.force.next;
                    this.next.fy += this.force.next;
                }
                context.lineTo(this.x, this.renderer.height - this.height);
            }
        };
        var FISH = function(renderer){
            this.renderer = renderer;
            this.init();
        };
        FISH.prototype = {
            GRAVITY : 0.4,
            
            init : function(){
                this.direction = Math.random() < 0.5;
                this.x = this.direction ? (this.renderer.width + this.renderer.THRESHOLD) : -this.renderer.THRESHOLD;
                this.previousY = this.y;
                this.vx = this.getRandomValue(4, 10) * (this.direction ? -1 : 1);
                
                if(this.renderer.reverse){
                    this.y = this.getRandomValue(this.renderer.height * 1 / 10, this.renderer.height * 4 / 10);
                    this.vy = this.getRandomValue(2, 5);
                    this.ay = this.getRandomValue(0.05, 0.2);
                }else{
                    this.y = this.getRandomValue(this.renderer.height * 6 / 10, this.renderer.height * 9 / 10);
                    this.vy = this.getRandomValue(-5, -2);
                    this.ay = this.getRandomValue(-0.2, -0.05);
                }
                this.isOut = false;
                this.theta = 0;
                this.phi = 0;
            },
            getRandomValue : function(min, max){
                return min + (max - min) * Math.random();
            },
            reverseVertical : function(){
                this.isOut = !this.isOut;
                this.ay *= -1;
            },
            controlStatus : function(context){
                this.previousY = this.y;
                this.x += this.vx;
                this.y += this.vy;
                this.vy += this.ay;
                
                if(this.renderer.reverse){
                    if(this.y > this.renderer.height * this.renderer.INIT_HEIGHT_RATE){
                        this.vy -= this.GRAVITY;
                        this.isOut = true;
                    }else{
                        if(this.isOut){
                            this.ay = this.getRandomValue(0.05, 0.2);
                        }
                        this.isOut = false;
                    }
                }else{
                    if(this.y < this.renderer.height * this.renderer.INIT_HEIGHT_RATE){
                        this.vy += this.GRAVITY;
                        this.isOut = true;
                    }else{
                        if(this.isOut){
                            this.ay = this.getRandomValue(-0.2, -0.05);
                        }
                        this.isOut = false;
                    }
                }
                if(!this.isOut){
                    this.theta += Math.PI / 20;
                    this.theta %= Math.PI * 2;
                    this.phi += Math.PI / 30;
                    this.phi %= Math.PI * 2;
                }
                this.renderer.generateEpicenter(this.x + (this.direction ? -1 : 1) * this.renderer.THRESHOLD, this.y, this.y - this.previousY);
                
                if(this.vx > 0 && this.x > this.renderer.width + this.renderer.THRESHOLD || this.vx < 0 && this.x < -this.renderer.THRESHOLD){
                    this.init();
                }
            },
            render : function(context){
                context.save();
                context.translate(this.x, this.y);
                context.rotate(Math.PI + Math.atan2(this.vy, this.vx));
                context.scale(1, this.direction ? 1 : -1);
                context.beginPath();
                context.moveTo(-30, 0);
                context.bezierCurveTo(-20, 15, 15, 10, 40, 0);
                context.bezierCurveTo(15, -10, -20, -15, -30, 0);
                context.fill();
                
                context.save();
                context.translate(40, 0);
                context.scale(0.9 + 0.2 * Math.sin(this.theta), 1);
                context.beginPath();
                context.moveTo(0, 0);
                context.quadraticCurveTo(5, 10, 20, 8);
                context.quadraticCurveTo(12, 5, 10, 0);
                context.quadraticCurveTo(12, -5, 20, -8);
                context.quadraticCurveTo(5, -10, 0, 0);
                context.fill();
                context.restore();
                
                context.save();
                context.translate(-3, 0);
                context.rotate((Math.PI / 3 + Math.PI / 10 * Math.sin(this.phi)) * (this.renderer.reverse ? -1 : 1));
                
                context.beginPath();
                
                if(this.renderer.reverse){
                    context.moveTo(5, 0);
                    context.bezierCurveTo(10, 10, 10, 30, 0, 40);
                    context.bezierCurveTo(-12, 25, -8, 10, 0, 0);
                }else{
                    context.moveTo(-5, 0);
                    context.bezierCurveTo(-10, -10, -10, -30, 0, -40);
                    context.bezierCurveTo(12, -25, 8, -10, 0, 0);
                }
                context.closePath();
                context.fill();
                context.restore();
                context.restore();
                this.controlStatus(context);
            }
        };
        $(function(){
            RENDERER.init();
        });
        </script>
        <!-- 下面是回到顶部代码-->
        <div style="float:left">
            <div id="totop">
                <a href="javascript:;" id="btn">回到顶部↑</a>
            </div>
        </div>
        <script type="text/javascript">
            window.onload = function () {
                // 1.找到页面中的按钮
                var totop = document.getElementById("btn");
                totop.style.display ="none";
                var timer = null;
                // 2. 给按钮绑定点击事件
                totop.onclick =function () {
                    // 周期性定时
                    timer = setInterval(function () {
                        // 3.获取滚动条距离浏览器顶端的距离
                        var backTop = document.documentElement.scrollTop || 
                        document.body.scrollTop;
                        // 越滚越慢
                        speedTop =backTop/5;
                        document.documentElement.scrollTop=backTop-speedTop;
                        if(backTop==0){
                            clearInterval(timer);
                        }
                    },30)
                }
                // 设置临界值
                var pageHeight =700;
                window.onscroll =function () {
                    var backTop = document.documentElement.scrollTop || 
                    document.body.scrollTop;
                    if(backTop>pageHeight){
                        totop.style.display="block";
                    }else{
                        totop.style.display="none";
                    }
                }
            }
        </script>
</body>
</html>
