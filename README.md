# Web-dev-project
Event Planner is a web application which been built with Angular front-end and Django back-end frameworks. It allows users to manage events, register for events, and view event details. Among main features: JWT-based authentication, routing, and a clean, responsive user interface.

Project Structure
src/
├── app/
│   ├── events/                  # Events component
│   ├── event-details/           # Event details component
│   ├── event-form/              # Event form component (create/edit)
│   ├── login/                   # Login and registration component
│   ├── my-events/               # My Events component
│   ├── models/                  # TypeScript interfaces
│   ├── services/                # Angular services
│   ├── interceptors/            # HTTP interceptors
│   ├── app.routes.ts            # Application routes
│   └── app.component.ts         # Root component
├── assets/                      # Static assets
├── styles.css                   # Global styles
└── main.ts                      # Application bootstrap



Usage
1. Home Page (/events)
View a list of all events.
Search for events by title.
Register for events (if authenticated).
Create new events (if authenticated).

3. Event Details (/events/:id)
View event details (title, date, location, description).
Edit or delete the event (if you are the organizer).
Register for the event (if authenticated).

3. Create/Edit Event (/events/new, /events/:id/edit)
Create a new event or edit an existing one.
Fill out the form with event details (title, description, date, location).

4. Login/Register (/login)
Login with your email and password.
Register a new account.

5. My Events (/my-events)
View events you’ve created or registered for.






