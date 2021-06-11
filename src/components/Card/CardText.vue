<template>
  <div class="flex flex-col px-8 py-10 h-96 mb-6">
    <h4 class="text-4xl font-black mb-4">
      {{ card.title }}
    </h4>
    <div class="mt-auto relative">
      <div class="w-6 h-1 bg-black absolute -top-4 left-0"></div>
      <p class="mb-6 text-sm">
        {{ card.content }}
      </p>
      <div class="relative">
        <div class="absolute right-0 bottom-0 w-8 h-px bg-black"></div>
        <div
          class="absolute right-0 bottom-0 w-2 h-px bg-black transform rotate-45 origin-bottom-right"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardText',
  props: ['card'],
}
</script>