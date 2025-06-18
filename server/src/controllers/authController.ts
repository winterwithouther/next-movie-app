import { Request, Response } from "express";
import prisma from "../prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET as string;

export const registerUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) return res.status(400).json({ message: "user already exists"});

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: { email, password: hashedPassword}
        });

        return res.status(201).json({ message: "User created", user: {id: user.id, email: user.email} });
    } catch (error) {
        return res.status(500).json({ error: "Registration failed."});
    }
};

export const loginUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        const user = await prisma.user.findUnique({ where: { email }});
        if (!user) return res.status(404).json({ message: "User not found" });

        const valid = await bcrypt.compare(password, user.password);
        if (!valid) return res.status(401).json({ message: "Invalid credentials" });

        const token = jwt.sign({ userId: user.id}, JWT_SECRET, { expiresIn: "1d" });

        return res.status(200).json({ token, user: { id: user.id, email: user.email} });
    } catch (error) {
        return res.status(500).json({ error: "Login failed" });
    }
}