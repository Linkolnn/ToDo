<script setup>
import {ref, onMounted} from "vue"
const
    $props=defineProps(["modelValue"]),
    $emit=defineEmits(["update:modelValue"]),
    _value=ref("")

onMounted(()=>{
    _value.text=$props.modelValue;
})

function clear(){
    _value.value="";
    publishValue()
}

function publishValue(){
    $emit("update:modelValue", _value.value)
}

    
</script>

<template>
    <div class="filter_block">
        <input  type="text" 
                class="inp" 
                v-model="_value"
                @keyup="publishValue()"
                placeholder="Введите здесь текст фильтра..."
                >
        <button class="create_btn" @click="clear()">
            <i class="fas fa-fw fa-times"></i>
        </button>
    </div>
</template>

<style scoped>
    
</style>