<template>
  <div class="q-pa-md q-gutter-sm bg-grey-3 text-weight-medium">
    <register></register>
    <h5 class="q-my-none">Usuarios</h5>

    <nav class="q-py-none">
      <router-link to="/">Home</router-link> /
      <router-link to="/usuarios"> Usuarios</router-link>
    </nav>
  </div>

  <router-view> </router-view>
</template>

<script>
import { defineComponent } from "vue";
import register from "./components/Register";

export default defineComponent({
  name: "App",
  components: { register },
});
</script>
