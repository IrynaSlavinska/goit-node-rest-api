import fs from "fs/promises";
import path from "path";
import { nanoid } from "nanoid";

const contactsPath = path.resolve("./db/contacts.json");

const listContacts = async () => {
  const results = await fs.readFile(contactsPath);
  const contactsArr = JSON.parse(results);
  return contactsArr;
};

async function getContactById(contactId) {
  const contactsArr = await listContacts();
  const findedContact = contactsArr.find((contact) => contact.id === contactId);
  if (!findedContact) return null;

  return findedContact;
}

async function addContact(name, email, phone) {
  const contactsArr = await listContacts();
  const newContact = {
    id: nanoid(),
    name,
    email,
    phone,
  };
  contactsArr.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contactsArr));

  return newContact;
}

async function removeContact(contactId) {
  const contactsArr = await listContacts();
  const index = contactsArr.findIndex((contact) => contact.id === contactId);
  if (index === -1) return null;
  const [deletedContact] = contactsArr.splice(index, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contactsArr, null, 2));
  return deletedContact;
}
removeContact("e6ywwRe4jcqxXfCZOj_1e");

const contactsActions = {
  listContacts,
  getContactById,
  addContact,
  removeContact,
};

export default contactsActions;
