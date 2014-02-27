#!/usr/bin/env python

import os
import sys


def main(argv):

	for arg in argv:
		print arg

	
# Execute if running this file directly
# If this file is imported, this will NOT execute
if __name__ == "__main__":
	
	# pass arguments 1-n, argument 0 is the name
	# of the executing script
	main(sys.argv[1:])
	
	print "Executing %s" % sys.argv[0]