// Core Bot Handler for KAJUNA_MD
import axios from 'axios';

class KajunaBot {
  constructor() {
    this.commands = new Map();
    this.plugins = [];
    this.settings = {};
  }

  registerCommand(name, handler) {
    this.commands.set(name.toLowerCase(), handler);
  }

  getCommand(name) {
    return this.commands.get(name.toLowerCase());
  }

  async processMessage(message, context) {
    try {
      const text = message.text || '';
      const prefix = '.';
      
      if (!text.startsWith(prefix)) {
        return null;
      }

      const args = text.slice(prefix.length).trim().split(/ +/);
      const command = args.shift().toLowerCase();

      const handler = this.getCommand(command);
      if (handler) {
        return await handler.execute(context, args);
      }

      return null;
    } catch (error) {
      console.error('Command Error:', error);
      return { error: error.message };
    }
  }

  loadPlugin(plugin) {
    this.plugins.push(plugin);
    console.log(`Plugin loaded: ${plugin.name}`);
  }
}

export default new KajunaBot();
