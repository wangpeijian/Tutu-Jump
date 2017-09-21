(function () {
	var OBJECT_COVER_PAGE = new CoverPage();
	var OBJECT_FORM_PAGE = new FormPage();
	var OBJECT_EXPLAIN_PAGE = new ExplainPage();
	var OBJECT_ENGINE = new Engine();
	var RANKING_PAGE = new RankingPage();

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

	function complete() {
		console.log("oncom")
		var text = new Laya.Text();
		text.fontSize = 40;
		text.color = "#FF00FF";
		text.text = "A10";
		text.font = "BitMicro"		
		text.pos(600, 600);
		Laya.stage.addChild(text);
		Laya.timer.once(500, RANKING_PAGE, RANKING_PAGE.init);

	}

	initSystem();
	// systenRun();
	var asset = [];
	asset.push({
		url: "background/ranking.png",
		type: Laya.Loader.IMAGE
	});
	asset.push({
		url:"res/atlas/button.json",
		type:Laya.Loader.ATLAS
	})
	asset.push({
		url: "res/BitMicro01.ttf"
	})
	Laya.loader.load(asset, laya.utils.Handler.create(this, complete));


})()