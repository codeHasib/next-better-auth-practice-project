# 🔐 Better Auth Practice Project

A hands-on practice project where I explore authentication workflows using **Better Auth**. This project focuses on implementing and understanding core authentication features like email/password login, session handling, and OAuth with Google.

---

## 🚀 Features

- ✅ Email & Password Authentication
- 🔑 Sign In / Sign Out functionality
- 👤 Session Management using `useSession`
- 🌐 Google OAuth Sign-Up / Sign-In
- 🧠 Understanding auth flow & state handling
- 🗄️ MongoDB integration for user storage

---

## 🛠️ Tech Stack

- **Frontend:** Next.js (App Router)
- **Auth Library:** Better Auth
- **Database:** MongoDB
- **Adapter:** better-auth MongoDB adapter

---

## 📂 Project Structure
````
├── app/
│ ├── login/
│ ├── register/
│ └── dashboard/
├── lib/
│ └── auth.js
├── components/
│ └── AuthProvider.jsx
├── .env.local
└── README.md
``````


---

## ⚙️ Setup & Installation

1. **Clone the repository**
```bash
git clone https://github.com/codeHasib/next-better-auth-practice-project.git
```

2. **Install dependencies**
```bash
npm install
```

3. **Setup env file**
```bash
DB_URI=your_mongodb_connection_string
AUTH_SECRET=your_secret_key

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

4. **Run the development server**
```bash
npm run dev
```

## 🔐 Authentication Flow
### 📧 Email & Password

- Users can register with email and password
- Secure login system
- Session persists across pages

## 🔄 Session Handling
- Uses useSession to track user state
- Protects routes based on authentication
- Automatically updates UI on login/logout
## 🌍 Google OAuth
- One-click sign-up/sign-in using Google
- Uses OAuth provider integration
- Useful for real-world authentication systems
## 📘 What I Learned
- How authentication systems work internally
- Managing sessions in modern web apps
- Integrating OAuth providers
- Structuring scalable auth logic
- Working with adapters and databases
- 🧪 Purpose of This Project

#### This is a practice-focused project aimed at building a strong foundation in authentication systems. It’s not production-ready but serves as a learning sandbox for experimenting with Better Auth features.

## 📌 Future Improvements
Add role-based access control
Implement password reset flow
Add email verification
Improve UI/UX
Add protected API routes
🤝 Contributing

This is a personal learning project, but suggestions and improvements are always welcome!