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
</body>
</html>