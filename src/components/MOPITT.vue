<template>
  <section class="section container" id="mopitt">
    <p class="card">
    <p>MOPITT monitors concentrations of carbon monoxide (CO) in Earth’s troposphere. </p>
    <p>This helps scientists understand the distribution and trend of atmospheric pollution, combustion sources, and how
      CO travels globally.</p>
    <p>These observations are key to studies in atmospheric chemistry and air quality.</p>
    </p>
    <AnimMap :frames="frames" :fps="2" />
  </section>
</template>

<script setup>
import AnimMap from './AnimMap.vue'
const frames = Array.from({ length: 5 }, (_, i) => `/data/mopitt/${String(i)}.jpg`)
</script>