#include <stdio.h> //printf

// container main() is executed first
int main(){ 
    // show a text on screen
    printf("Hello world!\n");
    
    // draw a triangle
    printf("\n");
    printf("   /|\n");
    printf("  / |\n");    
    printf(" /  |\n");
    printf("/___|\n");   

    // using string and integer variable
    char charName[] = "John Doe";
    int charAge = 27;
    printf("There once was a man named %s\n", charName);
    printf("he was %d years old.\n", charAge);
    printf("%s really liked his/her name, but did not like being %d.\n", charName, charAge);

    // using integer manipulation
    charAge = 30;
    printf("%s is %d years old now.", charName, charAge);

    // stops the runs with exit code 0 (0x0 which mean a success)
    return 0;
}