(function () {

    function ScorePanel() {
        var _proto = ScorePanel.prototype;

        this.self = null;
        this.scoreText = null;
        this.radishList = [];
        this.fatStatus = new Laya.Animation();
        this.fatStatus.loadAnimation(STATUS_ANI);

        this.level = 0;
        this.score = 0;

        _proto.init = function () {
            //初始化数据
            this.level = 0;
            this.score = 0;

            //初始化积分面板
            var scorePanel = new Laya.Sprite();
            scorePanel.loadImage(GAME_SCORE_PANEL, 0, 10, GAME_SCORE_PANEL_WIDTH, GAME_SCORE_PANEL_HEIGHT);
            scorePanel.size(GAME_SCORE_PANEL_WIDTH, GAME_SCORE_PANEL_HEIGHT);
            scorePanel.zOrder = 1;
            this.self = scorePanel;
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

            this.fatStatus.x = 40;
            this.fatStatus.y = 50;
            scorePanel.addChild(this.fatStatus);
            this.createStatus(true);

            Laya.stage.addChild(scorePanel);
        }

        _proto.upgrade = function () {
            ++this.level;
            this.createStatus();
            return this.level === 3;
        }

        _proto.createStatus = function (clear) {
            if (clear) {
                this.level = 0;
            }

            //初始化兔子状态条
            var scorePanel = this.self;
            var fatStatus = this.fatStatus;
            var level = this.level > 3 ? 3 : this.level;
            fatStatus.play(level, false);
            fatStatus.stop();
            scorePanel.addChild(fatStatus);

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