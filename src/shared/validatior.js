class Validator {
2
3
  validateInputs(inputData) {
4
    let errorMsg = "";
5
    if(!inputData.name) {
6
      errorMsg +="Please enter name of this item.\n"
7
    }
8
    if(!inputData.summary) {
9
      errorMsg +="Please enter summary of this item.\n"
10
    }
11
    if(inputData.year.toString().match(/[^0-9]/g)) {
12
      errorMsg +="Year must be a number.\n"
13
    }
14
    if(inputData.country.length > 0 && !inputData.country.match(/^[a-z|A-Z][a-z|A-Z]$/)) {
15
      errorMsg +="Country code must be two letters.\n"
16
    }
17
    if(errorMsg.length == 0){
18
      return true;
19
    } else {
20
      alert(errorMsg);
21
      return false;
22
    }
23
  }
24
}
25
26
export default Validator;
