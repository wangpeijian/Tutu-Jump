var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var RankingUI=(function(_super){
		function RankingUI(){
			
		    this.share_ani=null;
		    this.maxscore=null;
		    this.myScore=null;
		    this.scoreList=null;
		    this.again=null;
		    this.share=null;
		    this.arrow=null;

			RankingUI.__super.call(this);
		}

		CLASS$(RankingUI,'ui.RankingUI',_super);
		var __proto__=RankingUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(RankingUI.uiView);
		}
		RankingUI.uiView={"type":"View","props":{"width":400,"visible":true,"height":600},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"background/ranking.png"}},{"type":"Label","props":{"y":232,"x":249,"width":101,"var":"maxscore","text":"2470M","height":20,"fontSize":22,"font":"BitMicro","color":"#fff8f8","align":"center"}},{"type":"Label","props":{"y":167,"x":99,"width":218,"var":"myScore","text":"10M","height":60,"fontSize":60,"font":"BitMicro","color":"#e8e80b","bold":true,"align":"center"}},{"type":"List","props":{"y":290,"x":70,"width":265,"var":"scoreList","repeatY":2,"repeatX":1,"renderType":"render","height":134},"child":[{"type":"Box","props":{"y":0,"x":51,"width":228,"renderType":"render","name":"rander","height":46},"child":[{"type":"Label","props":{"width":103,"text":"label","name":"m_label","height":23,"fontSize":22,"font":"BitMicro","color":"#5C9AD5"}},{"type":"Image","props":{"y":3,"x":-51,"width":40,"skin":"score/normal.png","name":"m_img","height":40}},{"type":"Label","props":{"y":8,"x":103,"width":113,"text":"label","name":"m_score","height":21,"fontSize":22,"font":"BitMicro","color":"#5C9AD5","align":"right"}},{"type":"Label","props":{"y":28,"x":-2,"width":103,"name":"m_name","height":15,"fontSize":14,"font":"Helvetica","color":"#5C9AD5"}}]},{"type":"VScrollBar","props":{"y":-7,"x":275,"width":10,"name":"scrollBar","height":150}}]},{"type":"Button","props":{"y":487,"x":61,"width":136,"var":"again","stateNum":2,"skin":"button/button_again.png","height":53}},{"type":"Button","props":{"y":487,"x":214,"width":136,"var":"share","stateNum":2,"skin":"button/button_share.png","height":53}},{"type":"Image","props":{"y":17,"x":255,"width":131,"visible":false,"var":"arrow","skin":"score/share_arrow.png","height":139},"compId":25}],"animations":[{"nodes":[{"target":25,"keyframes":{"y":[{"value":17,"tweenMethod":"linearNone","tween":true,"target":25,"key":"y","index":0},{"value":55,"tweenMethod":"linearNone","tween":true,"target":25,"key":"y","index":15},{"value":17,"tweenMethod":"linearNone","tween":true,"target":25,"label":null,"key":"y","index":30}],"x":[{"value":255,"tweenMethod":"linearNone","tween":true,"target":25,"key":"x","index":0},{"value":225,"tweenMethod":"linearNone","tween":true,"target":25,"label":null,"key":"x","index":15},{"value":255,"tweenMethod":"linearNone","tween":true,"target":25,"label":null,"key":"x","index":30}]}}],"name":"share_ani","id":1,"frameRate":24,"action":0}]};
		return RankingUI;
	})(View);