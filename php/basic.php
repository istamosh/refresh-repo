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
    ?>
</body>
</html>