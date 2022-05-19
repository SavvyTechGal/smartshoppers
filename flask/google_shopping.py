from serpapi import GoogleSearch
import json

def gs_api(real_answers):
  answers_json = eval(real_answers)
  cleaned_answers_json = []
  filters_json = []
  for answer in answers_json:
    x = {
      "id": answer[1],
      "answer": answer[2],
      "rank": answer[3]
    }
    cleaned_answers_json.append(x)
  
  cleaned_answers_json.sort(key = lambda json: json['rank'], reverse=False)

  print(cleaned_answers_json)

  #Query based on api documentation 
  params = {
  "q": "laptop",
  "tbm": "shop",
  "hl": "en",
  "gl": "us",
  #api gateway to protect key
  "api_key": "20af5a88173bef719901ac442b076d9fddc9d797bad5d808c2f0beddc10780da"
  }

  search = GoogleSearch(params)
  results = search.get_dict()
  filters = results['filters']


  count = 0
  tbs_ids = []

  #add filters into an array and increment keys (ids 1-21)
  for answer in cleaned_answers_json: 
    x = {
      "id": answer["id"],
      "answer": answer["answer"],
      "rank": answer["rank"],
      "query_id": ""
    }
    #if answer is not provided do not query
    if ((x == '{}') or (x == 'no')):
      x["query_id"] = ""

    #Do you run several apps? -> Type Installed Memory, Number of Cores, Drive Type
    elif x["id"] == 1: 
			#get object in filters
      for object in filters:
        #locate Installed Memory
        if object["type"] == "Installed Memory":
          for option in object["options"]: 
            if ("12" in option["text"]):
              tbs_id = option["tbs"][option["tbs"].rindex(':')+1:]
              if tbs_id not in tbs_ids:
                if x["query_id"] != "":
                  x["query_id"] += ','
                x["query_id"] += f"pdtr{count}:{tbs_id}"
                tbs_ids.append(tbs_id)
                count += 1
				# locate Number of Cores
        if object["type"] == "Number of Cores":
          first = True
          if x["query_id"] != "":
            x["query_id"] += ','
            for option in object["options"]:
              if ("Quad" in option["text"]) or ("Hexa" in option["text"]) or ("Octa" in option["text"]):
                tbs_id = option["tbs"][option["tbs"].rindex(':')+1:]
                if tbs_id not in tbs_ids:
                  if first == True: #check if first of type
                      x["query_id"] = f"pdtr{count}:{tbs_id}"
                      tbs_ids.append(tbs_id)
                      count += 1
                      first = False
                  else:
                    tbs_id = tbs_id[tbs_id.rindex('C')+1:]
                    x["query_id"] += f"!{tbs_id}"
				# locate Drive Type
        if object["type"] == "Drive Type":
          first = True
          if x["query_id"] != "":
            x["query_id"] += ','
          for option in object["options"]:
            if ("Solid" in option["text"]):
              tbs_id = option["tbs"][option["tbs"].rindex(':')+1:]
              if tbs_id not in tbs_ids:
                  if first == True: #check if first of type
                      x["query_id"] = f"pdtr{count}:{tbs_id}"
                      tbs_ids.append(tbs_id)
                      count += 1
                      first = False
                  else:
                    tbs_id = tbs_id[tbs_id.rindex('C')+1:]
                    x["query_id"] += f"!{tbs_id}"

    #Do you travel often? -> Type Battery Life, Weight 
    elif x["id"] == 2: 
			#get object in filters
      for object in filters:
        #locate Battery Life
        if object["type"] == "Battery Life":
          for option in object["options"]:
            if ("13 hours" in option["text"]):
              tbs_id = option["tbs"][option["tbs"].rindex(':')+1:]
              if tbs_id not in tbs_ids:
                if x["query_id"] != "":
                  x["query_id"] += ','
                x["query_id"] += f"pdtr{count}:{tbs_id}"
                tbs_ids.append(tbs_id)
                count += 1
				#Weight
        if object["type"] == "Weight":
          for option in object["options"]:
            if ("2.9 lb" in option["text"]):
              tbs_id = option["tbs"][option["tbs"].rindex(':')+1:]
              if tbs_id not in tbs_ids:
                if x["query_id"] != "":
                  x["query_id"] += ','
                x["query_id"] += f"pdtr{count}:{tbs_id}"
                tbs_ids.append(tbs_id)
                count += 1
    #   print(x["query_id"])
    #end travel id 2
      
    #Operating System -> 
    elif x["id"] == 3:
      first = True
      #get object in filters
      for object in filters:
        #locate correct type object
        if object["type"] == "Operating System":
          print(object) #testing

        #loop through options
          for option in object["options"]:
            if "Windows" in option["text"]:
              if "Windows" in x["answer"]:
                print("Windows", option["tbs"]) #testing 
                print(option["tbs"][option["tbs"].rindex(':')+1:]) #testing
                tbs_id = option["tbs"][option["tbs"].rindex(':')+1:]
                if tbs_id not in tbs_ids:
                  if first == True: #check if first of type
                    x["query_id"] = f"pdtr{count}:{tbs_id}"
                    tbs_ids.append(tbs_id)
                    count += 1
                    first = False
                  else:
                    tbs_id = tbs_id[tbs_id.rindex('C')+1:]
                    x["query_id"] += f"!{tbs_id}"


            if "Mac" in option["text"]:
              if "Mac" in x["answer"]:
                print("Mac", option["tbs"]) #testing 
                print(option["tbs"][option["tbs"].rindex(':')+1:]) #testing
                tbs_id = option["tbs"][option["tbs"].rindex(':')+1:]
                if tbs_id not in tbs_ids:
                  if first == True: #check if first of type
                    x["query_id"] = f"pdtr{count}:{tbs_id}"
                    tbs_ids.append(tbs_id)
                    count += 1
                    first = False
                  else:
                    tbs_id = tbs_id[tbs_id.rindex('C')+1:]
                    x["query_id"] += f"!{tbs_id}"
                  
            if "Chrome" in option["text"]:
              if "Chrome" in x["answer"]:
                print("Chrome", option["tbs"]) #testing 
                print(option["tbs"][option["tbs"].rindex(':')+1:]) #testing
                tbs_id = option["tbs"][option["tbs"].rindex(':')+1:]
                if tbs_id not in tbs_ids:
                  if first == True: #check if first of type
                    x["query_id"] = f"pdtr{count}:{tbs_id}"
                    tbs_ids.append(tbs_id)
                    count += 1
                    first = False
                  else:
                    tbs_id = tbs_id[tbs_id.rindex('C')+1:]
                    x["query_id"] += f"!{tbs_id}"

      print(x["query_id"])
    #end of Operating systems id 3

    #Brands 
    elif x["id"] == 4:
      first = True
      #get object in filters
      for object in filters:
        #locate correct type object
        if object["type"] == "Brand":
          print(object) #testing

        #   #loop through options
          for option in object["options"]:
            if "HP" in option["text"]:
              if "HP" in x["answer"]:
                print("HP", option["tbs"]) #testing 
                print(option["tbs"][option["tbs"].rindex(':')+1:]) #testing
                tbs_id = option["tbs"][option["tbs"].rindex(':')+1:]
                if tbs_id not in tbs_ids:
                  if first == True: #check if first of type
                    x["query_id"] = f"pdtr{count}:{tbs_id}"
                    tbs_ids.append(tbs_id)
                    count += 1
                    first = False
                  else:
                    tbs_id = tbs_id[tbs_id.rindex('C')+1:]
                    x["query_id"] += f"!{tbs_id}"

            if "Dell" in option["text"]:
              if "Dell" in x["answer"]:
                print("Dell", option["tbs"]) #testing 
                print(option["tbs"][option["tbs"].rindex(':')+1:]) #testing
                tbs_id = option["tbs"][option["tbs"].rindex(':')+1:]
                if tbs_id not in tbs_ids:
                  if first == True: #check if first of type
                    x["query_id"] = f"pdtr{count}:{tbs_id}"
                    tbs_ids.append(tbs_id)
                    count += 1
                    first = False
                  else:
                    tbs_id = tbs_id[tbs_id.rindex('C')+1:]
                    x["query_id"] += f"!{tbs_id}"
                  
            if "ASUS" in option["text"]:
              if "ASUS" in x["answer"]:
                print("ASUS", option["tbs"]) #testing 
                print(option["tbs"][option["tbs"].rindex(':')+1:]) #testing
                tbs_id = option["tbs"][option["tbs"].rindex(':')+1:]
                if tbs_id not in tbs_ids:
                  if first == True: #check if first of type
                    x["query_id"] = f"pdtr{count}:{tbs_id}"
                    tbs_ids.append(tbs_id)
                    count += 1
                    first = False
                  else:
                    tbs_id = tbs_id[tbs_id.rindex('C')+1:]
                    x["query_id"] += f"!{tbs_id}"
            
            if "Lenovo" in option["text"]:
              if "Lenovo" in x["answer"]:
                print("Lenovo", option["tbs"]) #testing 
                print(option["tbs"][option["tbs"].rindex(':')+1:]) #testing
                tbs_id = option["tbs"][option["tbs"].rindex(':')+1:]
                if tbs_id not in tbs_ids:
                  if first == True: #check if first of type
                    x["query_id"] = f"pdtr{count}:{tbs_id}"
                    tbs_ids.append(tbs_id)
                    count += 1
                    first = False
                  else:
                    tbs_id = tbs_id[tbs_id.rindex('C')+1:]
                    x["query_id"] += f"!{tbs_id}"
            
            if "Acer" in option["text"]:
              if "Acer" in x["answer"]:
                print("Acer", option["tbs"]) #testing 
                print(option["tbs"][option["tbs"].rindex(':')+1:]) #testing
                tbs_id = option["tbs"][option["tbs"].rindex(':')+1:]
                if tbs_id not in tbs_ids:
                  if first == True: #check if first of type
                    x["query_id"] = f"pdtr{count}:{tbs_id}"
                    tbs_ids.append(tbs_id)
                    count += 1
                    first = False
                  else:
                    tbs_id = tbs_id[tbs_id.rindex('C')+1:]
                    x["query_id"] += f"!{tbs_id}"
            
            if "Microsoft" in option["text"]:
              if "Microsoft" in x["answer"]:
                print("Microsoft", option["tbs"]) #testing 
                print(option["tbs"][option["tbs"].rindex(':')+1:]) #testing
                tbs_id = option["tbs"][option["tbs"].rindex(':')+1:]
                if tbs_id not in tbs_ids:
                  if first == True: #check if first of type
                    x["query_id"] = f"pdtr{count}:{tbs_id}"
                    tbs_ids.append(tbs_id)
                    count += 1
                    first = False
                  else:
                    tbs_id = tbs_id[tbs_id.rindex('C')+1:]
                    x["query_id"] += f"!{tbs_id}"
            
            if "Apple" in option["text"]:
              if "Apple" in x["answer"]:
                print("Apple", option["tbs"]) #testing 
                print(option["tbs"][option["tbs"].rindex(':')+1:]) #testing
                tbs_id = option["tbs"][option["tbs"].rindex(':')+1:]
                if tbs_id not in tbs_ids:
                  if first == True: #check if first of type
                    x["query_id"] = f"pdtr{count}:{tbs_id}"
                    tbs_ids.append(tbs_id)
                    count += 1
                    first = False
                  else:
                    tbs_id = tbs_id[tbs_id.rindex('C')+1:]
                    x["query_id"] += f"!{tbs_id}"

      print("Brand", x["query_id"])
    #end of Brand id 4

    #Do you run out of storage? -> Type Drive Capacity
    elif x["id"] == 5: 
			#get object in filters
      for object in filters:
        #locate Drive Capacity
        if object["type"] == "Drive Capacity":
          for option in object["options"]:
            if ("> 1 TB" in option["text"]):
              tbs_id = option["tbs"][option["tbs"].rindex(':')+1:]
              if tbs_id not in tbs_ids:
                if x["query_id"] != "":
                  x["query_id"] += ','
                x["query_id"] += f"pdtr{count}:{tbs_id}"
                tbs_ids.append(tbs_id)
                count += 1
    
    #Are constant charges a problem? -> Type Battery Life
    elif x["id"] == 6: 
			#get object in filters
      for object in filters:
        #locate Battery Life
        if object["type"] == "Battery Life":
          for option in object["options"]:
            if ("13 hours" in option["text"]):
              tbs_id = option["tbs"][option["tbs"].rindex(':')+1:]
              if tbs_id not in tbs_ids:
                if x["query_id"] != "":
                  x["query_id"] += ','
                x["query_id"] += f"pdtr{count}:{tbs_id}"
                tbs_ids.append(tbs_id)
                count += 1
    
    #Are you hindered by your device's speed? -> Type Installed Memory, Drive Type, Processor Speed
    elif x["id"] == 7: 
			#get object in filters
      for object in filters:
				#Drive Type
        if object["type"] == "Drive Type":
          first = True
          if x["query_id"] != "":
            x["query_id"] += ','
          for option in object["options"]:
            if ("Solid" in option["text"]):
              tbs_id = option["tbs"][option["tbs"].rindex(':')+1:]
              if tbs_id not in tbs_ids:
                  if first == True: #check if first of type
                    x["query_id"] = f"pdtr{count}:{tbs_id}"
                    tbs_ids.append(tbs_id)
                    count += 1
                    first = False
                  else:
                    tbs_id = tbs_id[tbs_id.rindex('C')+1:]
                    x["query_id"] += f"!{tbs_id}"

        #Processor Speed
        if object["type"] == "Processor Speed":
          for option in object["options"]:
            if ("> 3 GHz" in option["text"]):
              tbs_id = option["tbs"][option["tbs"].rindex(':')+1:]
              if tbs_id not in tbs_ids:
                if x["query_id"] != "":
                  x["query_id"] += ','
                x["query_id"] += f"pdtr{count}:{tbs_id}"
                tbs_ids.append(tbs_id)
                count += 1
      #Does your device become heated? -> Type Drive Type
    elif x["id"] == 8: 
      first = True
      #get object in filters
      for object in filters:
        #locate Drive Type
        if object["type"] == "Drive Type":
          for option in object["options"]:
            if ("Solid" in option["text"]):
              tbs_id = option["tbs"][option["tbs"].rindex(':')+1:]
              if tbs_id not in tbs_ids:
                  if first == True: #check if first of type
                    x["query_id"] = f"pdtr{count}:{tbs_id}"
                    tbs_ids.append(tbs_id)
                    count += 1
                    first = False
                  else:
                    tbs_id = tbs_id[tbs_id.rindex('C')+1:]
                    x["query_id"] += f"!{tbs_id}"
    
    #Do you stream gameplay -> Type Refresh Rate, Resolution, Graphics Processor, Battery Life, Installed Memory
    elif x["id"] == 9: 
			#get object in filters
      for object in filters:
        #locate Refresh Rate
        if object["type"] == "Refresh Rate":
          first = True
          if x["query_id"] != "":
            x["query_id"] += ','
          for option in object["options"]:
            if ("300" in option["text"]) or ("144" in option["text"]):
              tbs_id = option["tbs"][option["tbs"].rindex(':')+1:]
              if tbs_id not in tbs_ids:
                  if first == True: #check if first of type
                    x["query_id"] = f"pdtr{count}:{tbs_id}"
                    tbs_ids.append(tbs_id)
                    count += 1
                    first = False
                  else:
                    tbs_id = tbs_id[tbs_id.rindex('C')+1:]
                    x["query_id"] += f"!{tbs_id}"
            print("test")
        print("outside")
        #locate Resolution
        if object["type"] == "Resolution":
          print("res")
          first = True
          if x["query_id"] != "":
            x["query_id"] += ','
          for option in object["options"]:
            if ("3840" in option["text"]) or ("1920" in option["text"]):
              tbs_id = option["tbs"][option["tbs"].rindex(':')+1:]
              if tbs_id not in tbs_ids:
                if first == True: #check if first of type
                    x["query_id"] = f"pdtr{count}:{tbs_id}"
                    tbs_ids.append(tbs_id)
                    count += 1
                    first = False
                else:
                  tbs_id = tbs_id[tbs_id.rindex('C')+1:]
                  x["query_id"] += f"!{tbs_id}"
        #locate Graphics Processor
        if object["type"] == "Graphics Processor":
          first = True
          if x["query_id"] != "":
            x["query_id"] += ','
          for option in object["options"]:
            if ("NVIDIA" in option["text"]) or ("AMD" in option["text"]):
              tbs_id = option["tbs"][option["tbs"].rindex(':')+1:]
              if tbs_id not in tbs_ids:
                if first == True: #check if first of type
                    x["query_id"] = f"pdtr{count}:{tbs_id}"
                    tbs_ids.append(tbs_id)
                    count += 1
                    first = False
                else:
                  tbs_id = tbs_id[tbs_id.rindex('C')+1:]
                  x["query_id"] += f"!{tbs_id}" 
        #locate Installed Memory
        if object["type"] == "Max Supported RAM":
          for option in object["options"]: 
            if ("32 GB Supported" in option["text"]):
              tbs_id = option["tbs"][option["tbs"].rindex(':')+1:]
              if tbs_id not in tbs_ids:
                if x["query_id"] != "":
                  x["query_id"] += ','
                x["query_id"] += f"pdtr{count}:{tbs_id}"
                tbs_ids.append(tbs_id)
                count += 1
        
            #Do you use an external mouse, headset or keyboard? -> Type Available Ports
    elif x["id"] == 10: 
			#get object in filters
      for object in filters:
        #locate Available Ports
        if object["type"] == "Available Ports":
          first = True
          if x["query_id"] != "":
            x["query_id"] += ','
            for option in object["options"]:
              if ("HDMI" in option["text"]) or ("USB" in option["text"]) or ("Jack" in option["text"]):
                tbs_id = option["tbs"][option["tbs"].rindex(':')+1:]
                if tbs_id not in tbs_ids:
                  if first == True: #check if first of type
                      x["query_id"] = f"pdtr{count}:{tbs_id}"
                      tbs_ids.append(tbs_id)
                      count += 1
                      first = False
                  else:
                    tbs_id = tbs_id[tbs_id.rindex('C')+1:]
                    x["query_id"] += f"!{tbs_id}" 



    filters_json.append(x)

  print("filters", filters_json)
  print("query count", count)

  final_tbs_array = []
  for object in filters_json:
    if object["query_id"] != "":
      final_tbs_array.append(object["query_id"])



    
  result_state = False
  while result_state == False:

    final_tbs_arr = [str(element) for element in final_tbs_array]
    final_tbs_str = ",".join(final_tbs_arr)
    print("tbs first", final_tbs_str)

    #Query based on api documentation 
    params = {
    "q": "laptop",
    "tbm": "shop",
    "tbs": f"mr:1,{final_tbs_str}",
    "hl": "en",
    "gl": "us",
    #api gateway to protect key
    "api_key": "20af5a88173bef719901ac442b076d9fddc9d797bad5d808c2f0beddc10780da"
    }

    search = GoogleSearch(params)
    results = search.get_dict()
    results2 = json.dumps(results, indent = 4) 
    with open('json_data2.json', 'w') as outfile:
      outfile.write(results2)

    if results["search_information"]["shopping_results_state"] != "Fully empty":
      shopping_results = results['shopping_results']
      result_state = True
    if result_state == False:
      final_tbs_array.pop(-1)
  
  print("final_query", final_tbs_str)


  # print("shopping", shopping_results)
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