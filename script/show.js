//console.log("this is home");


//this is open section
const openData = () => {
      fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
        .then(res => res.json())
        .then(data => {
            const openIssues = data.data.filter(issue => issue.status === "open");
            displayOpen(openIssues);
            issueCount(openIssues); 
        });
};
const displayOpen = (issues) => {

      const openIssues = issues.filter(issue => issue.status === "open");

    console.log(openIssues);
    const container = document.getElementById("open-container");

    container.innerHTML = "";

   openIssues.forEach(issue => {

      


//priority change
let priorityClass = "";

if(issue.priority === "low"){
    priorityClass = "bg-gray-100 text-gray-600";
}
else if(issue.priority === "medium"){
    priorityClass = "bg-yellow-100 text-yellow-600";
}
else{
    priorityClass = "bg-red-100 text-red-600";
}


//image change

let imageSrc = "";

if(issue.status === "open"){
    imageSrc = "./assets/Open-Status.png";
}

//date
const date = new Date(issue.createdAt).toLocaleDateString();

//border selection
let  borderCard="";

if (issue.status === "open") {
   borderCard = "border-t-4 border-green-500"; // green top border
} 


  const card = document.createElement("div");
  card.onclick = () => loadWordDetail(issue.id);
        card.innerHTML = `
        
           <div class="cardFormation h-80 w-64  bg-white px-4 py-4 rounded-md shadow-md ${borderCard}">
        <div class=" flex justify-between ">
            <img src="${imageSrc}" alt="status">
            <button class="${priorityClass} rounded-md px-2 py-1 text-sm"> ${issue.priority}</button>
        </div>

        <div class="space-y-4 mt-2">
            <h2 class="text-xl font-bold line-clamp-1">${issue.title}</h2>
            <p class="text-[#64748B] line-clamp-2">${issue.description}</p>
            <div class="flex justify-between space-y-4 ">
            <button class="bg-[#FECACA] rounded-md px-1 py-1 w-14 h-7 text-[#EF4444]"> Bug</button>
            <button class="bg-[#FFF8DB] rounded-md px-1 py-1 w-28 h-7 text-[#D97706]"> help</button>
        </div>

<div class="space-y-2">
    <p class="text-[#64748B] ">
        #${issue.author}</p>
    <p class="text-[#64748B]" >${date}</p>
</div>
     </div>
     

        `;
       

        container.append(card);
    });
};



/*"id": 1,
"title": "Fix navigation menu on mobile devices",
"description": "The navigation menu doesn't collapse properly on mobile devices. Need to fix the responsive behavior.",
"status": "open",
"labels": [
"bug",
"help wanted"
],
"priority": "high",
"author": "john_doe",
"assignee": "jane_smith",
"createdAt": "2024-01-15T10:30:00Z",
"updatedAt": "2024-01-15T10:30:00Z"

*/
//this is all section
const loadLessons = () => {
    fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
        .then(res => res.json())
        .then(data => {
            displayALL(data.data);      
            issueCount(data.data);     
        });
};
const displayALL = (issues) => {

    const container = document.getElementById("word-container");

    container.innerHTML = "";

    issues.forEach(issue => {

      


//priority change
let priorityClass = "";

if(issue.priority === "low"){
    priorityClass = "bg-gray-100 text-gray-600";
}
else if(issue.priority === "medium"){
    priorityClass = "bg-yellow-100 text-yellow-600";
}
else{
    priorityClass = "bg-red-100 text-red-600";
}


//image change

let imageSrc = "";

if(issue.status === "open"){
    imageSrc = "./assets/Open-Status.png";
}
else{
    imageSrc = "./assets/Closed-Status.png";
}
//date
const date = new Date(issue.createdAt).toLocaleDateString();

//border selection
let  borderCard="";

if (issue.status === "open") {
   borderCard = "border-t-4 border-green-500"; // green top border
} else {
    borderCard = "border-t-4 border-purple-500"; // purple top border
}




  const card = document.createElement("div");
  card.onclick = () => loadWordDetail(issue.id);
        card.innerHTML = `
        
           <div class="cardFormation h-80 w-64  bg-white px-4 py-4 rounded-md shadow-md ${borderCard}">
        <div class=" flex justify-between ">
            <img  src="${imageSrc}" alt="status">
            <button class="${priorityClass} rounded-md px-2 py-1 text-sm"> ${issue.priority}</button>
        </div>

        <div class="space-y-4 mt-2">
            <h2 class="text-xl font-bold line-clamp-1">${issue.title}</h2>
            <p class="text-[#64748B] line-clamp-2">${issue.description}</p>
            <div class="flex justify-between space-y-4 ">
            <button class="bg-[#FECACA] rounded-md px-1 py-1 w-14 h-7 text-[#EF4444]"> Bug</button>
            <button class="bg-[#FFF8DB] rounded-md px-1 py-1 w-28 h-7 text-[#D97706]"> help</button>
        </div>

<div class="space-y-2">
    <p class="text-[#64748B] ">
        #${issue.author}</p>
    <p class="text-[#64748B]" >${date}</p>
</div>
     </div>
     

        `;
       

        container.append(card);
    });
};


