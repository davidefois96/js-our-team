const container=document.querySelector('.container');

const persons= [

  
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg'

  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg'

  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg'

  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg'

  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg'

  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer	',
    image: 'barbara-ramos-graphic-designer.jpg'

  }

 

]

persons.forEach(element => {

  
  container.innerHTML+=
  `
  <div class="card-body text-center p-2 ">
  
   <img src="../IMG/${element.image}"" alt="${element.name} ">

   <div class="bg-secondary">

    <h4 class="card-title pt-2 ">${element.name} </h4>
  
     <p class="card-text pb-2 ">${element.role} </p>

   </div>
   
  </div>
`
  
  
});