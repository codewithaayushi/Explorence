function check()
			{
				var name=document.getElementById("i1").value;
				var np=/(^[A-Z]{1}[a-z]+$|^[A-Z]{1}[a-z]+\s{1}[A-Z]{1}[a-z]+$)/; //^ caret symbol , (beginning ka first letter A-Z hona chaiye , a-z + 1 se zada lowercase hona , $ isi se end krna ,| either first OR second ,\s space in case kisi se do naamm dene hon.
				
				if(np.test(name))
				{
					console.log("valid name");
				}
				else
				{
					alert("Not a valid name");

				}


				var password=document.getElementById("i2").value;
				var p1=/[A-Z]+/;//ek ya us se zada hona chaiye
				var p2=/[a-z]+/;
				var p3=/[0-9]+/;
				var p4=/[!@#$%^&*]/;// ek b chlega
				var l=password.length;
				
				if(p1.test(password) && p2.test(password) && p3.test(password) && p4.test(password) && 6<=l && l<=20)
				{
					console.log("correct password")
				}
				else
				{
					if(l<6)
					{
						alert("Password length is short");
					}
					else
					{
						alert("Password should contain an uppercase, lowercase,numeric and atleast one special character");
					}
				}

				if(p1.test(password) && p2.test(password) && p3.test(password) && p4.test(password) && 6<=l && l<=20 && np.test(name)){
				window.open("PROJECT-main.html");
			}

			}

		
