from serpapi import GoogleSearch
import json

#Query based on api documentation 
params = {
  "q": "laptop",
  "tbm": "shop",
  # "tbs": "vw%3Ag%2Cprice%3A1%2Cppr_max%3A1000",
  "location": "Dallas",
  "hl": "en",
  "gl": "us",
  #api gateway to protect key
  "api_key": "20af5a88173bef719901ac442b076d9fddc9d797bad5d808c2f0beddc10780da"
  
}

search = GoogleSearch(params)
results = search.get_dict()
shopping_results = results['shopping_results']
filters = results['filters']
# selector = json.loads(filters)
for result in shopping_results:
  print(f"rating: {result['rating']}\n")
  # print(f"Thumbnail: {result['thumbnail']}\n Title: {result['title']}\nPrice: {result['price']}\nSupplier: {result['source']}\n Link: {result['link']}\n")
# print(shopping_results)
# print(selector["Type"]["Brand"])
# for d in filters:
#   if d['type'] == 'Brand':
#     for x in d['options']:
#       if x['text'] == 'HP':
#         print(x['tbs'])

