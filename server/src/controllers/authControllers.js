import "dotenv/config";
import jwt from "jsonwebtoken";
import { errors } from "@vinejs/vine";
import { supabase } from "../lib/supabase.js";
import { loginSchema } from "../models/index.js";

const SECRET_KEY = process.env.SECRET_KEY;

const login = async (req, res) => {
  try {
    const { auth } = await loginSchema(req.body);

    const { data: users } = await supabase
      .from("users")
      .select("*")
      .eq("email", auth.email);

    if (!users[0]) {
      return res.status(401).send({
        statusCode: 401,
        message: "User not found",
        data: { email: req.body.email },
      });
    }

    const validationPassword = auth.password === users[0].password;

    if (!validationPassword) {
      return res.status(401).send({
        statusCode: 401,
        message: "Not authorized",
      });
    }

    const token = jwt.sign({ name: users.name }, SECRET_KEY);

    return res.status(200).send({
      statusCode: 200,
      message: "Login successfully",
      data: {
        token,
      },
    });
  } catch (error) {
    if (error instanceof errors.E_VALIDATION_ERROR) {
      return res.status(400).send({ error: error.messages[0].message });
    }

    return res.status(500).send({ error: error.message });
  }
};

export const authControllers = {
  login,
};
