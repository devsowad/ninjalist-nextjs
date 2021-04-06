import { AppBar, makeStyles, Toolbar } from "@material-ui/core"
import Navlinks from "./Navlinks"
import Link from "next/link"

const useStyles = makeStyles(theme => ({
  logoContainer: {
    width: 60,
    padding: 5,
  },
  logo: {
    width: "100%",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
  },
}))

const Navbar = () => {
  const classes = useStyles()

  return (
    <>
      <AppBar position="static" color="secondary">
        <Toolbar className={classes.header}>
          <div className={classes.logoContainer}>
            <Link href="/">
              <a>
                <img className={classes.logo} src="/vercel.svg" />
              </a>
            </Link>
          </div>
          <div>
            <Navlinks />
          </div>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar
