import { IconBrandGithub, IconCheck, IconInnerShadowBottom, IconMail } from '@tabler/icons-react'
import { Button, Container, Highlight, Group, Image, List, Paper, SimpleGrid, Stack, Text, ThemeIcon, Title, rem, Center } from '@mantine/core'
import './App.css'

function App() {
  return (
    <>
      <Container size="lg">
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 2 }} mt={50} spacing="xl">
          <Stack>
            <AppLogo />
            <Title order={1} mt={"md"}>
              <Highlight fw={700} fz={50} highlight={"Open-Sourced"}>
                The Open-Sourced CRM that Developers Love
              </Highlight>
            </Title>

            <Text>
              Namelist is a modern CRM built for developers using Laravel and React that you can self-host.
            </Text>

            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl">
                  <IconCheck size={12} stroke={1.5} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>Forms and Waitlists</b> – start collecting user signups fast
              </List.Item>
              <List.Item>
                <b>Object Management</b> - contact, company and list managment
              </List.Item>
              <List.Item>
                <b>Email Marketing</b> - send 1:1 or email broadcasts
              </List.Item>
              <List.Item>
                <b>Reports and Charts</b> - create and view reports and charts
              </List.Item>
            </List>

            <Group mt={30}>
              <Button component="a" href="mailto:davidmoreen@gmail.com?subject=namelist.dev" radius="xl" size="md" leftSection={<IconMail stroke={1.2} />}>
                Get in touch!
              </Button>
              <Button component="a" href="https://github.com/NamelistApp/Namelist" variant="default" radius="xl" size="md" leftSection={<IconBrandGithub stroke={1.2} />}>
                Source code
              </Button>
            </Group>
          </Stack>
          <Stack>
            <Center>
              <Paper radius="md" shadow="md" withBorder mt={50}>
                <Image src="screenshot.png" radius="md" />
              </Paper>
            </Center>
          </Stack>
        </SimpleGrid>
      </Container >
    </>
  )
}

function AppLogo() {
  return (
    <Group
      gap="xs"
      c="green"
    >
      <IconInnerShadowBottom style={{ width: rem(30), height: rem(30) }} stroke={1.5} />
      <Title order={5} style={{ fontWeight: 500 }}>
        Namelist
      </Title>
    </Group>
  )
}

export default App
