import { type PageProps } from "$fresh/server.ts";
import { TabBar } from "../components/TabBar.tsx";
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=location_on,schedule" />
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
