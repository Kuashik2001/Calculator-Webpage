$(document).ready(function()
{
    $('#One').click(function()
    {
        document.forms.display.value +=1;
    })
    
    $('#two').click(function()
    {
        document.forms.display.value +=2;
    })
    $('#three').click(function()
    {
        document.forms.display.value +=3;
    })
    $('#four').click(function()
    {
        document.forms.display.value +=4;
    })
    $('#five').click(function()
    {
        document.forms.display.value +=5;
    })
    $('#six').click(function()
    {
        document.forms.display.value +=6;
    })
    $('#seven').click(function()
    {
        document.forms.display.value +=7;
    })
    
    $('#eight').click(function()
    {
        document.forms.display.value +=8;
    })
    $('#nine').click(function()
    {
        document.forms.display.value +=9;
    })
    $('#zero').click(function()
    {
        document.forms.display.value +=0;
    })
    $('#add').click(function()
    {
        document.forms.display.value +='+';
    })
    $('minus').click(function()
    {
        document.forms.display.value +='-';
    })
    $('#divide').click(function()
    {
        document.forms.display.value +='/';
    })
    $('#multiply').click(function()
    {
        document.forms.display.value +='*';
    })
    
    $('#equal').click(function()
    {
        if(display.value ==="")
        {
            alert("No inputs are taken ")
        }
        else{
            document.forms.display.value=eval(document.forms.display.value);
        }
    })
    
    $('#clear').click(function()
    {
        document.forms.display.value ="";
    })
    $('#back').click(function(){
        document.forms.display.value=document.forms.display.value.slice(0,-1);
    })
})