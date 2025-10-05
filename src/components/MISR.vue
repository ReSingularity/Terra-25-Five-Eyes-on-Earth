<template>
  <section class="section container" id="misr">
    <div class="card">
    <p>
      MISR captures images of Earth from nine different viewing angles, which allows scientists to reconstruct the
      three-dimensional structure of clouds, aerosols, and terrain.
    </p>
    <p>
      This multi-angle approach is critical for assessing aerosol heights, distinguishing among aerosol types, and
      improving atmospheric models.
    </p>
  </div>
    <div class="card" style="overflow:hidden; border-radius:12px">
      <AnimMap :frames="frames" :fps="2" />
    </div>
  </section>
</template>

<script setup>
import AnimMap from './AnimMap.vue'

const base = import.meta.env.BASE_URL
const frames = Array.from({ length: 7 }, (_, i) => `${base}data/misr/${String(i)}.jpg`)
</script>