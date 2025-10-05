<template>
  <div>
    <div class="container section">
      <div class="card">
        <span class="badge">INSTRUMENT</span>
        <h2 style="margin:8px 0">{{ meta.title }}</h2>
        <p style="opacity:.9">{{ meta.desc }}</p>
      </div>
    </div>

    <component :is="meta.component" />

    <div class="container" style="margin-top:16px">
      <div class="card">
        <strong>Links:</strong>
        <ul>
          <li v-for="l in meta.links" :key="l.href">
            <a :href="l.href" target="_blank" rel="noreferrer">{{ l.title }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import MODIS from '../components/MODIS.vue'
import MISR from '../components/MISR.vue'
import CERES from '../components/CERES.vue'
import ASTER from '../components/ASTER.vue'
import MOPITT from '../components/MOPITT.vue'

const route = useRoute()
const id = computed(() => (route.params.id || '').toString().toLowerCase())

const catalog = {
  modis: {
    title: 'MODIS · The Global Observer',
    desc: 'Vegetation (NDVI), surface temperature, clouds, aerosols, fires.',
    component: MODIS,
    links: [
      { title: 'Worldview (GIBS)', href: 'https://worldview.earthdata.nasa.gov' },
      { title: 'FIRMS (Active Fires)', href: 'https://firms.modaps.eosdis.nasa.gov' },
    ]
  },
  misr: {
    title: 'MISR · The 3D Eye',
    desc: 'Multicornet images, height of aerosol trails, cloud structure.',
    component: MISR,
    links: [
      { title: 'Worldview (GIBS)', href: 'https://worldview.earthdata.nasa.gov' },
      { title: 'MISR Visualizations', href: 'https://misr.jpl.nasa.gov' },
    ]
  },
  ceres: {
    title: 'CERES · Earth’s Energy Balance',
    desc: 'Solar radiation, albedo, and outgoing longwave radiation.',
    component: CERES,
    links: [
      { title: 'NASA POWER (CERES)', href: 'https://power.larc.nasa.gov' },
      { title: 'Giovanni (CERES)', href: 'https://giovanni.gsfc.nasa.gov' },
    ]
  },
  aster: {
    title: 'ASTER · The Detail Lens',
    desc: 'High-resolution surface imagery, DEM, volcanoes, glaciers.',
    component: ASTER,
    links: [
      { title: 'Worldview (GIBS)', href: 'https://worldview.earthdata.nasa.gov' },
      { title: 'Earth Observatory', href: 'https://earthobservatory.nasa.gov' },
    ]
  },
  mopitt: {
    title: 'MOPITT · The Pollution Tracker (CO)',
    desc: 'Long-term CO measurements in the troposphere (air pollution).',
    component: MOPITT,
    links: [
      { title: 'Worldview (GIBS)', href: 'https://worldview.earthdata.nasa.gov' },
      { title: 'Giovanni (MOPITT CO)', href: 'https://giovanni.gsfc.nasa.gov' },
    ]
  }
}
const meta = computed(() => catalog[id.value] || catalog['modis'])
</script>