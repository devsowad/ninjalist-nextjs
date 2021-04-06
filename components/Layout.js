import { makeStyles } from "@material-ui/core"
import Footer from "./Footer"
import Navbar from "./Navbar"

const useStyles = makeStyles({
  main: {
    padding: "50px 0",
  },
})

const Layout = ({ children }) => {
  const classes = useStyles()

  return (
    <>
      <Navbar />
      <div className={classes.main}>{children}</div>
      <Footer />
    </>
  )
}

export default Layout
