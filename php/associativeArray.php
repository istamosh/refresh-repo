<?php
    // using key value pair (key => value)
    // key must be unique from one another
    $grades = array(
        "Agra" => 95, 
        "Keys" => 40, 
        "Emex" => 45, 
        "Mint" => 100, 
        "Rize" => 35);
    
    echo "Original Emex's Grade: ", $grades["Emex"], "<br>";

    // alter the grade
    $grades["Emex"] = 60;
    echo "Altered Emex's Grade: ", $grades["Emex"], "<br><br>";

    // get and display the names only
    echo "Registered Student List:<br>";
    
    foreach ($grades as $key => $value):
        echo "- $key<br>";
    endforeach;
    echo "<br>";
?>

<form action="associativeArray.php" method="post">
        Enter student name (case sensitive): <input type="text" name="textBox" id=""> <br>
        <input type="submit" value="Query"> <br>
</form>
<?php
    // check if box is not empty, then check if query is exist on list
    if (isset($_POST["textBox"])):
        if (array_key_exists($_POST["textBox"], $grades)):
            echo $grades[$_POST["textBox"]];
        else:
            echo "Student is not registered.";
        endif;
    else:
        echo "-";
    endif;
    echo "<br><br>";
?>