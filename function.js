function reportVote(){
    document.getElementById("containerContent").style.display = 'none';
    document.getElementById("containerResult").style.display = 'block';
    
    
    var e = document.getElementById("numCandidate");
    var numCandidate = e.options[e.selectedIndex].value;

    let sum = 0;
    let objVoteCandidate = {}

    for(let i=0;i<=numCandidate;i++){
        let counterVote = document.getElementById('counterBar'+i).innerHTML;
        let backgroundColor = document.getElementById("BarChart"+i).style.background
        let alias = document.getElementById('BarChartP'+i).innerHTML;

        if(objVoteCandidate[i] == undefined){
            objVoteCandidate[i] = {}
            
        }

        objVoteCandidate[i]['count'] = counterVote
        objVoteCandidate[i]['background'] = backgroundColor
        objVoteCandidate[i]['alias'] = alias

        sum += Number(counterVote)
        
    }

    
    var x = document.createElement("TABLE");
        x.setAttribute("id", "myTable");
        document.getElementById('tableResult').appendChild(x);

        var y = document.createElement("TR");
        y.setAttribute("id", "myTr");
        document.getElementById("myTable").appendChild(y);

        var z = document.createElement("TH");
        var t = document.createTextNode('Kandidat');
        z.appendChild(t);
        document.getElementById("myTr").appendChild(z);

        var z = document.createElement("TH");
        var t = document.createTextNode('Jumlah Suara');
        z.appendChild(t);
        document.getElementById("myTr").appendChild(z);

        var z = document.createElement("TH");
        var t = document.createTextNode('Persentase');
        z.appendChild(t);
        document.getElementById("myTr").appendChild(z);


    let counter = 0
    let totPercentage = 0;

    for(key in objVoteCandidate){
        var y = document.createElement("TR");
        y.setAttribute("id", "myTr"+counter);
        document.getElementById("myTable").appendChild(y);

        var z = document.createElement("TD");
        var t = document.createTextNode(objVoteCandidate[key].alias);
        z.appendChild(t);
        document.getElementById("myTr"+counter).appendChild(z);

        var z = document.createElement("TD");
        var t = document.createTextNode(objVoteCandidate[key].count);
        z.appendChild(t);
        document.getElementById("myTr" +counter).appendChild(z);

        var z = document.createElement("TD");
        var t = document.createTextNode(objVoteCandidate[key].count == '0' ? 0 : ((Number(objVoteCandidate[key].count) / sum) * 100).toFixed(2));
        totPercentage += objVoteCandidate[key].count == '0' ? 0 : +((Number(objVoteCandidate[key].count) / sum) * 100).toFixed(2)
        z.appendChild(t);
        document.getElementById("myTr" +counter).appendChild(z);

        counter++

    }

        var y = document.createElement("TR");
        y.setAttribute("id", "myTrTotal");
        document.getElementById("myTable").appendChild(y);

        var z = document.createElement("TD");
        var t = document.createTextNode('TOTAL');
        z.appendChild(t);
        document.getElementById("myTrTotal").appendChild(z);

        var z = document.createElement("TD");
        var t = document.createTextNode(sum);
        z.appendChild(t);
        document.getElementById("myTrTotal").appendChild(z);

        var z = document.createElement("TD");
        var t = document.createTextNode(totPercentage.toFixed(2));
        z.appendChild(t);
        document.getElementById("myTrTotal").appendChild(z);
}

function submitCandidate() {
    var numCandidate = 0;

    document.getElementById("dropDown").style.display = 'none';
    document.getElementById("nameInput").style.display = 'block';
    
    var e = document.getElementById("numCandidate");
    var numCandidate = e.options[e.selectedIndex].value;

    //create alias untuk masing masing candidate
    var arrCandidate = [];

    for(let i=0;i<numCandidate;i++){
        
        arrCandidate.push("nameCandidate"+i);

        newElement = document.createElement('input');
        newElement.setAttribute("id","nameCandidate"+i);
        newElement.setAttribute("type","text");
        document.getElementById("nameInput").appendChild(newElement);
        document.getElementById("nameCandidate"+i).style.display = 'block';
   
    }

    newElement = document.createElement('input');
    newElement.setAttribute("type","button");
    newElement.setAttribute("onclick","createBar("+numCandidate+","+arrCandidate+")");
    newElement.setAttribute("value", "Process");
    document.getElementById("nameInput").appendChild(newElement);
   
}

