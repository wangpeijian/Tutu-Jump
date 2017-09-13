(function(){
    //全局配置
    var SCREEN_WIDTH = 800;
    var SCREEN_HEIGHT = 600;

    var stage = Laya.stage;

    //初始化窗口
   
    Laya.init(SCREEN_WIDTH, SCREEN_HEIGHT, Laya.WebGL);

    Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL;
    Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
    Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
    Laya.stage.scaleMode = Laya.Stage.SCREEN_NONE;

    
    function WonderWoman(){
        WonderWoman.prototype._STATUS_STAND = "stand";
        WonderWoman.prototype._STATUS_RUN = "running";
        WonderWoman.prototype._STATUS_FLY = "flying";
        WonderWoman.prototype.RUNNING = true;

        WonderWoman.prototype.roleAni = new Laya.Animation();  

        WonderWoman.prototype.run = function(){
            //加载动画图集，加载成功后执行回调方法
            this.roleAni.loadAtlas("../laya/assets/run.atlas",Laya.Handler.create(this,onLoaded));
            function onLoaded(){
                //添加到舞台
                Laya.stage.addChild(this.roleAni);
                Laya.Animation.createFrames("../laya/assets/run.atlas", this._STATUS_RUN);
                this.roleAni.play(0, true, this._STATUS_RUN);
                this.RUNNING = true;
            }
        } 

        WonderWoman.prototype.fly = function(){
           //加载动画图集，加载成功后执行回调方法
            this.roleAni.loadAtlas("../laya/assets/fly.atlas",Laya.Handler.create(this,onLoaded));
            function onLoaded(){
                //添加到舞台
                Laya.stage.addChild(this.roleAni);
                Laya.Animation.createFrames("../laya/assets/fly.atlas", this._STATUS_FLY);
                this.roleAni.play(0, true, this._STATUS_FLY);
                this.RUNNING = false;
            }
        }

        WonderWoman.prototype.stand = function(){
            //加载动画图集，加载成功后执行回调方法
            this.roleAni.loadAtlas("../laya/assets/stand.atlas",Laya.Handler.create(this,onLoaded));
            function onLoaded(){
                //添加到舞台
                Laya.stage.addChild(this.roleAni);
                Laya.Animation.createFrames("../laya/assets/stand.atlas", this._STATUS_FLY);
                this.RUNNING = false;
            }
        } 
    }

    var joy = new WonderWoman();
    joy.stand();

    Laya.stage.on(laya.events.Event.CLICK, this, mouseHandler);
    function mouseHandler(){
        joy.RUNNING ?  joy.fly() : joy.run()
    }
})()


