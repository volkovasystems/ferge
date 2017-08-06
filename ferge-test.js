
const assert = require( "assert" );
const ferge = require( "./ferge.js" );

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
assert.equal( ferge( new C( ), "B", target ).getB( ) instanceof C, true, "should be equal" );

assert.equal( "getB" in target, true, "should be equal" );

assert.equal( ferge( new C( ), target ).getA( ) instanceof C, true, "should be equal" );

let duration = Date.now( );

assert.equal( ferge( new C( ), target ), target, "should be equal" );

console.log( "ok", Date.now( ) - duration, "ms" );
