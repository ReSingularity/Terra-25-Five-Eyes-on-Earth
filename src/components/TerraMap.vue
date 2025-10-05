<template>
  <section class="section" style="min-height:100vh; display:flex; align-items:center; justify-content:center;">
    <div class="container">
      <h2 style="font-family:Orbitron; font-weight:800; font-size:clamp(28px, 5vw, 66px); margin:14px 0">Terra · Spacecraft and Its Instruments</h2>
      <p>🛰️ Explore Terra’s Instruments</p>
      <p>Terra carries five scientific instruments, each designed to observe our planet in a unique way. On the image
        below, hover over a module to see its name — and click to learn more about its purpose, data, and applications.
      </p>
      <p><b>MODIS</b> – global vegetation, temperature, clouds, fires, oceans</p>
      <p><b>MISR</b> – multi-angle imaging, 3D clouds and aerosols</p>
      <p><b>CERES</b> – Earth’s energy balance and climate</p>
      <p><b>ASTER</b> – detailed surface maps, volcanoes, glaciers, hazards</p>
      <p><b>MOPITT</b> – tracking atmospheric carbon monoxide pollution</p>
      <p>Every instrument is a window into Earth’s story — together, they form a 25-year legacy of discovery.</p>

      <div class="card" style="overflow:hidden">
        <div style="position:relative; width:100%; max-width:1000px; margin:0 auto">
          <img :src="imgSrc" alt="Terra spacecraft" style="width:100%; display:block" />
          <div v-for="h in hotspots" :key="h.id" class="hotspot" :style="spotStyle(h)" @click="go(h.id)"
            @mouseenter="active = h.id" @mouseleave="active = null">
            <div class="pulse"></div>
            <div class="label">{{ h.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const imgSrc = '/img/terra.png'
const active = ref(null)
const hotspots = [
  { id: 'modis', label: 'MODIS', x: 46, y: 19 },
  { id: 'aster', label: 'ASTER', x: 53, y: 73 },
  { id: 'misr', label: 'MISR', x: 47.5, y: 78 },
  { id: 'mopitt', label: 'MOPITT', x: 31.5, y: 95 },
  { id: 'ceres', label: 'CERES', x: 21.5, y: 100 },
]
function spotStyle(h) {
  const scale = active.value === h.id ? 1.15 : 1.0
  return { position: 'absolute', left: h.x + '%', top: h.y + '%', transform: `translate(-50%, -50%) scale(${scale})` }
}
function go(id) { router.push({ name: 'instrument', params: { id } }) }
</script>
<style scoped>
.hotspot {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.95) 0%, rgba(46, 224, 255, 0.8) 60%, rgba(46, 224, 255, 0.2) 100%);
  border: 1px solid rgba(255, 255, 255, .6);
  cursor: pointer;
  transition: transform .15s ease;
  position: absolute;
}

.hotspot .pulse {
  position: absolute;
  inset: -12px;
  border-radius: 50%;
  border: 2px solid rgba(46, 224, 255, .5);
  animation: pulse 1.8s infinite;
}

.hotspot .label {
  position: absolute;
  left: 18px;
  top: -8px;
  background: rgba(6, 8, 15, .8);
  border: 1px solid rgba(255, 255, 255, .15);
  padding: 4px 8px;
  border-radius: 8px;
  white-space: nowrap;
  transform: translateY(-100%);
  font-size: 12px;
  color: rgb(11, 198, 255);
}

@keyframes pulse {
  0% {
    transform: scale(0.9);
    opacity: .9
  }

  100% {
    transform: scale(1.25);
    opacity: 0
  }
}
</style>