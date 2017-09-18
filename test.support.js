"use strict";

/*;
              	@test-license:
              		The MIT License (MIT)
              		@mit-license
              
              		Copyright (@c) 2017 Richeve Siodina Bebedor
              		@email: richeve.bebedor@gmail.com
              
              		Permission is hereby granted, free of charge, to any person obtaining a copy
              		of this software and associated documentation files (the "Software"), to deal
              		in the Software without restriction, including without limitation the rights
              		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              		copies of the Software, and to permit persons to whom the Software is
              		furnished to do so, subject to the following conditions:
              
              		The above copyright notice and this permission notice shall be included in all
              		copies or substantial portions of the Software.
              
              		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
              		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
              		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
              		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
              		SOFTWARE.
              	@end-test-license
              
              	@test-configuration:
              		{
              			"package": "ferge",
              			"path": "ferge/test.module.js",
              			"file": "test.module.js",
              			"module": "test",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"repository": "https://github.com/volkovasystems/ferge.git"
              		}
              	@end-test-configuration
              
              	@test-documentation:
              
              	@end-test-documentation
              
              	@include:
              		{
              			"assert": "should/as-function",
              			"ferge": "ferge"
              		}
              	@end-include
              */var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require("babel-runtime/helpers/inherits");var _inherits3 = _interopRequireDefault(_inherits2);var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = require("babel-runtime/helpers/createClass");var _createClass3 = _interopRequireDefault(_createClass2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var assert = require("should/as-function");



//: @client:
var ferge = require("./ferge.support.js");
//: @end-client







//: @client:
describe("ferge", function () {

	describe("`ferge( new C( ), { } )`", function () {
		it("should contain getA and getB methods", function () {var
			A = function () {
				function A() {(0, _classCallCheck3.default)(this, A);}(0, _createClass3.default)(A, [{ key: "getA", value: function getA()
					{
						return this;
					} }]);return A;}();var


			B = function (_A) {(0, _inherits3.default)(B, _A);
				function B() {(0, _classCallCheck3.default)(this, B);return (0, _possibleConstructorReturn3.default)(this, (B.__proto__ || (0, _getPrototypeOf2.default)(B)).call(this));}(0, _createClass3.default)(B, [{ key: "getB", value: function getB()
					{
						return this;
					} }]);return B;}(A);var


			C = function (_B) {(0, _inherits3.default)(C, _B);
				function C() {(0, _classCallCheck3.default)(this, C);return (0, _possibleConstructorReturn3.default)(this, (C.__proto__ || (0, _getPrototypeOf2.default)(C)).call(this));}return C;}(B);


			var target = {};
			var result = ferge(new C(), target);

			assert.equal("getA" in result, true);

			assert.equal("getB" in result, true);

		});
	});

	describe("`ferge( new C( ), 'B', { } ).getB( )`", function () {
		it("should be instance of C", function () {var
			A = function () {
				function A() {(0, _classCallCheck3.default)(this, A);}(0, _createClass3.default)(A, [{ key: "getA", value: function getA()
					{
						return this;
					} }]);return A;}();var


			B = function (_A2) {(0, _inherits3.default)(B, _A2);
				function B() {(0, _classCallCheck3.default)(this, B);return (0, _possibleConstructorReturn3.default)(this, (B.__proto__ || (0, _getPrototypeOf2.default)(B)).call(this));}(0, _createClass3.default)(B, [{ key: "getB", value: function getB()
					{
						return this;
					} }]);return B;}(A);var


			C = function (_B2) {(0, _inherits3.default)(C, _B2);
				function C() {(0, _classCallCheck3.default)(this, C);return (0, _possibleConstructorReturn3.default)(this, (C.__proto__ || (0, _getPrototypeOf2.default)(C)).call(this));}return C;}(B);


			var target = {};

			assert.equal(ferge(new C(), "B", target).getB() instanceof C, true);

		});

		it("should contain 'getB'", function () {var
			A = function () {
				function A() {(0, _classCallCheck3.default)(this, A);}(0, _createClass3.default)(A, [{ key: "getA", value: function getA()
					{
						return this;
					} }]);return A;}();var


			B = function (_A3) {(0, _inherits3.default)(B, _A3);
				function B() {(0, _classCallCheck3.default)(this, B);return (0, _possibleConstructorReturn3.default)(this, (B.__proto__ || (0, _getPrototypeOf2.default)(B)).call(this));}(0, _createClass3.default)(B, [{ key: "getB", value: function getB()
					{
						return this;
					} }]);return B;}(A);var


			C = function (_B3) {(0, _inherits3.default)(C, _B3);
				function C() {(0, _classCallCheck3.default)(this, C);return (0, _possibleConstructorReturn3.default)(this, (C.__proto__ || (0, _getPrototypeOf2.default)(C)).call(this));}return C;}(B);


			var target = {};
			ferge(new C(), "B", target).getB();

			assert.equal("getB" in target, true);

		});

	});

	describe("`ferge( new C( ), target ).getA( )`", function () {
		it("should be instance of C", function () {var
			A = function () {
				function A() {(0, _classCallCheck3.default)(this, A);}(0, _createClass3.default)(A, [{ key: "getA", value: function getA()
					{
						return this;
					} }]);return A;}();var


			B = function (_A4) {(0, _inherits3.default)(B, _A4);
				function B() {(0, _classCallCheck3.default)(this, B);return (0, _possibleConstructorReturn3.default)(this, (B.__proto__ || (0, _getPrototypeOf2.default)(B)).call(this));}(0, _createClass3.default)(B, [{ key: "getB", value: function getB()
					{
						return this;
					} }]);return B;}(A);var


			C = function (_B4) {(0, _inherits3.default)(C, _B4);
				function C() {(0, _classCallCheck3.default)(this, C);return (0, _possibleConstructorReturn3.default)(this, (C.__proto__ || (0, _getPrototypeOf2.default)(C)).call(this));}return C;}(B);


			var target = {};

			assert.equal(ferge(new C(), target).getA() instanceof C, true);

		});

	});

});
//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwiZmVyZ2UiLCJkZXNjcmliZSIsIml0IiwiQSIsIkIiLCJDIiwidGFyZ2V0IiwicmVzdWx0IiwiZXF1YWwiLCJnZXRCIiwiZ2V0QSJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1EQSxJQUFNQSxTQUFTQyxRQUFTLG9CQUFULENBQWY7Ozs7QUFJQTtBQUNBLElBQU1DLFFBQVFELFFBQVMsb0JBQVQsQ0FBZDtBQUNBOzs7Ozs7OztBQVFBO0FBQ0FFLFNBQVUsT0FBVixFQUFtQixZQUFPOztBQUV6QkEsVUFBVSwwQkFBVixFQUFzQyxZQUFPO0FBQzVDQyxLQUFJLHNDQUFKLEVBQTRDLFlBQU87QUFDNUNDLElBRDRDO0FBRWpELGlCQUFjLHdDQUFHLENBRmdDO0FBRzFDO0FBQ04sYUFBTyxJQUFQO0FBQ0EsTUFMZ0Q7OztBQVE1Q0MsSUFSNEM7QUFTakQsaUJBQWMsNEpBQWEsQ0FUc0I7QUFVMUM7QUFDTixhQUFPLElBQVA7QUFDQSxNQVpnRCxnQkFRbENELENBUmtDOzs7QUFlNUNFLElBZjRDO0FBZ0JqRCxpQkFBYyw0SkFBYSxDQWhCc0IsV0FlbENELENBZmtDOzs7QUFtQmxELE9BQUlFLFNBQVMsRUFBYjtBQUNBLE9BQUlDLFNBQVNQLE1BQU8sSUFBSUssQ0FBSixFQUFQLEVBQWlCQyxNQUFqQixDQUFiOztBQUVBUixVQUFPVSxLQUFQLENBQWMsVUFBVUQsTUFBeEIsRUFBZ0MsSUFBaEM7O0FBRUFULFVBQU9VLEtBQVAsQ0FBYyxVQUFVRCxNQUF4QixFQUFnQyxJQUFoQzs7QUFFQSxHQTFCRDtBQTJCQSxFQTVCRDs7QUE4QkFOLFVBQVUsdUNBQVYsRUFBbUQsWUFBTztBQUN6REMsS0FBSSx5QkFBSixFQUErQixZQUFPO0FBQy9CQyxJQUQrQjtBQUVwQyxpQkFBYyx3Q0FBRyxDQUZtQjtBQUc3QjtBQUNOLGFBQU8sSUFBUDtBQUNBLE1BTG1DOzs7QUFRL0JDLElBUitCO0FBU3BDLGlCQUFjLDRKQUFhLENBVFM7QUFVN0I7QUFDTixhQUFPLElBQVA7QUFDQSxNQVptQyxnQkFRckJELENBUnFCOzs7QUFlL0JFLElBZitCO0FBZ0JwQyxpQkFBYyw0SkFBYSxDQWhCUyxXQWVyQkQsQ0FmcUI7OztBQW1CckMsT0FBSUUsU0FBUyxFQUFiOztBQUVBUixVQUFPVSxLQUFQLENBQWNSLE1BQU8sSUFBSUssQ0FBSixFQUFQLEVBQWlCLEdBQWpCLEVBQXNCQyxNQUF0QixFQUErQkcsSUFBL0IsY0FBa0RKLENBQWhFLEVBQW1FLElBQW5FOztBQUVBLEdBdkJEOztBQXlCQUgsS0FBSSx1QkFBSixFQUE2QixZQUFPO0FBQzdCQyxJQUQ2QjtBQUVsQyxpQkFBYyx3Q0FBRyxDQUZpQjtBQUczQjtBQUNOLGFBQU8sSUFBUDtBQUNBLE1BTGlDOzs7QUFRN0JDLElBUjZCO0FBU2xDLGlCQUFjLDRKQUFhLENBVE87QUFVM0I7QUFDTixhQUFPLElBQVA7QUFDQSxNQVppQyxnQkFRbkJELENBUm1COzs7QUFlN0JFLElBZjZCO0FBZ0JsQyxpQkFBYyw0SkFBYSxDQWhCTyxXQWVuQkQsQ0FmbUI7OztBQW1CbkMsT0FBSUUsU0FBUyxFQUFiO0FBQ0FOLFNBQU8sSUFBSUssQ0FBSixFQUFQLEVBQWlCLEdBQWpCLEVBQXNCQyxNQUF0QixFQUErQkcsSUFBL0I7O0FBRUFYLFVBQU9VLEtBQVAsQ0FBYyxVQUFVRixNQUF4QixFQUFnQyxJQUFoQzs7QUFFQSxHQXhCRDs7QUEwQkEsRUFwREQ7O0FBc0RBTCxVQUFVLHFDQUFWLEVBQWlELFlBQU87QUFDdkRDLEtBQUkseUJBQUosRUFBK0IsWUFBTztBQUMvQkMsSUFEK0I7QUFFcEMsaUJBQWMsd0NBQUcsQ0FGbUI7QUFHN0I7QUFDTixhQUFPLElBQVA7QUFDQSxNQUxtQzs7O0FBUS9CQyxJQVIrQjtBQVNwQyxpQkFBYyw0SkFBYSxDQVRTO0FBVTdCO0FBQ04sYUFBTyxJQUFQO0FBQ0EsTUFabUMsZ0JBUXJCRCxDQVJxQjs7O0FBZS9CRSxJQWYrQjtBQWdCcEMsaUJBQWMsNEpBQWEsQ0FoQlMsV0FlckJELENBZnFCOzs7QUFtQnJDLE9BQUlFLFNBQVMsRUFBYjs7QUFFQVIsVUFBT1UsS0FBUCxDQUFjUixNQUFPLElBQUlLLENBQUosRUFBUCxFQUFpQkMsTUFBakIsRUFBMEJJLElBQTFCLGNBQTZDTCxDQUEzRCxFQUE4RCxJQUE5RDs7QUFFQSxHQXZCRDs7QUF5QkEsRUExQkQ7O0FBNEJBLENBbEhEO0FBbUhBIiwiZmlsZSI6InRlc3Quc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QHRlc3QtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLXRlc3QtbGljZW5zZVxuXG5cdEB0ZXN0LWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwiZmVyZ2VcIixcblx0XHRcdFwicGF0aFwiOiBcImZlcmdlL3Rlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJ0ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJ0ZXN0XCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9mZXJnZS5naXRcIlxuXHRcdH1cblx0QGVuZC10ZXN0LWNvbmZpZ3VyYXRpb25cblxuXHRAdGVzdC1kb2N1bWVudGF0aW9uOlxuXG5cdEBlbmQtdGVzdC1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJhc3NlcnRcIjogXCJzaG91bGQvYXMtZnVuY3Rpb25cIixcblx0XHRcdFwiZmVyZ2VcIjogXCJmZXJnZVwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGFzc2VydCA9IHJlcXVpcmUoIFwic2hvdWxkL2FzLWZ1bmN0aW9uXCIgKTtcblxuXG5cbi8vOiBAY2xpZW50OlxuY29uc3QgZmVyZ2UgPSByZXF1aXJlKCBcIi4vZmVyZ2Uuc3VwcG9ydC5qc1wiICk7XG4vLzogQGVuZC1jbGllbnRcblxuXG5cblxuXG5cblxuLy86IEBjbGllbnQ6XG5kZXNjcmliZSggXCJmZXJnZVwiLCAoICkgPT4ge1xuXG5cdGRlc2NyaWJlKCBcImBmZXJnZSggbmV3IEMoICksIHsgfSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBjb250YWluIGdldEEgYW5kIGdldEIgbWV0aG9kc1wiLCAoICkgPT4ge1xuXHRcdFx0Y2xhc3MgQSB7XG5cdFx0XHRcdGNvbnN0cnVjdG9yKCApeyB9XG5cdFx0XHRcdGdldEEoICl7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Y2xhc3MgQiBleHRlbmRzIEEge1xuXHRcdFx0XHRjb25zdHJ1Y3RvciggKXsgc3VwZXIoICk7IH1cblx0XHRcdFx0Z2V0QiggKXtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRjbGFzcyBDIGV4dGVuZHMgQiB7XG5cdFx0XHRcdGNvbnN0cnVjdG9yKCApeyBzdXBlciggKTsgfVxuXHRcdFx0fVxuXG5cdFx0XHRsZXQgdGFyZ2V0ID0geyB9O1xuXHRcdFx0bGV0IHJlc3VsdCA9IGZlcmdlKCBuZXcgQyggKSwgdGFyZ2V0ICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggXCJnZXRBXCIgaW4gcmVzdWx0LCB0cnVlICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggXCJnZXRCXCIgaW4gcmVzdWx0LCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZmVyZ2UoIG5ldyBDKCApLCAnQicsIHsgfSApLmdldEIoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGluc3RhbmNlIG9mIENcIiwgKCApID0+IHtcblx0XHRcdGNsYXNzIEEge1xuXHRcdFx0XHRjb25zdHJ1Y3RvciggKXsgfVxuXHRcdFx0XHRnZXRBKCApe1xuXHRcdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGNsYXNzIEIgZXh0ZW5kcyBBIHtcblx0XHRcdFx0Y29uc3RydWN0b3IoICl7IHN1cGVyKCApOyB9XG5cdFx0XHRcdGdldEIoICl7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Y2xhc3MgQyBleHRlbmRzIEIge1xuXHRcdFx0XHRjb25zdHJ1Y3RvciggKXsgc3VwZXIoICk7IH1cblx0XHRcdH1cblxuXHRcdFx0bGV0IHRhcmdldCA9IHsgfTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBmZXJnZSggbmV3IEMoICksIFwiQlwiLCB0YXJnZXQgKS5nZXRCKCApIGluc3RhbmNlb2YgQywgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXG5cdFx0aXQoIFwic2hvdWxkIGNvbnRhaW4gJ2dldEInXCIsICggKSA9PiB7XG5cdFx0XHRjbGFzcyBBIHtcblx0XHRcdFx0Y29uc3RydWN0b3IoICl7IH1cblx0XHRcdFx0Z2V0QSggKXtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRjbGFzcyBCIGV4dGVuZHMgQSB7XG5cdFx0XHRcdGNvbnN0cnVjdG9yKCApeyBzdXBlciggKTsgfVxuXHRcdFx0XHRnZXRCKCApe1xuXHRcdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGNsYXNzIEMgZXh0ZW5kcyBCIHtcblx0XHRcdFx0Y29uc3RydWN0b3IoICl7IHN1cGVyKCApOyB9XG5cdFx0XHR9XG5cblx0XHRcdGxldCB0YXJnZXQgPSB7IH07XG5cdFx0XHRmZXJnZSggbmV3IEMoICksIFwiQlwiLCB0YXJnZXQgKS5nZXRCKCApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIFwiZ2V0QlwiIGluIHRhcmdldCwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZmVyZ2UoIG5ldyBDKCApLCB0YXJnZXQgKS5nZXRBKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBpbnN0YW5jZSBvZiBDXCIsICggKSA9PiB7XG5cdFx0XHRjbGFzcyBBIHtcblx0XHRcdFx0Y29uc3RydWN0b3IoICl7IH1cblx0XHRcdFx0Z2V0QSggKXtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRjbGFzcyBCIGV4dGVuZHMgQSB7XG5cdFx0XHRcdGNvbnN0cnVjdG9yKCApeyBzdXBlciggKTsgfVxuXHRcdFx0XHRnZXRCKCApe1xuXHRcdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGNsYXNzIEMgZXh0ZW5kcyBCIHtcblx0XHRcdFx0Y29uc3RydWN0b3IoICl7IHN1cGVyKCApOyB9XG5cdFx0XHR9XG5cblx0XHRcdGxldCB0YXJnZXQgPSB7IH07XG5cblx0XHRcdGFzc2VydC5lcXVhbCggZmVyZ2UoIG5ldyBDKCApLCB0YXJnZXQgKS5nZXRBKCApIGluc3RhbmNlb2YgQywgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXG5cdH0gKTtcblxufSApO1xuLy86IEBlbmQtY2xpZW50XG5cblxuXG4iXX0=
//# sourceMappingURL=test.support.js.map
