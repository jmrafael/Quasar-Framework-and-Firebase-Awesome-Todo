<template>
    <q-item 
          @click="updateTask({ id: id, updated: { completed: !task.completed } })"
          :class="!task.completed ? 'bg-orange-1' : 'bg-green-3'"
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

        <q-item-section  side   
          v-if="task.dueDate">
          <div class="row">
            <div class="column justify-center">
              <q-icon name="event" size="18px" class="q-mr-xs"/>
            </div>
            <div class="column">
              <q-item-label class="row justify-end" caption> {{ task.dueDate }}</q-item-label>
              <q-item-label class="row justify-end" caption> <small> {{ task.dueTime }} </small></q-item-label>
            </div>
          </div>
        </q-item-section>

        <q-item-section side>
              <!--click.stop: click faz do botao clicavel e a propriedade stop paralizar o seu efeito de ser propagado. -->
              <div class="row">
                <q-btn
                @click.stop="showEditTask  = true"  
                flat
                round
                dense
                color="primary"
                icon="edit" />
                
                <q-btn
                @click.stop="promptToDelete(id)"  
                flat
                round
                dense
                color="red"
                icon="delete" />                
              </div>
        </q-item-section>

        <q-dialog v-model="showEditTask">
          <edit-task @close="showEditTask = false"
          :task="task"
          :id="id"/> <!--Envio de task e ID da task como parametros do Botao Edit-->
        </q-dialog> 

      </q-item>
</template>

<script>
//importacao de actions
import { mapActions } from 'vuex'

  export default {
    props: ['task', 'id'], //Contem todos os campos da tarefa
    data() {
      return {
        showEditTask: false
      }
    },
    methods: {
      ...mapActions('tasks', ['updateTask', 'deleteTask']), //A action ja foi mapeada e ja pode ser usada no componente
      promptToDelete(id) { 
        this.$q.dialog({
          title: 'Confirmacao',
          message: 'Deseja remover?',
          cancel: true,
          persistent: true
          }).onOk(() => {
            //console.log('deleted: ', id)
            this.deleteTask(id)
          })
      }
    },
    components: {
      'edit-task': require('components/Tasks/Modals/EditTask.vue').default
    }
      
  }
</script>

<style scoped>

</style>