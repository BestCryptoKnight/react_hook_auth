import React from 'react';
import { Button, Card, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import MaterialTable from 'material-table';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, deleteContacts } from '../actions/contactActions';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  card: {
    margin: '10px',
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
    fontSize: '1.96rem',
  },
}));

const ContactTable = ({ handleClickOpen, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const contacts = useSelector((state) => state.contacts);
  console.log(contacts);

  const delContact = (id) => {
    dispatch(deleteContact(id));
  };

  const delContacts = (idArr) => {
    dispatch(deleteContacts(idArr));
  };

  return (
    <>
      <div style={{ textAlign: 'right' }}>
        <Button
          variant='contained'
          color='primary'
          size='large'
          className={classes.button}
          startIcon={<AddIcon />}
          onClick={handleClickOpen}
        >
          Add Contact
        </Button>
      </div>
      <Card>
        <MaterialTable
          title='Contact Details'
          columns={[
            {
              title: 'Image',
              field: 'selectedImage',
              render: (rowData) => (
                <img
                  alt='Userimage'
                  style={{ height: 36, borderRadius: '50%' }}
                  src={rowData.selectedImage}
                />
              ),
            },
            { title: 'Name', field: 'name' },
            { title: 'Email ID', field: 'email' },
            { title: 'Phone No', field: 'phoneNo1' },
            { title: 'Alt Phone No', field: 'phoneNo2' },
            { title: 'Address', field: 'address' },
            {
              title: 'Edit/Delete',
              field: 'edit',
              render: (rowData) =>
                rowData && (
                  <>
                    <IconButton
                      color='primary'
                      onClick={() => {
                        setCurrentId(rowData._id);
                        handleClickOpen();
                      }}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      color='secondary'
                      onClick={() => {
                        delContact(rowData._id);
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </>
                ),
            },
          ]}
          data={contacts}
          actions={[
            {
              tooltip: 'Remove All Selected Contacts',
              icon: 'delete',
              onClick: (evt, data) => delContacts(data.map((a) => a._id)),
            },
          ]}
          options={{
            actionsColumnIndex: -1,
            exportButton: true,
            selection: true,
          }}
        />
      </Card>
    </>
  );
};

export default ContactTable;
