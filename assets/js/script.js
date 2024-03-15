// Llamamos al json
const animales = (() => {
    const url = "http://localhost:5500/animales.json";
    const getData = async () => {
        const res = await fetch(url);
        const datos = await res.json(); 
        return datos; 
    };
    return { getData };
})();

// creando la clase padre Animal
class Animal{
    constructor(nombre, edad, img, comentarios, sonido) {
    this.nombre = nombre;
    this.edad = edad;
    this.img = img;
    this.comentarios;
    this.sonido;
}
 getNombre() {
    return this._nombre;
 }
 getEdad() {
    return this._edad;
 }
 getImg() {
    return this._img;
 }
 getComentarios() {
    return this._comentarios;
 }
 getSonido() {
    return this._sonido;
 }
};

// Creando clases hijas
// creando la clase hija Leon
class Leon extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
    Rugir() {

    }
};

// creando la clase hija Lobo
class Lobo extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
    Sullar() {

    }
};

// creando la clase hija Oso
class Oso extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
    Gruñir() {

    }
};

// creando la clase hija Serpiente
class Serpiente extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
    Sisear() {

    }
};

// creando la clase hija Aguila
class Aguila extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
    Chillar() {

    }
};

// Prueba de select

const selectAnimal = document.getElementById("animal");

let mostrarAnimal = null;

// Event change para detectar el id selecionado

selectAnimal.addEventListener('change', () => {
    mostrarAnimal = datos.animales.find(animal => animal.name === selectAnimal.value);
})