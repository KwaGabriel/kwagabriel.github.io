<link rel="stylesheet" href="assets/css/style.css"/>

<div class = "left_banner"></div>
<div class = "right_banner"></div>


<!--- Directory --->
<div id="dragged" class="dragged-gamedoc-version" markdown = "1">
  <div id="draggable">Drag me</div>

## [Back to home page](index.md)

or check out the game below!

<iframe allow="autoplay" src="https://itch.io/embed/1491579?border_width=0&amp;dark=true" width="550" height="165" frameborder="0"><a href="https://uowmgames.itch.io/escrng">Esc:RNG by UOWM Game Development</a></iframe>
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

<img class = "project-banner" src="assets/media/images/ESC_banner.png"/>

# Esc:RNG

is a 2D pixel roguelike shooter where a group of gacha game players left poor reviews of a gacha game, which caused the developers to trap them inside the game to witness their suffering. In a game universe made by egoistic, incompetent, magic-wielding developers, the players will have to find their way out to return to their normal world by fighting enemies in the buggy game.

### Category

PC, Group Project, Unity, FYP, 2022

## **My Contributions**

For Esc:RNG, I was in charge of being a gameplay and game systems programmer.

The team came to an agreement that our project required lots of repetitive work after the game systems were built, therefore I made in-editor tools for this project for the designers to tweak to their needs.

## Procedural Dungeon asset tool

<img class = "project-media-img" src="assets/media/images/ESC_editor_genmanager.png"/>
<p class = "project-media-imgtext">hover to enlarge</p>

One of the tools was for Zelda-style procedural dungeon generation.

<img class = "project-media-img" src="assets/media/images/ESC_editor_roommanager_overview.png"/>
<p class = "project-media-imgtext">hover to enlarge</p>

It uses the built-in tilemap from Unity and allows for parameter tweaking. It allows the designers to make, save, and define generation rules for the room when the game generates the dungeons.

## Other tools

Aside from that, a tool was also made for weapon gacha and weapon crafting rules.

<img class = "project-media-img" src="assets/media/images/ESC_editor_gachapull.png"/>
<p class = "project-media-imgtext">hover to enlarge</p>

I made the tools based on requirements from the game design document while making use of scriptable objects.

<img class = "project-media-img" src="assets/media/images/ESC_editor_scriptobj_weapontraitsandtype.png"/>
<p class = "project-media-imgtext">hover to enlarge</p>

While unpublished, there was also a UnityEvents system tool integrating scriptable objects, this was planned to be used should development of the game continue past the required assignment.

<img class = "project-media-img" src="assets/media/images/ESC_editor_tutorialmanager.png"/>
<p class = "project-media-imgtext">hover to enlarge</p>

## Other Contributions

Other things I contributed were keybinding settings using JSON, as well as modifying the plugin scripts used, to suit our use case.

---