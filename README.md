# 🚀 Cypress Docker CI/CD Pipeline

**Automated End-to-End Testing with Cypress, Docker, and GitHub Actions**

## 🔍 Overview
This project demonstrates a complete CI/CD workflow for running Cypress end-to-end tests in Docker containers, automated via GitHub Actions. The solution includes:

- 🐳 Dockerized Cypress tests for consistent execution across environments
- ⚡ GitHub Actions pipeline for automated testing on every push
- 🔄 Seamless integration with Docker Hub for image management

## 🛠️ Tech Stack
- **Cypress** (v14.2.1) - JavaScript end-to-end testing framework
- **Docker** - Containerization for test environments
- **GitHub Actions** - CI/CD automation
- **Chrome** - Browser for test execution

## 🏗️ Project Structure
cypress-docker-ci/
├── .github/
│ └── workflows/
│ └── ci-cd.yml # GitHub Actions workflow
├── cypress/
│ ├── e2e/
│ │ └── ajax-loader.cy.js # Test specs
│ └── videos/ # Recorded test runs
├── Dockerfile # Docker configuration
├── package.json # Node.js dependencies
└── README.md # This file


## 🚦 Getting Started

### Prerequisites
- Node.js (v18+)
- Docker Desktop
- GitHub account
- Docker Hub account (optional)

### Local Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/RahulKumar208/Automated-E2E-testing-pipeline-with-Dockerized-Cypress-and-GitHub-Actions.git
   cd ""

2. Install dependencies:
npm install
Run tests locally:

3. Run tests locally:
npx cypress open

## Docker Commands
// Build the Docker image
docker build -t cypress-tests .

// Run tests in container
docker run cypress-tests

// Run with custom command
docker run cypress-tests --browser firefox

## ⚙️ CI/CD Pipeline
The GitHub Actions workflow (/.github/workflows/ci-cd.yml) automatically:

Runs Cypress tests on every push to main

Builds and pushes Docker image to Docker Hub (if tests pass)

## 🌐 Deployment
To deploy your Docker image:

// Push to Docker Hub
docker push yourusername/cypress-tests:latest

// Pull and run anywhere
docker pull yourusername/cypress-tests:latest
docker run yourusername/cypress-tests

