'use strict';

$('#search').wysiwyg({
  hotKeys: {
    'ctrl+b meta+b': 'bold',
    'ctrl+i meta+i': 'italic',
    'ctrl+s meta+s': 'strikethrough',
    'ctrl+u meta+u': 'underline',
    'ctrl+z meta+z': 'undo',
    'ctrl+y meta+y meta+shift+z': 'redo'
  }
});
$('#search').focus();



function search() {
	if ($('#search').cleanHtml().length>0) {
		console.log('search button clicked for text : ');
		console.log( $('#search').cleanHtml());


		var fullInputText = $( '#search').text();
		var plainText = $("#search")
        .clone()    //clone the element
        .children() //select all the children
        .remove()   //remove all the children
        .end()  //again go back to selected element
        .text();    //get the text of element
		var boldItems     = $( '#search' ).find( 'b' ).toArray();
		var italicItems   = $( '#search' ).find( 'i' ).toArray();
		var strikeItems   = $( '#search' ).find( 'strike' ).toArray();

		var search = '';

		console.log('strikethrough items : ');
		for (var i = strikeItems.length - 1; i >= 0; i--) {
			console.log(i+' '+strikeItems[i].innerText.toString());
			search += '+-'+strikeItems[i].innerText.toString();

		};

		console.log('bold items : ');
		for (var i = boldItems.length - 1; i >= 0; i--) {
			console.log(i+' '+boldItems[i].innerText.toString());
			search += '+'+boldItems[i].innerText.toString()+' '+boldItems[i].innerText.toString();
		};

		console.log('italic items : ');
		for (var i = italicItems.length - 1; i >= 0; i--) {
			console.log(i+' '+italicItems[i].innerText.toString());
		};

	

		// 'https://encrypted.google.com/search?'+boldItems.join(' ')+boldItems.join(' ');
		console.log('text : '+fullInputText);
		console.log('plain : '+plainText);	
		var searchTerm = 'https://encrypted.google.com/search?q='+plainText+'+'+search;	
		console.log('search : '+searchTerm);
		window.location = searchTerm;
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



