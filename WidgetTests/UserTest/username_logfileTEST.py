filename = '\\\\wsitd03\c$\\inetpub\\logs\\LogFiles\\W3SVC1\\u_ex191015.log'

def find(substr, infile, outfile):
  with open(infile) as a, open(outfile, 'w') as b:
   for line in a:
    if substr in line:
     b.write(line + '\n')
 
# Example usage:
find('TACOMA\\', filename, 'b.txt')

#TEST 2 Sections
my_file = '\\\\wsitd03\c$\\inetpub\\logs\\LogFiles\\W3SVC1\\u_ex191015.log'
my_string = 'TACOMA\\'
infile = open(my_file,"r")
 
numlines = 0
found = 0
for line in infile:
    numlines += 1
    found += line.count(my_string)
infile.close()
#print ('%s was found %i times in %i lines', %string, %found, %numlines)
print (numlines)
#print (my_string + 'was found' + found + 'in' + numlines + 'lines.')
