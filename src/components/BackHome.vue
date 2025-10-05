<template>
    <button class="back-home" @click="goHome" aria-label="Back to Home">
        ⟵ Home
    </button>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
function goHome() {
    router.back()
}
</script>

<style scoped>
.back-home {
    position: fixed;
    right: 16px;
    bottom: 16px;
    z-index: 9999;
    padding: 10px 14px;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, .2);
    background: linear-gradient(180deg, rgba(46, 224, 255, .15), rgba(46, 224, 255, .04));
    color: var(--fg);
    cursor: pointer;
    font-weight: 600;
    box-shadow: 0 8px 30px -14px rgba(46, 224, 255, .6);
}

.back-home:hover {
    opacity: .9
}

@media (max-width: 480px) {
    .back-home {
        right: 12px;
        bottom: 12px;
    }
}
</style>
