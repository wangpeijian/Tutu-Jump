(function () {

    function CoverPage() {

        var _proto = CoverPage.prototype;

        _proto.init = function (nextPage) {
            var img = new Laya.Sprite();
            //加载显示图片，坐标位于
            img.loadImage(COVER_PAGE_BACKGROUND, 0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
            img.size(SCREEN_WIDTH, SCREEN_HEIGHT);
            //添加到舞台
            Laya.stage.addChild(img);
            
            img.on(laya.events.Event.CLICK, window, function () {
                $helper.destroy([img]);
                nextPage();
            });
        }
    }

    //导出对象
    Laya.class(CoverPage, "CoverPage", Laya.Sprite);
})()