<template>
  <header class="absolute top-0 z-40 w-full">
    <div class="flex flex-col flex-wrap items-center p-6 lg:flex-row">
      <Logo />
      <nav
        class="flex flex-wrap items-center justify-center space-x-12 text-base  lg:ml-auto"
      >
        <router-link class="text-lg border-current h-7 hover:border-b-2" to="/"
          >About</router-link
        >
        <a class="text-lg h-7 hover:border-b-2" href="javascript:;">Website</a>
        <router-link
          class="text-lg border-current h-7 hover:border-b-2"
          :to="{ name: 'Single' }"
          >Branding</router-link
        >
      </nav>
      <button
        @click="isOpen = !isOpen"
        class="inline-flex items-center px-3 py-1 mt-4 text-base border-0 rounded  lg:ml-6 focus:outline-none lg:mt-0"
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
    <transition name="menu">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 w-screen h-screen bg-gray-300 bg-opacity-80"
      >
        <div
          class="relative top-0 w-full h-full ml-auto bg-black  lg:w-1/4 bg-opacity-80"
        >
          <div class="absolute text-right top-8 right-12">
            <button
              @click="isOpen = false"
              class="text-white transition-transform duration-300 transform  focus:outline-none hover:rotate-180 hover:scale-125"
            >
              <svg
                class="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <ul class="pt-32 pb-12 pl-10 pr-12 space-y-12 lg:pt-56">
            <li>
              <router-link
                to="/"
                class="px-3 py-2 text-2xl text-white transition-colors duration-300  hover:bg-white hover:text-black text-opacity-90"
                >About</router-link
              >
            </li>
            <li>
              <a
                href="javascript:;"
                class="px-3 py-2 text-2xl text-white transition-colors duration-300  hover:bg-white hover:text-black text-opacity-90"
                >Website</a
              >
            </li>
            <li>
              <router-link
                to="/single"
                class="px-3 py-2 text-2xl text-white transition-colors duration-300  hover:bg-white hover:text-black text-opacity-90"
                >Branding</router-link
              >
            </li>
          </ul>
          <footer class="absolute bottom-0 left-0 bg-black">
            <div class="py-12 pl-10 pr-12">
              <ul class="mb-4 space-y-1">
                <li class="text-sm text-white text-opacity-90">
                  T. 02-2885-8586
                </li>
                <li class="text-sm text-white text-opacity-90">
                  E. info@blockstudio.tw
                </li>
                <li class="text-sm text-white text-opacity-90">
                  3F., No.2, Ln. 80, Sec. 4, Chengde Rd., Shilin Dist., Taipei
                  City 111, Taiwan
                </li>
              </ul>
              <span
                class="inline-flex justify-center mt-4 space-x-8  lg:ml-auto lg:mt-0 lg:justify-start"
              >
                <a
                  class="self-start text-white transition-opacity duration-300  hover:opacity-70"
                  href="javascript:;"
                >
                  <svg
                    class="w-4 h-4 fill-current"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="facebook-f"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path
                      fill="currentColor"
                      d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                      class=""
                    ></path>
                  </svg>
                </a>
                <a
                  class="self-start text-white transition-opacity duration-300  hover:opacity-70"
                  href="javascript:;"
                >
                  <svg
                    class="w-4 h-4 fill-current"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="instagram"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                      class=""
                    ></path>
                  </svg>
                </a>
                <a
                  class="self-start text-white transition-opacity duration-300  hover:opacity-70"
                  href="javascript:;"
                >
                  <svg
                    class="w-4 h-4 fill-current"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="youtube"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                      class=""
                    ></path>
                  </svg>
                </a>
              </span>
            </div>
          </footer>
        </div>
      </div>
    </transition>
  </header>
</template>

<script>
import Logo from "./Logo.vue";

export default {
  name: "Nav",
  components: {
    Logo,
  },
  data() {
    return {
      isOpen: true,
    };
  },
  methods: {
    openMenu() {
      console.log("openMenu");
      this.isOpen = true;
    },
  },
};
</script>

<style lang="postcss" scoped>
nav.router-link-active {
  @apply border-b-2;
}

.menu-enter-from {
  @apply opacity-0;
}
.menu-enter-to {
  @apply opacity-100;
}
.menu-enter-active,
.menu-leave-active {
  @apply transition-opacity duration-300;
}
.menu-leave-from {
  @apply opacity-100;
}
.menu-leave-to {
  @apply opacity-0;
}
</style>