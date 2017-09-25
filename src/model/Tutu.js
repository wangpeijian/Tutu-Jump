(function () {

    function Tutu() {
        this._STATUS_JUMP = "rabbitJump";
        this._STATUS_FAT_JUMP = "rabbitFatJump";
        this._STATUS_FLY = "rabbitFly";
        this._STATUS_FAT_FLY = "rabbitFatFly";
        this._STATUS_FALL = "fall";

        laya.display.Animation.createFrames(['rabbit/rabbit.png','rabbit/rabbit_squat.png'], this._STATUS_JUMP);
        laya.display.Animation.createFrames(['rabbit/rabbit_fat.png','rabbit/rabbit_fat_squat.png'], this._STATUS_FAT_JUMP);
        laya.display.Animation.createFrames(['rabbit/rabbit.png'], this._STATUS_FLY);
        laya.display.Animation.createFrames(['rabbit/rabbit_fat.png'], this._STATUS_FAT_FLY);

        var _proto = Tutu.prototype;

        //兔子是否变胖
        this._isFat = false;

        //播放兔子桃心
        this._isLove = false;

        //处在跳跃状态
        this.jumping = false;
        //处在下落状态
        this.falling = false;
        //处在下落状态
        this.flying = false;

        //当前速度
        this.speed = 0;
        //跳跃距离
        this.distance = 0;

        this.self = new Laya.Animation();
        this.self.interval = TUTU_ANIMATION_DURING;

        //兔子桃心状态动画
        this.loveIcon = new Laya.Animation();
        this.loveIcon.interval = 100

        _proto.init = function () {
            this._isFat = false;
            this._isLove = false;

            //处在跳跃状态
            this.jumping = false;
            //处在下落状态
            this.falling = false;
            //处在下落状态
            this.flying = false;

            //当前速度
            this.speed = 0;
            //跳跃距离
            this.distance = 0;

            //tutu尺寸
            TUTU_WIDTH = 80;
            TUTU_HEIGHT = 110;
            //tutu起跳速度
            TUTU_JUMP_INIT_SPEED = 10;
            //tutu飞行速度
            TUTU_FLY_INIT_SPEED = 10;
            //tutu重力加速度
            TUTU_FALL_G = -0.25;

            //注册普通跳起动画
            this.self.play(1, false, this._STATUS_JUMP);
            Laya.stage.addChild(this.self);

            //初始化tutu位置
            this.self.x = (SCREEN_WIDTH - TUTU_WIDTH) / 2;
            this.self.y = (SCREEN_HEIGHT - TUTU_HEIGHT) - SCREEN_HEIGHT * 0.2;

            //添加兔子桃心动画位置
            Laya.stage.addChild(this.loveIcon);

            //监控手机左右晃动
            Laya.Accelerator.instance.on(Laya.Event.CHANGE, window, this._transverseMove.bind(this));

            Laya.stage.on(Laya.Event.KEY_DOWN, this, function(e){
                if(e["keyCode"] == 37){
                    this.self.x -= 30
                }else if(e["keyCode"] == 39){
                    this.self.x += 30
                }

                if (this.self.x < 0) {
                    this.self.x = 0;
                } else if (this.self.x > SCREEN_WIDTH - TUTU_WIDTH) {
                    this.self.x = SCREEN_WIDTH - TUTU_WIDTH;
                }
            });

        }

        _proto.dead = function () {
            Laya.SoundManager.playSound(TUTU_DEATH_SOUND, 1);
        }

        _proto.jump = function () {
            var sound = this._isFat ? TUTU_JUMP_FAT_SOUND : TUTU_JUMP_SOUND
            Laya.SoundManager.playSound(sound, 1);

            this.changeStatus(this._STATUS_JUMP);
        }

        _proto.fall = function () {
            this.changeStatus(this._STATUS_FALL);
        }

        _proto.fly = function (lanternX, lanternY) {
            //tutu与灯笼居中对齐
            this.self.x = lanternX - (TUTU_WIDTH - LANTERN_WIDTH);
            this.self.y = lanternY + LANTERN_HEIGHT + 20;

            Laya.SoundManager.playSound(TUTU_FLY_SOUND, 1);

            this.changeStatus(this._STATUS_FLY);
        }

        _proto.fat = function () {

            //tutu尺寸
            TUTU_WIDTH = TUTU_FAT_WIDTH;
            TUTU_HEIGHT = TUTU_FAT_HEIGHT;
            //tutu起跳速度
            TUTU_JUMP_INIT_SPEED = TUTU_FAT_JUMP_INIT_SPEED;
            //tutu飞行速度
            TUTU_FLY_INIT_SPEED = TUTU_FAT_FLY_INIT_SPEED;
            //tutu重力加速度
            TUTU_FALL_G = TUTU_FAT_FALL_G;

            this._isFat = true;

            this.self.play(0, false, this._STATUS_FAT_JUMP);

            //如果在跳起过程中变胖了,调整兔子位置
            if (this.flying) {
                this.self.x - 20;
            }
        }

        _proto.restore = function () {
            //tutu尺寸
            TUTU_WIDTH = 80;
            TUTU_HEIGHT = 110;
            //tutu起跳速度
            TUTU_JUMP_INIT_SPEED = 10;
            //tutu飞行速度
            TUTU_FLY_INIT_SPEED = 10;
            //tutu重力加速度
            TUTU_FALL_G = -0.25;

            this._isFat = false;
            this.self.play(0, false, this._STATUS_JUMP);
        }

        _proto.changeStatus = function (status) {
            this.jumping = false;
            this.falling = false;
            this.flying = false;

            this.self.interval = TUTU_ANIMATION_DURING;

            switch (status) {
                case this._STATUS_JUMP:
                    this.jumping = true;
                    this.speed = TUTU_JUMP_INIT_SPEED;

                    this.self.play(0, false, this._isFat ? this._STATUS_FAT_JUMP  : this._STATUS_JUMP );
                    break;

                case this._STATUS_FALL:
                    this.falling = true;
                    break;

                case this._STATUS_FLY:
                    this.self.interval = LANTERN_FLY_TIME;
                    this.flying = true;

                    this.self.play(0, false, this._isFat ? this._STATUS_FAT_FLY : this._STATUS_FLY );
                    break;
            }
        }

        _proto.love = function(){
            this._isLove = true;

            this.loveIcon.x = this.self.x - TUTU_LOVE_WIDTH;
            this.loveIcon.y = this.self.y;

            this.loveIcon.play(0, false, TUTU_LOVE_ANI);
        }

        _proto._move = function () {
            //跳起和下落有重力
            if (this.jumping || this.falling) {
                this.speed = this.speed + TUTU_FALL_G;
                this.self.y += -this.speed;
            } else if (this.flying) {
                //跟随灯笼飞行
                this.speed = LANTERN_SPEED;
            }

            if (this.speed <= 0) {
                this.fall();
            }

            //累加位移 统计移动距离
            if (this.distance + this.speed > this.distance) {
                this.distance += this.speed;
            }
        }

        //控制tutu横向移动
        _proto._transverseMove = function (acceleration, accelerationIncludingGravity, rotationRate, interval) {
            this.self.x += this._isFat ? accelerationIncludingGravity.x * TUTU_FAT_MOVE_FRICTION : accelerationIncludingGravity.x;

            if (this.self.x < 0) {
                this.self.x = 0;
            } else if (this.self.x > SCREEN_WIDTH - TUTU_WIDTH) {
                this.self.x = SCREEN_WIDTH - TUTU_WIDTH;
            }
        }

        this.init();
    }

    //导出人物对象
    Laya.class(Tutu, "Tutu", Laya.Sprite);
})()