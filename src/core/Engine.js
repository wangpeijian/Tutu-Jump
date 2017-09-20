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

                //游戏开始时少展示两个云彩
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
                return;
            }

            //触发所有模块的动画
            this.background._move();
            this.tutu._move();
            this.lantern._move();
            this.radish._move();
            this.scorePanel._move();

            for (var i = 0; i < CLOUD_NUMBER; i++) {
                this.cloudList[i]._move();
            }

            
            var tutu = this.tutu;
            var scorePanel = this.scorePanel;
            var moon = this.moon;
            var lantern = this.lantern;

            //判断游戏是否结束
            if (tutu.self.y > SCREEN_HEIGHT) {
                //游戏结束
                this.gameOver = true;
                return;
            }

            //展示得分
            var score = tutu.distance * GAME_SCORE_RATIO;
            this.scorePanel.score = parseInt(score);

            //开始判断物体间是否发生了碰撞
            //1.吃萝卜碰撞
            this.radish.IsCollision(tutu.self.x, tutu.self.y, function () {
                //如果升过3级则兔子变胖                
                if(scorePanel.upgrade()){
                    tutu.fat();
                }

                //兔子出桃心
                //tutu.love();

                //母兔子出桃心
                //moon.love();
            });

            //2.云彩碰撞
            var x = tutu.self.x + TUTU_WIDTH / 2;
            var y = tutu.self.y + TUTU_HEIGHT * 0.8;
            for (var i = 0; i < CLOUD_NUMBER; i++) {
                var cloud = this.cloudList[i];
                cloud.IsCollision(x, y, function () {
                    if (tutu.falling) {
                        tutu.jump();
                    }
                })
            }

            //3.灯笼碰撞
            lantern.IsCollision(x, y, function(lanternX, lanternY){
                //兔子跟随灯笼飞行
                tutu.fly(lanternX, lanternY);
                //游戏速度加快
                GAME_SPEED = LANTERN_SPEED_RATE * LANTERN_SPEED;

                setTimeout(function(){
                    GAME_SPEED = GAME_SPEED_DEFAULT;
                    lantern.castOff();
                    tutu.jump();
                }, LANTERN_FLY_TIME)
            })

        }

        //创建对象时初始化素材
        //this.init();
    }

    //导出对象
    Laya.class(Engine, "Engine", Laya.Sprite);
})()