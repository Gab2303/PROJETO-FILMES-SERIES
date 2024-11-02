function toggleForms(form) {
    document.getElementById("cover-container").style.display = "none";
    document.getElementById("login-container").style.display = form === "login" ? "block" : "none";
    document.getElementById("signup-container").style.display = form === "signup" ? "block" : "none";
    document.getElementById("gallery-container").style.display = form === "gallery" ? "block" : "none";
    document.getElementById("review-container").style.display = form === "review" ? "block" : "none";
}

function submitReview() {
    const title = document.getElementById("title-input").value;
    const reviewText = document.getElementById("review-text").value;
    const rating = document.querySelector('input[name="rating"]:checked') ? document.querySelector('input[name="rating"]:checked').value : null;

    if (title && rating && reviewText) {
        // Cria um elemento de lista para exibir a avaliação
        const reviewItem = document.createElement("li");
        reviewItem.innerHTML = `<strong>${title}</strong> - ${rating} Estrelas<br>${reviewText}`;

        // Adiciona a avaliação à lista de avaliações
        document.getElementById("review-list").appendChild(reviewItem);

        // Limpa os campos de entrada
        document.getElementById("title-input").value = "";
        document.querySelectorAll('input[name="rating"]').forEach(radio => radio.checked = false);
        document.getElementById("review-text").value = "";
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}
