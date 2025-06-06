# 🎉 Events Beyond - An Event Management Platform

A full-stack **Event Management Platform** that allows users to explore and book various events. It includes features like **Home**, **Signup**, **Login**, **Event Listings**, **Detailed Event Descriptions**, and a **Booking Page**. Built with a **Next.js** frontend and **Django** backend, the platform offers a smooth experience for both users and event organizers.

---

## 🚀 Features

- User Signup & Login
- Browse All Events
- View Detailed Event Descriptions
- Event Booking Functionality
- Responsive UI using Next.js

---

## 🧱 Tech Stack

- **Frontend**: Next.js  
- **Backend**: Django  
- **Database**: MySQL Server 8.0

---

## 📂 Folder Structure

```
EventsBeyond-main/
├── backend/                        # Django Backend
│   ├── eventmanagement-main/      # Main Django project folder
│   ├── userapp/                   # Django app for user auth
│   ├── eventapp/                  # Django app for events
│   ├── manage.py
├── frontend/                      # Next.js Frontend
│   ├── app/                       # Next.js app folder
│   ├── public/                    # Public assets
│   ├── package.json
│   └── README.md                  # Frontend-specific readme
├── README.md                      # Main project readme
```

---

## 📦 Prerequisites

### 🔧 Backend (Python/Django)
- Python 3.x
- pip
- MySQL Server 8.0

### 📦 Required Python Packages
```bash
pip install -r requirements.txt
pip install django mysqlclient djangorestframework django-cors-headers pillow
```

---

### 🌐 Frontend (Next.js/Node.js)
- Node.js (v16+)
- npm or yarn

```bash
cd frontend
npm install
```

---

## 💽 Load Data into Database

```bash
python manage.py loaddata event_data
python manage.py loaddata event_image
python manage.py loaddata contact_messages
python manage.py loaddata bookings
```

---

## 💻 How to Run the Project

### 🔧 Backend Setup (Django)

Make sure MySQL is running and configured in `settings.py`.

```bash
cd backend
python manage.py runserver
```

### 🌐 Frontend Setup (Next.js)

```bash
cd frontend
npm run dev
```

App runs at: [http://localhost:3000](http://localhost:3000)

---

## 📸 Screenshots

> ❌ Don't use local file paths like `C:\Users...`. Upload screenshots to GitHub or use relative paths from `/public/images/`.

**Example:**
```markdown
### 🔐 Before Login

![Before Login](public/images/screenshot-before-login.png)

### ✅ After Login

![After Login](public/images/screenshot-after-login.png)
```

---

## 🙋‍♀️ Usage

- Register or log in.
- Browse available events.
- Book events (confirmation email is sent).
- Contact via the contact form.
- Admins can manage events/bookings at `/admin`.

---

## 🌟 Support

If you found this project helpful, consider giving it a ⭐️ on GitHub!

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
