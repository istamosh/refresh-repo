<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Lovely PHP Page</title>
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
        echo $mixedCase; echo "<br>"; echo "<br>";

        // find and replace certain characters function
        $univName = "Universitas Indonesia";
        echo str_replace("Universitas", "University of", $univName); echo "<br>"; echo "<br>";
    
        // using substring function, 12 is the starting point index
        echo substr($univName, 12); echo "<br>";
        // grab 4 characters length, starting from index 12
        echo substr($univName, 12, 4); echo "<br>"; echo "<br>";
    ?>
</body>
</html>