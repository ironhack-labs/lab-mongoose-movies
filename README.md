![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# Mongoose Movies


## Introduction
Everyone likes celebrities, right? Well, even if you don't, now is your chance to create your own, better, fictional celebrities!
Let's create an Express app with all the basic CRUD actions that will allow the user to create their own celebrities and edit them as they see fit.

The user should be able to:

**1. See the list of celebrities**\
**2. See the details of a celebrity**\
**3. Add new celebrities**\
**4. Update existing celebrities**\
**5. Delete celebrities**

But wait! That's not all!

Once we have our celebrities, we need something for them to do!
Let's make up some movie ideas for our celebrities to star in.  
That means we'll need all the basic CRUD actions for movies as well.  

The user should be able to:

**6. See the list of movies.**\
**7. See the details of a movie.**\
**8. Add new movies.**\
**9. Update existing movies.**\
**10. Delete movies.**\


## Requirements

- Fork this repo
- Clone this repo


## Submission

- Upon completion, run the following commands:

```
$ git add .
$ git commit -m "done"
$ git push origin master
```
- Create Pull Request so your TAs can check up your work.


## Instructions

### Iteration 0 | Initialize the project

After forking and cloning the project, you will have to add a `starter_code/.env` file:

```
PORT=3000
```

And you have to install all the dependencies:


```sh
$ cd starter_code
$ npm install
```

Now you are ready to start 🚀


## Iteration #1: The `Celebrity` Model

Once we have generated our Express app, our first step is to create the `Celebrity` model and seed some initial celebrities in our database.

The `Celebrity` model should have:
- `name` - String (like _Tom Cruise, Beyonce, Daffy Duck,_ etc.)
- `occupation` - String (what the celebrity does, why they are famous.  For example _actor, singer, comedian_, or you can put _unknown_ if your celebrity is someone like Kim Kardashian)
- `catchPhrase` - String (every celebrity needs a good catch phrase.  Well maybe not all of them have one in real life, but all of _our_ celebrities will have a catch phrase.  This can be pretty much anything)


### Steps we will follow in this iteration:

1. Create the `celebrity.js` model file in the `models/` folder.
2. In the `celebrity.js` model file:
    - Create the `Celebrity` model with the schema.
    - Create the celebrity schema with `name`, `occupation` and `catchPhrase`.
    - Export the `Celebrity` model.
3. Create the `seeds.js` file in the `bin/` folder.
4. In `seeds.js` file:
    - Create an array of 3 objects, each with `name`, `occupation` and `catchPhrase` for our initial celebrities.
    - Call the `Celebrity` model's `create` method with the array as argument.
    - In the `create` method's callback, display feedback.
5. Run the seed file with `node` to seed your database.
6. Check the database with the `mongo` command to confirm that your data was saved.


## Iteration #2: Listing Our Celebrities

Now that we've got some celebrities in the database, we can start working with them in our Express app. Let's **display a list of all the celebrities**.

Here's the route we will be using:

|   Route   | HTTP Verb |   Description   |
|-----------|-----------|-----------------|
| `/celebrities` |    GET    | Show all celebrities |

### Steps we will follow in this iteration:

1. Locate the `/celebrities` GET route in `routes/celebrities.js`.
2. In the route callback:
    - Call the `Celebrity` model's `find` method to retrieve all the celebrities.
    - If there's an error, call the route's `next` function and return the error.
    - If there isn't an error, render the `celebrities/index` view.
    - Pass the array of celebrities into the view as a variable.
3. Create the `celebrities/` folder inside `views/`.
4. Create the `index.hbs` view file inside the `views/celebrities/` folder.
5. In the `views/celebrities/index.hbs` view file:
    - Add an `<h2>` tag for the page's heading.
    - Use a `forEach` loop to display tags with each celebrity's `name`.
6. In the `views/index.hbs` (homepage) file:
    - Add a link that goes to the `/celebrities` route.


## Iteration #3: The Celebrity Details Page

We've got a list of celebrities that displays each of their `name`, but what if we want to see the other details? In our `views/celebrities/index.hbs` view with our list of celebrities, let's add links so that the user can click on any celebrity's name, and go to a page specifically for that celebrity.  On this page, we will show all the details of that celebrity.

Here's the route we will be using:

|     Route     | HTTP Verb |      Description      |
|---------------|-----------|-----------------------|
| `/celebrities/:id` |    GET    | Show a specific celebrity |


### Steps we will follow in this iteration:

1. Create the `/celebrities/:id` GET route in `routes/celebrities.js`.
2. In the route callback:
    - Call the `Celebrity` model's `findOne` or `findById` method to retrieve the details of a specific celebrity by its id.
    - If there's an error, call the route's `next` function and return the error.
    - If there isn't an error, render the `celebrities/show` view.
    - Pass the variable with the celebrity's details into the view.
3. Create the `show.hbs` view file inside the `views/celebrities/` folder.
4. In the `views/celebrities/show.hbs` view file:
    - Add an `<h2>` for the page's heading.
    - Display tags with the celebrity's `name`, `occupation` and `catchPhrase`.
6. In the `views/celebrities/index.hbs` view file:
    - As part of the loop that displays each celebrity's name, add a link that goes to the `/celebrities/:id` route with the `:id` replaced by the actual celebrity's id.

## Iteration #4: Adding New Celebrities

Now that we have a list of celebrities, as well as a personalized details page for each celebrity, let's make it so the user can **add new celebrities to the database**

|     Route     | HTTP Verb |          Description          |
|---------------|-----------|-------------------------------|
| `/celebrities/new` |    GET    | Show a form to create a celebrity |
|   `/celebrities`   |   POST    | Send the data from the form to this route to create the celebrity and save to the database  |

### Steps we will follow in this iteration:

1. Locate the `/celebrities/new` GET route in `routes/celebrities.js`:
2. In that route's callback:
  - Render the `celebrities/new` view.
3. Create the `new.hbs` view file inside the `views/celebrities` folder
4. In the `views/celebrities/new.hbs` view file:
   - Add an `<h2>` for the page's heading.
   - Add a `<form>` tag that makes a POST request to `/celebrities`.
   - Add `<input>` tags inside the form so the user can fill in values for each attribute of the celebrity.  Make an input for `name`, `occupation`, and `catchPhrase`
   - Add a `<button>` tag in the form so the user can submit the form once they are done filling it out.
5. Locate the `/celebrities` post route in `routes/celebrities.js`.
6. In that route's callback:
    - Create an object with keys for `name`, `occupation`, and `catchPhrase`.
    - Values for those keys should come from the form (`req.body` is the object full of the values from the form)
    - Create an instance of the `Celebrity` model with the object you made in the previous step
    - Call the `save` method to save the new celebrity to the database
    - If there is an error, render the `celebrities/new` view so the user can try again.
    - If there is no error, redirect to the page with the list of celebrities
7. In the `views/celebrities/index.hbs` view file:
    - Add a link that goes to the page you just created with the form to create a new celebrity.

## Iteration #5: Deleting Celebrities

Now that we have a list of celebrities, a celebrity details page, and a page to create new celebrities, we only have 2 features left to implement: editing celebrities and deleting them.  Since deleting is simpler, let's start with that.

|        Route         | HTTP Verb |       Description       |
|----------------------|-----------|-------------------------|
| `/celebrities/:id/delete` |   POST    | Delete a specific celebrity |

### Steps we will follow in this iteration:

1. In the `views/celebrities/index.hbs` file:
    - As part of the loop, add a `<form>` tag that makes a POST request to `celebrities/:id/delete` where the `:id` is replaced by the actual `id` of each celebrity.
    - Add a `<button>` tag inside the form so that it can be submitted.
2. Create the `/celebrities/:id/delete` POST route in your `routes/celebrities.js` file
3. In that route's callback:
    - Use the `Celebrity` model's `findByIdAndRemove` method to delete the celebrity by its `id`.
    - If there's an error, call the route's `next` function and return the error
    - If there is no error, redirect to the list of celebrities page.  


## Iteration #6 (Bonus): Editing Celebrities

Final piece of our CRUD puzzle: **editing existing celebrities**.

Here are the routes we will be using:

|       Route        | HTTP Verb |          Description          |
|--------------------|-----------|-------------------------------|
| `/celebrities/:id/edit` |    GET    | Show a form to edit a celebrity |
|   `/celebrities/:id`    |   POST    | Send the data from the form to this route to update and save the celebrity from the database         |


### Steps we will follow in this iteration:

1. Create the `/celebrities/:id/edit` GET route in `routes/celebrities.js`.
2. In that route's callback:
    - Call the `Celebrity` model’s `findOne` or `findById` method to retrieve a specific celebrity by its id.
    - If there's an error, call the route's `next` function and return the error.
    - If there isn't an error, render the `celebrities/edit` view.
    - Pass the variable with the celebrity’s details into the view.
3. Create the `edit.hbs` view file inside the `views/celebrities/` folder.
4. In the `views/celebrities/edit.hbs` view file:
    - Add an `<h2>` tag for the page's heading.
    - Add a `<form>` tag that makes a POST request to `/celebrities/:id` with the `:id` replaced by the actual celebrity's id.
    - Add `<input>` tags inside the form for each attirbute of the celebrity.
      - Bonus: When you render the edit form, make sure each of the input fields is pre-filled with the current value of the attribute for that celebrity
    - Add a `<button>` tag inside the form so that the user can submit the form once they are done editing.
5. Locate the `/celebrities/:id` POST route in the `routes/celebrities.js` file.
6. In that route's callback:
    - Create an object with keys for each attribute of a celebrity (celebrity has 3 attributes. What were they again? Look back and review if you forgot.)
    - Values for those keys should come from the form submission (`req.body`).
    - Call the `Celebrity` model’s `update` method and use the celebrity's id to specify which celebrity we are updating. Also, use the object you just created with the updated attributes for the celebrity and pass this object into the `update` method as the second argument.
    - If there is an error retrieving that celebrity, call the route's `next` function and return the error
    - If there is no error, redirect back to the list of celebrities.

## Celebrities - Done!

At this point, we have implemented all the basic CRUD actions for the Celebrity model in our app.  Nice work!

Now that we've done all this good work, it's time to add the Movie model.  After all, what's the point of having all these celebrities if we can't make up fake movies to cast them in?

We are going to create a `Movie` model and implement some CRUD actions for this model as well.  Also, each Movie has a cast where we will have a relation to our Celebrities. 

## Iteration #7: The `Movie` Model
Let's jump right in.

First of all, we'll need to create the `Movie` model.

The `Movie` model should have:
- `title` - String
- `genre` - String
- `plot` - String
- `cast` - Array of Object Id's referencing the Celebrity model

## Iteration #8: Adding a new movie

So far we don't have any movies in our database so let's enable a user to **add new celebrities to the database**

|     Route     | HTTP Verb |      Description              |
|---------------|-----------|-------------------------------|
| `/movies/new` |    GET    | Show a form to create a movie |
| `/movies/`    |    POST   | Send data to create the movie |

Go ahead and create the nececessary routes and views as you did for the celebrities.

## Iteration #9: Adding actors to the movie cast

One thinng is missing at creation of a new movie. We don't add any celebrities to the cast yet. We want a select in the form of the new movie view where we can choose from all of the celebrities that are in our database and add them to the movie.

### Steps we will follow in this iteration:

You'll need to:
  - In the route that renders the view with the form to add a movie get all the celebrities from the database and pass them to the view
  - In the view render a select that shows the list of the celebrities - watch out: it has to be possible to select multiple celebrities
  - In the post route add the cast to the movie model at creating a new movie


## Iteration #10: Listing all Movies

Okay, the next step is to  **displaying a list of all movies in an index view**

Here's the route we will be using:

|     Route     | HTTP Verb |      Description      |
|---------------|-----------|-----------------------|
| `/movies/` |    GET    | Show all celebrities |

### Steps we will follow in this iteration:

Review how you did this for the `Celebrity` model.
  - In the view we want to display the title, genre and plot for every movie
  - We also want to show an unordered list with all the actors playing in the movie
  - to have access in the view to the properties of the celebrities in the cast array you will have to populate them in the route 

### Iteration #11 Editing a movie

Final piece of our CRUD puzzle: **editing existing movies**.

Review how you did this for the `Celebrity` model - it is done exactly the same way for now.

## Iteration #12 (Bonus): Editing the cast of a movie as well

This one is a little bit tricky. You have to pass all the celebrities to the edit view. And make sure that all the actors that are part of the cast are selected. You'll have to create a custom handlebars helper function for that. 

# That's it!

Happy Coding! :heart:
