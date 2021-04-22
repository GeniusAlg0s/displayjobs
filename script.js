// listen for submit on the form
document.getElementById("user_input").addEventListener("submit", getInput);

function getInput(e) {
  e.preventDefault();

  const userInput = e.target.search_term.value;

  // clear the input value
  e.target.search_term.value = "";

  const btn = document.createElement("button");
  btn.innerText = userInput;

  // addEventListener for click
  btn.addEventListener("click", handleClick);

  document.getElementById("btns_container").appendChild(btn);
}

function handleClick(e) {
  const searchTerm = e.target.innerText;

  const URL = `https://githubjobs-mpatwil.herokuapp.com/jobs?tech=${searchTerm}`;

  fetch(URL)
    .then((res) => res.json())
    .then((json) => displayJobs(json));
}

function displayJobs(data) {
  const contains = document.getElementById("cards_container");

  data.forEach((element) => {
    let name = document.createElement("h1");
    name.innerHTML = element.title;
    name.setAttribute("class", "card-title");

    let coname = document.createElement("p");
    coname.innerHTML = element.company;
    coname.setAttribute("class", "card-title");

    let photo = document.createElement("img");
    photo.src = element.company_logo;
    photo.setAttribute("class", "card-img-top");

    let urlLink = element.url;
    let start = `window.location.href='${urlLink}';`;

    let but = document.createElement("button");
    but.setAttribute("onclick", start);
    but.setAttribute("class", "btn btn-primary");
    but.innerHTML = "more\ninfo";

    let box = document.createElement("div");
    let innerbox = document.createElement("div");
    innerbox.setAttribute("class", "card-body");
    innerbox.appendChild(coname);
    innerbox.appendChild(name);
    innerbox.appendChild(photo);
    innerbox.appendChild(but);

    box.setAttribute("class", "card");
    box.setAttribute("style", "width: 18rem;");
    box.setAttribute("id", "sowat");

    // box.appendChild(name);
    box.appendChild(innerbox);
    // contains.setAttribute("style", "display: flex, flex-wrap: wrap");
    contains.appendChild(box);
  });
}
