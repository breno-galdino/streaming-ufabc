<template>
  <v-card color="accent" height="100vh">
    <v-toolbar color="primary" class="px-4 mb-4">
      <template v-slot:prepend>
        <img src="../public/logo-white.png" width="60px" />
      </template>
      <template v-slot:append>
        <v-btn variant="outlined">Login</v-btn>
      </template>
      <v-toolbar-title class="text-uppercase"
        >Segurança de Redes</v-toolbar-title
      >
    </v-toolbar>

    <v-row justify="center"
      ><v-col cols="10" class="text-center">
        <v-card title="Conteúdo do Curso"
          ><v-row><v-col cols="4" v-for="materia in materias"><v-card :title="materia.title" height="200px"></v-card></v-col></v-row>
        </v-card> </v-col></v-row
  ></v-card>
</template>
<script setup>
const materias = [
  {
    title: "Apresentação e introdução à segurança da informação",
  },
  {
    title: "Criptografia simétrica e de chave pública",
  },
  {
    title: "Assinatura digital, ICP e certificados",
  },
  {
    title: "Blockchain",
  },
  {
    title: "Ataques e mecanismos de defesa em redes",
  },
  {
    title: "Gestão de segurança da informação",
  },
];
</script>
