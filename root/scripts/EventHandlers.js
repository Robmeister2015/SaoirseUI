define([
    'testcompiler',
    'jquery',
    'SelectorFilter',
    '../constants/TestConstants',
    'AssertionsAlertCompiler',
    'InputElementHandler',
    '../constants/AssertionBoxConstants',
    '../constants/Constants'
    ], function (TestCompiler, $, SelectorFilter, TestConstants, AssertionsCompiler, InputHandler, AssertionConstants, Constants) {
    'use strict';

        $(document).keypress(function(e){
            if(e.keyCode === 96){
                SelectorFilter.createFile();
            }
        });

        document.onclick = function(event) {
            var target;

            if (!event){
                event = window.event;
            }

            target = Constants.TARGET in event? event.target : event.srcElement;
            if(target.tagName === Constants.INPUT && target.getAttribute(Constants.ATTRIBUTES.TYPE) === Constants.INPUT_TYPES.TEXT){
                SelectorFilter.filterForSelector(target, TestConstants.JAVASCRIPT_EVENTS.CLICK);
                InputHandler.handleTextInput(target);
            }else if(event.ctrlKey){
                AssertionsCompiler.filterAssertableItems(target, TestConstants.JAVASCRIPT_EVENTS.CTRL_CLICK);
            }else if(!SelectorFilter.isIdAUiSaorId(target.id)){
                SelectorFilter.filterForSelector(target, TestConstants.JAVASCRIPT_EVENTS.CLICK);
            }
        };
});