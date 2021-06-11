<template>
  <div class="flex flex-col px-8 py-10 mb-6 h-96">
    <h4 class="mb-4 text-4xl font-black">
      {{ card.title }}
    </h4>
    <div class="relative mt-auto">
      <div class="absolute left-0 w-6 h-1 bg-black -top-4"></div>
      <p class="mb-6 text-sm">
        {{ card.content }}
      </p>
      <Arrow color="bg-black" direction="right-0 origin-bottom-right rotate-45" />
    </div>
  </div>
</template>

<script>
import Arrow from '../../components/Arrow.vue';

export default {
  name: 'CardText',
  components: { Arrow },
  props: ['card'],
}
</script>