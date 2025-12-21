# Build stage
FROM oven/bun:1-alpine AS builder

WORKDIR /app

# Copy package files
COPY package.json bun.lock ./

# Install dependencies
RUN bun install --frozen-lockfile

# Copy source files
COPY . .

# Build the application
RUN bun run build

# Production stage
FROM gcr.io/distroless/nodejs22-debian12:nonroot AS runner

WORKDIR /app

# Copy built application from builder stage
# distroless:nonroot uses uid:gid 65532:65532
COPY --from=builder --chown=65532:65532 /app/dist ./dist
COPY --from=builder --chown=65532:65532 /app/node_modules ./node_modules
COPY --from=builder --chown=65532:65532 /app/package.json ./package.json

# Expose the port Astro runs on
EXPOSE 4321

# Set environment variables
ENV HOST=0.0.0.0
ENV PORT=4321
ENV NODE_ENV=production

# Start the server
# distroless:nonroot already runs as non-root user (65532)
CMD ["./dist/server/entry.mjs"]

