<template>
  <header class="absolute top-0 z-50 w-full">
    <div class="flex flex-col flex-wrap items-center p-6 lg:flex-row">
      <Logo />
      <nav
        class="flex flex-wrap items-center justify-center space-x-12 text-base lg:ml-auto"
      >
        <router-link class="text-lg border-current h-7 hover:border-b-2" to="/">About</router-link>
        <a class="text-lg h-7 hover:border-b-2" href="javascript:;">Website</a>
        <router-link class="text-lg border-current h-7 hover:border-b-2"  :to="{ name: 'Single' }">Branding</router-link>
      </nav>
      <button
        class="inline-flex items-center px-3 py-1 mt-4 text-base border-0 rounded lg:ml-6 focus:outline-none lg:mt-0"
      >
        <svg
          class="w-5 h-5 fill-current"
          aria-hidden="true"
          focusable="false"
          data-prefix="fal"
          data-icon="bars"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M442 114H6a6 6 0 0 1-6-6V84a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6z"
            class=""
          ></path>
        </svg>
      </button>
    </div>
  </header>
</template>

<script>
import Logo from './Logo.vue';

export default {
  name: 'Nav',
  components: {
    Logo
  }
}
</script>

<style lang="postcss" scoped>
  .router-link-active {
    @apply border-b-2;
  }
</style>