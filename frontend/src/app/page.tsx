import {Button, Link} from '@chakra-ui/react'

export default function Home() {
  return (
      <Button colorScheme="teal">
        <Link href="/todo-list">
            TodoListPage
        </Link>
      </Button>
  )
}
