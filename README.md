# PST-Campus360

## Project Overview
The Campus Management System is a full-stack web application built using the MERN stack (MongoDB, Express, React, Node.js). The platform aims to streamline campus operations, providing tools for administrators, staff, and students to manage essential activities such as attendance tracking, fee payments, and event management. With features like role-based access, real-time notifications, and an intuitive dashboard, the system fosters better communication and efficiency within the campus community.

---

## Features
### 1. **Admin Dashboard**
- Overview of campus activities and key metrics (e.g., attendance percentages, fee payment status).
- Role-based access control for administrators, staff, and students.
- CRUD (Create, Read, Update, Delete) operations for managing student and staff profiles.

### 2. **Attendance Management**
- Mark and track attendance for students and staff.
- Generate attendance reports (daily, weekly, monthly).
- Notify students/staff for low attendance thresholds.

### 3. **Fee Payment System**
- Manage student fee records (paid, due, overdue).
- Integration with payment gateways (Stripe/PayPal) for online transactions.
- Automated receipt generation and email notifications for payments.

### 4. **Event Management**
- Create, update, and manage campus events.
- Registration system for events with RSVP tracking.
- Notifications and reminders for upcoming events.

### 5. **Additional Features**
- Responsive design for seamless experience on all devices.
- Email and SMS notifications for updates and reminders.
- Search and filter functionality for quick access to data.

---

## Tech Stack
### **Frontend:**
- React.js
- Tailwind CSS
- Recharts/Chart.js (for data visualization)

### **Backend:**
- Node.js with Express.js

### **Database:**
- MongoDB

### **Payment Integration:**
- Stripe or PayPal API

### **Notifications:**
- Nodemailer (email notifications)
- Twilio API (SMS notifications)

---

## Installation and Setup
### Prerequisites:
- Node.js installed on your machine.
- MongoDB database setup.
- Stripe/PayPal account for payment gateway integration.

### Steps:
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-repo/campus-management-system.git
   cd campus-management-system
   ```

2. **Install Dependencies:**
   - For backend:
     ```bash
     cd backend
     npm install
     ```
   - For frontend:
     ```bash
     cd ../frontend
     npm install
     ```

3. **Set Up Environment Variables:**
   Create a `.env` file in the `backend` folder with the following keys:
   ```env
   PORT=5000
   MONGO_URI=your-mongodb-connection-string
   JWT_SECRET=your-jwt-secret
   STRIPE_SECRET_KEY=your-stripe-secret-key
   EMAIL_USER=your-email@example.com
   EMAIL_PASS=your-email-password
   TWILIO_SID=your-twilio-sid
   TWILIO_AUTH_TOKEN=your-twilio-auth-token
   TWILIO_PHONE_NUMBER=your-twilio-phone-number
   ```

4. **Start the Development Server:**
   - Backend:
     ```bash
     cd backend
     npm run dev
     ```
   - Frontend:
     ```bash
     cd ../frontend
     npm start
     ```

5. **Access the Application:**
   Open your browser and navigate to `http://localhost:3000`.

---

## API Endpoints
### **Authentication**
- `POST /api/auth/register` - Register a new user.
- `POST /api/auth/login` - Authenticate user and return a token.

### **Attendance**
- `GET /api/attendance` - Get attendance records.
- `POST /api/attendance` - Mark attendance.
- `GET /api/attendance/report` - Generate attendance reports.

### **Fees**
- `GET /api/fees` - Fetch fee records.
- `POST /api/fees/pay` - Process fee payments.

### **Events**
- `GET /api/events` - Fetch all events.
- `POST /api/events` - Create a new event.
- `PUT /api/events/:id` - Update an event.
- `DELETE /api/events/:id` - Delete an event.

---

## Future Enhancements
- Integration with biometric or QR code-based attendance systems.
- AI-powered insights for student performance tracking.
- Multi-language support for a diverse user base.
- Mobile application for enhanced accessibility.

---

## Contributing
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Submit a pull request.

---

## License
This project is licensed under the [MIT License](LICENSE).

---

## Contact
For questions or collaboration, contact [Your Name](mailto:your-email@example.com).

