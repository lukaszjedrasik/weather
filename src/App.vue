<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import "assets/styles/main.scss";
  @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;500;700&display=swap');
  #app {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-family: 'Comfortaa', cursive;
    background-image: url("assets/images/backgroundImage.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
</style>
