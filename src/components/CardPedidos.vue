<template>
  <div>
    <q-card
      class="col-xs-12 col-sm-12 justify-around items-center q-pa-sm q-my-sm"
    >
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
