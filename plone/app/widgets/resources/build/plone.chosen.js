jQuery(function(e){function t(t){e("select.chosen",t).each(function(){var t={},n=e(this);t.allow_sortable=n.data("sortable")=="true"?!0:!1;var r=n.data("ajax")=="true"?"ajax":"default",r=n.data("date")=="true"?"date":"default";if(r=="ajax"){var i=n.data("ajax-url");n.ajaxChosen(t,{url:i,dataType:"ajax"},function(e){return e})}else r=="date"?n.dateChosen(t):n.chosen(t)})}e.plone&&e.plone.init?e.plone.init.register(t):t(document)});