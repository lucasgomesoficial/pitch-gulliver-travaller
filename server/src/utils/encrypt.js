import bcrypt from "bcrypt";

const cryptPassword = (password) => {
  bcrypt.hashSync(password, 10, (err, hash) => {
    return { err, cryptPassword: hash };
  });
};

const comparePassword = (reqBodyPass, hashword) => {
  bcrypt.compareSync(reqBodyPass, hashword, (err, result) => {
    return { err, validatedPassword: result };
  });
};

export const encrypt = {
  cryptPassword,
  comparePassword,
};
