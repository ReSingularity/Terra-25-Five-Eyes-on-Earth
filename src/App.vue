<template>
  <div>
    <canvas ref="canvas" style="position:fixed; inset:0; width:100%; height:100%; z-index: -1;"></canvas>
    <router-view />
    <div class="container section footer">
      Made for NASA Space Apps · Terra 25 · by ReSingularity RenatTOP
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
const canvas = ref(null)
onMounted(() => {
  const c = canvas.value, ctx = c.getContext('2d'); const dpr = Math.max(1, window.devicePixelRatio || 1)
  function resize() { c.width = c.clientWidth * dpr; c.height = c.clientHeight * dpr }
  resize(); addEventListener('resize', resize)
  const stars = Array.from({ length: 250 }, () => ({ x: Math.random(), y: Math.random(), z: Math.random() * 0.8 + 0.2, s: Math.random() * 1.5 + .2 }))
  function tick(t) {
    ctx.clearRect(0, 0, c.width, c.height)
    for (const st of stars) {
      const x = st.x * c.width, y = (st.y + (t * 0.00002 * st.z)) % 1 * c.height
      ctx.globalAlpha = 0.5 + 0.5 * Math.sin(t * 0.002 * st.z); ctx.fillStyle = '#cde7ff'
      ctx.beginPath(); ctx.arc(x, y, st.s * dpr, 0, Math.PI * 2); ctx.fill()
    } requestAnimationFrame(tick)
  } requestAnimationFrame(tick)
})
</script>