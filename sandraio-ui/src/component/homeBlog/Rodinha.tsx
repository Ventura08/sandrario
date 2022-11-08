import Logo from '../../assets/logo.png'

function Rodinha() {
    return (
        <div className="rodinha">
            <div className="orbit">

                <ul className="orbit-wrap">

                    <li className="orbit-center">
                        <div className="orbit-center__icon"><img src={Logo} /></div>
                    </li>

                    <li>
                        <ul className="ring-1"></ul>
                    </li>

                    <li>
                        <ul className="ring-2"></ul>
                    </li>

                    <li>
                        <ul className="ring-0">
                            <li><i className="orbit-icon "></i></li>
                            <li><i className="orbit-icon "></i></li>
                            <li><i className="orbit-icon "></i></li>
                            <li><i className="orbit-icon "></i></li>
                            <li><i className="orbit-icon "></i></li>
                        </ul>
                    </li>


                </ul>

            </div>
        </div>
    );
}

export default Rodinha;