<template>
  <div class="card" style="margin-top:18px">
    <div style="display:flex; align-items:center; gap:12px; margin-bottom:10px">
      <button class="btn" @click="toggle">{{ playing ? '❚❚' : '▶' }}</button>
      <div style="flex:1">
        <input class="range" type="range" min="0" :max="frames.length - 1" v-model="frameIndex" @input="draw" />
        <div style="display:flex; justify-content:space-between; font-size:12px; opacity:.7; margin-top:6px">
          <span>Frame {{ Number(frameIndex) + 1 }} / {{ frames.length }}</span>
        </div>
      </div>
    </div>
    <div
      style="aspect-ratio: 16/9; width:100%; border-radius:12px; overflow:hidden; border:1px solid rgba(255,255,255,.08)">
      <canvas ref="canvas" style="width:100%; height:100%; display:block; background:#0a0f14"></canvas>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'

const props = defineProps({ frames: Array, fps: { type: Number, default: 6 } })
const frameIndex = ref(0); const playing = ref(false); const canvas = ref(null)
let images = []; let raf = null; let last = 0; let acc = 0

function draw() {
  const c = canvas.value, ctx = c.getContext('2d'); const dpr = Math.max(1, window.devicePixelRatio || 1)
  c.width = c.clientWidth * dpr; c.height = c.clientHeight * dpr
  const img = images[Number(frameIndex.value)]; if (!img) return
  const scale = Math.max(c.width / img.naturalWidth, c.height / img.naturalHeight)
  const w = img.naturalWidth * scale, h = img.naturalHeight * scale
  const x = (c.width - w) / 2, y = (c.height - h) / 2
  ctx.filter = 'contrast(110%) saturate(110%)'; ctx.drawImage(img, x, y, w, h)
}

function animate(ts) {
  if (!playing.value) return; if (!last) last = ts; const dt = ts - last; last = ts; acc += dt
  const frameDur = 1000 / props.fps; while (acc >= frameDur) { acc -= frameDur; frameIndex.value = (Number(frameIndex.value) + 1) % images.length; draw() }
  raf = requestAnimationFrame(animate)
}

function toggle() { playing.value = !playing.value; if (playing.value) { last = 0; acc = 0; raf = requestAnimationFrame(animate) } else if (raf) { cancelAnimationFrame(raf) } }

onMounted(async () => { images = await Promise.all(props.frames.map(src => new Promise(res => { const im = new Image(); im.onload = () => res(im); im.src = src }))); new ResizeObserver(draw).observe(canvas.value); draw() })
onBeforeUnmount(() => raf && cancelAnimationFrame(raf)); watch(frameIndex, draw)
</script>