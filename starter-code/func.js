module.exports={
    format:function(data)
	{

		console.log(JSON.stringify(data));
	   let allData=[];
	   let myrow=[];
	 
	   let cnt=0;
	  
     for (let i=0;i<data.length;i++){
		 let item={};
		 console.log("aaaaaa:"+data[i].title);
		 item.title=data[i].title;
		 item.director=data[i].director;
		 item.stars=data[i].stars;
		 item.image=data[i].image;
		 item.description=data[i].description;
		 item.showtimes=data[i].showtimes;
		 myrow.push(item);
		 
		 cnt++;
		 if (cnt==3){
		   cnt=0;	 
		   allData.push({myrow});	 
		   myrow=[];
		 }
	 }	
      if (myrow.length>1)
		   allData.push(myrow);
	  let allItems={allData}; 
      return allItems;	   
	
	},
	
}