import Logo from '../../assets/logo01.png'

function Rodinha() {
    return (
        <div className="box--primeiro">
            <div className="texto--antes">
                <h1>O Sandrário é o melhor calendário para organizar o seu horário!
                    <br /><p> Comece a utiliza-lo agora! </p></h1>
            </div>

            <div className="circle-orbit-container">
                <div className="inner-orbit">
                    <img className="texto" src={Logo} alt="Logo do Sandrário" />
                </div>

                <div className="middle-orbit"></div>

                <div className="outer-orbit">
                    <ul className="ring-0">
                        <li>
                            <p className="orbit-icon ">Fácil e prático de usar</p>
                        </li>
                        <li>
                            <p className="orbit-icon ">Organize seus agendamentos</p>
                        </li>
                        <li>
                            <p className="orbit-icon ">Melhore sua rotina</p>
                        </li>
                        <li>
                            <p className="orbit-icon ">Controle dos compromissos</p>
                        </li>
                    </ul>
                </div>
            </div >
        </div>
    );
}

export default Rodinha;