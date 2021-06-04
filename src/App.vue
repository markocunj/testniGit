<template>
  <div id="app">
    <div id="nav" style="text-justify: center">
      <router-link to="/">Form Builder</router-link> |
      <router-link to="/ExampleFormRenderer">Chosen forms</router-link> |
      <router-link to="/PremadeForm">Form premade example</router-link>
    </div>
    <main class="App__main">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </main>
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
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
