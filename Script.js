// Elementos 
const input = document.querySelector("input");
const lista = document.querySelector("ul");
// Funções
function handlekeyup(e){
    if(e.key === "Enter"){
        // Adicionar elemento LI na lista
        const newli = document.createElement("li");
        newli.innerHTML = input.value;
        lista.appendChild(newli);
        // Limpar o campo de texto
        input.value = " ";
    }
}
// Eventos
input.addEventListener("keyup", handlekeyup);