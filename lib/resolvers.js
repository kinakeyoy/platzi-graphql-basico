 'use strict'
 const courses = [{
         _id: "anyid",
         title: "Mi Titulo",
         teacher: "Enrique Rojas",
         description: "Any Description",
         topic: "Graphql",
     },
     {
         _id: "anyid",
         title: "Mi Titulo-2",
         teacher: "Enrique Rojas",
         description: "Any Description",
         topic: "Graphql",
     },
     {
         _id: "anyid",
         title: "Mi Tituto-3",
         teacher: "Enrique Rojas",
         description: "Any Description",
         topic: "Graphql",
     },
 ];

 module.exports = {
     Query: {
         getCourses: () => {
             return courses;
         },
         getCourse: (root, args) => {
             const course = courses.filter(courses => courses._id === args.id)
             return courses.pop()
         }
     },
 };