# Web Application High-Level Design Doc

## 1. Overview

This document outlines the high-level architecture design for the customer-facing web application.

This design document addresses the architectural requirements, provides a high-level design, considers alternatives, and outlines a timeline for implementation.

## 2. Context

_To be completed...._

## 3. Goals and Non-Goals

### Goals

- **Scalability**: Design an architecture that can support a growing team and an increasing number of users.
- **Modularity**: Ensure the codebase is modular to allow multiple developers to work in parallel without conflicts.
- **Performance**: Optimize the application for quick load times and smooth user interactions, especially on mobile devices.
- **Accessibility**: Ensure compliance with WCAG 2.2 accessibility standards.

### Non-Goals

## 4. High Level Design

We're going to build the Customer Web Application as a monolithic server-side rendered React app using Next.js. Like other app clients, the customer web app will communicate with the core database and any external services using the existing Core API.

### Container Diagram

_To be completed...._

### Architectural Style

- **Component-Based Architecture**: Utilize a component-based architecture using React to create reusable UI components.
- **Server-Side Rendered Application**: Use Next.js for server-side rendering, static site generation, and improved performance.
- **TypeScript**: Use TypeScript for type safety and better developer experience, while allowing gradual adoption to accommodate all team members.

### Key Components

1. **Home Module**: Serves as the landing page, displaying features and recommendations.

2. **Register Module**: Manages user registration and login.

_To be completed...._ 

### Technology Stack

- **Frontend**: React, Next.js, TypeScript,
- **Backend**: MongoDB , Prisma
- **Deployment**: 

## 5. Alternatives Considered

## 6. Timeline

### Phase 1: Discovery and Planning (September 2024 - October  2024)

- Finalize requirements and gather detailed specifications.
- Design the architecture and create detailed technical documentation.

### Phase 2: Initial Development (November 2024)

- Set up the project structure and configure the development environment.
- Implement core modules:

### Phase 3: Feature Development ()

- Implement remaining modules:
- Conduct performance and scalability testing.

### Phase 4: Testing and Deployment ()

- Perform comprehensive end-to-end testing (manual and automated.)
- Deploy to staging environment.
- Deploy to production and monitor for issues.

## 7. Risks and Open Questions

### Risks

### Open Questions

## 8. Appendix

### References

- [Architectural Requirements Document](./requirements.md)
- [Domain Model](./domain.md)
- [ADR](./adr.md)