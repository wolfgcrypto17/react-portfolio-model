import '../../styles/components/cv-button.sass'

export const CurriculumButton = () => {

    const handleOpenCV = () => {
            
        const cvURL = 'src/doc/cv.pdf';
        window.open(cvURL, '_blank');
    
    };

    return (
        <a id='cv' className="download-button" onClick={handleOpenCV}>
            Baixar Currículo
        </a>
    );
};
