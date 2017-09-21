(function () {

    function RankingPage() {

        var _proto = RankingPage.prototype;
        var ranking = '';
        _proto.share = function () {
            wxshare = new Laya.HttpRequest();
            wxshare.once(Laya.Event.COMPLETE, this, this.onShareComplete);
            wxshare.once(Laya.Event.ERROR, this, this.onShareError);

            wxshare.send('http://act.guoanfamily.com/openweixin/jsapi/getJsapiSignature?local_url=' + location.href, {}, 'post', 'json', ["Content-Type", "application/json;charset=UTF-8"]);
        }
        _proto.connect = function () {
            hr = new Laya.HttpRequest();
            hr.once(Laya.Event.PROGRESS, this, this.onHttpRequestProgress);
            hr.once(Laya.Event.COMPLETE, this, this.onHttpRequestComplete);
            hr.once(Laya.Event.ERROR, this, this.onHttpRequestError);
            var jsondata = {
                "openid": "1234568",
                "name": "小白",
                "phone": "18401373793",
                "score": "1000"
            }
            hr.send('http://ntest.guoanfamily.com/game/api/over/2/3', JSON.stringify(jsondata), 'post', 'json', ["Content-Type", "application/json;charset=UTF-8"]);

        }

        _proto.init = function (nextPage) {
            ranking = new RankingUI();
            Laya.stage.addChild(ranking);
            ranking.share.on(Laya.Event.CLICK, this, this.share)

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
            ranking.myScore.text = hr.data.data.score.score + 'M';
            ranking.maxscore.text = hr.data.data.score.maxscore + 'M';
            var data = [];
            var m = 1;
            console.log(hr.data.data.top);
            for (var person of hr.data.data.top) {
                console.log(person);
                data.push({
                    m_label: "No. " + m,
                    m_img: "res/head.png",
                    m_name: person.name + "",
                    m_score: person.maxscore + "M"
                });
                m += 1;
            }
            ranking.scoreList.array = data;

        }

        _proto.onShareComplete = function (response) {
            
            ranking.arrow.visible = !ranking.arrow.visible;
            console.log(response);
            wx.config({
                debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: response.appid, // 必填，公众号的唯一标识
                timestamp: parseInt(response.timestamp), // 必填，生成签名的时间戳
                nonceStr: response.noncestr, // 必填，生成签名的随机串
                signature: response.signature, // 必填，签名，见附录1
                jsApiList: [
                    'onMenuShareAppMessage',
                    'onMenuShareTimeline'
                ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
            });
            wx.ready(function () {
                // 2. 分享接口
                // 2.1 监听“分享给朋友”，按钮点击、自定义分享内容及分享结果接口
                wx.onMenuShareAppMessage({
                    title: '端午节有奖竞猜挑战赛', //标题
                    desc: '快乐端午，你我共享——有“粽”你就来挑战！', //描述
                    link: 'http://www.guoanfamily.com/duanwu/#/', //连接地址指打开分享时页面地址
                    imgUrl: 'http://www.guoanfamily.com/duanwu/static/img/share.jpg', //图片
                    trigger: function (res) {
                        // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
                    },
                    success: function (res) {},
                    cancel: function (res) {},
                    fail: function (res) {}
                });
                //分享到朋友圈
                wx.onMenuShareTimeline({
                    title: '端午节有奖问答挑战赛',
                    desc: '端午节有奖问答挑战赛', //描述
                    link: 'http://www.guoanfamily.com/duanwu/#/',
                    imgUrl: 'http://www.guoanfamily.com/duanwu/static/img/share.jpg',
                    trigger: function (res) {
                        // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
                    },
                    success: function (res) {},
                    cancel: function (res) {},
                    fail: function (res) {}
                });
                wx.error(function (res) {});
            })
        }

    }

    //导出对象
    Laya.class(RankingPage, "RankingPage", Laya.stage);
})()