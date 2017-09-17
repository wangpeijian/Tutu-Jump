(function () {
	//初始化窗口
	function initSystem() {
		Laya.init(SCREEN_WIDTH, SCREEN_HEIGHT, Laya.WebGL);
		Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL;
		Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
		Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
		Laya.stage.scaleMode = Laya.Stage.SCREEN_NONE;
	}

	//游戏运行引擎
	function initEngine() {
		var engine = new Engine();

		//监听点击蹦跳
		Laya.stage.on(laya.events.Event.CLICK, window, function () {
			engine.start();
		});
	}



	initSystem();
	initEngine();
	
})()