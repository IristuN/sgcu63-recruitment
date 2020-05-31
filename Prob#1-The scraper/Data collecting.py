import requests
import json
from bs4 import BeautifulSoup

url = "https://rubnongkaomai.com"
response = requests.get("https://rubnongkaomai.com/pages-manifest-07f52c14a655550e2770.js")
text = response.text
start = text.find("pages:")-1
end = text.find("]", start)+1
jsonText = (text[start: end] + "}").replace("pages:",'"pages":').replace("componentChunkName",'"componentChunkName"').replace("jsonName", '"jsonName"').replace("path", '"path"')
data = json.loads(jsonText)

baan_datas = {}
baan_datas["baans"] = []
for item in data["pages"]:
  path = item["path"]
  if ("/baan/" in path) and (path !="/baan/"):
    baan_request = requests.get(url + path)
    baan_soup = BeautifulSoup(baan_request.content, "html.parser")
    baan_data = baan_soup.find("div", {"class":"baan-info-module--text-wrapper--uuYTz"})
    baan = {}
    baan_name = baan_data.find("h1").text
    baan_slogan = baan_data.find("h3").text
    baan["name"] = baan_name
    baan["slogan"] = baan_slogan
    baan_datas["baans"].append(baan)
with open("data_file.json", "w") as data_file:
    json.dump(baan_datas, data_file)