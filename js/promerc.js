
function pokaz(x,liczba1,liczba2) 
{
    
    var NAME = document.getElementById(x);
    var nameclass = document.getElementsByClassName("opisuslugi");
	
    if (liczba1 == 1 && liczba2 ==0)
	{
	
    document.getElementById(x).setAttribute('id', 'tablicarozwinieta');
	document.getElementById('tablicazawieszenie').setAttribute('id', 'pusty');
	nameclass[liczba1-1].style.display = " block";
    }
	if(liczba1 ==1 && liczba2 == 1 )
		{
		document.getElementById('tablicarozwinieta').setAttribute('id', 'tablicasilnik');
			document.getElementById('pusty').setAttribute('id', 'tablicazawieszenie');
			nameclass[liczba1-1].style.display = " none";
			
		}
	if (liczba1 == 2 && liczba2 ==0)
	{
	
    document.getElementById(x).setAttribute('id', 'tablicarozwinieta');
	document.getElementById('tablicaklimatyzacja').setAttribute('id', 'pusty');
	nameclass[liczba1-1].style.display = " block";
    }
	if(liczba1 ==2 && liczba2 == 1 )
		{
		document.getElementById('tablicarozwinieta').setAttribute('id', 'tablicahamulce');
			document.getElementById('pusty').setAttribute('id', 'tablicaklimatyzacja');
			nameclass[liczba1-1].style.display = " none";
			
		}
	if (liczba1 == 3 && liczba2 ==0)
	{
	
    document.getElementById(x).setAttribute('id', 'tablicarozwinieta');
	document.getElementById('tablicaelektronika').setAttribute('id', 'pusty');
	nameclass[liczba1-1].style.display = " block";
    }
	if(liczba1 ==3 && liczba2 == 1 )
		{
		document.getElementById('tablicarozwinieta').setAttribute('id', 'tablicaskrzynia');
			document.getElementById('pusty').setAttribute('id', 'tablicaelektronika');
			nameclass[liczba1-1].style.display = " none";
			
		}
	 if (liczba1 == 4 && liczba2 ==0)
	{
	
    document.getElementById(x).setAttribute('id', 'tablicarozwinieta2');
	document.getElementById('tablicasilnik').setAttribute('id', 'pusty');
		
	nameclass[liczba1-1].style.display = " block";
    }
	if(liczba1 == 4 && liczba2 == 1 )
		{
		document.getElementById('tablicarozwinieta2').setAttribute('id', 'tablicazawieszenie');
			document.getElementById('pusty').setAttribute('id', 'tablicasilnik');
			nameclass[liczba1-1].style.display = " none";
			
		}
		if (liczba1 == 5 && liczba2 ==0)
	{
	
    document.getElementById(x).setAttribute('id', 'tablicarozwinieta2');
	document.getElementById('tablicahamulce').setAttribute('id', 'pusty');
		
	nameclass[liczba1-1].style.display = " block";
    }
	if(liczba1 == 5 && liczba2 == 1 )
		{
		document.getElementById('tablicarozwinieta2').setAttribute('id', 'tablicaklimatyzacja');
			document.getElementById('pusty').setAttribute('id', 'tablicahamulce');
			nameclass[liczba1-1].style.display = " none";
			
		}
			if (liczba1 == 6 && liczba2 ==0)
	{
	
    document.getElementById(x).setAttribute('id', 'tablicarozwinieta2');
	document.getElementById('tablicaskrzynia').setAttribute('id', 'pusty');
		
	nameclass[liczba1-1].style.display = " block";
    }
	if(liczba1 == 6 && liczba2 == 1 )
		{
		document.getElementById('tablicarozwinieta2').setAttribute('id', 'tablicaelektronika');
			document.getElementById('pusty').setAttribute('id', 'tablicaskrzynia');
			nameclass[liczba1-1].style.display = " none";
			
		}
}   


