$(function(){
	$("[class^=span12]").each(function(){
		addhatebu(this);
	});
	$(".span6").each(function(){ 
		addhatebu(this);
	});
});

function addhatebu(obj){
	var entryurl_encode = $("a:first",obj).attr("href").split("url=")[1];
	var entryurl_decode = decodeURIComponent(entryurl_encode)
	var queryurl = "http://api.b.st-hatena.com/entry.count?url="+entryurl_encode;
	var hatebuurl = "http://b.hatena.ne.jp/entry/"+entryurl_decode.replace("http://","");

	$.ajax ({
		url: queryurl,
		success: function(data) {
			if (data >= 10) {
				var hatebu="<li><a href=\""+hatebuurl+"\" target=\"_blank\" class=\"hatebunosy10\"><strong>"
						+data+" users</strong></a></li>";
				$(".entry-domain-for-article",obj).prepend(hatebu);
			}
			else if (data >= 1) {
				var hatebu="<li><a href=\""+hatebuurl+"\" target=\"_blank\" class=\"hatebunosy\"><strong>"
						+data+" users</a></strong></li>";
				$(".entry-domain-for-article",obj).prepend(hatebu);

			}
		}
	});
}
