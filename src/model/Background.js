(function () {


    function Background() {
        var _proto = Background.prototype;

        this.first = null;
        this.second = null;
        this.speed = BACKGROUND_SPEED;
        this.backgroundIndex = 0;

        _proto.init = function (){
            this.first = new Laya.Sprite();
            //加载显示图片，坐标位于
            this.first.loadImage(BACKGROUND_IMAGES[this.backgroundIndex++], 0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
            //添加到舞台
            Laya.stage.addChild(this.first);

            this.second = new Laya.Sprite();
            //加载显示图片，坐标位于
            this.second.loadImage(BACKGROUND_IMAGES[this.backgroundIndex++], 0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
            this.second.y = -SCREEN_HEIGHT;
            //添加到舞台
            Laya.stage.addChild(this.second);

            //this.loop();
        }

        // _proto.loop = function (){
        //    Laya.timer.frameLoop(GAME_FRAME, this, this._move);
        // }

        _proto._move = function(){
            //移动到最后一个背景则不再滚动
            if(this.backgroundIndex > BACKGROUND_IMAGES.length){
                return;
            }

            this.first.y += this.speed
            this.second.y += this.speed

            if(this.first.y >= SCREEN_HEIGHT){
                this.first.y = -SCREEN_HEIGHT;

                let index = this.backgroundIndex;
                if(index > BACKGROUND_IMAGES.length - 1){
                    index = BACKGROUND_IMAGES.length - 1;
                    this.backgroundIndex++
                }else{
                    index = this.backgroundIndex++
                }

                this.first.loadImage(BACKGROUND_IMAGES[index], 0, 0, SCREEN_WIDTH, SCREEN_HEIGHT)
            }

            if(this.second.y >= SCREEN_HEIGHT){
                this.second.y = -SCREEN_HEIGHT;

                let index = this.backgroundIndex;
                if(index > BACKGROUND_IMAGES.length - 1){
                    index = BACKGROUND_IMAGES.length - 1;
                    this.backgroundIndex++
                }else{
                    index = this.backgroundIndex++
                }

                this.second.loadImage(BACKGROUND_IMAGES[index], 0, 0, SCREEN_WIDTH, SCREEN_HEIGHT)
            }
        }

        this.init();
    }


    //导出对象
    Laya.class(Background, "Background", Laya.Sprite);
})()