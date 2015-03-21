function GetOrders()
{
    var objRequest = new XMLHttpRequest();
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/getOrdersForCustomer/";
    url += document.getElementById("custid").value;
    
    objRequest.onreadystatechange = function()
    {
        if (objRequest.readyState == 4 && objRequest.status == 200)
        {
            var output = JSON.parse(objRequest.responseText);
            GenerateOutput(output);
        }
    }
    
    objRequest.open("GET", url, true);
    objRequest.send();
    
}

function GenerateOutput (result)
{
    var count = 0;
    var displaytext = "";
    
    for (count = 0; count <result.GetOrdersForCustomerResult.length; count++)
    {
        displaytext += result.GetOrdersForCustomerResult(count).OrderDate + ", " +result.GetOrdersForCustomerResult(count).OrderID + "<br>";
    }
    
    document.getElementById("orderdisplay").innerHTML = displaytext;
}
function MenuChoice()
{
    if (document.getElementById("menu").value == "Show Area 1")
    {
        document.getElementById("area1").style.visibility = "visible";
        document.getElementById("area2").style.visibility = "hidden";
        document.getElementById("area3").style.visibility = "hidden";
    }
    else if (document.getElementById("menu").value =="Show Area 2")
    {
        document.getElementById("area1").style.visibility = "hidden";
        document.getElementById("area2").style.visibility = "visible";
        document.getElementById("area3").style.visibility = "hidden";
    }
    else
    {
        document.getElementById("area1").style.visibility = "hidden";
        document.getElementById("area2").style.visibility = "hidden";
        document.getElementById("area3").style.visibility = "visibile";
    }
}