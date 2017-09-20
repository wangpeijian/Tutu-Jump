var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var RankingUI=(function(_super){
		function RankingUI(){
			
		    this.bestScore=null;
		    this.myScore=null;
		    this.scoreList=null;

			RankingUI.__super.call(this);
		}

		CLASS$(RankingUI,'ui.RankingUI',_super);
		var __proto__=RankingUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(RankingUI.uiView);
		}
		RankingUI.uiView={"type":"View","props":{"width":400,"height":600},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"background/ranking.png"}},{"type":"Label","props":{"y":296,"x":244,"width":101,"var":"bestScore","text":"2470M","height":20,"fontSize":22,"font":"Helvetica","color":"#fff8f8","align":"center"}},{"type":"Label","props":{"y":231,"x":94,"width":218,"var":"myScore","text":"10M","height":60,"fontSize":60,"font":"Helvetica","color":"#e8e80b","bold":true,"align":"center"}},{"type":"List","props":{"y":354,"x":65,"width":265,"var":"scoreList","repeatY":6,"repeatX":1,"renderType":"render","height":134},"child":[{"type":"Box","props":{"y":3,"x":41,"width":114,"renderType":"render","name":"rander","height":29},"child":[{"type":"Label","props":{"width":103,"text":"label","name":"m_label","height":23,"fontSize":22,"font":"Helvetica","color":"#fdf9f9"}}]},{"type":"VScrollBar","props":{"y":-5,"x":221,"width":10,"name":"scrollBar","height":150}}]}]};
		return RankingUI;
	})(View);