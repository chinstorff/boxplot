var new_data = function (str) {
    var arr = str.split(/\D+/);

    localStorage.clear();

    for (var i = 0; i < arr.length; i++) {
	localStorage["ss_A" + (i+1)] = arr[i];
    }

    computeAll();
};

new_data_prompt = function () {
    var str = prompt('Paste your data', '');
    new_data(str);
};
