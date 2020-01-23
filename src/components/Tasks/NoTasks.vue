<template>
    <q-banner dense class="bg-grey-3">
      <template v-slot:avatar>
        <q-icon name="check" color="primary" />
      </template>
        Sem tarefas por executar hoje.
      <template v-slot:action>
        <q-btn 
          @click="$root.$emit('showAddTask')"
          flat color="primary" label="Adicionar Tarefa" />
      </template>
    </q-banner>
</template>

<script>
    export default {
        
    }
</script>