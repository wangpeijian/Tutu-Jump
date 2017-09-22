(function () {

    function ScorePanel() {
        var _proto = ScorePanel.prototype;

        this.self = null;
        this.scoreText = null;
        this.radishList = [];
        this.fat = null;

        this.level = 0;
        this.score = 0;

        _proto.init = function () {
            //初始化数据
            this.fat = null;
            this.level = 0;
            this.score = 0;
            this.radishList = [];

            //初始化积分面板
            var scorePanel = new Laya.Sprite();
            scorePanel.loadImage(GAME_SCORE_PANEL, 0, 10, GAME_SCORE_PANEL_WIDTH, GAME_SCORE_PANEL_HEIGHT);
            scorePanel.size(GAME_SCORE_PANEL_WIDTH, GAME_SCORE_PANEL_HEIGHT);
            scorePanel.zOrder = 1;
            this.self = scorePanel;

            //注册页面中使用的字体

            //初始化得分
            var scoreText = new laya.display.Text();
            scoreText.x = 40;
            scoreText.y = 8;
            scoreText.text = this.score + "M";
            scoreText.color = BUTTON_FONT_COLOR;
            scoreText.align = "center";
            scoreText.fontSize = 35;
            this.scoreText = scoreText;
            scorePanel.addChild(scoreText);


            //初始化兔子状态条
            var x = 40, y = 50;
            var l_normal = new Laya.Sprite();
            l_normal.loadImage(STATUS_NORMAL, x, y, STATUS_NORMAL_WIDTH, STATUS_NORMAL_HEIGHT);
            scorePanel.addChild(l_normal);
            for (var i = 0; i < 3; i++) {
                var l_radish = new Laya.Sprite();
                if (i === 0) {
                    x += STATUS_NORMAL_WIDTH + STATUS_PADDING;
                } else {
                    x += STATUS_RADISH_WIDTH + STATUS_PADDING;
                }

                var status = new Laya.Sprite();
                l_normal.loadImage(STATUS_RADISH_EMPTY, x, y, STATUS_RADISH_WIDTH, STATUS_RADISH_HEIGHT);
                scorePanel.addChild(l_radish);
                this.radishList.push(l_radish);
            }

            x += STATUS_RADISH_WIDTH + STATUS_PADDING;
            y = 50;
            var l_fat = new Laya.Sprite();
            l_fat.loadImage(STATUS_FAT_EMPTY, x, y, STATUS_FAT_WIDTH, STATUS_FAT_HEIGHT);
            this.fat = l_fat;
            scorePanel.addChild(l_fat);


            Laya.stage.addChild(scorePanel);
        }

        _proto.upgrade = function () {
            ++this.level;

            var x = 40, y = 50;
            for (var i = 0; i < 3; i++) {
                if (this.level - i <= 0) {
                    return;
                }

                if (i === 0) {
                    x += STATUS_NORMAL_WIDTH + STATUS_PADDING;
                } else {
                    x += STATUS_RADISH_WIDTH + STATUS_PADDING;
                }

                var radish = this.radishList[i];
                radish.loadImage(STATUS_RADISH, x, y, STATUS_RADISH_WIDTH, STATUS_RADISH_HEIGHT);

                if (i === 2) {
                    x += STATUS_RADISH_WIDTH + STATUS_PADDING;
                    y = 50;
                    this.fat.loadImage(STATUS_FAT, x, y, STATUS_FAT_WIDTH, STATUS_FAT_HEIGHT);
                }
            }

            return this.level === 3;
        }

        _proto._move = function () {
            this.scoreText.text = this.score + "M";
        }

        this.init();
    }

    //导出对象
    Laya.class(ScorePanel, "ScorePanel", Laya.Sprite);
})()