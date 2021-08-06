"use strict"

import { Animal } from "./Animal.mjs"

export class Leon extends Animal {
    Rugir(){
        this.playerSonido();
    }
};

export class Lobo extends Animal {
    Aullar(){
        this.playerSonido();
    }
};

export class Oso extends Animal {
    Gruñir(){
        this.playerSonido();
    }
};

export class Serpiente extends Animal {
    Sisear(){
        this.playerSonido();
    }
};

export class Aguila extends Animal {
    Chillar(){
        this.playerSonido();
    }
};