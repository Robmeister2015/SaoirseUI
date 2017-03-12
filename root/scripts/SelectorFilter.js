define([
    '../constants/TestConstants',
    'TestCompiler',
    '../constants/AssertionBoxConstants',
    '../constants/InputHandlerConstants',
    '../constants/Constants'
    ], function (TestConstants, TestCompiler, AssertionConstants, InputConstants, Constants) {
    'use strict';

        var uiSaorIds = [AssertionConstants.ASSERTION_BOX_ID, AssertionConstants.ASSERTION_BOX_ID_NO_HASH, AssertionConstants.SELECT_OPTION, AssertionConstants.ASSERTION_BOX_SUBMIT_BUTTON,
                Constants.DIALOG_BOX_CONSTANTS.ASSERTION_BOX_CLOSE_BUTTON, InputConstants.DIALOG_BOX_ID, InputConstants.TEXT_INPUT_ID,
                InputConstants.TEXT_INPUT_SUBMIT];

        return {

            filterForSelector: function(domElement, eventType, elementPosition, selectedOption){
                var elementId = domElement.id;
                var className = domElement.className;
                var innerText = domElement.innerText;
                var tagName = domElement.tagName;

                if(elementId){
                    TestCompiler.addIdSelectorToDocument(elementId);
                }
                else if(className && this.isClassNameUnique(className)){
                    TestCompiler.addClassNameSelectorToDocument(className);
                }
                else if(className && innerText && this.areClassAndInnerTextUnique(className, innerText)){
                    TestCompiler.addClassNameAndTextSelectorToDocument(className, innerText, tagName);
                }
                else if(innerText && this.isElementInnerTextUnique(innerText)){
                    TestCompiler.addTextSelectorToDocument(innerText, tagName);
                }
                else if(tagName && this.isTagNameUnique(tagName)){
                    TestCompiler.addTagSelectorToDocument(tagName);
                }
                else if(tagName && className && this.areTagAndClassUnique(tagName, className)){
                    TestCompiler.addTagAndClassSelectorToDocument(className, tagName);
                }else{
                    TestCompiler.addXpathWithIndexToDocument(tagName, this.getElementPosition(domElement, elementPosition));
                }
                this.filterForEventType(eventType, domElement, selectedOption);
            },

            isClassNameUnique: function(className){
                if(document.getElementsByClassName(className).length > 1){
                    return false;
                }else{
                    return true;
                }
            },

            areClassAndInnerTextUnique: function(className, text){
                var allElements = document.getElementsByClassName(className);
                var textContents = [];
                var i, length = allElements.length;

                for(i = 0; i < length; i++){
                    if(allElements[i].innerText && textContents.indexOf(allElements[i].innerText) === -1){
                        textContents.push(allElements[i].innerText);
                    }else{
                        return false;
                    }
                }
                return true;
            },

            isElementInnerTextUnique: function(text){
                var allElements = document.body.getElementsByTagName('*');
                var innerTextArray = [];
                var i, length = allElements.length;

                for(i = 0; i < length; i++){
                    var comparisonText = allElements[i].innerText;
                    if(comparisonText && comparisonText === text && innerTextArray.indexOf(comparisonText) === -1){
                        innerTextArray.push(allElements[i].innerText);
                    }else if(comparisonText && comparisonText === text){
                        return false;
                    }
                }
                return true;
            },

            isTagNameUnique: function(tagName){
                if(document.getElementsByTagName(tagName).length > 1){
                    return false;
                }else{
                    return true;
                }
            },

            areTagAndClassUnique: function(tagName, className){
                var allElementsWithTag = document.getElementsByTagName(tagName);
                var i, length = allElementsWithTag.length;
                var classNames = [];
                for(i = 0; i < length; i++){
                    if(allElementsWithTag[i].className && classNames.indexOf(allElementsWithTag[i].className) === -1){
                        classNames.push(allElementsWithTag[i].className);
                    }else{
                        return false;
                    }
                }
                return true;
            },

            getElementPosition: function(domElement, elementPosition){
                var elementsWithTag = toArray(document.getElementsByTagName(domElement.tagName));
                if(elementPosition){
                    return elementPosition;
                }else{
                    return elementsWithTag.indexOf(domElement);
                }
            },

            filterForEventType: function(eventType, domElement, selectedOption){
                switch(eventType){
                    case TestConstants.JAVASCRIPT_EVENTS.CLICK:
                        TestCompiler.addClick();
                        break;
                    case TestConstants.JAVASCRIPT_EVENTS.CTRL_CLICK:
                        this.createAssertion(domElement, selectedOption);
                        break;
                }
            },

            createAssertion: function(domElement, selectedOption){
                switch(selectedOption){
                    case AssertionConstants.ASSERTABLE_ITEMS.TEXT_CONTENT:
                        TestCompiler.addNodeTextAssertion(domElement.textContent);
                        break;
                    case AssertionConstants.ASSERTABLE_ITEMS.CSS_CLASS:
                        TestCompiler.addCssClassAssertion(domElement.className);
                        break;
                    case AssertionConstants.ASSERTABLE_ITEMS.ID:
                        TestCompiler.addIdAssertion(domElement.id);
                        break;
                    case AssertionConstants.ASSERTABLE_ITEMS.NAME:
                        TestCompiler.addNameAssertion(domElement.getAttribute(TestConstants.ATTRIBUTES.NAME));
                        break;
                    case AssertionConstants.ASSERTABLE_ITEMS.VALUE:
                        TestCompiler.addValueAssertion(domElement.getAttribute(TestConstants.ATTRIBUTES.VALUE));
                        break;
                }
            },

            createFile: function(){
                TestCompiler.createFile();
            },

            isIdAUiSaorId: function(elementId){
                if(uiSaorIds.indexOf(elementId) > -1){
                    return true;
                }else{
                    return false;
                }
            }
        };

        function toArray(elementsToConvert) {
            var elementArray = new Array(elementsToConvert.length);
            var length = elementsToConvert.length;
            for (var i = 0; i < length; i++)
                elementArray[i] = elementsToConvert[i];
            return elementArray;
        }

});