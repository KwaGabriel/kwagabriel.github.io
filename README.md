<p onLoad="applyFont()">TITLE</p>

<style>
@font-face {
  font-family: "interFont";
  src: url("assets/fonts/Inter-VariableFont_slnt,wght.ttf") format("truetype");
  /* Add more src lines for other font file formats if necessary */
}

@font-face {
  font-family: "cinefontFont";
  src: url("assets/fonts/cinecaption226.ttf") format("truetype");
}

.interFontClass {
  font-family: "interFont", sans-serif;
}

.cinefontFontClass {
  font-family: "cinefontFont", sans-serif;
}
</style>

Font:
<select id="fontId">
  <option value="fontId_Cinefont" onclick="applyFont()">Cinefont</option>
  <option value="fontId_Inter" onclick="applyFont()">Inter</option>
</select>

<script>
  function applyFont() {
    const fontId = document.getElementById('fontId').value;
    let fontVar;

    switch (fontId) {
      case 'fontId_Cinefont':
      fontVar = "cinefontFontClass";
        break;
		
      case 'fontId_Inter':
      fontVar = "interFontClass";
        break;
        
      default:
      fontVar = "interFontClass";
        break;
    }

    document.getElementById("demo").className = fontVar;
  }
</script>

<p id="demo">testor</p>

## Gabe here, Hello :D
Back ache programmer primarily working on game systems.

⚡ Interesting Stuff: 
- Lorem 🖌🎨
- Ipsum 🏋️‍♀️ 💪

# 🏢 Experiences
| Roles | Company | Duration |<br>
| --- | --- | --- |<br>
| Tech Intern | [Nimbus Games](https://nimbusgames.dev/) | November 2022 - Present|<br>

### Programming Languages (proficiency in descending order)
 ![C++](https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white)
 ![C#](https://img.shields.io/badge/C%23-00599C?style=for-the-badge&logo=csharp&logoColor=white)
 ![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white)
 ![Python](https://img.shields.io/badge/Python-14354C?style=for-the-badge&logo=python&logoColor=white)

### Tools
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase)

 
# My Github Stats & Social Media
![Github Stats](https://github-readme-stats.vercel.app/api?username=kwagabriel&theme=tokyonight&show_icons=true&hide_border=true&include_all_commits=true&count_private=true&hide=contribs)
![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=kwagabriel&layout=compact&theme=tokyonight&show_icons=true&hide=html,scss,css&hide_border=true&card_width=240)

![Visitor Badge](https://visitor-badge.laobi.icu/badge?page_id=kwagabriel)

<div>
  <p align = "center">
<a href="https://www.linkedin.com/in/gabrielkwa" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"></a>
  </p>
</div>
