let quoteString = "Failure is simply the opportunity to begin again this time more intelligently."

console.log(`Upper case string is: ${quoteString.toUpperCase()}`)

let authorString = "- Henry Ford"

let completeString = quoteString.concat(authorString)

console.log(`Concatenated string is: ${completeString}`)

let found = completeString.includes("Henry")
if (found)
  console.log("Henry was in completeString.")
else 
  console.log("Henry was NOT in completeString.")