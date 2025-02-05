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
         <div class="container text-center .container">
      <div class="row .rows">
        <div class="col .colmuns">
          <div class="moviecard1">
            <img src="${imagePath}" alt="" id="image">
            <h2>title:${result.original_title}</h2>
            <p id="ratings">ratings:${result.original_title}</p>
            <p id="overview">
             ${result.overview}
            </p>
          </div>
        </div>
      </div>
    </div>
        `
    });
}