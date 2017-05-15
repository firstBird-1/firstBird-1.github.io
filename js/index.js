window.onload= function () {
    textAnimation(0);
}


function textAnimation(i) {
    const ndText = document.getElementById('js-banner-img-text');
    const strArr = `也许，你的前世是一枝深山里的海棠，在逢秋夜半，被卷入姑苏城外的客船。远风吹灭了沾霜的渔火，却吹不尽弯月沉没的忧伤。也许，我的前世就是忘忧河上撑篙的船夫，孤舟、蓑衣、斗笠，在红尘中摆渡。拾一抹花瓣，从此潇湘谢却，钟声不继……`;
    setTimeout(function () {
        if (i < strArr.length) {
            ndText.append(strArr[i]);
            let num = i;
            num++;
            textAnimation(num);
        } else {
            setTimeout(function () {
                document.getElementsByClassName('isShow-p')[0].style.display='block';
                document.getElementsByClassName('isShow-d1')[0].style.display='block';
            }, 1000);
        }
    }, 100);
}