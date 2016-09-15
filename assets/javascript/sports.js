//Array of Sports
var sports =['Football','Basketball','Baseball','Soccer'];



	// Generic function for displaying Sport data 
	function renderButtons(){ 

		// Deletes the sports prior to adding new sports (this is necessary otherwise you will have repeat buttons)
		$('#buttonsView').empty();

		// Loops through the array of sports
		for (var i = 0; i < sports.length; i++){

			
		    var a = $('<button>') // This code $('<button>') is all jQuery needs to create the beginning and end tag. (<button></button>)
		    a.addClass('sport'); // Added a class 
		    a.attr('data-sport', sports[i]); // Added a data-attribute
		    a.text(sports[i]); // Provided the initial button text
		    $('#buttonsView').append(a); // Added the button to the HTML
		}
	}

$('findSport').on('click', function() {
        var sport = $(this).data('sport');
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + sport + "&api_key=dc6zaTOxFJmzC&limit=10";





	 $.ajax({url: queryURL, method: 'GET'})
	            
	    .done(function(response) {
	    console.log(response)
		var results = response.data;

		for (var i = 0; i < results.length; i++) {
	    var sportlDiv = $('<div class="sport-item">')

	    var p =$('<p>').text("Rating: " + rating);

	    var rating = results[i].rating;

	    var sportImage = $('<img>');
	    sportImage.attr('src',results[i].images.fixed_height.url);
	    sportImage.attr('data-still',results[i].images.fixed_height.url);
	    sportImage.attr('data-animate',results[i].images.fixed_height.url);
	    sportImage.attr('data-state',results[i].images.fixed_height.url);



	    sportDiv.append(p)
	    sportDiv.append(sportImage)

	     $('#findSport').prepend(sportDiv);

	                 }


	$(document).on('click', '.sportImage', function(){
	    var state = $(this).attr('data-state'); //.data('state') won't work the way we expect
	    
	    if ( state == 'still'){
	        $(this).attr('src', $(this).data('animate'));
	        $(this).attr('data-state', 'animate');
	    }else{
	        $(this).attr('src', $(this).data('still'));
	        $(this).attr('data-state', 'still');

	        return false;

	    }
	})
