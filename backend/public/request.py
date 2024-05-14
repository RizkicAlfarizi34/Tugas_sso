import requests

def get_data(url):
    response = requests.get(url)
    if response.status_code == 200:
        return response.json()
    else:
        return None

def post_data(url, data):
    response = requests.post(url, json=data)
    if response.status_code == 201:
        return response.json()
    else:
        return None

class CustomRequest:
    def __init__(self, api_key):
        self.api_key = api_key

    def get_with_auth(self, url):
        headers = {'Authorization': f'Bearer {self.api_key}'}
        response = requests.get(url, headers=headers)
        if response.status_code == 200:
            return response.json()
        else:
            return None
