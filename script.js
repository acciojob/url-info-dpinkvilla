//your JS code here. If required.
function URL_length(){
    let current=location.href;

    let current2=current.split('');
    return current2.length;
}
URL_length();
alert("The length of the URL is:"+URL_length());