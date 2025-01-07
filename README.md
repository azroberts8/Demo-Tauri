# Example App - Deno Fresh With Tauri
![Deno JS](https://img.shields.io/badge/deno%20js-000000?style=for-the-badge&logo=deno&logoColor=white) ![Tauri](https://img.shields.io/badge/tauri-%2324C8DB.svg?style=for-the-badge&logo=tauri&logoColor=%23FFFFFF)  
An example cross-platform native desktop & mobile app built using the [Fresh Framework](https://fresh.deno.dev/) & [Tauri 2.0](https://v2.tauri.app/). Specifically building a macOS and iOS app. After reviewing the prereqs below, fork this repo or follow the [manual setup](#Manual-Setup-Guide) to get started.

### Prerequisites
*Note: Performed on an Intel-based MacBook running macOS Sequoia*
- [Tauri Prerequisites](https://v2.tauri.app/start/prerequisites) (specific to your host and build targets)
  - Also see [Tauri prereqs for mobile targets](https://v2.tauri.app/start/prerequisites/#configure-for-mobile-targets) (iOS/Android)
- Install [Deno](https://deno.com/)
- Tauri-cli: `cargo install tauri-cli --version "^2.0.0"`

### Basic Commands
Run development webserver for editing in the browser. *Note: embedded rust code will not run in browser*
```bash
deno task start
```

Run native desktop app in development mode:
```bash
cargo tauri dev
```

Run native iOS app in development mode:
```bash
cargo tauri ios dev
```
*Note: When running in development mode web code is loaded from the Fresh webserver running on your machine not compiled into the app. The app will initially not have LAN permissions and fail to load. Upon granting permission, quit the app and reopen.*

Build production desktop app:
```bash
cargo tauri build
```

Build production iOS app:
```bash
cargo tauri ios build
```

# Manual Setup Guide
### 1️⃣ Initialize Deno Fresh Project
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

### 2️⃣ Initialize Tauri
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
Web Assets Location: `../build`  
Dev Server Url: `http://localhost:8000`  
Frontend Dev Command: `deno task start`  
Frontend Build Command: `deno task build`  

### 3️⃣ Initialize iOS Build
```bash
cargo tauri ios init
```
Modify `./src-tauri/tauri.conf.json` to contain your Apple development team identifier. If you do not know your identifier, you can create a new Swift app in Xcode and find the identifier in the bundle created.
```json
{
  "bundle": {
    ...
    "iOS": {
      "developmentTeam": "XXXXXXXXXX"
    }
  }
}
```

# Troubleshooting
Some issues that I've run into and how I resolved them

### iOS Build Fail
**Problem:** `cargo tauri ios [dev|build]` fails with exit code 65 and accompanying message containing: `error: No Account for Team "XXXXXXXXXX". Add a new account in Accounts settings or verify that your accounts have valid credentials. (in target 'app_iOS' from project 'app')`  
**Resolution:** Your Xcode team identifier is incorrect or not present.  
Add your Apple team identifier to `./src-tauri/tauri.conf.json`
```json
{
  "bundle": {
    ...
    "iOS": {
      "developmentTeam": "XXXXXXXXXX"
    }
  }
}
```
If you do not know your Apple team identifier:
1. Open Xcode, create a new project & save the project
2. Open the project in finder, show the package contents of `./[your-app].xcodeproj`
3. Open project.pbxproj with a text editor
4. Search `DEVELOPMENT_TEAM` in this file. The value should be roughly 10 alphanumeric characters.  

**Problem:** `cargo tauri ios [dev|build]` fails with exit code 65 and accompanying message containing: `error: Failed Registering Bundle Identifier: The app identifier "com.tauri.dev" cannot be registered to your development team because it is not available.`  
**Resolution:** Change the app bundle identifier to something else.
1. Open `./src-tauri/tauri.conf.json`
2. Change `productName` from `com.tauri.dev` to something else. *Example: `com.azroberts.myapp`*

# Conclusions
Tauri 2.0 is a promising tool for building performant, write once, run everywhere applications. The BYO-Framework approach makes it easy to transition from building web applications to native applications regardless without the requirement of learning an entirely new platform. That being said, Tauri does not feel fully baked yet. Initializing a project and setting mobile build targets need to be streamlined before Tauri should be used in production applications. Tauri adds a decent amount of clutter to a relatively minimal repository for what is essentially a compiler. I would be tempted to move `./src-tauri/icons`, `./src-tauri/src`, and `./src-tauri/tauri.conf.json` to the project root and containerize the rest of the contents of `./src/tauri`.