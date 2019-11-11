# TechDegree-Project-6

## Static Node.js and Express Site

This is my portfolio website built with Express. It displays a list of projects I have built.

## Technologies Used
---
- [Node.js](https://nodejs.org/en/docs/)
- [Express](https://expressjs.com/)
- [Pug](https://pugjs.org/api/getting-started.html)

## Changes made
---
- background color changed
```css
.portfolio-me{
  padding: 20px;
  background: #0086b3;
  color: #fff;
  box-shadow: none !important;
}
```
- adde box shadow
```css
.thumbnail {
  display: inline-block;
  max-width: 100%;
  margin-bottom: 1rem;
  border: solid 4px #fefefe;
  border-radius: 0;
  box-shadow: 0 0 0 1px rgba(10, 10, 10, 0.2);
  line-height: 0; 
  -webkit-box-shadow: 4px 6px 17px 1px rgba(0,0,0,0.73); 
  box-shadow: 4px 6px 17px 1px rgba(0,0,0,0.73);
}
```
- changed font

```css
h1,h2,h3,h4,h5,p{
  font-family: 'Oswald', sans-serif;
}
```

## Runnig the project
---
1. Clone the project files.
2. Open the project folder in the terminal.
3. Type **npm install** to install the project dependencies.
4. Type **npm start** to start the app.
5. Open web-browser and type **localhost:3000** to view the app.
