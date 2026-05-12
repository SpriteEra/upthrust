import Joi from "joi";

// 🔐 Register validation schema
export const registerValidate = Joi.object({
    name: Joi.string().trim().min(2).max(50).required(),

    email: Joi.string()
        .email({ tlds: { allow: false } })
        .required(),

    password: Joi.string()
        .min(6)
        .max(20)
        .required(),
});

export const loginValidate = Joi.object({
    email: Joi.string()
        .email({ tlds: { allow: false } })
        .required(),

    password: Joi.string()
        .min(6)
        .max(20)
        .required(),
});