import React from "react"
import ThumbUpIcon from "@material-ui/icons/ThumbUp"
import { Button, Fade } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  thanksBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontFamily: theme.typography.fontFamily,
  },
  thumb: {
    width: "30vw",
    height: "30vh",
    color: "white",
    [theme.breakpoints.up("md")]: {
      marginTop: theme.spacing(2),
      width: "20vw",
      height: "20vh",
    },
  },
  inviteBtn: {
    marginTop: theme.spacing(4),
    fontSize: 18,
  },
}))

const ThankYou = ({ resetForm }) => {
  const classes = useStyles()
  return (
    <Fade in timeout={500}>
      <div className={classes.thanksBox}>
        <ThumbUpIcon className={classes.thumb} />
        <h1 className={classes.title}>Invitation Success!</h1>
        <Button
          className={classes.inviteBtn}
          variant="contained"
          color="primary"
          onClick={resetForm}
        >
          Invite Another Friend
        </Button>
      </div>
    </Fade>
  )
}

export default ThankYou
