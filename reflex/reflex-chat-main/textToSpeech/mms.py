import requests

API_URL = "https://api-inference.huggingface.co/models/facebook/mms-tts-eng"
headers = {"Authorization": "Bearer {process.env.API_KEY}"}

def query(payload):
	response = requests.post(API_URL, headers=headers, json=payload)
	return response.json()
	
output = query({
	"inputs": "The answer to the universe is 42",
})
