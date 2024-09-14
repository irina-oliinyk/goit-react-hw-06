import { FaRegUser } from 'react-icons/fa';
import { BsTelephoneOutbound } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import css from './Contact.module.css';

export default function Contact({ item }) {
  const dispatch = useDispatch();
  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };
  return (
    <div className={css.card}>
      <FaRegUser className={css.nameIcon} />
      <p className={css.name}>{item.name}</p>
      <BsTelephoneOutbound className={css.phoneIcon} />
      <p className={css.phone}>{item.number}</p>
      <button
        className={css.button}
        onClick={() => {
          handleDelete(item.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}
