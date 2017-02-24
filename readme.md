# 简介
图表插件是通过g2-mobile依赖[gcanvas插件](../weex-plugin-gcanvas)实现的

# 如何用[weexpack](https://github.com/weexteam/weex-pack)命令安装使用

目前图表和gcanvas插件已经上传weex插件市场，可以通过weexpack plugin命令安装使用

1.安装weexpack

npm install -g weexpack

2.创建工程，比如myproj

weexpack create myproj

3.创建运行平台

cd myproj & weexpack platform add ios (需要android 则 weexpack platform add android)

4.添加图表插件

weexpack plugin add weex-chart （会检测到依赖插件并自动添加）

5.编译和运行demo

把demo文件（位于本repo的 examples/下的所有文件 你可以clone一下）拷贝到项目工程目录的src下，然后：

然后使用命令：weexpack run ios (android) 可在模拟器或者device上运行

# 用法及说明

```html
<chart id="c1" width="750" height="400"></chart>
```
```
var G2=require('weex-chart')('g2');//使用g2这个chart 目前只支持g2-mobile
module.exports={
        ready:function(){
            var chart = new GM.Chart({
                    id: 'c1'
            });
            ...
            chart.render()
        }
}
```

G2-mobile语法请参照
[g2-mobile](https://antv.alipay.com/g2-mobile/doc/index.html)
不支持内容
由于g2-mobile是给浏览器页面设计的 weex环境与浏览器环境有较大差异 因此一些g2-mobile的功能暂时无法支持,主要如下
 - `animate 动画`
 - `guide 辅助线`
 
 如果您发现有别的特性或者api 无法支持 或者支持不好 请提交issue 谢谢


# changelog
支持weex sdk 0.10.0