
import { InfoTecnology } from '../info-tecnology';
import { SocialMedia } from '../social-media';

import Avatar from '../../img/photo.jpeg'
import '../../styles/components/sidebar.sass'
import { CurriculumButton } from '../cv-button';


export const SideBar = () => {
    
    return (
        <aside id="sidebar">

            <img src={Avatar} alt="tavares evaristo" />
            <p className="title">Desenvolvedor Web</p>
            <SocialMedia/>
            <InfoTecnology/>
            <CurriculumButton/>
        </aside>
    );
}