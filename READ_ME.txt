# Flask Application

A simple Flask web application that can be deployed on Render.

## Project Structure

```
myflaskapp/
├── app.py              # Main application file
├── templates/          # HTML templates
│   ├── base.html       # Base template with common elements
│   ├── index.html      # Home page template
│   └── about.html      # About page template
├── static/             # Static files (CSS, JS, images)
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
├── .gitignore          # Files to ignore in git
├── requirements.txt    # Python dependencies
└── README.md           # Project documentation
```

## Setup Instructions

### Local Development

1. Clone this repository
2. Create a virtual environment:
   ```bash
   python -m venv venv
   ```
3. Activate the virtual environment:
   - On Windows: `venv\Scripts\activate`
   - On macOS/Linux: `source venv/bin/activate`
4. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
5. Run the application:
   ```bash
   python app.py
   ```
6. Open your browser and visit `http://127.0.0.1:5000/`

### Deployment on Render

1. Push your code to a GitHub repository
2. Sign up for an account on [Render](https://render.com/)
3. Create a new Web Service on Render, and select your GitHub repository
4. Use the following settings:
   - Environment: Python
   - Build Command: `pip install -r requirements.txt`
   - Start Command: `gunicorn app:app`
5. Click "Create Web Service"

## License

This project is open source and available under the [MIT License](LICENSE).