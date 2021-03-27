import React, { useState, useEffect } from "react"
import { TextField, InputAdornment, Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import AccountCircle from "@material-ui/icons/AccountCircle"
import EmailIcon from "@material-ui/icons/Email"
import CreateIcon from "@material-ui/icons/Create"

const useStyles = makeStyles((theme) => ({
  flexCenter: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
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
    marginTop: theme.spacing(2),
    padding: theme.spacing(1),
    width: "25vw",
    fontSize: 16,
    [theme.breakpoints.up("md")]: {
      width: "20vw",
    },
  },
}))

const Contact = () => {
  const [formActive, setFormActive] = useState(false)
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  })
  const { name, email, message } = inputs

  const handleChange = (e) => {
    console.log(e.target.name)
    console.log(e.target.value)
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    })
  }

  const [nameError, setNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [messageError, setMessageError] = useState(false)

  const classes = useStyles()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({
      name,
      email,
      message,
    })
    if (isError() || !formActive) {
      console.log("error!")
      return
    }
    // TODO: send email
    console.log("SUBMITTED!")
    setInputs({ name: "", email: "", message: "" })
    setFormActive(false)
  }

  const isError = () => {
    // if (!name) setNameError(true)
    // if (!email || !isEmail(email)) setEmailError(true)
    // if (!message) setMessageError(true)
    console.log("nameError:", nameError)
    console.log("emailError:", emailError)
    console.log("messageError:", messageError)
    if (nameError || emailError || messageError) return true
    return false
  }

  const isEmail = (email) => /^\S+@\S+$/.test(email)

  useEffect(() => {
    if (name || email || message) setFormActive(true)
    if (formActive) {
      if (!name) setNameError(true)
      if (!email || !isEmail(email)) setEmailError(true)
      if (!message) setMessageError(true)
    }
    if (name) setNameError(false)
    if (isEmail(email)) setEmailError(false)
    if (message) setMessageError(false)
  }, [
    formActive,
    name,
    email,
    message,
    setNameError,
    setEmailError,
    setMessageError,
  ])

  return (
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
        </div>
      </form>
    </div>
  )
}

export default Contact
