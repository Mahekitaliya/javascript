// Print a pattern using a while loop

{
    let i=1,j;
    while(i<=5)
    {
        j=1;
        while(j<=i)
        {
            document.write("*");
            j++;
        }
        document.write("<br>");
        i++;
    }  
}

