import express from 'express';
import fs from 'fs'

const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send('/ has been accessed');
    res.setHeader('Access-Control-Allow-Origin', '*');
});
export interface BlogPostModel {
    id: number,
    title: string,
    text: string
}

const posts: BlogPostModel[] = [
    {
        id: 7,
        title: "New type of cheese invented",
        text: "This cheese is the cheesiest of all cheeses"
    },
    {
        id: 1,
        title: "Dogs can't look up",
        text: "A little known fact about dogs is that it is impossible for them to look up"
    },
    {
        id: 2,
        title: "POST 2",
        text: "123 531411212 asbhdashidha sidjiasj dasjd jasd uancxucnoansfuhasdnasnduansdnasudnasnduasd"

    },
    {
        id: 3,
        title: "POST 3 ",
        text: "thaihisahdishaid asi diasd iashdiash diashdihaid haidh aisd haisdhias hdias hdiashdihasidh asid isadhia shdiashdi ahsidha isdh "
    },    
    {
        id: 4,
        title: "POST 4 ",
        text: "thaihisahdishaid asi diasd iashdiash diashdihaid haidh aisd haisdhias hdias hdiashdihasidh asid isadhia shdiashdi ahsidha isdh "
    },    
    {
        id: 5,
        title: "POST 4 ",
        text: "thaihisahdishaid asi diasd iashdiash diashdihaid haidh aisd haisdhias hdias hdiashdihasidh asid isadhia shdiashdi ahsidha isdh "
    },    
    {
        id: 6,
        title: "POST 4 ",
        text: "thaihisahdishaid asi diasd iashdiash diashdihaid haidh aisd haisdhias hdias hdiashdihasidh asid isadhia shdiashdi ahsidha isdh "
    }
];

app.get('/posts/', (req, res) => {

    const allPosts = posts;

    res.setHeader('Access-Control-Allow-Origin', '*');

    console.log(posts)

    res.send(allPosts);
})

app.get('/posts/:id', (req, res) => {
    const parsedId = parseInt(req.params.id);
    const matchingPost = posts.find(post => post.id === parsedId);

    res.setHeader('Access-Control-Allow-Origin', '*');
    if (matchingPost === undefined) {
        res.sendStatus(404);
        return;
    }

    res.send(matchingPost);
})

// app.get('/users', function(req, res){
//     var name = "hi there";
//     var age = 24;

//     var person = {
//         name: name,
//         age: age
//     };

//     savePersonToUsersFolder(person, function(err){
//         if(err){
//             res.status(404).send('User not saved');
//             return;
//         }
//         res.send('User saved')
//     });

//     loadPerson(person, function(err){
//         if(err){          
//             res.status(404).send('User not loaded');
//             return;
//         }
//         res.send(person.name);
//     });
// })

// function savePersonToUsersFolder(person, callback){
//     fs.writeFile('./users/person.json', JSON.stringify(person),callback);
// }

// function loadPerson(person, callback){
//     fs.open('./users/person.json', 'as', callback);
// }


app.listen(port, err => {
    if (err) {
        return console.log(err);
    }
    return console.log(`server is listening on ${port}`)
})
