<template>
  <div>
    <Hero />
    <div class="modules-grid">
      <h2>Terra · Overview</h2>
      <ModuleCard title="Welcome to Terra’s 25th!" icon="🎉">
        <p>For 25 years, NASA’s Terra satellite has been our planet’s daily storyteller from space. With five powerful
          instruments capturing Earth’s atmosphere, land, oceans, and energy, Terra has built a legacy of over
          <strong>9,000 days of continuous observation</strong>. These data reveal processes and rare events — and help
          us protect communities and build a sustainable future.
        </p>
      </ModuleCard>

      <ModuleCard title="General Overview" icon="🟢">
        <ul class="facts">
          <li><strong>Launch:</strong> Dec 18, 1999 (Atlas IIAS)</li>
          <li><strong>Orbit:</strong> Sun-synchronous, ~705 km, ~16 orbits/day</li>
          <li><strong>Objective:</strong> Atmosphere, land, oceans, radiation budget</li>
          <li><strong>Mission:</strong> Climate change, ecosystems, pollution, disasters, energy balance</li>
        </ul>
      </ModuleCard>

      <ModuleCard title="Five instruments on board" icon="🛰️">
        <div class="instruments-grid">
          <div class="inst">
            <div class="inst-title">1. MODIS</div>
            <p>Vegetation (NDVI), LST, clouds, aerosols, wildfires, ocean color.</p>
            <a class="btn-mini" href="#/instrument/modis">Open MODIS</a>
          </div>
          <div class="inst">
            <div class="inst-title">2. MISR</div>
            <p>Multi-angle imaging; 3D structure of clouds/aerosols; plume heights.</p>
            <a class="btn-mini" href="#/instrument/misr">Open MISR</a>
          </div>
          <div class="inst">
            <div class="inst-title">3. CERES</div>
            <p>Earth’s radiation budget: incoming solar vs. outgoing longwave.</p>
            <a class="btn-mini" href="#/instrument/ceres">Open CERES</a>
          </div>
          <div class="inst">
            <div class="inst-title">4. ASTER</div>
            <p>High-res surface imaging; DEMs; volcanoes & glaciers.</p>
            <a class="btn-mini" href="#/instrument/aster">Open ASTER</a>
          </div>
          <div class="inst">
            <div class="inst-title">5. MOPITT</div>
            <p>Tropospheric CO; pollution sources & transport.</p>
            <a class="btn-mini" href="#/instrument/mopitt">Open MOPITT</a>
          </div>
        </div>
      </ModuleCard>

      <ModuleCard title="Why it matters" icon="🌐">
        <p>Terra’s 25-year record underpins climate models, hazard response, air-quality analysis, agriculture
          monitoring, and ecosystem health assessments. It’s a cornerstone of NASA’s Earth Observing System (EOS) and a
          foundation for future missions.</p>
      </ModuleCard>
    </div>
    <TerraMap />
  </div>
</template>

<script setup>
import Hero from '../components/Hero.vue'
import TerraMap from '../components/TerraMap.vue'
import ModuleCard from '../components/ModuleCard.vue'
</script>

<style scoped>
.page-title {
  font-family: Orbitron, sans-serif;
  font-size: clamp(28px, 6vw, 56px);
  margin: 0 0 18px;
  text-align: center;
}

.modules-grid {
  max-width: 800px;
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr;
  margin: 0 auto;
}

@media (min-width: 900px) {

  .modules-grid> :nth-child(1) {
    grid-column: 1 / -1;
  }

  /* Welcome spans */
  .modules-grid> :nth-child(3) {
    grid-column: 1 / -1;
  }

  /* Instruments spans */
}

.facts {
  padding-left: 18px;
  margin: 0;
}

.facts li {
  margin: 6px 0;
}

.instruments-grid {
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.inst {
  border: 1px solid rgba(255, 255, 255, .08);
  border-radius: 12px;
  padding: 12px;
  background: rgba(255, 255, 255, .03);
}

.inst-title {
  font-weight: 700;
  margin-bottom: 6px
}

.btn-mini {
  display: inline-block;
  margin-top: 8px;
  padding: 8px 12px;
  border: 1px solid rgba(255, 255, 255, .2);
  border-radius: 10px;
  text-decoration: none;
  color: var(--fg);
  background: linear-gradient(180deg, rgba(46, 224, 255, .15), rgba(46, 224, 255, .03));
  font-size: 13px;
}

.btn-mini:hover {
  opacity: .9
}
</style>