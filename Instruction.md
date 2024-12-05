# Recipe management

## Running the Server
##### Start the server on PORT 9090. Ensure strict adherence to this port number.

## Project Overview

##### You are tasked with building an API for a E-Library Management. The project should include the following features.
- Register And Login With JWT use and cooike set.
- CURD Operation performance For Recipe.

## Project Link.
- [This Project Github Link](https://github.com/jeelnarola/RecipeManagement.git)
- Live Link :- https://recipemanagement-eutn.onrender.com
## Follow these instructions strictly.

### Implement in MVC Structure.
#### Database Connection.
1. Create a 'configs' folder. Inside this folder, create a file named 'Database.js'. Write logic to connect to MongoDB using an online database such as MongoDB Atlas.

#### Database Schema Design.
2. Create a 'models' folder.
    - create a file named 'auth.models.js' with the following schema.
```
username,
email,
password
```
3. create a file named 'recipes.models.js' with the following schema.
```
title,
ingredients,
instructions,
cuisineType,
author:{
    type:mongoose.Schema.Types.ObjectId, ref:'User', required: true // Your User Schema Id.
}
```

## Sign Up and Login.
### POST route - Sign Up
- Endpoint: Create a POST route at ```/api/auth/register```.
- JWT authentication Use.
- After a successful Sign, set cookies in the browser with the user's Token.
- Within the form, provide the following input fields with corresponding IDs:
    - username
    - password
    - email

### POST route - Login.
- Create a POST route named  ```/api/auth/login```.
- JWT authentication Use.
- Within the form, provide the following input fields with corresponding IDs:
    - email
    - password
- After a successful login, set cookies in the browser with the user's Token.

### POST route - LogOut.
- Create a POST route named  ```/api/auth/logout```.
- All Clear Cookies.

## Recipe management API EndPoint.

### GET route :- All Recipe Show.
- Create a GET route at ```/api/recipe/show```.

### GET route :- single Recipe Show.
- Create a GET route at ```/api/recipe/single/:id```.

### POST route :- Create Recipe.
- Create a Post route at ```/api/recipe/add```.
- send a response containing all available event.
- Middleware Use And Check Login || Signup True to Create A Books And False to res message Unauthorize.

### PATCH route :- Update Recipe.
- Create a Patch route at ```/api/book/update/:id```.
- send a response containing all available Recipe.
- Middleware Use And Check Login || Signup Required True to Update A Recipe And False to res message Unauthorized
- Only Update Your Recipe.

### DELETE route :- DELETE Recipe.
- Create a Delete route at ```/api/book/delete/:id```.
- send a response containing all available Recipe.
- Middleware Use And Check Login || Signup Required True to Delete A Recipe And False to res message Unauthorized
- Only Delete Your Recipe.

## Routes

### User || Auth.

| Method   | EndPoint | Description |
|----------|----------|----------|
| ```POST```    | ```/api/auth/register```   | User Register.   |
| ```POST```    | ```/api/auth/login```   | User Login.   |
| ```POST```    | ```/api/auth/logout```   | User LogOut.   |

### Recipe.

| Method   | EndPoint | Description |
|----------|----------|----------|
| ```GET```    | ```/api/recipe/show```   | Recipe Fetch all items.   |
| ```GET```    | ```/api/recipe/single/:id```   | sinle Recipe Data With Id.   |
| ```POST```    | ```/api/recipe/add```   | Recipe Create .   |
| ```PATCH```    | ```/api/book/update/:id```   | Recipe Update With Id.   |
| ```DELETE```    | ```/api/book/delete/:id```   | Recipe Delete With Id.   |

### Steps:
1. Clone the repository.
```bash
 git clone <repository-url>
```
2. Install dependencies:

``` bash
npm install
```
3. Create a .env file and add your MongoDB connection string:
``` bash
PORT=9090
MONGODB_URL=mongodb+srv://RecipeManagement:RecipeManagement@cluster0.dgwjmgh.mongodb.net/RecipeManagement?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=my_project_Elibray_jwt_SECRET
```

4. Start the server:
``` bash
npm start
```
