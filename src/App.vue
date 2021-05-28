<template>
  <div id="app">
    <div id="nav" style="text-justify: center">
      <router-link to="/">Form Builder</router-link> |
      <router-link to="/ExampleFormRenderer">Form you choose</router-link> |
      <router-link to="/PremadeForm">Form premade example</router-link>
    </div>
    <router-view />
  </div>
</template>

<script></script>

<style lang="scss">
#nav {
  padding: 30px;
  text-align: center;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #7e92d6;
    }
  }
}
</style>
