# 🚀 Production Deployment & Database Seeding Guide

This guide outlines the step-by-step process to deploy your newly modernized Next.js frontend, Express backend, set up a production database, and automatically seed it with **Sonu Gupta's** professional profile details and projects.

---

## 💾 Step 1: Set Up MongoDB Atlas (Production Database)

Since your project uses MongoDB, you need a cloud-hosted database. **MongoDB Atlas** offers a generous free tier:
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and sign up for a free account.
2. Create a new Shared Cluster (Free tier). Select your preferred cloud provider and region (e.g., AWS / N. Virginia).
3. Under **Security Quickstart**:
   - Create a database user (write down the username and password).
   - Add a connection IP address. To allow deployments from platforms like Vercel/Render, add `0.0.0.0/0` (Allow Access from Anywhere) or whitelist your specific hosting IPs.
4. Click **Connect** -> **Drivers** -> Copy the **Connection String** (`MONGO_URI`). It will look like this:
   `mongodb+srv://<username>:<password>@cluster0.xxxx.mongodb.net/?retryWrites=true&w=majority`
   *(Replace `<username>` and `<password>` with the database user details you created).*

---

## 📡 Step 2: Deploy the Express Backend

You can deploy the backend on platforms like **Render**, **Railway**, or **Heroku**:

### Option A: Render (Recommended & Free)
1. Go to [Render.com](https://render.com) and log in.
2. Click **New +** and select **Web Service**.
3. Connect your GitHub repository.
4. Configure the service:
   - **Name**: `sonu-portfolio-backend`
   - **Root Directory**: `backend`
   - **Runtime**: `Node`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
5. Under **Advanced** -> Click **Add Environment Variable**:
   - `MONGO_URI` = *[Your MongoDB Atlas Connection String from Step 1]*
   - `PORT` = `10000`
   - `SENDGRID_API_KEY` = *[Optional SendGrid API Key for contact form notifications]*
6. Click **Create Web Service**. Render will build and deploy your backend and provide a public URL (e.g., `https://sonu-portfolio-backend.onrender.com`).

---

## 🌱 Step 3: Populate & Seed the Database

Once your backend is deployed or when your MongoDB Atlas cluster is online, you can run the seeding script to populate your database with Sonu Gupta's technical skills, experience at Hanging Panda, achievements, and showcase projects:

### Option A: Seed Directly from Local Workspace (Recommended)
You can point your local workspace to your live production database to seed it instantly:
1. Open a terminal in your project's root folder (`G:\MyPortfolio\my_portfolio`).
2. Run this command in PowerShell to set the target database environment variable temporarily and trigger the seed:
   ```powershell
   $env:MONGO_URI="mongodb+srv://<username>:<password>@cluster0.xxxx.mongodb.net/portfolio?retryWrites=true&w=majority"; npm run seed
   ```
   *(Be sure to replace the connection string with your actual MongoDB Atlas URL).*

### Option B: Seed on Local Database
If you are running MongoDB locally:
1. Ensure your local MongoDB service is running.
2. Run:
   ```powershell
   npm run seed
   ```

---

## 💻 Step 4: Configure & Deploy Next.js Frontend

Deploy the Next.js frontend to **Vercel** (the creators of Next.js):
1. Go to [Vercel.com](https://vercel.com) and log in.
2. Click **Add New** -> **Project**.
3. Import your GitHub repository.
4. Configure the Vercel project:
   - **Framework Preset**: `Next.js`
   - **Root Directory**: `frontend`
5. Under **Environment Variables**, add:
   - `NEXT_PUBLIC_BACKEND_URL` = `https://sonu-portfolio-backend.onrender.com/api` *(Your Render backend URL + `/api`)*
6. Click **Deploy**. Vercel will optimize, compile, and deploy your site, providing your final live portfolio website link!

---

> [!IMPORTANT]
> ### 🔒 CORS & Security Reminder
> Once your frontend is deployed to Vercel, copy your Vercel URL (e.g., `https://sonu-portfolio.vercel.app`) and add it to `allowedOrigins` inside `backend/src/server.ts` if you want strict CORS. (Currently configured to allow any origin in development mode, but whitelisting is best practice in production!).
