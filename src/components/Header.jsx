import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Fade } from "@material-ui/core"
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline"

const useStyles = makeStyles((theme) => ({
  headerBox: {
    width: "100vw",
    height: "30vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(3),
  },
  title: {
    marginTop: theme.spacing(-4),
    [theme.breakpoints.up("md")]: {
      marginTop: theme.spacing(2),
    },
  },
  icon: {
    width: "30vw",
    height: "30vh",
    marginTop: theme.spacing(-5),
    color: theme.palette.primary.main,
    [theme.breakpoints.up("md")]: {
      marginTop: theme.spacing(2),
      width: "20vw",
      height: "20vh",
    },
  },
}))

const Header = () => {
  const classes = useStyles()
  return (
    <Fade in timeout={2000}>
      <div className={classes.headerBox}>
        <ChatBubbleOutlineIcon className={classes.icon} />
        <h1 className={classes.title}>Invite a friend!</h1>
      </div>
    </Fade>
  )
}

export default Header
