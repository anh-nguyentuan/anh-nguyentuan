var OperatorMatch = cc.Sprite.extend({

operatorSign :  Ope.None,
isDisable : false,
isDragging :false,
mouseDownPosition : cc.p(0, 0),
controlLogicLayer : null,

ctor : function(strImage, ctrlLayer){
	this._super(strImage);
	this.controlLogicLayer = ctrlLayer;
	if(this.operatorSign == Ope.None)
	{
		this.visible = false
	}
},	

onEnter :function(){
	this._super();
},

clone :function(){
	var sprite = new cc.Sprite(this.getTexture());
    sprite.attr(this);
    return sprite;
}
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

