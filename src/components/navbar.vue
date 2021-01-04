<template>
  <div class=" navigation">
    <input type="checkbox" class="navigation__checkbox" id="navi-toggle" />
    <label for="navi-toggle" class="navigation__button">
      <span class="navigation__icon">&nbsp;</span>
    </label>
    <div class="navigation__background">&nbsp;</div>
    <nav class="navigation__nav">
      <h1 class="title-header1">Kusum <br />Ghimire</h1>
      <ul class="navigation__list">
        <li class="navigation__item">
            <router-link to="/">
              Home
            </router-link>
        </li>
        <li class="navigation__item">
          <a href="#" class="navigation__link">Contact</a>
        </li>
        <li class="navigation__item">
          <!-- <a href="Kusum-Resume.pdf" class="navigation__link" download>Download CV</a> -->
        </li>
      </ul>
    </nav>
  </div>
</template>
