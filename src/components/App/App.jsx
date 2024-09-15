import css from './App.module.css';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';

export default function App() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList contacts={filteredContacts} />
    </div>
  );
}

// import css from './App.module.css';
// import ContactList from '../ContactList/ContactList';
// import SearchBox from '../SearchBox/SearchBox';
// import ContactForm from '../ContactForm/ContactForm';
// import { useSelector } from 'react-redux';
// import { selectContacts } from '../../redux/contactsSlice';
// import { selectNameFilter } from '../../redux/filtersSlice';

// function App() {
//   const contacts = useSelector(selectContacts);
//   const filter = useSelector(selectNameFilter);

//   const visibleContacts =
//     contacts &&
//     contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase()),
//     );

//   return (
//     <div className={css.conteiner}>
//       <h1>Phonebook</h1>
//       <ContactForm />
//       <SearchBox />
//       <ContactList contacts={visibleContacts} />
//     </div>
//   );
// }

// export default App;
