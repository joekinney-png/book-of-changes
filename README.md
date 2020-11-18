# book-of-changes
consult the oracle digitally without having to cast physical stalks or to flip coins; save you questions and the responses

the I Ching is an ancient chinese divination text

to consult the I Ching one typically would toss yarrow stalks or flip coins; this is done to generate the present hexagram (of which there are 64 potential results); if any of the six lines of the present hexagram are changing line the individual who consults the book is also presented with a future hexagram (also derived from the 64 possible hexagrams)

the I Ching is a long-loved (has been used and refined over 4,000 years) tool of self-examination and decision making; part of the joy of the book is that the divination ritual requires and time and focus, but sometimes an individual might wish to ask a question quickly or while on the go; additionally, a questioner might wish to consult the I Ching at a time when they do not have yarrow stalks or coins handy to consult the oracle or when they do not have pen and paper handy to record and meditate on the result

this open source book-of-changes application allows registered users to quickly and easily pose a question and instantaneously randomly generate the present and future hexagram responses; the application logs prior divinations and includes space to record notes or additional thought about the divination; additionally, the application allows includes links to further information about the hexagrams themselves, a pleasant user interface and user experience and the ability to star / highlight divinations that hold particular significance

core features:
 - webpack
 - react frontend user interface
 - node / express server to serve requests from the client and query the database
 - SQL database storage
 
stretch goals:
 - autogenerate the hexagram that you want
 - algorithms to generate hexagrams (yarrow algorithm)
 - link to the actual hexagram images --> this could require additional tables in the database
 - scrape a website to get the text that is associated with the hexagram
 - add a picture of the I Ching hexagrams to the middle of the page
 - find api online that you can use to pull relevant information
 - update the text to be a cool font using google fonts

 extra stretch goals:
 - cookies/session authentication
 - enhanced UI and styling
 - OAuth authorization
 - chrome extension for quick reading w/o storage
 - incorporate advanced data structures
 - implement react router to dynamically render to different react routes
 - add update functionality to sql databases and front end

//

completed

1. first draft of README
2. created build, client, server and docs files
3. basic serve which serves an index.html page to the local port
4. set up ESLint and Prettier, installed React, React DOM
5. create and configure webpack file, download babel
6. downloaded postgresql, configured SQL and added first table to record readings
7. set up stylesheets with webpack, connected to React and HTML
8. set up functionality to send a post request to add new readings to the server (body-parser)
9. include ability to get data from the database by clicking button on front end
10. set up react functionality in a single file to print the log of past readings
11. modularized my react code to generate the sections with past readings
12. implemented the ability to delete and refresh the UI upon deleting
13. made improvements to the UI, especially with respect to the historical log
14. 

//

SQL queries

CREATE TABLE Reading (_id INT NOT NULL UNIQUE, FirstName VARCHAR(20), LastName VARCHAR(40), Question TEXT, Starred INT, Toss INT, Notes TEXT)

INSERT INTO Reading (_id, FirstName, LastName, Question, Starred, Toss, Notes) VALUES ('1', 'Winston', 'LaMoine', 'What is the energetic outcome of building a digital version of the I Ching?', '1', '678978', 'tbd')

SELECT * FROM reading

DROP TABLE Reading

DELETE FROM reading WHERE _id=${id}