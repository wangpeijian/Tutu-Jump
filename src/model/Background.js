(function () {

    function Background() {
        this.self = null;

        var _proto = Background.prototype;
        

        _proto.init = function (){
            this.self = new Laya.Sprite();
            //加载显示图片，坐标位于100,50
            this.self.loadImage('../laya/assets/background/background.png', 0, 0, 800, 600);
            //添加到舞台
            Laya.stage.addChild(this.self);
        }

        _proto.loop = function (){
           Laya.timer.frameLoop(1, this, this._move);
        }

        _proto._move = function(){
            this.self.y = this.self.y + 1

            if(this.self.y >= SCREEN_HEIGHT){
                
            }
        }

        this.init();
        this.loop();
    }


    //导出人物对象
    Laya.class(Background, "Background", Laya.Sprite);
})()