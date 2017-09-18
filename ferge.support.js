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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZlcmdlLnN1cHBvcnQuanMiXSwibmFtZXMiOlsiY2hpb24iLCJyZXF1aXJlIiwiZGVwaGVyIiwiZmFsenkiLCJtZXRob24iLCJtZXRvbiIsInBvcnRlbCIsInByb3R5cGUiLCJxY29uIiwic2hmdCIsInRydWx5Iiwidm91bmQiLCJmZXJnZSIsInNvdXJjZSIsImJsdWVwcmludCIsInRhcmdldCIsIkVycm9yIiwiRlVOQ1RJT04iLCJPQkpFQ1QiLCJwYXJhbWV0ZXIiLCJhcmd1bWVudHMiLCJTVFJJTkciLCJjb250ZXh0IiwibWV0aG9kIiwiRnVuY3Rpb24iLCJPYmplY3QiLCJwcm90b3R5cGUiLCJpbmRleCIsImxlbmd0aCIsIm5hbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0VBLElBQU1BLFFBQVFDLFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUMsU0FBU0QsUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNRSxRQUFRRixRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1HLFNBQVNILFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTUksUUFBUUosUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNSyxTQUFTTCxRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1NLFVBQVVOLFFBQVMsU0FBVCxDQUFoQjtBQUNBLElBQU1PLE9BQU9QLFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTVEsT0FBT1IsUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNUyxRQUFRVCxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1VLFFBQVFWLFFBQVMsT0FBVCxDQUFkOztBQUVBLElBQU1XLFFBQVEsU0FBU0EsS0FBVCxDQUFnQkMsTUFBaEIsRUFBd0JDLFNBQXhCLEVBQW1DQyxNQUFuQyxFQUEyQztBQUN4RDs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQSxLQUFJWixNQUFPVSxNQUFQLENBQUosRUFBcUI7QUFDcEIsUUFBTSxJQUFJRyxLQUFKLENBQVcsZ0JBQVgsQ0FBTjtBQUNBOztBQUVELEtBQUksQ0FBQ1QsUUFBU00sTUFBVCxFQUFpQkksV0FBV0MsTUFBNUIsQ0FBTCxFQUEyQztBQUMxQ0wsV0FBU1AsT0FBUU8sTUFBUixDQUFUO0FBQ0E7O0FBRUQsS0FBSU0sWUFBWVYsS0FBTVcsU0FBTixDQUFoQjs7QUFFQU4sYUFBWVosT0FBUWlCLFNBQVIsRUFBbUJFLE1BQW5CLEVBQTJCckIsTUFBT2EsTUFBUCxDQUEzQixDQUFaOztBQUVBRSxVQUFTYixPQUFRaUIsU0FBUixFQUFtQixDQUFFRixRQUFGLEVBQVlDLE1BQVosQ0FBbkIsRUFBeUMsRUFBekMsQ0FBVDs7QUFFQSxLQUFJLE9BQU9KLFNBQVAsSUFBb0IsUUFBeEIsRUFBa0M7QUFDakNBLGNBQVlOLEtBQU1LLE1BQU4sRUFBY0MsU0FBZCxDQUFaO0FBQ0E7O0FBRUQsS0FBSVEsVUFBVVQsTUFBZDtBQUNBLEtBQUlVLFNBQVNuQixPQUFRUyxNQUFSLEVBQWdCLENBQUVXLFFBQUYsRUFBWUMsTUFBWixDQUFoQixDQUFiO0FBQ0EsS0FBSWYsTUFBT0ksU0FBUCxDQUFKLEVBQXdCO0FBQ3ZCRCxXQUFTQyxVQUFVWSxTQUFuQjtBQUNBSCxXQUFTbEIsTUFBT1MsVUFBVVksU0FBakIsQ0FBVDtBQUNBOztBQUVELEtBQUlDLFFBQVFKLE9BQU9LLE1BQW5CO0FBQ0EsUUFBT0QsT0FBUCxFQUFnQjtBQUNmLE1BQUlFLE9BQU9OLE9BQVFJLEtBQVIsQ0FBWDtBQUNBWixTQUFRYyxJQUFSLElBQWlCbEIsTUFBT0UsT0FBUWdCLElBQVIsQ0FBUCxFQUF1QlAsT0FBdkIsQ0FBakI7QUFDQTs7QUFFRCxRQUFPUCxNQUFQO0FBQ0EsQ0FqREQ7O0FBbURBZSxPQUFPQyxPQUFQLEdBQWlCbkIsS0FBakIiLCJmaWxlIjoiZmVyZ2Uuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwiZmVyZ2VcIixcblx0XHRcdFwicGF0aFwiOiBcImZlcmdlL2ZlcmdlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJmZXJnZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJmZXJnZVwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvZmVyZ2UuZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJmZXJnZS10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdE1lcmdlIGVudGl0eSBtZXRob2RzIHdpdGggYm91bmQgY29udGV4dC5cblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiY2hpb25cIjogXCJjaGlvblwiLFxuXHRcdFx0XCJkZXBoZXJcIjogXCJkZXBoZXJcIixcblx0XHRcdFwiZmFsenlcIjogXCJmYWx6eVwiLFxuXHRcdFx0XCJtZXRob25cIjogXCJtZXRob25cIixcblx0XHRcdFwibWV0b25cIjogXCJtZXRvblwiLFxuXHRcdFx0XCJwb3J0ZWxcIjogXCJwb3J0ZWxcIixcblx0XHRcdFwicHJvdHlwZVwiOiBcInByb3R5cGVcIixcblx0XHRcdFwicWNvblwiOiBcInFjb25cIixcblx0XHRcdFwic2hmdFwiOiBcInNoZnRcIixcblx0XHRcdFwidHJ1bHlcIjogXCJ0cnVseVwiLFxuXHRcdFx0XCJ2b3VuZFwiOiBcInZvdW5kXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgY2hpb24gPSByZXF1aXJlKCBcImNoaW9uXCIgKTtcbmNvbnN0IGRlcGhlciA9IHJlcXVpcmUoIFwiZGVwaGVyXCIgKTtcbmNvbnN0IGZhbHp5ID0gcmVxdWlyZSggXCJmYWx6eVwiICk7XG5jb25zdCBtZXRob24gPSByZXF1aXJlKCBcIm1ldGhvblwiICk7XG5jb25zdCBtZXRvbiA9IHJlcXVpcmUoIFwibWV0b25cIiApO1xuY29uc3QgcG9ydGVsID0gcmVxdWlyZSggXCJwb3J0ZWxcIiApO1xuY29uc3QgcHJvdHlwZSA9IHJlcXVpcmUoIFwicHJvdHlwZVwiICk7XG5jb25zdCBxY29uID0gcmVxdWlyZSggXCJxY29uXCIgKTtcbmNvbnN0IHNoZnQgPSByZXF1aXJlKCBcInNoZnRcIiApO1xuY29uc3QgdHJ1bHkgPSByZXF1aXJlKCBcInRydWx5XCIgKTtcbmNvbnN0IHZvdW5kID0gcmVxdWlyZSggXCJ2b3VuZFwiICk7XG5cbmNvbnN0IGZlcmdlID0gZnVuY3Rpb24gZmVyZ2UoIHNvdXJjZSwgYmx1ZXByaW50LCB0YXJnZXQgKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0XCJzb3VyY2U6cmVxdWlyZWRcIjogW1xuXHRcdFx0XHRcdFwiZnVuY3Rpb25cIixcblx0XHRcdFx0XHRcIm9iamVjdFwiXG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwiYmx1ZXByaW50XCI6IFwic3RyaW5nXCIsXG5cdFx0XHRcdFwidGFyZ2V0XCI6IFtcblx0XHRcdFx0XHRcImZ1bmN0aW9uXCIsXG5cdFx0XHRcdFx0XCJvYmplY3RcIlxuXHRcdFx0XHRdXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHRpZiggZmFsenkoIHNvdXJjZSApICl7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgc291cmNlXCIgKTtcblx0fVxuXG5cdGlmKCAhcHJvdHlwZSggc291cmNlLCBGVU5DVElPTiArIE9CSkVDVCApICl7XG5cdFx0c291cmNlID0gcG9ydGVsKCBzb3VyY2UgKTtcblx0fVxuXG5cdGxldCBwYXJhbWV0ZXIgPSBzaGZ0KCBhcmd1bWVudHMgKTtcblxuXHRibHVlcHJpbnQgPSBkZXBoZXIoIHBhcmFtZXRlciwgU1RSSU5HLCBjaGlvbiggc291cmNlICkgKTtcblxuXHR0YXJnZXQgPSBkZXBoZXIoIHBhcmFtZXRlciwgWyBGVU5DVElPTiwgT0JKRUNUIF0sIHsgfSApO1xuXG5cdGlmKCB0eXBlb2YgYmx1ZXByaW50ID09IFwic3RyaW5nXCIgKXtcblx0XHRibHVlcHJpbnQgPSBxY29uKCBzb3VyY2UsIGJsdWVwcmludCApO1xuXHR9XG5cblx0bGV0IGNvbnRleHQgPSBzb3VyY2U7XG5cdGxldCBtZXRob2QgPSBtZXRob24oIHNvdXJjZSwgWyBGdW5jdGlvbiwgT2JqZWN0IF0gKTtcblx0aWYoIHRydWx5KCBibHVlcHJpbnQgKSApe1xuXHRcdHNvdXJjZSA9IGJsdWVwcmludC5wcm90b3R5cGU7XG5cdFx0bWV0aG9kID0gbWV0b24oIGJsdWVwcmludC5wcm90b3R5cGUgKTtcblx0fVxuXG5cdGxldCBpbmRleCA9IG1ldGhvZC5sZW5ndGg7XG5cdHdoaWxlKCBpbmRleC0tICl7XG5cdFx0bGV0IG5hbWUgPSBtZXRob2RbIGluZGV4IF07XG5cdFx0dGFyZ2V0WyBuYW1lIF0gPSB2b3VuZCggc291cmNlWyBuYW1lIF0sIGNvbnRleHQgKTtcblx0fVxuXG5cdHJldHVybiB0YXJnZXQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZlcmdlO1xuIl19
//# sourceMappingURL=ferge.support.js.map