//this is closed section

const closeData = () => {
    fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
        .then(res => res.json())
        .then(data => {
            const closeIssues = data.data.filter(issue => issue.status === "closed");
            displayClose(closeIssues);
            issueCount(closeIssues);
        });
};
const displayClose = (issues) => {

      const closeIssues = issues.filter(issue => issue.status === "closed");

    console.log(closeIssues);
    const container = document.getElementById("close-container");

    container.innerHTML = "";

   closeIssues.forEach(issue => {

      


//priority change
let priorityClass = "";

if(issue.priority === "low"){
    priorityClass = "bg-gray-100 text-gray-600";
}
else if(issue.priority === "medium"){
    priorityClass = "bg-yellow-100 text-yellow-600";
}
else{
    priorityClass = "bg-red-100 text-red-600";
}


//image change

let imageSrc = "";

if(issue.status === "closed"){
    imageSrc = "./assets/Closed-Status.png";
}

//date
const date = new Date(issue.createdAt).toLocaleDateString();

//border selection
let  borderCard="";

if (issue.status === "closed") {
   borderCard = "border-t-4 border-purple-500";
} 


  const card = document.createElement("div");
  card.onclick = () => loadWordDetail(issue.id);
        card.innerHTML = `
        
           <div class="cardFormation h-80 w-64  bg-white px-4 py-4 rounded-md shadow-md ${borderCard}">
        <div class=" flex justify-between ">
            <img src="${imageSrc}" alt="status">
            <button class="${priorityClass} rounded-md px-2 py-1 text-sm"> ${issue.priority}</button>
        </div>

        <div class="space-y-4 mt-2">
            <h2 class="text-xl font-bold line-clamp-1">${issue.title}</h2>
            <p class="text-[#64748B] line-clamp-2">${issue.description}</p>
            <div class="flex justify-between space-y-4 ">
            <button class="bg-[#FECACA] rounded-md px-1 py-1 w-14 h-7 text-[#EF4444]"> Bug</button>
            <button class="bg-[#FFF8DB] rounded-md px-1 py-1 w-28 h-7 text-[#D97706]"> help</button>
        </div>

<div class="space-y-2">
    <p class="text-[#64748B] ">
        #${issue.author}</p>
    <p class="text-[#64748B]" >${date}</p>
</div>
     </div>
     

        `;
       

        container.append(card);
    });
};




const loadWordDetail=async(id )=>{
    const url=`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`;
    console.log(url);
    const res= await fetch(url);
    const details= await res.json();
    displayWordDetails(details.data);
};

const displayWordDetails=(issue)=>{

const date = new Date(issue.createdAt).toLocaleDateString();
let statusText = issue.status; 
let statusColor = statusText === "open" ? "bg-[#00A96E]" : "bg-purple-500";
let priorityClass = "";

if(issue.priority === "low"){
    priorityClass = "bg-gray-400 text-white";
}
else if(issue.priority === "medium"){
    priorityClass = "bg-yellow-100 text-yellow-600";
}
else{
    priorityClass = "bg-red-100 text-red-600";
}

const detailsBox= document.getElementById("details-container");

detailsBox.innerHTML=`  <div class="modal-box space-y-4">
      <h2 class="text-xl font-bold">${issue.title}</h2>
       <div class=" flex justify-between text-gray-400">
        <button class="${statusColor} rounded-md px-1 py-1 w-14 h-7 text-white">${statusText}</button>
     
          <li> opened by ${issue.author}</li>
          <li> date:${date} </li>
        
       </div>
  
       <p class="text-[#64748B] line-clamp-2">${issue.description}</p>
            <div class="flex justify-between space-y-4 ">
            <button class="bg-[#FECACA] rounded-md px-1 py-1 w-14 h-7 text-[#EF4444]"> Bug</button>
            <button class="bg-[#FFF8DB] rounded-md px-1 py-1 w-28 h-7 text-[#D97706]"> help</button>
        </div>


        <div class=" flex justify-between gap-4 bg-slate-200">
          <ul>
            <p>Asignee</p>
            <h2 class=" font-bold">${issue.assignee}</h2>
          </ul>

          <ul>
            <p>
              Priority:
            </p>
            <button class="rounded-md px-2 py-1 text-sm ${priorityClass} ">${issue.priority}</button>
</ul>
          </div>
 <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn btn-primary">Close</button>

      </form>
      </div>
    </div>       `;
document.getElementById("my_modal_5").showModal();
}


function showSection(id){

  const sections = ['word-container', 'open-container', 'close-container'];
    sections.forEach(id => document.getElementById(id).classList.add('hidden'));


    document.getElementById(id).classList.remove('hidden');

  
    if( id=== "word-container") 
    loadLessons();
    else if(id === "open-container")
    openData();
    else if(id=== "close-container") 
    closeData();

  
}

const issueCount = (issues) => {
  const count = document.getElementById("issue-count");
  count.textContent = `${issues.length} Issues`;
};