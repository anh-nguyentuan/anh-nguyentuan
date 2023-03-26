var LayoutGenerateNumberChild = ccui.Layout.extend({
	
 ctor :function(){
 	this._super();
 },

 isOperatorMatch : true,
 textShow : "",
 visible :false,
 tnumber : 0,

 //this.isNumber : false,
 opertorMatch : "None",

 setTextNumberShow : function(parent){
 	var textFile = new ccui.Text();
 	if(this.isOperatorMatch){
 		// show operator
 		if(this.visible){
 			var parentSize = parent.getContentSize();
 			var childSize = cc.size(parentSize.width* 0.1, parentSize.height);
 			this.setContentSize(childSize);

 			textFile.setText(OpertorMatch[this.opertorMatch]);
 			textFile.setColor(cc.color.WHITE);

 			this.setBackGroundColor(cc.color.GRAY);
 			this.addChild(textFile);
 		}
 		else{
 			var childSize = cc.size(0,0);
 			this.setContentSize(childSize);

 			this.addChild(textFile);
 		}
 	}
 	else{
 	
 	textFile.setString(this.number.toString());

 	var parentSize = parent.getContentSize();
 	var childSize = cc.size(parentSize.width* 0.1, parentSize.height);
 	this.setContentSize(childSize);
 	textFile.setColor(cc.color.WHITE);

 	//this.setBackGroundColor(cc.color.GRAY);
 	this.addChild(textFile);
 }
 }

});
