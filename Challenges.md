 # Challenge 1 - Status (Available)
Each person in Italy has a unique identifying ID code issued by the national tax office after the birth registration: the Fiscal Code (Codice Fiscale). Check the Resources tab for more info on this.

Given an object containing the personal data of a person (name, surname, gender, and date of birth) return the 11 code characters as a string following these steps:

### Generate 3 capital letters from the surname:
- If it has:
  - **At least 3 consonants**: Use the first three consonants.  
    Example: `Newman -> NWM`.
  - **Less than 3 consonants**: Replace missing characters with vowels in the same order they appear.  
    Example: `Fox -> FXO | Hope -> HPO`.
  - **Less than 3 letters**: Use the consonant and vowel, then fill the third slot with "X".  
    Example: `Yu -> YUX`.

### Generate 3 capital letters from the name:
- If it has:
  - **Exactly 3 consonants**: Use the consonants in the order they appear.  
    Example: `Matt -> MTT`.
  - **More than 3 consonants**: Use the first, third, and fourth consonants.  
    Example: `Samantha -> SNT | Thomas -> TMS`.
  - **Less than 3 consonants**: Replace missing characters with vowels in the same order they appear.  
    Example: `Bob -> BBO | Paula -> PLA`.
  - **Less than 3 letters**: Use the consonant and vowel, then fill the third slot with "X".  
    Example: `Al -> LAX`.

### Generate 2 numbers, 1 letter, and 2 numbers from date of birth and gender:
- **Year of birth**: Take the last two digits of the year of birth.  
  Example: `1985 -> 85`.
- **Month of birth**: Generate a letter corresponding to the month of birth (January -> A | December -> T) using the table for conversion included in the code.
- **Day of birth**:
  - For **males**: Use the day of birth, adding a leading zero if less than 10.  
    Example: `9th -> 09 | 20th -> 20`.
  - For **females**: Add 40 to the day of birth.  
    Example: `9th -> 49 | 20th -> 60`.

### Examples
```javascript
fiscalCode({
  name: "Matt",
  surname: "Edabit",
  gender: "M",
  dob: "1/1/1900"
}) ➞ "DBTMTT00A01"

fiscalCode({
  name: "Helen",
  surname: "Yu",
  gender: "F",
  dob: "1/12/1950"
}) ➞ "YUXHLN50T41"

fiscalCode({
  name: "Mickey",
  surname: "Mouse",
  gender: "M",
  dob: "16/1/1928"
}) ➞ "MSOMKY28A16"
```
### Notes
- Code letters must be uppercase.
- Date of birth is given in `D/M/YYYY` format.
- The conversion table for months is already in the starting code.
- **Y** is not a vowel.

<div style="margin-top: 80px;"></div>


# Challenge 2 - Status (Available)
Create a function which returns the number of **true** values there are in an array.

```javascript
countTrue([true, false, false, true, false]) ➞ 2

countTrue([false, false, false, false]) ➞ 0

countTrue([]) ➞ 0
```

### Notes
- Return **0** if given an empty array.
- All array items are of the type bool (**true** or **false**).

<div style="margin-top: 80px;"></div>


# Challenge 3 - A Redundant Function - Status (Available)
**closures** <span style = "margin-right: 10px"></span> **functional_programming** <span style = "margin-right: 10px"></span> **language_fundamentals**

Write a function redundant that takes in a string str and returns a function that returns str.

### Examples
```javascript
const f1 = redundant("apple")
f1() ➞ "apple"

const f2 = redundant("pear")
f2() ➞ "pear"

const f3 = redundant("")
f3() ➞ ""
```
### Notes
Your function should return a function, not a string.


