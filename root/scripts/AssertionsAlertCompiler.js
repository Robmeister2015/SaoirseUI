define([
    'jquery_ui/jquery-ui',
    '../constants/AssertionBoxConstants',
    'SelectorFilter',
    '../constants/TestConstants',
    '../constants/Constants'
], function (jQueryUI, AssertionConstants, SelectorFilter, TestConstants, Constants) {
    'use strict'

    var assertionHtml = '';

    return {

        compileAssertionsBox: function(options, domElement, eventType){
            assertionHtml = AssertionConstants.OPENING_LINE + AssertionConstants.SELECT_OPENING;

                var i, length = options.length;
                for(i = 0; i < length; i++){
                    assertionHtml += AssertionConstants.OPTION_LEFT + options[i] + AssertionConstants.OPTION_RIGHT_ARROW
                        + options[i] + AssertionConstants.OPTION_RIGHT;
                }

            assertionHtml += AssertionConstants.SELECT_CLOSING + AssertionConstants.CLOSING_LINE;
            var elementPosition = SelectorFilter.getElementPosition(domElement);
            document.body.innerHTML += assertionHtml;
            SelectorFilter.getElementPosition(domElement);
            this.showAssertionsBox(domElement, elementPosition, eventType);
        },

        filterAssertableItems: function(domElement, eventType){
            var assertableItems = [];

            if(domElement.id){
                assertableItems.push(AssertionConstants.ASSERTABLE_ITEMS.ID);
            }
            if(domElement.className){
                assertableItems.push(AssertionConstants.ASSERTABLE_ITEMS.CSS_CLASS);
            }
            if(domElement.value){
                assertableItems.push(AssertionConstants.ASSERTABLE_ITEMS.VALUE);
            }
            if(domElement.getAttribute('name')){
                assertableItems.push(AssertionConstants.ASSERTABLE_ITEMS.NAME);
            }
            if(domElement.innerText){
                assertableItems.push(AssertionConstants.ASSERTABLE_ITEMS.TEXT_CONTENT);
            }
            this.compileAssertionsBox(assertableItems, domElement, eventType);
        },

        showAssertionsBox: function(domElement, elementPosition, eventType){
            var headHTML = document.getElementsByTagName(TestConstants.TAGS.HEAD)[0].innerHTML;
            headHTML += Constants.DIALOG_BOX_CONSTANTS.JQUERY_STYLE;
            document.getElementsByTagName(TestConstants.TAGS.HEAD)[0].innerHTML = headHTML;
            $(AssertionConstants.ASSERTION_BOX_ID).show();
            $(AssertionConstants.ASSERTION_BOX_ID).dialog();
             document.getElementsByClassName(Constants.DIALOG_BOX_CONSTANTS.ASSERTION_BOX_CLOSE_BUTTON)[0].onclick = function(){
                $(AssertionConstants.ASSERTION_BOX_ID).remove();
                $(AssertionConstants.ASSERTION_BOX_STYLE_ID).remove();
            }
            document.getElementById(AssertionConstants.ASSERTION_BOX_SUBMIT_BUTTON).onclick = function(){
                var selectBox = document.getElementById(AssertionConstants.SELECT_OPTION);
                var selectedOption = selectBox.options[selectBox.selectedIndex].value;
                $(AssertionConstants.ASSERTION_BOX_ID).remove();
                this.filterAssertions(domElement, eventType, selectedOption, elementPosition);
            }.bind(this);
        },

        filterAssertions: function(domElement, eventType, selectedOption, elementPosition){
            SelectorFilter.filterForSelector(domElement, eventType, elementPosition, selectedOption);
        }
    };
});