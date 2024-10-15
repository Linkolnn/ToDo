<script setup>
import { inject, computed } from 'vue';
const 
    $props = defineProps({
        name: {type: String, default: ""},
        title: {type: String, default: "Модальное окно"}
    }), 
    $modals = inject("$modals"),
    _show = computed(() => {
        return $modals.active() == $props.name
    })
    function closeModal(accept = false) {
        accept ? $modals.accept() : $modals.cancel()
    }
</script>

<template> 
<div class="vueport_wrapper" v-if="_show">
    <div class="dualog_wrapper shd_grd_r">
        <header class="header_modal">{{ $props.title }}</header>
        <main><slot></slot></main>
        <footer>
            <button class="btn_modal" @click="closeModal(true)">Выполнить</button>
            <button class="btn_modal" @click="closeModal(false)">Отмена</button>
        </footer>
    </div>
</div>
</template>