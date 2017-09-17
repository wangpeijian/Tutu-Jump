(function () {

    function Radish() {
        var _proto = Radish.prototype;

        this.self = null;

        _proto.init = function () {
            this.self = new Laya.Sprite();
            //加载显示图片，坐标位于
            this.self.loadImage(RADISH_IMAGE, 0, 0, RADISH_WIDTH, RADISH_HEIGHT);
            //默认出现一次
            this.setPosition();

            //添加到舞台
            Laya.stage.addChild(this.self);

            //this.loop();
        }

        // _proto.loop = function () {
        //     Laya.timer.frameLoop(GAME_FRAME, this, this._move);
        // }

        _proto._move = function () {
            //云彩只能向下移动
            this.self.y += RADISH_SPEED;
            
            //每一个整屏高度的倍数计算一次
            if (this.self.y > SCREEN_HEIGHT && this.self.y % SCREEN_HEIGHT === 0) {
                //下一次是否出现根据 -> 随机数是否在几率之中
                if (Math.random() < RADISH_CHANCE) {
                    this.setPosition();
                }
            }
        }

        _proto.setPosition = function () {
            this.self.x = Math.random() * (SCREEN_WIDTH - RADISH_WIDTH);
            this.self.y = (Math.random() + 1) * (- SCREEN_HEIGHT / RADISH_CHANCE);
        }

        this.init();
    }

    //导出对象
    Laya.class(Radish, "Radish", Laya.Sprite);
})()