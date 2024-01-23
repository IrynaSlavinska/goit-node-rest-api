import fs from "fs/promises";
import { nanoid } from "nanoid";

import contactsService from "../services/contactsServices.js";
import HttpError from "../helpers/HttpError.js";

export const getAllContacts = async (req, res, next) => {
  try {
    const contacts = await contactsService.listContacts();
    res.status(200).json({
      contacts,
    });
  } catch (err) {
    next(err);
  }
};

export const getOneContact = async (req, res, next) => {
  try {
    const { id } = req.params;
    const contact = await contactsService.getContactById(id);
    if (!contact) {
      throw new HttpError(404, "Not found");
    }
    res.status(200).json({
      contact,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteContact = (req, res) => {};

export const createContact = async (req, res, next) => {
  try {
    const { name, phone, email } = req.body;
    const updatedContactsList = await contactsService.addContact(
      name,
      phone,
      email
    );
    console.log(updatedContactsList);
    res.status(201).json(updatedContactsList);
  } catch (error) {
    next(error);
  }
};

export const updateContact = (req, res) => {};
