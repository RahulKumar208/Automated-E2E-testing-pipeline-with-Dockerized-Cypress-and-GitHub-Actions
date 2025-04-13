# Use official Cypress image with the same version as CI
FROM cypress/included:14.2.1

# Set working directory
WORKDIR /e2e

# Install system dependencies for Chrome
RUN apt-get update && \
    apt-get install -y \
    libgbm-dev \
    libxshmfence-dev \
    && rm -rf /var/lib/apt/lists/*

# Copy package files first for better caching
COPY package.json package-lock.json ./

# Install npm dependencies
RUN npm ci

# Copy all files
COPY . .

# Fix permissions (important for CI environments)
RUN chown -R node /e2e && \
    chmod -R 755 /e2e

# Run as non-root user
USER node

# Entry point for running tests
ENTRYPOINT ["npx", "cypress", "run"]
CMD ["--browser", "chrome", "--headless"]