class For{
    public int fun1(int n, int m, int q, int s){
        int x = m + n + 10;
        for(int i = 0; i< 5 ; i++){
            for(int j = 0; j<3; j++){
                n = x;
                q =x*n;
                s = s*q;
            }
        }
        int y = x*s;
        return y*n;
    }
    
}