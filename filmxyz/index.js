function renderMovies(movieData) {
    var movieHTML = movieData.map(function(movie) {
        return `
        <div class="card movie-card" style="width: 18rem;">
            <img class="card-img-top" src="${movie.Poster}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${movie.Title}</h5>
                <p class="card-text">${movie.Year}</p>
                <button class="btn btn-primary" onClick="saveToWatchlist('${movie.imdbID}')">Save to Watchlist</button>
            </div>
        </div>
        `;
    }).join('');

    document.getElementsByClassName('results')[0].innerHTML = movieHTML;
}
function saveToWatchlist(imdbID) {
	console.log(imdbID);
	var movie = movieData.find(function (currentMovie) {
		return currentMovie.imdbID == imdbID;
	})
	var WatchlistJSON = localStorage.getItem("watchlist");
	var watchlist = JSON.parse(WatchlistJSON);
	
		if (watchlist == null){
			watchlist = [];
		}
		
		watchlist.push(movie);
		WatchlistJSON = JSON.stringify(watchlist);
		localStorage.setItem("watchlist", WatchlistJSON);
	
}
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('search-form').addEventListener("submit", function(event){
        event.preventDefault();
        var searchString = document.getElementsByClassName("search-bar")[0].value
        var urlEncodedSearchString= encodeURIComponent(searchString)
        axios.get( "http://www.omdbapi.com/?apikey=3430a78&s=" + urlEncodedSearchString).then(function(response) {
            var movieHTML= renderMovies(response.data.Search);
            document.getElementsByClassName("movies-container").innerHTML= movieHTML;
            movieData=response.data.Search
        console.log(response.data)
        })
    })
});
