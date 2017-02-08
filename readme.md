# 简介
图表插件是通过g2-mobile依赖[gcanvas插件](../weex-plugin-gcanvas)实现的

# demo
请使用 tnpm install -g weex-chart-demo  
然后运行weex-chart-demo   
然后用包含gcanvas的app 扫描二维码即可 

# 如何用[weexpack](https://github.com/weexteam/weex-pack)命令安装使用

目前图表和gcanvas插件已经上传weex插件市场，可以通过weexpack plugin命令安装使用

1.安装weexpack

npm install -g weexpack

2.创建工程，比如aaa

weexpack create aaa

3.创建运行平台

cd aaa & weexpack platform add ios (/android)

4.添加图表插件

weexpack plugin add weex-chart （会检测到依赖插件并自动添加）

5.编译和运行demo

把demo文件（在目录plugins/weex-chart/examples/下的所有文件）拷贝到项目工程aaa/src下，然后：

对安卓和iOS用命令：weexpack run ios (/android) 可在模拟器或者device上运行


