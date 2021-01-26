import {Types} from './types';

export const ADVANTAGES: Types[] = [
    {name: 'normal', weakness:['fighting']},
    {name: 'fire' , weakness:['water', 'ground', 'rock']},
    {name: 'water' , weakness:['electric', 'grass']},
    {name: 'electric' , weakness:['ground']},
    {name: 'grass' , weakness:['fire', 'ice', 'poison', 'flying', 'bug']},
    {name: 'ice' , weakness:['fire', 'fighting', 'rock', 'steel']},
    {name: 'fighting', weakness:['flying', 'psychic', 'fairy']},
    {name: 'poison' , weakness:['psychic', 'ground']},
    {name: 'ground' , weakness:['water', 'grass', 'ice']},
    {name: 'flying' , weakness:['electric', 'ice', 'rock']},
    {name: 'psychic' , weakness:['bug', 'ghost', 'dark']},
    {name: 'bug' , weakness:['fire', 'flying', 'rock']},
    {name: 'rock' , weakness:['water', 'grass', 'fighting', 'ground', 'steel']},
    {name: 'ghost' , weakness:['ghost', 'dark']},
    {name: 'dragon' , weakness:['ice', 'dragon', 'fairy']},
    {name: 'dark' , weakness:['fighting', 'bug', 'fairy']},
    {name: 'steel' , weakness:['fire', 'ground', 'fighting']},
    {name: 'fairy' , weakness:['posion', 'steel']},
]
