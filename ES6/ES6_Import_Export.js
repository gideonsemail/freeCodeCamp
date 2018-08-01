//Add the appropriate import statement that will allow the current file to use the capitalizeString function. The file where this function lives is called "string_functions", and it is in the same directory as the current file.

//Original
"use strict";
capitalizeString("hello!");

//Solution
import  { capitalizeString } from "string_functions";
//Since the file is in the same folder, dont need relative paths.

/****************************************************/

//Export to Reuse a code block
"use strict";
export const foo = "bar";//added the word "export" before each variable
export const bar = "foo";
