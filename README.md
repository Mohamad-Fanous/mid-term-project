How to open on mobile : 
-----------------------
through vs code , run the main webpage  ( Open with live server ) , then open cmd , type : ipconfig      
then copy the IPv4 address , and replace the website IP with the IPv4  , and have the phone connected to the same network as the laptop/pc and run the same link on mobile : 

example : 
----------
Website id ( link ) : http://127.0.0.1:5500/frontpage.html
to open on mobile : http://192.168.8.100:5500/frontpage.html     ( users IPv4 : 192.168.8.100   instead of 127.0.0.1  ) 









Current functions : 
---------------------
pressing the logo at the top left scrolls back to the top of the page
scroll down button brings the user down to the story and info section

Login and registration , fully functional , information gets stored in local storage  : ( inspect - application - local storage ) 

contact us section sends the user to a webpage where he can find the email , phone number and location of the restaurant and its branches; and they can leave a message or a complaint. ( submit function still not implemented , it gives an error ) , and the user can click on the branches location which would redirect them to google maps with the pinned location of the restaurant ( fake locations used for examples only ) 

a read more button for the story section so it doesn't crowd the webpage on mobile screens

clicking the icon next to the login button will open a shortcut tab ( no function as of currently ) 

clicking the reservation section will replace the tab with a small section that asks for the reservation info ( name , date , table , amount of people ) ( no submit function as of now ) 

clicking the follow us section will pop up 3 links ( facebook , Instagram , twitter ) ( for now the link just lead to the base application webpage since the restaurant isn't real ) 

cliking the " our menu " section will pop up the image of the menu where the user can check out the items available

the main starting page has 5 photos that cycle automatically 

Mobile phone adaptation + desktop minimize adaptation
