const ui = document.querySelector(".log");
const loader = document.querySelector(".loader");
function creat(iu) {
  const {
    region,
    name,
    flags,
    subregion,
    currencies,
    languages,
    population,
    capital,
    borders,
    cca3,
  } = iu;
  ui.innerHTML = `
  <div class="container">
  <a class="btn btn-primary" href="./index.html">back home</a>
</div>
<div class="orab">
  <div class="bi">
    <img class="iko" src="${flags.png}" alt="" , />
  </div>
  <div class="ikkinchi">
    <div class="tit">
      <h2>${name.common}</h2>
    </div>
    <div class="olik">
      <div class="ikkinchi-birinchi">
        <p><span class="span">Population:</span>${population}</p>
        <p><span class="span">NativeName:</span>${name.nativeName}</p>
        <p><span class="span">Subregion:</span>${subregion}</p>
        <p><span class="span">Region:</span>${region}</p>
        <p><span class="span">Capital:</span>${capital}</p>
      </div>
      <div class="ikkinchi-ikkinchi">
        <p><span class="span">Top Level Domain:</span>${cca3}</p>
        <p><span class="span">currencies:</span>${currencies}</p>
        <p><span class="span">Languages:</span>${languages}</p>
      </div>
    </div>
  </div>
</div>
      `;
}
const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get("id");
console.log(myParam);
console.log(
  `https://frontend-mentor-apis-6efy.onrender.com/countries/${myParam}`
);
fetch(`https://frontend-mentor-apis-6efy.onrender.com/countries/${myParam}`)
  .then((res) => res.json())
  .then((data) => {
    loader.classList.add("jidden");
    console.log(data);
    creat(data);
  })
  .catch((eror) => {
    console.log(eror);
  });
