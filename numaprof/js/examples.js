function setDefaultExample()
{
	setExample("omp");
}

function setExample(name)
{
	$.ajax({
		url : './examples/'+name+'.html',
		type : 'GET',
		dataType : 'html',
		success : function(html, statut){
			$(".doc-md").html(html);
		}
	});
}

$(document).ready(setDefaultExample);
 
