"use strict";

const inputs = document.querySelectorAll("input");
const form = document.querySelector("form");
const pseudo_controler = document.querySelector(".pseudo-controler");
const email_controler = document.querySelector(".email-controler");
const password_controler = document.querySelector(".password-controler");
const passVerify = password_controler.querySelector(".verify");
const confirm_password = document.querySelector(".password-verify");
let confirm_password_checker = "";

let userData = {
  pseudo: "",
  email: "",
  password: "",
};

const red = () => {
  passVerify.classList.add("red");
  passVerify.classList.remove("yellow", "yellowgreen", "green");
};

const yellow = () => {
  passVerify.classList.add("yellow");
  passVerify.classList.remove("red", "yellowgreen", "green");
};

const yellowgreen = () => {
  passVerify.classList.add("yellowgreen");
  passVerify.classList.remove("yellow", "red", "green");
};

const green = () => {
  passVerify.classList.add("green");
  passVerify.classList.remove("yellow", "yellowgreen", "red");
};

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    const { value, id } = e.target;

    switch (id) {
      case "pseudo":
        if (value === "") {
          pseudo_controler.textContent = "";
        } else if (value.length < 3 || value.length > 20) {
          pseudo_controler.textContent =
            "Le pseudo doit faire entre 3 et 20 caractères";
        } else {
          userData.pseudo = value;
          pseudo_controler.textContent = ""; // Effacer le message d'erreur
        }
        break;

      case "email":
        if (
          !value.match(
            /^(?=.{1,256})(?=.{1,64}@.{1,255}$)([a-zA-Z0-9._%+-]+|"[^"]+")@([a-zA-Z0-9.-]+).[a-zA-Z]{2,}$/
          )
        ) {
          email_controler.textContent = "Votre email ne correspond pas";
          userData.email = ""; // Réinitialiser email si non valide
        } else {
          email_controler.textContent = "";
          userData.email = value;
        }
        break;

      case "password":
        if (value.length === 0) {
          passVerify.classList.remove("red", "yellow", "yellowgreen", "green");
        } else if (value.length < 4) {
          red();
        } else if (value.length < 8) {
          yellow();
        } else if (value.length < 12) {
          yellowgreen();
        } else {
          green();
          userData.password = value;
        }

        if (
          value.match(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{10,20}$/
          )
        ) {
          userData.password = value;
        }
        break;

      case "confirm-password":
        confirm_password_checker = value; // Mettre à jour la valeur ici
        if (value !== userData.password) {
          confirm_password.textContent =
            "Les mots de passe ne correspondent pas !";
        } else confirm_password.textContent = "";
        break;

      default:
        break;
    }
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const { pseudo, email, password } = userData;

  if (confirm_password_checker !== password) {
    alert("Les mots de passe ne correspondent pas");
  } else if (!pseudo || !email || !password) {
    alert("Veuillez remplir tous les champs");
  } else {
    console.log(userData);
  }

  // Réinitialiser les champs
  inputs.forEach((input) => {
    if (input.type !== "submit") {
      input.value = ""; // Vider chaque champ sauf le submit
    }
  });
  // Réinitialiser les contrôleurs
  pseudo_controler.textContent = "";
  email_controler.textContent = "";
  confirm_password.textContent = "";
  passVerify.classList.remove("red", "yellow", "yellowgreen", "green");

  // Réinitialiser userData
  userData = {
    pseudo: "",
    email: "",
    password: "",
  };

  confirm_password_checker = ""; // Réinitialiser le vérificateur de mot de passe
});
