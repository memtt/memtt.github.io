$(document).ready(function() {
	//define
	var menuEntries = [
		{title: 'Home', url: 'index.html'},
		{title: 'Screens',url: 'screens.html'},
		{title: 'Features', url: 'features.html'},
		{title: 'Doc',url: 'doc.html'},
		{title: 'Notes', url: 'notes.html'},
		{title: 'Contribute', url: 'contrib.html'},
		{title: 'MemTT', url: '../index.html'},
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
