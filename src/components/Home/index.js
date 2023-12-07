import React from 'react'
import style from './home.module.css';
import Contato from '../Contato/index';

export const Home = () => {
    return (
    
      <>
      <div className={style.header}>
      <div className={style.texto}>
        <a href='/'>HOME</a> | <a href='/Contato'>Contatos</a>
      </div>
  </div>

    <div className={style.container}>

      <text className={style.textoP}>Nome: <text className={style.conteudo}> Iasmin </text> </text> <br/>
      <text className={style.textoP}>Idade: <text className={style.conteudo}> 18 anos </text> </text> <br/>
      <text className={style.textoP}>Cidade: <text className={style.conteudo}> Pirapora do Bom Jesus </text> </text> <br/>
      <text className={style.textoP}>Estado: <text className={style.conteudo}> São Paulo </text> </text> <br/>
      <text className={style.textoP}>Responsável: <text className={style.conteudo}> Lourival Júnior </text> </text> <br/>
      <text className={style.textoP}>Tipo Sanguíneo: <text className={style.conteudo}> AB+ </text> </text> <br/>
      <text className={style.textoP}>Alergia: <text className={style.conteudo}> Amendoim </text> </text> <br/>
      <text className={style.textoP}>Medicamento: <text className={style.conteudo}> Dipirona </text> </text> <br/>
      <text className={style.textoP}>Quantidade: <text className={style.conteudo}> 1 comprimido </text> </text> <br/>
      <text className={style.textoP}>Horário: <text className={style.conteudo}> 14:00 </text> </text> <br/>
      <text className={style.textoP}>Temperamento: <text className={style.conteudo}> Calma </text> </text> <br/>
      <text className={style.textoP}>Como acalmar: <text className={style.conteudo}> Diálogo longo </text> </text> <br/>

    </div>
    </>
);
};
export default Home;