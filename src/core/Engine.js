(function(){

    function Engine(){
        var _proto = Engine.prototype;

        this.cloudList = [];
        this.background = null;
        this.lantern = null;

         _proto.start = function (){
           this.init();
           Laya.timer.frameLoop(GAME_FRAME, this, this._move);
        }

        //初始化游戏场景
        _proto.init = function(){
            //初始化背景
            this.background = new Background();

            //创建随机云彩
            for(var i = 0; i < CLOUD_NUMBER; i++){
                var coordinateX = Math.random() * (SCREEN_WIDTH - CLOUD_WIDTH);
                var coordinateY = ((SCREEN_HEIGHT - CLOUD_HEIGHT * (CLOUD_NUMBER - 1)) / (CLOUD_NUMBER - 1) + CLOUD_HEIGHT) * i;
                var cloud = new Cloud(coordinateX, coordinateY);
                this.cloudList.push(cloud);
            }
            
            //创建随机灯笼
            this.lantern = new Lantern()
        }
        
        //开始动画
        _proto._move = function(){
           
        }
    }

    //导出对象
    Laya.class(Engine, "Engine", Laya.Sprite);
})()