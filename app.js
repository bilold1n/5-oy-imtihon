const articel7 = document.querySelector(".cocktails-center");
const input = document.getElementById("input");
const loader = document.querySelector(".loader");
const eror7 = document.querySelector(".error");
loader.classList.remove("hidden");

function creat(articel) {
  articel7.innerHTML = "";
  articel.forEach(({ slug, name, flags, population, continents, capital }) => {
    let articel1 = document.createElement("article");
    articel1.classList.add("cocktail");
    articel1.innerHTML = `
    <a class="" href="./about.html?id=${name.slug}">
    <div class="img-container">
    <img
      src="${flags.png}"
      alt=${"flags"}
    />
  </div>
  <div class="cocktail-footer">
    <h3>${name.common}</h3>
    <p><span class="kilop">Population:</span></h5>${population}</p>
    <p><span class="kilop">Region:</span></h5>${continents}</p>
    <p><span class="kilop">Capital:</span></>${capital}</p>
  </div>
    </a>
    `;
    articel7.appendChild(articel1);
  });
}
const select = document.querySelector("#rew");
console.log(select.value);
if (!select.value == "all") {
  fetch(
    `https://frontend-mentor-apis-6efy.onrender.com/countries?region=${select.value}`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data.data);
      creat(data.data);
      loader.classList.add("hidden");
    })
    .catch((eror) => {
      eror7.classList.remove("hidden");
      loader.classList.add("hidden");
    });
} else {
  fetch(`https://frontend-mentor-apis-6efy.onrender.com/countries`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.data);
      creat(data.data);
      loader.classList.add("hidden");
    })
    .catch((eror) => {
      eror7.classList.remove("hidden");
      loader.classList.add("hidden");
    });
}
select.addEventListener("change", (e) => {
  articel7.innerHTML = "";
  loader.classList.remove("hidden");
  eror7.classList.add("hidden");
  console.log(e.target.value);
  fetch(
    `https://frontend-mentor-apis-6efy.onrender.com/countries?region=${e.target.value}`
  )
    .then((res) => res.json())
    .then((data) => {
      if (select.value == "all") {
        fetch(`https://frontend-mentor-apis-6efy.onrender.com/countries`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data.data);
            creat(data.data);
            loader.classList.add("hidden");
          })
          .catch((eror) => {
            eror7.classList.remove("hidden");
            loader.classList.add("hidden");
          });
      }
      console.log(data.data);
      creat(data.data);
      loader.classList.add("hidden");
    })
    .catch((eror) => {
      eror7.classList.remove("hidden");
      loader.classList.add("hidden");
    });
});
///////////////////////////////////////search
function creat7(articel) {
  console.log(articel);
  articel7.innerHTML = "";
  const { name, flags, population, continents, capital } = articel;
  let articel1 = document.createElement("article");
  articel1.classList.add("cocktail");
  articel1.innerHTML = `
    <a class="" href="./about.html?id=${name.slug}">
    <div class="img-container">
    <img
      src="${flags.png}"
      alt=${flags.alt}
    />
  </div>
  <div class="cocktail-footer">
    <h3>${name.common}</h3>
    <p><span class="kilop">Population:</span></h5>${population}</p>
    <p><span class="kilop">Region:</span></h5>${continents}</p>
    <p><span class="kilop">Capital:</span></>${capital}</p>
  </div>
    </a>
    `;
  articel7.appendChild(articel1);
}
const button = document.querySelector("#todo");
const button1 = document.querySelector("#button");
console.log(button1.value);
button.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!button1.value == "") {
    fetch(
      `https://frontend-mentor-apis-6efy.onrender.com/countries?/countries?region=${select.value}&search=${button1.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(button1.value);
        console.log(select.value);
        console.log(data.data);
        if (data.data[0].region == select.value || select.value == "all") {
          creat7(data.data[0]);
          loader.classList.add("hidden");
        } else {
          articel7.innerHTML = "";
          eror7.classList.remove("hidden");
          articel7.innerHTML = `<h3>${select.value}-bu qitada siz izlagan davlat mavjud emas mavjud emas</h3>`;
          select.addEventListener("change", () => {
            eror7.classList.add("hiddin");
          });
        }
      })
      .catch((eror) => {
        eror7.classList.remove("hidden");
        articel7.innerHTML = `<h3 class="eror-title";>Bu davlat mavjud emas</h3>
        <a class="btn btn-primary bt7" href="./index.html">back home</a>
        `;
        loader.classList.add("hidden");
      });
  }
  button1.value = "";
});
