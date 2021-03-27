import { MuiThemeProvider } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { theme } from "./themes/theme"
import Contact from "./components/Contact"
import Header from "./components/Header"
const useStyles = makeStyles({
  appMain: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
})

function App() {
  const classes = useStyles()
  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.appMain}>
        <Header />
        <Contact />
      </div>
    </MuiThemeProvider>
  )
}

export default App
