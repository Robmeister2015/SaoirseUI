define([], function () {
    return {
        ELEMENT: 'element',
        PUNCTUATION: {
            TAB: '\t',
            NEWLINE: '\r\n',
            DOUBLE_NEWLINE: '\r\n\r\n',
            SINGLE_QUOTE: '\'',
            DOUBLE_QUOTE: '"',
            LEFT_BRACKET: '(',
            RIGHT_BRACKET: ')',
            COMMA: ',',
            SPACE: ' ',
            DOUBLE_FORWARD_SLASH: '//',
            SQUARE_BRACKET_LEFT: '[',
            SQUARE_BRACKET_RIGHT: ']',
            COLON: ':'
        },
        SYMBOLS: {
            AT: '@'
        },
        OPERATORS: {
            EQUALS: '=',
            AND_TEXT: 'and'
        },
        IMPORTS: {
            IMPORT_WEBDRIVER: 'from selenium import webdriver',
            IMPORT_BY: 'from selenium.webdriver.common.by import By',
            IMPORT_KEYS: 'from selenium.webdriver.common.keys import Keys',
            IMPORT_WEBDRIVER_WAIT: 'from selenium.webdriver.support.ui import WebDriverWait',
            IMPORT_EXPECTED_CONDITIONS: 'from selenium.webdriver.support import expected_conditions as EC',
            IMPORT_FRAME_INFO: 'from inspect import currentframe, getframeinfo',
            IMPORT_TIME: 'import time',
            RESULTS_COMPILER: 'import results_compiler.results_compiler',
        },
        PYTHON_INSTANCES: {
            RESULTS_COMPILER: 'results_compiler = results_compiler.results_compiler.results_compiler()'
        },
        DRIVER_START: {
            SERVER_ADDRESS_PREPEND: 'SERVER_ADDRESS=',
            INITIALISE_DRIVER: 'driver = webdriver.Chrome()',
            OPEN_PAGE: 'driver.get(SERVER_ADDRESS)'
        },
        DRIVER_STOP: 'driver.quit()',
        WEBDRIVER_WAIT: {
            PREPEND: 'WebDriverWait(driver, 10).until'
        },
        EXPECTED_CONDITIONS: {
            ELEMENT_PRESENCE: 'EC.presence_of_element_located'
        },
        SELECTORS: {
            CLASS: 'class',
            TEXT: 'text()'
        },
        BY_SELECTORS: {
            BY_ID: '(By.ID',
            BY_CLASS: 'By.CLASS_NAME',
            BY_XPATH: 'By.XPATH'
        },
        EVENTS: {
            CLICK: 'element.click()'
        },
        EXCEPTIONS: {
            TRY: 'try:',
            EXCEPT: 'except',
            ASSERTION_EXCEPTION: 'AssertionError as e:',
            ARGS_APPEND: 'e.args +=',
            RAISE: 'raise'
        },
        JAVASCRIPT_EVENTS: {
            CLICK: 'click',
            CTRL_CLICK: 'ctrlClick'
        },
        ASSERTIONS: {
            TEXT_EQUALS: 'assert element.text == "',
            CLASS_EQUALS: 'assert element.get_attribute("class") == "',
            ID_EQUALS: 'assert element.get_attribute("id") == "',
            NAME_EQUALS: 'assert element.get_attribute("name") == "',
            VALUE_EQUALS: 'assert element.get_attribute("value") == "'
        },
        TAGS: {
            HEAD: 'head'
        },
        METHODS: {
            TEXT_ASSERTION: {
                BEGINNING: 'results_compiler.write_text_assertion_html('
            },
            ID_ASSERTION: {
                BEGINNING: 'results_compiler.write_id_assertion_html('
            },
            CLASS_ASSERTION: {
                BEGINNING: 'results_compiler.write_class_assertion_html('
            },
            NAME_ASSERTION: {
                BEGINNING: 'results_compiler.write_name_assertion_html('
            },
            VALUE_ASSERTION: {
                BEGINNING: 'results_compiler.write_value_assertion_html('
            },
            ELEMENT_NOT_FOUND: {
                BEGINNING: 'results_compiler.write_element_not_found_message('
            },
            INPUT_TEXT: {
                INPUT_BEGINNING: 'element.send_keys('
            }
        },
        ATTRIBUTES: {
            ELEMENT_TEXT: 'element.text',
            ID: 'id',
            FALSE: 'False',
            TRUE: 'True',
            NAME: 'name',
            VALUE: 'value',
            CLASS: 'class'
        },
        GET_ATTRIBUTE: {
            GET_VALUE: 'element.get_attribute("value")',
            GET_NAME: 'element.get_attribute("name")',
            GET_CLASS: 'element.get_attribute("class")',
            GET_ID: 'element.get_attribute("id")',
            GET_TEXT: 'element.text'
        },
        FRAME_INFO: {
            GET_FRAME_INFO: 'frame_info = getframeinfo(currentframe())',
            FILE_NAME: 'frame_info.filename',
            LINE_NUMBER: 'frame_info.lineno - 3'
        },
        PRINT_MESSAGES: {
            ELEMENT_NOT_FOUND: 'print "Exited prematurely due to missing element. All subsequent tests have been skipped. See test results output for more information."'
        }
    };
});