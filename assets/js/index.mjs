"use strict"

import { Leon, Lobo, Oso, Serpiente, Aguila } from "./Animales.mjs";

(async () => {
    const results = await fetch("animales.json")
    const data = await results.json()
    const {animales} = data;
    console.log(data);

    const nombreAnimalElement = document.getElementById("animal");
    const previewAnimalElement = document.getElementById("preview");
    const btnRegistrar = document.getElementById("btnRegistrar");
    const animalesContainerElement = document.getElementById("Animales");

    const AnimalCards = [];


    nombreAnimalElement.addEventListener("change", () => {
        const animalElegido = nombreAnimalElement.value;
        const animalEncontrado = animales.find(
            (animal) => animal.name === animalElegido
        );
        previewAnimalElement.setAttribute("src", `/assets/imgs/${animalEncontrado.imagen}`);
    });

    const registroAnimales = () =>{
        const nombreAnimalElement = document.getElementById("animal");
        const animalElegido = nombreAnimalElement.value;
        const animalEncontrado = animales.find(
            (animal) => animal.name === animalElegido
        );

        const nombre = document.getElementById("animal").value;
        const edad = document.getElementById("edad").value;
        const imagen = animalEncontrado.imagen;
        const comentarios = document.getElementById("comentarios").value;
        const sonido = animalEncontrado.sonido;
        
        if (nombre === "Leon"){
            AnimalCards.push(new Leon(nombre, edad, imagen, comentarios, sonido));
        } else if (nombre === "Lobo"){
            AnimalCards.push(new Lobo(nombre, edad, imagen, comentarios, sonido));
        } else if (nombre === "Oso"){
            AnimalCards.push(new Oso(nombre, edad, imagen, comentarios, sonido));
        } else if (nombre === "Serpiente"){
            AnimalCards.push(new Serpiente(nombre, edad, imagen, comentarios, sonido));
        } else if (nombre === "Aguila"){
            AnimalCards.push(new Aguila(nombre, edad, imagen, comentarios, sonido));
        }

        render();
    };

    btnRegistrar.addEventListener("click", registroAnimales);

    function render() {
        animalesContainerElement.innerHTML = "";
    
        AnimalCards.forEach((animal) => {
            const DIVContainer = document.createElement("div");
            const IMGImagen = document.createElement("img");
            const DIVButtonSonido = document.createElement("div");
        
            DIVContainer.classList.add("card", "m-1");
        
            IMGImagen.setAttribute("src", `/assets/imgs/${animal.Img}`);
            IMGImagen.classList.add("img-small");
        
            DIVButtonSonido.classList.add("card-footer", "p-0");
        
            DIVButtonSonido.innerHTML = `
                <button class="btn btn-secondary btn-block">
                <img src="/assets/imgs/audio.svg" style="width: 10px"></img>
                </button>
            `;
        
            IMGImagen.addEventListener("click", () => {
                console.log("click imagen => ", animal);
                $("#modal").modal("show");
        
                const modalBodyElement = document.querySelector("#modal .modal-body");
        
                modalBodyElement.innerHTML = `
                    <img src="/assets/imgs/${animal.Img}" class="img-medium mx-auto"/>
                    <p class="text-white text-center font-weight-bold">${animal.Edad}</p>
                    <p class="text-white text-center font-weight-bold">Comentarios</p>
                    <hr>
                    <p class="text-white text-center">${animal.Comentarios}</p>
                `;
            });
        
            DIVButtonSonido.addEventListener("click", () => {
                switch (animal.Nombre) {
                case "Leon":
                    animal.Rugir();
                    break;
                case "Lobo":
                    animal.Aullar();
                    break;
                case "Oso":
                    animal.Gruñir();
                    break;
                case "Serpiente":
                    animal.Sisear();
                    break;
                case "Aguila":
                    animal.Chillar();
                    break;
                }
            });
        
            DIVContainer.appendChild(IMGImagen);
            DIVContainer.appendChild(DIVButtonSonido);
        
            animalesContainerElement.appendChild(DIVContainer);
        });
    }
})();