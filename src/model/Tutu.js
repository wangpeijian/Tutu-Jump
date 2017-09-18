(function () {

    function Tutu() {
        var _proto = Tutu.prototype;

        this._STATUS_JUMP = "jump";
        this._STATUS_FLY = "fly";
        this._STATUS_FALL = "fall";

        //处在跳跃状态
        this.jumping = false;
        //处在飞行状态
        this.flying = false;
        //处在下落状态
        this.falling = false;
        //当前速度
        this.speed = 0;
        //跳跃距离
        this.distance = 0;

        _proto.self = new Laya.Animation();

        _proto.init = function () {
            this.distance = 0;

            //注册跳起动画
            this.self.loadAtlas(TUTU_JUMP_ATLAS, Laya.Handler.create(this, function () {
                Laya.Animation.createFrames(TUTU_JUMP_ATLAS, this._STATUS_JUMP);
                this.self.play(0, true, this._STATUS_JUMP);
            }));
            //注册冲刺飞行动画
            this.self.loadAtlas(TUTU_FLY_ATLAS, Laya.Handler.create(this, function () {
                Laya.Animation.createFrames(TUTU_FLY_ATLAS, this._STATUS_FLY);
            }));
            //注册下落动画
            this.self.loadAtlas(TUTU_FALL_ATLAS, Laya.Handler.create(this, function () {
                Laya.Animation.createFrames(TUTU_FALL_ATLAS, this._STATUS_FALL);
            }));

            Laya.stage.addChild(this.self);
            //初始化tutu位置
            this.self.x = (SCREEN_WIDTH - TUTU_WIDTH) / 2;
            this.self.y = (SCREEN_HEIGHT - TUTU_HEIGHT) - SCREEN_HEIGHT * 0.3;

            //监控手机左右晃动
            Laya.Accelerator.instance.on(Laya.Event.CHANGE, window, this._transverseMove.bind(this));
            
            //this.loop();
        }

        _proto.jump = function () {
            this.changeStatus(this._STATUS_JUMP);
        }

        _proto.fly = function () {
            this.changeStatus(this._STATUS_FLY);
        }

        _proto.fall = function () {
            this.changeStatus(this._STATUS_FALL);
        }

        _proto.changeStatus = function (status) {
            this.jumping = false;
            this.flying = false;
            this.falling = false;

            switch (status) {
                case this._STATUS_JUMP:
                    this.jumping = true;
                    this.speed = TUTU_JUMP_INIT_SPEED;
                    break;
                case this._STATUS_FLY:
                    this.flying = true;
                    this.speed = TUTU_FLY_INIT_SPEED;
                    break;
                case this._STATUS_FALL:
                    this.falling = true;
                    break;
            }

            this.self.play(0, true, status);
        }

        // _proto.loop = function () {
        //     Laya.timer.frameLoop(GAME_FRAME, this, this._move);
        // }

        _proto._move = function () {
            if (this.jumping || this.falling) {
                this.speed = this.speed + TUTU_FALL_G;
            }

            if( this.speed <=0 ){
                this.fall();
            }

            //计算当前位置
            this.self.y += -this.speed;

            //累加位移 统计移动距离
            if(this.distance + this.speed > this.distance){
                this.distance += this.speed;
            } 
        }

        //控制tutu横向移动
        _proto._transverseMove = function (acceleration, accelerationIncludingGravity, rotationRate, interval) {
            this.self.x += accelerationIncludingGravity.x;

            if(this.self.x　< 0){
                this.self.x = 0;
            }else if(this.self.x　> SCREEN_WIDTH - TUTU_WIDTH){
                this.self.x　= SCREEN_WIDTH - TUTU_WIDTH;
            }
        }

        this.init();
    }

    //导出人物对象
    Laya.class(Tutu, "Tutu", Laya.Sprite);
})()