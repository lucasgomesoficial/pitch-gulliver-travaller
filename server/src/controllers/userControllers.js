import { errors } from "@vinejs/vine";
import { supabase } from "../lib/supabase.js";
import { idSchema, userSchema } from "../models/index.js";
import { encrypt } from "../utils/encrypt.js";

const listUsers = async (req, res) => {
  try {
    const { data: users } = await supabase.from("users").select("*");

    return res.status(200).send(users);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const createdUser = async (req, res) => {
  try {
    const { user } = await userSchema(req.body);

    const { err, cryptPassword } = encrypt.cryptPassword(user.password);

    if (err) {
      console.log({ error: err });
    }

    await supabase
      .from("users")
      .insert([{ ...user, password: cryptPassword }])
      .select();

    return res.status(201).send({
      statusCode: 201,
      message: "User created successfully",
    });
  } catch (error) {
    if (error instanceof errors.E_VALIDATION_ERROR) {
      return res.status(400).send({ error: error.messages[0].message });
    }

    return res.status(500).send({ error: error.message });
  }
};

const editUser = async (req, res) => {
  try {
    const { id } = await idSchema(req.params);
    const { user } = await userSchema(req.body);

    const { err, cryptPassword } = encrypt.cryptPassword(user.password);

    if (err) {
      console.log({ error: err });
    }

    await supabase
      .from("users")
      .update([{ ...user, password: cryptPassword }])
      .eq("id", id)
      .select();

    return res.status(200).send({
      statusCode: 200,
      message: "User updated successfully",
    });
  } catch (error) {
    if (error instanceof errors.E_VALIDATION_ERROR) {
      return res.status(400).send({ error: error.messages[0].message });
    }

    return res.status(500).send({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = await idSchema(req.params);

    await supabase.from("users").delete().eq("id", id);

    return res.status(200).send({
      statusCode: 200,
      message: "User successfully deleted",
    });
  } catch (error) {
    if (error instanceof errors.E_VALIDATION_ERROR) {
      return res.status(400).send({ error: error.messages[0].message });
    }

    return res.status(500).send({ error: error.message });
  }
};

export const userControllers = {
  listUsers,
  createdUser,
  editUser,
  deleteUser,
};
