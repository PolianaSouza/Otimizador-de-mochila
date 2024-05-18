<template>
  <q-page>
    <div class="flex justify-center">
      <div class="container q-mt-md">
        <div class="row flex justify-center q-gutter-sm">
          <div class="col-sm-4 col-xs-12 containerCard">
            <div class="row justify-between">
              <div
                class="col-12 text-bold flex justify-center items-center q-pa-sm text-h6"
              >
                Informações dos pedidos
              </div>
              <CardPedidos
                class="col-xs-12 col-sm-12 justify-around items-center q-pa-sm q-my-sm"
                v-for="entrega in dadosPedidos.entregas"
                :key="entrega.id"
                :nomeDestinatario="entrega.destinatario"
                :enderecoDestinatario="entrega.endereco"
                :totalEntrega="entrega.total_entrega"
                :peso="entrega.peso"
              />
            </div>
          </div>

          <div class="col-xs-12 col-sm-7 containerCard">
            <div class="row full-width flex justify-center q-mt-md">
              <p class="text-h5 text-bold">Capacidade da mochila</p>
              <div
                class="col-12 flex justify-center"
                v-if="capacidade_total ? false : true"
              >
                <p class="textoMochila text-red-10 q-px-md">
                  * Digite a capacidade da mochila no campo abaixo e clique no
                  botão para otimizar a mochila.
                </p>
              </div>
              <div class="col-12 flex justify-center" else>
                <p class="text-red text-bold text-h4 text-center" else>
                  {{ capacidade_total ? `${capacidade_total} Kg` : "" }}
                </p>
              </div>
            </div>

            <div class="row flex full-width">
              <q-form
                class="full-width flex justify-center q-pa-sm q-my-sm"
                @submit="otimizarMochila"
                @reset="resetarDados"
              >
                <q-input
                  v-model="capacidade_total"
                  label="Capacidade da mochila"
                  outlined
                  class="q-mb-sm input"
                  dense
                  hint="Exemplos de formato aceito: 1.20, 1 ou 0.5"
                  lazy-rules="true"
                  :rules="validarCampoCapacidade"
                />
                <div
                  class="full-width row flex justify-center q-gutter-x-lg q-mt-md"
                >
                  <div class="col-sm-4">
                    <q-btn
                      class="q-my-md q-pa-md q-px-lg full-width"
                      unelevated
                      rounded
                      color="teal-9"
                      label="Otimizar Mochila"
                      no-caps
                      type="submit"
                    />
                  </div>
                  <div class="col-sm-4">
                    <q-btn
                      class="q-my-md q-pa-md q-px-lg full-width"
                      outline
                      rounded
                      color="teal-9"
                      label="Limpar dados"
                      no-caps
                      type="reset"
                    />
                  </div>
                </div>
              </q-form>
            </div>
            <div class="row flex justify-center">
              <div
                class="full-width flex justify-center items-center cardResultado tituloResposta"
              >
                Pedidos que cabem na mochila
              </div>
              <div>
                <CardPedidos
                  class="col-xs-12 col-sm-12 justify-around items-center q-pa-sm q-my-sm"
                  v-for="entrega in entregasSelecionadas"
                  :key="entrega.id"
                  :nomeDestinatario="entrega.destinatario"
                  :enderecoDestinatario="entrega.endereco"
                  :totalEntrega="entrega.total_entrega"
                  :peso="entrega.peso"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import CardPedidos from "src/components/CardPedidos.vue";
import { ref } from "vue";

const capacidade_total = ref();
const entregasSelecionadas = ref([]);

