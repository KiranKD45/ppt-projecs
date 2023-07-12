function getUSerInfo(){

const name = document.getElementById("name");
const repos = document.getElementById("repos");
const location = document.getElementById("location");
const portfolio = document.getElementById("portfolio");
const bio = document.getElementById("bio");
const followers = document.getElementById("followers");

const input = document.getElementById("input").value;
let url = "https://api.github.com/users/" + input
 

    fetch(url)
    .then((response)=>{return response.json();  })
    .then((data)=>{
        console.log(data);
        document.getElementById("img").src = data.avatar_url;
        name.textContent = data.name;
        repos.textContent = data.public_repos ;
        location.textContent = data.location;
        followers.textContent = data.followers;
        bio.textContent = data.bio;
        portfolio.textContent =data.following;   
    })
    .catch("error")
}
