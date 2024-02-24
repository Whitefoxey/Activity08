/*Author: Faith Sheets
ISU Netid : whitefox@iastate.edu
Date : Feb 24, 2024*/

var inputMovieName ="";

function getInputValue() {
    let movieName = document.forms["my_form"]["inputMovieName"];
    inputMovieName = movieName.value;
    fetch("./Whitefox_Activity08_MoviesFromJSON.json")
    .then(response => response.json())
    .then(myMovies => loadMovies(myMovies));
} 



 function loadMovies(myMovies) {
     var mainContainer = document.getElementById("goodmovies");
        console.log(myMovies);
        mainContainer.innerHTML = "";
        /*var movies = myMovies.movies;
        for(let movie of movies){
            let div = document.createElement("div");
            div.innerHTML= `<br>
            <h1>${movie.title}</h1>
            ${movie.year}<br>
            <img src=${movie.url} width ="200"><br>`;
            mainContainer.appendChild(div);
        }*/
        console.log(inputMovieName);
        for( var i = 0; i < myMovies.movies.length; i++){
            console.log(myMovies.movies[i].title);
            if(myMovies.movies[i].title === inputMovieName){
                
                let div = document.createElement("div");
                
                div.innerHTML= `<br>
                <h3>${myMovies.movies[i].title}</h3>
                ${myMovies.movies[i].year}<br>
                <img src=${myMovies.movies[i].url} width ="200"><br>`;
                mainContainer.appendChild(div);
            }
        }
       
    }
