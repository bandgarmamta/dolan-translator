<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Banana Talk</title>
  <link href="styles.css" rel="stylesheet" />
</head>

<body>
  <nav class="navigation container">
    <div class="nav-brand">Banana Translator</div>
  </nav>
  <div class="main">
    <header class="hero">
      <img class="hero-img" src="/images/dolanduck.jpg" />
    </header>

    <textarea class="input-text" id="txt-input" placeholder="enter text to convert to banana language"></textarea>
    <button class="translate-button" id="btn-translate">Translate</button>
    <div class="output">Your translation will come here 👇</div>
    <div id="output"></div>
  </div>

  <footer class="footer">
    <div class="footer-heading">connect with me on</div>
    <ul class="social-links list-non-bullet">
      <li class="list-item-inline">
        <a class="link" href="https://github.com/bandgarmamta">GitHub</a>
      </li>
      <li class="list-item-inline">
        <a class="link" href="https://www.linkedin.com/in/mamtabandgar/">LinkedIn</a>
      </li>
      <li class="list-item-inline">
        <a class="link" href="/">Twitter</a>
      </li>
    </ul>
  </footer>
  <script src="app.js" type="text/javascript"></script>
</body>

</html>