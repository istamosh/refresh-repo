<?php
    // storing strings inside an array
    $myFriends = array("Agra", "Keys", "Emex", "Mint");

    // access one of the element
    echo $myFriends[1], "<br>";

    // display the full array structure
    print_r($myFriends); echo "<br><br>";

    // array is mutable (can be modified)
    $myFriends[1] = "Nara";
    print_r($myFriends); echo "<br>";
    echo $myFriends[1], "<br><br>";

    // can be added beyond the indexes
    $myFriends[10] = "Rize";
    print_r($myFriends); echo "<br>";
    echo $myFriends[10], "<br>";
    echo "Total elements: ",count($myFriends), "<br>";
?>