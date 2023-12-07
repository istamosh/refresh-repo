# C Language Readme:

Environment:
- Visual Studio Code Extension: C/C++ (Microsoft), Code Runner (Jun Han)
- MINGW (for running the file, gcc, add to PATH) https://sourceforge.net/projects/mingw/
- Code Runner: Change running code (CTRL+ALT+N) from Output tab to Terminal in VSCode: Settings (CTRL+,) > In search box fill "code-runner.runInTerminal" > Check

Shortcut:
- CTRL + ALT + N : Run the code
- CTRL + ALT + M : Stop running code

Functions:
- printf("Hello"); : print a text on screen
- pow(5, 2); : power (exponent), 5 with the power of 2 (=25).
- sqrt(36); : square root of 36 (=6)
- ceil(39.1); : round the number up (40)
- floor(51.9); : round the number down (51)
- scanf("%d", &myInt); : provide user input with a placeholder and the pointer (ampersand sign) where the input will be stored and used for replacing the placeholder, the input stops after space character (" ").
- fgets(myString, 20, stdin); : catch all characters input as string including space and enter (new line) character with 20 characters limit with standard input, be careful that fgets doesn't work well with scanf in the same codespace, scanf will skips fgets inputs.

Variable Declaration:
- char myGrade = "B"; : single string variable.
- char myString[] = "test"; : string variable (notice the array).
- char string[20] = "test"; : string var. with max of 20 characters.
- int myAge = 20; : integer variable
- double myGpa = 3.0; : double precision floating number variable
- const float PHI = 3.14; : constant number

String special characters:
- \n : new line
- \" : render the double-quotation mark into the screen (not as string closing).
- %s : placeholder for string variable (will be replaced with assigned string)
- %d : integer placeholder
- %f : floating point placeholder
- %lf : float placeholder for scanf only
- %c : single character placeholder

More explanation:
- printf variable placeholder must be ordered otherwise it would not print properly. (printf("%s %d", string, int);)
- variable placeholder can be replaced using direct value underneath. (printf("%s, age %d.", "John Doe", 30);)