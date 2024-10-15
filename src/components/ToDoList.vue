<script setup>
import { computed } from "vue"
const
    $props = defineProps({
        "modelValue": { type: Array, default: () => [] },
        "filter": { type: String, default: "" }
    }),
    $emit = defineEmits(["edit", "delete","toggle"]),
    _filtered_list = computed(() => {
        if ($props.filter) {
            return $props.modelValue.filter(item => {
                return item.text.toUpperCase().includes($props.filter.toUpperCase())
            })
        } else {
            return $props.modelValue;
        }
    })

function emitEvent(event_name, payload) {
    $emit(event_name, payload)
}
</script>

<template>
    <div class="todo_list_block">
        <table class="todo_list">
            <thead>
                <tr class="todo_list_header">
                    <th>Статус</th>
                    <th>Элемент</th>
                    <th class="w3-right-align">
                        <slot></slot>
                    </th>
                </tr>
            </thead>
            <tbody class="todo_list_body">
                <tr class="list_body_row" v-for="item in _filtered_list" :key="item.id">
                    <td class="" @click="emitEvent('toggle', item)">
                        <i class="fa-solid fa-2x fa-square w3-text-light-gray" v-if="item.status=='not_started'"></i>
                        <i class="fa-solid fa-2x fa-square-minus w3-text-teal" v-if="item.status=='in_progress'"></i>
                        <i class="fa-solid fa-2x fa-square-check w3-text-green" v-if="item.status=='completed'"></i>
                    </td>
                    <td>{{item.text}}</td>
                    <td class="edit_message_block">
                        <span class=""
                            @click="emitEvent('edit',item)">
                            <i class="fa-solid fa-pen-to-square"></i>
                            <!-- Измениеть -->
                        </span>
                        
                        <span class=""
                            @click="emitEvent('delete',item)">
                            <i class="fa-solid fa-trash-can"></i>
                            <!-- Удалить -->
                        </span>
                    </td>
                </tr>
                <tr v-if="_filtered_list.length==0">
                    <td><i class="fa-solid fa-square w3-text-light-gray"></i></td>
                    <td>Список пуст</td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
.w3-right-align {
    position: relative;
    z-index: 2;
}
</style>