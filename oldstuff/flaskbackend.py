import os
from flask import Flask, request, send_from_directory
import config
import fixIndexHTML

fixIndexHTML.fixIndexHTMLdoc()

app = Flask(__name__)
app.config.from_object(config)


@app.route("/", methods=['GET'])
def dev():
    if request.args:
        # print(request.args)
        key = list(request.args)[0]
        return send_from_directory(f"{os.getcwd()}/Angular/dist/smart-shoppers", key)
    else:
        return send_from_directory(f"{os.getcwd()}/Angular/dist/smart-shoppers", "index.html")


# ======================================
if __name__ == '__main__':
    print('Angular frontend enabled on localhost port 8080')
    app.run(debug=True, host='127.0.0.1', port=8080)