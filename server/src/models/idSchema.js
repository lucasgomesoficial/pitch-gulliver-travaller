import vine from "@vinejs/vine";

export const idSchema = async (params) => {
  const paramsSchema = vine.object({
    id: vine.string().uuid(),
  });

  const validator = vine.compile(paramsSchema);
  const { id } = await validator.validate(params);

  return { id };
};
