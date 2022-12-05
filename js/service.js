'use strict'

const MONTHs = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

var gProjs = [
    {
    id: 'mine-sweeper',
    name: 'Mine-Sweeper',
    title: 'Try Not To Bomb',
    desc: 'Spot the mines and clear the board', 
    url: 'https://liad7.github.io/mine-sweeper1/',
    publishedAt: new Date(2022,11,1),
    labels: ['Matrixes', 'keyboard events']
},
{
    id: 'touch-nums',
    name: 'Touch-Nums',
    title: 'Beat The Clock',
    desc: 'Click the numbers in order in fastest time possible', 
    url: 'https://liad7.github.io/Touch-Nums/',
    publishedAt: new Date(2022,10,20),
    labels: ['Matrixes']
},
{
    id: 'in-picture',
    name: 'In-Picture',
    title: 'Fun Actors Quiz',
    desc: 'Answer correctly who\'s the actor in the picture', 
    url: 'https://liad7.github.io/In-Picture/',
    publishedAt: new Date(2022,10,21),
    labels: []
},
{
    id: 'chess',
    name: 'Chess',
    title: 'Kings\' Game',
    desc: 'Classic chess game, play against the computer', 
    url: ' https://liad7.github.io/Chess/',
    publishedAt: new Date(2022,10,22),
    labels: ['Matrixes']
},
{
    id: 'ball-game',
    name: 'Ball-Game',
    title: 'Collects The Balls',
    desc: 'Get all the balls on the board, mind the glue', 
    url: 'https://liad7.github.io/Ball-Game/',
    publishedAt: new Date(2022,10,22),
    labels: ['Matrixes', 'keyboard events']
},
{
    id: 'pacman',
    name: 'Pacman',
    title: 'Mind The Ghosts',
    desc: 'Get the feeling of real arcade', 
    url: 'https://liad7.github.io/Pacman/',
    publishedAt: new Date(2022,10,23),
    labels: ['Matrixes', 'keyboard events']
},
]

function getProjs(){
    return gProjs
}

function getMonthName(idx){
    return MONTHs[idx]
}

function getDispalyDate(now){
    var d = new Date(now)
    var month = getMonthName(d.getMonth())
    var year = d.getFullYear()
    return month + ' ' + year
}

function getProjById(id){
    return gProjs.find(proj => proj.id === id)
}

