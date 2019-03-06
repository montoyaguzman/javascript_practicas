/*
  Test.describe("accum",function() {
  Test.it("Basic tests",function() {    
	Test.assertEquals(accum("ZpglnRxqenU"), "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu");
	Test.assertEquals(accum("NyffsGeyylB"), "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb");
	Test.assertEquals(accum("MjtkuBovqrU"), "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu");
	Test.assertEquals(accum("EvidjUnokmM"), "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm");
	Test.assertEquals(accum("HbideVbxncC"), "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc");
  })})
*/

function Piramid(s) {
	
  let letter = ""
  let capitalLetter = ""
  let lowerLetter = ""
  let element = ""
  let response = ""
  
  for(let i=0; i<s.length; i++) {
    letter = s.charAt(i)
    capitalLetter = letter.toUpperCase()
    lowerLetter = letter.toLowerCase()
    element = capitalLetter
    if (i > 0) {
      element += lowerLetter.repeat(i)
      
    }
    response+=element + "-"
  }
  
  return response.replace(/-$/,"")
  
}