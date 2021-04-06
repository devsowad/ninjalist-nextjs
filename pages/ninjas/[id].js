import Head from "next/head"
import { Typography, Container, Box } from "@material-ui/core"

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await res.json()

  const paths = data.map(ninja => {
    return {
      params: { id: ninja.id.toString() },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async context => {
  const id = context.params.id
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const data = await res.json()

  return {
    props: {
      ninja: data,
    },
  }
}

export default function Detail({ ninja }) {
  return (
    <>
      <Head>
        <title>Ninja - Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container fixed>
        <Box marginBottom={2}>
          <Typography variant="h4">Ninja</Typography>
        </Box>
        <Typography variant="h5">{ninja.name}</Typography>
        <Typography variant="body1">{ninja.email}</Typography>
        <Typography variant="body1">{ninja.website}</Typography>
        <Typography variant="body1">{ninja.address.city}</Typography>
      </Container>
    </>
  )
}
