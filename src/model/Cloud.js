(function(){

    /**
     * 
     * @param {*} x 定义云朵出现在屏幕的位置 
     */
    function Cloud(x, y){
        var _proto = Cloud.prototype;

        this.self = null;

         _proto.init = function (){
            this.self = new Laya.Sprite();
            //加载显示图片，坐标位于
            let cloudStyle = Math.random() > 0.5 ? 1 : 0;
            this.self.loadImage(CLOUD_IMAGE[cloudStyle], 0, 0, CLOUD_WIDTH, CLOUD_HEIGHT);
            //默认隐藏云朵位置
            //this.self.y = -CLOUD_HEIGHT;
            this.self.x = x;
            this.self.y = y;
            //添加到舞台
            Laya.stage.addChild(this.self);

            //this.loop();
        }

        //  _proto.loop = function (){
        //    Laya.timer.frameLoop(GAME_FRAME, this, this._move);
        // }
        
        _proto._move = function(){
            //云彩只能向下移动
            this.self.y += CLOUD_SPEED;

            if(this.self.y >= SCREEN_HEIGHT){
                this.self.y = -(SCREEN_HEIGHT - CLOUD_HEIGHT * (CLOUD_NUMBER - 1)) / (CLOUD_NUMBER - 1) - CLOUD_HEIGHT;
                this.self.x = Math.random() * (SCREEN_WIDTH - CLOUD_WIDTH);
            }
        }

        //判断物体是否碰撞
        _proto.IsCollision = function(x, y, cb){
            // 判断横坐标在不在范围内
            if(this.self.x <= x && this.self.x + CLOUD_WIDTH >= x){
                if(this.self.y <= y && this.self.y + CLOUD_HEIGHT >= y){
                    cb(this.self.x, this.self.y);
                }
            }
        }

        this.init();
    }

    //导出对象
    Laya.class(Cloud, "Cloud", Laya.Sprite);
})()