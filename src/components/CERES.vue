<template>
  <section class="section container" id="ceres">
    <p class="card">
    <p>CERES measures the balance between incoming solar energy and outgoing longwave radiation from Earth.
    </p>
    <p>It provides critical data on Earth’s radiation budget, clouds’ impact on warming or cooling, and contributes to
      climate model validation.</p>
    <p>Because Terra carries CERES, these energy measurements are synchronized with other
      observations from MODIS, MISR, ASTER, and MOPITT.</p>
    </p>
    <AnimMap :frames="frames" :fps="2" />
  </section>
</template>

<script setup>
import AnimMap from './AnimMap.vue'

const base = import.meta.env.BASE_URL
const frames = Array.from({ length: 15 }, (_, i) => `${base}/data/ceres/${String(i)}.jpg`)
</script>