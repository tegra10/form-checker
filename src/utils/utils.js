"use strict";

import errors from "../../errors/errors";
import {
  controllorAdress,
  controllorCity,
  controllorConfirmPassword,
  controllorEmail,
  controllorName,
  controllorPassword,
  controllorPhone,
  controllorPostalCode,
} from "./form.utils";

// pour les prochains codes je vais devoir créer et recuper une div avec un message qui dit le minimum pour un nom est de 3, et qu'en dessous de célà le formulaire ne séra pas soumis car il sera sous disabled true, pour l'instant ce precessus ne concerne que le nom et demain déjà je vais devoir télécharger dex bibliothèque afin de traiter le cas de numero de telephone et email
//implanter également un système de gestion d'erreur dans un dossier errors puis errors.js
export default function switcUtils(key) {
  switch (key.id) {
    case "name":
      try {
        if (key.value.length === 0) {
          return (document.getElementById("name-error").textContent = "");
        }
        if (!key || key.value.length <= 2) {
          return (document.getElementById("name-error").textContent =
            "Le nom doit faire minimum 3 caractères pour etre accepté");
        } else {
          controllorName(key.value, document.getElementById("name-error"));
        }
      } catch (err) {
        errors(err);
      }
      //   nameFunction(key.value);

      break;

    case "email":
      try {
        // ici concerne les email à travailler avec validator qu'il faut télécharger
        controllorEmail(key.value, document.getElementById("email-error"));
      } catch (err) {
        errors(err);
      }
      break;

    case "phone":
      controllorPhone(key.value, document.getElementById("phone-error"));
      break;

    case "cp":
      controllorPostalCode(key.value, document.getElementById("cp-error"));
      break;
    case "password":
      controllorPassword(
        key.value,
        document.getElementById("password-error"),
        document.getElementById("progress-bar")
      );
      break;
    case "confirm-password":
      controllorConfirmPassword(
        key.value,
        document.getElementById("error-confirm-password")
      );
      break;
    case "adress":
      controllorAdress(key.value, document.getElementById("adress-error"));
      break;
    case "city":
      controllorCity(key.value, document.getElementById("city-error"));
      break;
    default:
      break;
  }
}
