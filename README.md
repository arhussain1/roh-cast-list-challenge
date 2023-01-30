# Cast List Challenge

### What am I doing?/What are my goals?

I aim to create a simple Cast Sheet for a performance, displaying the title, date, short description, creatives and cast members.

#### Technologies

I aim to use React JS to create a single page showing the cast sheet.

- React JS
- HTML
- CSS

### How to install this app?

Step 1:

- Please clone this repo

Step 2:

- navigate into the roh-cast-list-challenge folder and install all necessary dependencies using the following commands:

```
cd roh-cast-list-challenge

npm install
```

### How to run this app?

Step 1:

- Navigate to the roh-cast-list-challenge folder and begin running the React app using the following commands:

```
cd roh-cast-list-challenge

npm start
```

### My approach

This section details my approach to this tech test

#### Stage 1 - Planning

I began by reading the specification and making a quick wireframe of what I needed. After this I visited the api link provided and just tried to understand the shape of the event object.

I struggled to understand how the JSON API specification worked. I did some short research and found an excellent youtube video explaining the basics of the specification. This helped me understand the shape of the object and soon after I found each piece of data needed to begin creating the React App.

I performed some further research and found the live event on the ROH website and noticed that different cast lists were displayed on different dates. From this I added the following requirement:

- For castRoles I would need to find the correct cast for the date provided '10/03/2023' - I detailed my approach for this in the planning.png file

#### Stage 2 - Highlights of what was accomplished

- I managed to create a function to identify the correct cast members for a given day.

- I refactored my logic for the CastSheet into its own seperate function and passed the data as a prop, this allowed me to easily conditionally render the CastSheet component only if data exists. This meant the code inside the CastSheet function can make the assumption that data is guarranteed rather than having to account for the undefined case.

- I created a reusable component to DisplayPeople as I noticed the code to map creatives and castMembers was repetitive. This means there is only one place that a developer needs to modify as opposed to multiple.

#### Stage 3 - If I had time I would:

- Like to know how data like Short Description is handled at ROH as the string is provided with the html tags already assigned. I couldn't find a way to modify the margin that accompanied the p tag and I had to use dangerouslySetInnerHTML in order to display it on the page.
