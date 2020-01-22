<template>
    
                <div 
                    :value="dueTime && dueTime == 10"
                    class="row q-mb-sm">
                    <q-input outlined label="Hora"
                        :value="dueTime"
                        @input="$emit('update:dueTime', $event)"
                        class="col">
                        <template v-slot:append>
                            <q-icon
                            :value="dueTime"                            
                            @click="$emit('update:dueTime', '')" 
                            name="close"
                            class="cursor-pointer" />

                            <q-icon name="access_time" class="cursor-pointer">
                                <q-popup-proxy>
                                <q-time 
                                    :value="dueTime"
                                    @input="$emit('update:dueTime', $event)"/>
                                </q-popup-proxy>
                            </q-icon>
                        </template>
                    </q-input>
                </div>
</template>

<script>
export default {
    props: ['dueTime']    
}
</script>