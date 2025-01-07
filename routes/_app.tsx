import { type PageProps } from "$fresh/server.ts";
import { TabBar } from "../components/TabBar.tsx";
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <title>Fresh Tauri Example</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body class="bg">
        <Component />
        <TabBar />
      </body>
    </html>
  );
}
