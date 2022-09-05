package Ejemplos;

class LlamadaFunciones{
    public int f1(int x, int y){
        if(f2(x,x+1,y,y+1)<0){
            x= x*y;
        }
        return x+y;
    }
    public int f2(int a, int b, int c, int d){
        return a*b-c*d;
    }
}