// FOTOS DOS PRODUTOS
// Para cada produto (id):
//   padrao: fotos mostradas quando a cor não tem fotos próprias
//   cores:  fotos da peça em cada cor (a primeira é a foto principal ao clicar na cor)
// Basta colocar o caminho das imagens nas listas. Lista vazia [] = usa as fotos "padrao".
const FOTOS = {
  1: { // Conjunto Crochê Sunset Pearl
    padrao: ["img/conjuntos/conjuntoCroche.jpeg"],
    cores: {
      bege: ["img/conjuntos/conjuntoCroche.jpeg", "img/conjuntos/conjuntoCroche-pose3.png", "img/conjuntos/conjuntoCroche-pose2.png"],
      preto: ["img/conjuntos/conjuntoCroche-Preto.png", "img/conjuntos/conjuntoCroche-Preto pose2.png", "img/conjuntos/conjuntoCroche-Preto pose3.png"],
    }
  },
  2: { // Conjunto Metallic Glow
    padrao: ["img/conjuntos/dourado.jpeg"],
    cores: {
      dourado: ["img/conjuntos/dourado.jpeg", "img/conjuntos/dourado-pose3.png", "img/conjuntos/dourado-pose2.png"],
      cinza: ["img/conjuntos/dourado-Prata.png", "img/conjuntos/dourado-Prata pose3.png", "img/conjuntos/dourado-Prata pose2.png"],
    }
  },
  3: { // Vestido Maxi Cut-Out White Sands
    padrao: ["img/vestidos/vestidoBranco.jpeg"],
    cores: {
      areia: ["img/vestidos/vestidoBranco.jpeg", "img/vestidos/vestidoBranco-Areia pose2.png", "img/vestidos/vestidoBranco-Areia pose3.png"],
      branco: ["img/vestidos/vestidoBranco-Branco.png", "img/vestidos/vestidoBranco-Branco pose2.png", "img/vestidos/vestidoBranco-Branco pose3.png"],

    }
  },
  4: { // Conjunto Sparkle Crystal Festival
    padrao: ["img/conjuntos/lantejola.jpeg"],
    cores: {
      dourado: ["img/conjuntos/lantejola-dourada.png", "img/conjuntos/lantejola-Dourado pose2.png", "img/conjuntos/lantejola-Dourado pose3.png"],
      prata: ["img/conjuntos/lantejola.jpeg", "img/conjuntos/lantejola-pose2.png", "img/conjuntos/lantejola-pose3.png"],
      preto: ["img/conjuntos/lantejola-Preto.png", "img/conjuntos/lantejola-Preto pose2.png", "img/conjuntos/lantejola-Preto pose3.png"]
    }
  },
  5: { // 
    padrao: ["img/vestidos/vestidoFlor.jpg"],
    cores: {
      laranja: ["img/vestidos/vestidoFlor.jpg"],
      azul: ["img/vestidos/vestidoFlor-Azul.jpg"],
      preto: ["img/vestidos/vestidoFlor-Preto.jpg"],
    }
  },
  6: { // Vestido Longo Crochê Sol Dourado
    padrao: ["img/vestidos/vestido.jpeg"],
    cores: {
      cinza: ["img/vestidos/vestido-Prata.png", "img/vestidos/vestido-Prata pose2.png", "img/vestidos/vestido-Prata pose3.png"],
      dourado: ["img/vestidos/vestido.jpeg", "img/vestidos/vestido pose2.png", "img/vestidos/vestido pose3.png"],
    }
  },
  7: { // Vestido Longo Tule Sunset Glow
    padrao: ["img/vestidos/vestidoColorido.jpeg"],
    cores: {
      pink: ["img/vestidos/vestidoColorido.jpeg", "img/vestidos/vestidoColorido-pose2.png", "img/vestidos/vestidoColorido-pose3.png"],
      azul: ["img/vestidos/vestidoColorido-Azul.png", "img/vestidos/vestidoColorido-Azul pose2.png", "img/vestidos/vestidoColorido-Azul pose3.png"],
    }
  },
  8: { // Conjunto Resort Náutico Breeze
    padrao: ["img/conjuntos/listrado.png"],
    cores: {
      marrom: ["img/conjuntos/listrado-Marrom.jpg", "img/conjuntos/listrado-Marrom pose2.png", "img/conjuntos/listrado-Marrom pose3.png"],
      marinho: ["img/conjuntos/listrado.png", "img/conjuntos/listrado-pose2.png", "img/conjuntos/listrado-pose3.png"],
      vermelho: ["img/conjuntos/listrado-Vermelho.jpg", "img/conjuntos/listrado-Vermelho pose2.png", "img/conjuntos/listrado-Vermelho pose3.png"],
    }
  },
  9: { // Vestido Maxi Croché Cut-Out Sereia
    padrao: ["img/vestidos/vestidoCroche.jpeg"],
    cores: {
      branco: ["img/vestidos/vestidoCroche.jpeg", "img/vestidos/vestidoCroche pose2.png", "img/vestidos/vestidoCroche-pose3.png"],
    }
  },
  10: { // Vestido Midi Drapeado Olive Riviera
    padrao: ["img/vestidos/vestidoVerde.jpeg"],
    cores: {
      oliva: ["img/vestidos/vestidoVerde.jpeg", "img/vestidos/vestidoVerde pose2.png"],
      marrom: ["img/vestidos/vestidoVerde-Marrom.jpg", "img/vestidos/vestidoVerde-Marrom pose2.png" ],
      vinho: ["img/vestidos/vestidoVerde-Vinho.jpg", "img/vestidos/vestidoMarrom-Vinho pose2.png"],
    }
  },
  21: { // Chapéu Bucket Straw Sunlit
    padrao: ["img/acessorios/chapeu.jpeg"],
    cores: {
      marrom: ["img/acessorios/chapeu.jpeg", "img/acessorios/chapeu-pose2.png", "img/acessorios/chapeu-pose3.png"],
      areia: ["img/acessorios/chapeu-Branco.png", "img/acessorios/chapeu- Branco pose2.png", "img/acessorios/chapeu-Branco pose3.png"],
    }
  },
  22: { // Bolsa Tote Palha Maré Chic
    padrao: ["img/acessorios/bolsaPalha.jpeg"],
    cores: {
      areia: ["img/acessorios/bolsaPalha.jpeg", "img/acessorios/bolsa-pose2.png", "img/acessorios/bolsa-pose3.png"],
      marrom: ["img/acessorios/bolsaPalha-Marrom.png", "img/acessorios/bolsa-Marrom pose2.png", "img/acessorios/bolsa-Marrom pose3.png"],
    }
  },
  23: { // Óculos de Sol Vintage Cat-Eye Gold
    padrao: ["img/acessorios/oculos.jpeg"],
    cores: {
      preto: ["img/acessorios/oculos.jpeg", "img/acessorios/oculos-pose2.png", "img/acessorios/%C3%B3culos-pose3.png"],
      marrom: ["img/acessorios/oculos-Marrom.png", "img/acessorios/oculos-Marrom pose2.png", "img/acessorios/oculos-Marrom pose3.png"],
      cinza: ["img/acessorios/oculos-Branco.png", "img/acessorios/oculos-Branco pose2.png", "img/acessorios/oculos-Branco pose3.png"],
    }
  },
  24: { // Toalha Canga Caligrafia Praia
    padrao: ["img/acessorios/toalha.jpeg"],
    cores: {
      marrom: ["img/acessorios/toalha.jpeg"],
      preto: ["img/acessorios/toalha-Preto.png"],
    }
  },
  25: { // Boné Beach Vibes White
    padrao: ["img/acessorios/bone.jpeg"],
    cores: {
      cinza: ["img/acessorios/bone.jpeg", "img/acessorios/bone-pose2.png",  "img/acessorios/bone-pose3.jpg"],
      marrom: ["img/acessorios/bone-Marrom.png", "img/acessorios/bone-Marrom pose2.png", "img/acessorios/bone-Marrom pose3.png"],
      preto: ["img/acessorios/bone-Preto.png", "img/acessorios/bone-Preto pose2.png", "img/acessorios/bone-Preto pose3.png"],
    }
  },
  26: { // Anel Solitário Oval Golden Glow
    padrao: ["img/acessorios/anel.jpeg"],
    cores: {
      dourado: ["img/acessorios/anel.jpeg", "img/acessorios/anel pose2.png"],
      cinza: ["img/acessorios/anel-Prata.png", "img/acessorios/anel-Prata pose2.png"],
    }
  },
  27: { // Sandália Rasteira Metalizada Gold Breeze
    padrao: ["img/acessorios/rasteira.jpeg"],
    cores: {
      areia: ["img/acessorios/rasteira-Creme.png", "img/acessorios/rasteira-Creme pose2.png"],
      marrom: ["img/acessorios/rasteira.jpeg", "img/acessorios/rasteira-pose2.png"],
    }
  },
  28: { // Brincos Maxi Flor de Verão Gold
    padrao: ["img/acessorios/brinco.jpeg"],
    cores: {
      dourado: ["img/acessorios/brinco.jpeg", "img/acessorios/brinco-pose2.png"],
      cinza: ["img/acessorios/brinco-Prata.png", "img/acessorios/brinco-Prata pose2.png"],
    }
  },
  31: { // Biquini Crochê Turquoise Shells
    padrao: ["img/biquinis/biquiniAzul.jpeg"],
    cores: {
      azul: ["img/biquinis/biquiniAzul.jpeg", "img/biquinis/biquiniAzul-pose2.png", "img/biquinis/biquiniAzul-pose3.png"],
      amarelo: ["img/biquinis/biquiniAzul-Amarelo.png", "img/biquinis/biquiniAzul-Amarelo pose2.png", "img/biquinis/biquiniAzul-Amarelo pose3.png"],
      rosa: ["img/biquinis/biquiniAzul-Rosa.png", "img/biquinis/biquiniAzul-Rosa pose2.png", "img/biquinis/biquiniAzul-Rosa pose3.png"],
    }
  },
  32: { // Túnica Rendada Noir Chic
    padrao: ["img/biquinis/biquini.png"],
    cores: {
      marrom: ["img/biquinis/biquini.png", "img/biquinis/biquini-pose3.png", "img/biquinis/biquini-pose2.png"],
      terracota: ["img/biquinis/biquini-Terracota.png", "img/biquinis/biquini-Terracota pose2.png", "img/biquinis/biquini-Terracota pose3.png"],
      preto: ["img/biquinis/biquini-Preto.jpg", "img/biquinis/biquini-Preto pose3.png", "img/biquinis/biquini-Preto pose2.png"],
    }
  },
  33: { // Top Bralette Renda Pérola
    padrao: ["img/biquinis/biquiniBranco.jpeg"],
    cores: {
      areia: ["img/biquinis/biquiniBranco.jpeg", "img/biquinis/biquiniBranco-pose3.png", "img/biquinis/biquiniBranco-pose2.png"],
    }
  },
  34: { // Calcinha Lateral Regulável
    padrao: ["img/biquinis/biquiniMarrom-Vermelho.jpeg"],
    cores: {
      marrom: ["img/biquinis/biquiniMarrom.jpeg","img/biquinis/biquiniMarrom pose2.png", "img/biquinis/biquiniMarrom pose3.png"],
      preto: ["img/biquinis/biquiniMarrom-Preto.png", "img/biquinis/biquiniMarrom-Preto pose 2.png", "img/biquinis/biquiniMarrom-Preto pose3.png"],
      branco: ["img/biquinis/biquiniMarrom-Branco.png", "img/biquinis/biquiniMarrom-Branco pose 2.png", "img/biquinis/biquiniMarrom-Branco pose3.png"],
      vermelho: ["img/biquinis/biquiniMarrom-Vermelho.png", "img/biquinis/biquiniMarrom-Vermelho pose2.png", "img/biquinis/biquiniMarrom-Vermelho pose3.png"],
    }
  },
  41: { // Conjunto Assimétrico Olive Resort
    padrao: ["img/conjuntos/conjuntoVerde.jpeg"],
    cores: {
      verde: ["img/conjuntos/conjuntoVerde.jpeg", "img/conjuntos/conjuntoVerde-pose2.png", "img/conjuntos/conjuntoVerde-pose3.png"],
      vinho: ["img/conjuntos/conjuntoVerde-Vinho.jpeg", "img/conjuntos/conjuntoVerde-Vinho pose2.png", "img/conjuntos/conjuntoVerde-Vinho pose3.jpeg"],
    }
  },
  42: { // Conjunto Sereia Crystal Ocean
    padrao: ["img/conjuntos/azulBrilhante-pose2.png"],
    cores: {
      azul: ["img/conjuntos/azulBrilhante-pose2.png", "img/conjuntos/azulBrilhante.jpeg", "img/conjuntos/azulBrilhante-pose3.png"],
      rosa: ["img/conjuntos/azulBrilhante-Rosa pose2.png", "img/conjuntos/azulBrilhante-Rosa.png", "img/conjuntos/azulBrilhante-Rosa pose3.png"],
      vermelho: ["img/conjuntos/azulBrilhante-Vermelho pose2.png", "img/conjuntos/azulBrilhante-Vermelho.png", "img/conjuntos/azulBrilhante-Vermelho pose3.png"],
    }
  },
  45: { // Conjunto Assimétrico Olive Resort
    padrao: ["img/conjuntos/saiaTop.jpeg"],
    cores: {
      branco: ["img/conjuntos/saiaTop.jpeg","img/conjuntos/saiaTop pose2.png","img/conjuntos/saiaTop pose3.png"]
      }
    }
};