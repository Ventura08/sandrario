import Eye from '../../assets/remove-red-eye.svg'
import Seta from '../../assets/seta.svg'
import BlogImg from '../../assets/blog2.svg'

function Blog2() {
    return (
        <div className="box--flex">
            <img src={BlogImg} alt="Banner do cartao" className="cartao__imagem--cima" />
            <div className="cartao cartao--cima">

                <div className="cartao__conteudo">
                    <h3 className="cartao__titulo">Dicas para planejar a rotina diária e conseguir dar conta de tudo</h3>
                    <p className="cartao__destaque">Com a definição das suas tarefas diárias, é possível prevenir
                        imprevistos e diminuir o estresse. Além disso, ter um bom planejamento da rotina é uma forma de
                        melhorar a qualidade de vida para aqueles que buscam bem-estar e equilíbrio diário.</p>
                    <div className="cartao__conteudo--flex">
                        <p className="cartao__perfil">Por Rock</p>
                        <p className="cartao__info"><img
                            src={Eye} />46 visualizações</p>
                    </div>
                    <a className="cartao__botao" href="https://uaulimpeza.com.br/blog/planejar-a-rotina/">Ler mais sobre <img
                        src={Seta} /></a>
                </div>
            </div>

        </div>
    )
}

export default Blog2;