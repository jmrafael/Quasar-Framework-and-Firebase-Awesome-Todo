<template>
    <q-card>
        
        <modal-header>Editar Tarefa</modal-header>
        <form @submit.prevent="submitForm">
            <q-card-section>
                
                <!--A propriedade sync eh usada para sincronizar o atribuito name a taskToSubmit-->
                <modal-task-name 
                    :name.sync="taskToSubmit.name"
                    ref="modalTaskName"/> <!--ref="modalTaskName" eh usado para licar botao dos filhos ao pai-->
                
                <modal-due-date
                    :dueDate.sync="taskToSubmit.dueDate" @clear="clearDueDate"/>
                                
                <modal-due-time
                    v-if="taskToSubmit.dueDate && taskToSubmit.dueDate.length == 10"
                    :dueTime.sync="taskToSubmit.dueTime" @clear="clearDueDate"/>

            </q-card-section>

            <modal-buttons />
            
        </form>        
        
      </q-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    props: ['task', 'id'], // Recebendo parametros enviado no botao Edit
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
        ...mapActions('tasks', ['updateTask']), //Mapeamento do metodo de update
        submitForm() {
            //console.log('submitForm');
            this.$refs.modalTaskName.$refs.name.validate()
            if (!this.$refs.modalTaskName.$refs.name.hasError) {
                this.submitTask()                
            }
            //console.log (this.$$refs.nome.validate());
        },
        submitTask() {
            this.updateTask({
                id: this.id,
                updates: this.taskToSubmit                
            });
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
        'modal-due-date': require('components/Tasks/Modals/Shared/ModalDueDate.vue').default,
        'modal-due-time': require('components/Tasks/Modals/Shared/ModalDueTime.vue').default,
        'modal-buttons': require('components/Tasks/Modals/Shared/ModalButtons.vue').default
    },
    mounted() {
        this.taskToSubmit = Object.assign({}, this.task) //Ao carregar os objecto, popular os campos
    }
}
</script>

<style scoped>

</style>