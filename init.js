var frame = null;

plugin.wihd = function( tabName, tabURL )
{
       frame = document.createElement("IFRAME");
       frame.name = "WIHD";

       frame.src = tabURL;
       frame.id = "WIHD";
       frame.style.width = "100%";
       frame.style.height = "100%";
       frame.style.border = "0";
       this.attachPageToTabs(frame,tabName);
}

theTabs.onShow = function(id)
{
       if(id=="WIHD")
       {
               frame.src = "https://world-in-hd.net/"
       }
}

plugin.show = theWebUI.show;
	theWebUI.show = function()
	{
		plugin.show.call(this);
		theTabs.show("WIHD");
	}
	
plugin.wihd( "WIHD", "https://world-in-hd.net/" );
