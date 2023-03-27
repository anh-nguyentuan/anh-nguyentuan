var LayoutGenerateNumberChild = ccui.Layout.extend({
	
 ctor :function(){
 	this._super();
 },

 isOperatorMatch : true,
 textShow : "",
 visibleObject :false,
 tnumber : 0,

 //this.isNumber : false,
 opertorMatch : "None",

 setTextNumberShow : function(parent){
 	var textFile = new ccui.Text();
 	if(this.isOperatorMatch){
 		// show operator
 		if(this.visibleObject){
 			var childSize = cc.size(parent.width, parent.height);
			console.log('width : ' + parent.width + ' height ' + parent.height)
 			this.setContentSize(childSize);

 			textFile.setText(OpertorMatch.get(this.opertorMatch));
			// console.log('operator : ' + OpertorMatch.get(this.opertorMatch))
 			textFile.setColor(cc.color("#FFFF00"));
			textFile.setContentSize(500);
			// textFile.setContentSize(childSize);

 			this.setColor(cc.color("#FF0000"));
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
