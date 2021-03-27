import React from "react"
import PropTypes from "prop-types"
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
    // background: theme.palette.primary.main,
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

const Contact = (props) => {
  const classes = useStyles()
  return (
    <div className={classes.flexCenter}>
      <form className={classes.contactForm} autoComplete="off">
        <div className={classes.inputWrapper}>
          <TextField
            id="nameInput"
            className={classes.textInput}
            label="Name"
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            id="emailInput"
            className={classes.textInput}
            label="Email"
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            id="messageInput"
            className={classes.textInput}
            label="Your Message"
            multiline
            rowsMax={4}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CreateIcon />
                </InputAdornment>
              ),
            }}
            required
          />
          <Button
            className={classes.submitBtn}
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

Contact.propTypes = {}

export default Contact
