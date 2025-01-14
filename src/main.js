import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./style.css";
const app = document.getElementById("app");

import form from "./components/form";
import { userData } from "./utils/form.utils";
import { submitController } from "./utils/submit.controller";
import switcUtils from "./utils/utils";

const formDisplay = () => {
  return `
  ${form()}
  `;
};

app.innerHTML = formDisplay();
const inputs = document.querySelectorAll(
  "input[type='text'], input[type='password']"
);

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    switcUtils(e.target);
  });
});

submitController(userData);
