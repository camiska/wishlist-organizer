document.getElementById('checkButton').onclick = function() {
    // Split the inputs by new lines and then split each line by '·', taking the part before '·'.
    const list1 = document.getElementById('input1').value.trim().split('\n').map(item => item.split('·')[0].trim());
    const list2 = document.getElementById('input2').value.trim().split('\n').map(item => item.split('·')[0].trim());

    // Convert arrays to sets to remove duplicates.
    const set1 = new Set(list1);
    const set2 = new Set(list2);

    // Filter the lists to find duplicates and unique items, then join them back into strings for display.
    const duplicates = [...set1].filter(item => set2.has(item)).join('\n');
    const unique1 = [...set1].filter(item => !set2.has(item)).join('\n');
    const unique2 = [...set2].filter(item => !set1.has(item)).join('\n');

    // Update the output fields with the processed results.
    document.getElementById('output1').value = duplicates;
    document.getElementById('output2').value = unique1;
    document.getElementById('output3').value = unique2;
};

document.getElementById('showButton1').onclick = function() {
    // Get the unique items for list 1, split them, get the specified count, join with '$'.
    const list = document.getElementById('output2').value.trim().split('\n');
    const count = parseInt(document.getElementById('countInput1').value) || 0;
    const formattedList = list.slice(0, count).join(' $ ');
    document.getElementById('formattedOutput1').value = formattedList;
};

document.getElementById('showButton2').onclick = function() {
    // Get the unique items for list 2, split them, get the specified count, join with '$'.
    const list = document.getElementById('output3').value.trim().split('\n');
    const count = parseInt(document.getElementById('countInput2').value) || 0;
    const formattedList = list.slice(0, count).join(' $ ');
    document.getElementById('formattedOutput2').value = formattedList;
};
