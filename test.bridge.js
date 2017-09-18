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
              */

var assert = require("should/as-function");





//: @bridge:
var path = require("path");
//: @end-bridge








//: @bridge:
describe("ferge", function () {

	var bridgeURL = "file://" + path.resolve(__dirname, "bridge.html");

	describe("`ferge( new C( ), { } )`", function () {
		it("should contain getA and getB methods", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					class A {
   						constructor( ){ }
   						getA( ){
   							return this;
   						}
   					}
   
   					class B extends A {
   						constructor( ){ super( ); }
   						getB( ){
   							return this;
   						}
   					}
   
   					class C extends B {
   						constructor( ){ super( ); }
   					}
   
   					let target = { };
   					let result = ferge( new C( ), target );
   
   					return "getA" in result == true &&
   						"getB" in result == true;
   
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, true);

		});
	});

	describe("`ferge( new C( ), 'B', { } ).getB( )`", function () {
		it("should be instance of C", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					class A {
   						constructor( ){ }
   						getA( ){
   							return this;
   						}
   					}
   
   					class B extends A {
   						constructor( ){ super( ); }
   						getB( ){
   							return this;
   						}
   					}
   
   					class C extends B {
   						constructor( ){ super( ); }
   					}
   
   					let target = { };
   
   					return ferge( new C( ), "B", target ).getB( ) instanceof C;
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, true);

		});

		it("should contain 'getB'", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					class A {
   						constructor( ){ }
   						getA( ){
   							return this;
   						}
   					}
   
   					class B extends A {
   						constructor( ){ super( ); }
   						getB( ){
   							return this;
   						}
   					}
   
   					class C extends B {
   						constructor( ){ super( ); }
   					}
   
   					let target = { };
   					ferge( new C( ), "B", target ).getB( );
   
   					return "getB" in target;
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, true);

		});

	});

	describe("`ferge( new C( ), target ).getA( )`", function () {
		it("should be instance of C", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					class A {
   						constructor( ){ }
   						getA( ){
   							return this;
   						}
   					}
   
   					class B extends A {
   						constructor( ){ super( ); }
   						getB( ){
   							return this;
   						}
   					}
   
   					class C extends B {
   						constructor( ){ super( ); }
   					}
   
   					let target = { };
   
   					return ferge( new C( ), target ).getA( ) instanceof C;
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, true);

		});

	});

});
//: @end-bridge
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIiwiZGVzY3JpYmUiLCJicmlkZ2VVUkwiLCJyZXNvbHZlIiwiX19kaXJuYW1lIiwiaXQiLCJlcXVhbCIsInJlc3VsdCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1EQSxJQUFNQSxTQUFTQyxRQUFTLG9CQUFULENBQWY7Ozs7OztBQU1BO0FBQ0EsSUFBTUMsT0FBT0QsUUFBUyxNQUFULENBQWI7QUFDQTs7Ozs7Ozs7O0FBU0E7QUFDQUUsU0FBVSxPQUFWLEVBQW1CLFlBQU87O0FBRXpCLEtBQUlDLHdCQUF1QkYsS0FBS0csT0FBTCxDQUFjQyxTQUFkLEVBQXlCLGFBQXpCLENBQTNCOztBQUVBSCxVQUFVLDBCQUFWLEVBQXNDLFlBQU87QUFDNUNJLEtBQUksc0NBQUosRUFBNEMsWUFBTztBQUNsRDtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdDQTs7QUFFR1AsVUFBT1EsS0FBUCxDQUFjQyxNQUFkLEVBQXNCLElBQXRCOztBQUVBLEdBdENEO0FBdUNBLEVBeENEOztBQTBDQU4sVUFBVSx1Q0FBVixFQUFtRCxZQUFPO0FBQ3pESSxLQUFJLHlCQUFKLEVBQStCLFlBQU87QUFDckM7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2QkE7O0FBRUdQLFVBQU9RLEtBQVAsQ0FBY0MsTUFBZCxFQUFzQixJQUF0Qjs7QUFFQSxHQW5DRDs7QUFxQ0FGLEtBQUksdUJBQUosRUFBNkIsWUFBTztBQUNuQztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4QkE7O0FBRUdQLFVBQU9RLEtBQVAsQ0FBY0MsTUFBZCxFQUFzQixJQUF0Qjs7QUFFQSxHQXBDRDs7QUFzQ0EsRUE1RUQ7O0FBOEVBTixVQUFVLHFDQUFWLEVBQWlELFlBQU87QUFDdkRJLEtBQUkseUJBQUosRUFBK0IsWUFBTztBQUNyQztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZCQTs7QUFFR1AsVUFBT1EsS0FBUCxDQUFjQyxNQUFkLEVBQXNCLElBQXRCOztBQUVBLEdBbkNEOztBQXFDQSxFQXRDRDs7QUF3Q0EsQ0FwS0Q7QUFxS0EiLCJmaWxlIjoidGVzdC5icmlkZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEB0ZXN0LWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC10ZXN0LWxpY2Vuc2VcblxuXHRAdGVzdC1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImZlcmdlXCIsXG5cdFx0XHRcInBhdGhcIjogXCJmZXJnZS90ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwidGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwidGVzdFwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvZmVyZ2UuZ2l0XCJcblx0XHR9XG5cdEBlbmQtdGVzdC1jb25maWd1cmF0aW9uXG5cblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcblxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkL2FzLWZ1bmN0aW9uXCIsXG5cdFx0XHRcImZlcmdlXCI6IFwiZmVyZ2VcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcInNob3VsZC9hcy1mdW5jdGlvblwiICk7XG5cblxuXG5cblxuLy86IEBicmlkZ2U6XG5jb25zdCBwYXRoID0gcmVxdWlyZSggXCJwYXRoXCIgKTtcbi8vOiBAZW5kLWJyaWRnZVxuXG5cblxuXG5cblxuXG5cbi8vOiBAYnJpZGdlOlxuZGVzY3JpYmUoIFwiZmVyZ2VcIiwgKCApID0+IHtcblxuXHRsZXQgYnJpZGdlVVJMID0gYGZpbGU6Ly8keyBwYXRoLnJlc29sdmUoIF9fZGlybmFtZSwgXCJicmlkZ2UuaHRtbFwiICkgfWA7XG5cblx0ZGVzY3JpYmUoIFwiYGZlcmdlKCBuZXcgQyggKSwgeyB9IClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGNvbnRhaW4gZ2V0QSBhbmQgZ2V0QiBtZXRob2RzXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0Y2xhc3MgQSB7XG5cdFx0XHRcdFx0XHRjb25zdHJ1Y3RvciggKXsgfVxuXHRcdFx0XHRcdFx0Z2V0QSggKXtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Y2xhc3MgQiBleHRlbmRzIEEge1xuXHRcdFx0XHRcdFx0Y29uc3RydWN0b3IoICl7IHN1cGVyKCApOyB9XG5cdFx0XHRcdFx0XHRnZXRCKCApe1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRjbGFzcyBDIGV4dGVuZHMgQiB7XG5cdFx0XHRcdFx0XHRjb25zdHJ1Y3RvciggKXsgc3VwZXIoICk7IH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRsZXQgdGFyZ2V0ID0geyB9O1xuXHRcdFx0XHRcdGxldCByZXN1bHQgPSBmZXJnZSggbmV3IEMoICksIHRhcmdldCApO1xuXG5cdFx0XHRcdFx0cmV0dXJuIFwiZ2V0QVwiIGluIHJlc3VsdCA9PSB0cnVlICYmXG5cdFx0XHRcdFx0XHRcImdldEJcIiBpbiByZXN1bHQgPT0gdHJ1ZTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZmVyZ2UoIG5ldyBDKCApLCAnQicsIHsgfSApLmdldEIoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGluc3RhbmNlIG9mIENcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRjbGFzcyBBIHtcblx0XHRcdFx0XHRcdGNvbnN0cnVjdG9yKCApeyB9XG5cdFx0XHRcdFx0XHRnZXRBKCApe1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRjbGFzcyBCIGV4dGVuZHMgQSB7XG5cdFx0XHRcdFx0XHRjb25zdHJ1Y3RvciggKXsgc3VwZXIoICk7IH1cblx0XHRcdFx0XHRcdGdldEIoICl7XG5cdFx0XHRcdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGNsYXNzIEMgZXh0ZW5kcyBCIHtcblx0XHRcdFx0XHRcdGNvbnN0cnVjdG9yKCApeyBzdXBlciggKTsgfVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGxldCB0YXJnZXQgPSB7IH07XG5cblx0XHRcdFx0XHRyZXR1cm4gZmVyZ2UoIG5ldyBDKCApLCBcIkJcIiwgdGFyZ2V0ICkuZ2V0QiggKSBpbnN0YW5jZW9mIEM7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblxuXHRcdH0gKTtcblxuXHRcdGl0KCBcInNob3VsZCBjb250YWluICdnZXRCJ1wiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGNsYXNzIEEge1xuXHRcdFx0XHRcdFx0Y29uc3RydWN0b3IoICl7IH1cblx0XHRcdFx0XHRcdGdldEEoICl7XG5cdFx0XHRcdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGNsYXNzIEIgZXh0ZW5kcyBBIHtcblx0XHRcdFx0XHRcdGNvbnN0cnVjdG9yKCApeyBzdXBlciggKTsgfVxuXHRcdFx0XHRcdFx0Z2V0QiggKXtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Y2xhc3MgQyBleHRlbmRzIEIge1xuXHRcdFx0XHRcdFx0Y29uc3RydWN0b3IoICl7IHN1cGVyKCApOyB9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0bGV0IHRhcmdldCA9IHsgfTtcblx0XHRcdFx0XHRmZXJnZSggbmV3IEMoICksIFwiQlwiLCB0YXJnZXQgKS5nZXRCKCApO1xuXG5cdFx0XHRcdFx0cmV0dXJuIFwiZ2V0QlwiIGluIHRhcmdldDtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZmVyZ2UoIG5ldyBDKCApLCB0YXJnZXQgKS5nZXRBKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBpbnN0YW5jZSBvZiBDXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0Y2xhc3MgQSB7XG5cdFx0XHRcdFx0XHRjb25zdHJ1Y3RvciggKXsgfVxuXHRcdFx0XHRcdFx0Z2V0QSggKXtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Y2xhc3MgQiBleHRlbmRzIEEge1xuXHRcdFx0XHRcdFx0Y29uc3RydWN0b3IoICl7IHN1cGVyKCApOyB9XG5cdFx0XHRcdFx0XHRnZXRCKCApe1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRjbGFzcyBDIGV4dGVuZHMgQiB7XG5cdFx0XHRcdFx0XHRjb25zdHJ1Y3RvciggKXsgc3VwZXIoICk7IH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRsZXQgdGFyZ2V0ID0geyB9O1xuXG5cdFx0XHRcdFx0cmV0dXJuIGZlcmdlKCBuZXcgQyggKSwgdGFyZ2V0ICkuZ2V0QSggKSBpbnN0YW5jZW9mIEM7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblxuXHRcdH0gKTtcblxuXHR9ICk7XG5cbn0gKTtcbi8vOiBAZW5kLWJyaWRnZVxuIl19
//# sourceMappingURL=test.bridge.js.map
