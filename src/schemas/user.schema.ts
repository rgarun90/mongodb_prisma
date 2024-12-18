import z from 'zod';

export const createUserSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    phoneNumber: z.string().regex(/^\d+$/),
    gender: z.enum(['male', 'female', 'others']),
});

export const updateUserSchema = createUserSchema.partial();
