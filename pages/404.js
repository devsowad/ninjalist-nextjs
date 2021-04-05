import { useRouter } from "next/router"
import { useEffect } from "react"
import { Typography, Container } from "@material-ui/core"

const NotFound = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push("/")
    }, 3000)
  }, [])

  return (
    <>
      <Container fixed>
        <Typography align="center" className="main-text" variant="h1">
          404
        </Typography>
      </Container>
    </>
  )
}

export default NotFound
