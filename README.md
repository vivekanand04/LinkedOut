# LinkedOut – A Mini LinkedIn Clone 🌐



💻 GitHub Repository: https://github.com/vivekanand04/LinkedOut
📹 Demo Video (YouTube): https://youtu.be/gJATeupYEbw?si=ccBW4PIDspZvoDv9



---

## 🛠 Tech Stack

### Frontend:
- React.js (Vite)
- Tailwind CSS

### Backend:
- Node.js
- Express.js
- JWT for Auth

### Database:
- MongoDB (Mongoose)

### Hosting:
- Frontend: Vercel
- Backend: Render

---

## ✅ Features

### 1. 🔐 Authentication
- Email-based Register & Login
- JWT token-based session handling
- Profile with name, email, and bio

### 2. 📝 Post Feed
- Create, view, and list posts
- Home feed with all user posts
- Timestamp and author info visible

### 3. 👤 Profile Page
- View profile of any user
- List of user’s posts

### 4. 🤝 Connection Requests
- Send/Accept/Reject connection requests
- See status (Pending/Connected)

### 5. 🔔 Notifications
- Real-time notifications for connection requests

### 6. 🌐 Connection Page
- View list of all accepted connections

### 7. 🚪 Logout
- Secure logout with session cleanup

---



---

## 📦 Setup Instructions

1. **Clone the repo**

git clone https://github.com/vivekanand04/LinkedOut.git
cd LinkedOut
Backend Setup

bash
cd backend
npm install
touch .env
# Add Mongo URI and JWT_SECRET in .env
npm start
Frontend Setup

bash

cd ../frontend
npm install
npm run dev
📝 Extra Notes
Fully responsive UI

Clean UI with Tailwind CSS

Notifications handled via backend polling (or could be extended to sockets)

📧 Contact
Vivekanand – vivekathirr02@gmail.com
