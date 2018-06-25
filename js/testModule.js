
// 加载文件内容
require("../html/testModule.html");

var tpl = require("raw-loader!../html/testModule.html");
var $ = require("jquery");

var tplHtml = $("body").html();

module.exports={
	tpl:tpl,
	jq:tplHtml
}