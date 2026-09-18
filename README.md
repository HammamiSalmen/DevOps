# DevOps Project Lab

A hands-on DevOps showcase featuring an automated, end-to-end CI/CD pipeline built to test, analyze, containerize, and deploy full-stack applications.


## Overview

This repository demonstrates practical DevOps practices by automating the delivery workflow for microservices and full-stack environments. It bridges software development and infrastructure management—focusing on code quality, automated testing, container orchestration, and seamless deployments.


## Core Technical Stack

* **CI/CD Orchestration:** Jenkins
* **Static Code Analysis:** SonarQube
* **Containerization & Orchestration:** Docker, Docker Compose, Kubernetes (minikube)
* **Hosting & Deployment:** Railway / Cloud Infrastructure
* **Version Control:** Git & GitHub Workflow


## Pipeline Architecture

1. **Source Control:** Triggered on code commits to target branches.
2. **Quality Gate:** Code analysis via **SonarQube** to enforce security standards, code coverage, and linting.
3. **Build & Test:** Automated unit testing and application build steps.
4. **Containerization:** Multi-stage **Docker** builds to minimize image sizes.
5. **Deployment:** Automated deployment pipeline pushing containers to target environments.


## Getting Started Locally

### Prerequisites

* Docker & Docker Compose
* Git

### Quick Setup

```bash
# Clone the repository
git clone https://github.com/HammamiSalmen/DevOps.git
cd DevOps

# Run the environment using Docker Compose
docker-compose up -d --build

```


## Purpose

Built as a dedicated laboratory to apply, test, and showcase real-world CI/CD workflows, automated testing gates, and containerized deployment patterns.
