(function () {

    function FormPage() {

        var _proto = FormPage.prototype;

        _proto.init = function (nextPage) {
            var img = null;
            var company = null;
            var name = null;
            var mobile = null;

            //生成背景
            img = new Laya.Sprite();
            img.loadImage(FORM_PAGE_BACKGROUND, 0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
            img.size(SCREEN_WIDTH, SCREEN_HEIGHT);
            //添加到舞台
            Laya.stage.addChild(img);

            //生成表单
            var x, y;
            x = (SCREEN_WIDTH - INPUT_WIDTH) / 2;
            y = SCREEN_HEIGHT * 0.38;
            $helper.createInput("COMPANY", x, y, function (obj) {
                company = obj;
            });
            y += INPUT_HEIGHT + FORM_MARGIN_BOTTOM;
            $helper.createInput("NAME", x, y, function (obj) {
                name = obj;
            });
            y += INPUT_HEIGHT + FORM_MARGIN_BOTTOM;
            $helper.createInput("MONILE", x, y, function (obj) {
                mobile = obj;
            });
            y += INPUT_HEIGHT + FORM_MARGIN_BOTTOM;

            //生成按钮
            x = (SCREEN_WIDTH - BUTTON_WIDTH) / 2;
            $helper.createButton("NEXT", x, y, function (obj) {
                console.log(company.text, name.text, mobile.text);
                $helper.destroy([img, obj, company, name, mobile]);
                nextPage();
            })

        }
    }

    //导出对象
    Laya.class(FormPage, "FormPage", Laya.Sprite);
})()