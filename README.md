<style>
@font-face {
  font-family: "interFont";
  src: url("assets/fonts/Inter-VariableFont_slnt,wght.ttf") format("truetype");
  /* Add more src lines for other font file formats if necessary */
}

.interFontClass {
  font-family: "interFont", sans-serif;
}

body {
  font-family: "interFont", sans-serif;
}
</style>

<p class="interFontClass"></p>

## Gabe here, Hello :D
Back ache programmer primarily working on game systems.

⚡ Interesting Stuff: 
- Lorem 🖌🎨
- Ipsum 🏋️‍♀️ 💪

# 🏢 Experiences
| Roles | Company | Duration |
| --- | --- | --- |
| Tech Intern | [Nimbus Games](https://nimbusgames.dev/) | November 2022 - Present|

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

# Calculator

Welcome to the interactive calculator! This calculator allows you to perform basic arithmetic operations. Simply input the numbers and select the operation you want to perform.

## Usage

1. Enter the first number in the input field labeled "Number 1".
2. Enter the second number in the input field labeled "Number 2".
3. Select the desired operation from the dropdown menu.
4. Click the "Calculate" button to see the result.

## Calculator

Number 1: <input type="text" id="num1" />
Number 2: <input type="text" id="num2" />

Operation:
<select id="operation">
  <option value="addition">Addition (+)</option>
  <option value="subtraction">Subtraction (-)</option>
  <option value="multiplication">Multiplication (*)</option>
  <option value="division">Division (/)</option>
</select>

<button onclick="calculate()">Calculate</button>

Result: <span id="result"></span>

<script>
  function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    let result;

    switch (operation) {
      case 'addition':
        result = num1 + num2;
        break;
      case 'subtraction':
        result = num1 - num2;
        break;
      case 'multiplication':
        result = num1 * num2;
        break;
      case 'division':
        result = num1 / num2;
        break;
      default:
        result = 'Invalid operation';
        break;
    }

    document.getElementById('result').textContent = result;
  }
</script>

<!-- Here are some ideas to get you started: -->

<!-- ## More About Me
- ⚡ Fun fact: I can do all sports and i love it.
- 😄 Personalities: I'm an I/ENTJ 
 -->
<!-- - 🔭 I’m currently working on ...
- 🌱 I’m currently learning ...
- 👯 I’m looking to collaborate on ...
- 🤔 I’m looking for help with ...
- 💬 Ask me about ...
- 📫 How to reach me: ...
- 😄 Pronouns: ...
- ⚡ Fun fact: ... -->
