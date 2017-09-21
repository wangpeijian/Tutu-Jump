(function () {

    function RankingPage() {

        var _proto = RankingPage.prototype;
        var ranking = '';
        _proto.connect = function () {
            hr = new Laya.HttpRequest();
            hr.once(Laya.Event.PROGRESS, this, this.onHttpRequestProgress);
            hr.once(Laya.Event.COMPLETE, this, this.onHttpRequestComplete);
            hr.once(Laya.Event.ERROR, this, this.onHttpRequestError);
            var jsondata = {
                "openid": "1234567",
                "name": "崔屾",
                "phone": "18501373793",
                "score": "110"
            }
            hr.send('http://ntest.guoanfamily.com/game/api/over/2/3', JSON.stringify(jsondata), 'post', 'json', ["Content-Type", "application/json;charset=UTF-8"]);

        }

        _proto.init = function (nextPage) {            
            ranking = new RankingUI();
            Laya.stage.addChild(ranking);
            //ranking.myScore.font='BitMicro';
            ranking.myScore.text = '10M';
            this.connect();
        }

        _proto.onHttpRequestError = function (e) {
            console.log("error")
            console.log(e);
        }

        _proto.onHttpRequestProgress = function (e) {
            console.log(e)
        }

        _proto.onHttpRequestComplete = function (e) {
            console.log("收到数据：" + JSON.stringify(hr.data))           
            var data = [];
            for (var m = 1; m < 4; m++) {
                data.push({
                    m_label: "No. " + m,
                    m_img:"fly.png",
                    m_name:"WANG PEIJIAN",
                    m_score:"65535M"
                });
            }
            ranking.scoreList.array = data;
            
        }
    }

    //导出对象
    Laya.class(RankingPage, "RankingPage", Laya.stage);
})()