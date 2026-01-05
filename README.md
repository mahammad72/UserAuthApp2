# 📱 User Authentication App (React Native + TypeScript)

A simple **User Authentication mobile application** built using **React Native and TypeScript**, demonstrating authentication flow using **React Context API**, form validation, navigation, and local persistence.

---

## ✨ Features

### 🔐 Signup
- Name, Email, Password inputs
- Field validation (empty fields)
- Email format validation
- Password length validation (minimum 6 characters)
- Show / Hide password toggle (eye icon)

### 🔑 Login
- Email & Password authentication
- Validation for invalid email format
- Error handling for:
  - User not found (login without signup)
  - Incorrect email or password
- Show / Hide password toggle

### 🏠 Home Screen
- Displays logged-in user’s **name & email**
- Logout functionality

### 🧠 Authentication Management
- Centralized authentication using **React Context API**
- User persistence using **AsyncStorage**
- Automatic session handling on app restart

### 🎁 Bonus
- Password visibility toggle for better UX
- Clean and intuitive UI

---

## 🛠 Tech Stack

- React Native
- TypeScript
- React Context API
- React Navigation
- AsyncStorage
- Expo
- @expo/vector-icons

---

## 📁 Project Structure

```text
src/
├── context/
│   └── AuthContext.tsx
├── navigation/
│   └── AppNavigator.tsx
├── screens/
│   ├── LoginScreen.tsx
│   ├── SignupScreen.tsx
│   └── HomeScreen.tsx
├── types/
│   └── auth.ts
App.tsx
ApplicationVideo/
└── Full application demo video

```
---

## ▶️ Application Demo

Demo Video:
https://drive.google.com/file/d/1Z6sNv2nYmDzAEyF6P2-w8oaMDeAl1TOp/view?usp=drive_link

📁 **ApplicationVideo**  
This folder contains a full working demo video showcasing:
- Signup flow
- Login flow
- Validation errors
- Password visibility toggle
- Logout functionality

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```bash
https://github.com/mahammad72/UserAuthApp2.git
cd UserAuthApp2
