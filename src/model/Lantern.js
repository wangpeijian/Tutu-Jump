(function () {

    function Lantern() {
        var _proto = Lantern.prototype;

        this.self = null;

        _proto.init = function () {
            this.self = new Laya.Sprite();
            //加载显示图片，坐标位于
            this.self.loadImage(LANTERN_IMAGE, 0, 0, LANTERN_WIDTH, LANTERN_HEIGHT);
            //默认出现一次
            this.setPosition();

            //添加到舞台
            Laya.stage.addChild(this.self);

            this.loop();
        }

        _proto.loop = function () {
            Laya.timer.frameLoop(GAME_FRAME, this, this._move);
        }

        _proto._move = function () {
            //云彩只能向下移动
            this.self.y += LANTERN_SPEED;

            if (this.self.y >= SCREEN_HEIGHT) {
                //下一次是否出现根据 -> 随机数是否在几率之中
                if (Math.random() < LANTERN_CHANCE) {
                    this.setPosition();
                }
            }
        }

        _proto.setPosition = function () {
            this.self.x = Math.random() * (SCREEN_WIDTH - LANTERN_WIDTH);
            this.self.y = (Math.random() + 1) * (- SCREEN_HEIGHT / LANTERN_CHANCE);
        }

        this.init();
    }

    //导出对象
    Laya.class(Lantern, "Lantern", Laya.Sprite);
})()