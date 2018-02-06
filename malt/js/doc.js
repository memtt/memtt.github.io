function setReadmePage()
{
	$.ajax({
		url : './doc/README.md',
		type : 'GET',
		dataType : 'text',
		success : function(text, statut){
			var mdConverter = new showdown.Converter();
			var html = mdConverter.makeHtml(text);
			$(".doc-md").html(html);
		}
	});
}

function setManpage(name)
{
	$.ajax({
		url : './doc/'+name+'.1.html',
		type : 'GET',
		dataType : 'html',
		success : function(html, statut){
			$(".doc-md").html(html);
		}
	});
}

$(document).ready(setReadmePage);
