# Pet Selling System

A **Pet Selling Platform** where users can **Register**, **Add Pet**, **Buy Pets** and **Track Orders**. Built using **React**, **Node.js**, **Express**, and **MySQL**.

## Features

- User Authentication (Login/Registration)
- Pet Listings with Name, Breed, Price, and Images
- List Pets for Sale (Add New Pet Form)
- Purchase Form with Buyer Details
- Fully Responsive Design
- Real-time updates after pet purchase

## Technologies Used

- **Frontend** : React.js, Axios for API requests, CSS, React Router for navigation
- **Backend**: Node.js, Express.js
- **DataBase**: MySQL (Relational Database)

## Project Structure

```
pet-selling-system/
├── client/           # React Frontend (Vite)
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── styles/
│   ├── .gitignore
│   ├── package.json
│   └── vite.config.js
│
├── server/            # Node + Express Backend
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── routes/
│   ├── .gitignore
│   ├── server.js
│   └── package.json
│
└── README.md         # Project overview
```

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/pet-selling-system.git
cd pet-selling-system
```

### 2. 🧩 Install Dependencies

**Frontend:**

```bash
cd client
npm install
```

**Backend:**

```bash
cd ../server
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the `/server` folder:

```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASS=your_password
DB_NAME=petsystem
JWT_SECRET=your_jwt_secret
```

### 4. Start the App

**Frontend:**

```bash
cd client
npm run dev
```

**Backend:**

```bash
cd ../server
npm run dev
```

---

📬 Connect with Me

💼 Portfolio: https://umeshpalportfolio.vercel.app/

📧 Email: umeshpal8141@gmail.com
