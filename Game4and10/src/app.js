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

var arrNumber = [Ope.None, "1", Ope.None, Ope.None, "2", Ope.None, Ope.None, Ope.None, "3", Ope.None, Ope.None, "4", Ope.None];
var arrFillOpertor = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

function isNumeric(val) {
  return /^-?\d+$/.test(val);
}

var HelloWorldLayer = cc.Layer.extend({
  arrOperatorDisplay: [],
  arrShowCaculate: [],
  sprite: null,

  ctor: function () {
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
    this.creatLayoutCalculate();
    this.createLayoutOperator();

    return true;
  },

  onEnter: function () {
    this._super();
    cc.eventManager.addListener({
      event: cc.EventListener.TOUCH_ONE_BY_ONE,
      swallowTouches: true,
      onTouchBegan: this.onTouchBegan.bind(this),
      onTouchMoved: this.onTouchMoved.bind(this),
      onTouchEnded: this.onTouchEnded.bind(this)
    }, this);
  },


  onTouchBegan: function (touch, event) {
    var target = event.getCurrentTarget();

    if (target === this) {
      // Kiểm tra nếu con trỏ chuột đang nằm trên đối tượng
      for (var index = 0; index < operatorConfig.length; index++) {

        if (cc.rectContainsPoint(this.arrOperatorDisplay[index].getBoundingBox(), touch.getLocation())) {
          // var cloneSpirte = this.arrOperatorDisplay[0].clone();
          // this.addChild(this.cloneSpirte);
          this.arrOperatorDisplay[index].isDragging = true;
          this.arrOperatorDisplay[index].mouseDownPosition = touch.getLocation();
        }
      }
    }
    return true;

  },

  onTouchMoved: function (touch, event) {
    var target = event.getCurrentTarget();
    // Kiểm tra nếu con trỏ chuột đang nằm trên đối tượng
    if (target == this) {

      this.dragOperationOpen(touch);

      this.dragOperationMatch(touch, 1);
      this.dragOperationMatch(touch, 2);
      this.dragOperationMatch(touch, 3);
      this.dragOperationMatch(touch, 4);
      this.dragOperationClose(touch);
    }

    return true;
  },
  onTouchEnded: function (touch, event) {
    var target = event.getCurrentTarget();
    if (target === this) {
      for (var index = 0; index < operatorConfig.length; index++) {

        this.arrOperatorDisplay[index].isDragging = false;
      }


    }
  },


  createLayoutOperator: function () {
    var sizeX = 0;
    var size = cc.winSize;
    for (var index = 0; index < operatorConfig.length; index++) {

      // console.log('createLayoutOperator = ' + index);
      var objOperatorMatch = new OperatorMatch(res.obj_png, this);
      objOperatorMatch.operatorSign = operatorConfig[index];
      objOperatorMatch.visible = true;
      var label = new cc.LabelTTF();
      label.setFontSize(18);
      label.setFontName("Arial");
      label.setString(objOperatorMatch.operatorSign)
      label.setColor(cc.color("#FFFF00"));

      objOperatorMatch.addChild(label);
      label.setAnchorPoint(cc.p(0.5, 0.5));
      label.setPosition(objOperatorMatch.getContentSize().width / 2, objOperatorMatch.getContentSize().height / 2);

      sizeX += 30;
      objOperatorMatch.x = (size.width / 6) + sizeX;
      objOperatorMatch.y = size.height / 3 - 100;

      this.arrOperatorDisplay.push(objOperatorMatch);
      this.addChild(this.arrOperatorDisplay[index]);
    }
  },


  creatLayoutCalculate: function () {
    var sizeX = 0;
    var size = cc.winSize;
    for (var index = 0; index < arrNumber.length; index++) {
      if (index == 1 || index == 4 || index == 8 || index == 11) {

        //  console.log('creatLayoutCalculate number = ' + index);
        var objNumeberMatch = new NumeberMatch(this)

        var labelNumber = new cc.LabelTTF();
        labelNumber.setFontSize(18);
        labelNumber.setFontName("Arial");
        labelNumber.setString(arrNumber[index])
        labelNumber.setColor(cc.color("#FFFF00"));
        objNumeberMatch.addChild(labelNumber);

        sizeX += 30;
        objNumeberMatch.x = (size.width / 6) + sizeX;
        objNumeberMatch.y = size.height / 2.5;

        this.arrShowCaculate.push(objNumeberMatch);
        this.addChild(this.arrShowCaculate[index]);
      }
      else {

        // console.log('creatLayoutCalculate Operartor = ' + index);
        var objOperatorMatch = new OperatorMatch(res.obj_png, this);
        objOperatorMatch.operatorSign = arrNumber[index];
        var label = new cc.LabelTTF();
        label.setFontSize(18);
        label.setFontName("Arial");
        label.setString(objOperatorMatch.operatorSign)
        label.setColor(cc.color("#FFFF00"));
        objOperatorMatch.addChild(label);

        sizeX += 30;
        objOperatorMatch.x = (size.width / 6) + sizeX;
        objOperatorMatch.y = size.height / 2.5;


        this.arrShowCaculate.push(objOperatorMatch);
        this.addChild(this.arrShowCaculate[index]);
      }
    }
  },
  checkDragOperationOpen: function () {
    for (var index of [0, 3, 7]) {
      if (cc.rectIntersectsRect(this.arrOperatorDisplay[0].getBoundingBox(), this.arrShowCaculate[index])) {
        console.log('AnhNT1995 ' + index)
        return index;
      }
    }
    return null
  },

  dragOperationOpen: function (touch) {
    if (this.arrOperatorDisplay[0].isDragging) {

      // Tính toán khoảng cách di chuyển
      var delta = cc.pSub(touch.getLocation(), this.arrOperatorDisplay[0].mouseDownPosition);

      // Di chuyển đối tượng tương ứng với khoảng cách di chuyển
      var currentPosition = this.arrOperatorDisplay[0].getPosition();

      this.arrOperatorDisplay[0].setPosition(cc.pAdd(currentPosition, delta));

      // Cập nhật vị trí chuột
      this.arrOperatorDisplay[0].mouseDownPosition = touch.getLocation();
      //  check Drag Operator Open
      var posittionDragOpen = this.checkDragOperationOpen()


      if (posittionDragOpen != null) {
        this.arrShowCaculate[posittionDragOpen].visible = true;
        this.arrShowCaculate[posittionDragOpen].operatorSign = Ope.OPEN;
        var label = new cc.LabelTTF();
        label.setFontSize(18);
        label.setFontName("Arial");
        label.setString(this.arrShowCaculate[posittionDragOpen].operatorSign)
        label.setColor(cc.color("#FFFF00"));

        this.arrShowCaculate[posittionDragOpen].addChild(label);
        label.setAnchorPoint(cc.p(0.5, 0.5));
        label.setPosition(this.arrShowCaculate[posittionDragOpen].getContentSize().width / 2, this.arrShowCaculate[posittionDragOpen].getContentSize().height / 2);
        arrFillOpertor[posittionDragOpen] = 1;

      } else {

      }

    }
  },
  checkDragOperationMatch: function (position) {
    for (var index of [2, 6, 10]) {
      if (cc.rectIntersectsRect(this.arrOperatorDisplay[position].getBoundingBox(), this.arrShowCaculate[index])) {
        return index;
      }
    }
    return null
  },

  dragOperationMatch: function (touch, position) {
    if (this.arrOperatorDisplay[position].isDragging) {
      // Tính toán khoảng cách di chuyển
      var delta = cc.pSub(touch.getLocation(), this.arrOperatorDisplay[position].mouseDownPosition);

      // Di chuyển đối tượng tương ứng với khoảng cách di chuyển
      var currentPosition = this.arrOperatorDisplay[position].getPosition();

      this.arrOperatorDisplay[position].setPosition(cc.pAdd(currentPosition, delta));

      // Cập nhật vị trí chuột
      this.arrOperatorDisplay[position].mouseDownPosition = touch.getLocation();
      //  check Drag Operator Open

      var positionDragOperation = this.checkDragOperationMatch(position)
      if (positionDragOperation != null) {
        this.arrShowCaculate[positionDragOperation].visible = true;
        this.arrShowCaculate[positionDragOperation].operatorSign = this.arrOperatorDisplay[position].operatorSign;
        var label = new cc.LabelTTF();
        label.setFontSize(18);
        label.setFontName("Arial");
        label.setString(this.arrShowCaculate[positionDragOperation].operatorSign)
        label.setColor(cc.color("#FFFF00"));

        this.arrShowCaculate[positionDragOperation].addChild(label);
        label.setAnchorPoint(cc.p(0.5, 0.5));
        label.setPosition(this.arrShowCaculate[positionDragOperation].getContentSize().width / 2, this.arrShowCaculate[positionDragOperation].getContentSize().height / 2);
        arrFillOpertor[positionDragOperation] = 1;

      }
    }
  },

  checkDragOperationClose: function () {
    for (var index of [5, 9, 12]) {
      if (cc.rectIntersectsRect(this.arrOperatorDisplay[5].getBoundingBox(), this.arrShowCaculate[index])) {
        console.log('AnhNT1995 ' + index)
        return index;
      }
    }
    return null
  },

  dragOperationClose: function (touch) {
    if (this.arrOperatorDisplay[5].isDragging) {

      // Tính toán khoảng cách di chuyển
      var delta = cc.pSub(touch.getLocation(), this.arrOperatorDisplay[5].mouseDownPosition);

      // Di chuyển đối tượng tương ứng với khoảng cách di chuyển
      var currentPosition = this.arrOperatorDisplay[5].getPosition();

      this.arrOperatorDisplay[5].setPosition(cc.pAdd(currentPosition, delta));

      // Cập nhật vị trí chuột
      this.arrOperatorDisplay[5].mouseDownPosition = touch.getLocation();
      //  check Drag Operator Open
      var posittionDragOpen = this.checkDragOperationClose()


      if (posittionDragOpen != null) {
        this.arrShowCaculate[posittionDragOpen].visible = true;
        this.arrShowCaculate[posittionDragOpen].operatorSign = Ope.CLOSE;
        var label = new cc.LabelTTF();
        label.setFontSize(18);
        label.setFontName("Arial");
        label.setString(this.arrShowCaculate[posittionDragOpen].operatorSign)
        label.setColor(cc.color("#FFFF00"));

        this.arrShowCaculate[posittionDragOpen].addChild(label);
        label.setAnchorPoint(cc.p(0.5, 0.5));
        label.setPosition(this.arrShowCaculate[posittionDragOpen].getContentSize().width / 2, this.arrShowCaculate[posittionDragOpen].getContentSize().height / 2);
        arrFillOpertor[posittionDragOpen] = 1;

      }
    }
  },

  // tinh toan ket qua
  calculatResult: function (expression) {
    let operands = [];
    let operators = [];
    let current = "";
    for (let i = 0; i < expression.length; i++) {
      if (expression[i] == Ope.OPEN) {
        let count = 1;
        let j = i + 1;
        while (count > 0 && j < expression.length) {
          if (expression[j] == Ope.OPEN) {
            count++;
          } else if (expression[j] == Ope.CLOSE) {
            count--;
          }
          j++;
        }
        operands.push(calculate(expression.substring(i + 1, j - 1)));
        i = j - 1;
      } else if (expression[i] == Ope.ADD || expression[i] == Ope.SUB || expression[i] == Ope.DIV) {
        operators.push(expression[i]);
        operands.push(parseFloat(current));
        current = "";
      } else if (expression[i] == Ope.MUL) {
        operators.push("*");
        operands.push(parseFloat(current));
        current = "";

      } else {
        current += expression[i];
      }
    }
    operands.push(parseFloat(current));

    // Tính toán kết quả
    while (operators.length > 0) {
      let operator = operators.pop();
      let operand2 = operands.pop();
      let operand1 = operands.pop();
      let result;
      if (operator == "+") {
        result = operand1 + operand2;
      } else if (operator == "-") {
        result = operand1 - operand2;
      } else if (operator == "*") {
        result = operand1 * operand2;
      } else if (operator == "/") {
        result = operand1 / operand2;
      }
      operands.push(result);
    }

    return operands[0];
  },

});




var HelloWorldScene = cc.Scene.extend({
  onEnter: function () {
    this._super();
    var layer = new HelloWorldLayer();
    this.addChild(layer);
  }
});
