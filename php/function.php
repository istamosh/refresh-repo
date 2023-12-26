<?php
    // create a function with arguments
    function hi($arg){
        echo "Bonjour, $arg. <br>";
    }

    // invoke/call function with params/arguments
    hi("Gideon");

    echo "<br>";

    // create a function with return value
    function multiply($a, $b){
        return $a * $b;
    }
    function cube($a){
        return pow($a, 3);
    }
    
    $el = 5;
    $er = 16;
    echo "$el x $er = ",multiply($el, $er),"<br>";
    $cube = 8;
    echo "Cube of $cube is = ",cube($cube),"<br>";
?>