from serpapi import GoogleSearch
import json

#Query based on api documentation 
params = {
  "q": "laptop",
  "tbm": "shop",
  # "tbs": "vw:l,mr:1,pdtr0:703960%7C703961",
  "hl": "en",
  "gl": "us",
  #api gateway to protect key
  "api_key": "20af5a88173bef719901ac442b076d9fddc9d797bad5d808c2f0beddc10780da"
  
}

search = GoogleSearch(params)
results = search.get_dict()
shopping_results = results['shopping_results']
filters = results['filters']

# print(json_formatted_str)
array = []
for result in shopping_results:
    x = {
      "title": "",
      "price": "",
      "thumbnail": "",
      "source": "",
      "rating": "",
      "link": "",
    }
    if 'title' in result:
      x['title'] = result['title']

    if 'price' in result:
      x['price'] = result['price']

    if 'thumbnail' in result:
      x['thumbnail'] = result['thumbnail']

    if 'source' in result:
      x['source'] = result['source']

    if 'rating' in result:
      x['rating'] = result['rating']

    if 'link' in result:
      x['link'] = result["link"]

    if 'extensions' in result:
      x['extensions'] = result["extensions"]

    array.append(x)

json_formatted_str = json.dumps(array, indent=2)
print(json_formatted_str)

# print(selector["Type"]["Brand"])
# for d in filters:
#   if d['type'] == 'Brand':
#     for x in d['options']:
#       if x['text'] == 'HP':
#         print(x['tbs'])
# weight of the product 

