const moviesAppForm = document.querySelector(".moves-app-form");
const moviesNameInput = moviesAppForm.querySelector(".movies-app-name-search");
const moviesTypeSelect = moviesAppForm.querySelector(".movie-type-select");
const moviesAppList = document.querySelector(".moviea-app-list");

moviesAppForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  fetch(
    `http://www.omdbapi.com/?apikey=3c3dfbc7&s=${moviesNameInput.value}&type=${moviesTypeSelect.value}&page=1`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      moviesAppList.innerHTML = "";
      data.Search.forEach((item) => {
        let movieItem = document.createElement("li");
        movieItem.classList.add("movie-app-item");

        const movieItemImg = document.createElement("img");
        movieItemImg.classList.add("movie-item-img");
        movieItemImg.src = item.Poster;

        const movieItemTitle = document.createElement("h3");
        movieItemTitle.classList.add("movie-item-title");
        movieItemTitle.textContent = item.Title;

        const movieInfoTextBox = document.createElement("div");
        movieInfoTextBox.classList.add("movie-info-text-box");

        const movieItemYearText = document.createElement("p");
        movieItemYearText.classList.add("movie-item-year-text");
        movieItemYearText.textContent = item.Year;

        // const movieItemRatingText = document.createElement("p");
        // movieItemRatingText.classList.add("movie-item-rating-text");
        // movieItemRatingText.textContent = item.rating;

        const movieItemTypeText = document.createElement("p");
        movieItemTypeText.classList.add("movie-item-type-text");
        movieItemTypeText.textContent = `Type: ${item.Type}`;

        movieItem.appendChild(movieItemImg);
        movieItem.appendChild(movieItemTitle);
        // movieInfoTextBox.appendChild(movieItemRatingText);
        movieInfoTextBox.appendChild(movieItemYearText);
        movieInfoTextBox.appendChild(movieItemTypeText);
        movieItem.appendChild(movieInfoTextBox);
        moviesAppList.appendChild(movieItem);
      });
    })
    .catch((err) => console.log(err));
});
