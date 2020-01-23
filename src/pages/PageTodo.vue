<template>
  <q-page class="q-pa-md">
    <tasks-todo
      :tasksTodo="tasksTodo"/>   
  <hr>
    <q-list
      v-if="Object.keys(tasksCompleted).length"
      separator
      bordered>

     <task
        v-for="(task, key) in tasksCompleted"
        :key="key"
        :task="task"
        :id="key"></task>

  </q-list>

<div class="absolute-bottom text-center q-mb-lg">
    <q-btn
      @click="showAddTask = true"
      round
      color="primary"
      size="24px"
      icon="add"
    /> 
</div>

    <q-dialog v-model="showAddTask">
      <addTask @close="showAddTask = false"/>
    </q-dialog>

  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      showAddTask: false
    }
  },
  computed: {
    ...mapGetters('tasks', ['tasksTodo', 'tasksCompleted'])
  },      
  components: { //importacao com componente em components -> Task
    'addTask' : require('components/Tasks/Modals/Addtask.vue').default,
    'tasks-todo' : require('components/Tasks/TaskTodo.vue').default
  }
}
</script>

<style>

</style>
