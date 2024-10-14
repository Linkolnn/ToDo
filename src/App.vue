<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { inject } from 'vue';
import Modal from '@/plugins/modals/Modal.vue';
import ToDo from '@/components/ToDo.vue'

const $modals = inject("$modals");

$modals.show('myModal').then(() => {
  
}, () => {

})
</script>

<template>
  <div class="app">
    <Modal name="myModal" title="Пример модального компонента">
        Содержание
    </Modal>
  </div>
  <ToDo></ToDo>
</template>

<style scoped>
#app {
  display: flex;
  justify-content: center;
  width: 100vw;
  min-height: 100vh;
  padding: 5rem;
}
</style>