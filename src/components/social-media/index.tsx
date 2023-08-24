
import { FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';
import '../../styles/components/social-media.sass';

type SocialMediaType = {
  name: string;
  link: string
  icon: JSX.Element;
};

const socialMedias: SocialMediaType[] = [
  { name: "linkedin", icon: <FaLinkedinIn />, link: 'https://www.linkedin.com/in/tavares-evaristo/' },
  { name: "github", icon: <FaGithub />, link: 'https://github.com/tavaresevaristo/'},
  { name: "instagram", icon: <FaInstagram />, link: 'https://www.instagram.com/tavares_evaristo/' },
];

export const SocialMedia = () => {
    
  return (

    <section id='social-media'>

      {socialMedias.map(network => (
        <a href={network.link} className='social-btn' id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}

    </section>
  );
};
