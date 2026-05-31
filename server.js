require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Подключение к MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("✅ Подключено к MongoDB"))
    .catch(err => console.error("Ошибка подключения:", err));

// Определение схемы комнаты
const roomSchema = new mongoose.Schema({
    title: String,
    price: Number,
    size: String,
    location: String,
    contact: String
});

const Room = mongoose.model("Room", roomSchema);

// API: Получить все комнаты
app.get("/rooms", async (req, res) => {
    try {
        const rooms = await Room.find();
        res.json(rooms);
    } catch (error) {
        res.status(500).json({ message: "Ошибка сервера" });
    }
});

// API: Добавить новую комнату
app.post("/rooms", async (req, res) => {
    try {
        const newRoom = new Room(req.body);
        await newRoom.save();
        res.status(201).json(newRoom);
    } catch (error) {
        res.status(500).json({ message: "Ошибка при добавлении комнаты" });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Сервер запущен на порту ${PORT}`));
