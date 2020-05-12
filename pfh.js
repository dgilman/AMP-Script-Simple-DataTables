document.querySelectorAll('.pfh-datatable').forEach(table => {
    const dt = new datatables.DataTable(table, {
        prerendered: true,
        searchable: true,
        sortable: true,
        footer: false,
        paging: false,
    });
});
