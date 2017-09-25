(function () {

    function Moon() {
        var _proto = Moon.prototype;

        this.self = new Laya.Animation();
        this.self.loadAnimation(MOON_LOVE_ANI);

        this.loveing = false;

        _proto.init = function () {
            // this.self = new Laya.Sprite();
            // //加载显示图片，坐标位于
            // this.self.loadImage(MOON, SCREEN_WIDTH - MOON_WIDTH, 0, MOON_WIDTH, MOON_HEIGHT);

            //添加到舞台
            Laya.stage.addChild(this.self);

            this.self.x = SCREEN_WIDTH - MOON_WIDTH;
            this.self.y = 0;

            this.self.play(0, false);
            this.self.stop();
        }

        _proto._move = function () {

        }

        _proto.love = function () {
            this.self.loadAnimation(MOON_LOVE_ANI);
            this.self.interval = 80;
            this.self.play(0, false);

        }

        _proto.throwRadish = function () {
            this.self.loadAnimation(MOON_THROW_RADISH_ANI);
            this.self.interval = 100;
            this.self.play(0, false);
        }

        this.init();
    }

    //导出对象
    Laya.class(Moon, "Moon", Laya.Sprite);
})()