#include <stdio.h>

int main()
{
    int P, S, cont;
    cont = 0;
    scanf("%d %d",&P,&S);
    char M[P], N[S];
    scanf("%s %s", M, N);
    
    for(int i = 0; i <= P || i <= S; i++){
        char A = M[i];
        char B = N[i];
        if(A == B){
            cont++;
        }else{
            break;
        }
    }
    printf("%d",cont);
}
