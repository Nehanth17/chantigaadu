fetch("day12.json").then(res=>{
		return res.json();
	}).then(data=>{
		console.log(data.persondata);
		a(data.persondata);

	})
	var body=document.getElementById("root");
	var main=document.createElement("div");
	body.appendChild(main);
	function a(adata) {
		var h1=document.createElement("h1");
		h1.textContent=adata.name;
		body.appendChild(h1);
		// body...
	}