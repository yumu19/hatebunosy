$(function(){
	$(".span12").each(function(){
		var users="100"
		var hatebu="<li>"+users+" users</li>"
		$(".entry-domain-for-article",this).prepend(hatebu);
	});
	$(".span6").each(addhatebu(this));
});

function addhatebu(obj){
	var users="100"
	var hatebu="<li>"+users+" users</li>"
	$(".entry-domain-for-article",obj).prepend(hatebu);
}
