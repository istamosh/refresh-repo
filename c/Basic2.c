#include <stdio.h>

int main(){
    // catching a whole text input w/ 50 chars max.
    char fullName[50];
    printf("Enter your full name: ");
    fgets(fullName, 50, stdin);
    printf("Your full name is %s.", fullName);
    
    return 0;
}