(function () {
    //初始化窗口
    function initSystem() {
        Laya.init(SCREEN_WIDTH, SCREEN_HEIGHT, Laya.WebGL);
        Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL;
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
        Laya.stage.scaleMode = Laya.Stage.SCREEN_NONE;
    }

    //初始化游戏
    function initSource() {
     

        //初始化游戏人物
        var joy = new WonderWoman();
        joy.stand();
        Laya.stage.on(laya.events.Event.CLICK, this, mouseHandler);
        function mouseHandler() {
            joy.running ? joy.fly() : joy.run()
        }
    }

    //游戏运行引擎
    function initEngine(){
        var engine = new Engine();
        engine.start();
    }

    initSystem();
    initSource();
    initEngine();
})()


