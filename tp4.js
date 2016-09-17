function Pelicula (id, titulo, descripcion, año, duracion, actores, director) {

    this.id = id;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.año = año;
    this.duracion = duracion;
    this.actores = [];
    this.director = director;



}
    this.prototype.setTitulo = function (titulo) {
        this.titulo = titulo;
    }
    this.prototype.getTitulo = function () {
        return this.titulo;
    }

    this.prototype.setDescripcion = function (descripcion) {
        this.descripcion = descripcion;
    }
    this.prototype.setAño = function (año) {
        this.año = año;
    }
    this.prototype.setDuracion = function (duracion) {
        this.duracion = duracion;
    }
    this.prototype.setDirector = function (director) {
        this.director = director;
    }
    this.prototype.agregarActor = function (actor) {
        do{
        var Agregar=prompt("Agregar el Nombre del actor");
        this.actores push (Agregar)
        var confirmar=prompt("desea agregarActor?");
}
    while (confirmar === "si");
    }

var Pelicula1= new Pelicula ("f","g","t","h","y","b");
alert (Pelicula1.getTitulo()) ;
