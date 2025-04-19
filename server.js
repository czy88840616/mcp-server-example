#!/usr/bin/env node

// AI MCP 服务器
const { McpServer } = require("@modelcontextprotocol/sdk/server/mcp.js");
const { StdioServerTransport } = require("@modelcontextprotocol/sdk/server/stdio.js");
const { z } = require("zod");

// 创建 MCP 服务器实例
const server = new McpServer({
  name: "mcp-server-example",
  version: "1.0.0"
});

// add a hello world tool
server.tool("hello world", "it's a hello world tool, it will return a hello world message", {
  name: z.string().optional().describe("The name of the person to greet")
}, async ({ name }) => {
  return {
    content: [{
      type: "text",
      text: `Hello ${name ? ', ' + name : ''}! This is a hello world message.`
    }]
  };
});

async function startServer() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

// 启动服务器
startServer().catch(error => {
  console.error("start mcp server error:", error);
  process.exit(1);
});