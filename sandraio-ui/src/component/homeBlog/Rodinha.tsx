
function Rodinha() {
    return (
        <div className="rodinha">
            <div className="orbit">

                <ul className="orbit-wrap">

                    <li className="orbit-center">
                        <div className="orbit-center__icon">
                            <p>O Sandrário é o melhor calendário para organizar o seu horário!</p>
                        </div>
                    </li>

                    <li>
                        <ul className="ring-1"></ul>
                    </li>

                    <li>
                        <ul className="ring-2"></ul>
                    </li>

                    <li>
                        <ul className="ring-0">
                            <li><p className="orbit-icon ">Fácil e prático de usar</p></li>
                            <li><p className="orbit-icon ">Organize seus agendamentos</p></li>
                            <li><p className="orbit-icon ">Melhore sua rotina</p></li>
                            <li><p className="orbit-icon ">Controle dos compromissos</p></li>
                        </ul>
                    </li>


                </ul>

            </div>
        </div>
    );
}

export default Rodinha;