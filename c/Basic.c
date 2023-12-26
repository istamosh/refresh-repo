#include <stdio.h> //printf, scanf, fgets
#include <math.h> //pow, sqrt, floor, ceil

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
    printf("%s is %d years old now.\n", charName, charAge);

    // using placeholder with direct values
    printf("%s age is %d.\n", "Mark Wahlberg", 38);

    // double precision floating point will be rounded
    double phi = 3.14159265358979323846;
    printf("%s is %f.\n", "Phi", phi);

    // you can do float operation into double precision
    printf("%f\n", 5 / 0.5);
    int twelve = 12;
    float half = 0.5;
    printf("%f\n", twelve * half);

    // using power function (exponent)
    printf("%f\n", pow(2, 3));

    // square root
    printf("%f\n", sqrt(81));

    // ceiling and floor
    printf("%f and %f\n", ceil(24.5), floor (24.5));

    /*
    comment block
    */

    // constant/unchangeable var.
    const int EIGHT = 8;
    printf("this number is constant: %d.\n", EIGHT);

    // accepts user input as int
    int age;
    printf("Enter your year of birth: ");
    scanf("%d", &age);
    printf("%d is your year of birth.\n", age);

    // simple addition calculator
    double num1, num2;
    printf("Enter first number: ");
    scanf("%lf", &num1);
    printf("Enter second number: ");
    scanf("%lf", &num2);
    printf("%f + %f = %f\n", num1, num2, num1 + num2);

    // stops the runs with exit code 0 (0x0 which mean a success)
    return 0;
}