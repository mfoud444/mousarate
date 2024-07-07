import requests

# First POST request
url1 = 'https://sarfonlay.com/imgn.php'
headers1 = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept-Encoding': 'gzip',
    'User-Agent': 'okhttp/4.12.0'
}
data1 = {
    'email': 'dZVo2MWqykBBU7aCjoRT5uU0NaLa16KEYPnvo'
}

# response1 = requests.post(url1, headers=headers1, data=data1)
# print("Response from the first POST request:")
# print(response1.json())

# Second POST request
url2 = 'https://sarfonlay.com/upadd.php'
headers2 = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept-Encoding': 'gzip',
    'User-Agent': 'okhttp/4.12.0'
}
data2 = {
    'api': 'fONoY+dZVo2MWqykBBU7aCjoRT5uU0NaLa16KEYPnvo='
}

response2 = requests.post(url2, headers=headers2, data=data2)
print("Response from the second POST request:")
print(response2.json())