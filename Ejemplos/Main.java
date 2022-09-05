package Ejemplos;


/*public class Main {
    public static void main(String[] args){
        TablaDeVerdad prueba = new TablaDeVerdad();
        System.out.println("and(false,false): "+prueba.and(false,false));
        System.out.println("or(true,false): "+prueba.or(true,false));
        System.out.println("neg(false): "+prueba.neg(false));
        System.out.println("igual(1,1): "+prueba.igual(1,1));
        System.out.println("igual(1,2): "+prueba.igual(1,2));
        System.out.println("noIgual(1,1): "+prueba.noIgual(1,1));
        System.out.println("noIgual(1,2): "+prueba.noIgual(1,2));
        System.out.println("mayor(1,2): "+prueba.mayor(1,2));
        System.out.println("mayor(3,2): "+prueba.mayor(3,2));
        System.out.println("mayorIgual(1,2): "+prueba.mayorIgual(1,2));
        System.out.println("mayorIgual(2,2): "+prueba.mayorIgual(2,2));
        System.out.println("mayorIgual(3,2): "+prueba.mayorIgual(3,2));
        System.out.println("menor(1,2): "+prueba.menor(1,2));
        System.out.println("menor(3,1): "+prueba.menor(3,2));
        System.out.println("menorIgual(1,2): "+prueba.menorIgual(1,2));
        System.out.println("menorIgual(2,2): "+prueba.menorIgual(2,2));
        System.out.println("menorIgual(3,1): "+prueba.menorIgual(3,2));
    }
}*/
/*public class Main {
    public static void main(String[] args){
        IfThenElse prueba = new IfThenElse();
        System.out.println("condicional1(10): "+prueba.condicional1(10));
        System.out.println("condicional2(12): "+prueba.condicional2(12));
        System.out.println("condicional3(14): "+prueba.condicional3(14));

    }
}*/
/*public class Main {
    public static void main(String[] args){
        IfAnidado prueba = new IfAnidado();
        System.out.println("ifAnidado(3,5): "+prueba.ifAnidado(3,5));
        System.out.println("ifAnidado(4,6): "+prueba.ifAnidado(4,6));
        System.out.println("ifAnidado(4,5): "+prueba.ifAnidado(4,5));

    }
}*/
/*public class Main {
    public static void main(String[] args){
        For prueba = new For();
        System.out.println("ciclo1(10): "+prueba.ciclo1(10));
        System.out.println("ciclo2(10,12): "+prueba.ciclo2(10,12));
    }
}*/
/*public class Main {
    public static void main(String[] args){
        While prueba = new While();
        System.out.println("loop1(10,10): "+prueba.loop1(10,10));
        System.out.println("loop2(10,12,14): "+prueba.loop2(10,12,14));
    }
}*/

/*public class Main {
    public static void main(String[] args){
        Recursividad prueba = new Recursividad();
        System.out.println("factorial(12): "+prueba.factorial(12));
    }
}*/
/*public class Main {
    public static void main(String[] args){
        LlamadaFunciones prueba = new LlamadaFunciones();
        System.out.println("f1(12,4): "+prueba.f1(12,4));
        System.out.println("f1(4,10): "+prueba.f1(4,12));
    }
}*/
public class Main {
    public static void main(String[] args) {
        Persona prueba = new Persona();

        prueba.setAnioNacimiento(1980);
        System.out.println("setAnioNacimiento(1980)");
        System.out.println("getAnioNacimiento(): "+prueba.getAnioNacimiento());

        prueba.setAnioInscripcion(1999);
        System.out.println("setAnioInscripcion(1999)");
        System.out.println("getAnioInscripcion(): "+prueba.getAnioInscripcion());

        prueba.setAltura(180);
        System.out.println("setAltura(180)");
        System.out.println("getAltura(): "+prueba.getAltura());

        System.out.println("mayorDeEdadInscripcion(): "+prueba.getMayorEdadInscripcion());
    }
}