package Ejemplos;

public class Persona{
    private int anioNacimiento;
    private int alturaCm;
    public int anioInscripcion;


    private int getEdadInscripcion(){
        int res;
        res = anioInscripcion- anioNacimiento;
        return res;
    }
    public void setAnioNacimiento(int nac){
        anioNacimiento = nac;
    }
    public int getAnioNacimiento(){
        return anioNacimiento;
    }

    public void setAnioInscripcion(int insc){
        anioInscripcion = insc;
    }
    public int getAnioInscripcion(){
        return anioInscripcion;
    }
    public void setAltura(int altura){
        alturaCm = altura;
    }
    public int getAltura(){
        return alturaCm;
    }
    public boolean getMayorEdadInscripcion(){
        return getEdadInscripcion()>=18;
    }
}