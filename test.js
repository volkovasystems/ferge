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

const assert = require( "should/as-function" );

//: @server:
const ferge = require( "./ferge.js" );
//: @end-server






//: @server:
describe( "ferge", ( ) => {

	describe( "`ferge( new C( ), { } )`", ( ) => {
		it( "should contain getA and getB methods", ( ) => {
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

			assert.equal( "getA" in result, true );

			assert.equal( "getB" in result, true );

		} );
	} );

	describe( "`ferge( new C( ), 'B', { } ).getB( )`", ( ) => {
		it( "should be instance of C", ( ) => {
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

			assert.equal( ferge( new C( ), "B", target ).getB( ) instanceof C, true );

		} );

		it( "should contain 'getB'", ( ) => {
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

			assert.equal( "getB" in target, true );

		} );

	} );

	describe( "`ferge( new C( ), target ).getA( )`", ( ) => {
		it( "should be instance of C", ( ) => {
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

			assert.equal( ferge( new C( ), target ).getA( ) instanceof C, true );

		} );

	} );

} );
//: @end-server






