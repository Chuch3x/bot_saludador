import verificar from "./verificar_formulario";

const user_name = document.querySelector("#name");
const user_gender = document.querySelector("#gender");
const user_age = document.querySelector("#age");
const form = document.querySelector("#saludador-form");
const div = document.querySelector("#resultado-div");
const idiomas = document.querySelector("#idiomas");


form.addEventListener("submit", (event) => {
  event.preventDefault();
  let fechaActual = new Date();
  let horaActual = fechaActual.getHours();


  div.innerHTML = "<p>" + verificar(user_name.value, user_age.value, user_gender.value, horaActual, idiomas.value) + "<p>";
});
