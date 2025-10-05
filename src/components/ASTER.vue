<template>
  <section class="section container" id="aster">
    <p class="card">
    <p>
      ASTER produces high-resolution imagery of Earth’s surface in both visible and infrared bands and generates digital
      elevation models (DEMs).
    </p>
    <p>
      It is used for detailed mapping of terrain, volcanoes, glaciers, and geologic features.
    </p>
    <p>
      It complements the coarser-scale data from MODIS with fine detail.
    </p>
    </p>
    <AnimMap :frames="frames" :fps="2" />
  </section>
</template>

<script setup>
import AnimMap from './AnimMap.vue'
const frames = Array.from({ length: 3 }, (_, i) => `/data/aster/${String(i)}.jpg`)
</script>