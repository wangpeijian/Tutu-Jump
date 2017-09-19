(function () {

    function Moon() {
        var _proto = Moon.prototype;

        this.self = null;
        this.loveing = false;

        _proto.init = function () {
            this.self = new Laya.Sprite();
            //加载显示图片，坐标位于
            this.self.loadImage(MOON, SCREEN_WIDTH - MOON_WIDTH, 0, MOON_WIDTH, MOON_HEIGHT);
            //添加到舞台
            Laya.stage.addChild(this.self);
        }

        _proto._move = function () {
           
        }

        this.init();
    }

    //导出对象
    Laya.class(Moon, "Moon", Laya.Sprite);
})()