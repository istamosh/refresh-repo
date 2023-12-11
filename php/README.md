# PHP section

Prerequisites for learning PHP:
- HTML

PHP Download:
- [Link to PHP site.](https://www.php.net/downloads.php) > download the .zip file (x86/x64 Thread Safe) and extract.
- Set environment path. Environment variables > system variables table > Choose Path > Edit > New > Browse > Locate php folder from .zip file
- Restart both VSCode and CMD
- Check on cmd: php -v

Extensions:
- Emmet Abbreviation (already built-in in VSCode)
- PHP Intelephense
- PHP Server (Right click on file choose "PHP Server: Serve project" for debug, refresh on browser to see changes)
- Live Server, both on VSCode and browser of choice (author: Ritwick Dey)

How to setup Live Server with PHP Server:
- Head to your PHP file, hit "Go Live" (or ALT+L, ALT+O) on bottom mid-right on VSCode. A new tab will appear.
- Right click (context menu) on your code, choose "PHP Server: Reload Server". A second new tab will appear.
- Go to desired browsers' Live Server extension
- Check "Live Reload" and "I don't want proxy setup (recommended)"
- Fill in actual server address as your working parent directory, by copying down the address on second new tab from earlier, then paste without the file name. (example when the full address is http://localhost:3000/var/www/index.php, delete the index.php, so the actual server address is http://localhost:3000/var/www)
- Fill the Live Server Address as the first tab full address (default is http://127.0.0.1:5500)
- Apply
- Check changes by using full address (like http://localhost:3000/var/www/index.php), then change your index.php code, save it, see if your browser auto-reload that triggers every time file is saved.
- Example: say if you want to check other codes inside "demo" folder with the name of "somethingGood.php", then change the Live address to "http://localhost:3000/var/www/demo/somethingGood.php".
- Once this instruction is worked, you just need to start the Live Server then PHP Server.

Emmet Abbrev. shortcut:
-- An autocomplete feature for HTML just like IntelliSense, write some keyword then emmet will suggest autocomplete code, execute with Tab

- html = HTML boilerplate code
- html:5 = HTML5 boilerplate code
- form = form tag
- form:get = form tag with method="get"
- form:post = form tag with method="post"
- br = single line break tag (<br>)
- input:t = create text box for input
- input:s = create submit button (value is for the button name)
- input:number = create text box for number input (built-in up down button)

Syntaxes:
- <?php ... ?> : insert php section under HTML boilerplate, all php code goes inside "..."
- $myName = "John Doe"; : declare a dynamic variable (using dollar sign)
- echo "html codes"; : invoke an html codes inside double ticks and display them in a page
- echo 4 + 2 * 3; : echo directly the answer, which is 10 (PEMDAS order)
- echo $_GET["something"]; : display value from passed element of "something"

Functions:
- strtoupper($myString) : change myString to all uppercase letter
- strtolower($myString) : change myString to all lowercase letter
- strlen($myString) : return the length of myString
- echo $myString[1]; : return the index 1 letter from myString
- $myString[0] = "B"; : change first letter (index 0) in myString to "B"
- str_replace(<string to replace>, <replace with>, $myString) : replace a part of string with new one in myString
- echo substr($myString, 12, 4); : substring technique, return the 4 letters after index 12 from myString (example: 'Universitas Indonesia' => 'Indo')
- echo abs(-19); : shows absolute value
- echo pow(2, 3); : shows power/exponent, 2 with the power of 3 is 8 (2x2x2)
- echo sqrt(100); : shows square root of 100
- echo round(3.33); : rounds to nearest integer, if its 3.5 and above will be rounded up to 4
- echo floor(3.6); : rounds down
- echo ceil(3.2); : rounds up
- isset($_GET["textBox"]) : check if array value inside textBox element array form is set and not empty