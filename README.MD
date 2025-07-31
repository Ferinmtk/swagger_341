# 🛠️ CRUD API with MongoDB, Express, and Swagger

This project is a simple RESTful API built with Node.js, Express, and MongoDB Atlas. It performs full CRUD operations on two collections and includes:

- ✅ GET, POST, PUT, DELETE for `/items`
- ✅ Validation for POST and PUT requests
- ✅ Error handling with appropriate HTTP status codes
- ✅ Swagger UI for API documentation and testing
- ✅ Ready to deploy to platforms like Render

---

## 🚀 Features

- MongoDB Atlas for remote database
- Mongoose models with validation
- Express.js RESTful routes
- Swagger UI for API docs (`/api-docs`)
- Environment variables for secrets
- Organized project structure

---

## 📂 Project Structure

.
├── controllers/
│ └── itemsController.js
├── models/
│ └── item.js
├── routes/
│ └── items.js
├── swagger.js
├── .env
├── server.js
└── README.md


---

## 🧪 API Endpoints

| Method | Endpoint         | Description            |
|--------|------------------|------------------------|
| GET    | `/api/items`     | Get all items          |
| GET    | `/api/items/:id` | Get item by ID         |
| POST   | `/api/items`     | Create new item        |
| PUT    | `/api/items/:id` | Update item by ID      |
| DELETE | `/api/items/:id` | Delete item by ID      |

---

## 📌 Required Fields

For POST and PUT:

```json
{
  "name": "Bananas",
  "quantity": 10
}

    Fields like price, description, and category are optional, but name and quantity are required.

⚠️ Validation & Error Handling

    Missing name or quantity: 400 Bad Request

    Invalid ID: 404 Not Found

    Server errors: 500 Internal Server Error

🧬 Swagger API Docs

After running the server, access:

http://localhost:3000/api-docs

You can test all endpoints directly through Swagger UI.
🧾 Setup Instructions

    Clone the repository:

git clone https://github.com/your-username/your-repo.git
cd your-repo

    Install dependencies:

npm install

    Create a .env file:

PORT=3000
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<dbname>?retryWrites=true&w=majority

    Run the server:

nodemon server.js

