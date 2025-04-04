// Copyright (c) 2025, lokesh and contributors
// For license information, please see license.txt

frappe.ui.form.on("TestDoc", {
	select :function(frm) {
		frm.clear_table("store_data")
		frm.doc.select.forEach(function (element) {
			if(element.section)
			{
				var c = frm.add_child("store_data");
				c.parameter = element.section;
			}
		});
		
		frm.refresh_field("store_data");
		frm.fields_dict['store_data'].grid.wrapper.find(".grid-add-row").hide();
    	frm.fields_dict['store_data'].grid.wrapper.find(".grid-remove-rows").hide();
	}
});
