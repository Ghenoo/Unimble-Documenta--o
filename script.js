document.addEventListener("DOMContentLoaded", function() {
  const savedContent = document.getElementById("saved-content");
  const saveButton = document.getElementById("save-button");

  saveButton.addEventListener("click", function() {
    const documentText = document.getElementById("document-text").value;
    const imagePreview = document.getElementById("image-preview").innerHTML;
    const saveDate = new Date().toLocaleString();

    const entryContainer = document.createElement("div");
    entryContainer.classList.add("entry");

    const entryText = document.createElement("p");
    entryText.textContent = documentText;
    entryContainer.appendChild(entryText);

    const entryImage = document.createElement("div");
    entryImage.innerHTML = imagePreview;
    entryContainer.appendChild(entryImage);

    const saveDateSpan = document.createElement("span");
    saveDateSpan.textContent = saveDate;
    entryContainer.appendChild(saveDateSpan);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.textContent = "Excluir";
    entryContainer.appendChild(deleteButton);

    deleteButton.addEventListener("click", function() {
      savedContent.removeChild(entryContainer);
    });

    savedContent.appendChild(entryContainer);

    document.getElementById("document-text").value = "";
    document.getElementById("image-preview").innerHTML = "";
  });

  // Adiciona evento de alteração no campo de upload de imagem para exibir a pré-visualização
  document.getElementById("image-upload").addEventListener("change", function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
      const imagePreview = document.getElementById("image-preview");
      imagePreview.innerHTML = "";
      imagePreview.appendChild(createImageElement(e.target.result));
    };

    reader.readAsDataURL(file);
  });

  // Função para criar um elemento de visualização de imagem
  function createImageElement(url) {
    const image = document.createElement("img");
    image.src = url;
    return image;
  }
});
