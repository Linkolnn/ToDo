<script setup>
import { ref } from "vue"
import todoService from "../services/todo"
const
    $props = defineProps({
        modelValue: { type: Object, default: () => { return {} } }
    }),
    $emit = defineEmits(["update:modelValue"]),
    _item = ref({})

_item.value = { ...$props.modelValue }

function emitUpdate() {
    $emit("update:modelValue", _item.value)
}


</script>

<template>
    <div class="item_form_block">
        <div class="item_form_content_block">
            <p>Описание</p>
            <input type="text" placeholder="Напишите напоминание" class="inp_form" v-model.string="_item.text" @blur="emitUpdate()">
        </div>

        <div class="item_form_content_block">
            <p>Состояние</p>
            <select class="inp_form" v-model.string="_item.status" @change="emitUpdate()">
                <option v-for="state in todoService.getStatusList()" :key="state.id" :value="state.id">
                    {{state.label}}
                </option>
            </select>
        </div>
    </div>
</template>

<style scoped>

</style>