import Eye from '../../assets/remove-red-eye.svg'
import Seta from '../../assets/seta.svg'
import BlogImg from '../../assets/blog1.svg'


function Blog1() {
    return (
        <div className="box--flex" >
            <img src={BlogImg} alt="Banner do cartao" className="cartao__imagem--cima" />
            <div className="cartao cartao--cima box--top">

                <div className="cartao__conteudo">
                    <h3 className="cartao__titulo">A importancia de se manter organizado</h3>
                    <p className="cartao__destaque">Por que a organização é tão importante?
                        Ser organizado significa ser capaz de focar no que é mais
                        importante e fazer aquilo que for prioritário. Se não nos
                        organizamos e não definimos nossos objetivo, deixamos o mundo
                        externo decidir nossas prioridades. Então não somos capazes de
                        escolher em que iremos prestar atenção.</p>
                    <div className="cartao__conteudo--flex">
                        <p className="cartao__perfil">Por Bárbara Nór</p>
                        <p className="cartao__info"><img
                            src={Eye} />52 visualizações</p>
                    </div>
                    <a className="cartao__botao" href="https://vocesa.abril.com.br/geral/as-vantagens-de-ser-organizado/">Ler mais sobre <img
                        src={Seta} /></a>
                </div>
            </div>
        </div>
    )
}

export default Blog1;