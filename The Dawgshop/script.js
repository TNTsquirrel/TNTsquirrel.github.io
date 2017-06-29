document.getElementById('go').onclick = function() {
    var inputText = $('#text-input').val();
    var dawgifiedText = "My " + inputText + " dawg is acting weird..."
    document.getElementById('output').innerHTML = dawgifiedText;
};
