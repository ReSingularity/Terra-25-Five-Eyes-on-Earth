<template>
  <section class="section container" id="modis">
    <p class="card">
    <p>MODIS is Terra’s workhorse instrument, capturing imagery in 36 spectral bands across wavelengths
      from visible to infrared.</p>
    <p>It monitors global vegetation (NDVI), land surface temperature, cloud cover, aerosol
      content, ocean color, and detect wildfires.</p>
    <p>Since MODIS acquires data daily, it enables scientists to track
      changes in Earth’s surface and atmosphere over time and across seasons.</p>
    </p>
    <AnimMap :frames="frames" :fps="2" />
  </section>
</template>

<script setup>
import AnimMap from './AnimMap.vue'

const base = import.meta.env.BASE_URL
const frames = Array.from({ length: 22 }, (_, i) => `${base}/data/modis/${String(i)}.jpg`)
</script>