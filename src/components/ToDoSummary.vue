<script setup>
import { ref, computed } from "vue"
import todoService from "../services/todo"

const
    $props = defineProps({
        items: { type: Array, default: () => [] }
    }),
    _status=computed(()=>{
        let status={}
        todoService.getStatusList().forEach(stat=>{
            status[stat.id]=0;
        })
        $props.items.forEach(todo=>{
            status[todo.status]+=1
        })
        return status
    })
</script>

<template>
    <div class="summary_block">
        <div class="pending_content content">
            <strong>В ожидании</strong>
            <h2>{{_status?.not_started}}</h2>
        </div>
        <div class="progress_content content">
            <strong>На выполнение</strong>
            <h2>{{_status?.in_progress}}</h2>
        </div>
        <div class="complete_content content">
            <strong>Выполнено</strong>
            <h2>{{_status?.completed}}</h2>
        </div>
    </div>
</template>

<style scoped>

h2 {
    font-size: 3rem;
    margin: 0;
}
</style>