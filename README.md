# Example App - Deno Fresh With Tauri
![Deno JS](https://img.shields.io/badge/deno%20js-000000?style=for-the-badge&logo=deno&logoColor=white) ![Tauri](https://img.shields.io/badge/tauri-%2324C8DB.svg?style=for-the-badge&logo=tauri&logoColor=%23FFFFFF)
An example cross-platform native desktop & mobile app built using the [Fresh Framework](https://fresh.deno.dev/) & [Tauri 2.0](https://v2.tauri.app/). After reviewing [prerequisites](#Prerequisites), fork this repo or follow the [manual setup](#Manual-Setup-Guide) to get started.

### Prerequisites
*Note: Performed on an Intel-based MacBook running macOS Sequoia*
- [Tauri Prerequisites](https://v2.tauri.app/start/prerequisites) (specific to your host and build targets)
  - Also see [prerequisites for mobile targets](https://v2.tauri.app/start/prerequisites/#configure-for-mobile-targets) (iOS/Android)
- [Deno](https://deno.com/)
- Tauri-cli: `cargo install tauri-cli --version "^2.0.0"`

### Basic Commands

# Manual Setup Guide
### 1) Initialize Deno Fresh Project
```bash
deno run -A -r https://fresh.deno.dev
```
This command will prompt you for additional details about your project:
```
Project Name: Fresh-Tauri-Example
Let's set up your new Fresh project.

Do you want to use a styling library? [y/N] y

1. tailwindcss (recommended)
2. Twind

Which styling library do you want to use? [1] 1
Do you use VS Code? [y/N] y
```

### 2) Initialize Tauri
```bash
cd Fresh-Tauri-Example/
cargo tauri init
```
You are again prompted for additional details, **note web assets location, dev server url, dev command, and build command**:
```
✔ What is your app name? · Fresh Tauri Example
✔ What should the window title be? · Fresh Tauri Example
✔ Where are your web assets (HTML/CSS/JS) located? · ../build
✔ What is the url of your dev server? · http://localhost:8000
✔ What is your frontend dev command? · deno task start
✔ What is your frontend build command? · deno task build
```
**Web Assets Location:** `../build`  
**Dev Server Url:** `http://localhost:8000`  
**Frontend Dev Command:** `deno task start`  
**Frontend Build Command:** `deno task build`  

### 3) Initialize iOS Build
```bash
cargo tauri ios init
```
Modify `./src-tauri/tauri.conf.json` to contain your Apple development team identifier. If you do not know your identifier, you can create a new Swift app in Xcode and find the identifier in the bundle created.
```json
{
  "bundle": {
    "iOS": {
      "developmentTeam": "XXXXXXXXXX"
    }
  }
}
```