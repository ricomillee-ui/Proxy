const express = require("express");
const fetch = require("node-fetch");
const app = express();
app.use(express.json());

const REAL_WEBHOOK = "https://discord.com/api/webhooks/1551226956203434056/fHrLoSbdnWhsZOMkp4HzzWKEIrmRw8CztSfgTh1qi93GIRZEVdO3VlT-ZoIldAETU_89";

app.post("/log", async (req, res) => {
    try {
        await fetch(REAL_WEBHOOK, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(req.body)
        });
        res.sendStatus(200);
    } catch (e) {
        res.sendStatus(500);
    }
});

app.listen(process.env.PORT || 3000);
