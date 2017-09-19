(function () {

    function helper() {
        var _proto = helper.prototype;


        _proto.createInput = function (prompt, x, y, create) {
            var _this = this;
            Laya.loader.load(INPUT_SKIN, Laya.Handler.create(this, function () {
                // _this.createFontFamily(function () {
                    var obj = new Laya.TextInput();
                    obj.skin = INPUT_SKIN;
                    obj.size(INPUT_WIDTH, INPUT_HEIGHT);

                    //obj.sizeGrid = "0,40,0,40";

                    obj.fontSize = INPUT_FONT_SIZE;
                    obj.bold = true;
                    obj.color = INPUT_FONT_COLOR;
                    obj.align = "center";
                    obj.prompt = prompt;
                    obj.promptColor = INPUT_PROMPT_COLOR;
                    //obj.font = FONT_FAMILY;
                    Laya.stage.addChild(obj);

                    obj.x = x;
                    obj.y = y;

                    create(obj)
                // })

            }));
        }

        _proto.createButton = function (buttonSkin, x, y, click) {
            var BUTTON_SKIN = buttonSkin;

            

            var _this = this;
            Laya.loader.load(BUTTON_SKIN, Laya.Handler.create(this, function () {
                //_this.createFontFamily(function () {
                    var obj = new Laya.Button(BUTTON_SKIN);
                    //设置Button相关属性
                    obj.width = BUTTON_WIDTH;
                    obj.height = BUTTON_HEIGHT;

                    //obj.label = label;

                    obj.stateNum = 2;
                    //obj.labelSize = BUTTON_FONT_SIZE;
                    //obj.labelColors = [BUTTON_FONT_COLOR, BUTTON_FONT_COLOR_ACTIVE].join(",");
                    //obj.labelFont = FONT_FAMILY;
                    Laya.stage.addChild(obj);
                    obj.x = x;
                    obj.y = y;

                    obj.on(laya.events.Event.CLICK, window, function () {
                        click(obj);
                    });
                //})
            }));
        }

        _proto.createFontFamily = function (cb) {
            //注册页面中使用的字体
            var mBitmapFont = new laya.display.BitmapFont();
            mBitmapFont.loadFont(FONT_SOURCE, new laya.utils.Handler(this, function () {
                mBitmapFont.setSpaceWidth(10);
                laya.display.Text.registerBitmapFont(FONT_FAMILY, mBitmapFont);
                cb();
            }));
        }

        _proto.destroy = function (array) {
            for (var i = 0; i < array.length; i++) {
                Laya.stage.removeChild(array[i])
            }

        }

    }

    window.$helper = new helper();

})(window)

