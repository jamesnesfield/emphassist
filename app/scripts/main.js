'use strict';

$('#search').wysiwyg();
$('#search').focus();

function search() {
	if ($('#search').cleanHtml().length>0) {
		console.log('search button clicked for text : ');
		console.log( $('#search').cleanHtml());


		var fullInputText = $( '#search').cleanHtml();
		var boldItems     = $( '#search' ).find( 'b' ).toArray();
		var italicItems   = $( '#search' ).find( 'i' ).toArray();
		var strikeItems   = $( '#search' ).find( 'strike' ).toArray();

		console.log('bold items : ');
		for (var i = boldItems.length - 1; i >= 0; i--) {
			console.log(i+' '+boldItems[i].innerText);
		};

		console.log('italic items : ');
		for (var i = italicItems.length - 1; i >= 0; i--) {
			console.log(i+' '+italicItems[i].innerText);
		};

		console.log('strikethrough items : ');
		for (var i = strikeItems.length - 1; i >= 0; i--) {
			console.log(i+' '+strikeItems[i].innerText);
		};

		var search = boldItems.join(' ')+boldItems.join(' ');

		console.log('search : '+search);
		//window.location = 'http://www.google.com';
	}
}


$('#search').keypress(function(event) {
	if (event.keyCode === 13) {
		event.preventDefault();
		search();
	}
});

$('#search-button').on('click', function(event) {
	event.preventDefault(); // To prevent following the link (optional)
	search();
});



