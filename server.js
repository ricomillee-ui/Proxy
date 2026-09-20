const express = require("express");
const fetch = require("node-fetch");
const app = express();
app.use(express.json());

const REAL_WEBHOOK = "https://discord.com/api/webhooks/1551189944989650966/WFq2VJA8tiNhBLRVrtXcHSLZ9TNbqjTJdFdtmPw9_kYLtFb4vhlBzusZau6g0EhmO3i4";

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
