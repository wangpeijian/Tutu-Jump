(function () {

    function Radish() {
        var _proto = Radish.prototype;

        this.self = null;

        _proto.init = function () {
            this.self = new Laya.Sprite();
            //加载显示图片，坐标位于
            this.self.loadImage(RADISH_IMAGE, 0, 0, RADISH_WIDTH, RADISH_HEIGHT);
            //默认出现一次
            this.setPosition();

            //添加到舞台
            Laya.stage.addChild(this.self);

            //this.loop();
        }

        _proto._move = function () {
            //云彩只能向下移动
            this.self.y += GAME_SPEED;
            
            //每一个整屏高度的倍数计算一次
            if (this.self.y > SCREEN_HEIGHT  && this.self.y % SCREEN_HEIGHT < SCREEN_HEIGHT * RADISH_CHANCE) {
                //下一次是否出现根据 -> 随机数是否在几率之中
                if (Math.random() < RADISH_CHANCE) {
                    this.setPosition();
                }
            }
        }

        _proto.setPosition = function () {
            this.self.x = Math.random() * (SCREEN_WIDTH - RADISH_WIDTH);
            this.self.y = (Math.random() + 1) * (- SCREEN_HEIGHT / RADISH_CHANCE);
        }

        //判断物体是否碰撞
        _proto.IsCollision = function(x, y, cb){
            if(this.self.y > 0){
                // 判断横坐标在不在范围内
                if(this.self.x + RADISH_WIDTH >= x && this.self.x <= x + TUTU_WIDTH){
                    if(this.self.y + RADISH_HEIGHT >= y && this.self.y <= y + TUTU_HEIGHT){
                        this.setPosition();
                        cb(this.self.x, this.self.y);
                    }
                }
            }
        }

        this.init();
    }

    //导出对象
    Laya.class(Radish, "Radish", Laya.Sprite);
})()