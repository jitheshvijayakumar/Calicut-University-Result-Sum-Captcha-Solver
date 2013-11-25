javascript: 
	(
	function () 
		{
    	var e = window.frames.mainFrame.document,
        	f = e.getElementById("fst").value,
        	s = e.getElementById("snd").value;
    		e.getElementById("sum").value = parseInt(f, 10) + parseInt(s, 10)
			}
		)
();