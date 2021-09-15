import '../../css/Pokedex/Footer.scss';

const CONTACTS = [
  {
    id: "linkedin",
    url: "https://www.linkedin.com/in/marcelo-kenzo-takamori/",
  },
  {
    id: "github",
    url: "https://github.com/kenzotakamori",
  },
  {
    id: "instagram",
    url: "https://www.instagram.com/marcelokenzot/",
  },
  {
    id: "facebook",
    url: "https://www.facebook.com/marcelokenzot/",
  },
];

const PokedexFooter = (props: any) => {
  const ContactList = CONTACTS.map((contact: any) => (
    <a 
      href={contact.url}
      target="_blank"
      rel="noreferrer"
    >
      <i className={`fab fa-${contact.id}`}></i>
    </a>
  ));

  return (
    <footer className={props.isOpen ? 'footer-open' : ''}>
      <div className="row-icons">
        {ContactList}
      </div>
    </footer>
  );
};

export default PokedexFooter;