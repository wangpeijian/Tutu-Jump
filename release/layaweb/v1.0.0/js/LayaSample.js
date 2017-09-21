(function () {
	var OBJECT_COVER_PAGE = new CoverPage();
	var OBJECT_FORM_PAGE = new FormPage();
	var OBJECT_EXPLAIN_PAGE = new ExplainPage();
	var OBJECT_ENGINE = new Engine();
	var OBJECT_RANK = new RankingPage();

	//初始化窗口
	function initSystem() {
		Laya.Font.defaultFamily = FONT_FAMILY;
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
			OBJECT_ENGINE.init(createRank);
		}

		function createRank() {
			OBJECT_RANK.init(OBJECT_ENGINE.init.bind(OBJECT_ENGINE));
		}
	}

	function initWechat() {
		(function () {
			var wxshare = new Laya.HttpRequest();
			wxshare.once(Laya.Event.COMPLETE, this, this.onShareComplete);
			wxshare.once(Laya.Event.ERROR, this, function(){});

			wxshare.send('http://act.guoanfamily.com/openweixin/jsapi/getJsapiSignature?local_url=' + location.href, {}, 'post', 'json', ["Content-Type", "application/json;charset=UTF-8"]);
		})();

		function onShareComplete(response) {
			console.log(response);
			wx.config({
				debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
				appId: response.appid, // 必填，公众号的唯一标识
				timestamp: parseInt(response.timestamp), // 必填，生成签名的时间戳
				nonceStr: response.noncestr, // 必填，生成签名的随机串
				signature: response.signature, // 必填，签名，见附录1
				jsApiList: [
					'onMenuShareAppMessage',
					'onMenuShareTimeline'
				] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
			});
			wx.ready(function () {
				// 2. 分享接口
				// 2.1 监听“分享给朋友”，按钮点击、自定义分享内容及分享结果接口
				wx.onMenuShareAppMessage({
					title: SHARE_TITLE, //标题
					desc: SHARE_DESC, //描述
					link: SERVER_PATH, //连接地址指打开分享时页面地址
					imgUrl:  SERVER_PATH + 'share.jpg', //图片
					trigger: function (res) {
						// 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
					},
					success: function (res) { },
					cancel: function (res) { },
					fail: function (res) { }
				});
				//分享到朋友圈
				wx.onMenuShareTimeline({
					title: SHARE_TITLE,
					desc: SHARE_DESC, //描述
					link: SERVER_PATH,
					imgUrl: SERVER_PATH + 'share.jpg',
					trigger: function (res) {
						// 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
					},
					success: function (res) { },
					cancel: function (res) { },
					fail: function (res) { }
				});
				wx.error(function (res) { });
			})
		}
	}

	var asset = [];
	asset.push({
		url: "background/ranking.png",
		type: Laya.Loader.IMAGE
	});
	asset.push({
		url: ["res/atlas/button.json", "res/atlas/score.json"],
		type: Laya.Loader.ATLAS
	})


	initSystem();
	initWechat();
	Laya.loader.load(asset, laya.utils.Handler.create(this, systenRun));





})()