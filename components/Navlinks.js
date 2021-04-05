import Link from "next/link"
import Button from "@material-ui/core/Button/Button"
import { makeStyles } from "@material-ui/core"
import { useRouter } from "next/router"

const useStyles = makeStyles(theme => ({
  link: {
    color: theme.palette.primary.main,
    textDecoration: "none",
  },
  button: {
    margin: "0 3px",
    boxShadow: "none",
  },
}))

const links = [
  { id: 1, href: "/", label: "home" },
  { id: 2, href: "/about", label: "about" },
  { id: 3, href: "/contact", label: "contact" },
  { id: 4, href: "/ninjas", label: "ninjas" },
]

const Navlinks = () => {
  const classes = useStyles()

  const { pathname } = useRouter()

  const navlinks = links.map(link => {
    return (
      <Link key={link.id} href={link.href}>
        <a className={classes.link}>
          <Button
            className={classes.button}
            color={pathname === link.href ? "primary" : "secondary"}
            variant="contained"
          >
            {link.label}
          </Button>
        </a>
      </Link>
    )
  })

  return <>{navlinks}</>
}

export default Navlinks
