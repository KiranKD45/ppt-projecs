const inputTitle = document.getElementById("input-title");
const inputImage = document.getElementById("input-img");
const inputAuthor = document.getElementById("input-author");
const inputCategory = document.getElementById("input-category");
const inputStory = document.getElementById("input-story");

// live data
const title = document.getElementById("title");
const category = document.getElementById("category");
const story = document.getElementById("story");
const img = document.getElementById("img-url");
const author = document.getElementById("author-btn")

function liveData(){
title.innerHTML = inputTitle.value.toUpperCase()
category.innerHTML = inputCategory.value
story.innerHTML = inputStory.value;
author.innerHTML = "Written By " + inputAuthor.value;

img.src = inputImage.value
   
}

function submitStory(){
  alert("story added")
}


