var new_data = function (str) {
    var arr = str.split(/[^\d\.\-]/);

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

download_image = function (link) {
    link.href = document.getElementsByTagName('canvas')[0].toDataURL("image/png");
    link.download = 'boxplot.png';
};

document.getElementById('download_image').addEventListener('click', function () {
    download_image(this);
    console.log(this);
}, false);

    
