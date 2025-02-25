// import express from "express";
// import Quiz from "../models/Quiz.js";

// const router = express.Router();

// // Get quiz questions
// router.get("/", async (req, res) => {
//     try {
//         const questions = await Quiz.find().limit(10);
//         res.json(questions);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });

// // Submit answers and calculate score
// router.post("/submit", async (req, res) => {
//     const { answers } = req.body;
//     const questions = await Quiz.find().limit(10);
//     let score = 0;

//     questions.forEach((q, index) => {
//         if (q.correctAnswer === answers[index]) {
//             score += 1;
//         }
//     });


import express from "express";
import Quiz from "../models/Quiz.js";

const router = express.Router();

// ✅ Middleware to Add CORS Headers in Responses
router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // ✅ Allow frontend https://quiz-react-app-fk1.vercel.app
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

// ✅ Handle Preflight Requests
router.options("*", (req, res) => {
    res.sendStatus(200);
});

// ✅ Get Quiz Questions
router.get("/", async (req, res) => {
    try {
        const questions = await Quiz.find().limit(10);
        res.json(questions);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// ✅ Submit Answers & Calculate Score
router.post("/submit", async (req, res) => {
    const { answers } = req.body;
    const questions = await Quiz.find().limit(10);
    let score = 0;

    questions.forEach((q, index) => {
        if (q.correctAnswer === answers[index]) {
            score += 1;
        }
    });

    res.json({ score });
});

export default router;

//     res.json({ score });
// });

// export default router;
