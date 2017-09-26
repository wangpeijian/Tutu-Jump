(function () {

    function Engine() {
        var _proto = Engine.prototype;

        this.cloudList = [];
        this.background = null;
        this.lantern = null;
        this.tutu = null;
        this.scorePanel = null;
        this.startButton = null;
        this.moon = null;

        this.gameOver = false;
        this.gameOverCallback = null;
        this.gameOverExecuted = false;

        this.gameStart = false;

        _proto.start = function () {
            this.tutu.jump();
            Laya.timer.frameLoop(GAME_FRAME, this, this._move);
            this.gameStart = true;
        }

        //初始化游戏场景
        _proto.init = function (cb) {
            if (cb) {
                this.gameOverCallback = cb;
            }

            this.cloudList = [];
            this.background = null;
            this.lantern = null;
            this.tutu = null;
            this.scorePanel = null;
            this.startButton = null;
            this.moon = null;
            this.gameOver = false;
            this.gameOverExecuted = false;

            this.gameStart = false;

            var _this = this;

            // -----------------积分部分-----------------
            this.scorePanel = new ScorePanel();
            // ----------------------------------

            //初始化背景
            this.background = new Background();

            //创建粒子特效
            Laya.stage.addChild(Special_Effects_Lantern);
            Special_Effects_Lantern.visible = false;

            //-----------------创建月亮和母兔子-----------------
            this.moon = new Moon();
            //----------------------------------

            //创建随机云彩
            for (var i = 0; i < CLOUD_NUMBER; i++) {
                var coordinateX = Math.random() * (SCREEN_WIDTH - CLOUD_WIDTH);

                //游戏开始时少展示1个云彩
                var coordinateY = ((SCREEN_HEIGHT - CLOUD_HEIGHT * (CLOUD_NUMBER - 1)) / (CLOUD_NUMBER - 1) + CLOUD_HEIGHT) * (i - 1);

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
                if (!this.gameOverExecuted) {
                    this.gameOverExecuted = true;
                    this.gameOverCallback();
                } else {
                    Laya.timer.clear(this, this._move);
                }
                return;
            }

            var tutu = this.tutu;
            var scorePanel = this.scorePanel;
            var moon = this.moon;
            var lantern = this.lantern;

            //灯笼飞行倒计时
            var lanternTimer = null;

            //兔子变瘦倒计时
            var tutuFatTimer = null;

            //判断游戏是否结束
            if (tutu.self.y > SCREEN_HEIGHT) {
                //游戏结束
                this.gameOver = true;

                //兔兔死亡
                tutu.dead();

                //恢复游戏速度
                GAME_SPEED = GAME_SPEED_DEFAULT;
                TUTU_JUMP_INIT_SPEED = 10;
                TUTU_FALL_G = -0.3;

                //停止粒子动画
                $helper.effectsLantern(false);

                //保存分数
                localStorage.setItem("score", scorePanel.score);

                //清除灯笼的飞行定时任务
                clearTimeout(lanternTimer);

                //清除兔子变瘦的定时任务
                clearTimeout(tutuFatTimer);
                return;
            }

            //触发所有模块的动画
            var tutuSpeed = this.tutu._move();
            if (!this.lantern._carrying) {
                var rate = parseInt(scorePanel.score / GAME_ADD_SPEED_FREQUENCY);
                GAME_SPEED = GAME_SPEED_DEFAULT + rate * GAME_ADD_SPEED_RATE + tutuSpeed;
                $helper.setDifficulty(rate);
                //TUTU_FLY_INIT_SPEED = TUTU_FLY_INIT_SPEED + rate * 0.5;
            }

            this.background._move();
            this.lantern._move();
            this.radish._move(function () {
                moon.throwRadish();
            });
            this.scorePanel._move();

            for (var i = 0; i < CLOUD_NUMBER; i++) {
                this.cloudList[i]._move();
            }

            //展示得分
            var score = tutu.distance * GAME_SCORE_RATIO;
            this.scorePanel.score = parseInt(score);

            //开始判断物体间是否发生了碰撞
            //1.吃萝卜碰撞
            this.radish.IsCollision(tutu.self.x, tutu.self.y, function () {
                //如果升过3级则兔子变胖                
                if (scorePanel.upgrade()) {
                    tutu.fat();
                    tutuFatTimer = setTimeout(function () {
                        tutu.restore();
                        scorePanel.createStatus(true);
                    }, TUTU_FAT_TIME)
                }

                //兔子出桃心
                tutu.love();

                //母兔子出桃心
                moon.love();
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
            lantern.IsCollision(tutu.self.x, tutu.self.y, function (lanternX, lanternY) {
                //播放粒子动画
                $helper.effectsLantern(true);

                //兔子跟随灯笼飞行
                tutu.fly(lanternX, lanternY);
                //游戏速度加快
                GAME_SPEED = LANTERN_SPEED_RATE * LANTERN_SPEED;

                lanternTimer = setTimeout(function () {
                    $helper.effectsLantern(false);

                    //GAME_SPEED = GAME_SPEED_DEFAULT + parseInt(scorePanel.score / GAME_ADD_SPEED_FREQUENCY) * GAME_ADD_SPEED_RATE;
                    var rate = parseInt(scorePanel.score / GAME_ADD_SPEED_FREQUENCY);
                    var rate = parseInt(scorePanel.score / GAME_ADD_SPEED_FREQUENCY);
                    GAME_SPEED = GAME_SPEED_DEFAULT + rate * GAME_ADD_SPEED_RATE;
                    $helper.setDifficulty(rate);

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