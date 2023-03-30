/****************************************************************************
 Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.
 
 http://www.cocos2d-x.org
 
 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:
 
 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.
 
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/
var arrOperatorDisplay = [];
var arrNumber = ["None", "1","None", "2","None", "3","None", "4","None"];

function isNumeric(val) {
    return /^-?\d+$/.test(val);
}

var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

        /////////////////////////////
        // 3. add your codes below...
        // add a label shows "Hello World"
        // create and initialize a label
        var helloLabel = new cc.LabelTTF("", "Arial", 38);
        // position the label on the center of the screen
        helloLabel.x = size.width / 2;
        helloLabel.y = size.height / 2 + 200;
        // add the label as a child to this layer
        this.addChild(helloLabel, 5);

        // add "HelloWorld" splash screen"
        this.sprite = new cc.Sprite();
        this.sprite.attr({
            x: size.width / 2,
            y: size.height / 2
        });
        this.addChild(this.sprite, 0);

        this.createLayoutOperator()

        return true;
    },

    onEnter : function(){
        this._super();
    },



    createLayoutOperator : function()
    {
        var sizeX = 0;
        var size = cc.winSize;
 
          var sizeX = 0;
          var size = cc.winSize;
          for(var index = 0; index < operatorConfig.length; index++){
              var objOperatorMatch  = new OperatorMatch();
              objOperatorMatch.operatorSign = operatorConfig[index];
              var label = new cc.LabelTTF();
              label.setFontSize(18);
              label.setFontName("Arial");
              label.setString(objOperatorMatch.operatorSign)
              label.setColor(cc.color("#FFFF00"));
              objOperatorMatch.addChild(label);

              sizeX += 30;
              objOperatorMatch.x = (size.width / 6) + sizeX;
              objOperatorMatch.y = size.height / 3 -100;
   
              arrOperatorDisplay.push(objOperatorMatch);

              this.addChild(objOperatorMatch);
          }
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});
