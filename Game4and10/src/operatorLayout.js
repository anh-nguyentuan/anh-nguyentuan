var OperatorMatch = cc.LabelTTF.extend({

ctor : function(position){
	this._super();
},	
operatorSign :  Ope.None,
isDisable : false,
isDragging :false,
mouseDownPosition : cc.p(0, 0),

handleMouseIn :function(OperatorMatchCaculate){
	// Bắt sự kiện mousedown
	cc.eventManager.addListener({
		event: cc.EventListener.MOUSE,
		onMouseDown: function(event) {
			console.log('a111111111111111')
			// Kiểm tra nếu con trỏ chuột đang nằm trên đối tượng
			if (cc.rectContainsPoint(this.getBoundingBox(), event.getLocation())) {
				this.isDragging = true;
				mouseDownPosition = event.getLocation();
			}
		}
		}, this);
	
		// Bắt sự kiện mousemove
		cc.eventManager.addListener({
		event: cc.EventListener.MOUSE,
		onMouseMove: function(event) {
			console.log('a2222222222222222')
			// Nếu đang kéo chuột và đối tượng được chọn
			if (this.isDragging) {
				// Tính toán khoảng cách di chuyển
				var delta = cc.pSub(event.getLocation(), mouseDownPosition);
	
				// Di chuyển đối tượng tương ứng với khoảng cách di chuyển
				var currentPosition = this.getPosition();
				this.setPosition(cc.pAdd(this.currentPosition, delta));
	
				// Cập nhật vị trí chuột
				//mouseDownPosition = event.getLocation();
			}
		}
	}, this);
	
		// Bắt sự kiện mouseup
		cc.eventManager.addListener({
		event: cc.EventListener.MOUSE,
		onMouseUp: function(event) {
			console.log('a333333333333333333333333')
			this.isDragging = false;

			if(cc.rectContainsPoint(this.getBoundingBox(), OperatorMatchCaculate.getBoundingBox())){
				OperatorMatchCaculate.operatorSign = this.operatorSign;
			}

			// this.setPosition(this.currentPosition);
		}
		}, this);
}


});

class NumeberMatch {
	number
}


var operatorLayout = ccui.Layout.extend({
 ctor :function(){
 	this._super();
 },

 visibleOperator :false,
 opertorMatch : "None",
 enableOperator : true,
 scaleWith : 1,
 scaleHeight :1,
 isDragging : false,
 mouseDownPosition : cc.p(0, 0),

 showDisplayOperator : function(parent){
 	var textFile = new ccui.Text();
 		// show operator
 		if(this.visibleOperator){
 			var childSize = cc.size(parent.width/this.scaleWith, parent.height/this.scaleHeight);
			console.log('width : ' + parent.width + ' height ' + parent.height)
 			this.setContentSize(childSize);

 			textFile.setText(OperatorMatch.get(this.opertorMatch));
			 
			textFile.setContentSize(childSize); // đặt kích thước cho Text
			textFile.setPosition(cc.p(0, 0)); // đặt vị trí cho Text trong Layout
 			textFile.setColor(cc.color("#FFFF00"));
			textFile.setFontSize(30);
			// textFile.setContentSize(childSize);
 			this.addChild(textFile);
 		}
 		else{
 			var childSize = cc.size(0,0);
 			this.setContentSize(childSize);

 			this.addChild(textFile);
 		}
 	},

handleMouseIn :function(){
		// Bắt sự kiện mousedown
		cc.eventManager.addListener({
			event: cc.EventListener.MOUSE,
			onMouseDown: function(event) {
				// Kiểm tra nếu con trỏ chuột đang nằm trên đối tượng
				if (cc.rectContainsPoint(this.getBoundingBox(), event.getLocation())) {
					this.isDragging = true;
					mouseDownPosition = event.getLocation();
				}
			}
			}, this);
		
			// Bắt sự kiện mousemove
			cc.eventManager.addListener({
			event: cc.EventListener.MOUSE,
			onMouseMove: function(event) {
				// Nếu đang kéo chuột và đối tượng được chọn
				if (this.isDragging) {
					// Tính toán khoảng cách di chuyển
					var delta = cc.pSub(event.getLocation(), mouseDownPosition);
		
					// Di chuyển đối tượng tương ứng với khoảng cách di chuyển
					var currentPosition = this.getPosition();
					this.setPosition(cc.pAdd(currentPosition, delta));
		
					// Cập nhật vị trí chuột
					mouseDownPosition = event.getLocation();
				}
			}
		}, this);
		
			// Bắt sự kiện mouseup
			cc.eventManager.addListener({
			event: cc.EventListener.MOUSE,
			onMouseUp: function(event) {
				this.isDragging = false;
			}
			}, this);
}

});
