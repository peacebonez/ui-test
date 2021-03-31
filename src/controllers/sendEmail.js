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
          "Content-Type": "text/plain",
        },
      }
    )
    return true
  } catch (err) {
    console.log(err)
    return false
  }
}

export default sendEmail
