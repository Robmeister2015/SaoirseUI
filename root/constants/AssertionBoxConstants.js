define([], function () {
    return {
       OPENING_LINE: '<div id="uiSaorAssertionsDialog" title="Choose Your Assertion">',
       CLOSING_LINE: '<input type="button" id="uiSaorAssertionSelectorSubmit" value="submit"/></div>',
       SELECT_OPENING: '<select id="uiSaorAssertionOptionsSelect">',
       SELECT_CLOSING: '</select>',
       OPTION_LEFT: '<option value="',
       OPTION_RIGHT: '</option>',
       OPTION_RIGHT_ARROW: '">',
       ASSERTION_BOX_ID: '#uiSaorAssertionsDialog',
       ASSERTION_BOX_ID_NO_HASH: 'uiSaorAssertionsDialog',
       SELECT_OPTION: 'uiSaorAssertionOptionsSelect',
       ASSERTION_BOX_SUBMIT_BUTTON: 'uiSaorAssertionSelectorSubmit',
       ASSERTION_BOX_STYLE_ID: '#jqueryuistyle',
       ASSERTABLE_ITEMS: {
            ID: 'ID',
            CSS_CLASS: 'CSS Class',
            VALUE: 'Value',
            NAME: 'Name',
            TEXT_CONTENT: 'Text Content'
       }
    };
});