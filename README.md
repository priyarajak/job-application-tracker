# 💼 Job Application Tracker (MERN)

A full-stack MERN application to track job applications, manage statuses, and quickly add jobs from links.
Built with **React, Node.js, Express, MongoDB, Tailwind CSS** and deployed on **Vercel + Render**.

---

## 🌐 Live Demo

**Frontend:**
[https://job-application-tracker-one-rho.vercel.app/](https://job-application-tracker-one-rho.vercel.app/)

**Backend API:**
[https://job-application-tracker-p3nu.onrender.com/](https://job-application-tracker-p3nu.onrender.com/)

---

## ✨ Features

* ➕ Add job applications (company & role)
* 🔄 Update job status

  * Applied
  * Interview
  * Offer
  * Rejected
* ❌ Delete job applications
* 🔗 Add job by pasting job link
* 🎨 Color-coded status dropdown
* 📱 Fully mobile responsive UI
* ☁️ Cloud database using MongoDB Atlas
* 🚀 Full deployment (Frontend + Backend)

---

## 🧰 Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS
* Axios

### Backend

* Node.js
* Express.js
* MongoDB + Mongoose
* CORS
* Dotenv

### Deployment

* Frontend → Vercel
* Backend → Render
* Database → MongoDB Atlas

---

## 📂 Project Structure

```
job-application-tracker/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   ├── index.html
│   └── package.json
│
└── README.md
```

---

## ⚙️ Run Locally

### 1️⃣ Clone the repo

```bash
git clone https://github.com/priyarajak/job-application-tracker.git
cd job-application-tracker
```

---

### 2️⃣ Setup Backend

```bash
cd backend
npm install
```

Create `.env` file inside **backend**:

```
MONGO_URI=your_mongodb_connection_string
PORT=5001
```

Run backend:

```bash
npm run dev
```

Backend runs on:

```
http://localhost:5001
```

---

### 3️⃣ Setup Frontend

```bash
cd ../frontend
npm install
```

Create `.env` file inside **frontend**:

```
VITE_API_URL=http://localhost:5001
```

Run frontend:

```bash
npm run dev
```

App runs on:

```
http://localhost:5173
```

---

## 🧠 What I Learned

* Building REST APIs with Node & Express
* Connecting React frontend to backend using Axios
* Using MongoDB Atlas cloud database
* Handling CORS and environment variables
* Deploying full-stack MERN apps
* Writing responsive UI with Tailwind CSS

---

## 📌 Future Improvements

* Authentication (Login / Signup)
* Dashboard with application statistics
* Search & filter jobs
* Edit job details
* Support more job portals

---

## 👩‍💻 Author

**Priya Rajak**

---

