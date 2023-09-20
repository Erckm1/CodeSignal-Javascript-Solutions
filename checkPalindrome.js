function solution(inputString) {
    var inv = inputString.split("").reverse().join("");;
    if(inputString==inv){
        return true;
    }
    return false;
}