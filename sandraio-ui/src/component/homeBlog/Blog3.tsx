import Eye from '../../assets/remove-red-eye.svg'
import Seta from '../../assets/seta.svg'
import BlogImg from '../../assets/blog3.svg'

function Blog3() {
    return (
        <div className="box--flex">
            <img src={BlogImg} alt="Banner do cartao" className="cartao__imagem--cima" />
            <div className="cartao cartao--cima">

                <div className="cartao__conteudo">
                    <h3 className="cartao__titulo">Gestão do tempo: o que é, suas vantagens e como colocá-la em prática</h3>
                    <p className="cartao__destaque">A gestão do tempo deixou de ser uma disciplina de controle e passou a
                        ser fundamental para o equilíbrio, tanto na vida pessoal, quanto na profissional.
                        Usar ferramentas adequadas de gestão do tempo promove melhor qualidade de
                        vida, relacionamentos mais saudáveis e maior produtividade.</p>
                    <div className="cartao__conteudo--flex">
                        <p className="cartao__perfil">Por Peter</p>
                        <p className="cartao__info"><img
                            src={Eye} />124 visualizações</p>
                    </div>
                    <a className="cartao__botao" href="https://www.kaptiva.com.br/2021/03/24/gestao-do-tempo/ ">Ler mais sobre <img
                        src={Seta} /></a>
                </div>
            </div>

        </div>
    )
}

export default Blog3;