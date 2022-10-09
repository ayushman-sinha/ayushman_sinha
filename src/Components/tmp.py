def month_apart(day1,month1,day2,month2):
    if month1==month2: #same month
        return False
    if month1-month2>1 or month2-month1>1: #more than 1 month apart
        return True
   
    if month1-month2==1: #month1 is greater
        if 30-day1+day2>=30:
            return True
        else:
            return False
    if month2-month1==1: #month2 is greater
        if 30-day2+day1>=30:
            return True
        else:
            return False
    return False
print(month_apart(6,14,9,21))
print(month_apart(4,5,5,15))
print(month_apart(4,15,5,15))
print(month_apart(4,16,5,15))
print(month_apart(6,14,6,8))
print(month_apart(7,7,6,8))
print(month_apart(7,8,6,8))
print(month_apart(10,14,7,15))

    
    