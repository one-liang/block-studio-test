<template>
  <div>
    <img :src="card.image" class=" object-cover w-full">
    <div class="px-4 py-6">
      <span class="text-white bg-black inline-block mb-3 px-3 py-1 rounded-sm">Award</span>
      <h4 class="text-xl font-black mb-2">{{ card.title }}</h4>
      <p class="text-sm mb-4">{{ card.content }}</p>
      <div class="grid grid-cols-2 gap-x-4 gap-y-1">
        <div class="text-gray-400 text-sm">CLIENT</div>
        <div class="text-gray-400 text-sm">STATUS</div>
        <div class="text-sm">ACT Government</div>
        <div class="text-sm">Completed 2017</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardImg',
  props: ['card']
}
</script>