define([
    'jquery_ui/jquery-ui',
    'TestCompiler',
    '../constants/InputHandlerConstants',
    'SelectorFilter',
    '../constants/TestConstants',
    '../constants/Constants'
], function (jQueryUI, TestCompiler, InputHandlerConstants, SelectorFilter, TestConstants, Constants) {
    'use strict'

    var textInputHtml = '';

    return {

        handleTextInput: function(domElement){
            textInputHtml = InputHandlerConstants.OPENING_LINE + InputHandlerConstants.TEXT_INPUT;

            textInputHtml += InputHandlerConstants.CLOSING_LINE;
            var elementPosition = SelectorFilter.getElementPosition(domElement);
            document.body.innerHTML += textInputHtml;
            SelectorFilter.getElementPosition(domElement);
            this.showTextInputTextBox(domElement, elementPosition);
        },

        showTextInputTextBox: function(domElement, elementPosition){
            var headHTML = document.getElementsByTagName(TestConstants.TAGS.HEAD)[0].innerHTML;
            headHTML += Constants.DIALOG_BOX_CONSTANTS.JQUERY_STYLE;
            document.getElementsByTagName(TestConstants.TAGS.HEAD)[0].innerHTML = headHTML;
            $(InputHandlerConstants.DIALOG_BOX_ID).show();
            $(InputHandlerConstants.DIALOG_BOX_ID).dialog();
             document.getElementsByClassName(Constants.DIALOG_BOX_CONSTANTS.ASSERTION_BOX_CLOSE_BUTTON)[0].onclick = function(){
                $(InputHandlerConstants.DIALOG_BOX_ID).remove();
            }
            document.getElementById(InputHandlerConstants.TEXT_INPUT_SUBMIT).onclick = function(){
                var inputText = document.getElementById(InputHandlerConstants.TEXT_INPUT_ID).value;
                $(InputHandlerConstants.DIALOG_BOX_ID).remove();
                TestCompiler.addTextInputStep(inputText);
            }
        }
    };
});