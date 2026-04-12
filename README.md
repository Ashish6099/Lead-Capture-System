# 🚀 AI Lead Capture Engine (n8n + Google Sheets + Email Automation)

A powerful, beginner-friendly **lead generation system** built using **n8n (self-hosted)**, Google Sheets, and SMTP email automation.

This project captures leads from a form, stores them, and instantly sends notifications to both the user and admin.

---

# 📌 FEATURES

* ✅ Custom HTML Lead Form
* ✅ Webhook-based data capture
* ✅ Automatic Google Sheets storage
* ✅ Instant Email to User
* ✅ Instant Email to Admin
* ✅ Fully self-hosted (free setup)
* ✅ Beginner to production-ready architecture

---

# 🧩 PROJECT STRUCTURE

```
Leadform.html
workflow.json (cleaned)
README.md
```

---

# ⚙️ STEP 1: SETUP n8n LOCALLY (DOCKER)

## 1. Install Docker Desktop

Download and install Docker Desktop.

---

## 2. Run n8n Container

Open **PowerShell / Command Prompt**:

```bash
docker run -it --rm ^
-p 5678:5678 ^
-v %USERPROFILE%\.n8n:/home/node/.n8n ^
n8nio/n8n
```

---

## 3. Access n8n

Open browser:

```
http://localhost:5678
```

---

# ▶️ STEP 2: START & STOP n8n

## Manual Method

### Start:

Run same docker command

### Stop:

Press:

```
CTRL + C
```

---

## ⚡ FAST METHOD (BAT FILE)

### Create START file

1. Open Notepad
2. Paste:

```bat
@echo off
docker start n8n || docker run -it -p 5678:5678 --name n8n n8nio/n8n
```

3. Save as:

```
start-n8n.bat
```

---

### Create STOP file

```bat
@echo off
docker stop n8n
```

Save as:

```
stop-n8n.bat
```

---

# 🌐 STEP 3: WEBHOOK SETUP

## 1. Create Workflow

* Add **Webhook Node**

---

## 2. Configure Webhook

* HTTP Method: `POST`
* Path: `lead-form`

---

## 3. Test URL

```
/webhook-test/lead-form
```

---

## 4. Production URL

```
/webhook/lead-form
```

---

## 5. Connect to Form

```html
<form action="YOUR_WEBHOOK_URL" method="POST">
```

---

# 📊 STEP 4: GOOGLE SHEETS SETUP

---

## 1. Create Google Sheet

Columns:

```
Name | Email | Contact | Message | Date
```

---

## 2. Add Google Sheets Node in n8n

* Operation: Append Row
* Connect Google Account (OAuth)

---

## 3. Map Fields

```
Name → {{$json["Name"]}}
Email → {{$json["Email"]}}
Contact → {{$json["Contact"]}}
Message → {{$json["Message"]}}
Date → {{$now}}
```

---

# 📧 STEP 5: SMTP EMAIL SETUP

---

## OPTION 1: Gmail SMTP (FREE)

### Settings:

```
Host: smtp.gmail.com
Port: 465
Secure: true
User: your-email@gmail.com
Password: App Password (not normal password)
```

---

## ⚠️ Important (Gmail)

* Enable **2-Step Verification**
* Generate **App Password**

---

## 2. Email to User Node

* To: `{{$json["Email"]}}`
* Subject: `Thanks for contacting us`

---

## 3. Email to Admin Node

* To: `your-email@gmail.com`
* Subject: `New Lead Received 🎯`

---

## Email Body Example:

```
New Lead Received 🎯

Name: {{$json["Name"]}}
Email: {{$json["Email"]}}
Contact: {{$json["Contact"]}}
Message: {{$json["Message"]}}

Date: {{$now}}
```

---

# 🌍 STEP 6: PUBLIC ACCESS (NGROK)

---

Run:

```bash
docker run -it -e NGROK_AUTHTOKEN=YOUR_TOKEN ngrok/ngrok http host.docker.internal:5678
```

---

## Replace in Form:

```
https://your-ngrok-url/webhook/lead-form
```

---

# ✅ ADVANTAGES

* 💸 100% Free Setup
* ⚡ Real-time automation
* 🧠 No-code + low-code system
* 🔄 Fully customizable workflows
* 📊 Easy data management

---

# ⚠️ DISADVANTAGES / LIMITATIONS

### ❌ 1. Requires Laptop Running

* System stops if laptop is off

### ❌ 2. ngrok URL Changes

* URL resets every restart

### ❌ 3. Gmail Limits

* Sending limits per day

---

# 🛠️ SOLUTIONS

---

## 🔧 Solution 1: Use VPS (Recommended)

* Host n8n on cloud
* Runs 24/7
* No ngrok needed

---

## 🔧 Solution 2: Use Paid ngrok

* Fixed domain
* No URL change

---

## 🔧 Solution 3: Use Email Services

* SendGrid / Resend
* Avoid Gmail limits

---

# 📸 SCREENSHOTS
<img width="800" height="852" alt="image" src="https://github.com/user-attachments/assets/4a8db4b5-8617-49e3-a90e-2f0fda3079e4" />
<img width="1900" height="1020" alt="Screenshot 2026-04-12 145302" src="https://github.com/user-attachments/assets/7828109f-1ae7-4178-9077-236ba59e3dfb" />



---

# 🎥 DEMO VIDEO

(Add your YouTube demo link here)

---

# 🧠 FUTURE IMPROVEMENTS

* AI-based lead scoring
* CRM integration
* Dashboard analytics
* WhatsApp automation

---

# 💼 USE CASES

* Freelancers
* Agencies
* Startups
* SaaS Products

---

# 👨‍💻 AUTHOR

**Rauni.ai**
https://ashish6099.github.io/rauni.ai/
Follow and Subscribe
---

# ⭐ SUPPORT

If you found this useful, give it a ⭐ on GitHub!



