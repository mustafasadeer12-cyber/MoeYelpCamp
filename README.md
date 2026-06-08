# 🚧 YelpCamp (Work In Progress)

This repository is a live, ongoing full-stack web application that I am currently building as part of my software engineering backend training modules. It is an active development sandbox used to master RESTful routing, data persistent schemas, and user authentication pipelines.

## 🛠️ Current Tech Stack & Core Packages

- **Backend Runtime:** Node.js
- **Server Framework:** Express.js
- **Database Engine:** MongoDB (Local Instance via Mongoose ODM)
- **View Engine:** EJS (Embedded JavaScript) with Bootstrap 5
- **Security & Session Layer:** `passport`, `passport-local`, and `express-session`

## 🧠 Features Implemented So Far

- **CRUD Architecture:** Full RESTful route distribution for creating, viewing, editing, and deleting campground data.
- **Session-Based Flash System:** Integrated middleware to parse temporary success/error feedback alerts across client requests.
- **Authentication Infrastructure:** Configured automated password hashing and user registration handshakes via Passport.js.
- **State Preservation Solution:** Implemented a custom `storeReturnTo` middleware patch to cleanly preserve dynamic client redirect routes across user login cycles.
- **Granular Authorization Guardrails:** Structured database checking utilizing the Mongoose `.equals()` method to ensure users can only modify resources they personally created.

## 📌 Development Status

This project is **not yet finalized**. Upcoming developmental milestones include:
- Linking user schemas directly to reviews and campground comments.
- Migrating from local computer RAM session memory to persistent cloud databases.
- Integrating third-party cloud media APIs for image storage and production hosting.