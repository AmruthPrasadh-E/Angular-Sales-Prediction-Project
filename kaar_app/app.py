import numpy as np
import os
import pickle
from flask import Flask, request, jsonify
from werkzeug.utils import secure_filename
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)

model = pickle.load(open("model1.pkl","rb"))

app.config['UPLOAD_FOLDER'] = 'C:\\Users\\AMRUTH PRASADH\\Documents\\KAAR_angular\\kick_start\\file_store'

@app.route('/form', methods=['POST'])
def handle_form():
  store = request.json['store']
  item = request.json['item']
  year = request.json['year']
  month = request.json['month']
  day = request.json['day']
  weekday = request.json['weekday']
  int_features = [int(store), int(item), int(year), int(month), int(day), int(weekday)]
  features = [np.array(int_features)]
  prediction = model.predict(features)
  return jsonify(prediction.tolist())  
  

@app.route('/upload', methods=['POST'])
def handle_file():
  if 'file' not in request.files:
    return jsonify({'error': 'No file included in request.'}), 400
    
  file = request.files['file']
    
  if file.filename == '':
    return jsonify({'error': 'No file selected.'}), 400
    
  if file and allowed_file(file.filename):
    # Save the file
    filename = secure_filename(file.filename)
    file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
    
    return jsonify({'message': 'File uploaded successfully.'}), 200
  else:
    return jsonify({'error': 'Invalid file format.'}), 400
    
def allowed_file(filename):
    ALLOWED_EXTENSIONS = {'txt', 'xls', 'csv'}
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

if __name__ == "__main__":
  app.run(debug=True)