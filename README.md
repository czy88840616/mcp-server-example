# MCP Server Example

A simple example of a Model Context Protocol (MCP) server implementation using the official SDK.

## Overview

This project demonstrates how to create a basic MCP server with a simple "hello world" tool. The server uses the official MCP SDK and communicates via stdio transport.

## Features

- MCP server implementation using `@modelcontextprotocol/sdk`
- Simple "hello world" tool with optional name parameter
- Stdio-based communication transport
- Type-safe tool definitions using Zod schema validation

## Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

## Installation

1. Clone this repository
2. Install dependencies:
```bash
npm install
```

## Usage

To start the MCP server:

```bash
npm start
```

The server will start and listen for incoming connections via stdio.

## Project Structure

- `server.js` - Main server implementation
- `package.json` - Project configuration and dependencies

## Dependencies

- `@modelcontextprotocol/sdk` - Official MCP SDK
- `zod` - Schema validation library

## License

This project is open source and available under the MIT License.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
