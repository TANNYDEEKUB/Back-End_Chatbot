แน่นอน! ด้านล่างนี้คือตัวอย่างไฟล์ `README.md` ที่เขียนขึ้นสำหรับโปรเจกต์ Node.js + Express นี้ ที่ทำหน้าที่เป็น **Chatbot Backend API** พร้อมเชื่อมต่อ HuggingFace และ MongoDB:

---

```markdown
# Chatbot Backend API

A Node.js & Express-based backend API that connects to Hugging Face's GPT-2 model and MongoDB for chatbot interaction and user management.

## 🚀 Features

- JWT-based Authentication (Login/Register)
- Chat endpoint integrated with Hugging Face Inference API
- MongoDB for user and chat data storage
- RESTful routes for authentication and account management
- Environment variable configuration with `.env` file

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- HuggingFace API
- JWT Authentication
- dotenv, body-parser, cors

## 📁 Project Structure

```

.
├── config.js            # Environment variable config
├── server.js            # Entry point for Express server
├── routes/
│   ├── authRoutes.js    # Authentication routes
│   ├── chatRoutes.js    # Chatbot interaction routes
│   └── accountRoutes.js # Account-related operations
├── models/              # MongoDB models (User, Chat, etc.)
├── controllers/         # Business logic for each route
├── .env                 # Environment-specific secrets
├── package.json         # Project metadata and dependencies
└── .gitignore

```

## 🔐 Environment Variables

Create a `.env` file at the root level and include:

```

PORT=3001
MONGO\_URI=mongodb+srv://<your-mongo-uri>
JWT\_SECRET=your\_jwt\_secret
HUGGING\_FACE\_API\_KEY=your\_huggingface\_api\_key

````

## 📦 Installation

```bash
git clone https://github.com/your-username/chatbot-backend.git
cd chatbot-backend
npm install
````

## 🧪 Running Locally

```bash
npm start
```

Or with `nodemon` for hot-reloading:

```bash
npx nodemon server.js
```

## 🧠 Using HuggingFace API

This project uses GPT-2 by default:

```js
apiUrl: 'https://api-inference.huggingface.co/models/gpt2'
```

You can change this in `config.js` to another supported model URL.

## 📬 API Endpoints

| Method | Endpoint             | Description              |
| ------ | -------------------- | ------------------------ |
| POST   | `/api/auth/login`    | Log in a user            |
| POST   | `/api/auth/register` | Register a new user      |
| POST   | `/api/chat/message`  | Send message to chatbot  |
| GET    | `/api/account/me`    | Get current user profile |

## 📄 License

This project is licensed under the [ISC License](LICENSE).

---

## 🙌 Acknowledgments

* [Hugging Face Inference API](https://huggingface.co/inference-api)
* [Mongoose](https://mongoosejs.com/)
* [Express](https://expressjs.com/)

```


