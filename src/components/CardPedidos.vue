<template>
  <div>
    <q-card class="q-pa-sm q-px-md cardEntregas">
      <p class="text-indigo-10">
        <strong class="text-dark">Nome:</strong>
        {{ nomeDestinatario }}
      </p>
      <p><strong>Endereço:</strong> {{ enderecoDestinatario }}</p>
      <p><strong>Total da entrega:</strong> {{ totalEntrega }}</p>
      <p class="text-red text-bold">
        <strong class="text-dark">Peso:</strong> {{ peso }} Kg
      </p>
    </q-card>
  </div>
</template>

<script setup>
const props = defineProps({
  nomeDestinatario: {
    type: String,
    required: true,
    default: "",
  },
  enderecoDestinatario: {
    type: String,
    required: true,
    default: "",
  },
  totalEntrega: {
    type: Number,
    required: true,
    default: 0,
  },
  peso: {
    type: Number,
    required: true,
    default: 0,
  },
});
</script>

<style scoped>
.cardEntregas {
  height: 100%;
  min-height: 150px;
}
</style>
