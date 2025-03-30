import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { createTheme, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';


const theme = createTheme({
  /** Put your mantine theme override here */
});

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <MantineProvider theme={theme}>
      <Welcome message={loaderData.message} />
    </MantineProvider>
  )
}
