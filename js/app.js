function menuMobile() {
    const btn = document.querySelector('.burger'); // Sélectionne le bouton burger
    const header = document.querySelector('.header'); // Sélectionne l'en-tête
    const links = document.querySelectorAll('.navbar a'); // Sélectionne tous les liens de la barre de navigation
  
    btn.addEventListener('click', () => {
      header.classList.toggle('show-nav'); // Ajoute ou supprime la classe 'show-nav' à l'en-tête lors du clic sur le bouton burger
    });
  
    links.forEach(link => {
      link.addEventListener('click', () => {
        header.classList.remove('show-nav'); // Supprime la classe 'show-nav' de l'en-tête lorsque l'utilisateur clique sur un lien de navigation
      });
    });
}

menuMobile();

function showProjectDetails() {
    const links = document.querySelectorAll('.card__link'); // Sélectionne tous les liens des cartes de projet
    const modals = document.querySelectorAll('.modal'); // Sélectionne toutes les modales
    const btns = document.querySelectorAll('.modal__close'); // Sélectionne tous les boutons de fermeture de modale
  
    const hideModals = () => {
      modals.forEach(modal => {
        modal.classList.remove('show'); // Supprime la classe 'show' de chaque modale pour les cacher
      });
    }
  
    links.forEach(elem => {
      elem.addEventListener('click', (event) => {
        event.preventDefault();
        document.querySelector(`[id=${elem.dataset.id}]`).classList.add('show'); // Affiche la modale correspondante lors du clic sur un lien de projet
      });
    });
  
    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        hideModals(); // Appelle la fonction pour cacher les modales lorsque l'utilisateur clique sur le bouton de fermeture
      });
    });
}

showProjectDetails();

// effets 

const observerIntersectionAnimation = () => {
    const sections = document.querySelectorAll('section'); // Sélectionne toutes les sections de la page
    const skills = document.querySelectorAll('.skills .bar'); // Sélectionne toutes les barres de compétences
  
    sections.forEach((section, index) => {
      if (index === 0) return; // Ignore la première section
      section.style.opacity = "0"; // Initialise l'opacité à 0 pour toutes les sections sauf la première
      section.style.transition = "all 1.6s"; // Ajoute une transition pour une animation fluide
    });
  
    skills.forEach((elem, index) => {
      elem.style.width = "0"; // Initialise la largeur des barres de compétences à 0
      elem.style.transition = "all 1.6s"; // Ajoute une transition pour une animation fluide
    });
  
    let sectionObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          let elem = entry.target;
          elem.style.opacity = 1; // Augmente l'opacité des sections lorsque elles sont visibles dans la fenêtre
        }
      });
    });
  
    sections.forEach(section => {
      sectionObserver.observe(section); // Observe les sections pour déclencher l'animation lorsqu'elles sont visibles
    });
  
    let skillsObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          let elem = entry.target;
          elem.style.width = elem.dataset.width + '%'; // Anime la largeur des barres de compétences lorsqu'elles deviennent visibles
        }
      });
    });
  
    skills.forEach(skill => {
      skillsObserver.observe(skill); // Observe les barres de compétences pour déclencher l'animation lorsqu'elles sont visibles
    });
}

observerIntersectionAnimation();
