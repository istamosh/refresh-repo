<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Learn the Basics!</title>
</head>
<body>
    <!-- PHP Section -->
    <?php
        // using inline HTML
        echo "<h1>My tiny PHP site</h1>";
        echo "<hr>";
        echo "<p>First paragraph comes here.</p><br>";

        // declaring a variables
        $characterName = "John Doe";
        $characterAge = 27;
        
        echo "There once was a man named $characterName <br>";
        echo "He was $characterAge years old. <br>";

        // changing the same variable midway
        $characterName = "Mike Burgowski";
        $characterAge = 40;

        echo "He really liked the name $characterName <br>";
        echo "But didn't like being $characterAge years old. <br>";

        // declaring more types of vars.
        $myBool = false;
        $myGpa = 3.25;
        $myString = "hehe";

        // display value directly from a variable
        echo "<br>";
        echo $myGpa; echo "<br>";

        // display string in lower and uppercase function
        echo "<br>";
        $mixedCase = "hEhEeHeeHEh";
        echo $mixedCase; echo "<br>";
        echo "uppercased: ",strtoupper($mixedCase); echo "<br>";
        echo "lowercased: ",strtolower($mixedCase); echo "<br>";
        echo strtolower("This Is A Word"); echo "<br>";
        
        // display the char. length of a string variable
        echo "length: ",strlen($mixedCase); echo "<br>";

        // get character index in variable
        $i = 1;
        echo "char. index ",$i," is: ",$mixedCase[$i]; echo "<br>";
    
        // change first letter to B
        $mixedCase[0] = "B";
        echo $mixedCase; echo "<br><br>";

        // find and replace certain characters function
        $univName = "Universitas Indonesia";
        echo str_replace("Universitas", "University of", $univName); echo "<br><br>";
    
        // using substring function, 12 is the starting point index
        echo substr($univName, 12); echo "<br>";
        // grab 4 characters length, starting from index 12
        echo substr($univName, 12, 4); echo "<br><br>";
    
        // will printout the answer directly
        echo 5 + 9; echo "<br>";
        echo 5.7 * 9; echo "<br>";
        echo 10 % 3; echo "<br><br>";

        // PHP uses PEMDAS order of operations
        echo 4 + 10 * 5 / 2 - 3; echo "<br><br>";

        // integer variable manipulation
        $aNumber = 9;
        $aNumber++;
        echo $aNumber; echo "<br>";
        $aNumber - 5;
        echo $aNumber; echo "<br><br>";

        // using absolute function
        echo abs(-19); echo "<br><br>";

        // using power
        echo pow(2, 3); echo "<br><br>";

        // using square root
        echo sqrt(100); echo "<br><br>";

        // using round, floor, and ceil
        $myFloatNum = 3.5;
        echo "original number: $myFloatNum <br>";
        echo round($myFloatNum),", ",floor($myFloatNum),", ",ceil($myFloatNum); echo "<br><br>";
    ?>
</body>
</html>