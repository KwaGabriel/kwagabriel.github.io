<head>
  <meta name="robots" content="index,follow" />
  <meta name="language" content="English" />
  <meta name="revisit-after" content="1 day" />
  <meta name="keywords" content="portfolio, gamedev, game, game dev, game development, gabriel kwa, gabrielkwa, kwagabriel, kwa gabriel, malaysia, programmer" />  
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="title" property="og:title" content="Gabe's Portfolio" />
  <meta name="type" property="og:type" content="website" />
  <meta name="url" property="og:url" content="https://kwagabriel.github.io" />
  <meta name="image" property="og:image" content="https://kwagabriel.github.io/assets/media/images/badge.png" />
  <meta name="author" content="Gabriel Kwa" />
  <meta name="description" property="og:description" content="Check out my works on game systems design and implementation here." />
  <link rel="stylesheet" href="assets/css/style.css" />
  <link rel="shortcut icon" type="image/png" href="{{ 'assets/media/images/favicon.png' | absolute_url }}" />
  <link rel="shortcut icon" type="image/x-icon" href="assets/media/images/favicon.png" />
  <link rel="icon" type="image/png" href="{{ 'assets/media/images/favicon.png' | absolute_url }}" />
  <link rel="icon" type="image/x-icon" href="assets/media/images/favicon.png" />
</head>

<div class = "left_banner"></div>
<div class = "right_banner"></div>


<!--- Directory --->
<div id="dragged" class="dragged-gamedoc-version" markdown = "1">
  <div id="draggable">Drag me</div>

## [Back to home page](index.md)

Take it easy, lets just chill here :D

</div>

<script>
        // Make the DIV element draggable:
        dragElement(document.getElementById("dragged"));

        function dragElement(elmnt) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        if (document.getElementById("draggable")) {
            // if present, the header is where you move the DIV from:
            document.getElementById("draggable").onmousedown = dragMouseDown;
        } else {
            // otherwise, move the DIV from anywhere inside the DIV:
            elmnt.onmousedown = dragMouseDown;
        }

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            // get the mouse cursor position at startup:
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            // call a function whenever the cursor moves:
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            // calculate the new cursor position:
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            // set the element's new position:
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }

        function closeDragElement() {
            // stop moving when mouse button is released:
            document.onmouseup = null;
            document.onmousemove = null;
        }
        }
</script>
# XR Multiplayer 3D Drawing app

<!-- <div style="text-align:center">
    <iframe mozallowfullscreen="true" allow="autoplay; fullscreen; geolocation; microphone; camera; midi" src="https://kwagabriel.github.io/assets/game/ReLanTest/index.html" style="border:0px #161616 none;" name="Lan Test Pong" scrolling="no" msallowfullscreen="true" allowfullscreen="true" webkitallowfullscreen="true" allowtransparency="true" frameborder="0" marginheight="0px" marginwidth="0px" height="750px" width="100%" style="width: 100%; height: 750px; cursor: default;"></iframe>
</div> -->

I made a 3D drawing app with cross-play (kinda) that can handle up to 4 players (+1 Host Device).   
Use your client devices to draw in 3D space and see the artwork on the host device.   

### Tech used:   
- Unity Transport 
- Google ARKit
- ZXing   
   
### Requirements:   
- Client devices need a camera, magnetometer, gyro and accelerometer.
- Devices must be connected on the same network, its a LAN "game".
- Lighting must be adequate for good tracking   


<div class = 'h3a-rightalign'></div>

### [Download APK here](https://kwagabriel.github.io/assets/game/NetworkPlayground/Android_XRDrawing_ver43.apk)

<div class = 'h3a-rightalign'></div>

### [Download PC Host here](https://kwagabriel.github.io/assets/game/NetworkPlayground/PC_XRDrawing_ver43.rar)

## How to Play
1. Install and launch the app/program.
2. Select [Host] to start a room instance on any device (Ideally one that isn't moving)   
3. Select [Client] on another device to connect to the host by either:   
   - Typing in the Host's IP (Displayed on screen)
   - Scan the QR Code by pressing the QR icon   

4. You should now see a little head pop up in the room.   
5. Stand the centre of an unobstructed area and face the host device   
6. Bring your device close to your body's torso and hit [Centre]   
7. Without moving, bring your device in front of you at about an arm's length away from your body and hit [Far]   
8. Hit [Calculate] to calculate the player position   
9. Hit [Offset] to reset your position to the middle of the room

## Invite more players
- Select the [JOIN QR] button on the Host Device and follow the instructions above.

## Drawing
- Press and hold [Draw] to draw a line, try moving your device and see it draw in real time.   
- Press and hold [Erase] to erase a line by colliding your player head with the line you want to erase   
- Press [Clear] on the host device to clear all lines.   
   
      
         



## Unrelated but here's my favourite song.   

<div style="text-align:center">
    <iframe width="610" height="360" src="https://www.youtube.com/embed/KWCX4YfxlP0" title="Ibara" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>