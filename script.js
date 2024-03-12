document.getElementById('checkButton').onclick = function() {
    const rawList1 = document.getElementById('input1').value.trim().split('\n');
    const rawList2 = document.getElementById('input2').value.trim().split('\n');
    const list1 = rawList1.map(item => item.split('·')[0].trim());
    const list2 = rawList2.map(item => item.split('·')[0].trim());
    const set1 = new Set(list1);
    const set2 = new Set(list2);
    const duplicates = [...set1].filter(item => set2.has(item)).join('\n');
    const unique1 = [...set1].filter(item => !set2.has(item)).join('\n');
    const unique2 = [...set2].filter(item => !set1.has(item)).join('\n');
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

document.getElementById('copyButton1').addEventListener('click', function() {
    const copyText = document.getElementById('formattedOutput1');
    copyText.select();
    document.execCommand('copy');
    alert('Copied: ' + copyText.value);
});

document.getElementById('copyButton2').addEventListener('click', function() {
    const copyText = document.getElementById('formattedOutput2');
    copyText.select();
    document.execCommand('copy');
    alert('Copied: ' + copyText.value);
});
