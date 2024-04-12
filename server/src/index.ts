import express from 'express';
import bodyParser from 'body-parser';
import { Resend } from 'resend';
import cors from 'cors';
const resend = new Resend('re_daAuRZjZ_88riw8mnWw2siRm13tdtAJBW');
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/send", async (req, res) => {
    const { from, to, subject, html } = req.body;

    try {
        const { data, error } = await resend.emails.send({ from, to, subject, html });
        console.log(data);
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ error: 'Error sending email' });
            return;
        }

        res.status(200).json({ message: 'Email sent successfully', data });
    } catch (error) {
        console.error(error);
    }

})
app.get("/", (req, res) => {
    res.send({
        name: "get is working"
    })
})

app.listen(8001, () =>
    console.log('Example app listening on port 8001!'),
);