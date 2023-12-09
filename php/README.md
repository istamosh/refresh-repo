# PHP section

PHP Download:
- [Link to PHP site.](https://www.php.net/downloads.php) > download the .zip file (x86/x64 Thread Safe) and extract.
- Set environment path. Environment variables > system variables table > Choose Path > Edit > New > Browse > Locate php folder from .zip file
- Restart both VSCode and CMD
- Check on cmd: php -v

Extensions:
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

Syntaxes:
- <?php ... ?> : insert php section under HTML boilerplate, all php code goes inside "..."
- $myName = "John Doe"; : declare a dynamic variable (using dollar sign)
- echo "html codes"; : invoke an html codes inside double ticks and display them in a page