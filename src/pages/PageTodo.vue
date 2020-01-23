<template>
  <q-page class="q-pa-md">

    <No-tasks
      v-if="!Object.keys(tasksTodo).length">
    </No-tasks>

    <tasks-todo
      v-else
      :tasksTodo="tasksTodo"/>
      
<hr>

    <tasks-completed
      v-if="Object.keys(tasksCompleted).length"
      :tasksCompleted="tasksCompleted"/>

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
  mounted(){
    this.$root.$on('showAddTask', () =>  {
      this.showAddTask = true
    })
  },     
  components: { //importacao com componente em components -> Task
    'addTask' : require('components/Tasks/Modals/Addtask.vue').default,
    'tasks-todo' : require('components/Tasks/TasksTodo.vue').default,
    'tasks-completed' : require('components/Tasks/TasksCompleted.vue').default,
    'No-tasks' : require('components/Tasks/NoTasks.vue').default
  }
}
</script>

<style>

</style>
