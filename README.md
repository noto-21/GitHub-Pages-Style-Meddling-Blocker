# GitHub-Pages-Style-Meddling-Blocker
This JS file prevents unwanted style-element injections in HTML source files, preserving existing styles. It ensures that the original formatting is not compromised by preventing interference from injected style elements on sites hosted using GitHub Pages.

You can integrate this into an HTML/PHP doc via <a href="https://www.jsdelivr.com/"><img src="https://img.shields.io/badge/-jsDelivr-%23F4802C?style=plastic&labelColor=white&logo=jsdelivr&logoColor=black"></a>. Create a script element with a 'src' attribute followed by this link: https://cdn.jsdelivr.net/gh/noto-21/GitHub-Pages-Style-Meddling-Blocker@main/GPIBlock.js at the bottom of the 'head' element in your doc.

e.g.,

```
<head>
  (Your HTML Here)
  <script src="//cdn.jsdelivr.net/gh/noto-21/GitHub-Pages-Style-Meddling-Blocker/GPIBlock.js"></script>
</head>
```
