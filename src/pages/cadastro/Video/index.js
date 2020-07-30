import React from 'react';
import PageDeafult from '../../../componentes/PageDefault';
import { Link } from 'react-router-dom';


function CadastroVideo(){
    return(
      <PageDeafult>
        <h1>Página de Cadastro de Vídeo</h1>
        <Link to="/cadastro/categoria">
          Cadastrar Categoria
        </Link>
      </PageDeafult>
    )
  }

export default CadastroVideo;