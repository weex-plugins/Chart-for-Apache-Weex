/**
 * Created by godsong on 16/9/12.
 */
var Canvas=require('weex-gcanvas');
function CanvasElement(weexElement,canvasId) {
        //g2竟然对canvas做深拷贝 也是醉了，用string 绕过他们类型检查的坑，无奈脸
        var instance=new String();
        instance.weexElement = weexElement;
        Object.defineProperties(instance, {
            'currentStyle': {
                get: function () {
                    return Object.assign({}, weexElement.classStyle, weexElement.style);
                }
            },
            'offsetWidth':{
                get:function(){
                    var canvasWidth=parseFloat(weexElement.classStyle['width']||weexElement.style['width']);
                    return canvasWidth;
                    //return parseFloat(weexElement.classStyle['width']||weexElement.style['width'])
                }
            },
            'offsetHeight':{
                get:function(){
                    console.log('offsetHeight:',parseFloat(weexElement.classStyle['height']||weexElement.style['height']))
                    return parseFloat(weexElement.classStyle['height']||weexElement.style['height'])
                }
            }
        });
        instance.getContext=function(){
            return Canvas.getContext('2d')
        };
        return instance;
}
CanvasElement.init=function(canvasId,element) {
    //初始化canvas dom 并伪造getElementById和标准的getContext
    var canvasElement = new CanvasElement(element,canvasId);
    //todo 现在canvas只支持1个示例 所以id无意义
    document.getElementById=function(id) {
        return canvasElement;
    };

    return new Promise(function(resolve){
        Canvas.start(element.ref,function(){
            resolve(Canvas.getContext('2d'));

        });
    })
};

CanvasElement.reset=function() {
    Canvas.disable();
};

module.exports=CanvasElement;
