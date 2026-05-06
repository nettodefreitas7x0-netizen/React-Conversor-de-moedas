import styled from "styled-components";

// Título principal verde
export const Texto = styled.h1`
  color: green;
`;

// Imagem com largura fixa
export const ImgMoney = styled.img`
  width: 200px;
  @media (max-height:550px) {

    display: none;
    
  }
`;

// Container principal - centraliza conteúdo vertical e horizontalmente, fundo preto e altura mínima da viewport
export const Container = styled.div`
  display: flex;
  background-color: #b8b8b8;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
`;

export const Wap = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-color: #313131;
border: 5px solid green;
border-radius: 20px;
`

// Seção do topo com layout em coluna, centralizado
export const SecaoTopo = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  /* Estilo dos selects */
  select {
    margin-bottom: 10px;
    border-radius: 20px;
    border: solid 4px green;
  }

  /* Estilo do input */
  input {
    border: solid 4px green;
    margin-bottom: 10px;
  }
`;

// Seção inferior com layout em coluna
export const SecaoBaixo = styled.section`

  p {
    display: flex;
    margin: 5px;
    color: white;
    justify-content: center;
  }

  img {display: flex;
    margin: 0 auto;
    @media (max-height:356px) {
      display : none;
    }
  }
`;

// Selects genéricos para usar no componente (sem estilos extras por enquanto)
export const SelectDe = styled.select``;

export const SelectPara = styled.select``;