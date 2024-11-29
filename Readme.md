<h1 align="center">Chat Application</h1>
<div>
    <img src="https://img.shields.io/badge/-React_JS-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="react.js" />
    <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white" alt="nodejs"/>
    <img src="https://img.shields.io/static/v1?style=for-the-badge&message=Axios&color=5A29E4&logo=Axios&logoColor=FFFFFF&label=" alt="axios"/>
    <img src="https://img.shields.io/badge/socket_io-010101?style=for-the-badge&logo=socket.io&logoColor=white" alt="socket.io"/>
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/daisyui-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white" alt="daisy-ui"/>
    <img src="https://img.shields.io/badge/reactrouter-CA4245?style=for-the-badge&logo=reactrouter&logoColor=black" alt="react-router"/>
    <img src="https://img.shields.io/badge/-Vite-black?style=for-the-badge&logoColor=white&logo=vite&color=646CFF" alt="vite" />
    <img src="https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white" alt="express"/>
    <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="mongo-db"/>
    <img src="https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=Cloudinary&logoColor=white" alt="cloudinary"/>
    <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white" alt="jwt"/>
    <img src="https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white" alt="render"/>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 📁 [Project Structure](#structure)
4. 🔋 [Features](#features)
5. 🤸 [Local Setup](#setup)

### <a name="introduction">🤖 Introduction</a>

A real-time chat application, built with a modern tech stack. This app provides a seamless messaging experience, featuring secure authentication and authorization, instant messaging capabilities, and online user status tracking. <br/>
With global state management powered by Zustand, users can enjoy a smooth and responsive interface. Our robust error handling ensures a reliable experience on both the server and client sides. Dive in to connect, communicate, and collaborate in real-time!

### <a name="tech-stack">⚙️ Tech Stack</a>

| **Category**     | **Technologies**              |
| ---------------- | ----------------------------- |
| Frontend         | React, Tailwind CSS, DaisyUI  |
| State Management | Zustand                       |
| Backend          | Node.js, Express.js, Mongoose |
| Connection       | Socket.io                     |
| Database         | MongoDB Atlas                 |
| Deployment       | Render                        |
| Authentication   | JWT, bcryptjs                 |

### <a name="structure">📁 Project Structure</a>

### **Frontend Directory** (`/frontend`)

```
src/
|── public                 # Icons needed for the app
├── components/            # Reusable UI components
├── constants/             # Constant data used in the app
├── lib/                   # Helper functions for frontend
├── pages/                 # Pages of the app
├── store/                 # Global State Management
```

### **Backend Directory** (`/backend`)

```
src/
├── controllers/           # Logic for handling API requests
├── lib/                   # Helper functions for backend
├── models/                # Mongoose models & schema used
├── routes/                # API routes (auth, messages)
├── middlewares/           # Authentication and error-handling middlewares
```

### <a name="features">🔋 Features</a>

👉 **JWT-Based Security:** Ensuring secure user authentication and authorization through JSON Web Tokens, providing a seamless login experience.

👉 **Instant Communication:** Enabling real-time messaging capabilities with Socket.io, allowing users to send and receive messages instantly.

👉 **User Presence Tracking:** Displaying online/offline status of users to enhance interaction and engagement within the application.

👉 **Zustand:** Utilizing Zustand for efficient global state management, simplifying data flow across components without prop drilling.

👉 **Robust Error Management:** Implementing error handling mechanisms on both the server and client sides to ensure a smooth user experience and easier debugging.

👉 **Efficient UI Development:** TailwindCSS enables rapid styling with utility classes and Daisy UI offers pre-designed components for consistent and attractive interfaces.

### <a name="setup">🤸 Local Setup</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/)

**Cloning the Repository**

```
git clone https://github.com/aditya-narayan-sahoo/chat-app.git
cd chat-app
```

**Installation**

Install & Build the project dependencies using npm:

```
npm run build
```

**Running the Project**

```
npm run start
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

### Credits

- This project was made with the help of this video : [YouTube Video](https://www.youtube.com/watch?v=ntKkVrQqBYY&t=15326s)
- You can checkout his channel for more such videos : [As A Programmer](https://www.youtube.com/@asaprogrammer_)
