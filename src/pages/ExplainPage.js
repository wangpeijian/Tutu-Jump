(function () {

    function ExplainPage() {

        var _proto = ExplainPage.prototype;

        _proto.init = function (nextPage) {
            var img = new Laya.Sprite();
            //加载显示图片，坐标位于
            img.loadImage(EXPLAIN_PAGE_BACKGROUND, 0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
            img.size(SCREEN_WIDTH, SCREEN_HEIGHT);
            //添加到舞台
            Laya.stage.addChild(img);
            
            var x = (SCREEN_WIDTH - BUTTON_WIDTH) / 2;
            var y = SCREEN_HEIGHT * 0.85;
            $helper.createButton(BUTTON_SKIN_NEXT, x, y, function (obj) {
                $helper.destroy([img, obj]);
                nextPage();
            })
        }
    }

    //导出对象
    Laya.class(ExplainPage, "ExplainPage", Laya.Sprite);
})()