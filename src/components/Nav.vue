<template>
  <header class="absolute top-0 w-full z-50">
    <div class="flex flex-wrap p-6 flex-col lg:flex-row items-center">
      <Logo />
      <nav
        class="lg:ml-auto space-x-12 flex flex-wrap items-center text-base justify-center"
      >
        <a class="h-7 text-lg hover:border-b-2" href="javascript:;">About</a>
        <a class="h-7 text-lg hover:border-b-2" href="javascript:;">Website</a>
        <a class="h-7 text-lg hover:border-b-2" href="javascript:;">Branding</a>
      </nav>
      <button
        class="inline-flex items-center lg:ml-6 border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 lg:mt-0"
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