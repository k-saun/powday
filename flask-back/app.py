#   Pow Day Project
#   Eric Peterson
#   Fall 2020 CS Senior Project

from flask import Flask, redirect, render_template

app = Flask(__name__)

@app.route("/")
def main_page():
    return render_template("index.html", token = "hello.world")

if __name__ == "__main__":
    app.run()