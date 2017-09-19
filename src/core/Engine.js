(function () {

    function Engine() {
        var _proto = Engine.prototype;

        this.cloudList = [];
        this.background = null;
        this.lantern = null;
        this.tutu = null;
        this.scorePanel = null;
        // this.scoreBar = null;
        // this.score = 0;
         this.startButton = null;
         this.moon = null;

        this.gameOver = false;

        _proto.start = function () {
            this.tutu.jump();
            Laya.timer.frameLoop(GAME_FRAME, this, this._move);
        }

        //初始化游戏场景
        _proto.init = function () {
            var _this = this;

            // -----------------积分部分-----------------
            this.scorePanel = new ScorePanel();
            // ----------------------------------

            //初始化背景
            this.background = new Background();

            //-----------------创建月亮和母兔子-----------------
            this.moon = new Moon(); 
            //----------------------------------

            //创建随机云彩
            for (var i = 0; i < CLOUD_NUMBER; i++) {
                var coordinateX = Math.random() * (SCREEN_WIDTH - CLOUD_WIDTH);

                //游戏开始时少展示一个云彩
                var coordinateY = ((SCREEN_HEIGHT - CLOUD_HEIGHT * (CLOUD_NUMBER - 1)) / (CLOUD_NUMBER - 1) + CLOUD_HEIGHT) * (i - 2);

                var cloud = new Cloud(coordinateX, coordinateY);
                this.cloudList.push(cloud);
            }

            //创建随机灯笼
            this.lantern = new Lantern();
            //创建随机萝卜
            this.radish = new Radish();
            //创建tutu
            this.tutu = new Tutu();

            //创建开始按钮
            var x = (SCREEN_WIDTH - BUTTON_WIDTH) / 2;
            var y = SCREEN_HEIGHT * 0.85; //this.tutu.self.y + TUTU_HEIGHT + FORM_MARGIN_BOTTOM * 6;
            $helper.createButton(BUTTON_SKIN_START, x, y, function (obj) {
                _this.startButton = obj;
                _this.start();
                $helper.destroy([_this.startButton]);
            })
        }

        //开始动画
        _proto._move = function () {
            if (this.gameOver) {
                //location.reload();
                return;
            }

            //触发所有模块的动画
            this.background._move();
            this.tutu._move();
            this.lantern._move();
            this.radish._move();
            for (var i = 0; i < CLOUD_NUMBER; i++) {
                this.cloudList[i]._move();
            }

            //判断游戏是否结束
             var tutu = this.tutu
            if (tutu.self.y > SCREEN_HEIGHT) {
                //游戏结束
                this.gameOver = true;
                return;
            }

            //展示得分
            var score = tutu.distance * GAME_SCORE_RATIO;
            this.scorePanel.score = parseInt(this.score);
            //this.scoreBar.text = 
                

            //开始判断物体间是否发生了碰撞
            var x = tutu.self.x + TUTU_WIDTH / 2;
            var y = tutu.self.y + TUTU_HEIGHT * 0.8;
            //1.云彩碰撞
            for (var i = 0; i < CLOUD_NUMBER; i++) {
                var cloud = this.cloudList[i];
                cloud.IsCollision(x, y, function () {
                    if (tutu.falling) {
                        tutu.jump();
                    }
                })
            }
        }

        //创建对象时初始化素材
        //this.init();
    }

    //导出对象
    Laya.class(Engine, "Engine", Laya.Sprite);
})()