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
  
}

search = GoogleSearch(params)
results = search.get_dict()
shopping_results = results['shopping_results']
filters = results['filters']
# selector = json.loads(filters)
for result in shopping_results:
  print(f"Title: {result['title']}\nPrice: {result['price']}\nSupplier: {result['source']}\n")
# print(selector["Type"]["Brand"])
# for d in filters:
#   if d['type'] == 'Brand':
#     for x in d['options']:
#       if x['text'] == 'HP':
#         print(x['tbs'])

