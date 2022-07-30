import React, { useState } from 'react';
import Header from '../components/Header';
import ContactForm from '../components/ContactForm';
import ContactTable from '../components/ContactTable';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../actions/contactActions';

const Contact = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [currentId, setCurrentId] = useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useState(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <div>
      <Header userInfo={userInfo} />
      <ContactForm
        open={open}
        handleClose={handleClose}
        currentId={currentId}
        setCurrentId={setCurrentId}
      />
      <ContactTable
        handleClose={handleClose}
        userInfo={userInfo}
        handleClickOpen={handleClickOpen}
        setCurrentId={setCurrentId}

      />
    </div>
  );
};

export default Contact;
