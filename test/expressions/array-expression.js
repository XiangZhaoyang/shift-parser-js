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

var Shift = require("shift-ast");

var testParse = require("../assertions").testParse;
var expr = require("../helpers").expr;
var testParseFailure = require("../assertions").testParseFailure;

suite("Parser", function () {
  suite("array expression", function () {

    testParse("[]", expr, new Shift.ArrayExpression([]));

    testParse("[ ]", expr, new Shift.ArrayExpression([]));

    testParse("[ 0 ]", expr, new Shift.ArrayExpression([
      new Shift.LiteralNumericExpression(0),
    ]));

    testParse("[ 0, ]", expr, new Shift.ArrayExpression([
      new Shift.LiteralNumericExpression(0),
    ]));

    testParse("[ ,, 0 ]", expr, new Shift.ArrayExpression([
      null,
      null,
      new Shift.LiteralNumericExpression(0),
    ]));

    testParse("[ 1, 2, 3, ]", expr, new Shift.ArrayExpression([
      new Shift.LiteralNumericExpression(1),
      new Shift.LiteralNumericExpression(2),
      new Shift.LiteralNumericExpression(3),
    ]));

    testParse("[ 1, 2,, 3, ]", expr, new Shift.ArrayExpression([
      new Shift.LiteralNumericExpression(1),
      new Shift.LiteralNumericExpression(2),
      null,
      new Shift.LiteralNumericExpression(3),
    ]));

    testParse("[,,1,,,2,3,,]", expr, new Shift.ArrayExpression([
      null,
      null,
      new Shift.LiteralNumericExpression(1),
      null,
      null,
      new Shift.LiteralNumericExpression(2),
      new Shift.LiteralNumericExpression(3),
      null,
    ]));

  });
});