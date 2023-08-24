import { AiFillPhone, AiFillEnvironment } from 'react-icons/ai'
import { HiOutlineMail } from 'react-icons/hi'

import '../../styles/components/info-tecnology.sass'


export const InfoTecnology = () => {

    return (
        <section id='information-container'>

            <div className="info-card">
                <AiFillPhone id='phone-icon' />
                <div>
                    <h3>Telefone</h3>
                    <p>+244 936 561 472</p>
                </div>
            </div>


            <div className="info-card">
                <HiOutlineMail id='email-icon' />
                <div>
                    <h3>G-mail</h3>
                    <p>tavaresevaristo07</p>
                </div>
            </div>

            <div className="info-card">
                <AiFillEnvironment id='pin-icon' />
                <div>
                    <h3>Localização</h3>
                    <p> Luanda - Angola </p>
                </div>
            </div>
        </section>
    );
}