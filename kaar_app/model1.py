# import necessary libraries
import pandas as pd
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error


# load the data
df = pd.read_csv('train.csv')

# convert date column to datetime object
# df['date'] = pd.to_datetime(df['date'])
df['date'] = pd.to_datetime(df['date'], format='%d-%m-%Y')

# create additional features
df['year'] = df['date'].dt.year
df['month'] = df['date'].dt.month
df['day'] = df['date'].dt.day
df['weekday'] = df['date'].dt.weekday

# print(df.info())

# # split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(df[['store', 'item', 'year', 'month', 'day', 'weekday']], df['sales'], test_size=0.2, random_state=42)
# print(type(X_train))
# print(type(y_train))
# train the random forest classifier
rf = RandomForestRegressor(n_estimators=1, max_depth=10, random_state=42)
rf.fit(X_train, y_train)

# evaluate the random forest classifier
y_pred = rf.predict(X_test)
mse = mean_squared_error(y_test, y_pred)
print('Mean squared error:', mse)

# deploy the model
new_data = pd.DataFrame({'store': [1], 'item': [16], 'year': [2025], 'month': [4], 'day': [1], 'weekday': [3]})
# new_data = np.ndarray([1], [16], [2025], [4], [1], [3])
prediction = rf.predict(new_data)
print('Sales prediction:', prediction)

import pickle
pickle.dump(rf, open('model1.pkl', 'wb'))
