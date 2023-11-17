import vine from "@vinejs/vine";

export const loginSchema = async (body) => {
  const bodySchema = vine.object({
    email: vine.string().email(),
    password: vine.string(),
  });

  const validator = vine.compile(bodySchema);
  const auth = await validator.validate(body);

  return { auth };
};
