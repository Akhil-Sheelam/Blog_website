📝 Django Blog Project

A simple Blog Application built with Django, featuring user authentication (signup/login), profile management, and CRUD (Create, Read, Update, Delete) functionality for blog posts and comments.</br>

🚀 Features</br>

🔐 User Authentication (Signup, Login, Logout)</br>
👤 User Profile Page</br>
📝 Create, Edit, Delete Blog Posts</br>
💬 Add Comments to Posts</br>
📅 Automatic timestamps for posts & comments</br>
🎨 Bootstrap-based UI</br>


📂 Project Structure</br>
myblog_project/</br>
│
├── blog/                      # Main Django app</br>
│   ├── migrations/</br>
│   ├── templates/</br>
│   │   ├── blog/     </br>         # Post templates</br>
│   │   └── registration/  </br>    # Auth templates</br>
│   ├── models.py              # Database models</br>
│   ├── views.py               # Application logic</br>
│   ├── urls.py                # App routes</br>
│   └── admin.py               # Django admin customization</br>
│
├── myblog_project/            # Project settings</br>
│   ├── settings.py</br>
│   ├── urls.py</br>
│   └── wsgi.py</br>
│
├── db.sqlite3                 # Database (default SQLite)</br>
├── manage.py</br>
└── README.md</br>

⚙️ Installation</br>

Clone the repository</br>

git clone https://github.com/your-username/myblog_project.git
cd myblog_project</br>


Create virtual environment</br>

python -m venv venv</br>
source venv/bin/activate      # On Linux/Mac</br>
venv\Scripts\activate         # On Windows</br>


Install dependencies</br>

pip install -r requirements.txt</br>


Apply migrations</br>

python manage.py makemigrations</br>
python manage.py migrate</br>


Create superuser</br>

python manage.py createsuperuser</br>


Run development server</br>

python manage.py runserver</br>


Visit 👉 http://127.0.0.1:8000</br>

📌 Tech Stack</br>

Backend: Django (Python)</br>

Frontend: HTML, CSS, Bootstrap</br>

Database: SQLite (default) / PostgreSQL/MySQL (optional)</br>

🤝 Contributing</br>

Fork the repo</br>

Create a new branch (feature-branch)</br>

Commit your changes</br>

Push to your fork</br>

Open a Pull Request</br>

📜 License</br>

This project is licensed under the MIT License.

7wm
