(function () {
	var OBJECT_COVER_PAGE = new CoverPage();
	var OBJECT_FORM_PAGE = new FormPage();
	var OBJECT_EXPLAIN_PAGE = new ExplainPage();
	var OBJECT_ENGINE = new Engine();

	//初始化窗口
	function initSystem() {
		Laya.init(SCREEN_WIDTH, SCREEN_HEIGHT, Laya.WebGL);
		Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL;
		Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
		Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
		Laya.stage.scaleMode = Laya.Stage.SCREEN_NONE;
	}

	function systenRun() {
		OBJECT_COVER_PAGE.init(createFormPage);

		//创建表单页面
		function createFormPage() {
			OBJECT_FORM_PAGE.init(createExplainPage);
		}

		//创建表单页面
		function createExplainPage() {
			OBJECT_EXPLAIN_PAGE.init(createEngine);
		}

		//游戏运行引擎
		function createEngine() {
			OBJECT_ENGINE.init();
		}
	}

	initSystem();
	systenRun();

})()