var OperatorMatch = cc.Sprite.extend({

operatorSign :  Ope.None,
isDisable : false,
isDragging :false,
mouseDownPosition : cc.p(0, 0),
controlLogicLayer : null,

ctor : function(ctrlLayer){
	this._super();
	this.controlLogicLayer = ctrlLayer;
},	


onEnter : function(){
	this._super();
	cc.eventManager.addListener({
		event : cc.EventListener.TOUCH_ONE_BY_ONE,
		swallowTouches : true,
		onTouchBegan : this.onTouchBegan.bind(this),
		onTouchMoved : this.onTouchMoved.bind(this),
		onTouchEnded : this.onTouchEnded.bind(this)
	}, this);
	
},


onTouchBegan : function (touch, event){
	// Kiểm tra nếu con trỏ chuột đang nằm trên đối tượng
	if (true) {
		this.isDragging = true;
		mouseDownPosition = touch.getLocation();
		console.log('mouseDownPosition ' +  touch.getLocation())
	}

	return true;

},

onTouchMoved:function(touch, event) {
			// Nếu đang kéo chuột và đối tượng được chọn
			if (this.isDragging) {
				// Tính toán khoảng cách di chuyển
				var delta = cc.pSub(touch.getLocation(), mouseDownPosition);
				console.log('delta = '+ delta.x + " ," + delta.y);
	
				// Di chuyển đối tượng tương ứng với khoảng cách di chuyển
				var currentPosition = this.getPosition();

				console.log('000 = ' + this.getPositionX() + " ," +  + this.getPositionY()) 
				this.setPosition(cc.pAdd(currentPosition, delta));
	
				// Cập nhật vị trí chuột
				mouseDownPosition = touch.getLocation();

			}

			return true;
},
onTouchEnded:function(touch, event){
	console.log('a333333333333333333333333')
	this.isDragging = false;

},
});

var NumeberMatch = cc.Sprite.extend({
	number : 0,
	controlLogicLayer : null,

	ctor : function(ctrlLayer){
		this._super();
		this.controlLogicLayer= ctrlLayer;
	},	
	
	onEnter : function(){
		this._super();
		cc.eventManager.addListener({
			event : cc.EventListener.TOUCH_ONE_BY_ONE,
			swallowTouches : true,
			onTouchBegan : this.onTouchBegan.bind(this),
			onTouchMoved : this.onTouchMoved.bind(this),
			onTouchEnded : this.onTouchEnded.bind(this)
		}, this);
		
	},
	
	
	onTouchBegan : function (touch, event){
	
	},
	
	onTouchMoved:function(touch, event) {
			
	},
	onTouchEnded:function(touch, event){

	
	},

});

