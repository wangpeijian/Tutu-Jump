(function () {

    function ScorePanel() {
        var _proto = ScorePanel.prototype;

        this.self = null;

        this.radishList = [];

        this.level = 0;
        this.score = 0;

        _proto.init = function () {
            var _this = this;

            //初始化数据
            this.score = 0;
            this.radishList = [];

            //初始化积分面板
            var scorePanel = new Laya.Sprite();
            scorePanel.loadImage(GAME_SCORE_PANEL, 0, 10, GAME_SCORE_PANEL_WIDTH, GAME_SCORE_PANEL_HEIGHT);
            scorePanel.size(GAME_SCORE_PANEL_WIDTH, GAME_SCORE_PANEL_HEIGHT);
            scorePanel.zOrder = 1;
            this.self = scorePanel;

            //注册页面中使用的字体
            $helper.createFontFamily(function () {
                //初始化得分
                var scoreBar = new laya.display.Text();
                scoreBar.x = 40;
                scoreBar.y = 8;
                scoreBar.text = _this.score + "M";
                scoreBar.color = BUTTON_FONT_COLOR;
                scoreBar.align = "center";
                scoreBar.font = FONT_FAMILY;
                scoreBar.fontSize = 50;
                //scorePanel.zOrder = 99;
                scorePanel.addChild(scoreBar);
            });

            //初始化兔子状态条
            var x = 70, y = 80;
            var l_normal = new Laya.Sprite();
            l_normal.loadImage(STATUS_NORMAL, x, y, STATUS_NORMAL_WIDTH, STATUS_NORMAL_HEIGHT);
            scorePanel.addChild(l_normal);

            // for(var i = 0; i < 3; i++){
            //     var l_radish = new Laya.Sprite();
            //     y = 70;
            //     if(i = 0){
            //         x += STATUS_NORMAL_WIDTH + STATUS_PADDING;
            //     }else{
            //         x += STATUS_RADISH_WIDTH + STATUS_PADDING;
            //     }
                
            //     var status = new Laya.Sprite();
            //      l_normal.loadImage(STATUS_RADISH, x, y, STATUS_RADISH_WIDTH, STATUS_RADISH_HEIGHT);
            //     scorePanel.addChild(l_radish);
            //     this.radishList.push(l_radish);
            // }

            x += STATUS_RADISH_WIDTH + STATUS_PADDING, y = 80;
            var l_fat = new Laya.Sprite();
            l_fat.loadImage(STATUS_FAT, x, y, STATUS_FAT_WIDTH, STATUS_FAT_HEIGHT);
            scorePanel.addChild(l_fat);


            Laya.stage.addChild(scorePanel);
        }

        _proto._move = function () {

        }

        this.init();
    }

    //导出对象
    Laya.class(ScorePanel, "ScorePanel", Laya.Sprite);
})()