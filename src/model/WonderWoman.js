(function(){

    function WonderWoman(){
        var _proto = WonderWoman.prototype;

        this._STATUS_STAND = "stand";
        this._STATUS_RUN = "running";
        this._STATUS_FLY = "flying";
        this.RUNNING = true;

        _proto.roleAni = new Laya.Animation();  

        _proto.run = function(){
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

        _proto.fly = function(){
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

        _proto.stand = function(){
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

    //导出人物对象
    Laya.class(WonderWoman, "WonderWoman", Laya.Sprite);
})()