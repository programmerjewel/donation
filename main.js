
const historySection = document.getElementById('history-section');
const donateSection = document.getElementById('donate-section');
const historyBtn = document.getElementById('history-btn');
const donationBtn = document.getElementById('donate-btn');

function showSections(activeSection, btnActive, btnDeactive){
    //initially hide both of the buttons
    donateSection.classList.add('hidden');
    historySection.classList.add('hidden');

    activeSection.classList.remove('hidden');
    
    //change button properties based on active and deactive
    btnActive.style.backgroundColor = '#B4F461';
    btnActive.style.borderColor = '#B4F461';
    btnDeactive.style.backgroundColor = 'white';
    btnDeactive.style.borderColor = '#E5E7EB';
}

// active donation and history button
donationBtn.addEventListener('click', function(){
    showSections(donateSection, donationBtn, historyBtn);
});

historyBtn.addEventListener('click', function(){
    showSections(historySection, historyBtn, donationBtn);
});


//function about calculate donate amount
function donateCalculate(mainBalanceById, inputValueById, categoryAmountId, header){

    const mainBalance = parseFloat(document.getElementById(mainBalanceById).innerText);
    const inputAmount = parseFloat(document.getElementById(inputValueById).value);
    const categoryAmount = parseFloat(document.getElementById(categoryAmountId).innerText);
    
    //donate-input value validation
    if (inputAmount > mainBalance){
        alert('Your input amount cannot be bigger than the main balance amount');
        return;
    }
    if (isNaN(inputAmount) || inputAmount <= 0 || inputAmount === '' ){
        alert('Please input a valid amount');
        return;
    }

    //calculations for main balance and category amount
    document.getElementById(mainBalanceById).innerText = mainBalance - inputAmount;
    document.getElementById(categoryAmountId).innerText =  categoryAmount + inputAmount;

    //modal integration
    const modal = document.getElementById('my_modal');
    modal.showModal();

    //add history in history section as a function
    addHistory(inputAmount, header);
}

//function fot history section design with innerHTML
function addHistory(amount, header){
    const date = Date();
    const donateDiv = document.createElement('div');
    donateDiv.className = `p-6 border-gray-200 border rounded-xl mb-3`;
    donateDiv.innerHTML = `
        <h3 class="font-semibold text-lg mb-2">${amount} taka donated for ${header}</h3>
        <p class="font-light text-[#111111b2]">${date}</p>
    `;
    //append generated div to history-section
    historySection.appendChild(donateDiv);
}


//add click event to all donate button to calculate donation amount

//calculate total donate amount for noalkahli flood relief
document.getElementById('n-btn').addEventListener('click', function(){
    donateCalculate('main-balance', 'n-input', 'n-amount', 'support Noakhali Flood Relief Efforts, Bangladesh');
});
//calculate total donate amount for feni flood relief
document.getElementById('f-btn').addEventListener('click', function(){
    donateCalculate('main-balance', 'f-input', 'f-amount', 'support Feni Flood Relief Efforts, Bangladesh');
});
//calculate total donate amount for quota movement protest
document.getElementById('q-btn').addEventListener('click', function(){
    donateCalculate('main-balance', 'q-input', 'q-amount', 'aid of Injured in the Quota Movement, Bangladesh');
});

//go to blog.html page
document.getElementById('blog-btn').addEventListener('click', function(){
   window.location.href = './blog.html'; 
})