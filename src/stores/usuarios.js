import { mapStores } from 'pinia'

import { defineStore } from 'pinia';

export const usarUsuarioStore = defineStore('usuarios', {
  state: () => ({
    usuarios: [{
      usuario: "Lemaster200",
      nombre: "Carlos Alberto Juanes Pérez",
      correo: "lemaster.2000@dummy.com",
      status: 200,
      fechareg: "2022-05-12 12:50",
      autor: "Noé",
    },

  ]

  }),


  getters: {
    
  },

  actions: {
    crearUsuario(usuario) {
     
      
      this.usuarios.push(usuario)
      console.log("Usuario Almacenado")
     

     
    },
    getUsuarios() {
      return this.usuarios;
    }
  }
})
