console.log("hello");

const root = document.getElementById("root");

function makeCard(dp, login, name, batch) {
  return `<a class="card" href="https://github.com/${login}">
            <img src="${dp}" width="230px" ></img>
            <h4>${name || login}</h4>
            <h4>class: ${batch}</h4>
        </a>
        `;
}

async function getData(usersIDs) {
  root.innerHTML = "";

  for (const use of usersIDs) {
    const data = await fetch(`https://api.github.com/users/${use.id}`);
    const user = await data.json();
    console.log(user);
    const card = makeCard(user.avatar_url, user.login, user.name, use.class);
    root.innerHTML += card;
  }
}

getData(user);
