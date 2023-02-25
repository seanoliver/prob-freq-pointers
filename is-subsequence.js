// add whatever parameters you deem necessary & write docstring
function isSubsequence(s1, s2) {

  let s1Index = 0;
  let s2Index = 0;

  while (s1Index < s1.length && s2Index < s2.length) {

    if (s1[s1Index] === s2[s2Index]) {
      s1Index++;
    }
    s2Index++;

  }
  return s1.length === s1Index;

}
