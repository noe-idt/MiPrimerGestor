<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md q-my-md q-mx-xl row">
      <q-input outlined v-model="text" dense="dense" class="col-4">
        <template v-slot:append>
          <q-icon
            v-if="text !== ''"
            name="close"
            @click="text = ''"
            class="cursor-pointer"
          />
          <q-icon name="search" />
        </template>
      </q-input>
      <q-btn
        outline
        color="grey-8"
        icon="autorenew"
        label="Limpiar"
        class="bg-grey-3 q-mx-lg"
      />
      <q-btn
        outline
        color="grey-8"
        icon="o_filter_alt"
        label="Filtros"
        class="bg-grey-3"
      />
    </div>
  </div>

  <div class="q-px-xl" :class="tableFormat">
    <q-table
      table-header-class="bg-grey-3 text-grey-9 text-center"
      :rows="rows"
      :columns="columns"
      row-key="name"
      :separator="separator"
    >
      <template v-slot:body="props">
        <q-tr :props="props" class="text-left">
          <q-td key="usuario" :props="props" class="text-left">
            {{ props.row.usuario }}
          </q-td>
          <q-td key="nombre" :props="props" class="text-left">
            {{ props.row.nombre }}
          </q-td>
          <q-td key="correo" :props="props" class="text-left">
            {{ props.row.correo }}
          </q-td>
          <q-td key="status" :props="props" style="text-align: center">
            {{ props.row.status }}
          </q-td>
          <q-td key="fechaRegistro" :props="props" style="text-align: center">
            {{ props.row.fechareg }}
          </q-td>
          <q-td key="autor" :props="props" style="text-align: center">
            {{ props.row.autor }}
          </q-td>
          <q-td style="text-align: center">
            <q-btn-dropdown flat class="q-pa-xs" dropdown-icon="menu">
              <q-list>
                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>
                      <q-icon name="o_edit"> </q-icon> Editar
                      usuario</q-item-label
                    >
                  </q-item-section>
                </q-item>
                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>
                      <q-icon name="o_delete"> </q-icon>Eliminar
                      usuario</q-item-label
                    >
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script>
import Titulo from "../components/Titulo";
import { ref, computed } from "vue";
import { mapState } from "pinia";
import { usarUsuarioStore } from "../stores/usuarios";
const columns = [
  {
    name: "usuario",
    required: true,
    label: "USUARIO",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "nombre",
    align: "center",
    label: "NOMBRE",
    field: "nombre",
    sortable: true,
  },
  { name: "correo", label: "CORREO", field: "correo", sortable: true },
  { name: "status", label: "STATUS", field: "status" },
  { name: "fechaRegistro", label: "FECHA REGISTRO", field: "fechareg" },
  { name: "autor", label: "AUTOR", field: "autor" },
  {
    name: "opciones",
  },
];
const usuarioStore = usarUsuarioStore();
const rows = usuarioStore.usuarios;
export default {
  name: "usuariosView",
  components: {},
  setup() {
    const usuarios = usuarioStore.usuarios;
    return {
      separator: ref("cell"),
      columns,
      rows,
      usuarios,
    };
  },
  methods: {},
  computed: {},
};
</script>

<style>
</style>