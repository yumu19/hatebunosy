$(function(){
	$(".span12\ hotentry").each(function(){
		//addhatebu(this);
	});
	$(".span6").each(function(){ 
		addhatebu(this);
	});
});

function addhatebu(obj){
	var entryurl = $("a:first",obj).attr("href").split("url=")[1];
	var queryurl = "http://api.b.st-hatena.com/entry.count?url="+entryurl;
	console.debug(decodeURIComponent(entryurl));
	// $.get(queryurl,function(data){
 //    	console.log(data);
	// });
	$.ajax ({
		url: queryurl,
		success: function(data) {
			var users = data;
			var hatebu="<li><a href=\""+decodeURIComponent(entryurl)+"\">"+users+" users</a></li>";
			$(".entry-domain-for-article",obj).prepend(hatebu);
		}
	});
}
