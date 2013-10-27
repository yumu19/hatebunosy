$(function(){
	$("article.main").each(function(){
		addhatebu(this);
	});
	$("article.sub").each(function(){ 
		console.log("hogehoge");
		addhatebu(this);
	});
});

function addhatebu(obj){
	var entryurl_encode;
	if ($("a",obj).size() < 6) {
		entryurl_encode = $("a:eq(1)",obj).attr("href").split("url=")[1];
	}
	 else {
		entryurl_encode = $("a:eq(2)",obj).attr("href").split("url=")[1];
	}	
	console.log("entryURL = "+entryurl_encode);
	var entryurl_decode = decodeURIComponent(entryurl_encode);
	var queryurl = "http://api.b.st-hatena.com/entry.count?url="+entryurl_encode;
	var hatebuurl = "http://b.hatena.ne.jp/entry/"+entryurl_decode.replace("http://","");

	$.ajax ({
		url: queryurl,
		success: function(data) {
			var hatebu_sub;
			var hatebu_top;
			if (data >= 10) {			
				hatebu_sub="<div class=\"hatebu\" ><a href=\""+hatebuurl+"\" target=\"_blank\" class=\"hatebunosy10\" style=\"color:#FF0000; margin:0 16px\"><strong>"
				  			 +data+" users</strong></a></div>";
				hatebu_top="<div class=\"hatebu\" ><a href=\""+hatebuurl+"\" target=\"_blank\" class=\"hatebunosy10\" style=\"color:#FF0000\"><strong>"
				  			 +data+" users</strong></a></div>";

			}
			else if (data >= 1) {
				hatebu_sub="<div class=\"hatebu\" ><a href=\""+hatebuurl+"\" target=\"_blank\" class=\"hatebunosy\" style=\"color:#FF6666; margin:0 16px\">"
				  			+data+" users</a></div>";
				hatebu_top="<div class=\"hatebu\" ><a href=\""+hatebuurl+"\" target=\"_blank\" class=\"hatebunosy\" style=\"color:#FF6666\">"
				  			+data+" users</a></div>";
			}
			$("span.rss.effect",obj).after(hatebu_sub);
			$("div#main_art_text_wrap > div",obj).prepend(hatebu_top);
		}
	});
}
