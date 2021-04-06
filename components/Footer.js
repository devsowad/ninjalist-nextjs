import { makeStyles, Typography } from "@material-ui/core"
import Link from "next/link"

const useStyles = makeStyles(theme => ({
  footer: {
    background: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    padding: theme.spacing(8),
    textAlign: "center",
  },
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <div className={classes.footer}>
      <Typography variant="button">
        <h5>
          Copyright&copy;{" "}
          <Link href="/">
            <a>ninjalist</a>
          </Link>{" "}
          2020
        </h5>
      </Typography>
    </div>
  )
}

export default Footer
