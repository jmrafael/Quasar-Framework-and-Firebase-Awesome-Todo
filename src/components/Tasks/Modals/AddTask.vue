<template>
    <q-card>
        
        <modal-header>Adicionar Tarefa</modal-header>
        <form @submit.prevent="submitForm">
            <q-card-section>
                
                <!--A propriedade sync eh usada para sincronizar o atribuito name a taskToSubmit-->
                <modal-task-name  :name.sync="taskToSubmit.name"/>
                
                <modal-due-date :dueDate.sync="taskToSubmit.dueDate"/>
                                
                
                <div 
                    v-if="taskToSubmit.dueDate && taskToSubmit.dueDate.length == 10"
                    class="row q-mb-sm">
                    <q-input outlined label="Hora"
                        v-model="taskToSubmit.dueTime"
                        class="col">
                        <template v-slot:append>
                            <q-icon
                            v-if="taskToSubmit.dueTime"
                            name="close" 
                            @click="taskToSubmit.dueTime = ''" 
                            class="cursor-pointer" />

                            <q-icon name="access_time" class="cursor-pointer">
                                <q-popup-proxy>
                                <q-time v-model="taskToSubmit.dueTime" />
                                </q-popup-proxy>
                            </q-icon>
                        </template>
                    </q-input>
                </div>
            </q-card-section>

            <q-card-actions align="right">
            <q-btn 
                label="Gravar"
                color="primary"
                type="submit"/>
            </q-card-actions>
            
            <pre>{{ taskToSubmit }}</pre>
        </form>        
        
      </q-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    data() {
        return {
            taskToSubmit: {
                name: '',
                dueDate: '',
                dueTime: '',
                completed: false,
            }
        }
    },
    methods: {
        ...mapActions('tasks', ['addTask']),
        submitForm() {
            //console.log('submitForm');
            this.$refs.name.validate()
            if (!this.$refs.name.hasError) {
                this.submitTask()
            }
            //console.log (this.$$refs.nome.validate());
        },
        submitTask() {
            this.addTask(this.taskToSubmit);
            //console.log('Registado')
            this.$emit('close')
        },
        clearDueDate () {
            this.taskToSubmit.dueDate = ''
            this.taskToSubmit.dueTime = ''
        }
    },
    components: {//importacao de componentes: partes de paginas
        'modal-header': require('components/Tasks/Modals/Shared/ModalHeader.vue').default,
        'modal-task-name': require('components/Tasks/Modals/Shared/ModalTaskName.vue').default,
        'modal-due-date': require('components/Tasks/Modals/Shared/ModalDueDate.vue').default
    }
}
</script>

<style scoped>

</style>