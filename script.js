document.getElementById('checkButton').onclick = function() {
    // Prepare and clean the input lists, removing text after '·' and trimming whitespace.
    const rawList1 = document.getElementById('input1').value.trim().split('\n');
    const rawList2 = document.getElementById('input2').value.trim().split('\n');
    
    // Map through each list and trim everything after '·'.
    const list1 = rawList1.map(item => item.split('·')[0].trim());
    const list2 = rawList2.map(item => item.split('·')[0].trim());

    // Create sets for unique checks.
    const set1 = new Set(list1);
    const set2 = new Set(list2);

    // Determine duplicates and unique entries.
    const duplicates = [...set1].filter(item => set2.has(item)).join('\n');
    const unique1 = [...set1].filter(item => !set2.has(item)).join('\n');
    const unique2 = [...set2].filter(item => !set1.has(item)).join('\n');

    // Set the output areas to the calculated values.
    document.getElementById('output1').value = duplicates;
    document.getElementById('output2').value = unique1;
    document.getElementById('output3').value = unique2;
};

document.getElementById('showButton1').onclick = function() {
    // Process and display the first specified number of unique names from list 1.
    const count = parseInt(document.getElementById('countInput1').value) || 0;
    const uniqueList1 = document.getElementById('output2').value.trim().split('\n');
    const formattedList = uniqueList1.slice(0, count).join(' $ ');
    document.getElementById('formattedOutput1').value = formattedList;
};

document.getElementById('showButton2').onclick = function() {
    // Process and display the first specified number of unique names from list 2.
    const count = parseInt(document.getElementById('countInput2').value) || 0;
    const uniqueList2 = document.getElementById('output3').value.trim().split('\n');
    const formattedList = uniqueList2.slice(0, count).join(' $ ');
    document.getElementById('formattedOutput2').value = formattedList;
};
