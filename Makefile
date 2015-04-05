grunt:
	grunt --gruntfile Gruntfile0.js build
	grunt --gruntfile Gruntfile1.js build
serve:
	http-server build/ -p 4000
