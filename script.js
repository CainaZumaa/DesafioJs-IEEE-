function carregar() {
  var msg = window.document.getElementById("msg");
  var img = window.document.getElementById("imagem");
  var data = new Date();
  var hora = data.getHours();

  if (hora == 1) {
    msg.innerHTML = `Agora são ${hora} hora.`;
  } else {
    msg.innerHTML = `Agora são ${hora} horas.`;
  }

  if (hora >= 5 && hora < 12) {
    // Bom dia
    img.src = "manha_Circle.png";
    document.body.style.background = "#f4d181";
  } else if (hora >= 12 && hora < 18) {
    // Boa tarde
    img.src = "tarde_Circle.png";
    document.body.style.background = "#db9b61";
  } else {
    // Boa noite
    img.src = "noite_Circle.png";
    document.body.style.background = "#14849c";
  }
}
