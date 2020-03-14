from flask import Flask, escape, request, render_template

app = Flask(__name__)


@app.route('/')
def hello():
    return render_template('news_list.html')


@app.route('/farm')
def farm():
    return render_template('farm.html')


@app.route('/login')
def login():
    return render_template('login.html')

# 在命令列執行以下指令
# env FLASK_APP=flask_sample.py flask run
