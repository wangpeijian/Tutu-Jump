(function () {

    function Lantern() {
        var _proto = Lantern.prototype;

        this.self = null;
        this._carrying = false;
        this._used = false;

        _proto.init = function () {
            this._used = false;
            this._carrying = false;

            this.self = new Laya.Sprite();
            //加载显示图片，坐标位于
            this.self.loadImage(LANTERN_IMAGE, 0, 0, LANTERN_WIDTH, LANTERN_HEIGHT);
            //默认出现一次
            this.setPosition();

            //添加到舞台
            Laya.stage.addChild(this.self);

            //监控手机左右晃动
            Laya.Accelerator.instance.on(Laya.Event.CHANGE, window, this._transverseMove.bind(this));
        }

        _proto._move = function () {
            if (this._carrying) {
                return;
            }

            //灯笼向上移动
            this.self.y -= LANTERN_SPEED;


            //每一个整屏高度的倍数计算一次    
            if (-this.self.y > SCREEN_HEIGHT && - this.self.y % SCREEN_HEIGHT < SCREEN_HEIGHT * LANTERN_CHANCE) {
                //下一次是否出现根据 -> 随机数是否在几率之中
                if (Math.random() < LANTERN_CHANCE) {
                    this.setPosition();
                }
            }
        }

        _proto.setPosition = function () {
            this.self.x = Math.random() * (SCREEN_WIDTH - LANTERN_WIDTH);
            this.self.y = (Math.random() + 1) * (SCREEN_HEIGHT / LANTERN_CHANCE);
            this._used = false;
        }

        //判断物体是否碰撞
        _proto.IsCollision = function (x, y, cb) {
            if (this._used) {
                return;
            }

            if (this.self.y > 0 && this.self.y + LANTERN_WIDTH < SCREEN_HEIGHT) {
                // 判断横坐标在不在范围内
                if (this.self.x + LANTERN_WIDTH >= x && this.self.x <= x + TUTU_WIDTH) {
                    if (this.self.y + LANTERN_HEIGHT >= y && this.self.y <= y + TUTU_HEIGHT) {
                        this._carrying = true;
                        this._used = true;

                        //抓住兔子后开始加速倒计时
                        var countDown = new Laya.Sprite();
                        var countDown = new laya.display.Text();
                        countDown.x = 20;
                        countDown.y = 10;
                        countDown.fontSize = 40;
                        countDown.text = LANTERN_FLY_TIME / 1000;
                        countDown.color = BUTTON_FONT_COLOR;
                        countDown.align = "center";
                        countDown.bold = true;

                        var _this = this;
                        var timer = setInterval(function () {
                            countDown.text = countDown.text - 1;

                            if (countDown.text == 0) {
                                _this.self.removeChild(countDown);
                                window.clearInterval(timer)
                            }
                        }, 1000);

                        this.self.addChild(countDown);

                        cb(this.self.x, this.self.y);
                    }
                }
            }
        }

        //丢弃兔子
        _proto.castOff = function () {
            this._carrying = false;
        }

        //控制灯笼横向移动
        _proto._transverseMove = function (acceleration, accelerationIncludingGravity, rotationRate, interval) {
            //携带兔子时灯笼也可以横向移动
            if (!this._carrying) {
                return;
            }

            this.self.x += accelerationIncludingGravity.x;

            if (this.self.x < 0) {
                this.self.x = 0;
            } else if (this.self.x > SCREEN_WIDTH - LANTERN_WIDTH) {
                this.self.x = SCREEN_WIDTH - LANTERN_WIDTH;
            }
        }

        this.init();
    }

    //导出对象
    Laya.class(Lantern, "Lantern", Laya.Sprite);
})()