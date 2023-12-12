<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Forms!</title>
</head>
<body>
    <?php ?>

    <form action="form.php" method="get">
        Name: <br>
        <input type="text" name="textBoxName" id=""> <br>
        Age: <br>
        <input type="number" name="textBoxAge" id=""> <br>
        <input type="submit" value="Submit">
    </form>

    <br>

    <?php
        // handle if the input boxes are not empty, shows value
        if(isset($_GET["textBoxName"]) && isset($_GET["textBoxAge"])):
            echo "Name input is ",$_GET["textBoxName"],"<br>";
            echo "Age input is ",$_GET["textBoxAge"],"<br>";
        endif;
    ?>

    <form action="form.php" method="get">
        Addition calculator <br>
        <input type="number" name="numBox1" id=""> <br>
        <input type="number" name="numBox2" id="">
        <input type="submit" value="Calculate!"> <br>
    </form>

    <?php
        if(isset($_GET["numBox1"]) && isset($_GET["numBox2"])):
            echo "Answer= ",$_GET["numBox1"]+$_GET["numBox2"],"<br>";
            echo "<br>";
        endif;
    ?>

    <br>

    <form action="form.php" method="get">
        Mad Lib Game <br>
        Color: <input type="text" name="color" id=""> <br>
        Plural Noun: <input type="text" name="pluralNoun" id=""> <br>
        Celebrity: <input type="text" name="celebrity" id=""> <br>
        <input type="submit" value="Play!">
    </form>

    <?php
        $color = $_GET["color"];
        $pluralNoun = $_GET["pluralNoun"];
        $celebrity = $_GET["celebrity"];

        if (empty($color) || empty($pluralNoun) || empty($celebrity)):
            echo "Roses are _____ <br>";
            echo "_____ are blue <br>";
            echo "I am _____ <br>";
            echo "and I will find you <br>";
        else:
            echo "Roses are $color <br>";
            echo "$pluralNoun are blue <br>";
            echo "I am $celebrity <br>";
            echo "and I will find you <br>";
        endif;
    ?>
</body>
</html>