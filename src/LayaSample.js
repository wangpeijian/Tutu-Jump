(function(){
    //初始化窗口
   
    Laya.init(SCREEN_WIDTH, SCREEN_HEIGHT, Laya.WebGL);

    Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL;
    Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
    Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
    Laya.stage.scaleMode = Laya.Stage.SCREEN_NONE;

    
    var back = new Background();

    var joy = new WonderWoman();
    joy.stand();

    Laya.stage.on(laya.events.Event.CLICK, this, mouseHandler);
    function mouseHandler(){
        joy.RUNNING ?  joy.fly() : joy.run()
    }
})()


