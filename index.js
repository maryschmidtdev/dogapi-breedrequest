"use strict";

function getDogImage() {
  const breed = $("#breed-name").val();
  //console.log(breed)
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then((response) => response.json())
    .then((responseJson) => displayResults(responseJson))
    .catch((error) =>
      alert(
        "Please verify the name and spelling of the breed you are searching for."
      )
    );
}

function displayResults(responseJson) {
  console.log(responseJson);

  //replace the existing image with the new one
  $(".results-img").slice(1).remove();

  $(".results-img").replaceWith(
    `<img src="${responseJson.message}" class="results-img">`
  );
  //display the results section
  $(".results").removeClass("hidden");
}

function watchForm() {
  $("form").submit((event) => {
    event.preventDefault();
    getDogImage();
  });
}

$(function () {
  console.log("App loaded! Waiting for submit!");
  watchForm();
});
