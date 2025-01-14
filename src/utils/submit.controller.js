export const submitController = (object) => {
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const { name, email, phone, cp, password, adress, city } = object;
    if (!name || !email || !phone || !cp || !password || !adress || !city) {
      alert("Tout les champs sont requis");
    } else {
      console.log(
        "le nom est : " +
          name +
          "et l'email est " +
          email +
          "le numero de telephone est " +
          phone +
          "le CP est " +
          cp,
        password,
        city,
        adress
      );
    }
  });
};
