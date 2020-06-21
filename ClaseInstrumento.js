class Instrumento {
    tocar() {
	 print("Instrumento.tocar()");
    }
}

class Piano extends Instrumento {
    tocar() {
	 print("Piano.tocar()");
    }
}

class Bombo extends Instrumento {
    tocar() {
	 print("Bombo.tocar()");
    }
}

class Bajo extends Instrumento {
    tocar() {
	 print("Bajo.tocar()");
    }
}  

class Guitarra extends Instrumento {
    tocar() {
	 print("Guitarra.tocar()");
    }
}
  
// Un tipo de Guitarra 
class Eléctrica extends Guitarra {
       tocar() {
         print("Eléctrica.tocar()");
       
     }
}

class Musica {

    void tocarTodo(Instrumento i) {
        i.tocar();
    }

    void tocarTodo (Instrumento[] e) {
        for (int i=0; i<e.length; i++)
         tocar(e[i]);
    }
}


   main(String [] Array ) {
	Instrumento[] secuenciaRitmica = new Instrumento[5];

	
	secuenciaRítmica[i++] = new Guitarra();
	secuenciaRítmica[i++] = new Piano();
	secuenciaRítmica[i++] = new Bombo();
	secuenciaRítmica[i++] = new Bajo();
	secuenciaRítmica[i++] = new Eléctrica();
	tocarTodo(secuenciaRítmica);
    }
}