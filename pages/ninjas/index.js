import Head from "next/head"
import {
  Typography,
  Container,
  MenuList,
  MenuItem,
  Box,
} from "@material-ui/core"
import Link from "next/link"

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await res.json()

  return {
    props: { ninjas: data },
  }
}

export default function Home({ ninjas }) {
  return (
    <>
      <Head>
        <title>Ninjas - Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container fixed>
        <Box marginBottom={2}>
          <Typography variant="h4">All Ninja</Typography>
        </Box>
        <MenuList color="secondary">
          {ninjas.map(ninja => (
            <MenuItem key={ninja.id}>
              <Box p={2}>
                <Link href={`/ninjas/${ninja.id}`}>
                  <a>
                    <Typography variant="body1">{ninja.name}</Typography>
                  </a>
                </Link>
              </Box>
            </MenuItem>
          ))}
        </MenuList>
      </Container>
    </>
  )
}
