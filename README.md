<h1 align="center">Session Convertor</h1>

Session Convertor is a simple, yet powerful tool that facilitates the conversion of session strings between Pyrogram and Telethon sessions. This tool is designed to streamline the session handling process, enabling quickly and easily convert sessions for use in various Telegram bot frameworks. Whether you're switching between frameworks or simply need a one-time conversion, Session Convertor makes it effortless with its intuitive CLI interface and support for multiple sessions.

### Table of Contents

- [Requirements](#requirements)
- [Functionalities](#functionalities)
- [Settings](#settings)
- [Installation](#installation)
- [Usage](#usage)
- [Limitations](#limitations)
- [License](#license)

### Requirements

- [Node.js 18.x or 20.x](https://nodejs.org)
- Must meet all Node.js requirements. [Read more about system requirements](https://docs.contrastsecurity.com/en/node-js-system-requirements.html)

### Functionalities

| Feature                                      | Supported |
| -------------------------------------------- | :-------: |
| Convert Pyrogram and Telethon sessions       |    ✅     |
| Simultaneous conversion of multiple sessions |    ✅     |

### [Settings](https://github.com/FreddyWhest/SessionConvertor/blob/main/.env-example)

| Setting               | Description                                            |
| --------------------- | ------------------------------------------------------ |
| **API_ID / API_HASH** | Telegram API ID and Hash obtained from my.telegram.org |

### Installation

To install the tool, you can clone the repository and install the necessary dependencies:

```shell
~ >>> git clone https://github.com/FreddyWhest/SessionConvertor.git
~ >>> cd SessionConvertor

# Linux and MacOS
~/SessionConvertor >>> chmod +x check_node.sh
~/SessionConvertor >>> ./check_node.sh

OR

~/SessionConvertor >>> npm install
~/SessionConvertor >>> cp .env-example .env
~/SessionConvertor >>> nano .env # Specify your API_ID and API_HASH; the rest will use default settings
~/SessionConvertor >>> node index.js

# Windows
1. Double-click on INSTALL.bat in the SessionConvertor directory to install the dependencies.
2. Double-click on START.bat in the SessionConvertor directory to start the bot.

OR

~/SessionConvertor >>> npm install
~/SessionConvertor >>> cp .env-example .env
~/SessionConvertor >>> # Specify your API_ID and API_HASH; the rest will use default settings
~/SessionConvertor >>> node index.js
```

Alternatively, for a quicker launch, you can use command-line arguments:

```shell
~/SessionConvertor >>> node index.js --action=1

OR

~/SessionConvertor >>> node index.js --action=2

# 1 - Create session
# 2 - Run clicker
```

### Usage

- Place your Pyrogram or Telethon session files in the `sessions` folder.
- Start the script by running `node index.js`.
- Follow the prompts to convert the sessions.
- Check the `convertedSessions` folder for the converted files.
- You can then use these converted sessions in any of `Freddy Bots` or bots built with GramJs.
- Enjoy!

### Limitations

- Currently, it only supports converting sessions from Pyrogram and Telethon.
- It does not support converting sessions to Pyrogram or Telethon.

### License

For more information, please see the [License File](LICENSE).
