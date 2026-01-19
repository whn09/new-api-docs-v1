FROM oven/bun:1
WORKDIR /app

COPY package.json bun.lock ./
RUN bun install --ignore-scripts

COPY . .
RUN bun run fumadocs-mdx
RUN bun next build

EXPOSE 3000
CMD ["bun", "next", "start"]
