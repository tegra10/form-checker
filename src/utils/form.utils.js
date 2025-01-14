import { emailRegex, passwordRegex, postalCodeRegex } from "./regex";
export let userData = {
  name: "",
  email: "",
  phone: "",
  cp: "",
  password: "",
  adress: "",
  city: "",
};
let passwordTemporalyContainer = "";
export const controllorName = (value, element) => {
  userData.name = value;
  return (element.textContent = "");
};

export const controllorEmail = (value, element) => {
  if (value === "") return (element.textContent = "");
  if (!value.match(emailRegex)) {
    element.textContent = "Email incorrect";
    return;
  } else {
    element.textContent = "";
    userData.email = value;
    return;
  }
};

export const controllorPhone = (value, element) => {
  // Regex mise à jour pour accepter les numéros avec le code de pays
  const phoneRegex = /^\+?\d{1,3}\s?\d{7,14}$/; // Au moins 7 chiffres après le code de pays

  if (!value) {
    element.textContent = "";
    return;
  }

  if (!value.match(phoneRegex)) {
    element.textContent = "Le numéro est incorrect";
  } else {
    element.textContent = ""; // Réinitialisation
    userData.phone = value; // Mise à jour
  }
};

export const controllorPostalCode = (value, element) => {
  const cp = postalCodeRegex;

  if (!value) {
    element.textContent = "";
    return;
  }
  if (!value.match(cp)) {
    element.textContent = "Votre code postal est invalide";
    return;
  } else {
    userData.cp = value;
    element.textContent = "";
    return;
  }
};

export const controllorPassword = (value, spanElement, progressBar) => {
  // Réinitialiser les styles et le texte
  spanElement.textContent = "";
  progressBar.classList.remove("redBar", "orangeBar", "greenBar");
  progressBar.style.width = "0%"; // Réinitialiser la largeur

  if (!value) {
    return; // Si le champ est vide, ne rien faire
  }

  const length = value.length;

  // Vérification de la complexité du mot de passe avec la regex
  const matchesRegex = passwordRegex.test(value);

  if (length < 8) {
    progressBar.classList.add("redBar");
    progressBar.style.width = "33%"; // Faible
    spanElement.textContent =
      "Le mot de passe doit contenir au moins 8 caractères.";
  } else if (length >= 8 && length < 16) {
    if (!matchesRegex) {
      progressBar.classList.add("orangeBar");
      progressBar.style.width = "66%"; // Acceptable
      spanElement.textContent =
        "Le mot de passe doit contenir au moins un chiffre, une majuscule, une minuscule et un caractère spécial.";
    } else {
      progressBar.classList.add("orangeBar");
      progressBar.style.width = "66%"; // Acceptable
      spanElement.textContent = "Le mot de passe est acceptable.";
    }
  } else if (length >= 16) {
    if (matchesRegex) {
      progressBar.classList.add("greenBar");
      progressBar.style.width = "100%"; // Fort
      spanElement.textContent = "Le mot de passe est très fort.";
      passwordTemporalyContainer = value;
    } else {
      progressBar.classList.add("orangeBar");
      progressBar.style.width = "66%"; // Acceptable
      spanElement.textContent =
        "Le mot de passe doit contenir au moins un chiffre, une majuscule, une minuscule et un caractère spécial.";
    }
  }
};

export const controllorConfirmPassword = (value, element) => {
  const { password } = userData;

  if (!value) {
    element.textContent = "";
  }

  if (value !== passwordTemporalyContainer) {
    element.textContent = "Les mots de passe ne correspondent pas.";
  } else {
    userData.password = value; // Optionnel : effacer le message si les mots de passe correspondent
    element.textContent = "";
  }
};

export const controllorAdress = (value, element) => {
  if (!value) {
    // Si la valeur est vide, effacer le message d'erreur
    element.textContent = "";
    return; // Sortir de la fonction
  }

  if (value.length < 10) {
    element.textContent = "Votre adresse est trop courte.";
  } else {
    userData.adress = value;
    element.textContent = ""; // Effacer le message d'erreur si la validation réussit
  }
};

export const controllorCity = (value, element) => {
  if (!value) {
    // Si la valeur est vide, effacer le message d'erreur
    element.textContent = "";
    return; // Sortir de la fonction
  }

  if (value.length < 3) {
    element.textContent = "Le nom de votre ville est trop court.";
  } else {
    userData.city = value;
    element.textContent = ""; // Effacer le message d'erreur si la validation réussit
  }
};
