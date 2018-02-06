$(document).ready(function() {
	//define
	var menuEntries = [
		{title: 'GitHub', url: 'https://www.github.com/memtt'},
		{title: 'MALT', url: 'malt/index.html'},
		{title: 'NUMAPROF',url: 'numaprof/index.html'},
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
