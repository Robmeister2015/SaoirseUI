define([
    '../constants/TestConstants',
    '../constants/InputHandlerConstants',
    'jquery'
    ], function (TestConstants, InputConstants, $) {
    'use strict';

    $(document).ready(function() {
        writeInitialTestCode(window.location.href);
    });

     function writeInitialTestCode(serverAddress){
        testText += TestConstants.IMPORTS.IMPORT_WEBDRIVER + TestConstants.PUNCTUATION.NEWLINE
             +  TestConstants.IMPORTS.RESULTS_COMPILER + TestConstants.PUNCTUATION.NEWLINE
             +  TestConstants.IMPORTS.IMPORT_KEYS + TestConstants.PUNCTUATION.NEWLINE
             +  TestConstants.IMPORTS.IMPORT_BY + TestConstants.PUNCTUATION.NEWLINE
             +  TestConstants.IMPORTS.IMPORT_WEBDRIVER_WAIT + TestConstants.PUNCTUATION.NEWLINE
             +  TestConstants.IMPORTS.IMPORT_EXPECTED_CONDITIONS + TestConstants.PUNCTUATION.NEWLINE
             +  TestConstants.IMPORTS.IMPORT_TIME + TestConstants.PUNCTUATION.NEWLINE
             +  TestConstants.IMPORTS.IMPORT_FRAME_INFO + TestConstants.PUNCTUATION.DOUBLE_NEWLINE
             +  TestConstants.DRIVER_START.SERVER_ADDRESS_PREPEND
             +  TestConstants.PUNCTUATION.SINGLE_QUOTE + serverAddress + TestConstants.PUNCTUATION.SINGLE_QUOTE
             +  TestConstants.PUNCTUATION.DOUBLE_NEWLINE + TestConstants.PYTHON_INSTANCES.RESULTS_COMPILER
             +  TestConstants.PUNCTUATION.NEWLINE + TestConstants.DRIVER_START.INITIALISE_DRIVER
             +  TestConstants.PUNCTUATION.NEWLINE + TestConstants.DRIVER_START.OPEN_PAGE;
     };

    var testText = '';

    return {

         addClick: function(){
            testText += TestConstants.PUNCTUATION.NEWLINE + TestConstants.EVENTS.CLICK;
         },

         addWaitBeginning: function(){
            testText += TestConstants.PUNCTUATION.NEWLINE + TestConstants.EXCEPTIONS.TRY
                 + TestConstants.PUNCTUATION.NEWLINE + TestConstants.PUNCTUATION.TAB
                 + TestConstants.ELEMENT + TestConstants.PUNCTUATION.SPACE
                 + TestConstants.OPERATORS.EQUALS + TestConstants.PUNCTUATION.SPACE
                 + TestConstants.WEBDRIVER_WAIT.PREPEND + TestConstants.PUNCTUATION.LEFT_BRACKET
                 + TestConstants.PUNCTUATION.NEWLINE + TestConstants.PUNCTUATION.TAB
                 + TestConstants.PUNCTUATION.TAB + TestConstants.EXPECTED_CONDITIONS.ELEMENT_PRESENCE;
         },

         addWaitEnding: function(){
            testText += TestConstants.PUNCTUATION.NEWLINE + TestConstants.EXCEPTIONS.EXCEPT
                 + TestConstants.PUNCTUATION.COLON
                 + TestConstants.PUNCTUATION.NEWLINE + TestConstants.PUNCTUATION.TAB
                 + TestConstants.FRAME_INFO.GET_FRAME_INFO + TestConstants.PUNCTUATION.NEWLINE
                 + TestConstants.PUNCTUATION.TAB + TestConstants.METHODS.ELEMENT_NOT_FOUND.BEGINNING
                 + TestConstants.FRAME_INFO.FILE_NAME + TestConstants.PUNCTUATION.COMMA
                 + TestConstants.FRAME_INFO.LINE_NUMBER + TestConstants.PUNCTUATION.RIGHT_BRACKET
                 + TestConstants.PUNCTUATION.NEWLINE + TestConstants.PUNCTUATION.TAB
                 + TestConstants.PRINT_MESSAGES.ELEMENT_NOT_FOUND
                 + TestConstants.PUNCTUATION.NEWLINE + TestConstants.PUNCTUATION.TAB
                 + TestConstants.DRIVER_STOP + TestConstants.PUNCTUATION.NEWLINE;
         },

         addIdSelectorToDocument: function(idSelector){
             this.addWaitBeginning();
             testText += TestConstants.PUNCTUATION.LEFT_BRACKET + TestConstants.BY_SELECTORS.BY_ID
                 + TestConstants.PUNCTUATION.COMMA + TestConstants.PUNCTUATION.SPACE
                 + TestConstants.PUNCTUATION.DOUBLE_QUOTE + idSelector + TestConstants.PUNCTUATION.DOUBLE_QUOTE
                 + TestConstants.PUNCTUATION.RIGHT_BRACKET
                 + TestConstants.PUNCTUATION.RIGHT_BRACKET + TestConstants.PUNCTUATION.NEWLINE
                 + TestConstants.PUNCTUATION.TAB + TestConstants.PUNCTUATION.RIGHT_BRACKET;
             this.addWaitEnding();
         },

         addClassNameSelectorToDocument: function(className){
            this.addWaitBeginning();
            testText += TestConstants.PUNCTUATION.LEFT_BRACKET + TestConstants.PUNCTUATION.LEFT_BRACKET
                 + TestConstants.BY_SELECTORS.BY_CLASS
                 + TestConstants.PUNCTUATION.COMMA + TestConstants.PUNCTUATION.SPACE
                 + TestConstants.PUNCTUATION.DOUBLE_QUOTE + className + TestConstants.PUNCTUATION.DOUBLE_QUOTE
                 + TestConstants.PUNCTUATION.RIGHT_BRACKET + TestConstants.PUNCTUATION.RIGHT_BRACKET
                 + TestConstants.PUNCTUATION.NEWLINE + TestConstants.PUNCTUATION.TAB
                 + TestConstants.PUNCTUATION.RIGHT_BRACKET;
            this.addWaitEnding();
         },

         addClassNameAndTextSelectorToDocument: function(className, innerText, tagName){
            this.addWaitBeginning();
            testText += TestConstants.PUNCTUATION.LEFT_BRACKET + TestConstants.PUNCTUATION.LEFT_BRACKET
                 + TestConstants.BY_SELECTORS.BY_XPATH
                 + TestConstants.PUNCTUATION.COMMA + TestConstants.PUNCTUATION.SPACE
                 + TestConstants.PUNCTUATION.SINGLE_QUOTE + TestConstants.PUNCTUATION.DOUBLE_FORWARD_SLASH
                 + tagName + TestConstants.PUNCTUATION.SQUARE_BRACKET_LEFT + TestConstants.SYMBOLS.AT
                 + TestConstants.SELECTORS.CLASS + TestConstants.OPERATORS.EQUALS
                 + TestConstants.PUNCTUATION.DOUBLE_QUOTE + className + TestConstants.PUNCTUATION.DOUBLE_QUOTE
                 + TestConstants.PUNCTUATION.SPACE + TestConstants.OPERATORS.AND_TEXT
                 + TestConstants.PUNCTUATION.SPACE
                 + TestConstants.SELECTORS.TEXT + TestConstants.OPERATORS.EQUALS
                 + TestConstants.PUNCTUATION.DOUBLE_QUOTE + innerText + TestConstants.PUNCTUATION.DOUBLE_QUOTE
                 + TestConstants.PUNCTUATION.SQUARE_BRACKET_RIGHT + TestConstants.PUNCTUATION.SINGLE_QUOTE
                 + TestConstants.PUNCTUATION.RIGHT_BRACKET + TestConstants.PUNCTUATION.RIGHT_BRACKET
                 + TestConstants.PUNCTUATION.NEWLINE + TestConstants.PUNCTUATION.TAB
                 + TestConstants.PUNCTUATION.RIGHT_BRACKET;
            this.addWaitEnding();
         },

         addTextSelectorToDocument: function(innerText, tagName){
            this.addWaitBeginning();
            testText += TestConstants.PUNCTUATION.LEFT_BRACKET + TestConstants.PUNCTUATION.LEFT_BRACKET
                 + TestConstants.BY_SELECTORS.BY_XPATH
                 + TestConstants.PUNCTUATION.COMMA + TestConstants.PUNCTUATION.SPACE
                 + TestConstants.PUNCTUATION.SINGLE_QUOTE + TestConstants.PUNCTUATION.DOUBLE_FORWARD_SLASH
                 + tagName + TestConstants.PUNCTUATION.SQUARE_BRACKET_LEFT
                 + TestConstants.SELECTORS.TEXT + TestConstants.OPERATORS.EQUALS
                 + TestConstants.PUNCTUATION.DOUBLE_QUOTE + innerText + TestConstants.PUNCTUATION.DOUBLE_QUOTE
                 + TestConstants.PUNCTUATION.SQUARE_BRACKET_RIGHT + TestConstants.PUNCTUATION.SINGLE_QUOTE
                 + TestConstants.PUNCTUATION.RIGHT_BRACKET + TestConstants.PUNCTUATION.RIGHT_BRACKET
                 + TestConstants.PUNCTUATION.NEWLINE + TestConstants.PUNCTUATION.TAB
                 + TestConstants.PUNCTUATION.RIGHT_BRACKET;
            this.addWaitEnding();
         },

         addTagSelectorToDocument: function(tagName){
            this.addWaitBeginning();
            testText += TestConstants.PUNCTUATION.LEFT_BRACKET + TestConstants.PUNCTUATION.LEFT_BRACKET
                 + TestConstants.BY_SELECTORS.BY_XPATH
                 + TestConstants.PUNCTUATION.COMMA + TestConstants.PUNCTUATION.SPACE
                 + TestConstants.PUNCTUATION.SINGLE_QUOTE + TestConstants.PUNCTUATION.DOUBLE_FORWARD_SLASH
                 + tagName + TestConstants.PUNCTUATION.SINGLE_QUOTE
                 + TestConstants.PUNCTUATION.RIGHT_BRACKET + TestConstants.PUNCTUATION.RIGHT_BRACKET
                 + TestConstants.PUNCTUATION.NEWLINE + TestConstants.PUNCTUATION.TAB
                 + TestConstants.PUNCTUATION.RIGHT_BRACKET;
            this.addWaitEnding();
         },

        addTagAndClassSelectorToDocument: function(className, tagName){
            this.addWaitBeginning();
            testText += TestConstants.PUNCTUATION.LEFT_BRACKET + TestConstants.PUNCTUATION.LEFT_BRACKET
                 + TestConstants.BY_SELECTORS.BY_XPATH
                 + TestConstants.PUNCTUATION.COMMA + TestConstants.PUNCTUATION.SPACE
                 + TestConstants.PUNCTUATION.SINGLE_QUOTE + TestConstants.PUNCTUATION.DOUBLE_FORWARD_SLASH
                 + tagName + TestConstants.PUNCTUATION.SQUARE_BRACKET_LEFT + TestConstants.SYMBOLS.AT
                 + TestConstants.SELECTORS.CLASS + TestConstants.OPERATORS.EQUALS
                 + TestConstants.PUNCTUATION.DOUBLE_QUOTE + className + TestConstants.PUNCTUATION.DOUBLE_QUOTE
                 + TestConstants.PUNCTUATION.SQUARE_BRACKET_RIGHT + TestConstants.PUNCTUATION.SINGLE_QUOTE
                 + TestConstants.PUNCTUATION.RIGHT_BRACKET + TestConstants.PUNCTUATION.RIGHT_BRACKET
                 + TestConstants.PUNCTUATION.NEWLINE + TestConstants.PUNCTUATION.TAB
                 + TestConstants.PUNCTUATION.RIGHT_BRACKET;
            this.addWaitEnding();
        },

        addXpathWithIndexToDocument: function(tagName, elementPosition){
            if(!elementPosition){
                elementPosition = 0;
            }
            this.addWaitBeginning();
            testText += TestConstants.PUNCTUATION.LEFT_BRACKET + TestConstants.PUNCTUATION.LEFT_BRACKET
                 + TestConstants.BY_SELECTORS.BY_XPATH
                 + TestConstants.PUNCTUATION.COMMA + TestConstants.PUNCTUATION.SPACE
                 + TestConstants.PUNCTUATION.SINGLE_QUOTE + TestConstants.PUNCTUATION.LEFT_BRACKET
                 + TestConstants.PUNCTUATION.DOUBLE_FORWARD_SLASH
                 + tagName + TestConstants.PUNCTUATION.RIGHT_BRACKET;
                 if(elementPosition && elementPosition > -1){
                    testText += TestConstants.PUNCTUATION.SQUARE_BRACKET_LEFT
                         + (elementPosition + 1) + TestConstants.PUNCTUATION.SQUARE_BRACKET_RIGHT;
                 }
                 testText += TestConstants.PUNCTUATION.SINGLE_QUOTE
                 + TestConstants.PUNCTUATION.RIGHT_BRACKET + TestConstants.PUNCTUATION.RIGHT_BRACKET
                 + TestConstants.PUNCTUATION.NEWLINE + TestConstants.PUNCTUATION.TAB
                 + TestConstants.PUNCTUATION.RIGHT_BRACKET;
            this.addWaitEnding();
        },

        addNodeTextAssertion: function(text){
            testText += TestConstants.PUNCTUATION.NEWLINE + TestConstants.EXCEPTIONS.TRY
                + TestConstants.PUNCTUATION.NEWLINE + TestConstants.PUNCTUATION.TAB
                + TestConstants.ASSERTIONS.TEXT_EQUALS + text + TestConstants.PUNCTUATION.DOUBLE_QUOTE
                + TestConstants.PUNCTUATION.NEWLINE + TestConstants.PUNCTUATION.TAB
                + TestConstants.METHODS.TEXT_ASSERTION.BEGINNING + TestConstants.PUNCTUATION.DOUBLE_QUOTE + text
                + TestConstants.PUNCTUATION.DOUBLE_QUOTE + TestConstants.PUNCTUATION.COMMA
                + TestConstants.PUNCTUATION.DOUBLE_QUOTE + TestConstants.ATTRIBUTES.ELEMENT_TEXT
                + TestConstants.PUNCTUATION.DOUBLE_QUOTE
                + TestConstants.PUNCTUATION.COMMA + TestConstants.ATTRIBUTES.TRUE + TestConstants.PUNCTUATION.RIGHT_BRACKET
                + TestConstants.PUNCTUATION.NEWLINE + TestConstants.EXCEPTIONS.EXCEPT + TestConstants.PUNCTUATION.COLON
                + TestConstants.PUNCTUATION.NEWLINE + TestConstants.PUNCTUATION.TAB
                + TestConstants.METHODS.TEXT_ASSERTION.BEGINNING + TestConstants.PUNCTUATION.DOUBLE_QUOTE
                + text + TestConstants.PUNCTUATION.DOUBLE_QUOTE + TestConstants.PUNCTUATION.COMMA
                + TestConstants.GET_ATTRIBUTE.GET_TEXT + TestConstants.PUNCTUATION.COMMA
                + TestConstants.ATTRIBUTES.FALSE + TestConstants.PUNCTUATION.RIGHT_BRACKET;
        },

        addCssClassAssertion: function(className){
            testText += TestConstants.PUNCTUATION.NEWLINE + TestConstants.EXCEPTIONS.TRY
                + TestConstants.PUNCTUATION.NEWLINE + TestConstants.PUNCTUATION.TAB
                + TestConstants.ASSERTIONS.CLASS_EQUALS + className + TestConstants.PUNCTUATION.DOUBLE_QUOTE
                + TestConstants.PUNCTUATION.NEWLINE + TestConstants.PUNCTUATION.TAB
                + TestConstants.METHODS.CLASS_ASSERTION.BEGINNING + TestConstants.PUNCTUATION.DOUBLE_QUOTE + className
                + TestConstants.PUNCTUATION.DOUBLE_QUOTE + TestConstants.PUNCTUATION.COMMA
                + TestConstants.PUNCTUATION.DOUBLE_QUOTE + TestConstants.ATTRIBUTES.ELEMENT_TEXT
                + TestConstants.PUNCTUATION.DOUBLE_QUOTE
                + TestConstants.PUNCTUATION.COMMA + TestConstants.ATTRIBUTES.TRUE + TestConstants.PUNCTUATION.RIGHT_BRACKET
                + TestConstants.PUNCTUATION.NEWLINE + TestConstants.EXCEPTIONS.EXCEPT + TestConstants.PUNCTUATION.COLON
                + TestConstants.PUNCTUATION.NEWLINE + TestConstants.PUNCTUATION.TAB
                + TestConstants.METHODS.CLASS_ASSERTION.BEGINNING + TestConstants.PUNCTUATION.DOUBLE_QUOTE
                + className + TestConstants.PUNCTUATION.DOUBLE_QUOTE + TestConstants.PUNCTUATION.COMMA
                + TestConstants.GET_ATTRIBUTE.GET_CLASS + TestConstants.PUNCTUATION.COMMA
                + TestConstants.ATTRIBUTES.FALSE + TestConstants.PUNCTUATION.RIGHT_BRACKET;
        },

        addIdAssertion: function(elementId){
            testText += TestConstants.PUNCTUATION.NEWLINE + TestConstants.EXCEPTIONS.TRY
                + TestConstants.PUNCTUATION.NEWLINE + TestConstants.PUNCTUATION.TAB
                + TestConstants.ASSERTIONS.ID_EQUALS + elementId + TestConstants.PUNCTUATION.DOUBLE_QUOTE
                + TestConstants.PUNCTUATION.NEWLINE + TestConstants.PUNCTUATION.TAB
                + TestConstants.METHODS.ID_ASSERTION.BEGINNING + TestConstants.PUNCTUATION.DOUBLE_QUOTE + elementId
                + TestConstants.PUNCTUATION.DOUBLE_QUOTE + TestConstants.PUNCTUATION.COMMA
                + TestConstants.PUNCTUATION.DOUBLE_QUOTE + TestConstants.ATTRIBUTES.ELEMENT_TEXT
                + TestConstants.PUNCTUATION.DOUBLE_QUOTE
                + TestConstants.PUNCTUATION.COMMA + TestConstants.ATTRIBUTES.TRUE + TestConstants.PUNCTUATION.RIGHT_BRACKET
                + TestConstants.PUNCTUATION.NEWLINE + TestConstants.EXCEPTIONS.EXCEPT + TestConstants.PUNCTUATION.COLON
                + TestConstants.PUNCTUATION.NEWLINE + TestConstants.PUNCTUATION.TAB
                + TestConstants.METHODS.TEXT_ASSERTION.BEGINNING + TestConstants.PUNCTUATION.DOUBLE_QUOTE
                + elementId + TestConstants.PUNCTUATION.DOUBLE_QUOTE + TestConstants.PUNCTUATION.COMMA
                + TestConstants.GET_ATTRIBUTE.GET_ID + TestConstants.PUNCTUATION.COMMA
                + TestConstants.ATTRIBUTES.FALSE + TestConstants.PUNCTUATION.RIGHT_BRACKET;
        },

        addNameAssertion: function(elementName){
            testText += TestConstants.PUNCTUATION.NEWLINE + TestConstants.EXCEPTIONS.TRY
                + TestConstants.PUNCTUATION.NEWLINE + TestConstants.PUNCTUATION.TAB
                + TestConstants.ASSERTIONS.NAME_EQUALS + elementName + TestConstants.PUNCTUATION.DOUBLE_QUOTE
                + TestConstants.PUNCTUATION.NEWLINE + TestConstants.PUNCTUATION.TAB
                + TestConstants.METHODS.NAME_ASSERTION.BEGINNING + TestConstants.PUNCTUATION.DOUBLE_QUOTE + elementName
                + TestConstants.PUNCTUATION.DOUBLE_QUOTE + TestConstants.PUNCTUATION.COMMA
                + TestConstants.PUNCTUATION.DOUBLE_QUOTE + TestConstants.ATTRIBUTES.ELEMENT_TEXT
                + TestConstants.PUNCTUATION.DOUBLE_QUOTE
                + TestConstants.PUNCTUATION.COMMA + TestConstants.ATTRIBUTES.TRUE + TestConstants.PUNCTUATION.RIGHT_BRACKET
                + TestConstants.PUNCTUATION.NEWLINE + TestConstants.EXCEPTIONS.EXCEPT + TestConstants.PUNCTUATION.COLON
                + TestConstants.PUNCTUATION.NEWLINE + TestConstants.PUNCTUATION.TAB
                + TestConstants.METHODS.NAME_ASSERTION.BEGINNING + TestConstants.PUNCTUATION.DOUBLE_QUOTE
                + elementName + TestConstants.PUNCTUATION.DOUBLE_QUOTE + TestConstants.PUNCTUATION.COMMA
                + TestConstants.GET_ATTRIBUTE.GET_NAME + TestConstants.PUNCTUATION.COMMA
                + TestConstants.ATTRIBUTES.FALSE + TestConstants.PUNCTUATION.RIGHT_BRACKET;
        },

        addValueAssertion: function(elementValue){
            testText += TestConstants.PUNCTUATION.NEWLINE + TestConstants.EXCEPTIONS.TRY
                + TestConstants.PUNCTUATION.NEWLINE + TestConstants.PUNCTUATION.TAB
                + TestConstants.ASSERTIONS.VALUE_EQUALS + elementValue + TestConstants.PUNCTUATION.DOUBLE_QUOTE
                + TestConstants.PUNCTUATION.NEWLINE + TestConstants.PUNCTUATION.TAB
                + TestConstants.METHODS.VALUE_ASSERTION.BEGINNING + TestConstants.PUNCTUATION.DOUBLE_QUOTE + elementValue
                + TestConstants.PUNCTUATION.DOUBLE_QUOTE + TestConstants.PUNCTUATION.COMMA
                + TestConstants.PUNCTUATION.DOUBLE_QUOTE + elementValue
                + TestConstants.PUNCTUATION.DOUBLE_QUOTE
                + TestConstants.PUNCTUATION.COMMA + TestConstants.ATTRIBUTES.TRUE + TestConstants.PUNCTUATION.RIGHT_BRACKET
                + TestConstants.PUNCTUATION.NEWLINE + TestConstants.EXCEPTIONS.EXCEPT + TestConstants.PUNCTUATION.COLON
                + TestConstants.PUNCTUATION.NEWLINE + TestConstants.PUNCTUATION.TAB
                + TestConstants.METHODS.VALUE_ASSERTION.BEGINNING + TestConstants.PUNCTUATION.DOUBLE_QUOTE
                + elementValue + TestConstants.PUNCTUATION.DOUBLE_QUOTE + TestConstants.PUNCTUATION.COMMA
                + TestConstants.GET_ATTRIBUTE.GET_VALUE + TestConstants.PUNCTUATION.COMMA
                + TestConstants.ATTRIBUTES.FALSE + TestConstants.PUNCTUATION.RIGHT_BRACKET;
        },

         createFile: function(){
             testText += TestConstants.PUNCTUATION.NEWLINE + TestConstants.DRIVER_STOP;
             var textBlob = new Blob([testText], {type: "text/plain;charset=utf-8"});
             saveAs(textBlob, 'somePy.py');
         },

         addTextInputStep: function(inputText){
            testText += TestConstants.PUNCTUATION.NEWLINE + TestConstants.METHODS.INPUT_TEXT.INPUT_BEGINNING
                + TestConstants.PUNCTUATION.DOUBLE_QUOTE + inputText + TestConstants.PUNCTUATION.DOUBLE_QUOTE
                + TestConstants.PUNCTUATION.RIGHT_BRACKET;
         },

         getTestText: function(){
            return testText;
         }
    };
});