from serpapi import GoogleSearch
import json

def gs_api(test):
  answers_json = [["sanakurata1996@gmail.com", 1, "Mac OS"], ["sanakurata1996@gmail.com", 2, "no"], ["sanakurata1996@gmail.com", 3, "yes"]]
  filter_json = []
  for answer in answers_json:
    x = {
      "email": answer[0],
      "id": answer[1],
      "answer": answer[2],
    }
    filter_json.append(x)

  #add filters into an array and increment keys 

  #Query based on api documentation 
  params = {
  "q": "laptop",
  "tbm": "shop",
  "tbs": "mr:1,pdtr0:703981%7C703985,pdtr1:1020486%7C%2433.78200149536133,pdtr2:1020486%7C%2433.78200149536133",
  "hl": "en",
  "gl": "us",
  #api gateway to protect key
  "api_key": "20af5a88173bef719901ac442b076d9fddc9d797bad5d808c2f0beddc10780da"
  }

  search = GoogleSearch(params)
  results = search.get_dict()
  shopping_results = results['shopping_results']
  filters = results['filters']

  json_formatted_str = json.dumps(filters, indent=2)

  # print(json_formatted_str) #print filters

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


  products = json.dumps(array)
  # json_products = json.dumps(array, indent=2)
  # print(json_products)
  return products

# gs_api("hi")