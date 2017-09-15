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

	var index = method.length;
	while (index--) {
		var name = method[index];
		target[name] = vound(source[name], context);
	}

	return target;
};

module.exports = ferge;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZlcmdlLnN1cHBvcnQuanMiXSwibmFtZXMiOlsiY2hpb24iLCJyZXF1aXJlIiwiZGVwaGVyIiwiZmFsenkiLCJtZXRob24iLCJtZXRvbiIsInBvcnRlbCIsInByb3R5cGUiLCJxY29uIiwic2hmdCIsInRydWx5Iiwidm91bmQiLCJmZXJnZSIsInNvdXJjZSIsImJsdWVwcmludCIsInRhcmdldCIsIkVycm9yIiwiRlVOQ1RJT04iLCJPQkpFQ1QiLCJwYXJhbWV0ZXIiLCJhcmd1bWVudHMiLCJTVFJJTkciLCJjb250ZXh0IiwibWV0aG9kIiwiRnVuY3Rpb24iLCJPYmplY3QiLCJwcm90b3R5cGUiLCJpbmRleCIsImxlbmd0aCIsIm5hbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0VBLElBQU1BLFFBQVFDLFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUMsU0FBU0QsUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNRSxRQUFRRixRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1HLFNBQVNILFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTUksUUFBUUosUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNSyxTQUFTTCxRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1NLFVBQVVOLFFBQVMsU0FBVCxDQUFoQjtBQUNBLElBQU1PLE9BQU9QLFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTVEsT0FBT1IsUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNUyxRQUFRVCxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1VLFFBQVFWLFFBQVMsT0FBVCxDQUFkOztBQUVBLElBQU1XLFFBQVEsU0FBU0EsS0FBVCxDQUFnQkMsTUFBaEIsRUFBd0JDLFNBQXhCLEVBQW1DQyxNQUFuQyxFQUEyQztBQUN4RDs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQSxLQUFJWixNQUFPVSxNQUFQLENBQUosRUFBcUI7QUFDcEIsUUFBTSxJQUFJRyxLQUFKLENBQVcsZ0JBQVgsQ0FBTjtBQUNBOztBQUVELEtBQUksQ0FBQ1QsUUFBU00sTUFBVCxFQUFpQkksV0FBV0MsTUFBNUIsQ0FBTCxFQUEyQztBQUMxQ0wsV0FBU1AsT0FBUU8sTUFBUixDQUFUO0FBQ0E7O0FBRUQsS0FBSU0sWUFBWVYsS0FBTVcsU0FBTixDQUFoQjs7QUFFQU4sYUFBWVosT0FBUWlCLFNBQVIsRUFBbUJFLE1BQW5CLEVBQTJCckIsTUFBT2EsTUFBUCxDQUEzQixDQUFaOztBQUVBRSxVQUFTYixPQUFRaUIsU0FBUixFQUFtQixDQUFFRixRQUFGLEVBQVlDLE1BQVosQ0FBbkIsRUFBeUMsRUFBekMsQ0FBVDs7QUFFQSxLQUFJLE9BQU9KLFNBQVAsSUFBb0IsUUFBeEIsRUFBa0M7QUFDakNBLGNBQVlOLEtBQU1LLE1BQU4sRUFBY0MsU0FBZCxDQUFaO0FBQ0E7O0FBRUQsS0FBSVEsVUFBVVQsTUFBZDtBQUNBLEtBQUlVLFNBQVNuQixPQUFRUyxNQUFSLEVBQWdCLENBQUVXLFFBQUYsRUFBWUMsTUFBWixDQUFoQixDQUFiO0FBQ0EsS0FBSWYsTUFBT0ksU0FBUCxDQUFKLEVBQXdCO0FBQ3ZCRCxXQUFTQyxVQUFVWSxTQUFuQjtBQUNBSCxXQUFTbEIsTUFBT1MsVUFBVVksU0FBakIsQ0FBVDtBQUNBOztBQUVELEtBQUlDLFFBQVFKLE9BQU9LLE1BQW5CO0FBQ0EsUUFBT0QsT0FBUCxFQUFnQjtBQUNmLE1BQUlFLE9BQU9OLE9BQVFJLEtBQVIsQ0FBWDtBQUNBWixTQUFRYyxJQUFSLElBQWlCbEIsTUFBT0UsT0FBUWdCLElBQVIsQ0FBUCxFQUF1QlAsT0FBdkIsQ0FBakI7QUFDQTs7QUFFRCxRQUFPUCxNQUFQO0FBQ0EsQ0FqREQ7O0FBbURBZSxPQUFPQyxPQUFQLEdBQWlCbkIsS0FBakIiLCJmaWxlIjoiZmVyZ2Uuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyo7XHJcblx0QG1vZHVsZS1saWNlbnNlOlxyXG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXHJcblx0XHRAbWl0LWxpY2Vuc2VcclxuXHJcblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXHJcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cclxuXHJcblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXHJcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcblxyXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXHJcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcclxuXHRcdFNPRlRXQVJFLlxyXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcclxuXHJcblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxyXG5cdFx0e1xyXG5cdFx0XHRcInBhY2thZ2VcIjogXCJmZXJnZVwiLFxyXG5cdFx0XHRcInBhdGhcIjogXCJmZXJnZS9mZXJnZS5qc1wiLFxyXG5cdFx0XHRcImZpbGVcIjogXCJmZXJnZS5qc1wiLFxyXG5cdFx0XHRcIm1vZHVsZVwiOiBcImZlcmdlXCIsXHJcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXHJcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXHJcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcclxuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcclxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcclxuXHRcdFx0XSxcclxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2ZlcmdlLmdpdFwiLFxyXG5cdFx0XHRcInRlc3RcIjogXCJmZXJnZS10ZXN0LmpzXCIsXHJcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcclxuXHRcdH1cclxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXHJcblxyXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcclxuXHRcdE1lcmdlIGVudGl0eSBtZXRob2RzIHdpdGggYm91bmQgY29udGV4dC5cclxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXHJcblxyXG5cdEBpbmNsdWRlOlxyXG5cdFx0e1xyXG5cdFx0XHRcImNoaW9uXCI6IFwiY2hpb25cIixcclxuXHRcdFx0XCJkZXBoZXJcIjogXCJkZXBoZXJcIixcclxuXHRcdFx0XCJmYWx6eVwiOiBcImZhbHp5XCIsXHJcblx0XHRcdFwibWV0aG9uXCI6IFwibWV0aG9uXCIsXHJcblx0XHRcdFwibWV0b25cIjogXCJtZXRvblwiLFxyXG5cdFx0XHRcInBvcnRlbFwiOiBcInBvcnRlbFwiLFxyXG5cdFx0XHRcInByb3R5cGVcIjogXCJwcm90eXBlXCIsXHJcblx0XHRcdFwicWNvblwiOiBcInFjb25cIixcclxuXHRcdFx0XCJzaGZ0XCI6IFwic2hmdFwiLFxyXG5cdFx0XHRcInRydWx5XCI6IFwidHJ1bHlcIixcclxuXHRcdFx0XCJ2b3VuZFwiOiBcInZvdW5kXCJcclxuXHRcdH1cclxuXHRAZW5kLWluY2x1ZGVcclxuKi9cclxuXHJcbmNvbnN0IGNoaW9uID0gcmVxdWlyZSggXCJjaGlvblwiICk7XHJcbmNvbnN0IGRlcGhlciA9IHJlcXVpcmUoIFwiZGVwaGVyXCIgKTtcclxuY29uc3QgZmFsenkgPSByZXF1aXJlKCBcImZhbHp5XCIgKTtcclxuY29uc3QgbWV0aG9uID0gcmVxdWlyZSggXCJtZXRob25cIiApO1xyXG5jb25zdCBtZXRvbiA9IHJlcXVpcmUoIFwibWV0b25cIiApO1xyXG5jb25zdCBwb3J0ZWwgPSByZXF1aXJlKCBcInBvcnRlbFwiICk7XHJcbmNvbnN0IHByb3R5cGUgPSByZXF1aXJlKCBcInByb3R5cGVcIiApO1xyXG5jb25zdCBxY29uID0gcmVxdWlyZSggXCJxY29uXCIgKTtcclxuY29uc3Qgc2hmdCA9IHJlcXVpcmUoIFwic2hmdFwiICk7XHJcbmNvbnN0IHRydWx5ID0gcmVxdWlyZSggXCJ0cnVseVwiICk7XHJcbmNvbnN0IHZvdW5kID0gcmVxdWlyZSggXCJ2b3VuZFwiICk7XHJcblxyXG5jb25zdCBmZXJnZSA9IGZ1bmN0aW9uIGZlcmdlKCBzb3VyY2UsIGJsdWVwcmludCwgdGFyZ2V0ICl7XHJcblx0Lyo7XHJcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJzb3VyY2U6cmVxdWlyZWRcIjogW1xyXG5cdFx0XHRcdFx0XCJmdW5jdGlvblwiLFxyXG5cdFx0XHRcdFx0XCJvYmplY3RcIlxyXG5cdFx0XHRcdF0sXHJcblx0XHRcdFx0XCJibHVlcHJpbnRcIjogXCJzdHJpbmdcIixcclxuXHRcdFx0XHRcInRhcmdldFwiOiBbXHJcblx0XHRcdFx0XHRcImZ1bmN0aW9uXCIsXHJcblx0XHRcdFx0XHRcIm9iamVjdFwiXHJcblx0XHRcdFx0XVxyXG5cdFx0XHR9XHJcblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxyXG5cdCovXHJcblxyXG5cdGlmKCBmYWx6eSggc291cmNlICkgKXtcclxuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIHNvdXJjZVwiICk7XHJcblx0fVxyXG5cclxuXHRpZiggIXByb3R5cGUoIHNvdXJjZSwgRlVOQ1RJT04gKyBPQkpFQ1QgKSApe1xyXG5cdFx0c291cmNlID0gcG9ydGVsKCBzb3VyY2UgKTtcclxuXHR9XHJcblxyXG5cdGxldCBwYXJhbWV0ZXIgPSBzaGZ0KCBhcmd1bWVudHMgKTtcclxuXHJcblx0Ymx1ZXByaW50ID0gZGVwaGVyKCBwYXJhbWV0ZXIsIFNUUklORywgY2hpb24oIHNvdXJjZSApICk7XHJcblxyXG5cdHRhcmdldCA9IGRlcGhlciggcGFyYW1ldGVyLCBbIEZVTkNUSU9OLCBPQkpFQ1QgXSwgeyB9ICk7XHJcblxyXG5cdGlmKCB0eXBlb2YgYmx1ZXByaW50ID09IFwic3RyaW5nXCIgKXtcclxuXHRcdGJsdWVwcmludCA9IHFjb24oIHNvdXJjZSwgYmx1ZXByaW50ICk7XHJcblx0fVxyXG5cclxuXHRsZXQgY29udGV4dCA9IHNvdXJjZTtcclxuXHRsZXQgbWV0aG9kID0gbWV0aG9uKCBzb3VyY2UsIFsgRnVuY3Rpb24sIE9iamVjdCBdICk7XHJcblx0aWYoIHRydWx5KCBibHVlcHJpbnQgKSApe1xyXG5cdFx0c291cmNlID0gYmx1ZXByaW50LnByb3RvdHlwZTtcclxuXHRcdG1ldGhvZCA9IG1ldG9uKCBibHVlcHJpbnQucHJvdG90eXBlICk7XHJcblx0fVxyXG5cclxuXHRsZXQgaW5kZXggPSBtZXRob2QubGVuZ3RoO1xyXG5cdHdoaWxlKCBpbmRleC0tICl7XHJcblx0XHRsZXQgbmFtZSA9IG1ldGhvZFsgaW5kZXggXTtcclxuXHRcdHRhcmdldFsgbmFtZSBdID0gdm91bmQoIHNvdXJjZVsgbmFtZSBdLCBjb250ZXh0ICk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gdGFyZ2V0O1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmZXJnZTtcclxuIl19
//# sourceMappingURL=ferge.support.js.map
