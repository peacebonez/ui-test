import React, { useState, useEffect } from "react"
import { TextField, InputAdornment, Button, Fade } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import AccountCircle from "@material-ui/icons/AccountCircle"
import EmailIcon from "@material-ui/icons/Email"
import CreateIcon from "@material-ui/icons/Create"

import ThankYou from "./ThankYou"
import sendEmail from "../controllers/sendEmail"

const useStyles = makeStyles((theme) => ({
  flexCenter: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: theme.spacing(-4),
  },
  contactForm: {
    width: "100vw",
    height: "67vh",
    borderRadius: "30px 30px",
    [theme.breakpoints.up("md")]: {
      width: "50vw",
    },
  },
  inputWrapper: {
    marginTop: theme.spacing(8),
    textAlign: "center",
  },
  textInput: {
    width: "80vw",
    margin: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      width: "50vw",
    },
  },
  submitBtn: {
    marginTop: theme.spacing(6),
    padding: theme.spacing(1),
    width: "25vw",
    fontSize: 16,
    [theme.breakpoints.up("md")]: {
      width: "20vw",
    },
  },
  errorText: {
    fontStyle: "italic",
    color: "#fff",
    textShadow: "1px 1px 5px #000",
  },
}))

const Contact = () => {
  const classes = useStyles()

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  })
  const { name, email, message } = inputs

  const [nameError, setNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [messageError, setMessageError] = useState(false)
  const [asyncError, setAsyncError] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    })
  }

  const setErrors = () => {
    if (!name) setNameError(true)
    if (!email || !isEmail(email)) setEmailError(true)
    if (!message) setMessageError(true)
  }

  const isEmail = (email) => /^\S+@\S+$/.test(email)
  const resetForm = () => setIsSubmitted(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrors()
    if (!name || !email || !message) return

    const res = await sendEmail(email, name, message)
    console.log("res:", res)
    if (!res || !res.data) {
      setAsyncError(true)
      return
    }

    setInputs({ name: "", email: "", message: "" })
    setIsSubmitted(true)
  }

  useEffect(() => {
    if (name) setNameError(false)
    if (isEmail(email)) setEmailError(false)
    if (message) setMessageError(false)
  }, [name, email, message, setNameError, setEmailError, setMessageError])

  useEffect(() => {
    if (asyncError) {
      setTimeout(() => {
        setAsyncError(false)
      }, 4000)
    }
  })

  return !isSubmitted ? (
    <Fade in timeout={3000}>
      <div className={classes.flexCenter}>
        <form className={classes.contactForm} autoComplete="off">
          <div className={classes.inputWrapper}>
            <TextField
              id="nameInput"
              className={classes.textInput}
              value={name}
              name="name"
              label="Name"
              required
              error={nameError}
              helperText={nameError ? "Name required." : ""}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              onChange={handleChange}
            />
            <TextField
              id="emailInput"
              className={classes.textInput}
              value={email}
              name="email"
              label="Email"
              required
              error={emailError}
              helperText={emailError ? "Valid email required." : ""}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
              onChange={handleChange}
            />
            <TextField
              id="messageInput"
              className={classes.textInput}
              value={message}
              name="message"
              label="Your Message"
              multiline
              rowsMax={4}
              required
              error={messageError}
              helperText={messageError ? "Message required." : ""}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CreateIcon />
                  </InputAdornment>
                ),
              }}
              onChange={handleChange}
            />
            <Button
              className={classes.submitBtn}
              variant="contained"
              color="primary"
              onClick={handleSubmit}
            >
              Submit
            </Button>
            {asyncError && (
              <Fade in timeout={1000}>
                <h1 className={classes.errorText}>Something went wrong!</h1>
              </Fade>
            )}
          </div>
        </form>
      </div>
    </Fade>
  ) : (
    <ThankYou resetForm={resetForm} />
  )
}

export default Contact
