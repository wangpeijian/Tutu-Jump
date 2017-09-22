(function () {

    function helper() {
        var _proto = helper.prototype;


        _proto.createInput = function (prompt, x, y, create) {
            var _this = this;
            Laya.loader.load(INPUT_SKIN, Laya.Handler.create(this, function () {

                var obj = new Laya.TextInput();
                obj.skin = INPUT_SKIN;
                obj.size(INPUT_WIDTH, INPUT_HEIGHT);

                obj.fontSize = INPUT_FONT_SIZE;
                obj.bold = true;
                obj.color = INPUT_FONT_COLOR;
                obj.align = "center";
                obj.prompt = prompt;
                obj.promptColor = INPUT_PROMPT_COLOR;
                Laya.stage.addChild(obj);

                obj.x = x;
                obj.y = y;

                create(obj)
            }));
        }

        _proto.createButton = function (buttonSkin, x, y, click) {
            var BUTTON_SKIN = buttonSkin;

            var _this = this;
            Laya.loader.load(BUTTON_SKIN, Laya.Handler.create(this, function () {
                var obj = new Laya.Button(BUTTON_SKIN);
                //设置Button相关属性
                obj.width = BUTTON_WIDTH;
                obj.height = BUTTON_HEIGHT;
                obj.stateNum = 2;
                Laya.stage.addChild(obj);
                obj.x = x;
                obj.y = y;

                obj.on(laya.events.Event.CLICK, window, function () {
                    click(obj);
                });
            }));
        }

        _proto.destroy = function (array) {
            for (var i = 0; i < array.length; i++) {
                Laya.stage.removeChild(array[i])
            }
        }

        _proto.getUserInfo = function () {
            if (this.isYunFamily()) {
                XuntongJSBridge.call('getPersonInfo', {}, function(result) {
                        localStorage.setItem("yun_nickname", result.data.name );
                        localStorage.setItem("yun_phone",  result.data.userName);
                        localStorage.setItem("yun_openid", result.data.openId);
                });
            } else {
                //如果没有openid则跳去授权获取客户信息
                if (!localStorage.getItem("openid")) {
                    //如果链接中也没有参数则跳转授权
                    if(!this.getQueryString("openid")){
                        window.location.href = "http://act.guoanfamily.com/openweixin/user/getCode?redirect_url=" + window.location.href;
                    }else{
                        //从链接中获取了参数，则存到本地
                        localStorage.setItem("wx_nickname", this.getQueryString("nickname"));
                        localStorage.setItem("wx_headimgurl", this.getQueryString("headimgurl"));
                        localStorage.setItem("wx_openid", this.getQueryString("openid"));
                    }       
                }
            }
        }

        _proto.isYunFamily = function(){
            return navigator.userAgent.indexOf("Qing") >= 0;
        }

        _proto.getQueryString = function (name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return decodeURIComponent(r[2]); return null;
        }

        _proto.effectsLantern = function (start) {
            if (start) {
                Special_Effects_Lantern.visible = true;
                Special_Effects_Lantern.play();
            } else {
                Special_Effects_Lantern.visible = false;
                Special_Effects_Lantern.stop();
            }
        }

    }

    window.$helper = new helper();

})(window)

