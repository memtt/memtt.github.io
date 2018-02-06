$(document).ready(function() {
	//define
	var menuEntries = [
		{title: 'MALT', url: 'http://svalat.web.cern.ch/svalat/malt-website/v2/'},
		{title: 'NUMAPROF',url: 'http://svalat.web.cern.ch/svalat/numaprof-website'},
	];
	
	//get current address
	var pathname = $(location).attr('pathname').split('/').pop();
	
	//setup
	var ul = $(".navbar ul");
	
	//insert
	for (var i in menuEntries)
	{
		//create link
		var a = $("<a>")
			.text(menuEntries[i].title)
			.attr('href',menuEntries[i].url)
		
		//if current
		if (pathname == menuEntries[i].url)
			a.addClass('active');

		//append
		ul.append($("<li>").append(a));
	}
});
