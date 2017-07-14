"use strict";

/*;
              	@module-license:
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
              	@end-module-license
              
              	@module-configuration:
              		{
              			"package": "ferge",
              			"path": "ferge/ferge.js",
              			"file": "ferge.js",
              			"module": "ferge",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/ferge.git",
              			"test": "ferge-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Merge entity methods with bound context.
              	@end-module-documentation
              
              	@include:
              		{
              			"chion": "chion",
              			"depher": "depher",
              			"falzy": "falzy",
              			"methon": "methon",
              			"meton": "meton",
              			"portel": "portel",
              			"protype": "protype",
              			"qcon": "qcon",
              			"shft": "shft",
              			"truly": "truly",
              			"vound": "vound"
              		}
              	@end-include
              */

var chion = require("chion");
var depher = require("depher");
var falzy = require("falzy");
var methon = require("methon");
var meton = require("meton");
var portel = require("portel");
var protype = require("protype");
var qcon = require("qcon");
var shft = require("shft");
var truly = require("truly");
var vound = require("vound");

var ferge = function ferge(source, blueprint, target) {
	/*;
                                                       	@meta-configuration:
                                                       		{
                                                       			"source:required": [
                                                       				"function",
                                                       				"object"
                                                       			],
                                                       			"blueprint": "string",
                                                       			"target": [
                                                       				"function",
                                                       				"object"
                                                       			]
                                                       		}
                                                       	@end-meta-configuration
                                                       */

	if (falzy(source)) {
		throw new Error("invalid source");
	}

	if (!protype(source, FUNCTION + OBJECT)) {
		source = portel(source);
	}

	var parameter = shft(arguments);

	blueprint = depher(parameter, STRING, chion(source));

	target = depher(parameter, [FUNCTION, OBJECT], {});

	if (typeof blueprint == "string") {
		blueprint = qcon(source, blueprint);
	}

	var context = source;
	var method = methon(source, [Function, Object]);
	if (truly(blueprint)) {
		source = blueprint.prototype;
		method = meton(blueprint.prototype);
	}

	method.forEach(function (name) {
		target[name] = vound(source[name], context);
	});

	return target;
};

module.exports = ferge;

//# sourceMappingURL=ferge.support.js.map