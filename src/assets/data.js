import { image1, image2, image3, image4, image6, photo1, photo2, photo3, photo4, photo5, photo6, photo7 } from "./ImagesManager";



export const teamData = [
    { id: 1, name: 'John Doe', role: 'Developer', avatar: photo1 },
    { id: 2, name: 'Jane Smith', role: 'Designer', avatar: photo2 },
    { id: 3, name: 'John Doe', role: 'Manager', avatar: photo3 },
    { id: 4, name: 'Jane Smith', role: 'Tester', avatar: photo4 },
    { id: 5, name: 'John Doe', role: 'Developer', avatar: photo4 },
    { id: 6, name: 'Jane Smith', role: 'Designer', avatar: photo6 },
    { id: 7, name: 'John Doe', role: 'Developer', avatar: photo7 },
];


export const cardsData = [
    
    {
      id: "1",
      title: "Home business advertising ideas",
      listId: "1",
      description: "Successful businesses know the importance of building and maintaining…",
      messages: "76",
      likes: "45",
      attachments:"13",
      image:"",
      team:[],
      status: ["#F8BD1C","#4339F2"]
    },
    {
        id: "2",
        title: "Unmatched toner cartridge quality 20 less than oem price",
        listId: "1",
        description: "Why read motivational sayings? For motivation! You might need a bit, if you can use last year’s list of goals this year because it’s as good as new.",
        messages: "76",
        likes: "32",
        attachments:"66",
        image:image1,
        team:[{ id: 1, name: 'John Doe', role: 'Developer', avatar: photo1 },
        { id: 2, name: 'Jane Smith', role: 'Designer', avatar: photo2 },
        { id: 3, name: 'John Doe', role: 'Manager', avatar: photo3 },],
        status: [ "#FF3838", "#4339F2"]
      },
      {
        id: "3",
        title: "How to look up",
        listId: "1",
        description: "Are you considering buying a compatible inkjet cartridge for your printer?",
        messages: "54",
        likes: "76",
        attachments:"11",
        image:image6,
        team:[
            { id: 5, name: 'John Doe', role: 'Developer', avatar: photo4 },
            { id: 6, name: 'Jane Smith', role: 'Designer', avatar: photo6 },
            { id: 7, name: 'John Doe', role: 'Developer', avatar: photo7 },
        ],
        status: ["#0AAAF4", "#FF3838", "#4339F2"]
      },
      {
        id: "4",
        title: "Old fashioned recipe for preventing allergies and chemical sensitivities",
        listId: "2",
        description: "",
        messages: "34",
        likes: "16",
        attachments:"31",
        image:"",
        team:[
            { id: 5, name: 'John Doe', role: 'Developer', avatar: photo4 },
       ],
       status: ["#1AD698",  "#4339F2"]
      },
      {
        id: "5",
        title: "Home business advertising ideas",
        listId: "2",
        description: "Successful businesses know the importance of building and maintaining good working.",
        messages: "23",
        likes: "12",
        attachments:"43",
        image:"",
        team:[
            { id: 6, name: 'Jane Smith', role: 'Designer', avatar: photo6 },
            { id: 7, name: 'John Doe', role: 'Developer', avatar: photo7 },
       ],
       status: ["#1AD698"]
      },
      {
        id: "6",
        title: "Cosmetic surgery abroad making the right choice",
        listId: "2",
        description: "",
        messages: "54",
        likes: "16",
        attachments:"33",
        image:image2,
        team:[
            { id: 1, name: 'John Doe', role: 'Developer', avatar: photo1 },
        { id: 2, name: 'Jane Smith', role: 'Designer', avatar: photo2 },
        { id: 3, name: 'John Doe', role: 'Manager', avatar: photo3 },
       ],
       status: [ "#0AAAF4", "#FF3838", "#4339F2"]
       },
       {
        id: "7",
        title: "Types of paper in catalog printing",
        listId: "3",
        description: "Branding is no longer simply about visual appeal (or the cherry in the apple pie example, as given in my earlier article).",
        messages: "34",
        likes: "23",
        attachments:"93",
        image:image3,
        team:[
            { id: 1, name: 'John Doe', role: 'Developer', avatar: photo6 },
        { id: 2, name: 'Jane Smith', role: 'Designer', avatar: photo5 },
        { id: 3, name: 'John Doe', role: 'Manager', avatar: photo1 },
       ],
       status:[ "#0AAAF4", ]
       },
       {
        id: "8",
        title: "There is no competition",
        listId: "3",
        description: "This article is floated online with an aim to help you find the best dvd printing solution.",
        messages: "23",
        likes: "23",
        attachments:"44",
        image:"",
        team:[
            { id: 1, name: 'John Doe', role: 'Developer', avatar: photo6 },
        { id: 2, name: 'Jane Smith', role: 'Designer', avatar: photo5 },
        
       ],
       status: ["#1AD698",  "#4339F2"]
       },
       {
        id: "9",
        title: "Linux or windows which is it",
        listId: "4",
        description: "Saving money – is something we would all like.",
        messages: "23",
        likes: "23",
        attachments:"44",
        image:"",
        team:[
            { id: 1, name: 'John Doe', role: 'Developer', avatar: photo6 },
        { id: 2, name: 'Jane Smith', role: 'Designer', avatar: photo5 },
        { id: 1, name: 'John Doe', role: 'Developer', avatar: photo4 },
        { id: 2, name: 'Jane Smith', role: 'Designer', avatar: photo2 },
        { id: 1, name: 'John Doe', role: 'Developer', avatar: photo1 },
        
       ],
       status:["#F8BD1C", "#0AAAF4"]
       },
       {
        id: "10",
        title: "Be single minded",
        listId: "4",
        description: "Create a list with all possible keywords that fit to your product, service or business field.",
        messages: "21",
        likes: "34",
        attachments:"42",
        image:image4,
        team:[
            { id: 1, name: 'John Doe', role: 'Developer', avatar: photo6 },

        { id: 1, name: 'John Doe', role: 'Developer', avatar: photo4 },
        { id: 2, name: 'Jane Smith', role: 'Designer', avatar: photo2 },
            
       ],
       status: [ "#FF3838", "#4339F2","#FF3838",]
       },
       {
        id: "11",
        title: "Linux or windows which is it",
        listId: "4",
        description: "Saving money – is something we would all like.",
        messages: "23",
        likes: "23",
        attachments:"44",
        image:"",
        team:[
            { id: 1, name: 'John Doe', role: 'Developer', avatar: photo6 },
        { id: 2, name: 'Jane Smith', role: 'Designer', avatar: photo5 },
        { id: 1, name: 'John Doe', role: 'Developer', avatar: photo4 },
              
       ],
       status: [ "#0AAAF4", "#FF3838"]
       },
       {
        id: "12",
        title: "Dna the future of nutrition",
        listId: "4",
        description: "Why does anyone want a vasectomy reversal?” This is a question I hear any time I tell someone what I do for a living.",
        messages: "12",
        likes: "33",
        attachments:"66",
        image:"",
        team:[
        
        { id: 2, name: 'Jane Smith', role: 'Designer', avatar: photo1 },
        { id: 1, name: 'John Doe', role: 'Developer', avatar: photo4 },
              
       ],
       status: [ "#4339F2"]
       },
       {
        id: "13",
        title: "At home treatments for beauty on a budget",
        listId: "5",
        description: "The holidays bring with them thoughts of carving and serving delicious turkey dinners to your family and friends. Tradition has its fans, but perhaps this year you’d like to try a twist to your turkey recipe.",
        messages: "87",
        likes: "54",
        attachments:"32",
        image:"",
        team:[             
       ],
       status: ["#1AD698","#4339F2","#1AD698",]
       },
       {
        id: "14",
        title: "Home business advertising ideas",
        listId: "5",
        description: "Successful businesses know the importance of building and maintaining good working.",
        messages: "13",
        likes: "11",
        attachments:"43",
        image:"",
        team:[        
            { id: 2, name: 'Jane Smith', role: 'Designer', avatar: photo2 },
            { id: 1, name: 'John Doe', role: 'Developer', avatar: photo6 },
                       
       ],
       status: [ "#F8BD1C", "#FF3838"]
       },
       {
        id: "15",
        title: "Tips for choosing the perfect gloss for your lips",
        listId: "5",
        description: "With MySpace becoming more popular every day, there is the constant need to be different. There are millions of users.",
        messages: "21",
        likes: "23",
        attachments:"12",
        image:"",
        team:[        
            { id: 2, name: 'Jane Smith', role: 'Designer', avatar: photo2 },
            { id: 1, name: 'John Doe', role: 'Developer', avatar: photo6 },
            { id: 4, name: 'John Doe', role: 'Developer', avatar: photo5 },
                       
       ],
       status:[ "#FF3838", "#4339F2"]
       },
     
   
  
   ];
   

export const Lists=[
    {
        id:"1",
        title:"Design",
        
    },
    {
        id:"2",
        title:"Prototype",
        
    },
    {
        id:"3",
        title:"Trello",
        
    },
    {
        id:"4",
        title:"Test",
        
    },
    {
        id:"5",
        title:"Final",
        
    }
]