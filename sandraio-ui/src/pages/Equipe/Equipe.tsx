import Babi from '../../assets/equipe/babi.jpg'
import Glatz from '../../assets/equipe/glatz.jpeg'
import Rafa from '../../assets/equipe/rafa.jpeg'
import Tevo from '../../assets/equipe/tevo.jpeg'

export default function Equipe() {
    return (
        <div>
            <h1 className='text-3xl mt-5'>Equipe</h1>
            <div className="equipe__box--flex">

                <div className="equipe--box">
                    <img className="equipe--box-img" src={Babi} alt="Imagem do integrante" />
                    <h1>Bárbara Almeida</h1>
                </div>

                <div className="equipe--box">
                    <div className="equipe--box-img">
                        <img className="img-tevo" src={Tevo} alt="Imagem do integrante" />
                    </div>
                    <h1>Estevao Boaventura</h1>
                </div>

            </div>

            <div className="equipe__box--flex">

                <div className="equipe--box">
                    <img className="equipe--box-img" src={Glatz} alt="Imagem do integrante" />
                    <h1>Gabriel Glatz</h1>
                </div>

                <div className="equipe--box">
                    <img className="equipe--box-img" src={Rafa} alt="Imagem do integrante" />
                    <h1>Rafaela Mendes</h1>
                </div>

            </div>

            <h1 className="copy">© Copyright 2022 | Sandrário - Todos os direitos reservados</h1>
        </div>
    )
}