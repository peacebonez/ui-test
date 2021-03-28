import axios from "axios"
const sendEmail = async (email, name, message) => {
  try {
    await axios.post(
      "https://uil7u260td.execute-api.us-east-1.amazonaws.com/default/sendEmail",
      {
        toEmail: email,
        subject: name,
        message,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
  } catch (err) {
    console.log(err)
  }
}

export default sendEmail
