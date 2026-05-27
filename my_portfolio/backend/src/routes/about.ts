import express, { Router, Request, Response } from 'express';
import Skill from '../models/About/Skill';
import Experience from '../models/About/Experience';
import Achievement from '../models/About/Achievement';
import Certification from '../models/About/Certification';

const router: Router = express.Router();

router.get('/', async (_req: Request, res: Response) => {
  try {
    const [skills, experience, achievements, certifications] = await Promise.all([
      Skill.find().sort({ order: 1 }),
      Experience.find().sort({ order: 1 }),
      Achievement.find().sort({ order: 1 }),
      Certification.find().sort({ order: 1 }),
    ]);

    const currentFocus = [
      "Building scalable web platforms with Next.js App Router and type-safe server actions",
      "Optimizing multi-tenant architectures and robust Role-Based Access Control (RBAC)",
      "Fostering enterprise integrations with Spring Boot, Spring Security, and TypeScript"
    ];

    res.json({ skills, experience, achievements, certifications, currentFocus });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
