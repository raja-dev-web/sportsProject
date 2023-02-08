from flask import Flask
from flask import render_template, jsonify


app = Flask(__name__)


@app.route('/json_data')
def json_data():
    score_data = [
        {
            "id": 1,
            "starting_time": "16:00",
            "team_a": "Random Team 1",
            "score": "1 - 3",
            "team_b": "Random Team 2",
            "minute": "10:00",
        },
        {
            "id": 2,
            "starting_time": "18:00",
            "team_a": "Random Team 3",
            "score": "1 - 3",
            "team_b": "Random Team 4",
            "minute": "20:00",
        },
    ]
    return jsonify(score_data)


@app.route('/')
def index():
    score_data = json_data()
    return render_template(
        'index.html',
        games=score_data.json
    )


if __name__ == "__main__":
    app.run(debug=True)
