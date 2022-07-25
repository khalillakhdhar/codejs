function pgcd(x,y)
{

    let e1=x;
    let e2=y;
    while(e1 != e2)
    {
        if(e1>e2)
        {
            e1=e1-e2;
        }
        else
        {
            e2=e2-e1;
        }
    }
    console.log("PGCD est "+e1);
    /*
    x=18, y=14
    x=18-14=4
    y=14-4=10
    y=10-4=6
    y=6-4=2
    x=4-2=2
    e1=2
    */
}
function premier(p)
{
if(p<2)
return false;

    for(let i=2;i<=Math.sqrt(p);i++)
    {if(p % i==0) 
        {
    console.log(i +' divise  '+p);
    // facultatif
    return false;
        }
    }
return true;



}
pgcd(15,12);
if(premier(15))
console.log("l'entier est premier");
else
console.log("l entier n'est pas premier");