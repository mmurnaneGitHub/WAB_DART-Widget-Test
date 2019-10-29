import re

#with open('\\\\wsitd03\c$\\inetpub\\logs\\LogFiles\\W3SVC1\\u_ex191015.log') as f:
    #if 'TACOMA\\mmurnane' in f.read():
        #print("true")

#test
#abc = 'guru99@google.com, careerguru99@hotmail.com, users@yahoomail.com'
#emails = re.findall(r'[\w\.-]+@[\w\.-]+', abc)
#for email in emails:
    #print(email)        
        

#with open('\\\\wsitd03\c$\\inetpub\\logs\\LogFiles\\W3SVC1\\u_ex191015.log') as f:
    #if 'TACOMA\\mmurnane' in f.read():
        #print("true")

#test 2
#pattern = re.compile("<(\d{4,5})>")
pattern = re.compile(r'([\w\.-]+)TACOMA([\w\.-]+)')

for i, line in enumerate(open('\\\\wsitd03\c$\\inetpub\\logs\\LogFiles\\W3SVC1\\u_ex191015.log')):
    for match in re.finditer(pattern, line):
        print  (line)

#test 3
# -*- coding: utf-8 -*-
#import re
#import io
 
#with io.open('\\\\wsitd03\c$\\inetpub\\logs\\LogFiles\\W3SVC1\\u_ex191015.log', encoding='utf-8') as f:
    #for line in f:
        #line = line.strip()
        #if re.match(r"TACOMA", line):
            #print(line)    
