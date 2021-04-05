import { makeStyles, Typography } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  footer: {
    background: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    padding: theme.spacing(2),
    textAlign: "center",
  },
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <div className={classes.footer}>
      <Typography variant="button">
        <h5>Copyright&copy;2020</h5>
      </Typography>
    </div>
  )
}

export default Footer
