const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = 3000;

//

app.use(cors());
app.use(bodyParser.json());

app.post("/send-email", async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Required fields are missing" });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "lab@turfdiag.com",
      pass: "nslyqjbhmesqtwez",
    },
  });

  const mailOptions = {
    from: email, // Sender email
    to: "lab@turfdiag.com", // Your email to receive contact form submissions
    subject: `Contact Form Submission from ${name}`,
    text: `You have a new contact form submission:
          Name: ${name}
          Email: ${email}
          Phone: ${phone || "N/A"}
          Message: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email." });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.send(`Server has started on port number  ${PORT}`);
});
