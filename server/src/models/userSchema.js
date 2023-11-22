import vine from "@vinejs/vine";

export const userSchema = async (body) => {
  const bodySchema = vine.object({
    name: vine.string(),
    username: vine.string(),
    email: vine.string().email(),
    password: vine.string(),
    avatar: vine.string().startsWith("https://" || "http://"),
    accommodation: vine
      .object({
        data: vine.array(vine.object({ id: vine.string().uuid() })),
      })
      .optional(),
  });

  const validator = vine.compile(bodySchema);
  const user = await validator.validate(body);

  return { user };
};
