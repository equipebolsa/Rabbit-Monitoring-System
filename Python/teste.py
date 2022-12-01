test_list = [{"id" : 1, "data" : "HappY"},
             {"id" : 2, "data" : "BirthDaY"},
             {"id" : 3, "data" : "Rash"}]
  
# printing original list 
print ("The original list is : " + str(test_list))
  
# using del + loop 
# to delete dictionary in list
for i in range(len(test_list)):
    if test_list[i]['id'] == 2:
        del test_list[i]
        break
  
# printing result
print ("List after deletion of dictionary : " +  str(test_list))