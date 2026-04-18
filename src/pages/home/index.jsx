import {
  Texto,
  ImgMoney,
  Container,
  SecaoTopo,
  SecaoBaixo,
  SelectDe,
  SelectPara,
} from "./styles";
import { useEffect, useState } from "react";

import brasilImg from "../../assets/brasil 2.png";
import dolarImg from "../../assets/estados-unidos.png";
import libraImg from "../../assets/img-libra.png";
import euroImg from "../../assets/img-euro.png";
import bitcoinImg from "../../assets/img-bitt.png";

// Mapeamento dos nomes das moedas com acentos e espaços
const nomesMoedas = {
  real: "Real Brasileiro",
  dolar: "Dólar Americano",
  euro: "Euro",
  libra: "Libra Esterlina",
  bitcoin: "Bitcoin",
};

// Mapeamento das imagens correspondentes a cada moeda
const imagensMoedas = {
  real: brasilImg,
  dolar: dolarImg,
  euro: euroImg,
  libra: libraImg,
  bitcoin: bitcoinImg,
};

// Taxas de câmbio fixas em relação ao Real
const taxasCambio = {
  real: 1,
  dolar: 5.3,
  euro: 6.2,
  libra: 7.2,
  bitcoin: 9.2,
};

// Função para formatar valores em moeda conforme a moeda selecionada
const formatarMoeda = (valor, moeda) => {
  if (moeda === "bitcoin") {
    return valor.toFixed(6) + " ₿";
  }

  const codigoMoedaMap = {
    real: "BRL",
    dolar: "USD",
    euro: "EUR",
    libra: "GBP",
  };

  const codigoMoeda = codigoMoedaMap[moeda] || "BRL";

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: codigoMoeda,
  }).format(valor);
};


function App() {
  // Estados para moeda origem, moeda destino, valor digitado e resultado da conversão
  const [moedaDe, setMoedaDe] = useState("real");
  const [moedaPara, setMoedaPara] = useState("dolar");
  const [valor, setValor] = useState("");
  const [resultado, setResultado] = useState("");

  // Atualiza o resultado da conversão toda vez que muda moedaDe, moedaPara ou valor
  useEffect(() => {
    if (valor === "" || isNaN(valor)) {
      setResultado("");
      return;
    }

    // Converte o valor para reais e depois para a moeda destino
    const valorBase = parseFloat(valor) * taxasCambio[moedaDe];
    const valorConvertido = valorBase / taxasCambio[moedaPara];

    setResultado(valorConvertido.toFixed(2));
  }, [moedaDe, moedaPara, valor]);

  return (
    <Container>
      <ImgMoney
        src="https://png.pngtree.com/png-vector/20241217/ourmid/pngtree-clipart-of-a-money-bag-filled-with-gold-coins-featuring-dollar-png-image_14789520.png"
        alt="Saco de dinheiro"
      />
      <Texto>Conversor de Moedas</Texto>

      <SecaoTopo>

        <SelectDe value={moedaDe} onChange={(e) => setMoedaDe(e.target.value)}>
          <option value="real">R$ Real Brasileiro</option>
          <option value="dolar">US$ Dólar Americano</option>
          <option value="euro">€ Euro</option>
          <option value="libra">£ Libra Esterlina</option>
          <option value="bitcoin">₿ Bitcoin</option>
        </SelectDe>


        <SelectPara value={moedaPara} onChange={(e) => setMoedaPara(e.target.value)}>
          <option value="dolar">US$ Dólar Americano</option>
          <option value="real">R$ Real Brasileiro</option>
          <option value="euro">€ Euro</option>
          <option value="libra">£ Libra Esterlina</option>
          <option value="bitcoin">₿ Bitcoin</option>
        </SelectPara>

        <input
          type="number"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          placeholder="Digite o valor"
        />

   
      </SecaoTopo>

      <SecaoBaixo>
   
        <div>
          <img
            src={imagensMoedas[moedaDe]}
            alt={`Imagem da moeda ${moedaDe}`}
            style={{ width: 40, height: 40 }}
          />
          <p>{nomesMoedas[moedaDe]}</p>
          <p>{valor === "" ? "-" : formatarMoeda(Number(valor), moedaDe)}</p>
        </div>

        <div>
          <img
            src={imagensMoedas[moedaPara]}
            alt={`Imagem da moeda ${moedaPara}`}
            style={{ width: 40, height: 40 }}
          />
          <p>{nomesMoedas[moedaPara]}</p>
          <p>{resultado === "" ? "-" : formatarMoeda(Number(resultado), moedaPara)}</p>
        </div>
      </SecaoBaixo>
    </Container>
  ); 
}

export default App;