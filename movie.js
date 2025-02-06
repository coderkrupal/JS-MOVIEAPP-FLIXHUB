const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const moviebox = document.querySelector(".movie2_container");
const getmovies = async function (url) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  showmovies(data);
}

getmovies(APIURL);

const showmovies = (data) => {
  moviebox.innerHTML = "";
  data.results.forEach(result => {
    const imagePath = result.poster_path === null ? "img/image-missing.png" : IMGPATH + result.poster_path;
    const box = document.createElement("div");
    moviebox.appendChild(box);
    box.innerHTML = `
         <div class="container">
    <div class="moviecard1">
        <img id="image" src="${imagePath}" alt="Movie Poster">
        <h3>Movie Title:${result.original_title}</h3>
              <span> ${result.vote_average} <span>
               <h3>Overview:</h3>
                    <p> 
                        ${result.overview}
                    </p>
    </div>
</div>
        `
  });
}


document.querySelector("#search").addEventListener(
  "keyup",
  function (event) {
      if (event.target.value != "") {
          getmovies(SEARCHAPI + event.target.value)
        
      } else {
          getmovies(APIURL);
      }
  }
)

