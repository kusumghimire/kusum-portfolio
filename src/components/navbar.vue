<template>
  <div class="navigation">
    <input type="checkbox" class="navigation__checkbox" id="navi-toggle" />
    <label for="navi-toggle" class="navigation__button">
      <span class="navigation__icon">&nbsp;</span>
    </label>
    <div class="navigation__background">&nbsp;</div>
    <nav class="navigation__nav">
      <h1 class="title-header1">Kusum <br />Ghimire</h1>
      <ul class="navigation__list">
        <li class="navigation__item">
          <router-link to="/" class="navigation__link"> Home </router-link>
        </li>
        <li class="navigation__item">
          <router-link to="/about" class="navigation__link">
            Contact
          </router-link>
        </li>
        <li class="navigation__item">
          <a href="https://docs.google.com/document/d/1KQJDU_8kGWH5dJ8TyW6UAGe4kOXH5XyAn_Ze0ny6rmU/edit?usp=sharing" class="navigation__link" download>Download CV</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
// $(document).on('click', '[download]', function (e) {
//     e.preventDefault();
//     download($(this).attr('href'));
// });
</script>