var flagAlias = true;
function createBar(numCandidate,arrCandidate) {

    document.getElementById("containerHeader").style.display = 'none';
    document.getElementById("containerContent").style.display = 'block';

    document.getElementById("voteChart").style.display = 'block';
    document.getElementById("buttonChart").style.display = 'block';
    
    let r = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);

    for(let i=0;i<numCandidate;i++){
        

        if (flagAlias) {

            container = document.createElement('div');
            container.className = "containerBar";
            container.setAttribute('id','containerBar'+i);
            document.getElementById("voteChart").appendChild(container);


            newBar = document.createElement('div');
            newBar.setAttribute("id", "BarChart"+i);
            newBar.className = "classBar";

            counterBarP = document.createElement('P');
            counterBarP.setAttribute("id", "counterBar"+i);

            counterText = document.createTextNode("0");
            counterBarP.appendChild(counterText);

            document.getElementById("containerBar"+i).appendChild(newBar);
            document.getElementById("BarChart"+i).appendChild(counterBarP);
            


            //membuat alias di sisi bar
            aliasBar = document.createElement('div');
            aliasBar.setAttribute("id", "aliasBarChart"+i);
            aliasBar.className = "aliasBar";

            aliasBarP = document.createElement('P');
            aliasBarP.setAttribute("id", "BarChartP"+i);

            alias = document.getElementById("nameCandidate"+i).value;
            textBarP = document.createTextNode(alias);

            aliasBarP.appendChild(textBarP);
            aliasBar.appendChild(aliasBarP);
        
            document.getElementById("containerBar"+i).appendChild(aliasBar);
    

        colorA = "rgb("+r+", "+g+", "+b+")";
        
        if (b > 140 ){
            b -= 100;
        }

        if (g < 150 ){
            g += 50;
        }


        colorB = "rgb("+r+", "+g+", "+b+")";

        
        document.getElementById("BarChart"+i).style.width = '80px';
        document.getElementById("BarChart"+i).style.height = '80px';
        document.getElementById("BarChart"+i).style.background = "linear-gradient(to left, "+colorA +"0%, "+colorB +" 100%)";
        //document.getElementById("BarChart"+i).appendChild(newBar);


         r = Math.round(Math.random()*255);
         b = Math.round(Math.random()*255);
         g = Math.round(Math.random()*255);




        button = document.createElement('div');
        button.setAttribute("id", "idButton"+i);
        button.className = "plusMinusButton";
        document.getElementById("buttonChart").appendChild(button);
        

        buttonHeader = document.createElement('div');
        buttonHeader.setAttribute("id", "btnHeader"+i);
        buttonHeader.className ="btnHeader"
        document.getElementById("idButton"+i).appendChild(buttonHeader);


        buttonHeader = document.createElement('div');
        buttonHeader.className ="colorHeader"
        buttonHeader.setAttribute("id", "colorHeader"+i);

        colorHeader = document.getElementById("BarChart"+i).style.background;

        document.getElementById("btnHeader"+i).appendChild(buttonHeader);
        document.getElementById("colorHeader"+i).style.background = colorHeader;


        buttonHeader = document.createElement('div');
        buttonHeader.className ="aliasHeader"
        buttonHeader.setAttribute("id", "aliasHeader"+i);
        
        document.getElementById("btnHeader"+i).appendChild(buttonHeader);


        aliasHeaderP = document.createElement('P');

        alias = document.getElementById("nameCandidate"+i).value;
        textBarP = document.createTextNode(alias);

        aliasHeaderP.appendChild(textBarP);
        
        document.getElementById("aliasHeader"+i).appendChild(aliasHeaderP);


        button = document.createElement('div');
        button.className ="buttonContainer"
        button.setAttribute("id", "buttonContainer"+i);
        document.getElementById("idButton"+i).appendChild(button);

        newElement = document.createElement('input');
        newElement.className = 'plusButton'
        newElement.setAttribute("type","button");
        newElement.setAttribute("value","+");
        newElement.setAttribute("onclick","votePlus("+i+")");
        document.getElementById("buttonContainer"+i).appendChild(newElement);


        newElement = document.createElement('input');
        newElement.className = 'minusButton'
        newElement.setAttribute("type","button");
        newElement.setAttribute("value","-");
        newElement.setAttribute("onclick","voteMinus("+i+")");
        document.getElementById("buttonContainer"+i).appendChild(newElement);

        }

    }

    flagAlias = false;

            container = document.createElement('div');
            container.className = "containerBar";
            container.setAttribute('id','containerBar'+numCandidate);
            document.getElementById("voteChart").appendChild(container);

            newBar = document.createElement('div');
            newBar.setAttribute("id", "BarChart"+numCandidate);
            newBar.className = "classBar";

            counterBarP = document.createElement('P');
            counterBarP.setAttribute("id", "counterBar"+numCandidate);

            counterText = document.createTextNode("0");
            counterBarP.appendChild(counterText);

            document.getElementById("containerBar"+numCandidate).appendChild(newBar);
            document.getElementById("BarChart"+numCandidate).appendChild(counterBarP);
            


            //membuat alias di sisi bar
            aliasBar = document.createElement('div');
            aliasBar.setAttribute("id", "aliasBarChart"+numCandidate);
            aliasBar.className = "aliasBar";

            aliasBarP = document.createElement('P');
            aliasBarP.setAttribute("id", "BarChartP"+numCandidate);

            textBarP = document.createTextNode('tidak sah');

            aliasBarP.appendChild(textBarP);
            aliasBar.appendChild(aliasBarP);
        
            document.getElementById("containerBar"+numCandidate).appendChild(aliasBar);
    

        colorA = "rgb(255,255,0)";
        
        document.getElementById("BarChart"+numCandidate).style.width = '80px';
        document.getElementById("BarChart"+numCandidate).style.height = '80px';
        document.getElementById("BarChart"+numCandidate).style.background = "rgb(255,204,0)";
        //document.getElementById("BarChart"+i).appendChild(newBar);


        button = document.createElement('div');
        button.setAttribute("id", "idButton"+numCandidate);
        button.className = "plusMinusButton";
        document.getElementById("buttonChart").appendChild(button);
        

        buttonHeader = document.createElement('div');
        buttonHeader.setAttribute("id", "btnHeader"+numCandidate);
        buttonHeader.className ="btnHeader"
        document.getElementById("idButton"+numCandidate).appendChild(buttonHeader);


        buttonHeader = document.createElement('div');
        buttonHeader.className ="colorHeader"
        buttonHeader.setAttribute("id", "colorHeader"+numCandidate);

        colorHeader = document.getElementById("BarChart"+numCandidate).style.background;

        document.getElementById("btnHeader"+numCandidate).appendChild(buttonHeader);
        document.getElementById("colorHeader"+numCandidate).style.background = colorHeader;


        buttonHeader = document.createElement('div');
        buttonHeader.className ="aliasHeader"
        buttonHeader.setAttribute("id", "aliasHeader"+numCandidate);
        
        document.getElementById("btnHeader"+numCandidate).appendChild(buttonHeader);


        aliasHeaderP = document.createElement('P');

        textBarP = document.createTextNode('tidak sah');

        aliasHeaderP.appendChild(textBarP);
        
        document.getElementById("aliasHeader"+numCandidate).appendChild(aliasHeaderP);


        button = document.createElement('div');
        button.className ="buttonContainer"
        button.setAttribute("id", "buttonContainer"+numCandidate);
        document.getElementById("idButton"+numCandidate).appendChild(button);

        newElement = document.createElement('input');
        newElement.className = 'plusButton'
        newElement.setAttribute("type","button");
        newElement.setAttribute("value","+");
        newElement.setAttribute("onclick","votePlus("+numCandidate+")");
        document.getElementById("buttonContainer"+numCandidate).appendChild(newElement);


        newElement = document.createElement('input');
        newElement.className = 'minusButton'
        newElement.setAttribute("type","button");
        newElement.setAttribute("value","-");
        newElement.setAttribute("onclick","voteMinus("+numCandidate+")");
        document.getElementById("buttonContainer"+numCandidate).appendChild(newElement);
}


function voteMinus(BarChartId){
  
    let widthBar = document.getElementById("BarChart"+BarChartId).clientWidth;

    widthBar -= 2 ;
    document.getElementById("BarChart"+BarChartId).style.width = widthBar + "px";

    let counter = document.getElementById("counterBar"+BarChartId).innerHTML;
    document.getElementById("counterBar"+BarChartId).innerHTML = Number(counter)-1;
}

function votePlus(BarChartId){
  
    let widthBar = document.getElementById("BarChart"+BarChartId).clientWidth;
   
    widthBar += 2 ;
    document.getElementById("BarChart"+BarChartId).style.width = widthBar + "px";

    let counter = document.getElementById("counterBar"+BarChartId).innerHTML;
    document.getElementById("counterBar"+BarChartId).innerHTML = Number(counter)+1;
}
