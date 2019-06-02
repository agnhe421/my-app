import { Post } from './post'

export const POSTS: Post[] = [
    { id: 1, x: '1', y: '2', z: '3', correctAlternative: 'y', header: 'First question', text: 'What does one plus one equal?' },
    { id: 2, x: 'very long answer to question', y: 'answer2', z: 'answer3', correctAlternative: 'x', header: 'Lorem ipsum dolor sit amet', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' },
    { id: 3, x: 'answer1', y: 'answer2', z: 'answer3', correctAlternative: 'x', header: 'Lorem ipsum dolor sit amet', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' }
  ];


  //Add options to show on buttons