function toggleForms(form) {
   
    document.getElementById("cover-container").style.display = "none";
    document.getElementById("login-container").style.display = "none";
    document.getElementById("signup-container").style.display = "none";
    document.getElementById("gallery-container").style.display = "none";
    document.getElementById("review-container").style.display = "none";

    
    if (form === "login") {
        document.getElementById("login-container").style.display = "block";
    } else if (form === "signup") {
        document.getElementById("signup-container").style.display = "block";
    } else if (form === "gallery") {
        document.getElementById("gallery-container").style.display = "block";
    } else if (form === "review") {
        document.getElementById("review-container").style.display = "block";
    } else {
        document.getElementById("cover-container").style.display = "block"; 
    }
}

function login() {
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    if (username && password) {
        window.location.href = "galeriafilmes.html";
    } else {
        alert("Por favor, preencha todos os campos");
    }
}

function signup() {
    const username = document.getElementById("signup-username").value;
    const password = document.getElementById("signup-password").value;

    if (username && password) {
        alert("Cadastro realizado com sucesso!");
        toggleForms('login');
    } else {
        alert("Por favor, preencha todos os campos");
    }
}

function submitReview() {
    const title = document.getElementById('title-input').value;
    const reviewText = document.getElementById('review-text').value;

    if (!title || !reviewText) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    const reviewList = document.getElementById('review-list');
    const listItem = document.createElement('li');

    listItem.textContent = `${title} - Comentário: ${reviewText}`;
    reviewList.appendChild(listItem);

    document.getElementById('title-input').value = '';
    document.getElementById('review-text').value = '';
}
