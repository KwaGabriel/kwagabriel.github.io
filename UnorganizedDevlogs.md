<head>
  <meta name="robots" content="index,follow" />
  <meta name="language" content="English" />
  <meta name="revisit-after" content="1 day" />
  <meta name="keywords" content="portfolio, gamedev, game, game dev, game development, gabriel kwa, gabrielkwa, kwagabriel, kwa gabriel, malaysia, programmer" />  
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="title" property="og:title" content="Gabe's Portfolio" />
  <meta name="type" property="og:type" content="website" />
  <meta name="url" property="og:url" content="https://kwagabriel.github.io" />
  <meta name="image" property="og:image" content="https://kwagabriel.github.io/assets/media/images/repository-open-graph-gabe.png" />
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

## **Enjoy your time here~ ☕**

## Table of contents

- ### [Intro](#gabes-portfolio)
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

<img class = "project-banner" src="assets/media/images/COL_banner.png"/>

# Welcome, to the Unorganised Devlogs

Here, I shall spill my knowledge on what I have learnt in development.

This is what i want to write about so far:
- ### String formatting for txts
Btw I was thinking about it and it might be good to sanitize the localization text's in general by doing something like:
s = s.TrimEnd('\r', '\n'); //or if using an array, use new[] {"/r/n", "/n/r", "/n", "/r"} or something.   
We can't do .Replace because it means we would lose formatting in the already processed localization strings if they have any e.g. a two line string would become a one line

- ### Float precision issues
Avoid using comparisons, instead use approximations (refer to epsilon on google), especially applies to the audio player implementation below. You could also use decimal data type, but decimals take up more space. 

- ### Audio player implementation
I'll just copy pasta, but basically a coroutine to check if the video is ended, and change the logo back

and also this logic:
REFER TO THAT ROGUE IMAGE FILE IN THIS DIRECTORY

- ### Vertical lines on fonts too thin looking, usually I/lowercase Ls
Adjust the dilate on the font if using TMP, this increases the thickness somewhat, which should solve this issue without making it too bold like if using the bold option

- ### Sprite scaling
Use sprite editor to edit borders for 9-slice scaling, so that corners stay consistent while the shape can stretch

- ### Array class to List\<Foo\> casting
So for example
```cs
Enum.GetValues(typeof(EnumFoo)).Cast<EnumFoo>().ToList();
```

Enum.GetValues return a Array class type, which you need to cast to type before ToList();

Otherwise, if Array holds a reference type, then you can just use the shortcut ToList\<Obj\>() instead.

- ### nameof()
nameof is very blunt, too blunt, it returns the immediate variable name fed into it, it doesnt care about the value at all. pls.

- ### Android low fps?
Try application.targetframerate or smtg, it should help. On PCs, this can be set either this way, or through vsync, read more in unitydocs for deets

- ### Multi-Object editing on editor scripts
Use targets with an 's', instead of target. Because target refers to the current most selected singular object. Then perform your operations there

- ### Override sprite?
Just a sprite option that when set to null, defaults to the .sprite instead

- ### Child constructors
```cs
class Bar   
Bar (var varName)

class Foo : Bar   
Foo (var x, var y) : base(x)
```
- ### c# const list?
    No. cannot. bahahahhaa

- ### search unity by file extension
    do glob:"Assets/**/*.mp3" lmao

- ### flash projects pixelart blurry?
    Show All, Quality set to low, removes aliasing

- ### Gamedev tip

    Try and make sure if there is already a function in the current implementation that you can make use of, overrides especially.
- ### Debug.Log slowing down the game?

    https://www.linkedin.com/posts/piotr-m-2a0427145_unitytips-unity3d-gamedev-activity-7152991757884940289-QRc9?utm_source=share&utm_medium=member_desktop

- ### Android ifdef
```cs
#if !(PLATFORM_ANDROID || UNITY_ANDROID) && !UNITY_EDITOR

    _content.SetActive(false);
#endif
```

NOTE TO SELF, UPLOAD GABEEXTENSIONS.cs eventually

> Hi
>> Yea?
> no.

<!-- Hey gabe, here's some help :D
    ## **big title**
    ## medium title
    ### subtitle

    - ### [Intro](#gabes-portfolio) //Hyperlinking
    # <a name="gabes-portfolio"></a> Socials and other links //Example of name

    ### [Devlog](EscRNG.md) //Hyperlinking to other pages

    //Below is hoverable img
    <img class = "project-media-img" src="assets/media/images/xxx.png"/>
    <p class = "project-media-imgtext">hover to enlarge</p>

    <div class = 'h3a-rightalign'></div> //the next line after this will be right aligned

    > :warning: **Warning:** Do not push the big red button. 
    formats above as a warning

    \t indentation, or just press tab, for a code block

    triple space to add newline as if shift+enter
 -->


---