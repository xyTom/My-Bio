# my-bio

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Web Page Content Config

Edit `src/config.vue`

The file exports an object that contains configuration of the Web Page. You can modify the config file to setup your personal portfolio website using this project.

#### Properties
AvatarUrl: A URL for your avatar image.

Name: Your full name that wants to show in the website.

ShortBio: A short description of your interests and skills.

About: A brief introduction yourself and a list of your interests and skills.

DisplayProjectCard: A boolean value indicating whether to display project cards.

ProjectInfo: An array of objects containing information about your projects. 

Each object has the following properties:

id: A unique identifier for the project.

ProjectImg: An array of URLs for images related to the project.

ProjectDes: A brief description of the project.

ProjectDate: The date the project was completed or released.

ProjectLink: A URL for more information about the project.

#### Project Cards
If DisplayProjectCard is set to true, the website will display a set of project cards, each with an image, description, date, and link to more information. The project cards are generated from the ProjectInfo array.
