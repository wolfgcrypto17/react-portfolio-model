import '../../styles/components/main-content.sass'
import { About } from '../about';
import { Projects } from '../projects';
import { Tecnologies } from '../tecnology';

export const MainContent = () => {
    
    return (
        <main id='main-content'>
            <About/>
            <Tecnologies/>
            <Projects/>
        </main>
    );
}