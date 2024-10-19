# Project Spec

## 0. Project Overview.

_To be completed...._

## 1. Software System

_This section describers the entire software system. This includes the users of the system, as well as all the applications, databases, and APIs the system is made of. The application that we're building (the customer-facing web app) is a part of this system._

### System Context

_This is a zoomed out view of the system and the context around it. The system context diagram below follows the guidelines of the C4 Model for visualizing software architecture._

#### System Users

- **Customer** — .
- **Trainer** — .
- **Gym** — .

#### External Systems

#### System Context Diagram

_To be completed...._

### System Containers

_These are the building blocks of the system. Use this list as well as the system context diagram above to build the container diagram for the software system._

- **User Web App** — This is the app that we're designing the architecture for. It's a web application used by users to keep tracking of their trainings.
- **Core API** [Next.js] — REST API used by all mobile and web apps within the system. The Core API also acts as a gateway to external systems (i.e. third-party payment and admin systems.)
- **Core Database** [MongoDB] — Main data store for the application. The Core API reads from and writes to this database.

#### Container Diagram

_To be completed..._

---

## 2. Customer Web Application

_This section describes the customer-facing application in more detail. It's meant to give a high-level understanding of the app we're designing the architecture for._

### UI Designs

_To be completed...._

### Functional Requirements

_This section lists some of the main functional requirements of the web app. This is more of a functionality overview to help guide some of the architectural decisions._

#### Authentication

- Users cannot browse the app without being authenticated.
- Users can create an account using email.
- Users can authenticate using their email.
- Authenticated users can update their profile information.

#### Browsing and Searching

- Users can browse exercises after authentication.
- Users can search for restaurants by ... .
- Users can filter search results by various criteria (e.g., ).

#### Creating Training Sheet

_To be completed...._

#### Training Tracking

_To be completed...._

### Architectural Requirements

👉🏽 Check out the [requirements doc](./requirements.md).