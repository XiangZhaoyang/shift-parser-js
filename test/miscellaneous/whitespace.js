/**
 * Copyright 2014 Shape Security, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License")
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

let expr = require('../helpers').expr;
let stmt = require('../helpers').stmt;
let testParse = require('../assertions').testParse;
let testParseFailure = require('../assertions').testParseFailure;

suite('Parser', () => {
  suite('automatic semicolon insertion', () => {


    testParseFailure('throw /* \n */ e', 'Illegal newline after throw');
    testParseFailure('throw /* \u2028 */ e', 'Illegal newline after throw');
    testParseFailure('throw /* \u2029 */ e', 'Illegal newline after throw');


  });

  suite('whitespace characters', () => {


    testParseFailure('new\u180Ea', 'Unexpected "\u180E"'); // Mongolian vowel separator


  });
});
