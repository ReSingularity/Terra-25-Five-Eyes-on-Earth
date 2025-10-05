<template>
    <section class="module-card">
        <header class="module-head">
            <div class="module-icon" v-if="icon">{{ icon }}</div>
            <h3 class="module-title">{{ title }}</h3>
        </header>
        <div class="module-body">
            <slot />
        </div>
    </section>
</template>

<script setup>
defineProps({
    title: { type: String, required: true },
    icon: { type: String, default: '' }
})
</script>

<style scoped>
.module-card {
    border: 1px solid rgba(255, 255, 255, .09);
    border-radius: 16px;
    background: rgba(255, 255, 255, .04);
    backdrop-filter: blur(6px);
    padding: 16px 18px;
}

.module-head {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 8px;
}

.module-icon {
    font-size: 20px;
    line-height: 1;
}

.module-title {
    margin: 0;
    font-family: Orbitron, sans-serif;
    letter-spacing: .02em;
}

.module-body :deep(p) {
    margin: 8px 0;
}
</style>
