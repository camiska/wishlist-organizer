document.getElementById('checkButton').onclick = function() {
    const list1 = document.getElementById('input1').value.trim().split('\n');
    const list2 = document.getElementById('input2').value.trim().split('\n');

    const set1 = new Set(list1);
    const set2 = new Set(list2);

    const duplicates = list1.filter(item => set2.has(item)).join('\n');
    const unique1 = list1.filter(item => !set2.has(item)).join('\n');
    const unique2 = list2.filter(item => !set1.has(item)).join('\n');

    document.getElementById('output1').value = duplicates;
    document.getElementById('output2').value = unique1;
    document.getElementById('output3').value = unique2;

    
};

document.getElementById('showButton1').onclick = function() {
    const list = document.getElementById('output2').value.trim().split('\n');
    const count = parseInt(document.getElementById('countInput1').value) || 0;
    const formattedList = list.slice(0, count).join(' $ ');
    document.getElementById('formattedOutput1').value = formattedList;
};

document.getElementById('showButton2').onclick = function() {
    const list = document.getElementById('output3').value.trim().split('\n');
    const count = parseInt(document.getElementById('countInput2').value) || 0;
    const formattedList = list.slice(0, count).join(' $ ');
    document.getElementById('formattedOutput2').value = formattedList;
};
