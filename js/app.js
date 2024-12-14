let totalIncome = Number(prompt('لطفا مجموع درآمد خود را وارد کنید'));
let left = document.querySelector('#left')

if(totalIncome !== ''){
    document.querySelector('#total').textContent = totalIncome;
    left.textContent = totalIncome;
}else{
    while(totalIncome == ''){
        totalIncome = prompt('لظفا مجموع درآمد خود را وارد کنید');
        if(totalIncome !== ''){
            document.querySelector('#total').textContent = totalIncome;
            left.textContent = totalIncome
        }
    }
}

const btn = document.querySelector('.btn-primary');
btn.addEventListener('click',(e)=>{
    e.preventDefault();
    let expense = document.querySelector('#expense').value;
    let amount = document.querySelector('#amount').value;
    let numberAmount = Number(amount);
    let leftNumber = Number(left.textContent);
    if(expense == '' || amount == ''){
        alert('تمامی فیلدها را پر کنید');
    }else{
        const ul = document.querySelector('.list-group');
        const li = document.createElement('li');
        const span = document.createElement('span');
        const span2 = document.createElement('span');
        span.textContent = expense;
        span2.textContent = amount;
        li.appendChild(span);
        li.appendChild(span2);
        ul.appendChild(li);
        left.textContent = leftNumber - numberAmount;
        expense = '';
        amount = '';
    }
  
   
})
































