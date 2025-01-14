"use strict";

import submitForm from "./submit";

export default function form() {
  return `

         <form class="row g-3">
          <div class="col-md-6">
            <label for="name" class="form-label">Nom</label>
            <input type="text" name="name" id="name" class="form-control" placeholder="ex:Jean" />
            <span  class="text-danger" id="name-error"></span>
          </div>
          <div class="col-md-6">
            <label for="email" class="form-label">Email</label>
            <input type="text" name="email" id="email" class="form-control" placeholder="ex:jean@gmail.com" />
            <span class="text-danger" id="email-error"></span>
          </div>
               <div class="col-md-6">
            <label for="phone" class="form-label">Numero de téléphone</label>
            <input type="text" name="phone" id="phone" class="form-control" placeholder="ex:+243 880000000"/>
             <span id="phone-error" class="text-danger"></span>
          </div>
          <div class="col-md-6">
            <label for="adress" class="form-label">Adresse</label>
            <input type="text" name="adress" id="adress" class="form-control" placeholder="ex:kin17 av/luis no/4A" />
            <span id="adress-error" class="text-danger"></span>
          </div>
          <div class="col-md-6">
            <label for="cp" class="form-label">Code postal</label>
            <input type="text" name="cp" id="cp" class="form-control" placeholder="ex:12010" />
            <span id="cp-error" class="text-danger"></span>
          </div>
             <div class="col-md-6">
            <label for="city" class="form-label">Ville</label>
            <input type="text" name="city" id="city" class="form-control" placeholder="ex:Kinshasa"/>
            <span id="city-error" class="text-danger"></span>
          </div>
      
          <div class="col-md-12">
            <label for="cp" class="form-label">Mot de passe</label>
            <input type="password" name="password" id="password" class="form-control" placeholder="ex:****"/>
            <p id="progress-bar" class="my-2"></p>
            <span id="password-error" class="text-danger"></span>
          </div>
          <div class="col-md-12">
            <label for="confirm-password" class="form-label">Confirmer mot de passe</label>
            <input type="password" name="confirm-password" id="confirm-password" class="form-control" placeholder="ex:****"/>
             <span class="text-danger" id="error-confirm-password"></span>
          </div>
          <div class="col-md-12 d-flex justify-content-end">
            <label for="cgv" class="form-label">CGV</label>
            <input type="checkbox" name="cgv" id="cgv"  />
          </div>
         
          ${submitForm()}
      </form>
  `;
}
