export default function bubbleSort(arr) {
    var max = arr.length - 1;
    for (var j = 0; j < max; j++) {
        // 声明一个变量，作为标志位
        var done = true;
        for (var i = 0; i < max - j; i++) {
            if (arr[i] > arr[i + 1]) {
                var temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                done = false;
            }
        }
        if (done) {
            break;
        }
    }
    return arr;
}