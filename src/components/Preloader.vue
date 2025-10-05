<template>
    <transition name="fade">
        <div v-if="show" class="preloader">
            <div class="loader-content">
                <img src="/img/terra.png" alt="Terra" class="logo-spin" />
                <p class="loading-text">Loading Terra Data...</p>
            </div>
        </div>
    </transition>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { preloadImages } from '../utils/preload'

const show = ref(false)

onMounted(() => {
    const base = import.meta.env.BASE_URL
    const modisFrames = Array.from({ length: 19 }, (_, i) => `${base}data/modis/${String(i)}.jpg`)
    const misrFrames = Array.from({ length: 7 }, (_, i) => `${base}data/misr/${String(i)}.jpg`)
    const ceresFrames = Array.from({ length: 15 }, (_, i) => `${base}data/ceres/${String(i)}.jpg`)
    const asterFrames = Array.from({ length: 3 }, (_, i) => `${base}data/aster/${String(i)}.jpg`)
    const mopittFrames = Array.from({ length: 5 }, (_, i) => `${base}data/mopitt/${String(i)}.jpg`)

    Promise.all([
        preloadImages([...modisFrames, ...misrFrames, ...ceresFrames, ...mopittFrames, ...asterFrames]),
    ]);

    show.value = true
    setTimeout(() => {
        show.value = false
    }, 1000)
})
</script>

<style scoped>
.preloader {
    position: fixed;
    inset: 0;
    background: radial-gradient(circle at 50% 50%, #0a0f2d, #000);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
}

.loader-content {
    text-align: center;
    color: #e0f7ff;
}

.logo-spin {
    width: 120px;
    height: auto;
    animation: spin 2s linear infinite;
}

.loading-text {
    margin-top: 12px;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 1px;
    color: #6ee7ff;
}

@keyframes spin {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity .6s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
