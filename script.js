// complete the given function

function palindrome(str){
	String temp=str.toLowerCase();
	var start=0;
	var end=str.length()-1;
	while(start<end){
		if(temp.charAt(start)!=temp.charAt(end)) return false;
		start++;
		end--;
	}
	return true;

}
module.exports = palindrome
