#   Pow Day Project
#   Eric Peterson
#   Fall 2020 CS Senior Project

from flask import Flask

app = Flask(__name__)

@app.route("/")
def main_page():
    return "Filler"

if __name__ == "__main__":
    app.run()