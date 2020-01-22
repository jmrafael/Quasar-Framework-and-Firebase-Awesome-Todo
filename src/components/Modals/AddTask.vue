<template>
    <q-card>
        <q-card-section class="row">
          <div class="text-h6">Adicionar Tarefa</div>
          <q-space />
          <q-btn 
            v-close-popup
            flat
            round
            dense
            icon="close" />
        </q-card-section>
        
        <form @submit.prevent="submitForm">
            <q-card-section>
                <div class="row q-mb-sm">
                    <q-input
                        outlined
                        v-model="taskToSubmit.name"
                        :rules="[val => !!val || 'Campo obrigatorio']"
                        autofocus
                        ref="name"
                        label="Nome da Tarefa"
                        class="col">

                        <template v-slot:append>
                            <q-icon
                            v-if="taskToSubmit.name"
                            name="close" 
                            @click="taskToSubmit.name = ''" 
                            class="cursor-pointer" />
                        </template>

                    </q-input>

                </div>

                <div class="row q-mb-sm">
                    <q-input outlined label="Data limite"
                        v-model="taskToSubmit.dueDate">
                        <template v-slot:append>
                            <q-icon
                            v-if="taskToSubmit.dueDate"
                            name="close" 
                            @click="clearDueDate" 
                            class="cursor-pointer" />

                            <q-icon name="event" class="cursor-pointer">
                            <q-popup-proxy>
                                <q-date v-model="taskToSubmit.dueDate" />
                            </q-popup-proxy>
                            </q-icon>                            
                        </template>
                    </q-input>
                </div>
                
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
    }    
}
</script>

<style scoped>

</style>