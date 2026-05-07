# Build Plan: Car Rental CRM Project

**Client:** DriveEase Rentals
**Total action points:** 8

This plan was generated from the approved action points. Items are ordered by build dependency — start at the top and work down.

---

### 1. Develop Fleet Management Module

_Category: `feature` · Priority: `high`_

Create a module to manage the entire car fleet with profiles for each vehicle including details such as registration, model, year, current location, status, and service history.

**Acceptance criteria:**
- Each car in the fleet has a unique profile accessible via the system.
- Profiles include comprehensive details: registration, model, year, location, status, service history.
- Statuses (e.g., available, rented, in service) can be updated and viewed in real-time.

---

### 2. Implement Booking System

_Category: `feature` · Priority: `high`_

Create a booking system that checks car availability, schedules bookings, and prevents double bookings.

**Acceptance criteria:**
- Booking system checks availability by specified date range.
- Prevents double bookings across all branches.
- Allows for booking creation and updates.

---

### 3. Develop Customer Management Module

_Category: `feature` · Priority: `high`_

Build a CRM to store customer profiles, including document uploads, rental history, and notes.

**Acceptance criteria:**
- Customer profiles store name, license, CNIC, phone number.
- Supports document upload (CNIC, license).
- Displays complete customer rental history and notes.

---

### 4. Set Up Branch-Level Access Control

_Category: `infra` · Priority: `medium`_

Implement access controls so each branch can manage its data independently, while the owner can view all data.

**Acceptance criteria:**
- Each branch staff can only access and manage data for their branch.
- Owner can view and manage data across all branches.

---

### 5. Create Payments and Invoicing Module

_Category: `feature` · Priority: `high`_

Develop a module to record payments against bookings and generate invoices, including cash and bank transfers.

**Acceptance criteria:**
- Can record payments (cash, bank transfer, Easypaisa) against specific bookings.
- Generates invoices for completed transactions.
- Provides daily and monthly collection reports.

---

### 6. Design Public Booking Inquiry Form

_Category: `feature` · Priority: `medium`_

Implement a simple booking inquiry form on the website for customers to check availability and request bookings.

**Acceptance criteria:**
- Public-facing form allows customers to request bookings.
- Submissions create a lead in the CRM for staff follow-up.
- Form captures basic customer details and requested dates.

---

### 7. Implement Vehicle Handover and Return Checklist

_Category: `feature` · Priority: `medium`_

Introduce a mobile-friendly checklist for vehicle handovers and returns including photo documentation.

**Acceptance criteria:**
- Checklist covers fuel level, mileage, and vehicle condition (interior, exterior).
- Allows uploads of photos linked to the booking in the system.
- Accessible and fillable via mobile devices during handover and return.

---

### 8. Develop Owner Dashboard and Reports

_Category: `feature` · Priority: `medium`_

Create a dashboard for the owner with daily operational metrics and weekly/monthly analytics.

**Acceptance criteria:**
- Dashboard shows daily metrics: cars rented, cash collected, returns due, overdue bookings.
- Weekly analytics include revenue per branch, most rented, and idle cars.
- Monthly reports display overall revenue, expenses, and top customers.