const dadosPedidos = {
  id: 1,
  nome: "McDonalds",
  localizacao: [-38.9450632, -12.2560224],
  endereco:
    "Av. Getúlio Vargas, 1795 - Capuchinhos, Feira de Santana - BA, 44076-015",
  entregas: [
    {
      id: 1,
      destinatario: "Lucas Silva",
      endereco:
        "Travessa Serrolândia, 30, Caseb, Feira de Santana - BA, 44052-168",
      localizacao: [-38.9349956, -12.2384015],
      produtos: [
        {
          id: 12,
          nome: "Pizza Hut Brotinho",
          quantidade: 1,
          preco_unitario: 16.9,
          subtotal: 16.9,
          desconto: 0.0,
          total: 16.9,
        },
      ],
      total_entrega: 16.9,
      total_desconto: 0.0,
      codigo_entrega: 3542,
      pago: false,
      tipo_pagamento: [
        {
          id: 5,
          nome: "Cartão de Crédito VISA Á vista",
          bandeira: "VISA",
        },
      ],
      peso: 0.25,
    },
    {
      id: 2,
      destinatario: "Marcela Almeida",
      endereco: "R. Araraquara, 10 - Caseb, Feira de Santana - BA, 44052-061",
      localizacao: [-12.240613, -38.943099],
      produtos: [
        {
          id: 33,
          nome: "Pizza Hut Box",
          quantidade: 1,
          preco_unitario: 30.9,
          subtotal: 30.9,
          desconto: 0.0,
          total: 30.9,
        },
        {
          id: 55,
          nome: "Coca Cola 1L",
          quantidade: 2,
          preco_unitario: 6.9,
          subtotal: 13.8,
          desconto: 0.0,
          total: 13.8,
        },
      ],
      total_entrega: 44.7,
      total_desconto: 0.0,
      codigo_entrega: 3544,
      pago: false,
      tipo_pagamento: [
        {
          id: 8,
          nome: "Cartão de Crédito MASTERCARD Á vista",
          bandeira: "MASTERCARD",
        },
      ],
      peso: 1.2,
    },
    {
      id: 3,
      destinatario: "João Pedro",
      endereco:
        "R. Gov. Juraci Magalhães, 870 - Ponto Central, Feira de Santana - BA, 44075-115",
      localizacao: [-12.2467237, -38.9514906],
      produtos: [
        {
          id: 12,
          nome: "Pizza Hut Brotinho",
          quantidade: 1,
          preco_unitario: 16.9,
          subtotal: 16.9,
          desconto: 0.0,
          total: 16.9,
        },
        {
          id: 55,
          nome: "Coca Cola 1L",
          quantidade: 1,
          preco_unitario: 6.9,
          subtotal: 6.9,
          desconto: 0.0,
          total: 6.9,
        },
      ],
      total_entrega: 23.8,
      total_desconto: 0.0,
      codigo_entrega: 3545,
      pago: false,
      tipo_pagamento: [
        {
          id: 5,
          nome: "Cartão de Crédito VISA Á vista",
          bandeira: "VISA",
        },
      ],
      peso: 0.6,
    },
  ],
};

const validarCampoCapacidade = [
  (val) => {
    if (!val) {
      return "Por favor, insira a capacidade da mochila.";
    }
    if (isNaN(val)) {
      return "Por favor, insira um valor numérico.";
    }
    if (val <= 0) {
      return "Por favor, insira um valor maior que zero.";
    }
    return true;
  },
];

function resetarDados() {
  capacidade_total.value = null;
  entregasSelecionadas.value = [];
}

function sortPedidos(pedidos) {
  return pedidos.sort((a, b) => {
    if (a.total_entrega !== b.total_entrega) {
      return b.total_entrega - a.total_entrega;
    }
    return a.peso - b.peso;
  });
}

function otimizarMochila() {
  const capacidade = capacidade_total.value;

  const pedidos = sortPedidos([...dadosPedidos.entregas]);

  //converto os pesos para gramas
  const capacidadeMaxima = Math.round(capacidade * 1000);

  //crio a matriz de programação dinâmica
  const dp = Array(pedidos.length + 1)
    .fill(0)
    .map(() => Array(capacidadeMaxima + 1).fill(0));

  //preencho a matriz
  for (let i = 1; i <= pedidos.length; i++) {
    for (let j = 1; j <= capacidadeMaxima; j++) {
      if (pedidos[i - 1].peso * 1000 <= j) {
        dp[i][j] = Math.max(
          dp[i - 1][j],
          dp[i - 1][j - Math.round(pedidos[i - 1].peso * 1000)] +
            pedidos[i - 1].total_entrega
        );
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  //recupero os pedidos que estão na mochila
  let i = pedidos.length;
  let j = capacidadeMaxima;
  entregasSelecionadas.value = [];

  //percorro a e matriz e recupero os pedidos para exibir na tela
  while (i > 0 && j > 0) {
    if (dp[i][j] !== dp[i - 1][j]) {
      entregasSelecionadas.value.push(pedidos[i - 1]);
      j -= Math.round(pedidos[i - 1].peso * 1000);
    }
    i--;
  }

  console.log("Pedidos na mochila otimizada:", entregasSelecionadas.value);
}
</script>

<style>
.container {
  max-width: 95%;
  width: 100%;
}

.containerCard {
  border: 1px solid rgba(224, 224, 224, 0.646);
  border-radius: 10px;
}

.card-inputs {
  border: 1px solid rgb(27, 109, 46);
  width: 100%;
  max-width: 90%;
}

.input {
  width: 100%;
  max-width: 600px;
}

.textoMochila {
  font-size: 1.2rem;
  text-align: center;
}

.tituloResposta {
  height: 50px;
  font-size: 1.2rem;
  font-weight: bold;
  background-color: #e6e6e6;
}
</style>
