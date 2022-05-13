<template>
  <q-btn
    class="float-right"
    color="primary"
    label="Alta de usuarios"
    @click="register = true"
  ></q-btn>

  <q-dialog v-model="register">
    <q-card class="q-pa-lg" style="width: 550px; max-width: 80vw">
      <Formulario></Formulario>
    </q-card>
  </q-dialog>
</template>

<script>
import { ref } from "vue";
import Formulario from "./Formulario.vue";

export default {
  name: "Register-component",
  setup() {
    return {
      register: ref(false),
      address: ref(""),
    };
  },
  components: { Formulario },
};
</script>

<style>
</style>