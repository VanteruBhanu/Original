function SplitBill(){
    const billAmount = document.getElementById('billAmount').value;
    const noOfpersons = document.getElementById('noOfpersons').value;
    const billsplitup = document.getElementById('billsplitup');
    const cgst=document.getElementById('cgst');
    const sgst=document.getElementById('sgst');
    const discount=document.getElementById('discount').checked;
    const output = billAmount / noOfpersons;
    if(discount){
        const discountonBill=billAmount-(billAmount*0.05);
        const individualAmount=discountonBill/noOfpersons;
        billsplitup.value=Math.round(individualAmount);
        cgst.innerHTML='CGST:${discountonBill*0.09}';
        sgst.innerHTML='SGST:${discountonBill*0.09}';
    }
    else if(billAmount === "" || noOfpersons === ""){
        alert('Bill Amount and Number of people cannot be empty');
    }
    else if(isNaN(billAmount) || isNaN(noOfpersons)) {
        alert('Enter Valid Bill Amount and Number of People');
    }
    else if(billAmount <= 0){
        alert('Bill Amount cannot be negative');
        document.getElementById('billAmount').value = '';
        document.getElementById('noOfpersons').value = '';
    }
    else if(noOfpersons <= 1){
        alert('Number of people should be greater than 1');
        document.getElementById('billAmount').value = '';
        document.getElementById('noOfpersons').value = '';
    }
    else if(billAmount>0 && billAmount<100){
        cgst.innerHTML='CGST:No Tax';
        sgst.innerHTML='SGST:No Tax';
        billsplitup.value = Math.rouund(output);
    }
    else if(billAmount>100){
        cgst.innerHTML='CGST:${billAmount*0.09}';
        sgst.innerHTML='SGST:${billAmount*0.09}';
        billsplitup.value =Math.round(output);
    }
    else {
        billsplitup.value = Math.round(output);
      }
}