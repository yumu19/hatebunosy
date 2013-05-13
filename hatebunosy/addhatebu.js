$(function(){
	$("article.main").each(function(){
		addhatebu(this);
	});
	$("article.sub").each(function(){ 
		addhatebu(this);
	});
});

function addhatebu(obj){
	var entryurl_encode = $("a:eq(1)",obj).attr("href").split("url=")[1];
	var entryurl_decode = decodeURIComponent(entryurl_encode);
	var queryurl = "http://api.b.st-hatena.com/entry.count?url="+entryurl_encode;
	var hatebuurl = "http://b.hatena.ne.jp/entry/"+entryurl_decode.replace("http://","");

	$.ajax ({
		url: queryurl,
		success: function(data) {
			if (data >= 10) {			
				// var hatebu="<div class=\"hatebu\" data-layout=\"button_count\" data-send=\"false\" data-show-faces=\"false\" data-width=\"100\">
				// 			<a href=\""+hatebuurl+"\" target=\"_blank\" class=\"hatebunosy10\"><strong>"
				// 			+data+" users</strong></a></div>";
				var hatebu = "<p>aaa</p>";
				$(".sub",obj).append(hatebu);
			}
			else if (data >= 1) {
				var hatebu="<li><a href=\""+hatebuurl+"\" target=\"_blank\" class=\"hatebunosy\"><strong>"
						+data+" users</a></strong></li>";
				$(".entry-domain-for-article",obj).prepend(hatebu);

			}
		}
	});
}
