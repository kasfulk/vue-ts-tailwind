<template>
  <div id="nav" class="flex p-3 justify-center bg-green-500 shadow-md">
    <router-link class="linkNavbar" to="/">Home</router-link>
    <router-link class="linkNavbar" to="/about">About</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
.linkNavbar {
  /* eslint-disable-next-line */
  @apply px-3 flex justify-center;
}

#nav {
  a {
    font-weight: bold;
    color: #ffffff;

    &.router-link-exact-active {
      color: #313131;
    }
  }
}
</style>
