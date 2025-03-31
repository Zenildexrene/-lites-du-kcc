// Fonction pour ajouter une vidéo à la liste
function addVideo() {
  const videoUrl = document.getElementById('videoUrl').value;
  if (videoUrl) {
    const videoId = videoUrl.split('v=')[1].split('&')[0]; // Extraire l'ID de la vidéo
    const videoEmbed = `
            <div class="video-responsive">
                <iframe src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
            </div>`;
    document.getElementById('videoList').innerHTML += videoEmbed; // Ajouter la vidéo à la liste
    document.getElementById('videoUrl').value = ''; // Réinitialiser le champ d'entrée
  } else {
    alert("Veuillez entrer une URL de vidéo valide.");
  }
}

// Fonction pour télécharger et afficher des photos
function uploadPhoto() {
  const fileInput = document.getElementById('photoUpload');
  const files = fileInput.files;
  
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const reader = new FileReader();
    
    reader.onload = function(e) {
      const imgElement = `<img src="${e.target.result}" alt="Photo de la fondation">`;
      document.getElementById('photoGallery').innerHTML += imgElement; // Ajouter l'image à la galerie
    };
    
    reader.readAsDataURL(file); // Lire le fichier comme une URL de données
  }
}

// Écouteur d'événements pour le bouton d'ajout de vidéo
document.getElementById('addVideoButton').addEventListener('click', addVideo);

// Écouteur d'événements pour le champ de téléchargement de photos
document.getElementById('photoUpload').addEventListener('change', uploadPhoto);
