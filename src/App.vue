<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="header-inner">
      <RouterLink to="/">
        <p class="header__logo">
          <img class="header__logo__img" alt="Vue logo" src="@/assets/logo.svg" width="125" height="125" />
          <span class="header__logo__txt">Vue Project</span>
        </p>
      </RouterLink>
      <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/feature-higambana">彼岸花特集</RouterLink>
          <RouterLink to="/feature-sakura">桜特集</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  width: 100%;
  padding-block: 20px;
  background: #fff;
  border-bottom: 1px solid #ccc;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 999;
}
.header-inner {
  display: flex;
  justify-content: space-between;
  max-width: 1024px;
  margin-inline: auto;
}
.header__logo {
  display: flex;
  align-items: center;
  gap: 8px;
    img {
    width: 20px;
    height: 20px;
  }
}
a {
  position: relative;
  color: #464646;
  text-decoration: none;
  &:hover {
    background: none;
  }
}
nav {
  display: flex;
  gap: 16px;
  a {
  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    scale: 0 1;
    background: #464646;
    transition: .2s;
  }
  &:hover {
    background: none;
      &::after {
        scale: 1 1;
      }
    }
  }
}
</style>
