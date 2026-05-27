import { Cabecalho } from "../Componentes/Cabecalho";
import { Rodape } from "../Componentes/Rodape";
import estilo from "./Envolvidos.module.css";

function ProfileCard({ name, title, description, location, email, iconType }) {
  return (
    <div className={`${estilo.profilePanel} ${estilo[iconType]}`}>
      <div className={estilo.profileIconWrapper}>
        <div className={estilo.profileIcon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
      </div>

      <div className={estilo.profileContent}>
        <div className={estilo.profileHeaderInfo}>
          <h2 className={estilo.profileName}>{name}</h2>
          <p className={estilo.profileTitle}>{title}</p>
        </div>

        <p className={estilo.profileDescription}>{description}</p>

        {(location || email) && (
          <div className={estilo.profileInfo}>
            {location && (
              <div className={estilo.infoItem}>
                <span>{location}</span>
              </div>
            )}

            {email && (
              <div className={estilo.infoItem}>
                <a href={`mailto:${email}`}>{email}</a>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export function Envolvidos() {
  const teamMembers = [
    {
      name: "Nicolas",
      title: "Back",
      description:
        "Criando experiências digitais que conectam pessoas e resolvem problemas reais.",
      location: "São Paulo, Brasil",
      email: "maria@example.com",
      iconType: "profilePanelLeft",
    },
    {
      name: "Gilson",
      title: "Front",
      description:
        "Desenvolvendo soluções web escaláveis com foco em performance e user experience.",
      iconType: "profilePanelRight",
    },
  ];

  return (
    <>
      <Cabecalho />

      <div className={estilo.profileContainer}>
        <div className={estilo.profileHeader}>
          <h1>Conheça Nossa Equipe</h1>
          <p>Passe o mouse sobre os ícones para explorar os perfis</p>
        </div>

        <div className={estilo.profileShowcase}>
          {teamMembers.map((member, index) => (
            <ProfileCard key={index} {...member} />
          ))}
        </div>

        <div className={estilo.profileFooter}>
          <p>Interaja com os perfis para descobrir mais informações</p>
        </div>
      </div>

      <Rodape />
    </>
  );
}
