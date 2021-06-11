<template>
  <div class="relative">
    <div class="absolute bottom-0 w-8 h-px" :class="[color, direction]"></div>
    <div
      class="absolute bottom-0 w-2 h-px transform"
      :class="[color, direction]"
    ></div>
  </div>
</template>

<script>
export default {
  name: "Arrow",
  props: ['color', 'direction']
};
</script>