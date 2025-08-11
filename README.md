# User-Authentication-with-local-Storage
# FoodMart Authentication UI

A simple, clean, and responsive front-end project demonstrating a user authentication flow for a fictional online grocery store **FoodMart**. The project includes basic **Register**, **Login**, and **Protected Section** pages built using **HTML**, **Bootstrap 5**, and custom JavaScript.

---

## Features

- **Register Page**
  - Collects username, email, and password from users.
  - Basic client-side validation via HTML5 form attributes.
  - Connects to `register.js` for handling registration logic.

- **Login Page**
  - Accepts username and password.
  - Client-side validation for required fields.
  - Uses `login.js` to manage login flow and user session.

- **Protected Section**
  - A simple protected area shown only to authenticated users.
  - Uses `protected.js` to verify user authentication status.
  - Styled with Bootstrap classes for a modern look.

- **Responsive UI**
  - Built with Bootstrap 5.3.0 alpha for mobile-friendly design.
  - Clean and minimal styling with custom CSS in `styles.css`.



## Technologies Used

- HTML5
- CSS3 (Bootstrap 5.3.0 alpha)
- JavaScript (ES6+)
- Bootstrap CDN for fast UI styling
- Modular JavaScript files for separation of concerns

## Customize

Update JavaScript files (js/login.js, js/register.js, js/protected.js) to integrate with your backend API or localStorage/sessionStorage for user data.

Modify styles in css/styles.css as needed.

## Future Improvements
Add backend integration for user authentication (API endpoints).

Implement password hashing and secure storage.

Enhance client-side validation and error handling.

Add user session persistence (e.g., JWT tokens, cookies).

Implement logout functionality.

Improve UI with more detailed feedback messages.

## License
This project is open source and available under the MIT License.

