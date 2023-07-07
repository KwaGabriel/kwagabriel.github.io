<link rel="stylesheet" href="assets/css/style.css"/>
<link rel="shortcut icon" type="image/png" href="{{ '/assets/media/images/favicon.png' | absolute_url }}">

<head>
      <meta property="og:image" content={/assets/media/images/repository-open-graph-gabe} />
      <meta name="og:image" content={/assets/media/images/repository-open-graph-gabe} />
</head>



<!--- UI -->
<div class = "left_banner"></div>
<div class = "right_banner"></div>

<!--- Directory --->
<div id="dragged">
<div id="draggable" >Drag me</div>
<div markdown = "1">

## Table of contents

- ### [Intro](#gabes-portfolio)

- ### [Education](#section-education)

- ### [Experience](#section-experience)

- ### [Programming language](#section-programminglanguage)

- ### [Game Projects](#section-gameprojects)

- ### [Socials and other links](#section-socialsandotherlinks)

</div>
</div>

<div markdown ="0"></div>

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

<div class="videobanner-container">
  <video class="videobanner-player" src="assets/media/videos/banner.mp4" type="video/mp4" autoplay loop muted></video>
</div>

# Gabe’s Portfolio

## I am Gabriel,

a game dev from UOWM KDU.

I have been acquainted with Unity throughout my course completing solo and team projects alike. For my final year project, I was part of Studio Reroll that made Esc:RNG as a general game programmer.
I have also been doing UE related projects during my internship at Nimbus Games.
Please drop me an email if there are any questions or for further discussion, I look forward to hearing from you!

<div class = 'h3a-rightalign'></div>

### [View my resume here](assets/documents/ResumeCV.pdf)

<div class = 'h3a-rightalign'></div>

### [View socials and other links](#socials-and-other-links)


# <a name="section-education"></a> Education

## University of Wollongong Malaysia KDU

Bachelor of Games Development (Hons) - Game Tech | CGPA 3.8


# <a name="section-experience"></a> Experience

## [Nimbus Games](https://nimbusgames.dev/)

Intern Game Programmer | Nov 2022 - May 2023

# <a name="section-programminglanguage"></a> Programming language

## Proficiency in descending order

- C++
- C#
- Java
- Python
- Js + HTML + CSS



# <a name="section-gameprojects"></a> Game Projects

<img class = "project-thumbnail" src="assets/media/images/ESC_4x3.png"/>

<div class = "project-paragraph" markdown = "1">

- ## Esc:RNG

is a 2D pixel roguelike shooter where a group of gacha game players left poor reviews of a gacha game, which caused the developers to trap them inside the game to witness their suffering. In a game universe made by egoistic, incompetent, magic-wielding developers, the players will have to find their way out to return to their normal world by fighting enemies in the buggy game.

<div class = 'h3a-rightalign'></div>

### [Devlog](EscRNG.md)

### Category

PC, Group Project, Unity, FYP, 2022

</div>

<img class = "project-thumbnail" src="assets/media/images/FAC_4x3.png"/>

<div class = "project-paragraph" markdown = "1">

- ## Façade: Murder at the Masquerade

is a 3D point-and-click murder mystery where no one is to be trusted. A murder has occurred at the Maximillian Mansion! As the local detective, the player investigates the murder at the mansion in a point-and-click puzzle game. Players would investigate the mansion for clues and interrogate suspects to uncover the truth behind the mansion owner’s death.

<div class = 'h3a-rightalign'></div>

### [Devlog](Facade.md)

### Category

Android, Group Project, Unity, 2022

</div>

<div class = "project-paragraph" markdown = "1">

<img class = "project-thumbnail" src="assets/media/images/COL_4x3.png"/>

- ## Coal Call

is a roguelike deck-builder game, strategize the use of Empowerment during battles, gain card rewards and coal by defeating monsters and discover new locations and events as you continue your search for coal in a land swept by eternal winter.

<div class = 'h3a-rightalign'></div>

### [Devlog](CoalCall.md)

### Category

PC, Group Project, Unity, 2021

</div>

<div class = "project-paragraph" markdown = "1">

- ## Stance Stance Revolution

is a mobile game exercise integrating Firebase to allow for user credential registration, login, and a competitive leaderboard in this souls-inspired dodging game.

<div class = 'h3a-rightalign'></div>

### [Devlog is Archived]()

### Category

Android, Solo Project, Unity, 2021

</div>

<div class = "project-paragraph" markdown = "1">

- ## Parkor Knihgt

is an endless runner where you play as a knight-dude in shining armour running through a hazardous collapsing valley, parkour over obstacles to earn extra points, which can be used to learn more parkour actions, to earn more points. Earn the most points before succumbing to your mistakes.

<div class = 'h3a-rightalign'></div>

### [Devlog is Archived]()

### Category

Android, Solo Project, Unity, 2021

</div>

<div class = "project-paragraph" markdown = "1">

- ## Honster Munter

is a text-input RPG with ascii GUI, where you play one of three monsters, getting your revenge on hunters overstepping their bounds in nature. Explore the world, fight hunters in a turn based battle, learn skills, use items and defeat the hunter’s guild to avenge your fallen kin.

<div class = 'h3a-rightalign'></div>

### [Devlog is Archived]()

### Category

Console App, Solo Project, Unity, 2020

</div>

<div class = "project-paragraph" markdown = "1">

- ## Neon Adderall

is a PC typing game. Earn the most points possible while maintaining the highest WPM to increase your point multiplier.

<div class = 'h3a-rightalign'></div>

### [Devlog is Archived]()

### Category

PC, Solo Project, Unity, 2020

</div>

<img class = "project-thumbnail" src="assets/media/images/NCG_4x3.png"/>

<div class = "project-paragraph" markdown = "1">

- ## Neon Cigarette

is a platformer set in a cliche cyberpunk setting, you wake up in a cigarette factory with no recollection of how you got there. Make use of items you obtain throughout the locale to fight and platform your way out of the bad guy ridden factory.

<div class = 'h3a-rightalign'></div>

### [Devlog is Archived]()

### Category

Flash, Solo Project, Stencyl, 2020

</div>

<img class = "project-thumbnail" src="assets/media/images/CYP_4x3.png"/>

<div class = "project-paragraph" markdown = "1">

- ## Cyberponk 2001

is a pong game with character selection and powerups, featuring PVP and PVC game modes.

<div class = 'h3a-rightalign'></div>

### [Devlog is Archived]()

### Category

Flash, Solo Project, Stencyl, 2020

</div>

<div class = "project-paragraph" markdown = "1">

- ## Taste Buds

is a tabletop card game where you compete against other players by serving up one of many dishes based on what ingredients are available to you. The more complex the dish, the more points earned.

<div class = 'h3a-rightalign'></div>

### [Devlog is Archived]()

### Category

Tabletop, Group Project, 2020

</div>

# <a name="section-socialsandotherlinks"></a> Socials and other links

<!-- - ### [Esc:RNG](EscRNG.md)
    
- ### [Façade: Murder at the Masquerade](Facade.md)
    
- ### [Coal Call](CoalCall.md) -->

- ### [Click to view my resume here](assets/documents/ResumeCV.pdf)

- ### [LinkedIn page](https://www.linkedin.com/in/gabrielkwa)

- ### [itch.io page](https://rendexe.itch.io)

- ### [Send me an email here](mailto:kwagabriel011206@gmail.com)

---
<div class="loading-bg">
  <div class="loader">
    <div class="loader-text"></div>
  </div>
</div>
