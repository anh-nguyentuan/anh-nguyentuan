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

 const ResultMode4 = 10;
 const ResultMode3 = 8;

 var kZOderBackground = 0;

var res = {
    HelloWorld_png : "res/HelloWorld.png",
};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}

var MODE_GAME = [ "Mode3", "Mode4"];

const OpertorMatch = new Map([
    ["None", ""],
    ["Open Parenthesis", "("],
    ["Addition", "+"],
    ["Subtraction", "-"],
    ["Multiplication", "x"],
    ["Division", "/"],
    ["Close Parenthesis", ")"]]);

var GAME_CONFIG = [
    {
        level : 1,
        genenrateNumber : [1,2,3,4]

    },
    {
        level : 2,
        genenrateNumber : [2,2,3,4]
    },
    {
        level : 3,
        genenrateNumber : [5,2,3,4]
    }
];


   

