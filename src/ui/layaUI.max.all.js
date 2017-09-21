var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var RankingUI=(function(_super){
		function RankingUI(){
			
		    this.bestScore=null;
		    this.myScore=null;
		    this.scoreList=null;
		    this.again=null;
		    this.share=null;

			RankingUI.__super.call(this);
		}

		CLASS$(RankingUI,'ui.RankingUI',_super);
		var __proto__=RankingUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(RankingUI.uiView);
		}
		RankingUI.uiView={"type":"View","props":{"width":400,"height":600},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"background/ranking.png"}},{"type":"Label","props":{"y":296,"x":244,"width":101,"var":"bestScore","text":"2470M","height":20,"fontSize":22,"font":"BitMicro","color":"#fff8f8","align":"center"}},{"type":"Label","props":{"y":231,"x":94,"width":218,"var":"myScore","text":"10M","height":60,"fontSize":60,"font":"BitMicro","color":"#e8e80b","bold":true,"align":"center"}},{"type":"List","props":{"y":354,"x":65,"width":265,"var":"scoreList","repeatY":2,"repeatX":1,"renderType":"render","height":134},"child":[{"type":"Box","props":{"y":0,"x":51,"width":114,"renderType":"render","name":"rander","height":50},"child":[{"type":"Label","props":{"width":103,"text":"label","name":"m_label","height":23,"fontSize":22,"font":"BitMicro","color":"#5C9AD5"}},{"type":"Image","props":{"y":3,"x":-51,"width":40,"name":"m_img","height":40}},{"type":"Label","props":{"y":8,"x":103,"width":113,"text":"label","name":"m_score","height":21,"fontSize":22,"font":"BitMicro","color":"#5C9AD5","align":"right"}},{"type":"Label","props":{"y":28,"x":-2,"width":103,"text":"label","name":"m_name","height":15,"fontSize":14,"font":"BitMicro","color":"#5C9AD5"}}]},{"type":"VScrollBar","props":{"y":-7,"x":275,"width":10,"name":"scrollBar","height":150}}]},{"type":"Button","props":{"y":551,"x":56,"width":136,"var":"again","stateNum":2,"skin":"button/button_again.png","height":53}},{"type":"Button","props":{"y":551,"x":209,"width":136,"var":"share","stateNum":2,"skin":"button/button_share.png","height":53}}]};
		return RankingUI;
	})(View);