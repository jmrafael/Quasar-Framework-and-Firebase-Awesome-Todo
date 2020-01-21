<template>
    <q-item 
          @click="updateTask"
          :class="!task.completed ? 'bg-orange-1' : 'bg-green-1'"
          clickable
          v-ripple>
        <q-item-section side top>
          <q-checkbox v-model="task.completed" />
        </q-item-section>

        <q-item-section>
          <q-item-label 
            :class="{ 'text-strikethrough' : task.completed }"> 
            {{ task.name }} 
          </q-item-label>
        </q-item-section>

        <q-item-section side>
          <div class="row">
            <div class="column justify-center">
              <q-icon name="event" size="18px" class="q-mr-xs"/>
            </div>
            <div class="column">
              <q-item-label class="row justify-end" caption> {{ task.duedate }}</q-item-label>
              <q-item-label class="row justify-end" caption> <small> {{ task.duetime }} </small></q-item-label>
            </div>
          </div>
        </q-item-section>
      </q-item>

</template>

<script>
//importacao de actions
import { mapActions } from 'vuex'

  export default {
    props: ['task', 'id'],
    methods: {
      ...mapActions('tasks', ['updateTask']) //A action ja foi mapeada e ja pode ser usada no componente
    }
      
  }
</script>

<style scoped>

</style>