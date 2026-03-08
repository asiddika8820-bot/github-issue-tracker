console.log("this is open")
const openData = () => {
    fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
        .then(res => res.json())
        .then(data => displayOpen(data.data));
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



