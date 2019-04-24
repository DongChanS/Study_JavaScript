import requests

url = "https://jsonplaceholder.typicode.com/"
headers = {}
data = {}
response = requests.post(url + "posts", data=data, headers=headers)
print(response.json())