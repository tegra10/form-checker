export const submitController = (object) => {
  const form = document.querySelector("form");
  const cgvCheckbox = document.getElementById("cgv"); // Assurez-vous d'utiliser l'ID correct

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Empêcher l'envoi du formulaire
    if (!cgvCheckbox.checked) {
      // Vérifier si la case à cocher est cochée
      alert("Veuillez accepter les conditions générales de vente !!");
    } else {
      const { name, email, phone, cp, password, adress, city } = object;
      if (!name || !email || !phone || !cp || !password || !adress || !city) {
        alert("Tous les champs sont requis");
      } else {
        console.log(
          "Le nom est : " +
            name +
            ", l'email est : " +
            email +
            ", le numéro de téléphone est : " +
            phone +
            ", le CP est : " +
            cp +
            ", le mot de passe est : " +
            password +
            ", la ville est : " +
            city +
            ", l'adresse est : " +
            adress
        );
      }
    }
  });
};
