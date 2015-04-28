/*	JFlex example: Recongnizing numbers (integers, octals, hexs) and identificators
	Luis Alberto Pérez García @UEM
	luixal@gmail.com
*/

/* USERCODE Area: Here go the imports I need (no package needed for this example :P): */

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;

%%

/* OPTIONS, DECLARATIONS AND MACROS Area: Here there's more stuff, inline commented: */

%class MyLexerExample   /* this sets the name I want to use to my class. Files will be named MyLexerExample.java and MyLexerExample.class once it's "compiled" */
%unicode                /* Maybe it's not necessary, but ey! any developer should work with text files in unicode format! :P */
%line                   /* switches on the line counter (stored in variable "yyline") */
%column                 /* switches on the column counter (stored in variable "yycolumn") */
%standalone             /* adds a main method that will expect an input file passed as an argument and will show any information about tokens to the standard output */
%type String            /* sets the type returned by yylex() function /*

/* Here goes an important part: Java Code. We include here the variables and methods we want to use, all this code will be copied literally in the resultant code. */

%init{ /* The %init directive allows us to introduce code in the class constructor. We are using it for initializing our variables */
this.tokensList = new ArrayList();
%init}

%{

private ArrayList tokensList; /* our variable for storing token's info that will be the output */

private void writeOutputFile() throws IOException { /* our method for writing the output file */
	String filename = "file.out";
	BufferedWriter out = new BufferedWriter(new FileWriter(filename));
	for (String s:this.tokensList) {
		System.out.println(s);
		out.write(s + "\n");
	}
	out.close();
}

%}

/* Here goes another importar part: Macros. We're using this to include the regular expressions that recognize out tokens.
Basically, macros are used to name regular expressions so actions below  */

Decimal     = [0-9]+                /* Macro for Integer numbers */
Octal       = "o"[0-7]+             /* Macro for Octal numbers */
Hex         = "0x"[0-9|A-F]+        /* Macro for Hexadecimal numbers */
Identifier  = [a-zA-Z][a-zA-Z0-9_]* /* Macro for Identifiers */

/* Here you can also include states, but as I don't know yet what use can I give them I'm not including them */

%%

/* LEXICAL RULES AND ACTIONS Area: Here we introduce the code to be executed when input matches a regular expression.
As we have named them using the macros we use those names here. */

{Decimal}       {this.tokensList.add("[" + yyline + "," + yycolumn + "] Decimal: " + yytext());}     /* Code executed when an Integer is found */
{Octal}         {this.tokensList.add("[" + yyline + "," + yycolumn + "] Octal: " + yytext());}       /* Code executed when an Octal is found */
{Hex}           {this.tokensList.add("[" + yyline + "," + yycolumn + "] Hexadecimal: " + yytext());} /* Code executed when an Hexadecimal is found */
{Identifier}    {this.tokensList.add("[" + yyline + "," + yycolumn + "] Identifier: " + yytext());}  /* Code executed when an Identifier is found */
\r|\n|\r\n|\u2028|\u2029|\u000B|\u000C|\u0085 {}           /* Lexical rule for avoiding crashing when and EOL is found, actually, we do nothing here */
<< EOF >>       {this.writeOutputFile(); System.exit(0);}  /* Code executen when reached the EOF */
.               {}                                         /* Lexical tule for avoinding crashing when something strange is found, we do nothing here too */