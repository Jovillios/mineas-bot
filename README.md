# Mineas Bot

A Discord bot built with Node.js for managing and interacting with Minecraft servers and communities.

## Overview

Mineas Bot is a feature-rich Discord bot designed to enhance the Minecraft gaming experience by providing server management tools, player statistics, and community features directly within Discord.

## Features

- **Server Management**: Monitor and manage Minecraft server status
- **Player Tracking**: Track player statistics and achievements
- **Community Tools**: Interactive commands for community engagement
- **Server Commands**: Execute server commands through Discord
- **Real-time Updates**: Live server status and player activity updates

## Project Structure

```
mineas-bot/
├── index.js              # Main bot entry point
├── package.json          # Node.js dependencies and scripts
├── package-lock.json     # Locked dependency versions
├── Procfile              # Heroku deployment configuration
├── img/                  # Bot images and assets
├── item/                 # Item-related bot functionality
└── node_modules/         # Installed dependencies
```

## Requirements

- Node.js 14+
- Discord.js library
- Minecraft server access
- Discord Bot Token

## Installation

### 1. Clone the Repository
```bash
git clone https://github.com/Jovillios/mineas-bot.git
cd mineas-bot
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env` file with your bot configuration:
```env
DISCORD_TOKEN=your_discord_bot_token
MINECRAFT_SERVER_IP=your_minecraft_server_ip
MINECRAFT_SERVER_PORT=25565
```

### 4. Start the Bot
```bash
npm start
```

## Configuration

### Discord Bot Setup
1. Create a Discord application at [Discord Developer Portal](https://discord.com/developers/applications)
2. Create a bot user and get the token
3. Invite the bot to your server with appropriate permissions

### Minecraft Server Integration
- Ensure your Minecraft server allows external connections
- Configure firewall rules if necessary
- Set up proper authentication if required

## Usage

### Basic Commands
- `/status` - Check server status
- `/players` - List online players
- `/stats <player>` - Get player statistics
- `/help` - Display available commands

### Server Management
- `/start` - Start the Minecraft server
- `/stop` - Stop the Minecraft server
- `/restart` - Restart the server
- `/backup` - Create server backup

## Deployment

### Heroku Deployment
The project includes a `Procfile` for easy Heroku deployment:

```bash
# Deploy to Heroku
heroku create your-app-name
git push heroku main
```

### Local Deployment
```bash
# Run locally
npm start

# Run with PM2 (production)
pm2 start index.js --name mineas-bot
```

## Development

### Project Structure
- **index.js**: Main bot logic and command handling
- **item/**: Item-related bot functionality
- **img/**: Bot images and visual assets

### Adding New Commands
```javascript
// Example command structure
client.on('messageCreate', message => {
    if (message.content === '!command') {
        // Command logic here
        message.reply('Command response');
    }
});
```

## Contributing

Contributions are welcome! Areas for improvement:
- New bot commands and features
- Enhanced Minecraft server integration
- Improved error handling
- Additional community tools

## Issues

The repository currently has 2 open issues:
- Bug fixes and improvements needed
- Feature requests welcome

## License

This project is open source. Please check the repository for specific licensing information.

## Support

For support or questions:
- Open an issue on GitHub
- Check the Discord server documentation
- Review the bot's help command

## Contact

For questions or contributions, please open an issue or pull request on GitHub.

---

**Note**: This bot requires proper Discord bot permissions and Minecraft server access to function correctly.